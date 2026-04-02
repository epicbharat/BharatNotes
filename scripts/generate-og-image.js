#!/usr/bin/env node
/**
 * BharatNotes — Dynamic OG Image Generator (Modern Minimal)
 *
 * Usage:
 *   node scripts/generate-og-image.js
 *   node scripts/generate-og-image.js --title "..." --desc "..." --tags "..." --out path.jpg
 *
 * Output: 1200 × 630 JPEG
 */

"use strict";

const fs   = require("fs");
const path = require("path");
const { Jimp, loadFont, measureText } = require("jimp");

const ROOT     = path.resolve(__dirname, "..");
const FONT_DIR = path.join(ROOT, "node_modules", "@jimp", "plugin-print", "fonts", "open-sans");
const LOGO     = path.join(ROOT, "BHARATNOTES_cicrclelogo.png");

const args = process.argv.slice(2);
const get  = (f) => { const i = args.indexOf(f); return i !== -1 ? args[i + 1] : null; };

const TITLE = get("--title") || "BharatNotes: Free UPSC GS Notes";
const DESC  = get("--desc")  || "Fact-verified notes for UPSC Civil Services Prelims & Mains";
const TAGS  = get("--tags")  || "Free · UPSC Prelims · GS1 · GS2 · GS3 · GS4 · Static GK";
const OUT   = get("--out")   || path.join(ROOT, "src", "images", "logos", "bharatnotes-og.jpg");

// ── Colour palette ────────────────────────────────────────────────────────────
const NAVY_1  = 0x0a1628ff;  // deep navy (top-left)
const NAVY_2  = 0x152338ff;  // lighter navy (bottom-right gradient end)
const GOLD    = 0xd4a017ff;  // brand gold
const WHITE   = 0xffffffff;
const MUTED   = 0x8899bbff;  // muted blue-grey for small labels

// ── Helpers ───────────────────────────────────────────────────────────────────

function lerp(a, b, t) { return Math.round(a + (b - a) * t); }

function lerpColor(c1, c2, t) {
  const r = lerp((c1 >>> 24) & 0xff, (c2 >>> 24) & 0xff, t);
  const g = lerp((c1 >>> 16) & 0xff, (c2 >>> 16) & 0xff, t);
  const b = lerp((c1 >>>  8) & 0xff, (c2 >>>  8) & 0xff, t);
  return (((r << 24) | (g << 16) | (b << 8) | 0xff) >>> 0);
}

/** Diagonal gradient top-left → bottom-right */
function applyGradient(img, c1, c2) {
  const W = img.width, H = img.height;
  const diag = Math.sqrt(W * W + H * H);
  img.scan(0, 0, W, H, function(x, y) {
    const t = Math.min(1, (x + y) / (W + H) * 1.6);
    this.setPixelColor(lerpColor(c1, c2, t), x, y);
  });
}

function hline(img, x, y, w, colour) {
  for (let i = x; i < x + w && i < img.width; i++) img.setPixelColor(colour, i, y);
}

function vline(img, x, y, h, colour) {
  for (let i = y; i < y + h && i < img.height; i++) img.setPixelColor(colour, x, i);
}

function rect(img, x, y, w, h, colour) {
  for (let row = y; row < Math.min(y + h, img.height); row++)
    for (let col = x; col < Math.min(x + w, img.width); col++)
      img.setPixelColor(colour, col, row);
}

/** Word-wrap to maxWidth, return string array */
function wrap(font, text, maxWidth) {
  const words = String(text).split(/\s+/);
  const lines = []; let line = "";
  for (const w of words) {
    const t = line ? `${line} ${w}` : w;
    if (measureText(font, t) <= maxWidth) { line = t; }
    else { if (line) lines.push(line); line = w; }
  }
  if (line) lines.push(line);
  return lines;
}

