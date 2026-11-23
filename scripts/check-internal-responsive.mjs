import { chromium } from "playwright";

const browser = await chromium.launch({ headless: true });
const routes = ["/nosotros", "/servicios", "/contacto", "/equipo", "/equipo/augusto-abendano", "/servicios/registro-de-marca"];
const viewports = [
  { name: "small-phone", width: 375, height: 812 },
  { name: "phone-landscape", width: 844, height: 390 },
];
const results = [];

for (const viewport of viewports) {
  const context = await browser.newContext({ viewport, reducedMotion: "reduce" });
  for (const route of routes) {
    const page = await context.newPage();
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    const response = await page.goto(`http://localhost:3001${route}`, { waitUntil: "networkidle", timeout: 60_000 });
    results.push({
      viewport: viewport.name,
      route,
      status: response?.status(),
      overflow: await page.evaluate(() => document.documentElement.scrollWidth - innerWidth),
      errors,
    });
    await page.close();
  }
  await context.close();
}

await browser.close();
process.stdout.write(`${JSON.stringify(results, null, 2)}\n`);
