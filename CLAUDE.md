# BHARATNOTES — Project Guide for AI Agents

> **Last updated: March 26, 2026**

---

## Project Overview

**BharatNotes.com** — A static UPSC GS study portal, complementary to Ujiyari.com (current affairs).

**Site:** https://bharatnotes.com
**Tech:** Eleventy (11ty) v3 + Nunjucks + Vanilla CSS/JS
**Hosting:** Hostinger (static files only)

---

## MANDATORY: Verify-Before-Write Rule (NO EXCEPTIONS)

**Every factual claim on BharatNotes MUST be verified via WebSearch before being written.** This is a CORE REQUIREMENT — the site must be 100% factually accurate.

### What Must Be Verified

| Category | Examples | Why It Fails Without Verification |
|----------|---------|-----------------------------------|
| Constitutional articles & amendments | Article numbers, amendment years, what they changed | Amendments renumbered; provisions moved between articles |
| Dates & years | When laws/schemes were enacted, founded | Off-by-one year errors are common in LLM training data |
| Committee/Commission names & members | Chairman names, year of constitution, key recommendations | Frequently confused (e.g., Sarkaria vs Punchhi Commission) |
| Statistics & data | GDP figures, population data, area measurements | Numbers change annually; LLM data is stale |
| Scheme details | Budget allocation, ministry, beneficiaries, renamed schemes | Schemes renamed, merged, budgets revised in Union Budget |
| International bodies | Member counts, founding year, headquarters | Members change (BRICS expanded 2024, ASEAN still 10) |
| Case law | Landmark judgments, year, bench, ruling | Case names often misspelled; year confused |
| IUCN/wildlife data | Red List status, population counts, habitat | Reassessed every few years |

### Verification Workflow

1. **Before writing any factual content**, search for the specific claim:
   - `"Constituent Assembly India members" site:legislative.gov.in OR site:mea.gov.in`
   - `"73rd Amendment 1992" Panchayati Raj`
   - `"Basic Structure doctrine Kesavananda" year`
2. **Cross-check with at least 2 sources** — prefer official government sources:
   - legislative.gov.in (Constitution text)
   - pib.gov.in (government press releases)
   - prsindia.org (PRS Legislative Research)
   - india.gov.in (National Portal)
   - rbi.org.in (economic data)
3. **Only write after confirmation** — never write from memory alone
4. **After writing a full topic page**, do a fact-check pass — re-verify every number, date, and name

### Source Priority

1. **Official government sources** (legislative.gov.in, pib.gov.in, india.gov.in)
2. **PRS Legislative Research** (prsindia.org)
3. **Standard UPSC textbooks** (Laxmikanth, Ramesh Singh — cite edition)
4. **Reputable news sources** (The Hindu, Indian Express)
5. **Never use** coaching site content as primary source — only for cross-reference

---

## Content Structure

### Topic Files
**Location:** `src/content/{gs1,gs2,gs3,gs4,essay}/topic-slug.md`

```yaml
---
layout: topic.njk
title: "Topic Title"
gs_paper: gs2
syllabus_topic: "Section Name from Syllabus"
description: "SEO description"
date: YYYY-MM-DD
tags:
  - gs2
  - topic
---
```

### URL Structure
Topics output to `/{gs_paper}/{slug}/` via `content.11tydata.js` permalink override.

---

## Design System

All variables in `src/css/tokens.css`. Never hardcode values.
- Brand: emerald green `#0f4c3a`
- Accent: warm gold `#d4a017`
- Fonts: Inter (body) + Playfair Display (headings)

---

## Rules for AI Agents

1. **NEVER write factual content without WebSearch verification** — this is rule #1
2. Never edit `/dist/` — always edit source in `/src/`
3. Never hardcode CSS values — use tokens
4. Content files are Markdown with Nunjucks frontmatter
5. Every topic page must include: key concepts, PYQ relevance, exam strategy tips
6. Cross-link to Ujiyari.com for current affairs integration
7. Run `npm run build` after changes to verify no errors
8. Do not add React, Vue, TypeScript, Sass, Tailwind, or any framework
