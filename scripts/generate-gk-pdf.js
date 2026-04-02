#!/usr/bin/env node
/**
 * BharatNotes — Static GK Compendium PDF Generator
 *
 * Improvements applied:
 *   1. Clickable TOC — anchor links preserved by Chromium as internal PDF links
 *   2. Running chapter headers — per-chapter named @page rules via CSS paged media
 *   3. Exam traps styled as cheat-sheet — last .gk-section per chapter gets
 *      distinct grey-background, page-break-before, clean table style
 *   4. Author photo compressed — jimp resizes 851 KB PNG → ~4 KB JPEG before
 *      embedding, cutting HTML payload from ~3.2 MB to ~2 MB
 *   5. GS Paper Index — second TOC grouped by GS1/GS2/GS3 paper relevance
 *   6. "How to use" intro page — revision guide before the main TOC
 *
 * Run after `npm run build`:
 *   node scripts/generate-gk-pdf.js
 *
 * Output: src/downloads/bharatnotes-static-gk.pdf
 */

"use strict";

const fs    = require("fs");
const path  = require("path");
const https = require("https");
const Jimp  = require("jimp");

// ── Config ────────────────────────────────────────────────────────────────────

const API_URL     = "https://rbse-pdf.vercel.app/api/generate";
const ROOT        = path.resolve(__dirname, "..");
const DIST_DIR    = path.join(ROOT, "dist");
const OUTPUT_DIR  = path.join(ROOT, "src", "downloads");
const OUTPUT_FILE = path.join(OUTPUT_DIR, "bharatnotes-static-gk.pdf");
const FONTS_DIR   = path.join(ROOT, "src", "fonts");
const IMG_DIR     = path.join(ROOT, "src", "img");

const API_TIMEOUT_MS = 120_000;

const GENERATED_DATE = new Date().toLocaleDateString("en-IN", {
  day: "numeric", month: "long", year: "numeric"
});
const CURRENT_YEAR = new Date().getFullYear();

// ── Chapter manifest ──────────────────────────────────────────────────────────
// gs: primary GS papers for the GS Index page

const CHAPTERS = [
  { slug: "constitutional-provisions",   title: "Constitutional Provisions",          group: "Polity & Constitution",    gs: ["GS2"] },
  { slug: "schedules",                   title: "Schedules of the Constitution",       group: "Polity & Constitution",    gs: ["GS2"] },
  { slug: "constitutional-bodies",       title: "Constitutional & Statutory Bodies",   group: "Polity & Constitution",    gs: ["GS2"] },
  { slug: "committees-commissions",      title: "Committees & Commissions",            group: "Polity & Constitution",    gs: ["GS2"] },
  { slug: "five-year-plans",             title: "Five Year Plans & NITI Aayog",        group: "Polity & Constitution",    gs: ["GS3"] },
  { slug: "presidents-of-india",         title: "Presidents of India",                 group: "Polity & Constitution",    gs: ["GS2"] },
  { slug: "prime-ministers-of-india",    title: "Prime Ministers of India",            group: "Polity & Constitution",    gs: ["GS2"] },
  { slug: "lok-sabha-speakers",          title: "Lok Sabha Speakers",                  group: "Polity & Constitution",    gs: ["GS2"] },
  { slug: "chief-justices-of-india",     title: "Chief Justices of India",             group: "Polity & Constitution",    gs: ["GS2"] },
  { slug: "viceroys-governors-general",  title: "Viceroys & Governors-General",        group: "History & Governance",     gs: ["GS1"] },
  { slug: "rivers-of-india",             title: "Rivers of India",                     group: "India — Facts & Identity", gs: ["GS1", "GS3"] },
  { slug: "bharat-ratna",                title: "Bharat Ratna",                        group: "India — Facts & Identity", gs: ["GS1"] },
  { slug: "padma-awards",                title: "Padma Awards",                        group: "India — Facts & Identity", gs: ["GS1"] },
  { slug: "national-symbols",            title: "National Symbols",                    group: "India — Facts & Identity", gs: ["GS1"] },
  { slug: "states-capitals",             title: "States & Capitals",                   group: "India — Facts & Identity", gs: ["GS1"] },
  { slug: "geographical-facts",          title: "Geographical Facts",                  group: "India — Facts & Identity", gs: ["GS1"] },
  { slug: "india-firsts",                title: "India's Firsts",                      group: "India — Facts & Identity", gs: ["GS1", "GS2"] },
  { slug: "international-organisations", title: "International Organisations",         group: "India — Facts & Identity", gs: ["GS2"] },
  { slug: "gallantry-awards",            title: "Gallantry Awards",                    group: "India — Facts & Identity", gs: ["GS3"] },
  { slug: "classical-languages",         title: "Classical Languages",                 group: "Language & Culture",       gs: ["GS1"] },
  { slug: "scheduled-languages",         title: "Scheduled Languages (8th Schedule)",  group: "Language & Culture",       gs: ["GS1"] },
  { slug: "important-days",              title: "Important Days",                      group: "Language & Culture",       gs: ["GS1"] },
  { slug: "classical-dance-forms",       title: "Classical Dance Forms",               group: "Language & Culture",       gs: ["GS1"] },
  { slug: "isro-space-missions",         title: "ISRO & Space Missions",               group: "Science & Technology",     gs: ["GS3"] },
  { slug: "nuclear-programme",           title: "Nuclear Programme",                   group: "Science & Technology",     gs: ["GS3"] },
  { slug: "major-ports",                 title: "Major Ports of India",                group: "Economy & Infrastructure", gs: ["GS3"] },
  { slug: "unesco-world-heritage",       title: "UNESCO World Heritage Sites",         group: "Environment & Heritage",   gs: ["GS1"] },
  { slug: "protected-areas",             title: "Protected Areas",                     group: "Environment & Heritage",   gs: ["GS3"] },
];

// ── Asset loading ─────────────────────────────────────────────────────────────

function loadBase64(filePath) {
  if (!fs.existsSync(filePath)) return "";
  return fs.readFileSync(filePath).toString("base64");
}

