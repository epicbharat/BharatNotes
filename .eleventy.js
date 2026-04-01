module.exports = function (eleventyConfig) {
  // ── Markdown library with custom container support ──────────────
  const markdownIt = require("markdown-it");
  const markdownItContainer = require("markdown-it-container");

  const md = markdownIt({ html: true, linkify: true, typographer: false });

  // Map container names used in .md files → existing CSS classes + title labels
  const boxMap = {
    "ncert-box--key-term":     { css: "ncert-box--explainer", title: "Key Term" },
    "ncert-box--explainer":    { css: "ncert-box--explainer", title: "Explainer" },
    "ncert-box--upsc-connect": { css: "ncert-box--upsc",      title: "UPSC Connect" },
    "ncert-box--beyond-book":  { css: "ncert-box--bridge",    title: "Beyond the Book" },
    "ncert-box--key-facts":    { css: "ncert-box--fact",      title: "Key Facts" },
    "ncert-box--exam-tip":     { css: "ncert-box--fact",      title: "Exam Tip" },
  };

  md.use(markdownItContainer, "ncert-box", {
    validate(params) {
      return params.trim().startsWith("ncert-box--");
    },
    render(tokens, idx) {
      if (tokens[idx].nesting === 1) {
        const name = tokens[idx].info.trim();
        const cfg = boxMap[name] || { css: "ncert-box--explainer", title: "Note" };
        return `<div class="ncert-box ${cfg.css}">\n<div class="ncert-box__title">${cfg.title}</div>\n<div class="ncert-box__body">\n`;
      }
      return `</div></div>\n`;
    }
  });

  eleventyConfig.setLibrary("md", md);

  // ── Markdown inline filter (renders **bold**, *italic*, links) ──
  const { marked } = require("marked");
  eleventyConfig.addFilter("md", function(value) {
    if (!value) return "";
    return marked.parseInline(String(value));
  });

  // ── Unescape HTML entities for titles ──
  eleventyConfig.addFilter("unescape", function(value) {
    if (!value) return "";
    return String(value).replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&#39;/g, "'").replace(/&quot;/g, '"');
  });

  // Passthrough copies
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/fonts");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("src/llms.txt");
  eleventyConfig.addPassthroughCopy("src/BingSiteAuth.xml");
  eleventyConfig.addPassthroughCopy("src/ads.txt");
  eleventyConfig.addPassthroughCopy("src/manifest.json");
  eleventyConfig.addPassthroughCopy("src/.htaccess");

  // ── Collections ─────────────────────────────────────────

  // All topic pages (content under /subjects/)
  eleventyConfig.addCollection("allTopics", (api) =>
    api.getAll()
      .filter(i => (i.data.tags || []).includes("topic"))
      .sort((a, b) => (a.data.title || "").localeCompare(b.data.title || ""))
  );

  // Per-subject collections (dynamic — one collection per subject slug)
  const subjectSlugs = [
    "polity", "economy", "geography", "history-culture",
    "environment", "science-tech", "international-relations",
    "society", "ethics", "security", "general-science", "disaster-management"
  ];
  subjectSlugs.forEach(slug => {
    eleventyConfig.addCollection(slug, (api) =>
      api.getAll()
        .filter(i => (i.data.subject === slug || (i.data.tags || []).includes(slug)))
        .filter(i => (i.data.tags || []).includes("topic"))
        .sort((a, b) => (a.data.order || 999) - (b.data.order || 999))
    );
  });

  // Per-GS-paper collections (for Mains section views)
  ["gs1", "gs2", "gs3", "gs4", "essay"].forEach(paper => {
    eleventyConfig.addCollection(paper, (api) =>
      api.getAll()
        .filter(i => {
          const papers = i.data.gs_papers || [];
          const tags = i.data.tags || [];
          return papers.includes(paper) || tags.includes(paper);
        })
        .filter(i => (i.data.tags || []).includes("topic"))
        .sort((a, b) => (a.data.order || 999) - (b.data.order || 999))
    );
  });

  // ── Filters ─────────────────────────────────────────────

  eleventyConfig.addFilter("readableDate", (dateObj) =>
    new Date(dateObj).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })
  );

  eleventyConfig.addFilter("isoDate", (dateObj) => {
    const d = new Date(dateObj);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  });
  eleventyConfig.addFilter("isoDateTime", (dateObj) => {
    const d = new Date(dateObj);
    const ymd = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
    return `${ymd}T00:00:00+05:30`;
  });

  eleventyConfig.addFilter("limit", (arr, n) => (arr || []).slice(0, n));
  eleventyConfig.addFilter("includes", (arr, val) => (arr || []).includes(val));

  eleventyConfig.addFilter("slugify", (str) =>
    str.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "")
  );

  eleventyConfig.addFilter("json", (value) => JSON.stringify(value));
  eleventyConfig.addFilter("upper", (str) => (str || "").toUpperCase());
  eleventyConfig.addFilter("padStart", (val, len, char) => String(val).padStart(len, char || "0"));

  eleventyConfig.addFilter("truncate", (str, len) => {
    str = str || "";
    return str.length <= len ? str : str.slice(0, len) + "...";
  });

  eleventyConfig.addFilter("unique", (arr) => [...new Set(arr || [])]);

  eleventyConfig.addFilter("selectattr", (arr, attr, op, val) => {
    return (arr || []).filter(item => {
      const v = attr.split(".").reduce((o, k) => (o || {})[k], item);
      if (op === "equalto") return v === val;
      if (op === "includes") return (v || []).includes(val);
      return !!v;
    });
  });

  // Count topics for a subject slug
  eleventyConfig.addFilter("countBySubject", (allTopics, subjectSlug) => {
    return (allTopics || []).filter(t =>
      t.data.subject === subjectSlug || (t.data.tags || []).includes(subjectSlug)
    ).length;
  });

  // Count topics for a GS paper
  eleventyConfig.addFilter("countByPaper", (allTopics, paper) => {
    return (allTopics || []).filter(t =>
      (t.data.gs_papers || []).includes(paper) || (t.data.tags || []).includes(paper)
    ).length;
  });

  // Reading time
  eleventyConfig.addFilter("readingTime", (content) => {
    const words = (content || "").replace(/<[^>]*>/g, "").split(/\s+/).length;
    return Math.max(1, Math.round(words / 200));
  });

  // ── Config ──────────────────────────────────────────────

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data",
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
  };
};
