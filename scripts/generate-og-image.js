#!/usr/bin/env node
/**
 * BharatNotes — Dynamic OG Image Generator
 * Usage: node scripts/generate-og-image.js [--title "..."] [--desc "..."] [--tags "..."] [--out path.jpg]
 * Output: 1200 × 630 JPEG
 *
 * Also exports: renderOG({ title, desc, tags, out }) for batch use
 */
"use strict";

const fs   = require("fs");
const path = require("path");
const { Jimp, loadFont, measureText } = require("jimp");

const ROOT     = path.resolve(__dirname, "..");
const FONT_DIR = path.join(ROOT, "node_modules", "@jimp", "plugin-print", "fonts", "open-sans");
const LOGO     = path.join(ROOT, "BHARATNOTES_cicrclelogo.png");

// ── Palette ───────────────────────────────────────────────────────────────────
const BG1   = 0x080f1eff;   // near-black navy
const BG2   = 0x0d1a30ff;   // deep navy
const BG3   = 0x111e36ff;   // navy mid  (gradient end)
const GOLD  = 0xd4a017ff;   // brand gold
const GOLD2 = 0xb8860bff;   // dark gold
const DIM   = 0x3a4e6aff;   // muted blue-grey

// ── Colour math ───────────────────────────────────────────────────────────────
const ch = (c, s) => (c >>> s) & 0xff;
const rgba = (r, g, b, a=255) => (((r<<24)|(g<<16)|(b<<8)|a) >>> 0);

function lerpc(c1, c2, t) {
  return rgba(
    Math.round(ch(c1,24) + (ch(c2,24)-ch(c1,24))*t),
    Math.round(ch(c1,16) + (ch(c2,16)-ch(c1,16))*t),
    Math.round(ch(c1, 8) + (ch(c2, 8)-ch(c1, 8))*t),
  );
}

function blendOver(base, overlay, alpha) {
  const a = alpha / 255;
  return rgba(
    Math.round(ch(base,24)*(1-a) + ch(overlay,24)*a),
    Math.round(ch(base,16)*(1-a) + ch(overlay,16)*a),
    Math.round(ch(base, 8)*(1-a) + ch(overlay, 8)*a),
  );
}

// ── Draw helpers ──────────────────────────────────────────────────────────────
function px(img, x, y, c) {
  if (x >= 0 && x < img.width && y >= 0 && y < img.height) img.setPixelColor(c, x, y);
}

function hline(img, x, y, w, c) {
  for (let i = x; i < x+w; i++) px(img, i, y, c);
}

function rect(img, x, y, w, h, c) {
  for (let row = y; row < y+h; row++) hline(img, x, row, w, c);
}

/** Linear gradient fill (diagonal top-left → bottom-right) */
function fillGradient(img, c1, c2) {
  const W = img.width, H = img.height;
  img.scan(0, 0, W, H, function(x, y) {
    this.setPixelColor(lerpc(c1, c2, (x + y) / (W + H)), x, y);
  });
}

/** Radial soft glow: adds warm overlay around (cx,cy), radius r, strength 0-1 */
function radialGlow(img, cx, cy, r, glowColour, strength) {
  const x0 = Math.max(0, cx-r), x1 = Math.min(img.width,  cx+r);
  const y0 = Math.max(0, cy-r), y1 = Math.min(img.height, cy+r);
  for (let y = y0; y < y1; y++) {
    for (let x = x0; x < x1; x++) {
      const d  = Math.sqrt((x-cx)**2 + (y-cy)**2);
      if (d >= r) continue;
      const t  = 1 - d / r;
      const a  = Math.round(t * t * strength * 255);  // quadratic falloff
      const base = img.getPixelColor(x, y);
      img.setPixelColor(blendOver(base, glowColour, a), x, y);
    }
  }
}

/** Word-wrap: returns array of lines fitting maxWidth. \n forces a line break. */
function wrap(font, text, maxWidth) {
  const segments = String(text).split("\n");
  const lines = [];
  for (const seg of segments) {
    const words = seg.split(/\s+/).filter(Boolean);
    if (!words.length) { lines.push(""); continue; }
    let line = "";
    for (const w of words) {
      const t = line ? `${line} ${w}` : w;
      if (measureText(font, t) <= maxWidth) { line = t; }
      else { if (line) lines.push(line); line = w; }
    }
    if (line) lines.push(line);
  }
  return lines;
}