/** Resize + compress author photo using jimp (851 KB PNG → ~4 KB JPEG) */
async function buildAuthorPhotoSrc() {
  const src = path.join(IMG_DIR, "bharat-choudhary.png");
  if (!fs.existsSync(src)) return "";
  try {
    const img = await Jimp.read(src);
    img.resize({ w: 90, h: 90 });
    const buf = await img.getBuffer("image/jpeg", { quality: 70 });
    return "data:image/jpeg;base64," + buf.toString("base64");
  } catch (e) {
    console.warn("  ⚠ Photo compression failed, using original:", e.message);
    const b64 = loadBase64(src);
    return b64 ? "data:image/png;base64," + b64 : "";
  }
}

/** Inline SVG as base64 img — always renders in Puppeteer (unlike CSS backgrounds) */
function svgSwatch(fill, stroke = "#999", leftAccent = null) {
  let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="16">`;
  svg += `<rect width="32" height="16" fill="${fill}"/>`;
  if (leftAccent) svg += `<rect width="5" height="16" fill="${leftAccent}"/>`;
  svg += `<rect width="32" height="16" fill="none" stroke="${stroke}" stroke-width="1"/>`;
  svg += `</svg>`;
  const b64 = Buffer.from(svg).toString("base64");
  return `<img src="data:image/svg+xml;base64,${b64}" width="32" height="16" style="flex-shrink:0;border-radius:2px;display:block;">`;
}

function buildLogoSrc() {
  // Circle logo — used as a badge/seal on cover and back pages
  const b64 = loadBase64(path.join(IMG_DIR, "bharatnotes-circle-sm.png"));
  return b64 ? `data:image/png;base64,${b64}` : "";
}

function buildCrimsonFontsCSS() {
  const fonts = [
    { file: "crimsonpro-regular.ttf",  style: "normal", weight: "400" },
    { file: "crimsonpro-italic.ttf",   style: "italic", weight: "400" },
    { file: "crimsonpro-semibold.ttf", style: "normal", weight: "600" },
  ];
  return fonts.map(f => {
    const b64 = loadBase64(path.join(FONTS_DIR, f.file));
    if (!b64) return "";
    return `@font-face{font-family:'Crimson Pro';font-style:${f.style};font-weight:${f.weight};` +
           `src:url(data:font/truetype;base64,${b64}) format('truetype');}`;
  }).join("");
}

// ── Content extraction ────────────────────────────────────────────────────────

function extractGkMain(htmlStr) {
  const OPEN_TAG = '<div class="gk-main">';
  const start = htmlStr.indexOf(OPEN_TAG);
  if (start === -1) return null;
  let depth = 1, pos = start + OPEN_TAG.length;
  while (pos < htmlStr.length && depth > 0) {
    const o = htmlStr.indexOf("<div", pos);
    const c = htmlStr.indexOf("</div>", pos);
    if (c === -1) break;
    if (o !== -1 && o < c) { depth++; pos = o + 4; }
    else                   { depth--; pos = c + 6; }
  }
  return htmlStr.substring(start + OPEN_TAG.length, pos - 6);
}

// ── CSS ───────────────────────────────────────────────────────────────────────

/** Generate per-chapter named @page rules so @bottom-center shows the chapter title */
function buildChapterPageRules() {
  return CHAPTERS.map(ch => {
    // Escape single quotes in title for CSS content value
    const safeTitle = ch.title.replace(/'/g, "\\'");
    return (
      `@page pg-${ch.slug} {` +
        `@bottom-left { content:'bharatnotes.com'; font-family:'Inter',sans-serif; font-size:6.5pt; color:#bbb; letter-spacing:0.06em; }` +
        `@bottom-center { content:'${safeTitle}'; font-family:'Inter',sans-serif; font-size:6pt; color:#aaa; }` +
        `@bottom-right { content:counter(page) ' / ' counter(pages); font-family:'Inter',sans-serif; font-size:6.5pt; color:#999; }` +
      `}`
    );
  }).join(" ");
}

