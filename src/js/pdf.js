// BharatNotes — PDF Generator
// Uses the same Vercel Puppeteer API as RBSE Result Explorer
// POST html → returns application/pdf

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

  function buildTopicHTML() {
    const article = document.querySelector(".article-body");
    if (!article) return null;

    const title = document.querySelector(".page-header__title");
    const eyebrow = document.querySelector(".page-header__eyebrow");
    const badges = document.querySelectorAll(".gs-badge");
    const breadcrumb = document.querySelector(".breadcrumb");

    // Build badge HTML
    const badgeColors = {
      gs1: { bg: "#eff6ff", color: "#1e40af", border: "#bfdbfe", label: "General Studies I" },
      gs2: { bg: "#fdf2f8", color: "#9d174d", border: "#fbcfe8", label: "General Studies II" },
      gs3: { bg: "#ecfdf5", color: "#065f46", border: "#a7f3d0", label: "General Studies III" },
      gs4: { bg: "#fffbeb", color: "#92400e", border: "#fde68a", label: "General Studies IV" },
      essay: { bg: "#f5f3ff", color: "#5b21b6", border: "#ddd6fe", label: "Essay Paper" },
    };

    var badgeList = [];
    let badgeHTML = "";
    badges.forEach(function (b) {
      const text = b.textContent.trim();
      const key = text.toLowerCase();
      const c = badgeColors[key] || { bg: "#f8fafc", color: "#334155", border: "#e2e8f0", label: text };
      badgeList.push({ text: text, key: key, colors: c });
      badgeHTML +=
        '<span style="display:inline-block;padding:3px 10px;border-radius:4px;font-size:8.5pt;font-weight:600;letter-spacing:0.04em;background:' +
        c.bg + ";color:" + c.color + ";border:1px solid " + c.border + ';">' + text + "</span> ";
    });

    // Build breadcrumb text
    let breadcrumbText = "";
    if (breadcrumb) {
      breadcrumbText = breadcrumb.textContent
        .replace(/\s+/g, " ")
        .trim()
        .replace(/\//g, " / ");
    }

    // Clone article and clean it
    var clone = article.cloneNode(true);
    clone.removeAttribute("data-pagefind-body");
    clone.removeAttribute("hidden");

    var titleText = title ? title.textContent.trim() : "BharatNotes";
    var eyebrowText = eyebrow ? eyebrow.textContent.trim() : "";
    var dateStr = new Date().toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    // Cover page badge pills for large display
    var coverBadgeHTML = "";
    badgeList.forEach(function (b) {
      coverBadgeHTML +=
        '<span class="cover-badge" style="background:' +
        b.colors.bg + ";color:" + b.colors.color + ";border:1px solid " + b.colors.border + ';">' +
        b.colors.label + "</span>";
    });

    // ── Build full HTML with cover + content + back page ──
    const html =
      '<!DOCTYPE html><html><head><meta charset="utf-8"><title>' +
      titleText + "</title>" +
      '<link rel="preconnect" href="https://fonts.googleapis.com">' +
      '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>' +
      '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Instrument+Serif&display=swap">' +
      "<style>" +
      "* { margin:0; padding:0; box-sizing:border-box; }" +
      "@page { size:A4; margin:0; }" +
      "body { font-family:'Inter',system-ui,sans-serif; font-size:12pt; line-height:1.7; color:#1e293b; background:#fff; -webkit-font-smoothing:antialiased; }" +

      /* ── Cover Page — clean white minimal ── */
      ".cover-page { width:210mm; min-height:297mm; position:relative; display:flex; flex-direction:column; background:#fff; page-break-after:always; padding:20mm 22mm; }" +
      ".cover-accent { position:absolute; top:0; left:0; width:6px; height:100%; background:#0f4c3a; }" +
      ".cover-top { padding:0; }" +
      ".cover-logo { font-family:'Instrument Serif',Georgia,serif; font-size:15pt; color:#0f4c3a; letter-spacing:-0.01em; }" +
      ".cover-logo span { color:#d4a017; }" +
      ".cover-main { flex:1; display:flex; flex-direction:column; justify-content:center; padding:0; }" +
      ".cover-badges { margin-bottom:20px; }" +
      ".cover-badge { display:inline-block; padding:5px 14px; border-radius:4px; font-size:8.5pt; font-weight:600; text-transform:uppercase; letter-spacing:0.08em; margin-right:8px; }" +
      ".cover-title { font-family:'Instrument Serif',Georgia,serif; font-size:34pt; font-weight:400; color:#0f172a; line-height:1.15; margin-bottom:16px; letter-spacing:-0.02em; }" +
      ".cover-subtitle { font-size:11pt; color:#64748b; line-height:1.6; max-width:130mm; margin-bottom:40px; }" +
      ".cover-line { width:48px; height:2px; background:#d4a017; margin-bottom:24px; }" +
      ".cover-meta { font-size:9pt; color:#94a3b8; line-height:2; }" +
      ".cover-meta strong { color:#334155; font-weight:600; }" +
      ".cover-bottom { padding:0; display:flex; justify-content:space-between; align-items:flex-end; }" +
      ".cover-author { display:flex; align-items:center; gap:12px; }" +
      ".cover-author-photo { width:40px; height:40px; border-radius:50%; object-fit:cover; }" +
      ".cover-author-name { font-size:9.5pt; font-weight:600; color:#1e293b; }" +
      ".cover-author-role { font-size:8pt; color:#94a3b8; }" +
      ".cover-url { font-size:8.5pt; color:#94a3b8; letter-spacing:0.02em; }" +

      /* ── Content Pages ── */
      ".content-pages { padding:22mm 20mm 24mm 20mm; }" +
      ".pdf-header { border-bottom:2px solid #0f4c3a; padding-bottom:16px; margin-bottom:24px; }" +
      ".pdf-header .breadcrumb { font-size:9pt; color:#94a3b8; margin-bottom:8px; text-transform:uppercase; letter-spacing:0.08em; font-weight:500; }" +
      ".pdf-header .badges { margin-bottom:10px; }" +
      ".pdf-header h1 { font-family:'Instrument Serif',Georgia,serif; font-size:26pt; font-weight:400; color:#0f172a; line-height:1.2; margin-bottom:6px; letter-spacing:-0.02em; }" +
      ".pdf-header .subtitle { font-size:11pt; color:#64748b; line-height:1.5; }" +
      ".pdf-body h2 { font-family:'Instrument Serif',Georgia,serif; font-size:18pt; font-weight:400; color:#0f172a; margin:28px 0 12px; padding-bottom:8px; border-bottom:1px solid #e2e8f0; letter-spacing:-0.01em; }" +
      ".pdf-body h2:first-child { margin-top:0; }" +
      ".pdf-body h3 { font-family:'Instrument Serif',Georgia,serif; font-size:14pt; font-weight:400; color:#1e293b; margin:22px 0 10px; }" +
      ".pdf-body h4 { font-size:11pt; font-weight:700; color:#0f4c3a; letter-spacing:0.03em; text-transform:uppercase; margin:18px 0 8px; }" +
      ".pdf-body p { margin-bottom:12px; color:#374151; font-size:12pt; line-height:1.7; }" +
      ".pdf-body ul, .pdf-body ol { margin:0 0 14px 22px; color:#374151; font-size:12pt; line-height:1.7; }" +
      ".pdf-body li { margin-bottom:6px; }" +
      ".pdf-body li strong { color:#0f172a; }" +
      ".pdf-body blockquote { border-left:3px solid #d4a017; padding:12px 16px; background:#fefce8; margin:16px 0; border-radius:0 6px 6px 0; font-size:11pt; line-height:1.65; color:#4b5563; }" +
      ".pdf-body blockquote strong { color:#92400e; }" +
      ".pdf-body table { width:100%; border-collapse:collapse; margin:16px 0; font-size:11pt; line-height:1.5; }" +
      ".pdf-body th { background:#0f4c3a; color:#fff; padding:10px 12px; text-align:left; font-weight:600; font-size:10pt; letter-spacing:0.04em; text-transform:uppercase; }" +
      ".pdf-body th:first-child { border-radius:6px 0 0 0; }" +
      ".pdf-body th:last-child { border-radius:0 6px 0 0; }" +
      ".pdf-body td { padding:9px 12px; border-bottom:1px solid #e2e8f0; color:#374151; }" +
      ".pdf-body tr:nth-child(even) td { background:#f8fafc; }" +
      ".pdf-body tr:last-child td:first-child { border-radius:0 0 0 6px; }" +
      ".pdf-body tr:last-child td:last-child { border-radius:0 0 6px 0; }" +
      ".pdf-body a { color:#0f4c3a; font-weight:500; text-decoration:underline; text-decoration-color:#d4a017; text-underline-offset:2px; }" +
      ".pdf-body pre, .pdf-body code { font-family:'JetBrains Mono','Fira Code',monospace; font-size:10pt; }" +
      ".pdf-body code { background:#f1f5f9; padding:1px 5px; border-radius:3px; }" +
      ".pdf-body pre { background:#f1f5f9; padding:14px 16px; border-radius:6px; margin:14px 0; overflow-x:auto; white-space:pre-wrap; }" +
      ".pdf-body hr { border:none; border-top:1px solid #e2e8f0; margin:24px 0; }" +
      ".pdf-footer { margin-top:32px; padding-top:14px; border-top:1px solid #e2e8f0; font-size:9pt; color:#94a3b8; display:flex; justify-content:space-between; }" +

      /* ── Back Page — minimal dark ── */
      ".back-page { width:210mm; min-height:297mm; position:relative; display:flex; flex-direction:column; justify-content:center; align-items:center; background:#0f172a; page-break-before:always; padding:24mm 22mm; }" +
      ".back-inner { text-align:center; padding:0; max-width:150mm; }" +
      ".back-logo { font-family:'Instrument Serif',Georgia,serif; font-size:32pt; color:#fff; letter-spacing:-0.02em; margin-bottom:8px; }" +
      ".back-logo span { color:#d4a017; }" +
      ".back-tagline { font-size:10pt; color:#64748b; margin-bottom:48px; letter-spacing:0.02em; }" +
      ".back-line { width:48px; height:2px; background:#d4a017; margin:0 auto 48px; }" +
      ".back-sites { display:flex; justify-content:center; gap:48px; margin-bottom:48px; }" +
      ".back-site { text-align:center; }" +
      ".back-site-name { font-family:'Instrument Serif',Georgia,serif; font-size:18pt; color:#fff; margin-bottom:4px; }" +
      ".back-site-desc { font-size:8.5pt; color:#64748b; line-height:1.5; max-width:55mm; }" +
      ".back-site-url { display:inline-block; margin-top:12px; font-size:9pt; font-weight:600; color:#d4a017; text-decoration:none; letter-spacing:0.02em; }" +
      ".back-divider { width:1px; background:#1e293b; }" +
      ".back-author { display:flex; align-items:center; gap:14px; justify-content:center; margin-bottom:48px; }" +
      ".back-author-photo { width:48px; height:48px; border-radius:50%; object-fit:cover; }" +
      ".back-author-name { font-size:10pt; font-weight:600; color:#e2e8f0; text-align:left; }" +
      ".back-author-link { font-size:8.5pt; color:#64748b; text-decoration:none; }" +
      ".back-disclaimer { font-size:7.5pt; color:#475569; line-height:1.7; max-width:130mm; margin:0 auto; }" +
      ".back-disclaimer a { color:#d4a017; text-decoration:none; }" +
      ".back-bottom { position:absolute; bottom:32px; left:0; right:0; text-align:center; font-size:8pt; color:#334155; }" +

      "</style></head><body>" +

      /* ═══ COVER PAGE ═══ */
      '<div class="cover-page">' +
      '<div class="cover-accent"></div>' +
      '<div class="cover-top">' +
      '<div class="cover-logo">Bharat<span>Notes</span></div>' +
      "</div>" +
      '<div class="cover-main">' +
      '<div class="cover-badges">' + coverBadgeHTML + "</div>" +
      '<h1 class="cover-title">' + titleText + "</h1>" +
      (eyebrowText
        ? '<p class="cover-subtitle">' + eyebrowText + "</p>"
        : "") +
      '<div class="cover-line"></div>' +
      '<div class="cover-meta">' +
      "<strong>Source</strong> &mdash; bharatnotes.com<br>" +
      "<strong>Generated</strong> &mdash; " + dateStr + "<br>" +
      "<strong>License</strong> &mdash; Free for personal use" +
      "</div>" +
      "</div>" +
      '<div class="cover-bottom">' +
      '<div class="cover-author">' +
      '<img class="cover-author-photo" src="' + (authorPhotoB64 || "https://bharatnotes.com/img/bharat-choudhary.png") + '" alt="Bharat Choudhary" onerror="this.style.display=\'none\'">' +
      "<div>" +
      '<div class="cover-author-name">Bharat Choudhary</div>' +
      '<div class="cover-author-role">Founder, BharatNotes &amp; Ujiyari</div>' +
      "</div></div>" +
      '<div class="cover-url">bharatnotes.com</div>' +
      "</div>" +
      "</div>" +

      /* ═══ CONTENT PAGES ═══ */
      '<div class="content-pages">' +
      '<div class="pdf-header">' +
      '<div class="breadcrumb">' + breadcrumbText + "</div>" +
      '<div class="badges">' + badgeHTML + "</div>" +
      "<h1>" + titleText + "</h1>" +
      (eyebrowText
        ? '<div class="subtitle">' + eyebrowText + "</div>"
        : "") +
      "</div>" +
      '<div class="pdf-body">' + clone.innerHTML + "</div>" +
      '<div class="pdf-footer">' +
      "<span>bharatnotes.com</span>" +
      "<span>" + dateStr + "</span>" +
      "</div>" +
      "</div>" +

      /* ═══ BACK PAGE ═══ */
      '<div class="back-page">' +
      '<div class="back-inner">' +
      '<div class="back-logo">Bharat<span>Notes</span></div>' +
      '<div class="back-tagline">Free UPSC GS Notes &mdash; Prelims, Mains &amp; Interview</div>' +
      '<div class="back-line"></div>' +
      '<div class="back-sites">' +
      '<div class="back-site">' +
      '<div class="back-site-name">BharatNotes</div>' +
      '<div class="back-site-desc">Comprehensive static notes for all GS papers with verified facts and PYQ analysis</div>' +
      '<a href="https://bharatnotes.com" class="back-site-url">bharatnotes.com</a>' +
      "</div>" +
      '<div class="back-divider"></div>' +
      '<div class="back-site">' +
      '<div class="back-site-name">Ujiyari</div>' +
      '<div class="back-site-desc">Daily current affairs, editorials, monthly compilations and Mains answer practice</div>' +
      '<a href="https://ujiyari.com" class="back-site-url">ujiyari.com</a>' +
      "</div>" +
      "</div>" +
      '<div class="back-author">' +
      '<img class="back-author-photo" src="' + (authorPhotoB64 || "https://bharatnotes.com/img/bharat-choudhary.png") + '" alt="Bharat Choudhary" onerror="this.style.display=\'none\'">' +
      "<div>" +
      '<div class="back-author-name">Bharat Choudhary</div>' +
      '<a class="back-author-link" href="https://www.linkedin.com/in/epicbharat/">linkedin.com/in/epicbharat</a>' +
      "</div></div>" +
      '<p class="back-disclaimer">All content is sourced from official government publications and standard UPSC references. For current affairs, visit <a href="https://ujiyari.com">ujiyari.com</a>.<br>&copy; ' + new Date().getFullYear() + ' BharatNotes.com</p>' +
      "</div>" +
      '<div class="back-bottom">100% Free &bull; No Login Required</div>' +
      "</div>" +

      "</body></html>";

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
