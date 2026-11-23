import { chromium } from "playwright";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const output = path.join(root, "docs", "design-references", "meiker-qa", "faq-accordion");
await mkdir(output, { recursive: true });

const browser = await chromium.launch({ headless: true });
const report = [];

for (const route of ["about", "services", "contact"]) {
  for (const viewport of [
    { name: "desktop", width: 1440, height: 1000 },
    { name: "mobile", width: 390, height: 844 },
  ]) {
    const context = await browser.newContext({
      viewport: { width: viewport.width, height: viewport.height },
      reducedMotion: "no-preference",
    });
    const page = await context.newPage();
    const errors = [];
    page.on("pageerror", (error) => errors.push(String(error)));
    const response = await page.goto(`http://localhost:3001/${route}`, { waitUntil: "networkidle", timeout: 90_000 });
    const buttons = page.locator("button[aria-controls^='meiker-faq-']");
    await buttons.first().scrollIntoViewIfNeeded();
    await page.waitForTimeout(450);
    await page.screenshot({ path: path.join(output, `${route}-${viewport.name}-initial.png`) });

    const initial = await buttons.evaluateAll((nodes) => nodes.map((node) => node.getAttribute("aria-expanded")));
    await buttons.nth(1).click();
    await page.waitForTimeout(150);
    const midway = await page.evaluate(() => ({
      expanded: [...document.querySelectorAll("button[aria-controls^='meiker-faq-']")].map((node) => node.getAttribute("aria-expanded")),
      panels: [...document.querySelectorAll(".meiker-faq-panel")].slice(0, 2).map((node) => ({
        rows: getComputedStyle(node).gridTemplateRows,
        transition: getComputedStyle(node).transition,
      })),
      icons: [...document.querySelectorAll(".meiker-faq-icon")].slice(0, 2).map((node) => getComputedStyle(node).transform),
    }));
    await page.screenshot({ path: path.join(output, `${route}-${viewport.name}-midway.png`) });
    await page.waitForTimeout(220);
    const settled = await buttons.evaluateAll((nodes) => nodes.map((node) => node.getAttribute("aria-expanded")));
    await page.screenshot({ path: path.join(output, `${route}-${viewport.name}-settled.png`) });

    report.push({ route, viewport: viewport.name, status: response?.status(), errors, initial, midway, settled });
    await context.close();
  }
}

await browser.close();
await writeFile(path.join(output, "report.json"), JSON.stringify(report, null, 2), "utf8");