function buildCSS() {
  const chapterPageRules = buildChapterPageRules();

  const rules = [
    "*, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }",

    // Default page — running footer; suppressed on named pages for cover/toc/back
    "@page { size:A4; margin:22mm 20mm 26mm 20mm;" +
      " @bottom-left { content:'bharatnotes.com'; font-family:'Inter',sans-serif; font-size:6.5pt; color:#bbb; letter-spacing:0.06em; }" +
      " @bottom-right { content:counter(page) ' / ' counter(pages); font-family:'Inter',sans-serif; font-size:6.5pt; color:#999; } }",
    "@page :first { margin:0; @bottom-left{content:none} @bottom-center{content:none} @bottom-right{content:none} }",
    "@page howto { margin:22mm 20mm 26mm 20mm; @bottom-left{content:none} @bottom-center{content:none} @bottom-right{content:none} }",
    "@page toc   { margin:22mm 20mm 26mm 20mm; @bottom-left{content:none} @bottom-center{content:none} @bottom-right{content:none} }",
    "@page gsidx { margin:22mm 20mm 26mm 20mm; @bottom-left{content:none} @bottom-center{content:none} @bottom-right{content:none} }",
    "@page backpage { margin:0; @bottom-left{content:none} @bottom-center{content:none} @bottom-right{content:none} }",

    // Per-chapter running headers (improvement #2)
    chapterPageRules,

    "body { font-family:'Crimson Pro','Georgia','Times New Roman',serif; font-size:12.5pt; line-height:1.72; color:#1a1a1a; background:#fff; }",

    // ── HOW TO USE page — flows across 2 pages naturally ──
    ".howto { page:howto; padding:28mm 28mm 20mm; }",
    ".howto h2 { font-family:'Crimson Pro','Georgia',serif; font-size:24pt; font-weight:400; color:#1a1a1a; border-bottom:2px solid #1a1a1a; padding-bottom:10px; margin-bottom:20px; letter-spacing:-0.01em; }",
    ".howto h3 { font-family:'Inter',sans-serif; font-size:9pt; font-weight:700; letter-spacing:0.14em; text-transform:uppercase; color:#555; margin:22px 0 8px; }",
    ".howto p { font-size:11pt; line-height:1.7; color:#333; margin-bottom:10px; }",
    ".howto ol { margin:0 0 12px 20px; }",
    ".howto li { font-size:10.5pt; line-height:1.65; color:#333; margin-bottom:5px; }",
    // 7-day plan table
    ".howto-plan { width:100%; border-collapse:collapse; margin:10px 0 18px; font-size:10.5pt; }",
    ".howto-plan thead tr { border-top:2px solid #1a1a1a; border-bottom:1px solid #1a1a1a; }",
    ".howto-plan th { font-family:'Inter',sans-serif; font-size:8pt; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; color:#555; padding:6px 10px; text-align:left; }",
    ".howto-plan td { padding:7px 10px; vertical-align:top; border-bottom:0.5px solid #e8e8e8; color:#333; line-height:1.5; }",
    ".howto-plan td:first-child { font-family:'Inter',sans-serif; font-size:9pt; font-weight:700; color:#1a1a1a; white-space:nowrap; width:32px; }",
    ".howto-plan td:nth-child(2) { font-family:'Crimson Pro','Georgia',serif; font-size:11pt; font-weight:600; white-space:nowrap; width:90px; }",
    ".howto-plan td:last-child { font-size:10pt; color:#555; }",
    ".howto-plan tbody tr:last-child td { border-bottom:2px solid #1a1a1a; }",
    // legend
    ".howto-legend { margin-top:14px; }",
    ".howto-legend-row { display:flex; align-items:center; gap:12px; padding:6px 0; border-bottom:0.5px solid #eee; font-size:10.5pt; }",
    ".howto-legend-row:last-child { border-bottom:none; }",

    // ── TOC page ──
    ".toc-pg { page:toc; page-break-before:always; page-break-after:always; padding:28mm 28mm 20mm; }",
    ".toc-pg__eyebrow { font-family:'Inter',sans-serif; font-size:7.5pt; font-weight:700; letter-spacing:0.18em; text-transform:uppercase; color:#999; margin-bottom:10px; }",
    ".toc-pg__title { font-family:'Crimson Pro','Georgia',serif; font-size:28pt; font-weight:400; color:#1a1a1a; border-bottom:2px solid #1a1a1a; padding-bottom:10px; margin-bottom:24px; letter-spacing:-0.01em; }",
    ".toc-pg__list { list-style:none; padding:0; margin:0; }",
    ".toc-group { font-family:'Inter',sans-serif; font-size:7pt; font-weight:700; letter-spacing:0.16em; text-transform:uppercase; color:#999; border-top:1px solid #eee; padding-top:12px; margin:16px 0 4px; }",
    // Clickable TOC entries (improvement #1)
    ".toc-e { display:flex; align-items:baseline; gap:10px; padding:7px 0; border-bottom:0.5px solid #eee; page-break-inside:avoid; }",
    ".toc-e__num { font-family:'Inter',sans-serif; font-size:7.5pt; font-weight:700; color:#bbb; flex-shrink:0; min-width:18px; }",
    ".toc-e__title { font-family:'Crimson Pro','Georgia',serif; font-size:13pt; color:#1a4a8a; text-decoration:underline; text-underline-offset:2px; flex:1; line-height:1.4; }",
    ".toc-e__gs { font-family:'Inter',sans-serif; font-size:6.5pt; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; color:#999; flex-shrink:0; padding:2px 5px; border:0.5px solid #ddd; border-radius:2px; }",

    // ── GS INDEX page ──
    ".gs-idx { page:gsidx; page-break-after:always; padding:28mm 28mm 20mm; }",
    ".gs-idx__eyebrow { font-family:'Inter',sans-serif; font-size:7.5pt; font-weight:700; letter-spacing:0.18em; text-transform:uppercase; color:#999; margin-bottom:10px; }",
    ".gs-idx__title { font-family:'Crimson Pro','Georgia',serif; font-size:28pt; font-weight:400; color:#1a1a1a; border-bottom:2px solid #1a1a1a; padding-bottom:10px; margin-bottom:6px; letter-spacing:-0.01em; }",
    ".gs-idx__sub { font-family:'Inter',sans-serif; font-size:8.5pt; color:#888; margin-bottom:20px; }",
    ".gs-paper-block { margin-bottom:18px; }",
    ".gs-paper-label { font-family:'Inter',sans-serif; font-size:8pt; font-weight:700; letter-spacing:0.14em; text-transform:uppercase; padding:4px 10px; display:inline-block; border-radius:3px; margin-bottom:8px; }",
    ".gs-paper-label--gs1 { box-shadow:inset 0 0 0 9999px #dce8ff; color:#1a3a8a; }",
    ".gs-paper-label--gs2 { box-shadow:inset 0 0 0 9999px #d0f5e0; color:#1a4a2a; }",
    ".gs-paper-label--gs3 { box-shadow:inset 0 0 0 9999px #fde8cc; color:#8a4a1a; }",
    ".gs-entry { display:inline-flex; align-items:center; gap:5px; margin:3px 4px 3px 0; padding:3px 8px; border:0.5px solid #ddd; border-radius:3px; font-family:'Crimson Pro','Georgia',serif; font-size:11pt; color:#1a4a8a; text-decoration:none; }",
    ".gs-entry:hover { text-decoration:underline; }",

    // ── TITLE PAGE ──
    ".tp { width:210mm; min-height:297mm; display:flex; flex-direction:column; padding:0; page-break-after:always; position:relative; }",
    ".tp-top { background:#fff; color:#1a1a1a; padding:28mm 28mm 24mm; flex-shrink:0; border-bottom:2px solid #1a1a1a; }",
    ".tp-brand-row { display:flex; justify-content:space-between; align-items:center; margin-bottom:40px; }",
    ".tp-logo { font-family:'Crimson Pro','Georgia',serif; font-size:14.5pt; font-weight:600; color:#1a1a1a; letter-spacing:-0.01em; }",
    ".tp-logo span { color:#b8860b; }",
    ".tp-paper { font-family:'Inter',sans-serif; font-size:7.5pt; font-weight:600; letter-spacing:0.18em; text-transform:uppercase; color:#888; }",
    ".tp-title { font-family:'Crimson Pro','Georgia',serif; font-size:38.5pt; font-weight:400; line-height:1.1; color:#1a1a1a; margin-bottom:16px; letter-spacing:-0.02em; }",
    ".tp-desc { font-family:'Crimson Pro','Georgia',serif; font-size:12pt; color:#555; line-height:1.6; max-width:140mm; }",
    ".tp-bottom { flex:1; display:flex; flex-direction:column; justify-content:flex-end; padding:24mm 28mm 28mm; }",
    ".tp-subject { font-family:'Inter',sans-serif; font-size:8pt; font-weight:600; letter-spacing:0.14em; text-transform:uppercase; color:#999; margin-bottom:auto; }",
    ".tp-author-block { display:flex; align-items:center; gap:16px; margin-bottom:24px; }",
    ".tp-photo { width:64px; height:64px; border-radius:50%; object-fit:cover; border:2px solid #e2e8f0; }",
    ".tp-author { font-family:'Inter',sans-serif; font-size:11pt; font-weight:600; color:#1a1a1a; }",
    ".tp-role { font-family:'Inter',sans-serif; font-size:8pt; color:#888; margin-top:3px; }",
    ".tp-info { display:flex; gap:20px; flex-wrap:wrap; font-family:'Inter',sans-serif; font-size:7.5pt; color:#999; }",
    ".tp-info span { display:inline-flex; align-items:center; gap:4px; }",
    ".tp-info strong { color:#555; font-weight:600; }",
    ".tp-btn { display:inline-block; margin-top:16px; padding:7px 18px; font-family:'Inter',sans-serif; font-size:7.5pt; font-weight:600; letter-spacing:0.08em; text-transform:uppercase; color:#1a1a1a; border:1px solid #ccc; border-radius:4px; text-decoration:none; margin-right:10px; }",
    ".tp-btn--accent { color:#92400e; box-shadow:inset 0 0 0 9999px #fffbeb; border-color:#fde68a; }",
    ".tp-ujiyari { margin-top:20px; padding:14px 18px; box-shadow:inset 0 0 0 9999px #fffbeb; border:1px solid #fde68a; border-radius:6px; display:flex; align-items:center; gap:14px; }",
    ".tp-ujiyari-icon { font-size:18pt; flex-shrink:0; }",
    ".tp-ujiyari-text { font-family:'Inter',sans-serif; font-size:8pt; color:#78350f; line-height:1.5; }",
    ".tp-ujiyari-text strong { color:#451a03; font-weight:700; }",
    ".tp-ujiyari-btn { flex-shrink:0; display:inline-block; padding:6px 14px; font-family:'Inter',sans-serif; font-size:7pt; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; color:#92400e; background:#fff; border:1.5px solid #d97706; border-radius:4px; text-decoration:none; }",

    // ── CHAPTER content ──
    ".chapter { page-break-before:always; break-before:page; }",
    ".ct { padding:0; }",
    ".ct-sub { font-family:'Inter',sans-serif; font-size:9pt; color:#888; letter-spacing:0.1em; text-transform:uppercase; margin-bottom:20px; padding-bottom:16px; border-bottom:1px solid #1a1a1a; }",
    ".ct h1 { font-family:'Crimson Pro','Georgia',serif; font-size:24.5pt; font-weight:600; color:#1a1a1a; margin-bottom:6px; line-height:1.2; letter-spacing:-0.01em; }",
    ".ct p { margin-bottom:6px; line-height:1.6; }",
    ".ct ul, .ct ol { margin:0 0 10px 20px; }",
    ".ct li { margin-bottom:3px; }",
    ".ft { margin-top:24px; padding-top:10px; border-top:0.5px solid #ccc; display:flex; justify-content:space-between; font-family:'Inter',sans-serif; font-size:7.5pt; color:#999; letter-spacing:0.04em; }",

    // ── GK sections & tables (Oxford booktabs) ──
    ".gk-section { margin-bottom:16px; }",
    ".gk-section-title { font-family:'Crimson Pro','Georgia',serif; font-size:16pt; font-weight:600; color:#1a1a1a; margin:28px 0 8px; padding-bottom:6px; border-bottom:0.5pt solid #ccc; page-break-after:avoid; break-after:avoid; }",
    ".gk-scroll { overflow:visible; }",
    ".gk-table { width:100%; border-collapse:collapse; margin:12px 0; font-size:10.5pt; line-height:1.5; page-break-inside:avoid; break-inside:avoid; }",
    ".gk-table tr { page-break-inside:avoid; break-inside:avoid; }",
    ".gk-table thead { border-top:2px solid #1a1a1a; border-bottom:1px solid #1a1a1a; }",
    ".gk-table th { padding:7px 10px; text-align:left; font-family:'Crimson Pro','Georgia',serif; font-size:9.5pt; font-weight:700; letter-spacing:0.04em; text-transform:uppercase; color:#333; background:none; }",
    ".gk-table td { padding:7px 10px; border-bottom:none; color:#333; vertical-align:top; font-size:10.5pt; }",
    ".gk-table tbody tr:last-child td { border-bottom:2px solid #1a1a1a; }",
    ".gk-table tbody tr:nth-child(even) td { box-shadow:inset 0 0 0 9999px rgba(0,0,0,0.07); }",
    ".gk-note { margin:8px 0; padding:8px 14px; border-left:2px solid #999; font-style:italic; color:#555; font-size:11pt; line-height:1.6; }",
    ".gk-tip { margin:10px 0; padding:10px 14px; border:0.5px solid #ccc; border-left:3px solid #888; box-shadow:inset 0 0 0 9999px #f5f5f2; font-size:11pt; line-height:1.6; page-break-inside:avoid; break-inside:avoid; }",
    "a { color:#1a4a8a; text-decoration:none; }",
    "strong { font-weight:700; }",
    "em { font-style:italic; }",

    // ── EXAM TRAPS CHEAT SHEET (improvement #3) ──
    // Last .gk-section in every chapter = exam traps
    // Extend negative margins to cover full page (incl. margins) so grey fills entire page
    ".chapter .gk-section:last-child { page-break-before:always; break-before:page; box-shadow:inset 0 0 0 9999px #efefec; margin:-22mm -20mm -26mm; padding:22mm 20mm 26mm; min-height:297mm; }",
    ".chapter .gk-section:last-child .gk-section-title { font-family:'Inter',sans-serif; font-size:10pt; font-weight:700; letter-spacing:0.16em; text-transform:uppercase; color:#333; border-bottom:2pt solid #333; border-left:none; padding:0 0 6px; margin:0 0 12px; }",
    // Clean cheat-sheet table — no heavy rules, just light separators
    ".chapter .gk-section:last-child .gk-table { font-size:10pt; }",
    ".chapter .gk-section:last-child .gk-table thead { border-top:none; border-bottom:1px solid #888; }",
    ".chapter .gk-section:last-child .gk-table th { font-size:8pt; color:#666; background:none; border:none; padding:5px 8px; }",
    ".chapter .gk-section:last-child .gk-table td { border-bottom:0.3pt solid #ccc; padding:5px 8px; font-size:10pt; }",
    ".chapter .gk-section:last-child .gk-table tbody tr:last-child td { border-bottom:1px solid #888; }",
    ".chapter .gk-section:last-child .gk-table tbody tr:nth-child(even) td { box-shadow:inset 0 0 0 9999px rgba(0,0,0,0.08); }",

    // ── BACK PAGE ──
    ".bp { page-break-before:always; page:backpage; min-height:250mm; padding:28mm 26mm 20mm; display:flex; flex-direction:column; }",
    ".bp-header { display:flex; align-items:center; gap:18px; margin-bottom:32px; }",
    ".bp-photo { width:72px; height:72px; border-radius:50%; object-fit:cover; border:3px solid #e2e8f0; }",
    ".bp-author-name { font-family:'Georgia',serif; font-size:16pt; color:#1a1a1a; margin-bottom:2px; }",
    ".bp-author-role { font-family:'Inter',sans-serif; font-size:8pt; color:#888; margin-bottom:6px; }",
    ".bp-author-links { display:flex; gap:8px; }",
    ".bp-link { display:inline-block; padding:4px 12px; font-family:'Inter',sans-serif; font-size:7pt; font-weight:600; letter-spacing:0.06em; text-transform:uppercase; color:#555; box-shadow:inset 0 0 0 9999px #e8eef5; border:1px solid #e2e8f0; border-radius:3px; }",
    ".bp-sep { border:none; border-top:1px solid #e2e8f0; margin:0 0 28px; }",
    ".bp-sites { display:flex; gap:24px; margin-bottom:28px; }",
    ".bp-site { flex:1; padding:18px 20px; border:1px solid #e2e8f0; border-radius:8px; }",
    ".bp-site-label { font-family:'Inter',sans-serif; font-size:6.5pt; font-weight:700; letter-spacing:0.14em; text-transform:uppercase; color:#999; margin-bottom:8px; }",
    ".bp-site-name { font-family:'Georgia',serif; font-size:15pt; color:#1a1a1a; margin-bottom:4px; }",
    ".bp-site-desc { font-size:9pt; color:#666; line-height:1.5; margin-bottom:12px; }",
    ".bp-site-features { display:flex; flex-wrap:wrap; gap:6px; margin-bottom:14px; }",
    ".bp-feat { font-family:'Inter',sans-serif; font-size:6.5pt; font-weight:600; letter-spacing:0.04em; text-transform:uppercase; color:#666; padding:3px 8px; box-shadow:inset 0 0 0 9999px #eef2f6; border:1px solid #e2e8f0; border-radius:3px; }",
    ".bp-site-btn { display:inline-block; padding:7px 18px; font-family:'Inter',sans-serif; font-size:7.5pt; font-weight:600; letter-spacing:0.08em; text-transform:uppercase; border-radius:4px; text-decoration:none; }",
    ".bp-site-btn--primary { color:#1a1a1a; background:#fff; border:1.5px solid #1a1a1a; }",
    ".bp-site-btn--accent { color:#92400e; background:#fff; border:1.5px solid #b45309; }",
    ".bp-ad { padding:16px 20px; box-shadow:inset 0 0 0 9999px #f5f5ee; border:1px dashed #d4d4c8; border-radius:6px; margin-bottom:28px; display:flex; align-items:center; gap:16px; }",
    ".bp-ad-text { flex:1; }",
    ".bp-ad-title { font-family:'Inter',sans-serif; font-size:8pt; font-weight:700; color:#555; letter-spacing:0.06em; text-transform:uppercase; margin-bottom:3px; }",
    ".bp-ad-desc { font-size:8.5pt; color:#777; line-height:1.5; }",
    ".bp-ad-cta { flex-shrink:0; padding:7px 16px; font-family:'Inter',sans-serif; font-size:7pt; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; color:#555; background:#fff; border:1.5px solid #ccc; border-radius:4px; }",
    ".bp-footer { margin-top:auto; text-align:center; padding-top:16px; border-top:1px solid #e2e8f0; }",
    ".bp-disc { font-size:7.5pt; color:#bbb; line-height:1.7; margin-bottom:6px; }",
    ".bp-copy { font-family:'Inter',sans-serif; font-size:7pt; color:#ccc; letter-spacing:0.1em; text-transform:uppercase; }",

    // Force background rendering in Puppeteer PDF (complements printBackground:true in API call)
    "* { -webkit-print-color-adjust:exact !important; print-color-adjust:exact !important; color-adjust:exact !important; }",
    "@media print { * { -webkit-print-color-adjust:exact !important; print-color-adjust:exact !important; } }",
  ];

  return rules.join(" ");
}