/** Sanitise text for Open Sans bitmap font (strips chars outside basic Latin) */
function sanitise(str) {
  return String(str || "")
    .replace(/\u2014|\u2013/g, " - ")   // em-dash, en-dash
    .replace(/\u2018|\u2019/g, "'")     // curly single quotes
    .replace(/\u201c|\u201d/g, '"')     // curly double quotes
    .replace(/[^\x20-\x7E]/g, "");      // drop anything outside printable ASCII
}

// ── Cached font loader (loads once per process) ───────────────────────────────
let _fonts = null;
async function getFonts() {
  if (_fonts) return _fonts;
  _fonts = {
    f64: await loadFont(path.join(FONT_DIR, "open-sans-64-white", "open-sans-64-white.fnt")),
    f32: await loadFont(path.join(FONT_DIR, "open-sans-32-white", "open-sans-32-white.fnt")),
    f16: await loadFont(path.join(FONT_DIR, "open-sans-16-white", "open-sans-16-white.fnt")),
  };
  return _fonts;
}

// ── Core renderer ─────────────────────────────────────────────────────────────
async function renderOG({ title, desc, tags, out }) {
  const TITLE = title  ? sanitise(title) : "Master the\nCivil Services Examination.";
  const DESC  = desc   ? sanitise(desc)  : "Complete UPSC GS study material - subject-wise notes, Prelims PYQs, Mains answer frameworks, and syllabus tracking. Foundation to Interview.";
  const TAGS  = sanitise(tags || "Free · UPSC Prelims · GS1 · GS2 · GS3 · GS4 · Static GK");
  const OUT   = out || path.join(ROOT, "src", "images", "logos", "bharatnotes-og.jpg");

  fs.mkdirSync(path.dirname(OUT), { recursive: true });

  const W = 1200, H = 630;
  const SPLIT = 400;  // left panel width

  const { f64, f32, f16 } = await getFonts();

  // ── Canvas ──
  const img = new Jimp({ width: W, height: H, color: BG1 });

  // Full-canvas diagonal gradient
  fillGradient(img, BG1, BG3);

  // Subtle darker left-panel wash
  for (let x = 0; x < SPLIT; x++) {
    const wash = Math.round(18 * (1 - x / SPLIT));
    for (let y = 0; y < H; y++) {
      const base = img.getPixelColor(x, y);
      img.setPixelColor(rgba(
        Math.max(0, ch(base,24)-wash),
        Math.max(0, ch(base,16)-wash),
        Math.max(0, ch(base, 8)-wash),
      ), x, y);
    }
  }

  // ── Circle logo ──
  const logoBuf  = fs.readFileSync(LOGO);
  const logo     = await Jimp.fromBuffer(logoBuf);
  const LSIZ     = 210;
  logo.resize({ w: LSIZ, h: LSIZ });
  const lx = Math.round((SPLIT - LSIZ) / 2);
  const ly = Math.round(H / 2 - LSIZ / 2) - 28;  // slightly above center
  const glowCX = lx + LSIZ / 2;
  const glowCY = ly + LSIZ / 2;

  // Radial warm glow behind logo
  radialGlow(img, glowCX, glowCY, 260, 0xc08010ff, 0.22);
  // Tighter brighter glow
  radialGlow(img, glowCX, glowCY, 150, 0xd4a017ff, 0.12);

  img.composite(logo, lx, ly);

  // Brand name below logo
  const brand  = "BharatNotes";
  const bW     = measureText(f32, brand);
  img.print({ font: f32, x: Math.round((SPLIT - bW) / 2), y: ly + LSIZ + 18, text: brand });

  // Gold rule under brand
  const ruleX = Math.round((SPLIT - 80) / 2);
  const ruleY = ly + LSIZ + 60;
  rect(img, ruleX + 8,  ruleY, 64, 2, GOLD);
  rect(img, ruleX,      ruleY, 8,  2, GOLD2);
  rect(img, ruleX + 72, ruleY, 8,  2, GOLD2);

  // URL below rule
  const url  = "bharatnotes.com";
  const uW   = measureText(f16, url);
  img.print({ font: f16, x: Math.round((SPLIT - uW) / 2), y: ruleY + 10, text: url });

  // ── Subtle vertical separator ──
  for (let y = 60; y < H - 60; y++) {
    const a = Math.round(30 * Math.sin(Math.PI * (y - 60) / (H - 120)));
    px(img, SPLIT, y, rgba(ch(BG2,24), ch(BG2,16)+a, ch(BG2,8)+a*2, 255));
  }

  // ── Right panel ──
  const rx    = SPLIT + 60;
  const maxW  = W - rx - 50;

  const allTitleLines = wrap(f64, TITLE, maxW);
  const titleLines = allTitleLines.slice(0, 3);
  // If truncated beyond 3 lines, add "..." to last rendered line
  if (allTitleLines.length > 3) {
    const last = titleLines[titleLines.length - 1];
    const words = last.split(" ");
    // Remove words until "..." fits
    while (words.length > 1 && measureText(f64, words.join(" ") + "...") > maxW) words.pop();
    titleLines[titleLines.length - 1] = words.join(" ") + "...";
  }
  const descLines  = wrap(f16, DESC, maxW).slice(0, 2);
  const blockH = 20 + 18 + 6 + titleLines.length * 74 + 14 + descLines.length * 24 + 32 + 26;
  let ry = Math.round((H - blockH) / 2);

  img.print({ font: f16, x: rx, y: ry, text: "UPSC CIVIL SERVICES  EXAM  PREP" });
  ry += 20;

  rect(img, rx, ry, 40, 3, GOLD);
  rect(img, rx + 40, ry, 120, 1, GOLD2);
  ry += 18;

  for (const line of titleLines) {
    img.print({ font: f64, x: rx, y: ry, text: line });
    ry += 74;
  }
  ry += 14;

  for (const line of descLines) {
    img.print({ font: f16, x: rx, y: ry, text: line });
    ry += 24;
  }
  ry += 20;

  rect(img, rx, ry, maxW, 1, DIM);
  ry += 12;

  const tagStr = TAGS.split("·").map(s => s.trim()).filter(Boolean).join("  ·  ");
  img.print({ font: f16, x: rx, y: ry, text: tagStr });

  // ── Accents ──
  rect(img, 0, H - 4, W, 4, GOLD);
  rect(img, 0, 0, 4, H, GOLD);

  const wm  = "bharatnotes.com";
  const wmW = measureText(f16, wm);
  img.print({ font: f16, x: W - wmW - 20, y: H - 28, text: wm });

  // ── Vignette ──
  const vigR = 420;
  for (const [cx, cy] of [[0,0],[W,0],[0,H],[W,H]]) {
    for (let y = 0; y < H; y++) {
      for (let x = 0; x < W; x++) {
        const d = Math.sqrt((x-cx)**2 + (y-cy)**2);
        if (d >= vigR) continue;
        const t = 0.25 * (1 - d/vigR) ** 1.8;
        const base = img.getPixelColor(x, y);
        img.setPixelColor(rgba(
          Math.round(ch(base,24)*(1-t)),
          Math.round(ch(base,16)*(1-t)),
          Math.round(ch(base, 8)*(1-t)),
        ), x, y);
      }
    }
  }

  // ── Save ──
  const buf = await img.getBuffer("image/jpeg", { quality: 94 });
  fs.writeFileSync(OUT, buf);
  return OUT;
}

// ── CLI entry point ───────────────────────────────────────────────────────────
if (require.main === module) {
  const args = process.argv.slice(2);
  const get  = (f) => { const i = args.indexOf(f); return i !== -1 ? args[i + 1] : null; };

  renderOG({
    title: get("--title"),
    desc:  get("--desc"),
    tags:  get("--tags"),
    out:   get("--out"),
  }).then(out => {
    const title = get("--title") || "BharatNotes: Free UPSC GS Notes";
    const kb = Math.round(require("fs").statSync(out).size / 1024);
    console.log(`✅ OG image — 1200×630 — ${kb} KB — "${title}"`);
    console.log(`   → ${out}`);
  }).catch(e => { console.error("❌", e.message); process.exit(1); });
}

module.exports = { renderOG };
