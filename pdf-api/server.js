const express = require("express");
const puppeteer = require("puppeteer");

const app = express();
app.use(express.json({ limit: "6mb" }));

const ALLOWED_ORIGINS = [
  "https://bharatnotes.com",
  "https://www.bharatnotes.com",
];

app.use((req, res, next) => {
  const origin = req.headers.origin || "";
  if (ALLOWED_ORIGINS.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.sendStatus(204);
  next();
});

app.post("/api/generate", async (req, res) => {
  const {
    html,
    filename = "bharatnotes",
    displayHeaderFooter = false,
    headerTemplate = "<span></span>",
    footerTemplate = "<span></span>",
  } = req.body || {};

  if (!html) return res.status(400).json({ error: "Missing html" });

  let browser;
  try {
    browser = await puppeteer.launch({
      executablePath: process.env.PUPPETEER_EXECUTABLE_PATH || "/usr/bin/chromium",
      args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
      headless: "new",
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
    res.send(Buffer.from(pdfBuffer));
  } catch (err) {
    console.error("[pdf]", err.message);
    res.status(500).json({ error: err.message });
  } finally {
    if (browser) await browser.close().catch(() => {});
  }
});

app.get("/health", (_, res) => res.json({ ok: true }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`PDF API listening on ${PORT}`));