// ── Page builders ─────────────────────────────────────────────────────────────

function buildTitlePage(photoSrc, logoSrc) {
  const logoHTML = logoSrc
    ? `<img src="${logoSrc}" alt="BharatNotes" width="90" height="90" style="display:block;border-radius:50%;">`
    : `<div class="tp-logo">Bharat<span>Notes</span></div>`;

  return `
  <div class="tp">
    <div class="tp-top">
      <div class="tp-brand-row">
        ${logoHTML}
        <div class="tp-paper">Static GK Compendium · UPSC Prelims</div>
      </div>
      <h1 class="tp-title">Static GK<br>Compendium</h1>
      <p class="tp-desc">
        Complete reference for UPSC Prelims — ${CHAPTERS.length} chapters covering
        Polity, History, Geography, Awards, Science &amp; Environment.
        All facts verified to ${GENERATED_DATE}.
      </p>
    </div>
    <div class="tp-bottom">
      <div class="tp-subject">${CHAPTERS.length} Chapters &nbsp;·&nbsp; All GS Papers &nbsp;·&nbsp; UPSC Prelims 2025–26</div>
      <div class="tp-author-block">
        <img class="tp-photo" src="${photoSrc}" alt="" onerror="this.style.display='none'">
        <div>
          <div class="tp-author">Bharat Choudhary</div>
          <div class="tp-role">Founder, BharatNotes &amp; Ujiyari</div>
        </div>
      </div>
      <div class="tp-info">
        <span><strong>Source</strong> bharatnotes.com</span>
        <span><strong>Generated</strong> ${GENERATED_DATE}</span>
        <span><strong>License</strong> Free for personal use</span>
      </div>
      <div style="display:flex; gap:10px; margin-top:16px;">
        <a href="https://bharatnotes.com" class="tp-btn">BharatNotes.com &rarr;</a>
        <a href="https://ujiyari.com" class="tp-btn tp-btn--accent">Ujiyari.com &rarr;</a>
      </div>
      <div class="tp-ujiyari">
        <div class="tp-ujiyari-icon">📰</div>
        <div class="tp-ujiyari-text">
          <strong>Ujiyari.com</strong> &mdash; Daily current affairs, editorial analysis,
          monthly compilations &amp; Mains answer writing practice.
          Pair these static notes with live news coverage.
        </div>
        <a href="https://ujiyari.com" class="tp-ujiyari-btn">Visit &rarr;</a>
      </div>
    </div>
  </div>`;
}

