/**
 * BharatNotes PYQ Database
 * Organised by subject slug → array of question objects
 *
 * Question schema:
 * {
 *   id:          string  — unique, e.g. "pol-001"
 *   topic:       string  — e.g. "Preamble"
 *   subtopic:    string? — optional finer grouping
 *   year:        number  — e.g. 2021
 *   type:        "prelims" | "mains"
 *   qtype:       "statement" | "direct" | "assertion"
 *
 *   // statement type — stem + numbered statements + closing question
 *   stem:        string  — text before statements
 *   statements:  string[]
 *   tail:        string? — question after statements (default: "Which of the above is/are correct?")
 *
 *   // direct type — single stem, no statements
 *   stem:        string
 *
 *   // assertion type
 *   assertion:   string
 *   reason:      string
 *
 *   options:     string[]  — 4 options; assertion type uses fixed AR options (omit this field)
 *   correct:     number    — 0-indexed correct option
 *   explanation: string    — shown after answering
 * }
 *
 * Assertion-Reason fixed options (auto-applied when qtype === "assertion"):
 *   0: Both A and R are true and R is the correct explanation of A
 *   1: Both A and R are true but R is NOT the correct explanation of A
 *   2: A is true but R is false
 *   3: A is false but R is true
 */

'use strict';

// ─── Updated & fact-checked subject arrays ─────────────────────────────────
const polityBase        = require('./pyq-polity-updated');
const economyBase       = require('./pyq-economy-updated');
const geographyBase     = require('./pyq-geography-updated');
const environmentBase   = require('./pyq-environment-updated');
const generalSciBase    = require('./pyq-general-science-updated');

// ─── New subjects ───────────────────────────────────────────────────────────
const histCulture       = require('./pyq-history-culture');
const sciTech           = require('./pyq-science-tech');
const intlRelations     = require('./pyq-international-relations');
const society           = require('./pyq-society');
const security          = require('./pyq-security');
const disasterMgmt      = require('./pyq-disaster-management');

// ─── 2024-2025 additions (object keyed by subject slug) ────────────────────
const additions         = require('./pyq-2024-2025-additions');

module.exports = {

  polity:                 [...polityBase,      ...(additions.polity           || [])],
  economy:                [...economyBase,     ...(additions.economy          || [])],
  geography:              [...geographyBase,   ...(additions.geography        || [])],
  environment:            [...environmentBase, ...(additions.environment      || [])],
  'general-science':      [...generalSciBase,  ...(additions['general-science']|| [])],

  'history-culture':      histCulture,
  'science-tech':         sciTech,
  'international-relations': intlRelations,
  society:                society,
  security:               security,
  'disaster-management':  disasterMgmt,

  ethics:                 [],   // GS4 Mains only — no Prelims MCQs

};
