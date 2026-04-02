#!/usr/bin/env node
/**
 * BharatNotes — Batch OG Image Generator
 * Scans all topic pages (layout: topic.njk), reads frontmatter,
 * and generates a unique 1200×630 OG image for each.
 *
 * Output: src/images/og/{url-slug}.jpg
 * URL slug rule: page URL with leading/trailing slashes stripped,
 *                internal slashes replaced with "--"
 *                e.g. /subjects/polity/parliament/ → subjects--polity--parliament.jpg
 *
 * Usage:
 *   node scripts/generate-all-og.js           # generate missing only
 *   node scripts/generate-all-og.js --force   # regenerate all
 *   node scripts/generate-all-og.js --dry-run # list files, don't write
 */
"use strict";

const fs   = require("fs");
const path = require("path");
const { renderOG } = require("./generate-og-image");

const ROOT        = path.resolve(__dirname, "..");
const CONTENT_DIR = path.join(ROOT, "src", "content");
const OUT_DIR     = path.join(ROOT, "src", "images", "og");

const FORCE   = process.argv.includes("--force");
const DRY_RUN = process.argv.includes("--dry-run");

// ── Frontmatter parser ────────────────────────────────────────────────────────
function parseFrontmatter(src) {
  const m = src.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) return {};
  const yaml = m[1];
  const out  = {};

  // title / description / layout / subject
  for (const key of ["title", "description", "layout", "subject"]) {
    const r = new RegExp(`^${key}:\\s*["']?(.+?)["']?\\s*$`, "m");
    const match = yaml.match(r);
    if (match) out[key] = match[1].trim();
  }

  // gs_papers: [ gs1, gs2, ... ]
  const gsPapersBlock = yaml.match(/^gs_papers:\s*\n((?:\s+-\s+\S+\n?)+)/m);
  if (gsPapersBlock) {
    out.gs_papers = [...gsPapersBlock[1].matchAll(/^\s+-\s+(\S+)/gm)].map(m => m[1]);
  }

  // tags: [ tag1, tag2, ... ]
  const tagsBlock = yaml.match(/^tags:\s*\n((?:\s+-\s+\S+\n?)+)/m);
  if (tagsBlock) {
    out.tags = [...tagsBlock[1].matchAll(/^\s+-\s+(\S+)/gm)].map(m => m[1]);
  }

  return out;
}

// ── URL → OG filename slug ────────────────────────────────────────────────────
function fileToSlug(filePath) {
  // Relative path from CONTENT_DIR, no extension
  let rel = path.relative(CONTENT_DIR, filePath).replace(/\\/g, "/");
  rel = rel.replace(/\/index\.md$/, "").replace(/\.md$/, "");
  // Strip leading content prefix if any
  rel = rel.replace(/^content\//, "");
  // Replace slashes with double-dash
  return rel.replace(/\//g, "--") || "home";
}

// ── Tags builder ──────────────────────────────────────────────────────────────
const GS_LABEL = { gs1: "GS1", gs2: "GS2", gs3: "GS3", gs4: "GS4", essay: "Essay" };
const SUBJ_LABEL = {
  polity:                  "Polity",
  economy:                 "Economy",
  geography:               "Geography",
  "history-culture":       "History",
  environment:             "Environment",
  "science-tech":          "Science & Tech",
  "international-relations": "Int. Relations",
  society:                 "Society",
  ethics:                  "Ethics",
  security:                "Security",
  "general-science":       "General Science",
  "disaster-management":   "Disaster Mgmt",
  mapping:                 "Mapping",
  ncert:                   "NCERT",
};

function buildTags(fm) {
  const parts = [];

  // GS papers
  for (const p of (fm.gs_papers || [])) {
    if (GS_LABEL[p]) parts.push(GS_LABEL[p]);
  }

  // Subject
  const subj = fm.subject || (fm.tags || []).find(t => SUBJ_LABEL[t]);
  if (subj && SUBJ_LABEL[subj]) parts.push(SUBJ_LABEL[subj]);

  // Standard anchors
  parts.push("UPSC Prelims");
  parts.push("Free");
  parts.push("BharatNotes");

  // Deduplicate, keep order
  return [...new Set(parts)].join(" · ");
}

// ── Scan all topic files ──────────────────────────────────────────────────────
function walkDir(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkDir(full, files);
    else if (entry.name.endsWith(".md")) files.push(full);
  }
  return files;
}

function collectTopics() {
  return walkDir(CONTENT_DIR)
    .filter(f => {
      // Skip key-term articles — they have no layout
      if (f.includes("key-term-articles")) return false;
      const src = fs.readFileSync(f, "utf8");
      return src.includes("layout: topic.njk");
    })
    .map(f => {
      const src = fs.readFileSync(f, "utf8");
      const fm  = parseFrontmatter(src);
      return { file: f, fm };
    });
}

// ── Main ──────────────────────────────────────────────────────────────────────
async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const topics = collectTopics();
  console.log(`\n📄 Found ${topics.length} topic pages\n`);

  let generated = 0, skipped = 0, errors = 0;
  const startTime = Date.now();

  for (let i = 0; i < topics.length; i++) {
    const { file, fm } = topics[i];
    const slug   = fileToSlug(file);
    const outPath = path.join(OUT_DIR, `${slug}.jpg`);

    if (!FORCE && fs.existsSync(outPath)) {
      skipped++;
      continue;
    }

    if (DRY_RUN) {
      console.log(`  [dry] ${slug}.jpg  ← ${fm.title || "(no title)"}`);
      generated++;
      continue;
    }

    try {
      await renderOG({
        title: fm.title,
        desc:  fm.description,
        tags:  buildTags(fm),
        out:   outPath,
      });
      generated++;
      const pct = Math.round((i + 1) / topics.length * 100);
      process.stdout.write(`\r  ✅ ${generated} generated, ${skipped} skipped  [${pct}%] — ${fm.title?.slice(0, 50) || slug}           `);
    } catch (err) {
      errors++;
      process.stdout.write(`\n  ❌ ${slug}: ${err.message}\n`);
    }
  }

  const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
  console.log(`\n\n✅ Done — ${generated} generated, ${skipped} skipped, ${errors} errors — ${elapsed}s`);

  if (!DRY_RUN && generated > 0) {
    console.log(`\n   Images in: src/images/og/  (${generated} files)`);
    console.log(`   Add to .gitignore if you don't want to commit them,`);
    console.log(`   or commit + push to deploy to Cloudflare.\n`);
  }
}

main().catch(e => { console.error("❌ Fatal:", e.message); process.exit(1); });