/** Improvement #6 — How to use this compendium (flows across pages 2–3) */
function buildHowToUsePage() {
  return `
  <div class="howto">
    <h2>How to Use This Compendium</h2>

    <h3>What This Is</h3>
    <p>
      A single-file reference covering all major <strong>Static GK</strong> topics tested in
      UPSC Prelims — constitutional facts, historical firsts, geographical data, awards, science
      &amp; environment. Every figure is verified against official sources as of ${GENERATED_DATE}.
    </p>
    <p>
      Pair with <strong>Ujiyari.com</strong> for current affairs after this date — daily coverage,
      monthly compilations, and editorial analysis.
    </p>

    <h3>How Each Chapter Is Structured</h3>
    <ol>
      <li><strong>Fact tables</strong> — Oxford booktabs style; scan vertically to compare entries, horizontally for full details.</li>
      <li><strong>Key Firsts &amp; Records</strong> — highest-frequency UPSC question type; memorise these before anything else.</li>
      <li><strong>⚠ Exam Traps</strong> — the last section of every chapter, on a distinct grey page. This is the cheat-sheet. Read it once before every mock test. 30 minutes through all 28 chapters on revision day.</li>
    </ol>

    <h3>Suggested 7-Day Revision Plan</h3>
    <table class="howto-plan">
      <thead>
        <tr><th>Day</th><th>Focus Area</th><th>Chapters to Cover</th></tr>
      </thead>
      <tbody>
        <tr>
          <td>1–2</td>
          <td>Polity Core</td>
          <td>Constitutional Provisions · Schedules · Presidents · Prime Ministers · Lok Sabha Speakers · Chief Justices</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Governance</td>
          <td>Constitutional &amp; Statutory Bodies · Committees &amp; Commissions · Five Year Plans &amp; NITI Aayog · Viceroys &amp; Governors-General</td>
        </tr>
        <tr>
          <td>4</td>
          <td>India Facts</td>
          <td>National Symbols · States &amp; Capitals · Geographical Facts · India's Firsts · Rivers of India</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Awards &amp; Culture</td>
          <td>Bharat Ratna · Padma Awards · Gallantry Awards · Classical Languages · Classical Dance Forms · Important Days</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Science &amp; World</td>
          <td>ISRO &amp; Space Missions · Nuclear Programme · Major Ports · UNESCO Heritage Sites · Protected Areas · International Organisations</td>
        </tr>
        <tr>
          <td>7</td>
          <td>Full Revision</td>
          <td>Read only the <strong>⚠ Exam Traps page</strong> of every chapter. 30 minutes total. Highest ROI revision session.</td>
        </tr>
      </tbody>
    </table>

    <h3>Visual Legend</h3>
    <div class="howto-legend">
      <div class="howto-legend-row">
        ${svgSwatch("#c8c8c0", "#888")}
        <span><strong>Grey page</strong> — Exam Traps cheat-sheet (last section of every chapter). Print or screenshot this page for quick revision.</span>
      </div>
      <div class="howto-legend-row">
        ${svgSwatch("#e0e0d8", "#bbb")}
        <span><strong>Shaded table row</strong> — alternating row in a standard fact table; no special significance.</span>
      </div>
      <div class="howto-legend-row">
        ${svgSwatch("#f0f0ec", "#ccc", "#777")}
        <span><strong>Boxed note</strong> (left-border box) — additional context or clarification; not always directly examinable.</span>
      </div>
    </div>
  </div>`;
}

