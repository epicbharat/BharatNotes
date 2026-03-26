// BharatNotes — PDF Generator
// Uses the same Vercel Puppeteer API as RBSE Result Explorer
// POST html → returns application/pdf

(function () {
  "use strict";

  const PDF_API_URL = "https://rbse-pdf.vercel.app/api/generate";

  function buildTopicHTML() {
    const article = document.querySelector(".article-body");
    if (!article) return null;

    const title = document.querySelector(".page-header__title");
    const eyebrow = document.querySelector(".page-header__eyebrow");
    const badges = document.querySelectorAll(".gs-badge");
    const breadcrumb = document.querySelector(".breadcrumb");

    // Build badge HTML
    const badgeColors = {
      gs1: { bg: "#e0ecff", color: "#1e3a8a", label: "General Studies I" },
      gs2: { bg: "#fce4f0", color: "#881337", label: "General Studies II" },
      gs3: { bg: "#d5f5e3", color: "#064e3b", label: "General Studies III" },
      gs4: { bg: "#fef3c7", color: "#78350f", label: "General Studies IV" },
      essay: { bg: "#ede9fe", color: "#4c1d95", label: "Essay Paper" },
    };

    var badgeList = [];
    let badgeHTML = "";
    badges.forEach(function (b) {
      const text = b.textContent.trim();
      const key = text.toLowerCase();
      const c = badgeColors[key] || { bg: "#eee", color: "#333", label: text };
      badgeList.push({ text: text, key: key, colors: c });
      badgeHTML +=
        '<span style="display:inline-block;padding:3px 10px;border-radius:6px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.04em;background:' +
        c.bg + ";color:" + c.color + ';">' + text + "</span> ";
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
        '<span style="display:inline-block;padding:8px 20px;border-radius:50px;font-size:11pt;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;background:' +
        b.colors.bg + ";color:" + b.colors.color + ';margin:0 6px 8px 0;">' +
        b.colors.label + "</span>";
    });

    // ── Build full HTML with cover + content + thank-you ──
    const html =
      '<!DOCTYPE html><html><head><meta charset="utf-8"><title>' +
      titleText + "</title>" +
      '<link rel="preconnect" href="https://fonts.googleapis.com">' +
      '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>' +
      '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap">' +
      "<style>" +
      "* { margin:0; padding:0; box-sizing:border-box; }" +
      "@page { size:A4; margin:0; }" +
      "body { font-family:'Plus Jakarta Sans',system-ui,sans-serif; font-size:10.5pt; line-height:1.6; color:#1a1a2e; background:#fff; }" +

      /* ── Cover Page ── */
      ".cover-page { width:210mm; min-height:297mm; position:relative; overflow:hidden; display:flex; flex-direction:column; justify-content:center; align-items:center; background:linear-gradient(135deg,#0f172a 0%,#1e293b 40%,#334155 100%); page-break-after:always; }" +
      ".cover-page::before { content:''; position:absolute; top:0; left:0; right:0; bottom:0; background:radial-gradient(circle at 20% 30%,rgba(224,90,51,0.15) 0%,transparent 50%),radial-gradient(circle at 80% 70%,rgba(224,90,51,0.1) 0%,transparent 40%); }" +
      ".cover-page::after { content:''; position:absolute; top:0; left:0; right:0; bottom:0; background-image:radial-gradient(rgba(255,255,255,0.04) 1px,transparent 1px); background-size:24px 24px; }" +
      ".cover-inner { position:relative; z-index:1; text-align:center; padding:40px; max-width:170mm; }" +
      ".cover-logo { font-family:'DM Serif Display',Georgia,serif; font-size:18pt; color:#fff; letter-spacing:0.02em; margin-bottom:8px; }" +
      ".cover-logo span { color:#e05a33; }" +
      ".cover-tagline { font-size:9pt; color:rgba(255,255,255,0.5); text-transform:uppercase; letter-spacing:0.12em; font-weight:600; margin-bottom:60px; }" +
      ".cover-divider { width:60px; height:3px; background:#e05a33; margin:0 auto 48px; border-radius:2px; }" +
      ".cover-badges { margin-bottom:24px; }" +
      ".cover-title { font-family:'DM Serif Display',Georgia,serif; font-size:28pt; font-weight:400; color:#ffffff; line-height:1.2; margin-bottom:16px; }" +
      ".cover-subtitle { font-size:11pt; color:rgba(255,255,255,0.65); line-height:1.5; margin-bottom:48px; max-width:140mm; margin-left:auto; margin-right:auto; }" +
      ".cover-meta { display:flex; justify-content:center; gap:32px; margin-top:16px; }" +
      ".cover-meta-item { text-align:center; }" +
      ".cover-meta-label { font-size:7.5pt; color:rgba(255,255,255,0.4); text-transform:uppercase; letter-spacing:0.1em; font-weight:600; margin-bottom:4px; }" +
      ".cover-meta-value { font-size:10pt; color:rgba(255,255,255,0.85); font-weight:600; }" +
      ".cover-author { display:flex; align-items:center; gap:16px; justify-content:center; margin-top:40px; padding:16px 24px; background:rgba(255,255,255,0.05); border-radius:16px; border:1px solid rgba(255,255,255,0.08); }" +
      ".cover-author-photo { width:56px; height:56px; border-radius:50%; border:2px solid rgba(224,90,51,0.6); object-fit:cover; }" +
      ".cover-author-info { text-align:left; }" +
      ".cover-author-name { font-family:'DM Serif Display',Georgia,serif; font-size:12pt; color:#fff; margin-bottom:2px; }" +
      ".cover-author-role { font-size:8pt; color:rgba(255,255,255,0.5); letter-spacing:0.04em; }" +
      ".cover-author-link { font-size:7.5pt; color:#e05a33; text-decoration:none; letter-spacing:0.02em; }" +
      ".cover-bottom { position:absolute; bottom:24px; left:0; right:0; text-align:center; z-index:1; }" +
      ".cover-bottom-line { font-size:8pt; color:rgba(255,255,255,0.3); letter-spacing:0.06em; }" +
      ".cover-corner-tl, .cover-corner-br { position:absolute; z-index:1; width:80px; height:80px; }" +
      ".cover-corner-tl { top:24px; left:24px; border-top:3px solid rgba(224,90,51,0.4); border-left:3px solid rgba(224,90,51,0.4); }" +
      ".cover-corner-br { bottom:24px; right:24px; border-bottom:3px solid rgba(224,90,51,0.4); border-right:3px solid rgba(224,90,51,0.4); }" +

      /* ── Content Pages ── */
      ".content-pages { padding:18mm 16mm 20mm 16mm; }" +
      ".pdf-header { border-bottom:3px solid #e05a33; padding-bottom:16px; margin-bottom:20px; }" +
      ".pdf-header .breadcrumb { font-size:8pt; color:#64647a; margin-bottom:8px; }" +
      ".pdf-header .badges { margin-bottom:8px; }" +
      ".pdf-header h1 { font-family:'DM Serif Display',Georgia,serif; font-size:22pt; font-weight:400; color:#0f172a; line-height:1.2; margin-bottom:4px; }" +
      ".pdf-header .subtitle { font-size:9pt; color:#64647a; }" +
      ".pdf-body h2 { font-family:'DM Serif Display',Georgia,serif; font-size:15pt; font-weight:400; color:#0f172a; margin:24px 0 10px; padding-bottom:6px; border-bottom:2px solid #e05a33; }" +
      ".pdf-body h2:first-child { margin-top:0; }" +
      ".pdf-body h3 { font-family:'DM Serif Display',Georgia,serif; font-size:12.5pt; font-weight:400; color:#1e293b; margin:18px 0 8px; }" +
      ".pdf-body h4 { font-family:'Plus Jakarta Sans',sans-serif; font-size:9pt; font-weight:700; color:#e05a33; letter-spacing:0.04em; text-transform:uppercase; margin:14px 0 6px; }" +
      ".pdf-body p { margin-bottom:10px; color:#3a3a54; }" +
      ".pdf-body ul, .pdf-body ol { margin:0 0 12px 20px; color:#3a3a54; }" +
      ".pdf-body li { margin-bottom:4px; }" +
      ".pdf-body li strong { color:#1a1a2e; }" +
      ".pdf-body blockquote { border-left:3px solid #e05a33; padding:10px 14px; background:#fef0eb; margin:12px 0; border-radius:0 8px 8px 0; font-size:9.5pt; }" +
      ".pdf-body table { width:100%; border-collapse:collapse; margin:12px 0; font-size:9.5pt; }" +
      ".pdf-body th { background:#1e293b; color:#fff; padding:8px 10px; text-align:left; font-weight:600; font-size:8.5pt; letter-spacing:0.04em; text-transform:uppercase; }" +
      ".pdf-body td { padding:7px 10px; border-bottom:1px solid #e2e4e9; color:#3a3a54; }" +
      ".pdf-body tr:nth-child(even) td { background:#f8f9fa; }" +
      ".pdf-body a { color:#1e293b; font-weight:500; text-decoration:underline; }" +
      ".pdf-body pre, .pdf-body code { font-family:'JetBrains Mono','Fira Code',monospace; font-size:9pt; }" +
      ".pdf-body pre { background:#f1f3f5; padding:12px 14px; border-radius:8px; margin:12px 0; overflow-x:auto; white-space:pre-wrap; }" +
      ".pdf-footer { margin-top:28px; padding-top:12px; border-top:1px solid #d1d5db; font-size:8pt; color:#64647a; display:flex; justify-content:space-between; }" +

      /* ── Thank You Page ── */
      ".thankyou-page { width:210mm; min-height:297mm; position:relative; overflow:hidden; display:flex; flex-direction:column; justify-content:center; align-items:center; background:linear-gradient(135deg,#0f172a 0%,#1e293b 40%,#334155 100%); page-break-before:always; }" +
      ".thankyou-page::before { content:''; position:absolute; top:0; left:0; right:0; bottom:0; background:radial-gradient(circle at 70% 20%,rgba(224,90,51,0.12) 0%,transparent 50%),radial-gradient(circle at 30% 80%,rgba(224,90,51,0.08) 0%,transparent 40%); }" +
      ".thankyou-page::after { content:''; position:absolute; top:0; left:0; right:0; bottom:0; background-image:radial-gradient(rgba(255,255,255,0.04) 1px,transparent 1px); background-size:24px 24px; }" +
      ".thankyou-inner { position:relative; z-index:1; text-align:center; padding:40px; max-width:160mm; }" +
      ".thankyou-icon { font-size:48pt; margin-bottom:24px; }" +
      ".thankyou-heading { font-family:'DM Serif Display',Georgia,serif; font-size:26pt; color:#fff; margin-bottom:12px; }" +
      ".thankyou-heading span { color:#e05a33; }" +
      ".thankyou-text { font-size:11pt; color:rgba(255,255,255,0.65); line-height:1.7; margin-bottom:40px; }" +
      ".thankyou-divider { width:60px; height:3px; background:#e05a33; margin:0 auto 40px; border-radius:2px; }" +
      ".thankyou-links { display:flex; justify-content:center; gap:24px; margin-bottom:48px; flex-wrap:wrap; }" +
      ".thankyou-link { display:inline-block; padding:12px 28px; border-radius:50px; font-size:10pt; font-weight:700; text-decoration:none; letter-spacing:0.03em; }" +
      ".thankyou-link--primary { background:#e05a33; color:#fff; }" +
      ".thankyou-link--outline { background:transparent; color:#fff; border:2px solid rgba(255,255,255,0.25); }" +
      ".thankyou-features { display:flex; justify-content:center; gap:40px; margin-bottom:48px; flex-wrap:wrap; }" +
      ".thankyou-feature { text-align:center; }" +
      ".thankyou-feature-icon { font-size:20pt; margin-bottom:8px; }" +
      ".thankyou-feature-label { font-size:8.5pt; color:rgba(255,255,255,0.5); text-transform:uppercase; letter-spacing:0.08em; font-weight:600; }" +
      ".thankyou-author { display:flex; align-items:center; gap:16px; justify-content:center; margin-bottom:40px; padding:16px 24px; background:rgba(255,255,255,0.05); border-radius:16px; border:1px solid rgba(255,255,255,0.08); }" +
      ".thankyou-author-photo { width:64px; height:64px; border-radius:50%; border:2px solid rgba(224,90,51,0.6); object-fit:cover; }" +
      ".thankyou-author-info { text-align:left; }" +
      ".thankyou-author-name { font-family:'DM Serif Display',Georgia,serif; font-size:13pt; color:#fff; margin-bottom:2px; }" +
      ".thankyou-author-role { font-size:8.5pt; color:rgba(255,255,255,0.5); margin-bottom:4px; }" +
      ".thankyou-author-link { font-size:8pt; color:#e05a33; text-decoration:none; }" +
      ".thankyou-disclaimer { font-size:7.5pt; color:rgba(255,255,255,0.3); line-height:1.6; max-width:140mm; margin:0 auto; }" +
      ".thankyou-corner-tl, .thankyou-corner-br { position:absolute; z-index:1; width:80px; height:80px; }" +
      ".thankyou-corner-tl { top:24px; left:24px; border-top:3px solid rgba(224,90,51,0.4); border-left:3px solid rgba(224,90,51,0.4); }" +
      ".thankyou-corner-br { bottom:24px; right:24px; border-bottom:3px solid rgba(224,90,51,0.4); border-right:3px solid rgba(224,90,51,0.4); }" +

      "</style></head><body>" +

      /* ═══ COVER PAGE ═══ */
      '<div class="cover-page">' +
      '<div class="cover-corner-tl"></div>' +
      '<div class="cover-corner-br"></div>' +
      '<div class="cover-inner">' +
      '<div class="cover-logo">Bharat<span>Notes</span></div>' +
      '<div class="cover-tagline">Free UPSC Civil Services (IAS/CSE) GS Notes &mdash; Prelims, Mains &amp; Interview</div>' +
      '<div class="cover-divider"></div>' +
      '<div class="cover-badges">' + coverBadgeHTML + "</div>" +
      '<h1 class="cover-title">' + titleText + "</h1>" +
      (eyebrowText
        ? '<p class="cover-subtitle">' + eyebrowText + "</p>"
        : "") +
      '<div class="cover-meta">' +
      '<div class="cover-meta-item"><div class="cover-meta-label">Generated</div><div class="cover-meta-value">' + dateStr + "</div></div>" +
      '<div class="cover-meta-item"><div class="cover-meta-label">Source</div><div class="cover-meta-value">BharatNotes.com</div></div>' +
      '<div class="cover-meta-item"><div class="cover-meta-label">Price</div><div class="cover-meta-value">FREE</div></div>' +
      "</div>" +
      '<div class="cover-author">' +
      '<img class="cover-author-photo" src="https://bharatnotes.com/img/bharat-choudhary.png" alt="Bharat Choudhary" onerror="this.style.display=\'none\'">' +
      '<div class="cover-author-info">' +
      '<div class="cover-author-name">Bharat Choudhary</div>' +
      '<div class="cover-author-role">Founder — BharatNotes &amp; Ujiyari</div>' +
      '<span class="cover-author-link">linkedin.com/in/epicbharat</span>' +
      "</div></div>" +
      "</div>" +
      '<div class="cover-bottom"><div class="cover-bottom-line">bharatnotes.com &bull; 100% Free &bull; No Login Required</div></div>' +
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
      "<span>BharatNotes.com &mdash; Free UPSC Civil Services Notes</span>" +
      "<span>Generated on " + dateStr + "</span>" +
      "</div>" +
      "</div>" +

      /* ═══ THANK YOU PAGE ═══ */
      '<div class="thankyou-page">' +
      '<div class="thankyou-corner-tl"></div>' +
      '<div class="thankyou-corner-br"></div>' +
      '<div class="thankyou-inner">' +
      '<div class="thankyou-author">' +
      '<img class="thankyou-author-photo" src="https://bharatnotes.com/img/bharat-choudhary.png" alt="Bharat Choudhary" onerror="this.style.display=\'none\'">' +
      '<div class="thankyou-author-info">' +
      '<div class="thankyou-author-name">Bharat Choudhary</div>' +
      '<div class="thankyou-author-role">Founder — BharatNotes &amp; Ujiyari</div>' +
      '<span class="thankyou-author-link">linkedin.com/in/epicbharat</span>' +
      "</div></div>" +
      '<div class="thankyou-heading">Keep <span>Preparing.</span></div>' +
      '<p class="thankyou-text">You\'re one step closer to cracking UPSC CSE. BharatNotes provides free, verified, and comprehensive notes for every General Studies topic &mdash; Prelims to Interview. Bookmark us and visit daily for new content.</p>' +
      '<div class="thankyou-divider"></div>' +
      '<div class="thankyou-features">' +
      '<div class="thankyou-feature"><div class="thankyou-feature-icon">&#128218;</div><div class="thankyou-feature-label">GS 1 &ndash; 4 Notes</div></div>' +
      '<div class="thankyou-feature"><div class="thankyou-feature-icon">&#128240;</div><div class="thankyou-feature-label">Current Affairs</div></div>' +
      '<div class="thankyou-feature"><div class="thankyou-feature-icon">&#127919;</div><div class="thankyou-feature-label">PYQ Analysis</div></div>' +
      '<div class="thankyou-feature"><div class="thankyou-feature-icon">&#128196;</div><div class="thankyou-feature-label">Free PDFs</div></div>' +
      "</div>" +
      '<div class="thankyou-links">' +
      '<span class="thankyou-link thankyou-link--primary">bharatnotes.com</span>' +
      '<span class="thankyou-link thankyou-link--outline">ujiyari.com</span>' +
      "</div>" +
      '<p class="thankyou-disclaimer">BharatNotes is a free educational initiative. All content is sourced from official government publications (legislative.gov.in, pib.gov.in, prsindia.org) and standard UPSC references. For current affairs and daily updates, visit Ujiyari.com — our companion portal.<br><br>&copy; ' + new Date().getFullYear() + ' BharatNotes.com &mdash; All rights reserved.</p>' +
      "</div>" +
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
