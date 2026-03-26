// BharatNotes — Oxford-Style PDF Generator
// Uses Vercel Puppeteer API: POST html → returns application/pdf

(function () {
  "use strict";

  const PDF_API_URL = "https://rbse-pdf.vercel.app/api/generate";

  // Convert author photo to base64 at load time so it embeds in the PDF
  var authorPhotoB64 = "";
  (function preloadPhoto() {
    var img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = function () {
      try {
        var c = document.createElement("canvas");
        c.width = img.naturalWidth;
        c.height = img.naturalHeight;
        c.getContext("2d").drawImage(img, 0, 0);
        authorPhotoB64 = c.toDataURL("image/png");
      } catch (e) { /* cross-origin or tainted canvas — skip */ }
    };
    img.src = "/img/bharat-choudhary.png";
  })();

  /* ══════════════════════════════════════════════════════════
     cleanClone — aggressively sanitize the DOM clone for PDF
     ══════════════════════════════════════════════════════════ */
  function cleanClone(article) {
    var clone = article.cloneNode(true);
    clone.removeAttribute("data-pagefind-body");

    // 1. Reveal everything hidden
    clone.querySelectorAll("[hidden]").forEach(function (el) {
      el.removeAttribute("hidden");
    });

    // 2. Open all <details>
    clone.querySelectorAll("details").forEach(function (el) {
      el.setAttribute("open", "");
    });

    // 3. Remove interactive-only elements
    clone.querySelectorAll([
      ".pyq-check-btn",
      ".pyq-options",
      ".pyq-answer-toggle",
      ".pyq-result",
      ".topic-tab",
      ".toc-mobile",
      "select",
      "button",
      ".pyq-empty",
      "svg"
    ].join(",")).forEach(function (el) {
      el.remove();
    });

    // 4. Unwrap section-card divs — keep content, strip wrapper
    //    (We'll style content directly instead of relying on website classes)
    clone.querySelectorAll(".section-card").forEach(function (card) {
      // Mark h2 inside for special treatment
      var h2 = card.querySelector("h2");
      if (h2) {
        if (card.classList.contains("section-card--upsc")) {
          h2.setAttribute("data-pdf-type", "upsc");
        } else if (card.classList.contains("section-card--pyq")) {
          h2.setAttribute("data-pdf-type", "pyq");
        } else if (card.classList.contains("section-card--news")) {
          h2.setAttribute("data-pdf-type", "news");
        }
      }
      // Unwrap: move children out, remove wrapper
      while (card.firstChild) {
        card.parentNode.insertBefore(card.firstChild, card);
      }
      card.remove();
    });

    // 5. Unwrap pyq-panel-inner (just a wrapper)
    clone.querySelectorAll(".pyq-panel-inner").forEach(function (el) {
      while (el.firstChild) {
        el.parentNode.insertBefore(el.firstChild, el);
      }
      el.remove();
    });

    // 6. Unwrap .table-wrap divs
    clone.querySelectorAll(".table-wrap").forEach(function (el) {
      while (el.firstChild) {
        el.parentNode.insertBefore(el.firstChild, el);
      }
      el.remove();
    });

    return clone;
  }

  /* ══════════════════════════════════════════════════════════
     buildTopicHTML — creates a self-contained Oxford-style HTML
     ══════════════════════════════════════════════════════════ */
  function buildTopicHTML() {
    var article = document.querySelector(".article-body");
    if (!article) return null;

    var titleEl = document.querySelector(".page-header__title");
    var badges = document.querySelectorAll(".gs-badge");
    var breadcrumb = document.querySelector(".breadcrumb");

    var titleText = titleEl ? titleEl.textContent.trim() : "BharatNotes";
    var dateStr = new Date().toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    // Paper labels
    var paperLabels = [];
    badges.forEach(function (b) {
      var key = b.textContent.trim().toLowerCase();
      var labels = {
        gs1: "General Studies I",
        gs2: "General Studies II",
        gs3: "General Studies III",
        gs4: "General Studies IV",
        essay: "Essay Paper"
      };
      paperLabels.push(labels[key] || b.textContent.trim());
    });
    var paperText = paperLabels.join(" · ");

    // Subject from breadcrumb
    var subjectText = "";
    if (breadcrumb) {
      var links = breadcrumb.querySelectorAll("a");
      if (links.length >= 3) subjectText = links[2].textContent.trim();
      else if (links.length >= 2) subjectText = links[1].textContent.trim();
    }

    // Clean the clone
    var clone = cleanClone(article);

    /* ──────────────────────
       CSS — Oxford Academic
       ────────────────────── */
    var css = [
      /* Reset & page */
      "*, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }",
      "@page { size:A4; margin:22mm 20mm 24mm 20mm; }",
      "@page :first { margin:0; }",

      /* Base typography — Crimson Pro body, EB Garamond display */
      "body { font-family:'Crimson Pro','Georgia','Times New Roman',serif; font-size:11.5pt; line-height:1.75; color:#1a1a1a; background:#fff; }",

      /* ─── TITLE PAGE ─── */
      ".tp { width:210mm; height:297mm; display:flex; flex-direction:column; padding:0; page-break-after:always; position:relative; overflow:hidden; }",
      ".tp-top { background:#0f172a; color:#fff; padding:28mm 28mm 24mm; flex-shrink:0; }",
      ".tp-brand-row { display:flex; justify-content:space-between; align-items:center; margin-bottom:40px; }",
      ".tp-logo { font-family:'EB Garamond','Georgia',serif; font-size:14pt; color:#fff; letter-spacing:-0.01em; }",
      ".tp-logo span { color:#d4a017; }",
      ".tp-paper { font-family:'Inter',sans-serif; font-size:7.5pt; font-weight:600; letter-spacing:0.18em; text-transform:uppercase; color:rgba(255,255,255,0.5); }",
      ".tp-title { font-family:'EB Garamond','Georgia',serif; font-size:38pt; font-weight:400; line-height:1.12; color:#fff; margin-bottom:16px; letter-spacing:-0.02em; }",
      ".tp-desc { font-size:11pt; color:rgba(255,255,255,0.6); line-height:1.6; max-width:140mm; }",
      ".tp-bottom { flex:1; display:flex; flex-direction:column; justify-content:flex-end; padding:24mm 28mm 28mm; }",
      ".tp-subject { font-family:'Inter',sans-serif; font-size:8pt; font-weight:600; letter-spacing:0.14em; text-transform:uppercase; color:#999; margin-bottom:auto; }",
      ".tp-author-block { display:flex; align-items:center; gap:16px; margin-bottom:24px; }",
      ".tp-photo { width:64px; height:64px; border-radius:50%; object-fit:cover; border:2px solid #e2e8f0; }",
      ".tp-author { font-family:'Inter',sans-serif; font-size:11pt; font-weight:600; color:#1a1a1a; }",
      ".tp-role { font-family:'Inter',sans-serif; font-size:8pt; color:#888; margin-top:3px; }",
      ".tp-info { display:flex; gap:20px; flex-wrap:wrap; font-family:'Inter',sans-serif; font-size:7.5pt; color:#999; }",
      ".tp-info span { display:inline-flex; align-items:center; gap:4px; }",
      ".tp-info strong { color:#555; font-weight:600; }",
      ".tp-btn { display:inline-block; margin-top:16px; padding:7px 18px; font-family:'Inter',sans-serif; font-size:7.5pt; font-weight:600; letter-spacing:0.08em; text-transform:uppercase; color:#0f172a; background:#f1f5f9; border:1px solid #e2e8f0; border-radius:4px; text-decoration:none; margin-right:10px; }",
      ".tp-btn--accent { color:#92400e; background:#fffbeb; border-color:#fde68a; }",
      ".tp-ujiyari { margin-top:20px; padding:14px 18px; background:#fffbeb; border:1px solid #fde68a; border-radius:6px; display:flex; align-items:center; gap:14px; }",
      ".tp-ujiyari-icon { font-size:18pt; flex-shrink:0; }",
      ".tp-ujiyari-text { font-family:'Inter',sans-serif; font-size:8pt; color:#78350f; line-height:1.5; }",
      ".tp-ujiyari-text strong { color:#451a03; font-weight:700; }",
      ".tp-ujiyari-btn { flex-shrink:0; display:inline-block; padding:6px 14px; font-family:'Inter',sans-serif; font-size:7pt; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; color:#fff; background:#d97706; border-radius:4px; text-decoration:none; }",

      /* ─── CONTENT ─── */
      ".ct { padding:0; }",
      ".ct h1 { font-family:'EB Garamond','Georgia',serif; font-size:24pt; font-weight:400; color:#1a1a1a; margin-bottom:6px; line-height:1.2; letter-spacing:-0.01em; }",
      ".ct-sub { font-family:'Inter',sans-serif; font-size:8.5pt; color:#888; letter-spacing:0.1em; text-transform:uppercase; margin-bottom:20px; padding-bottom:16px; border-bottom:1px solid #1a1a1a; }",

      /* Headings */
      ".ct h2 { font-family:'EB Garamond','Georgia',serif; font-size:17pt; font-weight:400; color:#1a1a1a; margin:32px 0 10px; padding-bottom:6px; border-bottom:0.5px solid #ccc; }",
      ".ct h2:first-child { margin-top:0; }",
      ".ct h2[data-pdf-type='upsc'] { color:#1a1a1a; border-bottom:1.5px solid #1a1a1a; }",
      ".ct h2[data-pdf-type='upsc']::before { content:'\\25B6  '; font-size:9pt; }",
      ".ct h2[data-pdf-type='pyq'] { color:#1a1a1a; border-bottom:1.5px solid #1a1a1a; }",
      ".ct h2[data-pdf-type='pyq']::before { content:'\\25C6  '; font-size:9pt; }",
      ".ct h2[data-pdf-type='news'] { color:#1a1a1a; border-bottom:1.5px solid #1a1a1a; }",
      ".ct h3 { font-family:'EB Garamond','Georgia',serif; font-size:13.5pt; font-weight:400; font-style:italic; color:#333; margin:24px 0 8px; }",
      ".ct h4 { font-family:'Inter','Helvetica Neue',sans-serif; font-size:9pt; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; color:#555; margin:20px 0 8px; }",

      /* Body text */
      ".ct p { margin-bottom:10px; text-align:justify; hyphens:auto; }",
      ".ct ul, .ct ol { margin:0 0 12px 20px; }",
      ".ct li { margin-bottom:4px; }",
      ".ct li::marker { color:#555; }",
      ".ct li strong { color:#1a1a1a; }",

      /* Blockquotes — scholarly indent */
      ".ct blockquote { margin:14px 0 14px 24px; padding:10px 16px; border-left:2px solid #999; font-style:italic; color:#444; font-size:11pt; line-height:1.65; background:none; }",
      ".ct blockquote strong { font-style:normal; color:#1a1a1a; }",

      /* Tables — Oxford booktabs style */
      ".ct table { width:100%; border-collapse:collapse; margin:16px 0; font-size:10.5pt; line-height:1.5; page-break-inside:auto; }",
      ".ct tr { page-break-inside:avoid; }",
      ".ct thead { border-top:2px solid #1a1a1a; border-bottom:1px solid #1a1a1a; }",
      ".ct th { padding:8px 10px; text-align:left; font-family:'Inter',sans-serif; font-size:8.5pt; font-weight:700; letter-spacing:0.06em; text-transform:uppercase; color:#333; background:none; }",
      ".ct td { padding:7px 10px; border-bottom:none; color:#333; vertical-align:top; }",
      ".ct tbody tr:last-child td { border-bottom:2px solid #1a1a1a; }",
      ".ct tbody tr:nth-child(even) td { background:rgba(0,0,0,0.015); }",

      /* Links */
      ".ct a { color:#1a1a1a; text-decoration:underline; text-decoration-color:#aaa; text-underline-offset:2px; }",

      /* Code */
      ".ct pre, .ct code { font-family:'JetBrains Mono','Fira Code','Courier New',monospace; font-size:9.5pt; }",
      ".ct code { background:#f5f5f5; padding:1px 4px; border-radius:2px; }",
      ".ct pre { background:#f5f5f5; padding:12px 14px; border-radius:3px; margin:12px 0; overflow-x:auto; white-space:pre-wrap; border:0.5px solid #ddd; }",

      /* Horizontal rules */
      ".ct hr { border:none; border-top:0.5px solid #ccc; margin:24px 0; }",

      /* PYQ cards — scholarly numbered questions */
      ".pyq-card { border:0.5px solid #ccc; margin:14px 0; padding:0; page-break-inside:avoid; }",
      ".pyq-meta { display:flex; align-items:center; gap:10px; padding:8px 14px; border-bottom:0.5px solid #ccc; background:#fafafa; }",
      ".pyq-q-number { display:inline-flex; align-items:center; justify-content:center; width:22px; height:22px; border-radius:50%; border:1.5px solid #1a1a1a; font-family:'Inter',sans-serif; font-size:7.5pt; font-weight:700; color:#1a1a1a; background:none; }",
      ".pyq-year-badge { font-family:'Inter',sans-serif; font-size:7.5pt; font-weight:600; color:#666; letter-spacing:0.06em; text-transform:uppercase; }",
      ".pyq-question-text { padding:12px 14px; font-size:11pt; line-height:1.65; }",
      ".pyq-question-text strong { color:#1a1a1a; }",
      ".pyq-card ol, .pyq-card ul { padding:0 14px; margin:0 0 10px 10px; }",
      ".pyq-card li { padding:2px 0; font-size:10.5pt; line-height:1.55; margin-bottom:2px; }",
      ".pyq-answer { padding:10px 14px; background:#f9f9f5; border-top:0.5px solid #ccc; font-size:10.5pt; line-height:1.6; }",
      ".pyq-answer strong { font-weight:700; }",
      ".pyq-card--mains { border-color:#aaa; }",
      ".pyq-card--mains .pyq-meta { background:#f7f7f2; }",
      ".pyq-section-heading { font-family:'EB Garamond','Georgia',serif; font-size:13pt; font-style:italic; color:#333; margin:20px 0 10px; }",

      /* Callout boxes — scholarly notes */
      ".callout { margin:14px 0; padding:12px 16px; border:0.5px solid #ccc; border-left:3px solid #555; background:#fafafa; font-size:10.5pt; }",
      ".callout-title { font-family:'Inter',sans-serif; font-size:8pt; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; color:#555; margin-bottom:6px; }",
      ".callout p { margin-bottom:4px; font-size:10.5pt; } .callout p:last-child { margin-bottom:0; }",
      ".callout ul, .callout ol { margin:4px 0 4px 18px; font-size:10.5pt; }",
      ".callout--info { border-left-color:#4a7ab5; }",
      ".callout--info .callout-title { color:#4a7ab5; }",
      ".callout--tip { border-left-color:#3a7a4a; }",
      ".callout--tip .callout-title { color:#3a7a4a; }",
      ".callout--exam { border-left-color:#b57a2a; }",
      ".callout--exam .callout-title { color:#b57a2a; }",
      ".callout--warning { border-left-color:#b54a2a; }",
      ".callout--warning .callout-title { color:#b54a2a; }",
      ".callout::before { display:none; }",

      /* Details/summary */
      "details { margin:10px 0; padding:8px 14px; border:0.5px solid #ccc; background:#fafafa; }",
      "details[open] { background:#f9f9f5; }",
      "summary { font-family:'Inter',sans-serif; font-size:9pt; font-weight:600; color:#333; cursor:default; }",

      /* Running footer */
      ".ft { margin-top:36px; padding-top:12px; border-top:0.5px solid #ccc; display:flex; justify-content:space-between; font-family:'Inter',sans-serif; font-size:7.5pt; color:#999; letter-spacing:0.04em; }",

      /* ─── BACK PAGE ─── */
      ".bp { page-break-before:always; min-height:250mm; padding:28mm 26mm 20mm; display:flex; flex-direction:column; }",

      /* Author & brand */
      ".bp-header { display:flex; align-items:center; gap:18px; margin-bottom:32px; }",
      ".bp-photo { width:72px; height:72px; border-radius:50%; object-fit:cover; border:3px solid #e2e8f0; }",
      ".bp-author-name { font-family:'EB Garamond','Georgia',serif; font-size:16pt; color:#1a1a1a; margin-bottom:2px; }",
      ".bp-author-role { font-family:'Inter',sans-serif; font-size:8pt; color:#888; margin-bottom:6px; }",
      ".bp-author-links { display:flex; gap:8px; }",
      ".bp-link { display:inline-block; padding:4px 12px; font-family:'Inter',sans-serif; font-size:7pt; font-weight:600; letter-spacing:0.06em; text-transform:uppercase; color:#555; background:#f1f5f9; border:1px solid #e2e8f0; border-radius:3px; text-decoration:none; }",

      /* Separator */
      ".bp-sep { border:none; border-top:1px solid #e2e8f0; margin:0 0 28px; }",

      /* Two-column sites */
      ".bp-sites { display:flex; gap:24px; margin-bottom:28px; }",
      ".bp-site { flex:1; padding:18px 20px; border:1px solid #e2e8f0; border-radius:8px; }",
      ".bp-site-label { font-family:'Inter',sans-serif; font-size:6.5pt; font-weight:700; letter-spacing:0.14em; text-transform:uppercase; color:#999; margin-bottom:8px; }",
      ".bp-site-name { font-family:'EB Garamond','Georgia',serif; font-size:15pt; color:#1a1a1a; margin-bottom:4px; }",
      ".bp-site-desc { font-size:9pt; color:#666; line-height:1.5; margin-bottom:12px; }",
      ".bp-site-features { display:flex; flex-wrap:wrap; gap:6px; margin-bottom:14px; }",
      ".bp-feat { font-family:'Inter',sans-serif; font-size:6.5pt; font-weight:600; letter-spacing:0.04em; text-transform:uppercase; color:#666; padding:3px 8px; background:#f8fafc; border:1px solid #e2e8f0; border-radius:3px; }",
      ".bp-site-btn { display:inline-block; padding:7px 18px; font-family:'Inter',sans-serif; font-size:7.5pt; font-weight:600; letter-spacing:0.08em; text-transform:uppercase; border-radius:4px; text-decoration:none; }",
      ".bp-site-btn--primary { color:#fff; background:#0f172a; }",
      ".bp-site-btn--accent { color:#fff; background:#b45309; }",

      /* Ad placement */
      ".bp-ad { padding:16px 20px; background:#fafaf5; border:1px dashed #d4d4c8; border-radius:6px; margin-bottom:28px; display:flex; align-items:center; gap:16px; }",
      ".bp-ad-text { flex:1; }",
      ".bp-ad-title { font-family:'Inter',sans-serif; font-size:8pt; font-weight:700; color:#555; letter-spacing:0.06em; text-transform:uppercase; margin-bottom:3px; }",
      ".bp-ad-desc { font-size:8.5pt; color:#777; line-height:1.5; }",
      ".bp-ad-cta { flex-shrink:0; padding:7px 16px; font-family:'Inter',sans-serif; font-size:7pt; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; color:#555; background:#fff; border:1.5px solid #ccc; border-radius:4px; text-decoration:none; }",

      /* Footer */
      ".bp-footer { margin-top:auto; text-align:center; padding-top:16px; border-top:1px solid #e2e8f0; }",
      ".bp-disc { font-size:7.5pt; color:#bbb; line-height:1.7; margin-bottom:6px; }",
      ".bp-copy { font-family:'Inter',sans-serif; font-size:7pt; color:#ccc; letter-spacing:0.1em; text-transform:uppercase; }"
    ].join(" ");

    /* ──────────────
       HTML Assembly
       ────────────── */
    var photoSrc = authorPhotoB64 || "https://bharatnotes.com/img/bharat-choudhary.png";
    var desc = document.querySelector(".page-header__subtitle");
    var descText = desc ? desc.textContent.trim() : "";

    var html =
      '<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><title>' + titleText + '</title>' +
      '<link rel="preconnect" href="https://fonts.googleapis.com">' +
      '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>' +
      '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@400;500;600;700&display=swap">' +
      '<style>' + css + '</style></head><body>' +

      /* ═══ TITLE PAGE ═══ */
      '<div class="tp">' +
        '<div class="tp-top">' +
          '<div class="tp-brand-row">' +
            '<div class="tp-logo">Bharat<span>Notes</span></div>' +
            '<div class="tp-paper">' + paperText + '</div>' +
          '</div>' +
          '<h1 class="tp-title">' + titleText + '</h1>' +
          (descText ? '<p class="tp-desc">' + descText + '</p>' : '') +
        '</div>' +
        '<div class="tp-bottom">' +
          (subjectText ? '<div class="tp-subject">' + subjectText + '</div>' : '') +
          '<div class="tp-author-block">' +
            '<img class="tp-photo" src="' + photoSrc + '" alt="" onerror="this.style.display=\'none\'">' +
            '<div><div class="tp-author">Bharat Choudhary</div><div class="tp-role">Founder, BharatNotes &amp; Ujiyari</div></div>' +
          '</div>' +
          '<div class="tp-info">' +
            '<span><strong>Source</strong> bharatnotes.com</span>' +
            '<span><strong>Generated</strong> ' + dateStr + '</span>' +
            '<span><strong>License</strong> Free for personal use</span>' +
          '</div>' +
          '<div style="display:flex; gap:10px; margin-top:16px;">' +
            '<a href="https://bharatnotes.com" class="tp-btn">BharatNotes.com &rarr;</a>' +
            '<a href="https://ujiyari.com" class="tp-btn tp-btn--accent">Ujiyari.com &rarr;</a>' +
          '</div>' +
          '<div class="tp-ujiyari">' +
            '<div class="tp-ujiyari-icon">📰</div>' +
            '<div class="tp-ujiyari-text"><strong>Ujiyari.com</strong> &mdash; Daily current affairs, editorial analysis, monthly compilations &amp; Mains answer writing practice. Pair these static notes with live news coverage.</div>' +
            '<a href="https://ujiyari.com" class="tp-ujiyari-btn">Visit &rarr;</a>' +
          '</div>' +
        '</div>' +
      '</div>' +

      /* ═══ CONTENT ═══ */
      '<div class="ct">' +
        '<h1>' + titleText + '</h1>' +
        '<div class="ct-sub">' + paperText + (subjectText ? '  ·  ' + subjectText : '') + '  ·  ' + dateStr + '</div>' +
        clone.innerHTML +
        '<div class="ft"><span>bharatnotes.com</span><span>' + dateStr + '</span></div>' +
      '</div>' +

      /* ═══ BACK PAGE ═══ */
      '<div class="bp">' +
        '<div class="bp-header">' +
          '<img class="bp-photo" src="' + photoSrc + '" alt="" onerror="this.style.display=\'none\'">' +
          '<div>' +
            '<div class="bp-author-name">Bharat Choudhary</div>' +
            '<div class="bp-author-role">Founder &amp; Content Lead</div>' +
            '<div class="bp-author-links">' +
              '<a class="bp-link" href="https://www.linkedin.com/in/epicbharat/">LinkedIn</a>' +
              '<a class="bp-link" href="https://bharatnotes.com">BharatNotes</a>' +
              '<a class="bp-link" href="https://ujiyari.com">Ujiyari</a>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<hr class="bp-sep">' +
        '<div class="bp-sites">' +
          '<div class="bp-site">' +
            '<div class="bp-site-label">Study Notes</div>' +
            '<div class="bp-site-name">BharatNotes</div>' +
            '<div class="bp-site-desc">Comprehensive, fact-verified GS notes with syllabus mapping, PYQ analysis &amp; exam strategy for every topic.</div>' +
            '<div class="bp-site-features">' +
              '<span class="bp-feat">Static Notes</span>' +
              '<span class="bp-feat">PYQ Analysis</span>' +
              '<span class="bp-feat">Exam Strategy</span>' +
            '</div>' +
            '<a href="https://bharatnotes.com" class="bp-site-btn bp-site-btn--primary">bharatnotes.com &rarr;</a>' +
          '</div>' +
          '<div class="bp-site">' +
            '<div class="bp-site-label">Current Affairs</div>' +
            '<div class="bp-site-name">Ujiyari</div>' +
            '<div class="bp-site-desc">Your daily companion for UPSC current affairs &mdash; editorials, PIB digests, monthly compilations &amp; Mains answer practice.</div>' +
            '<div class="bp-site-features">' +
              '<span class="bp-feat">Daily News</span>' +
              '<span class="bp-feat">Editorials</span>' +
              '<span class="bp-feat">Monthly Compilations</span>' +
              '<span class="bp-feat">Mains Practice</span>' +
            '</div>' +
            '<a href="https://ujiyari.com" class="bp-site-btn bp-site-btn--accent">ujiyari.com &rarr;</a>' +
          '</div>' +
        '</div>' +
        '<div class="bp-ad">' +
          '<div class="bp-ad-text">' +
            '<div class="bp-ad-title">Advertise with Us</div>' +
            '<div class="bp-ad-desc">Reach thousands of serious UPSC aspirants. Place your coaching, book, or ed-tech brand right here &mdash; inside every PDF download.</div>' +
          '</div>' +
          '<a class="bp-ad-cta" href="mailto:epicbharat@gmail.com">epicbharat@gmail.com</a>' +
        '</div>' +
        '<div class="bp-footer">' +
          '<p class="bp-disc">All content sourced from official government publications &amp; standard UPSC references. Free for personal use.</p>' +
          '<div class="bp-copy">&copy; ' + new Date().getFullYear() + ' BharatNotes.com &middot; 100% Free &middot; No Login Required</div>' +
        '</div>' +
      '</div>' +

      '</body></html>';

    return html;
  }

  function showPDFToast(msg, type) {
    var existing = document.getElementById("pdf-toast");
    if (existing) existing.remove();

    var toast = document.createElement("div");
    toast.id = "pdf-toast";
    toast.textContent = msg;
    toast.style.cssText =
      "position:fixed;bottom:24px;left:50%;transform:translateX(-50%);padding:10px 20px;border-radius:8px;font-size:14px;font-weight:600;z-index:9999;box-shadow:0 4px 16px rgba(0,0,0,0.15);transition:opacity 0.3s;color:#fff;" +
      (type === "error" ? "background:#c9302c;" : "background:#0f8a4c;");
    document.body.appendChild(toast);
    setTimeout(function () {
      toast.style.opacity = "0";
      setTimeout(function () {
        toast.remove();
      }, 300);
    }, 3500);
  }

  async function downloadPDF() {
    var btn = document.getElementById("btn-download-pdf");
    if (!btn) return;

    var origHTML = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML =
      '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="animation:spin 1s linear infinite;vertical-align:-2px;margin-right:6px;"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>Generating...';

    var html = buildTopicHTML();
    if (!html) {
      showPDFToast("No content found to export", "error");
      btn.disabled = false;
      btn.innerHTML = origHTML;
      return;
    }

    var titleEl = document.querySelector(".page-header__title");
    var filename = titleEl
      ? "BharatNotes - " + titleEl.textContent.trim()
      : "BharatNotes - Topic";

    try {
      var res = await fetch(PDF_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ html: html, filename: filename }),
      });

      if (!res.ok) {
        var err = await res.json().catch(function () {
          return {};
        });
        throw new Error(err.error || "Server error (" + res.status + ")");
      }

      var blob = await res.blob();
      var url = URL.createObjectURL(blob);
      var a = document.createElement("a");
      a.href = url;
      a.download = filename + ".pdf";
      a.click();
      URL.revokeObjectURL(url);
      showPDFToast("PDF downloaded!", "success");
    } catch (err) {
      console.error("PDF API error:", err);
      showPDFToast("PDF API unavailable — opening print dialog", "error");
      // Fallback: print
      var w = window.open("", "_blank");
      if (w) {
        w.document.write(html);
        w.document.close();
        w.onload = function () {
          w.print();
        };
        setTimeout(function () {
          try {
            w.print();
          } catch (e) {}
        }, 1500);
      }
    } finally {
      btn.disabled = false;
      btn.innerHTML = origHTML;
    }
  }

  // Bind on DOMContentLoaded
  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById("btn-download-pdf");
    if (btn) btn.addEventListener("click", downloadPDF);
  });

  // Spin animation
  var style = document.createElement("style");
  style.textContent = "@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}";
  document.head.appendChild(style);
})();
