#!/usr/bin/env node
/**
 * BharatNotes — Static GK Compendium PDF Generator
 *
 * Reads all built static-GK pages from dist/, extracts their content,
 * assembles a single print-ready HTML document with cover + TOC + all
 * 28 chapters + back page, and calls the Puppeteer API to produce one PDF.
 *
 * Run after `npm run build`:
 *   node scripts/generate-gk-pdf.js
 *
 * Output: src/downloads/bharatnotes-static-gk.pdf
 *   → Eleventy passthrough copies it to dist/downloads/
 *   → Deployed to Cloudflare Pages
 *   → Accessible at /downloads/bharatnotes-static-gk.pdf
 */

"use strict";

const fs   = require("fs");
const path = require("path");
const https = require("https");

// ── Config ───────────────────────────────────────────────────────────────────

const API_URL    = "https://rbse-pdf.vercel.app/api/generate";
const DIST_DIR   = path.resolve(__dirname, "../dist");
const OUTPUT_DIR = path.resolve(__dirname, "../src/downloads");
const OUTPUT_FILE = path.join(OUTPUT_DIR, "bharatnotes-static-gk.pdf");
const GENERATED_DATE = new Date().toLocaleDateString("en-IN", {
  year: "numeric", month: "long", day: "numeric"
});

// API timeout: 120s — large document takes time on Puppeteer
const API_TIMEOUT_MS = 120_000;

// ── Chapter manifest (sidebar order) ─────────────────────────────────────────

const CHAPTERS = [
  // ── Polity & Constitution
  { slug: "constitutional-provisions",  title: "Constitutional Provisions",          group: "Polity & Constitution" },
  { slug: "schedules",                  title: "Schedules of the Constitution",       group: "Polity & Constitution" },
  { slug: "constitutional-bodies",      title: "Constitutional & Statutory Bodies",   group: "Polity & Constitution" },
  { slug: "committees-commissions",     title: "Committees & Commissions",            group: "Polity & Constitution" },
  { slug: "five-year-plans",            title: "Five Year Plans & NITI Aayog",        group: "Polity & Constitution" },
  { slug: "presidents-of-india",        title: "Presidents of India",                 group: "Polity & Constitution" },
  { slug: "prime-ministers-of-india",   title: "Prime Ministers of India",            group: "Polity & Constitution" },
  { slug: "lok-sabha-speakers",         title: "Lok Sabha Speakers",                  group: "Polity & Constitution" },
  { slug: "chief-justices-of-india",    title: "Chief Justices of India",             group: "Polity & Constitution" },
  // ── History & Governance
  { slug: "viceroys-governors-general", title: "Viceroys & Governors-General",        group: "History & Governance" },
  // ── India — Facts & Identity
  { slug: "rivers-of-india",            title: "Rivers of India",                     group: "India — Facts & Identity" },
  { slug: "bharat-ratna",               title: "Bharat Ratna",                        group: "India — Facts & Identity" },
  { slug: "padma-awards",               title: "Padma Awards",                        group: "India — Facts & Identity" },
  { slug: "national-symbols",           title: "National Symbols",                    group: "India — Facts & Identity" },
  { slug: "states-capitals",            title: "States & Capitals",                   group: "India — Facts & Identity" },
  { slug: "geographical-facts",         title: "Geographical Facts",                  group: "India — Facts & Identity" },
  { slug: "india-firsts",               title: "India's Firsts",                      group: "India — Facts & Identity" },
  { slug: "international-organisations",title: "International Organisations",         group: "India — Facts & Identity" },
  { slug: "gallantry-awards",           title: "Gallantry Awards",                    group: "India — Facts & Identity" },
  // ── Language & Culture
  { slug: "classical-languages",        title: "Classical Languages",                 group: "Language & Culture" },
  { slug: "scheduled-languages",        title: "Scheduled Languages (8th Schedule)",  group: "Language & Culture" },
  { slug: "important-days",             title: "Important Days",                      group: "Language & Culture" },
  { slug: "classical-dance-forms",      title: "Classical Dance Forms",               group: "Language & Culture" },
  // ── Science & Technology
  { slug: "isro-space-missions",        title: "ISRO & Space Missions",               group: "Science & Technology" },
  { slug: "nuclear-programme",          title: "Nuclear Programme",                   group: "Science & Technology" },
  // ── Economy & Infrastructure
  { slug: "major-ports",                title: "Major Ports of India",                group: "Economy & Infrastructure" },
  // ── Environment & Heritage
  { slug: "unesco-world-heritage",      title: "UNESCO World Heritage Sites",         group: "Environment & Heritage" },
  { slug: "protected-areas",            title: "Protected Areas",                     group: "Environment & Heritage" },
];

