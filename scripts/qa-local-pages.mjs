import { chromium } from "playwright";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const base = process.env.MEIKER_QA_BASE ?? "http://localhost:3001";
const targets = [
  { route: "/servicios", slug: "servicios" },
  { route: "/contacto", slug: "contacto" },
  { route: "/equipo/augusto-abendano", slug: "equipo-augusto-abendano" },
  {
    route: "/servicios/registro-de-marca",
    slug: "detalle-servicio",
  },
];
const viewports = [
  { name: "desktop-audit", width: 1440, height: 1000 },
  { name: "mobile-audit", width: 390, height: 844 },
];

const browser = await chromium.launch({ headless: true });
const report = [];

for (const target of targets) {
  const directory = path.join(process.cwd(), "docs", "design-references", "meiker-qa", target.slug);
  await mkdir(directory, { recursive: true });
  for (const viewport of viewports) {
    const page = await browser.newPage({ viewport });
    const errors = [];
    page.on("console", (message) => {
      if (message.type() === "error") errors.push(message.text());
    });
    page.on("pageerror", (error) => errors.push(error.message));
    const response = await page.goto(`${base}${target.route}`, {
      waitUntil: "networkidle",
      timeout: 60_000,
    });
    await page.evaluate(async () => {
      for (let y = 0; y < document.documentElement.scrollHeight; y += Math.floor(innerHeight * 0.7)) {
        window.scrollTo(0, y);
        await new Promise((resolve) => setTimeout(resolve, 80));
      }
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(350);
    await page.screenshot({
      path: path.join(directory, `${viewport.name}.png`),
      fullPage: true,
      animations: "disabled",
    });
    report.push({
      route: target.route,
      viewport,
      status: response?.status(),
      title: await page.title(),
      pageHeight: await page.evaluate(() => document.documentElement.scrollHeight),
      errors,
    });
    await page.close();
  }
}

await browser.close();
await writeFile(
  path.join(process.cwd(), "docs", "research", "MEIKER_LOCAL_QA.json"),
  JSON.stringify(report, null, 2),
  "utf8",
);
