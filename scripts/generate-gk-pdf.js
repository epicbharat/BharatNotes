#!/usr/bin/env node
/**
 * BharatNotes — Static GK Compendium PDF Generator
 *
 * Generates a single PDF from all 28 static-GK chapters using the same
 * Oxford-style cover and back-page design as individual topic PDFs.
 *
 * Run after `npm run build`:
 *   node scripts/generate-gk-pdf.js
 *
 * Output: src/downloads/bharatnotes-static-gk.pdf
 *   → Eleventy passthrough copies it to dist/downloads/
 *   → Accessible at /downloads/bharatnotes-static-gk.pdf
 */

"use strict";

const fs    = require("fs");
const path  = require("path");
const https = require("https");

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

// ── Chapter manifest (sidebar order) ─────────────────────────────────────────

const CHAPTERS = [
  { slug: "constitutional-provisions",   title: "Constitutional Provisions",         group: "Polity & Constitution" },
  { slug: "schedules",                   title: "Schedules of the Constitution",      group: "Polity & Constitution" },
  { slug: "constitutional-bodies",       title: "Constitutional & Statutory Bodies",  group: "Polity & Constitution" },
  { slug: "committees-commissions",      title: "Committees & Commissions",           group: "Polity & Constitution" },
  { slug: "five-year-plans",             title: "Five Year Plans & NITI Aayog",       group: "Polity & Constitution" },
  { slug: "presidents-of-india",         title: "Presidents of India",                group: "Polity & Constitution" },
  { slug: "prime-ministers-of-india",    title: "Prime Ministers of India",           group: "Polity & Constitution" },
  { slug: "lok-sabha-speakers",          title: "Lok Sabha Speakers",                 group: "Polity & Constitution" },
  { slug: "chief-justices-of-india",     title: "Chief Justices of India",            group: "Polity & Constitution" },
  { slug: "viceroys-governors-general",  title: "Viceroys & Governors-General",       group: "History & Governance" },
  { slug: "rivers-of-india",             title: "Rivers of India",                    group: "India — Facts & Identity" },
  { slug: "bharat-ratna",                title: "Bharat Ratna",                       group: "India — Facts & Identity" },
  { slug: "padma-awards",                title: "Padma Awards",                       group: "India — Facts & Identity" },
  { slug: "national-symbols",            title: "National Symbols",                   group: "India — Facts & Identity" },
  { slug: "states-capitals",             title: "States & Capitals",                  group: "India — Facts & Identity" },
  { slug: "geographical-facts",          title: "Geographical Facts",                 group: "India — Facts & Identity" },
  { slug: "india-firsts",                title: "India's Firsts",                     group: "India — Facts & Identity" },
  { slug: "international-organisations", title: "International Organisations",        group: "India — Facts & Identity" },
  { slug: "gallantry-awards",            title: "Gallantry Awards",                   group: "India — Facts & Identity" },
  { slug: "classical-languages",         title: "Classical Languages",                group: "Language & Culture" },
  { slug: "scheduled-languages",         title: "Scheduled Languages (8th Schedule)", group: "Language & Culture" },
  { slug: "important-days",              title: "Important Days",                     group: "Language & Culture" },
  { slug: "classical-dance-forms",       title: "Classical Dance Forms",              group: "Language & Culture" },
  { slug: "isro-space-missions",         title: "ISRO & Space Missions",              group: "Science & Technology" },
  { slug: "nuclear-programme",           title: "Nuclear Programme",                  group: "Science & Technology" },
  { slug: "major-ports",                 title: "Major Ports of India",               group: "Economy & Infrastructure" },
  { slug: "unesco-world-heritage",       title: "UNESCO World Heritage Sites",        group: "Environment & Heritage" },
  { slug: "protected-areas",             title: "Protected Areas",                    group: "Environment & Heritage" },
];

// ── Asset loading ─────────────────────────────────────────────────────────────

