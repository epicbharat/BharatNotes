/**
 * Build-time parser: scans all topic .md files for ## Vocabulary and ## Key Terms
 * sections, extracts H3 entries, and returns structured arrays for the hub pages.
 */
const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const CONTENT_DIR = path.join(__dirname, "..", "content", "subjects");

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

/**
 * Parse a single markdown file for vocab / key-terms H3 entries.
 * Returns { vocab: [...], terms: [...] }
 */
function parseFile(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  const { data: fm, content } = matter(raw);

  // Build the topic URL from file path
  const rel = path.relative(CONTENT_DIR, filePath).replace(/\\/g, "/").replace(/\.md$/, "");
  const topicUrl = "/subjects/" + rel + "/";

  const lines = content.split("\n");
  const vocab = [];
  const terms = [];

  let currentSection = null; // "vocab" or "terms"
  let currentEntry = null;

  function pushEntry() {
    if (!currentEntry || !currentEntry.term) return;
    const target = currentSection === "vocab" ? vocab : terms;
    target.push(currentEntry);
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Detect section headers
    if (/^## /.test(line)) {
      pushEntry();
      currentEntry = null;
      const heading = line.replace(/^## /, "").trim();
      if (/^(?:key\s+)?vocabular(?:y|ies)$/i.test(heading)) {
        currentSection = "vocab";
      } else if (/^key\s+(?:terms?|concepts?)$/i.test(heading)) {
        currentSection = "terms";
      } else {
        currentSection = null;
      }
      continue;
    }

    if (!currentSection) continue;

    // Detect H3 entries
    if (/^### /.test(line)) {
      pushEntry();
      currentEntry = {
        term: line.replace(/^### /, "").trim(),
        slug: slugify(line.replace(/^### /, "").trim()),
        pronunciation: "",
        definition: "",
        origin: "",
        upsc: "",
        subject: fm.subject || "",
        gs_papers: fm.gs_papers || [],
        topicTitle: fm.title || "",
        topicUrl: topicUrl,
      };
      continue;
    }

    if (!currentEntry) continue;

    // Parse bold-prefixed list items
    const fieldMatch = line.match(/^- \*\*(\w[\w\s]*):\*\*\s*(.*)/);
    if (fieldMatch) {
      const key = fieldMatch[1].trim().toLowerCase();
      const val = fieldMatch[2].trim();
      if (key === "pronunciation") currentEntry.pronunciation = val;
      else if (key === "definition") currentEntry.definition = val;
      else if (key === "origin" || key === "context") currentEntry.origin = val;
      else if (key === "upsc" || key === "upsc context" || key === "upsc relevance") currentEntry.upsc = val;
    }
  }
  pushEntry();

  return { vocab, terms };
}

/**
 * Recursively find all .md files under a directory.
 */
function findMarkdown(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(findMarkdown(full));
    } else if (entry.name.endsWith(".md")) {
      results.push(full);
    }
  }
  return results;
}

module.exports = function () {
  const files = findMarkdown(CONTENT_DIR);
  const allVocab = [];
  const allTerms = [];

  for (const f of files) {
    const { vocab, terms } = parseFile(f);
    allVocab.push(...vocab);
    allTerms.push(...terms);
  }

  // Sort alphabetically by term
  allVocab.sort((a, b) => a.term.localeCompare(b.term));
  allTerms.sort((a, b) => a.term.localeCompare(b.term));

  return { vocab: allVocab, terms: allTerms };
};