/** Improvement #1 — Clickable TOC with anchor links */
function buildTOCPage(chapters) {
  const groups = {};
  for (const ch of chapters) {
    (groups[ch.group] = groups[ch.group] || []).push(ch);
  }

  let items = "";
  let num   = 1;
  for (const [groupName, groupChapters] of Object.entries(groups)) {
    items += `<div class="toc-group">${groupName}</div>`;
    for (const ch of groupChapters) {
      const gsTag = ch.gs.map(g => `<span class="toc-e__gs">${g}</span>`).join(" ");
      // href="#chapter-{slug}" → Chromium preserves these as internal PDF links
      items += `
        <div class="toc-e">
          <span class="toc-e__num">${num++}</span>
          <a href="#chapter-${ch.slug}" class="toc-e__title">${ch.title}</a>
          ${gsTag}
        </div>`;
    }
  }

  return `
  <div class="toc-pg">
    <div class="toc-pg__eyebrow">BharatNotes &middot; Static GK Compendium &middot; UPSC Prelims</div>
    <h2 class="toc-pg__title">Contents</h2>
    <div class="toc-pg__list">${items}</div>
  </div>`;
}

/** Improvement #5 — GS Paper Index */
function buildGSIndexPage(chapters) {
  const papers = { GS1: [], GS2: [], GS3: [] };
  for (const ch of chapters) {
    for (const g of ch.gs) {
      if (papers[g]) papers[g].push(ch);
    }
  }

  const paperMeta = {
    GS1: { label: "General Studies I",   desc: "History, Culture, Society, Geography",   cls: "gs1" },
    GS2: { label: "General Studies II",  desc: "Polity, Constitution, Governance, IR",   cls: "gs2" },
    GS3: { label: "General Studies III", desc: "Economy, Science & Technology, Environment", cls: "gs3" },
  };

  let blocks = "";
  for (const [key, chList] of Object.entries(papers)) {
    const meta  = paperMeta[key];
    const links = chList.map(ch =>
      `<a href="#chapter-${ch.slug}" class="gs-entry">${ch.title}</a>`
    ).join("");
    blocks += `
      <div class="gs-paper-block">
        <div class="gs-paper-label gs-paper-label--${meta.cls}">${meta.label} &nbsp;·&nbsp; ${meta.desc}</div>
        <div>${links}</div>
      </div>`;
  }

  return `
  <div class="gs-idx">
    <div class="gs-idx__eyebrow">BharatNotes &middot; Static GK Compendium</div>
    <h2 class="gs-idx__title">GS Paper Index</h2>
    <p class="gs-idx__sub">
      Chapters grouped by their primary GS paper — use this to plan paper-specific revision sessions.
      Chapters appearing under multiple papers are cross-listed.
    </p>
    ${blocks}
  </div>`;
}