// ── HTML extraction ───────────────────────────────────────────────────────────

/**
 * Extract the inner HTML of the first <div class="gk-main"> element.
 * Uses a depth counter (not a regex) to handle nested divs correctly.
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

    if (nextOpen !== -1 && nextOpen < nextClose) {
      depth++;
      pos = nextOpen + 4;      // advance past "<div"
    } else {
      depth--;
      pos = nextClose + 6;     // advance past "</div>"
    }
  }

  // pos now points just after the final </div>
  const end = pos - 6; // exclusive — strip that final </div>
  return htmlStr.substring(start + OPEN_TAG.length, end);
}

// ── HTML builders ─────────────────────────────────────────────────────────────

function buildPrintCSS() {
  return `
    *, *::before, *::after { box-sizing: border-box; }

    @page { size: A4; margin: 18mm 15mm 20mm 15mm; }

    body {
      font-family: 'Segoe UI', system-ui, -apple-system, Arial, sans-serif;
      font-size: 8.5pt;
      color: #1a1a1a;
      margin: 0;
      padding: 0;
      line-height: 1.45;
    }

    /* ── Cover page ── */
    .cover {
      page-break-after: always;
      height: 257mm;           /* A4 height minus margins */
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 10mm 0;
    }
    .cover-top {}
    .cover-logo {
      font-size: 28pt;
      font-weight: 800;
      color: #0f4c3a;
      letter-spacing: -1px;
      margin-bottom: 4mm;
    }
    .cover-logo span { color: #d4a017; }
    .cover-eyebrow {
      font-size: 9pt;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #666;
      margin-bottom: 6mm;
    }
    .cover-title {
      font-size: 26pt;
      font-weight: 700;
      color: #0f4c3a;
      line-height: 1.2;
      margin: 0 0 4mm;
    }
    .cover-subtitle {
      font-size: 11pt;
      color: #444;
      margin: 0 0 8mm;
      max-width: 140mm;
    }
    .cover-rule {
      width: 40mm;
      height: 3pt;
      background: linear-gradient(to right, #0f4c3a, #d4a017);
      margin: 6mm 0;
      border: none;
    }
    .cover-chapters {
      display: flex;
      flex-wrap: wrap;
      gap: 3mm;
      margin: 4mm 0 6mm;
    }
    .cover-pill {
      background: #f0f7f4;
      border: 0.5pt solid #0f4c3a;
      color: #0f4c3a;
      font-size: 7pt;
      padding: 1.5mm 3mm;
      border-radius: 2mm;
      font-weight: 600;
    }
    .cover-bottom {
      border-top: 1pt solid #e0e0e0;
      padding-top: 4mm;
    }
    .cover-author {
      font-size: 10pt;
      font-weight: 700;
      color: #0f4c3a;
    }
    .cover-role { font-size: 8.5pt; color: #666; margin-bottom: 2mm; }
    .cover-meta {
      font-size: 7.5pt;
      color: #888;
      display: flex;
      gap: 8mm;
      flex-wrap: wrap;
      margin-top: 2mm;
    }
    .cover-meta strong { color: #555; }
    .cover-ujiyari {
      margin-top: 4mm;
      padding: 3mm 4mm;
      background: #fffbef;
      border-left: 3pt solid #d4a017;
      font-size: 7.5pt;
      color: #555;
    }
    .cover-ujiyari strong { color: #333; }

    /* ── TOC page ── */
    .toc {
      page-break-after: always;
    }
    .toc-title {
      font-size: 18pt;
      font-weight: 700;
      color: #0f4c3a;
      border-bottom: 2pt solid #0f4c3a;
      padding-bottom: 3mm;
      margin-bottom: 6mm;
    }
    .toc-group-label {
      font-size: 7.5pt;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #d4a017;
      font-weight: 700;
      margin: 5mm 0 2mm;
      border-bottom: 0.5pt solid #e0e0e0;
      padding-bottom: 1mm;
    }
    .toc-entry {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      padding: 1.5mm 0;
      border-bottom: 0.3pt dotted #ddd;
      font-size: 8.5pt;
    }
    .toc-entry__num {
      color: #0f4c3a;
      font-weight: 700;
      min-width: 6mm;
      font-size: 7.5pt;
    }
    .toc-entry__title { flex: 1; padding: 0 3mm; color: #1a1a1a; }
    .toc-entry__dots {
      flex: 1;
      border-bottom: 0.5pt dotted #bbb;
      margin: 0 2mm 1mm;
      min-width: 10mm;
    }
    .toc-note {
      margin-top: 8mm;
      font-size: 7.5pt;
      color: #888;
      font-style: italic;
    }

    /* ── Chapter pages ── */
    .chapter {
      page-break-before: always;
    }
    .chapter-header {
      border-bottom: 2pt solid #0f4c3a;
      padding-bottom: 3mm;
      margin-bottom: 6mm;
    }
    .chapter-group {
      font-size: 7pt;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: #d4a017;
      font-weight: 700;
      margin-bottom: 1.5mm;
    }
    .chapter-title {
      font-size: 16pt;
      font-weight: 700;
      color: #0f4c3a;
      margin: 0;
      line-height: 1.2;
    }

    /* ── GK sections & tables ── */
    .gk-section {
      margin-bottom: 8mm;
      page-break-inside: avoid;
    }
    .gk-section-title {
      font-size: 10pt;
      font-weight: 700;
      color: #0f4c3a;
      border-left: 3pt solid #d4a017;
      padding-left: 3mm;
      margin: 0 0 3mm;
      line-height: 1.3;
    }
    .gk-scroll { overflow: visible; }
    .gk-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 7.5pt;
      margin-bottom: 4mm;
    }
    .gk-table th {
      background-color: #0f4c3a;
      color: #ffffff;
      padding: 2.5mm 3mm;
      text-align: left;
      font-weight: 600;
      font-size: 7.5pt;
    }
    .gk-table td {
      padding: 2mm 3mm;
      border: 0.4pt solid #ccc;
      vertical-align: top;
      line-height: 1.4;
    }
    .gk-table tr:nth-child(even) td { background-color: #f3f9f6; }
    .gk-table tr:hover td { background-color: inherit; }
    .gk-note {
      font-style: italic;
      color: #555;
      border-left: 2pt solid #d4a017;
      padding: 1.5mm 3mm;
      margin: 3mm 0;
      font-size: 7.5pt;
      background: #fffdf5;
    }
    .gk-tip {
      background: #fffbef;
      border: 0.5pt solid #d4a017;
      padding: 3mm 4mm;
      margin: 4mm 0;
      font-size: 7.5pt;
      border-radius: 1.5mm;
      page-break-inside: avoid;
    }
    .gk-tip strong { color: #0f4c3a; }

    /* ── Back page ── */
    .back {
      page-break-before: always;
      height: 257mm;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
    .back-logo {
      font-size: 32pt;
      font-weight: 800;
      color: #0f4c3a;
      margin-bottom: 3mm;
    }
    .back-logo span { color: #d4a017; }
    .back-tagline {
      font-size: 11pt;
      color: #555;
      margin-bottom: 8mm;
    }
    .back-sites {
      display: flex;
      gap: 8mm;
      justify-content: center;
      margin-bottom: 8mm;
    }
    .back-site {
      border: 1pt solid #0f4c3a;
      padding: 4mm 8mm;
      border-radius: 3mm;
      color: #0f4c3a;
      font-weight: 700;
      font-size: 10pt;
    }
    .back-site span { font-size: 8pt; font-weight: 400; color: #666; display: block; }
    .back-divider {
      width: 30mm;
      height: 2pt;
      background: linear-gradient(to right, #0f4c3a, #d4a017);
      border: none;
      margin: 6mm auto;
    }
    .back-meta {
      font-size: 7.5pt;
      color: #999;
    }

    /* ── Print overrides ── */
    @media print {
      * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
      a { color: inherit !important; text-decoration: none; }
    }

    strong { font-weight: 700; }
    em { font-style: italic; }
  `;
}

function buildCoverPage(chapters) {
  const groups = [...new Set(chapters.map(c => c.group))];
  const pills  = groups.map(g =>
    `<span class="cover-pill">${g}</span>`
  ).join("");

  return `
  <div class="cover">
    <div class="cover-top">
      <div class="cover-logo">Bharat<span>Notes</span></div>
      <div class="cover-eyebrow">UPSC Prelims — Static GK Reference</div>
      <h1 class="cover-title">Static GK Compendium</h1>
      <p class="cover-subtitle">
        ${chapters.length} chapters of verified, exam-focused static GK —
        polity, history, geography, awards, science &amp; environment.
        All facts verified as of ${GENERATED_DATE}.
      </p>
      <hr class="cover-rule">
      <div class="cover-chapters">${pills}</div>
      <div style="font-size:8pt;color:#666;">
        ${chapters.length} chapters &nbsp;·&nbsp; UPSC Prelims 2025–26
      </div>
    </div>
    <div class="cover-bottom">
      <div class="cover-author">Bharat Choudhary</div>
      <div class="cover-role">Founder, BharatNotes &amp; Ujiyari</div>
      <div class="cover-meta">
        <span><strong>Source</strong> bharatnotes.com</span>
        <span><strong>Generated</strong> ${GENERATED_DATE}</span>
        <span><strong>License</strong> Free for personal &amp; educational use</span>
      </div>
      <div class="cover-ujiyari">
        <strong>📰 Ujiyari.com</strong> — Pair these static notes with daily current affairs,
        editorial analysis &amp; monthly compilations for complete UPSC preparation.
      </div>
    </div>
  </div>`;
}

function buildTOCPage(chapters) {
  // Group chapters by section
  const groups = {};
  for (const ch of chapters) {
    (groups[ch.group] = groups[ch.group] || []).push(ch);
  }

  let rows = "";
  let num = 1;
  for (const [groupName, items] of Object.entries(groups)) {
    rows += `<div class="toc-group-label">${groupName}</div>`;
    for (const ch of items) {
      rows += `
        <div class="toc-entry">
          <span class="toc-entry__num">${num++}</span>
          <span class="toc-entry__title">${ch.title}</span>
        </div>`;
    }
  }

  return `
  <div class="toc">
    <div class="toc-title">Contents</div>
    ${rows}
    <p class="toc-note">
      All content verified via WebSearch. Data current to ${GENERATED_DATE}.
      For the latest updates visit bharatnotes.com.
    </p>
  </div>`;
}

function buildChapterPage(chapter) {
  if (!chapter.content) {
    console.warn(`  ⚠️  No content for: ${chapter.slug}`);
    return `<div class="chapter">
      <div class="chapter-header">
        <div class="chapter-group">${chapter.group}</div>
        <h2 class="chapter-title">${chapter.title}</h2>
      </div>
      <p style="color:#888;font-style:italic;">Content not found — re-run after npm run build.</p>
    </div>`;
  }

  return `
  <div class="chapter">
    <div class="chapter-header">
      <div class="chapter-group">${chapter.group}</div>
      <h2 class="chapter-title">${chapter.title}</h2>
    </div>
    ${chapter.content}
  </div>`;
}

function buildBackPage() {
  return `
  <div class="back">
    <div class="back-logo">Bharat<span>Notes</span></div>
    <div class="back-tagline">Free UPSC GS Notes — Syllabus-wise &amp; Exam-ready</div>
    <div class="back-sites">
      <div class="back-site">
        bharatnotes.com
        <span>GS Notes &amp; Static GK</span>
      </div>
      <div class="back-site">
        ujiyari.com
        <span>Daily Current Affairs</span>
      </div>
    </div>
    <hr class="back-divider">
    <div class="back-meta">
      Generated ${GENERATED_DATE} &nbsp;·&nbsp; Free for personal &amp; educational use
    </div>
  </div>`;
}

function buildCombinedHTML(chapters) {
  const css     = buildPrintCSS();
  const cover   = buildCoverPage(chapters);
  const toc     = buildTOCPage(chapters);
  const content = chapters.map(buildChapterPage).join("\n");
  const back    = buildBackPage();

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>BharatNotes Static GK Compendium — UPSC Prelims</title>
  <style>${css}</style>
</head>
<body>
  ${cover}
  ${toc}
  ${content}
  ${back}
</body>
</html>`;
}

// ── API call ──────────────────────────────────────────────────────────────────

function callAPI(html) {
  return new Promise((resolve, reject) => {
    const payload = JSON.stringify({
      html,
      filename: "bharatnotes-static-gk",
      displayHeaderFooter: true,
      headerTemplate: `
        <div style="font-size:8px;color:#aaa;padding:0 15mm;width:100%;
                    display:flex;justify-content:space-between;align-items:center;">
          <span style="color:#0f4c3a;font-weight:600;">BharatNotes — Static GK Compendium</span>
          <span class="title"></span>
        </div>`,
      footerTemplate: `
        <div style="font-size:8px;color:#aaa;padding:0 15mm;width:100%;
                    display:flex;justify-content:space-between;align-items:center;">
          <span>bharatnotes.com</span>
          <span><span class="pageNumber"></span> / <span class="totalPages"></span></span>
        </div>`,
    });

    const bodyBuffer = Buffer.from(payload, "utf-8");

    const url = new URL(API_URL);
    const options = {
      hostname: url.hostname,
      path:     url.pathname,
      method:   "POST",
      headers: {
        "Content-Type":   "application/json",
        "Content-Length": bodyBuffer.length,
      },
    };

    const req = https.request(options, (res) => {
      if (res.statusCode !== 200) {
        let errBody = "";
        res.on("data", d => errBody += d);
        res.on("end", () => reject(new Error(
          `API returned HTTP ${res.statusCode}: ${errBody.slice(0, 200)}`
        )));
        return;
      }

      const chunks = [];
      res.on("data",  chunk => chunks.push(chunk));
      res.on("end",   () => resolve(Buffer.concat(chunks)));
      res.on("error", reject);
    });

    req.on("error", reject);
    req.setTimeout(API_TIMEOUT_MS, () => {
      req.destroy();
      reject(new Error(
        `API timed out after ${API_TIMEOUT_MS / 1000}s. ` +
        "Try again, or run with --split flag to generate per-section PDFs."
      ));
    });

    req.write(bodyBuffer);
    req.end();
  });
}

// ── Main ──────────────────────────────────────────────────────────────────────

async function main() {
  console.log("╔═══════════════════════════════════════════╗");
  console.log("║  BharatNotes Static GK PDF Generator      ║");
  console.log("╚═══════════════════════════════════════════╝\n");

  // 1. Ensure output directory exists
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  // 2. Extract content from each built chapter
  console.log(`📂 Extracting content from ${CHAPTERS.length} chapters...\n`);
  let skipped = 0;

  for (const ch of CHAPTERS) {
    const htmlPath = path.join(DIST_DIR, "resources", "static-gk", ch.slug, "index.html");

    if (!fs.existsSync(htmlPath)) {
      console.warn(`  ⚠️  SKIP: ${ch.slug} — file not found at ${htmlPath}`);
      ch.content = null;
      skipped++;
      continue;
    }

    const rawHtml = fs.readFileSync(htmlPath, "utf-8");
    ch.content = extractGkMain(rawHtml);

    if (!ch.content) {
      console.warn(`  ⚠️  SKIP: ${ch.slug} — .gk-main not found in HTML`);
      ch.content = null;
      skipped++;
    } else {
      console.log(`  ✓ ${ch.title}`);
    }
  }

  if (skipped > 0) {
    console.warn(`\n  ${skipped} chapter(s) skipped. Run 'npm run build' first.\n`);
  }

  // 3. Build combined HTML
  console.log("\n📝 Building combined HTML...");
  const combinedHTML = buildCombinedHTML(CHAPTERS);
  const htmlSizeKB   = Math.round(Buffer.byteLength(combinedHTML, "utf-8") / 1024);
  console.log(`  Total HTML size: ${htmlSizeKB} KB`);

  // 4. Call API
  console.log(`\n🚀 Calling PDF API (timeout: ${API_TIMEOUT_MS / 1000}s)...`);
  console.log("  This may take 30–90 seconds for a large document.\n");

  const startTime = Date.now();
  let pdfBuffer;

  try {
    pdfBuffer = await callAPI(combinedHTML);
  } catch (err) {
    console.error(`\n❌ PDF generation failed: ${err.message}`);
    console.error("\nTroubleshooting:");
    console.error("  • If timeout: try running again (serverless functions can be slow on first call)");
    console.error("  • If server error: check https://rbse-pdf.vercel.app is reachable");
    process.exit(1);
  }

  const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
  const pdfSizeKB = Math.round(pdfBuffer.length / 1024);

  console.log(`  ✓ PDF received in ${elapsed}s (${pdfSizeKB} KB)\n`);

  // 5. Save output
  fs.writeFileSync(OUTPUT_FILE, pdfBuffer);
  console.log(`✅ Saved: ${OUTPUT_FILE}`);
  console.log(`   Size:  ${pdfSizeKB} KB`);
  console.log(`   URL:   /downloads/bharatnotes-static-gk.pdf  (after next build)\n`);
  console.log("Next steps:");
  console.log("  1. npm run build          (copies PDF to dist/downloads/)");
  console.log("  2. git add src/downloads/bharatnotes-static-gk.pdf");
  console.log("  3. git commit + push      (Cloudflare Pages deploys it)");
}

main().catch(err => {
  console.error("Unexpected error:", err);
  process.exit(1);
});
