// BharatNotes PDF Generation API
// POST { html, filename, displayHeaderFooter, headerTemplate, footerTemplate }
// → application/pdf

const chromium = require("@sparticuz/chromium");
const puppeteer = require("puppeteer-core");

const ALLOWED_ORIGINS = [
  "https://bharatnotes.com",
  "https://www.bharatnotes.com",
];

module.exports = async function handler(req, res) {
  // CORS preflight
  const origin = req.headers.origin || "";
  const corsOrigin = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  res.setHeader("Access-Control-Allow-Origin", corsOrigin);
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const {
    html,
    filename = "bharatnotes",
    displayHeaderFooter = false,
    headerTemplate = "<span></span>",
    footerTemplate = "<span></span>",
  } = req.body || {};

  if (!html || typeof html !== "string") {
    return res.status(400).json({ error: "Missing html" });
  }

  let browser = null;
  try {
    browser = await puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
    });

    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: "networkidle0", timeout: 45000 });

    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
      displayHeaderFooter: Boolean(displayHeaderFooter),
      headerTemplate: headerTemplate || "<span></span>",
      footerTemplate: footerTemplate || "<span></span>",
      margin: { top: "0mm", bottom: "0mm", left: "0mm", right: "0mm" },
    });

    const safeName = String(filename).replace(/[^a-z0-9_\-]/gi, "_").slice(0, 80);
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", `attachment; filename="${safeName}.pdf"`);
    res.setHeader("Cache-Control", "no-store");
    return res.send(Buffer.from(pdfBuffer));

  } catch (err) {
    console.error("[pdf-api]", err);
    return res.status(500).json({ error: err.message || "PDF generation failed" });
  } finally {
    if (browser) await browser.close().catch(() => {});
  }
};