function buildChapterPage(chapter) {
  const content = chapter.content ||
    `<p style="color:#888;font-style:italic;">Content unavailable — run npm run build first.</p>`;

  // id="chapter-{slug}" → target for TOC anchor links (improvement #1)
  // style="page: pg-{slug}" → named @page rule for running header (improvement #2)
  return `
  <div class="chapter" id="chapter-${chapter.slug}" style="page:pg-${chapter.slug};">
    <div class="ct">
      <h1>${chapter.title}</h1>
      <div class="ct-sub">Static GK &nbsp;·&nbsp; ${chapter.group} &nbsp;·&nbsp; ${GENERATED_DATE}</div>
      ${content}
      <div class="ft">
        <span>bharatnotes.com</span>
        <span>${GENERATED_DATE}</span>
      </div>
    </div>
  </div>`;
}

function buildBackPage(photoSrc, logoSrc) {
  const logoBlock = logoSrc ? `
    <div style="text-align:center;margin-bottom:24px;">
      <img src="${logoSrc}" alt="BharatNotes" width="90" height="90" style="display:inline-block;border-radius:50%;">
      <div style="font-family:'Inter',sans-serif;font-size:7.5pt;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:#bbb;margin-top:8px;">bharatnotes.com</div>
    </div>
    <hr class="bp-sep">` : "";

  return `
  <div class="bp">
    ${logoBlock}
    <div class="bp-header">
      <img class="bp-photo" src="${photoSrc}" alt="" onerror="this.style.display='none'">
      <div>
        <div class="bp-author-name">Bharat Choudhary</div>
        <div class="bp-author-role">Founder &amp; Content Lead</div>
        <div class="bp-author-links">
          <span class="bp-link">bharatnotes.com</span>
          <span class="bp-link">ujiyari.com</span>
        </div>
      </div>
    </div>
    <hr class="bp-sep">
    <div class="bp-sites">
      <div class="bp-site">
        <div class="bp-site-label">Study Notes</div>
        <div class="bp-site-name">BharatNotes</div>
        <div class="bp-site-desc">
          Comprehensive, fact-verified GS notes with syllabus mapping,
          PYQ analysis &amp; exam strategy for every topic.
        </div>
        <div class="bp-site-features">
          <span class="bp-feat">Static Notes</span>
          <span class="bp-feat">PYQ Analysis</span>
          <span class="bp-feat">Exam Strategy</span>
        </div>
        <span class="bp-site-btn bp-site-btn--primary">bharatnotes.com &rarr;</span>
      </div>
      <div class="bp-site">
        <div class="bp-site-label">Current Affairs</div>
        <div class="bp-site-name">Ujiyari</div>
        <div class="bp-site-desc">
          Your daily companion for UPSC current affairs &mdash; editorials,
          PIB digests, monthly compilations &amp; Mains answer practice.
        </div>
        <div class="bp-site-features">
          <span class="bp-feat">Daily News</span>
          <span class="bp-feat">Editorials</span>
          <span class="bp-feat">Monthly Compilations</span>
          <span class="bp-feat">Mains Practice</span>
        </div>
        <span class="bp-site-btn bp-site-btn--accent">ujiyari.com &rarr;</span>
      </div>
    </div>
    <div class="bp-ad">
      <div class="bp-ad-text">
        <div class="bp-ad-title">Advertise with Us</div>
        <div class="bp-ad-desc">
          Reach thousands of serious UPSC aspirants. Place your coaching,
          book, or ed-tech brand inside every PDF download.
        </div>
      </div>
      <span class="bp-ad-cta">epicbharat@gmail.com</span>
    </div>
    <div class="bp-footer">
      <p class="bp-disc">All content sourced from official government publications &amp; standard UPSC references. Free for personal use.</p>
      <div class="bp-copy">&copy; ${CURRENT_YEAR} BharatNotes.com &middot; 100% Free &middot; No Login Required</div>
    </div>
  </div>`;
}