function loadBase64(filePath) {
  if (!fs.existsSync(filePath)) return "";
  return fs.readFileSync(filePath).toString("base64");
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

function buildAuthorPhotoSrc() {
  const b64 = loadBase64(path.join(IMG_DIR, "bharat-choudhary.png"));
  return b64 ? `data:image/png;base64,${b64}` : "";
}

function buildLogoSrc() {
  // Standard dark-on-white SVG — perfect for white cover/back pages
  const b64 = loadBase64(path.join(IMG_DIR, "bharatnotes-logo.svg"));
  return b64 ? `data:image/svg+xml;base64,${b64}` : "";
}

// ── Content extraction ────────────────────────────────────────────────────────

/**
 * Extract inner HTML of <div class="gk-main"> using depth-counting
 * (handles arbitrarily nested divs without fragile regex).
 */
function extractGkMain(htmlStr) {
  const OPEN_TAG = '<div class="gk-main">';
  const start = htmlStr.indexOf(OPEN_TAG);
  if (start === -1) return null;

  let depth = 1;
  let pos   = start + OPEN_TAG.length;

  while (pos < htmlStr.length && depth > 0) {
    const nextOpen  = htmlStr.indexOf("<div", pos);
    const nextClose = htmlStr.indexOf("</div>", pos);
    if (nextClose === -1) break;
    if (nextOpen !== -1 && nextOpen < nextClose) { depth++; pos = nextOpen + 4; }
    else                                         { depth--; pos = nextClose + 6; }
  }

  return htmlStr.substring(start + OPEN_TAG.length, pos - 6);
}

// ── CSS ───────────────────────────────────────────────────────────────────────

function buildCSS() {
  // Oxford academic base — exact match with pdf.js
  const oxford = [
    "*, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }",

    // Page rules — running footer with page numbers; suppressed on title/toc/back
    "@page { size:A4; margin:22mm 20mm 26mm 20mm;" +
      " @bottom-left { content:'bharatnotes.com'; font-family:'Inter',sans-serif; font-size:6.5pt; color:#bbb; letter-spacing:0.06em; }" +
      " @bottom-center { content:'Static GK Compendium'; font-family:'Inter',sans-serif; font-size:6pt; color:#ccc; }" +
      " @bottom-right { content:counter(page) ' / ' counter(pages); font-family:'Inter',sans-serif; font-size:6.5pt; color:#999; } }",
    "@page :first { margin:0; @bottom-left{content:none} @bottom-center{content:none} @bottom-right{content:none} }",
    "@page toc { margin:22mm 20mm 26mm 20mm; @bottom-left{content:none} @bottom-center{content:none} @bottom-right{content:none} }",
    "@page backpage { margin:0; @bottom-left{content:none} @bottom-center{content:none} @bottom-right{content:none} }",

    // Typography base
    "body { font-family:'Crimson Pro','Georgia','Times New Roman',serif; font-size:12.5pt; line-height:1.72; color:#1a1a1a; background:#fff; }",

    // ── TOC PAGE ──
    ".toc-pg { page:toc; page-break-after:always; padding:28mm 28mm 20mm; }",
    ".toc-pg__eyebrow { font-family:'Inter',sans-serif; font-size:7.5pt; font-weight:700; letter-spacing:0.18em; text-transform:uppercase; color:#999; margin-bottom:10px; }",
    ".toc-pg__title { font-family:'Crimson Pro','Georgia',serif; font-size:28pt; font-weight:400; color:#1a1a1a; border-bottom:2px solid #1a1a1a; padding-bottom:10px; margin-bottom:24px; letter-spacing:-0.01em; }",
    ".toc-pg__list { list-style:none; padding:0; margin:0; }",
    ".toc-group { font-family:'Inter',sans-serif; font-size:7pt; font-weight:700; letter-spacing:0.16em; text-transform:uppercase; color:#999; border-top:1px solid #eee; padding-top:12px; margin:16px 0 4px; }",
    ".toc-e { display:flex; align-items:baseline; gap:10px; padding:7px 0; border-bottom:0.5px solid #eee; page-break-inside:avoid; }",
    ".toc-e__num { font-family:'Inter',sans-serif; font-size:7.5pt; font-weight:700; color:#bbb; flex-shrink:0; min-width:18px; }",
    ".toc-e__title { font-family:'Crimson Pro','Georgia',serif; font-size:13pt; color:#1a1a1a; text-decoration:none; flex:1; line-height:1.4; }",

    // ── TITLE PAGE ──
    ".tp { width:210mm; height:297mm; display:flex; flex-direction:column; padding:0; page-break-after:always; position:relative; overflow:hidden; }",
    ".tp-top { background:#fff; color:#1a1a1a; padding:28mm 28mm 24mm; flex-shrink:0; border-bottom:2px solid #1a1a1a; }",
    ".tp-brand-row { display:flex; justify-content:space-between; align-items:center; margin-bottom:40px; }",
    ".tp-logo { font-family:'Crimson Pro','Georgia',serif; font-size:14.5pt; font-weight:600; color:#1a1a1a; letter-spacing:-0.01em; }",
    ".tp-logo span { color:#b8860b; }",
    ".tp-paper { font-family:'Inter',sans-serif; font-size:7.5pt; font-weight:600; letter-spacing:0.18em; text-transform:uppercase; color:#888; }",
    ".tp-chapter-line { font-family:'Inter',sans-serif; font-size:8.5pt; font-weight:600; letter-spacing:0.1em; text-transform:uppercase; color:#999; margin-bottom:10px; }",
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
    ".tp-btn { display:inline-block; margin-top:16px; padding:7px 18px; font-family:'Inter',sans-serif; font-size:7.5pt; font-weight:600; letter-spacing:0.08em; text-transform:uppercase; color:#1a1a1a; background:#fff; border:1px solid #ccc; border-radius:4px; text-decoration:none; margin-right:10px; }",
    ".tp-btn--accent { color:#92400e; background:#fffbeb; border-color:#fde68a; }",
    ".tp-ujiyari { margin-top:20px; padding:14px 18px; background:#fffbeb; border:1px solid #fde68a; border-radius:6px; display:flex; align-items:center; gap:14px; }",
    ".tp-ujiyari-icon { font-size:18pt; flex-shrink:0; }",
    ".tp-ujiyari-text { font-family:'Inter',sans-serif; font-size:8pt; color:#78350f; line-height:1.5; }",
    ".tp-ujiyari-text strong { color:#451a03; font-weight:700; }",
    ".tp-ujiyari-btn { flex-shrink:0; display:inline-block; padding:6px 14px; font-family:'Inter',sans-serif; font-size:7pt; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; color:#92400e; background:#fff; border:1.5px solid #d97706; border-radius:4px; text-decoration:none; }",

    // ── CHAPTER content wrapper ──
    ".ct { padding:0; max-width:152mm; }",
    ".ct-sub { font-family:'Inter',sans-serif; font-size:9pt; color:#888; letter-spacing:0.1em; text-transform:uppercase; margin-bottom:20px; padding-bottom:16px; border-bottom:1px solid #1a1a1a; }",
    ".ct h1 { font-family:'Crimson Pro','Georgia',serif; font-size:24.5pt; font-weight:600; color:#1a1a1a; margin-bottom:6px; line-height:1.2; letter-spacing:-0.01em; }",
    // Chapter page-break on h1 except first chapter
    ".chapter + .chapter .ct h1 { page-break-before:always; break-before:page; }",
    ".ct h2 { font-family:'Crimson Pro','Georgia',serif; font-size:16pt; font-weight:600; color:#1a1a1a; margin:28px 0 8px; padding-bottom:6px; border-bottom:0.5px solid #ccc; page-break-after:avoid; break-after:avoid; }",
    ".ct h2:first-child { margin-top:0; }",
    ".ct h3 { font-family:'Crimson Pro','Georgia',serif; font-size:13pt; font-weight:400; font-style:italic; color:#333; margin:18px 0 6px; page-break-after:avoid; break-after:avoid; }",
    ".ct p { margin-bottom:6px; line-height:1.6; }",
    ".ct ul, .ct ol { margin:0 0 10px 20px; }",
    ".ct li { margin-bottom:3px; }",
    ".ft { margin-top:24px; padding-top:10px; border-top:0.5px solid #ccc; display:flex; justify-content:space-between; font-family:'Inter',sans-serif; font-size:7.5pt; color:#999; letter-spacing:0.04em; }",

    // ── GK TABLES (Oxford booktabs applied to .gk-table) ──
    ".gk-section { margin-bottom:16px; page-break-inside:avoid; break-inside:avoid; }",
    ".gk-section-title { font-family:'Crimson Pro','Georgia',serif; font-size:16pt; font-weight:600; color:#1a1a1a; margin:28px 0 8px; padding-bottom:6px; border-bottom:0.5pt solid #ccc; page-break-after:avoid; break-after:avoid; }",
    ".gk-scroll { overflow:visible; }",
    ".gk-table { width:100%; border-collapse:collapse; margin:12px 0; font-size:10.5pt; line-height:1.5; page-break-inside:avoid; break-inside:avoid; }",
    ".gk-table tr { page-break-inside:avoid; break-inside:avoid; }",
    ".gk-table thead { border-top:2px solid #1a1a1a; border-bottom:1px solid #1a1a1a; }",
    ".gk-table th { padding:7px 10px; text-align:left; font-family:'Crimson Pro','Georgia',serif; font-size:9.5pt; font-weight:700; letter-spacing:0.04em; text-transform:uppercase; color:#333; background:none; }",
    ".gk-table td { padding:7px 10px; border-bottom:none; color:#333; vertical-align:top; font-size:10.5pt; }",
    ".gk-table tbody tr:last-child td { border-bottom:2px solid #1a1a1a; }",
    ".gk-table tbody tr:nth-child(even) td { background:rgba(0,0,0,0.015); }",
    ".gk-note { margin:8px 0; padding:8px 14px; border-left:2px solid #999; font-style:italic; color:#555; font-size:11pt; line-height:1.6; }",
    ".gk-tip { margin:10px 0; padding:10px 14px; border:0.5px solid #ccc; border-left:3px solid #888; background:#fafaf8; font-size:11pt; line-height:1.6; page-break-inside:avoid; break-inside:avoid; }",
    "a { color:#1a4a8a; text-decoration:none; }",
    "strong { font-weight:700; }",
    "em { font-style:italic; }",

    // ── CHAPTER page-break ──
    ".chapter { page-break-before:always; break-before:page; }",
    ".chapter:first-of-type { page-break-before:auto; break-before:auto; }",

    // ── BACK PAGE ──
    ".bp { page-break-before:always; page:backpage; min-height:250mm; padding:28mm 26mm 20mm; display:flex; flex-direction:column; }",
    ".bp-header { display:flex; align-items:center; gap:18px; margin-bottom:32px; }",
    ".bp-photo { width:72px; height:72px; border-radius:50%; object-fit:cover; border:3px solid #e2e8f0; }",
    ".bp-author-name { font-family:'Georgia',serif; font-size:16pt; color:#1a1a1a; margin-bottom:2px; }",
    ".bp-author-role { font-family:'Inter',sans-serif; font-size:8pt; color:#888; margin-bottom:6px; }",
    ".bp-author-links { display:flex; gap:8px; }",
    ".bp-link { display:inline-block; padding:4px 12px; font-family:'Inter',sans-serif; font-size:7pt; font-weight:600; letter-spacing:0.06em; text-transform:uppercase; color:#555; background:#f1f5f9; border:1px solid #e2e8f0; border-radius:3px; }",
    ".bp-sep { border:none; border-top:1px solid #e2e8f0; margin:0 0 28px; }",
    ".bp-sites { display:flex; gap:24px; margin-bottom:28px; }",
    ".bp-site { flex:1; padding:18px 20px; border:1px solid #e2e8f0; border-radius:8px; }",
    ".bp-site-label { font-family:'Inter',sans-serif; font-size:6.5pt; font-weight:700; letter-spacing:0.14em; text-transform:uppercase; color:#999; margin-bottom:8px; }",
    ".bp-site-name { font-family:'Georgia',serif; font-size:15pt; color:#1a1a1a; margin-bottom:4px; }",
    ".bp-site-desc { font-size:9pt; color:#666; line-height:1.5; margin-bottom:12px; }",
    ".bp-site-features { display:flex; flex-wrap:wrap; gap:6px; margin-bottom:14px; }",
    ".bp-feat { font-family:'Inter',sans-serif; font-size:6.5pt; font-weight:600; letter-spacing:0.04em; text-transform:uppercase; color:#666; padding:3px 8px; background:#f8fafc; border:1px solid #e2e8f0; border-radius:3px; }",
    ".bp-site-btn { display:inline-block; padding:7px 18px; font-family:'Inter',sans-serif; font-size:7.5pt; font-weight:600; letter-spacing:0.08em; text-transform:uppercase; border-radius:4px; text-decoration:none; }",
    ".bp-site-btn--primary { color:#1a1a1a; background:#fff; border:1.5px solid #1a1a1a; }",
    ".bp-site-btn--accent { color:#92400e; background:#fff; border:1.5px solid #b45309; }",
    ".bp-ad { padding:16px 20px; background:#fafaf5; border:1px dashed #d4d4c8; border-radius:6px; margin-bottom:28px; display:flex; align-items:center; gap:16px; }",
    ".bp-ad-text { flex:1; }",
    ".bp-ad-title { font-family:'Inter',sans-serif; font-size:8pt; font-weight:700; color:#555; letter-spacing:0.06em; text-transform:uppercase; margin-bottom:3px; }",
    ".bp-ad-desc { font-size:8.5pt; color:#777; line-height:1.5; }",
    ".bp-ad-cta { flex-shrink:0; padding:7px 16px; font-family:'Inter',sans-serif; font-size:7pt; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; color:#555; background:#fff; border:1.5px solid #ccc; border-radius:4px; }",
    ".bp-footer { margin-top:auto; text-align:center; padding-top:16px; border-top:1px solid #e2e8f0; }",
    ".bp-disc { font-size:7.5pt; color:#bbb; line-height:1.7; margin-bottom:6px; }",
    ".bp-copy { font-family:'Inter',sans-serif; font-size:7pt; color:#ccc; letter-spacing:0.1em; text-transform:uppercase; }",

    "@media print { * { -webkit-print-color-adjust:exact !important; print-color-adjust:exact !important; } }",
  ];

  return oxford.join(" ");
}

// ── HTML builders ─────────────────────────────────────────────────────────────

function buildTitlePage(photoSrc, logoSrc) {
  const paperText   = "Static GK Compendium · UPSC Prelims";
  const descText    = `Complete reference for UPSC Prelims — ${CHAPTERS.length} chapters covering ` +
                      "Polity, History, Geography, Awards, Science & Environment. " +
                      `All facts verified to ${GENERATED_DATE}.`;

  const logoHTML = logoSrc
    ? `<img src="${logoSrc}" alt="BharatNotes" height="36" style="display:block;">`
    : `<div class="tp-logo">Bharat<span>Notes</span></div>`;

  return `
  <div class="tp">
    <div class="tp-top">
      <div class="tp-brand-row">
        ${logoHTML}
        <div class="tp-paper">${paperText}</div>
      </div>
      <h1 class="tp-title">Static GK<br>Compendium</h1>
      <p class="tp-desc">${descText}</p>
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
      items += `
        <li class="toc-e">
          <span class="toc-e__num">${num++}</span>
          <span class="toc-e__title">${ch.title}</span>
        </li>`;
    }
  }

  return `
  <div class="toc-pg">
    <div class="toc-pg__eyebrow">BharatNotes &middot; Static GK Compendium &middot; UPSC Prelims</div>
    <h2 class="toc-pg__title">Contents</h2>
    <ol class="toc-pg__list">${items}</ol>
  </div>`;
}

function buildChapterPage(chapter, index) {
  const content = chapter.content ||
    `<p style="color:#888;font-style:italic;">Content unavailable — run npm run build first.</p>`;

  return `
  <div class="chapter">
    <div class="ct">
      <h1>${chapter.title}</h1>
      <div class="ct-sub">Static GK · ${chapter.group} · ${GENERATED_DATE}</div>
      ${content}
      <div class="ft">
        <span>bharatnotes.com</span>
        <span>${GENERATED_DATE}</span>
      </div>
    </div>
  </div>`;
}

function buildBackPage(photoSrc, logoSrc) {
  const logoHTML = logoSrc
    ? `<img src="${logoSrc}" alt="BharatNotes" height="40" style="display:block;margin-bottom:28px;">`
    : "";

  return `
  <div class="bp">
    ${logoHTML}
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
          book, or ed-tech brand right here — inside every PDF download.
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
  const css      = buildCSS();
  const titlePg  = buildTitlePage(photoSrc, logoSrc);
  const tocPg    = buildTOCPage(chapters);
  const chapters_ = chapters.map((ch, i) => buildChapterPage(ch, i)).join("\n");
  const backPg   = buildBackPage(photoSrc, logoSrc);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>BharatNotes Static GK Compendium — UPSC Prelims</title>
  <style>${crimsonCSS}${css}</style>
</head>
<body>
  ${titlePg}
  ${tocPg}
  ${chapters_}
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
      displayHeaderFooter: false,   // page numbers via CSS @page counter
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
      reject(new Error(
        `Timed out after ${API_TIMEOUT_MS / 1000}s. ` +
        "Try again — serverless cold-starts can be slow."
      ));
    });

    req.write(body);
    req.end();
  });
}

