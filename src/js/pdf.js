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
      gs1: { bg: "#e0ecff", color: "#1e3a8a" },
      gs2: { bg: "#fce4f0", color: "#881337" },
      gs3: { bg: "#d5f5e3", color: "#064e3b" },
      gs4: { bg: "#fef3c7", color: "#78350f" },
      essay: { bg: "#ede9fe", color: "#4c1d95" },
    };

    let badgeHTML = "";
    badges.forEach(function (b) {
      const text = b.textContent.trim();
      const key = text.toLowerCase();
      const c = badgeColors[key] || { bg: "#eee", color: "#333" };
      badgeHTML +=
        '<span style="display:inline-block;padding:3px 10px;border-radius:6px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.04em;background:' +
        c.bg +
        ";color:" +
        c.color +
        ';">' +
        text +
        "</span> ";
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

    const html =
      '<!DOCTYPE html><html><head><meta charset="utf-8"><title>' +
      (title ? title.textContent.trim() : "BharatNotes") +
      "</title>" +
      '<link rel="preconnect" href="https://fonts.googleapis.com">' +
      '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>' +
      '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap">' +
      "<style>" +
      "* { margin:0; padding:0; box-sizing:border-box; }" +
      "@page { size:A4; margin:18mm 16mm 20mm 16mm; }" +
      "body { font-family:'Plus Jakarta Sans',system-ui,sans-serif; font-size:10.5pt; line-height:1.6; color:#1a1a2e; background:#fff; }" +
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
      ".pdf-footer { margin-top:28px; padding-top:12px; border-top:1px solid #d1d5db; font-size:8pt; color:#64647a; display:flex; justify-content:space-between; }" +
      "</style></head><body>" +
      '<div class="pdf-header">' +
      '<div class="breadcrumb">' +
      breadcrumbText +
      "</div>" +
      '<div class="badges">' +
      badgeHTML +
      "</div>" +
      "<h1>" +
      (title ? title.textContent.trim() : "") +
      "</h1>" +
      (eyebrow
        ? '<div class="subtitle">' + eyebrow.textContent.trim() + "</div>"
        : "") +
      "</div>" +
      '<div class="pdf-body">' +
      clone.innerHTML +
      "</div>" +
      '<div class="pdf-footer">' +
      "<span>BharatNotes.com &mdash; Free UPSC GS Notes</span>" +
      "<span>Generated on " +
      new Date().toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }) +
      "</span>" +
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