function buildCombinedHTML(chapters, photoSrc, logoSrc, crimsonCSS) {
  const css       = buildCSS();
  const titlePg   = buildTitlePage(photoSrc, logoSrc);
  const howToPg   = buildHowToUsePage();
  const tocPg     = buildTOCPage(chapters);
  const gsIdxPg   = buildGSIndexPage(chapters);
  const chapterPgs = chapters.map(buildChapterPage).join("\n");
  const backPg    = buildBackPage(photoSrc, logoSrc);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="author" content="Bharat Choudhary">
  <meta name="description" content="BharatNotes Static GK Compendium — UPSC Prelims ${CURRENT_YEAR}">
  <title>BharatNotes Static GK Compendium — UPSC Prelims</title>
  <style>${crimsonCSS}${css}</style>
</head>
<body>
  ${titlePg}
  ${howToPg}
  ${tocPg}
  ${gsIdxPg}
  ${chapterPgs}
  ${backPg}
</body>
</html>`;
}

// ── API call ──────────────────────────────────────────────────────────────────

function callAPI(html) {
  return new Promise((resolve, reject) => {
    const payload = JSON.stringify({
      html,
      filename: "bharatnotes-static-gk",
      displayHeaderFooter: false,  // page numbers via CSS @page counter
      printBackground: true,        // render background fills/colors in PDF
    });

    const body = Buffer.from(payload, "utf-8");
    const url  = new URL(API_URL);

    const req = https.request({
      hostname: url.hostname,
      path:     url.pathname,
      method:   "POST",
      headers:  { "Content-Type": "application/json", "Content-Length": body.length },
    }, (res) => {
      if (res.statusCode !== 200) {
        let err = "";
        res.on("data", d => err += d);
        res.on("end", () => reject(new Error(`API HTTP ${res.statusCode}: ${err.slice(0, 200)}`)));
        return;
      }
      const chunks = [];
      res.on("data",  c => chunks.push(c));
      res.on("end",   () => resolve(Buffer.concat(chunks)));
      res.on("error", reject);
    });

    req.on("error", reject);
    req.setTimeout(API_TIMEOUT_MS, () => {
      req.destroy();
      reject(new Error(`Timed out after ${API_TIMEOUT_MS / 1000}s — try again.`));
    });

    req.write(body);
    req.end();
  });
}

// ── Main ──────────────────────────────────────────────────────────────────────

async function main() {
  console.log("╔═══════════════════════════════════════════════════╗");
  console.log("║  BharatNotes Static GK PDF Generator  (v2)        ║");
  console.log("╚═══════════════════════════════════════════════════╝\n");

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  // 1. Load assets
  console.log("🔤 Loading Crimson Pro fonts...");
  const crimsonCSS = buildCrimsonFontsCSS();
  console.log(`  ${crimsonCSS ? "✓ fonts embedded" : "⚠ not found — falling back to Georgia"}`);

  // improvement #4 — compress photo with jimp before embedding
  console.log("📷 Compressing author photo (jimp 851 KB PNG → JPEG)...");
  const photoSrc = await buildAuthorPhotoSrc();
  const photoKB  = Math.round(Buffer.byteLength(photoSrc.replace(/^data:[^,]+,/, ""), "base64") / 1024);
  console.log(`  ✓ photo compressed to ~${photoKB} KB`);

  console.log("🖼  Loading logo...");
  const logoSrc = buildLogoSrc();
  console.log(`  ${logoSrc ? "✓ logo embedded" : "⚠ logo not found"}\n`);

  // 2. Extract gk-main from each built chapter
  console.log(`📂 Extracting content from ${CHAPTERS.length} chapters...\n`);
  let skipped = 0;

  for (const ch of CHAPTERS) {
    const htmlPath = path.join(DIST_DIR, "resources", "static-gk", ch.slug, "index.html");
    if (!fs.existsSync(htmlPath)) {
      console.warn(`  ⚠  SKIP ${ch.slug} — run npm run build first`);
      ch.content = null; skipped++; continue;
    }
    ch.content = extractGkMain(fs.readFileSync(htmlPath, "utf-8"));
    if (!ch.content) {
      console.warn(`  ⚠  SKIP ${ch.slug} — .gk-main not found`);
      ch.content = null; skipped++;
    } else {
      console.log(`  ✓ ${ch.title}`);
    }
  }
  if (skipped) console.warn(`\n  ${skipped} chapter(s) skipped.\n`);

  // 3. Assemble HTML
  console.log("\n📝 Assembling combined HTML...");
  const combinedHTML = buildCombinedHTML(CHAPTERS, photoSrc, logoSrc, crimsonCSS);
  const sizeMB = (Buffer.byteLength(combinedHTML, "utf-8") / 1024 / 1024).toFixed(1);
  console.log(`  HTML payload: ${sizeMB} MB`);
  console.log(`  Pages: cover · how-to-use · TOC · GS index · ${CHAPTERS.length} chapters · back`);

  // 4. Generate PDF
  console.log(`\n🚀 Calling Puppeteer API (timeout: ${API_TIMEOUT_MS / 1000}s)...`);
  console.log("  Rendering ~200 pages with embedded Crimson Pro — allow 30–90 s.\n");

  const t0 = Date.now();
  let pdfBuf;
  try {
    pdfBuf = await callAPI(combinedHTML);
  } catch (err) {
    console.error(`\n❌ ${err.message}`);
    process.exit(1);
  }

  const elapsed = ((Date.now() - t0) / 1000).toFixed(1);
  const pdfKB   = Math.round(pdfBuf.length / 1024);
  console.log(`  ✓ PDF in ${elapsed}s — ${pdfKB} KB\n`);

  // 5. Save
  fs.writeFileSync(OUTPUT_FILE, pdfBuf);
  console.log(`✅ ${OUTPUT_FILE}`);
  console.log(`   ${pdfKB} KB · ${CHAPTERS.length} chapters · ${GENERATED_DATE}\n`);
  console.log("Improvements applied:");
  console.log("  #1 Clickable TOC     — anchor links → internal PDF links");
  console.log("  #2 Running headers   — chapter title in @bottom-center of each chapter");
  console.log("  #3 Exam traps page   — grey cheat-sheet, page-break-before, clean table");
  console.log("  #4 Photo compressed  — jimp JPEG ~4 KB vs original 851 KB PNG");
  console.log("  #5 GS Paper Index    — second TOC grouped by GS1/GS2/GS3");
  console.log("  #6 How to use page   — 7-day revision plan + visual legend\n");
  console.log("Next: npm run build → git add src/downloads/ → commit → push");
}

main().catch(err => { console.error(err); process.exit(1); });