// ── Main ──────────────────────────────────────────────────────────────────────

async function main() {
  console.log("╔═══════════════════════════════════════════╗");
  console.log("║  BharatNotes Static GK PDF Generator      ║");
  console.log("╚═══════════════════════════════════════════╝\n");

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  // 1. Load fonts + author photo from src/
  console.log("🔤 Loading Crimson Pro fonts...");
  const crimsonCSS = buildCrimsonFontsCSS();
  console.log(`  ${crimsonCSS ? "✓ fonts loaded" : "⚠ fonts not found — will fall back to Georgia"}`);

  console.log("📷 Loading author photo & logo...");
  const photoSrc = buildAuthorPhotoSrc();
  const logoSrc  = buildLogoSrc();
  console.log(`  ${photoSrc ? "✓ photo" : "⚠ photo not found"} · ${logoSrc ? "✓ logo" : "⚠ logo not found"}\n`);

  // 2. Extract gk-main content from each built chapter
  console.log(`📂 Extracting content from ${CHAPTERS.length} chapters...\n`);
  let skipped = 0;

  for (const ch of CHAPTERS) {
    const htmlPath = path.join(DIST_DIR, "resources", "static-gk", ch.slug, "index.html");

    if (!fs.existsSync(htmlPath)) {
      console.warn(`  ⚠  SKIP: ${ch.slug} — not found (run npm run build first)`);
      ch.content = null;
      skipped++;
      continue;
    }

    ch.content = extractGkMain(fs.readFileSync(htmlPath, "utf-8"));

    if (!ch.content) {
      console.warn(`  ⚠  SKIP: ${ch.slug} — .gk-main not found in HTML`);
      ch.content = null;
      skipped++;
    } else {
      console.log(`  ✓ ${ch.title}`);
    }
  }

  if (skipped) console.warn(`\n  ${skipped} chapter(s) skipped.\n`);

  // 3. Assemble combined HTML
  console.log("\n📝 Assembling combined HTML...");
  const combinedHTML = buildCombinedHTML(CHAPTERS, photoSrc, logoSrc, crimsonCSS);
  const sizeMB = (Buffer.byteLength(combinedHTML, "utf-8") / 1024 / 1024).toFixed(1);
  console.log(`  Total size: ${sizeMB} MB (fonts embedded)`);

  // 4. Call Puppeteer API
  console.log(`\n🚀 Calling PDF API (timeout: ${API_TIMEOUT_MS / 1000}s)...`);
  console.log("  This takes 30–90 seconds — Crimson Pro fonts slow down initial render.\n");

  const t0 = Date.now();
  let pdfBuffer;

  try {
    pdfBuffer = await callAPI(combinedHTML);
  } catch (err) {
    console.error(`\n❌ Failed: ${err.message}`);
    process.exit(1);
  }

  const elapsed   = ((Date.now() - t0) / 1000).toFixed(1);
  const pdfSizeKB = Math.round(pdfBuffer.length / 1024);
  console.log(`  ✓ PDF received in ${elapsed}s (${pdfSizeKB} KB)\n`);

  // 5. Save
  fs.writeFileSync(OUTPUT_FILE, pdfBuffer);
  console.log(`✅ Saved: ${OUTPUT_FILE}`);
  console.log(`   ${pdfSizeKB} KB · ${CHAPTERS.length} chapters · ${GENERATED_DATE}\n`);
  console.log("Next steps:");
  console.log("  1. npm run build");
  console.log("  2. git add src/downloads/bharatnotes-static-gk.pdf && git commit && git push");
}

main().catch(err => { console.error(err); process.exit(1); });
