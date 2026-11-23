import { chromium } from "playwright";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const out = path.join(root, "docs", "design-references", "meiker-qa", "hero-sticky-pass");
await mkdir(out, { recursive: true });

const routes = [
  ["nosotros", "/nosotros"],
  ["servicios", "/servicios"],
  ["equipo", "/equipo"],
  ["contacto", "/contacto"],
  ["perfil", "/equipo/augusto-abendano"],
  ["detalle-servicio", "/servicios/registro-de-marca"],
];
const viewports = [
  ["desktop", 1440, 1000],
  ["mobile", 390, 844],
];

const browser = await chromium.launch({ headless: true });
const report = [];
for (const [routeName, route] of routes) {
  for (const [viewportName, width, height] of viewports) {
    const context = await browser.newContext({ viewport: { width, height }, reducedMotion: "no-preference" });
    const page = await context.newPage();
    const errors = [];
    page.on("pageerror", (error) => errors.push(String(error)));
    const response = await page.goto(`http://localhost:3001${route}`, { waitUntil: "networkidle", timeout: 90_000 });
    await page.waitForTimeout(2200);
    await page.screenshot({ path: path.join(out, `${routeName}-${viewportName}-top.png`) });
    const top = await page.evaluate(() => {
      const header = document.querySelector("header");
      const h1 = document.querySelector("h1");
      const rect = (node) => node ? ({ ...node.getBoundingClientRect().toJSON() }) : null;
      return {
        pageWidth: document.documentElement.scrollWidth,
        viewportWidth: innerWidth,
        header: rect(header),
        headerPosition: header ? getComputedStyle(header).position : null,
        h1: rect(h1),
        hiddenWords: [...document.querySelectorAll(".meiker-word-enter")].filter((node) => Number(getComputedStyle(node).opacity) < 0.99).length,
      };
    });
    await page.evaluate(() => window.scrollTo(0, Math.min(700, document.documentElement.scrollHeight - innerHeight)));
    await page.waitForTimeout(150);
    const scrolled = await page.evaluate(() => {
      const header = document.querySelector("header");
      const rect = header?.getBoundingClientRect();
      return rect ? { top: rect.top, bottom: rect.bottom, position: getComputedStyle(header).position } : null;
    });
    report.push({ route, viewport: viewportName, status: response?.status(), errors, top, scrolled });
    await context.close();
  }
}
await browser.close();
await writeFile(path.join(out, "report.json"), JSON.stringify(report, null, 2), "utf8");