// ── Main ──────────────────────────────────────────────────────────────────────
async function main() {
  fs.mkdirSync(path.dirname(OUT), { recursive: true });

  const W = 1200, H = 630;

  // Fonts
  const f64w = await loadFont(path.join(FONT_DIR, "open-sans-64-white",  "open-sans-64-white.fnt"));
  const f32w = await loadFont(path.join(FONT_DIR, "open-sans-32-white",  "open-sans-32-white.fnt"));
  const f16w = await loadFont(path.join(FONT_DIR, "open-sans-16-white",  "open-sans-16-white.fnt"));

  // Canvas with diagonal gradient
  const img = new Jimp({ width: W, height: H, color: NAVY_1 });
  applyGradient(img, NAVY_1, NAVY_2);

  // Subtle left-side overlay — slightly darker strip behind the logo
  for (let x = 0; x < 420; x++) {
    const alpha = 0.08 * (1 - x / 420);
    for (let y = 0; y < H; y++) {
      const existing = img.getPixelColor(x, y);
      const r = Math.round(((existing >>> 24) & 0xff) * (1 - alpha * 0.6));
      const g = Math.round(((existing >>> 16) & 0xff) * (1 - alpha * 0.6));
      const b = Math.round(((existing >>>  8) & 0xff) * (1 - alpha * 0.3));
      img.setPixelColor((((r << 24) | (g << 16) | (b << 8) | 0xff) >>> 0), x, y);
    }
  }

  // ── Gold accent — left edge (4px) + bottom edge (4px) ──
  for (let y = 0; y < H; y++) rect(img, 0, y, 4, 1, GOLD);
  for (let x = 0; x < W; x++) rect(img, x, H - 4, 1, 4, GOLD);

  // ── Circle logo — left panel, centred ──
  const logoBuf = fs.readFileSync(LOGO);
  const logo    = await Jimp.fromBuffer(logoBuf);
  const LSIZ = 190;
  logo.resize({ w: LSIZ, h: LSIZ });
  const lx = Math.round((420 - LSIZ) / 2);
  const ly = Math.round((H - LSIZ) / 2) - 30;
  img.composite(logo, lx, ly);

  // Brand name under logo
  const brand  = "BharatNotes";
  const brandW = measureText(f32w, brand);
  img.print({ font: f32w, x: Math.round((420 - brandW) / 2), y: ly + LSIZ + 16, text: brand });

  // Thin gold rule under brand
  const ruleW = 100;
  for (let t = 0; t < 2; t++)
    hline(img, Math.round((420 - ruleW) / 2), ly + LSIZ + 57 + t, ruleW, GOLD);

  // "bharatnotes.com" in muted below rule
  const url  = "bharatnotes.com";
  const urlW = measureText(f16w, url);
  img.print({ font: f16w, x: Math.round((420 - urlW) / 2), y: ly + LSIZ + 68, text: url });

  // ── Right panel — typography only, no boxes ──
  const tx    = 480;
  const maxTW = W - tx - 60;

  // Small UPSC label — muted, uppercase
  img.print({ font: f16w, x: tx, y: 68, text: "UPSC CIVIL SERVICES  ·  bharatnotes.com" });

  // Thin gold rule (decorative, 60px)
  for (let t = 0; t < 2; t++)
    hline(img, tx, 100 + t, 60, GOLD);

  // Title — large, max 2 lines
  const titleLines = wrap(f64w, TITLE, maxTW);
  let ty = 120;
  for (const line of titleLines.slice(0, 2)) {
    img.print({ font: f64w, x: tx, y: ty, text: line });
    ty += 74;
  }

  // Description — 16px, max 2 lines, below title
  ty += 10;
  const descLines = wrap(f16w, DESC, maxTW);
  for (const line of descLines.slice(0, 2)) {
    img.print({ font: f16w, x: tx, y: ty, text: line });
    ty += 24;
  }

  // Thin rule before tags
  ty += 20;
  for (let t = 0; t < 1; t++)
    hline(img, tx, ty + t, maxTW, 0x2a3d5aff);
  ty += 14;

  // Tags — plain text, middle-dot separated, no boxes
  const tagStr = TAGS.split("·").map(s => s.trim()).filter(Boolean).join("  ·  ");
  img.print({ font: f16w, x: tx, y: ty, text: tagStr });

  // ── Save ──
  const buf = await img.getBuffer("image/jpeg", { quality: 93 });
  fs.writeFileSync(OUT, buf);
  const kb = Math.round(fs.statSync(OUT).size / 1024);
  console.log(`✅ OG image — 1200×630 — ${kb} KB — "${TITLE}"`);
  console.log(`   → ${OUT}`);
}

main().catch(e => { console.error("❌", e.message); process.exit(1); });
