import { chromium } from "playwright";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const localBase = process.env.MEIKER_QA_BASE ?? "http://localhost:3001";
const routes = ["/nosotros", "/servicios", "/contacto", "/equipo", "/equipo/augusto-abendano", "/servicios/registro-de-marca"];
const sources = ["/about", "/services", "/contact", "/teams", "/teams/amelia-brooks", "/services/corporate-legal-advisory-copy-4"];
const browser = await chromium.launch({ headless: true });
const report = [];

async function inspect(url, label, reducedMotion = "no-preference") {
  const context = await browser.newContext({ viewport: { width: 390, height: 844 }, reducedMotion });
  const page = await context.newPage();
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  const response = await page.goto(url, { waitUntil: "networkidle", timeout: 60_000 });
  await page.waitForTimeout(250);

  const snapshot = async (stage) => page.evaluate((currentStage) => {
    const animations = document.getAnimations({ subtree: true }).slice(0, 80).map((animation) => {
      const effect = animation.effect;
      const timing = effect?.getTiming();
      return {
        stage: currentStage,
        playState: animation.playState,
        duration: timing?.duration,
        delay: timing?.delay,
        easing: timing?.easing,
        target: effect && "target" in effect ? effect.target?.tagName : undefined,
      };
    });
    return {
      stage: currentStage,
      animations,
      pageHeight: document.documentElement.scrollHeight,
      horizontalOverflow: document.documentElement.scrollWidth - innerWidth,
      hiddenInlineOpacity: [...document.querySelectorAll("[style]")].filter((node) => getComputedStyle(node).opacity === "0").length,
    };
  }, stage);

  const initial = await snapshot("initial");
  await page.evaluate(() => window.scrollTo(0, Math.floor(document.documentElement.scrollHeight * 0.45)));
  await page.waitForTimeout(120);
  const middle = await snapshot("middle");
  await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
  await page.waitForTimeout(450);
  const end = await snapshot("end");
  report.push({ label, url, reducedMotion, status: response?.status(), errors, initial, middle, end });
  await context.close();
}

for (const route of routes) await inspect(`${localBase}${route}`, `local:${route}`);
for (const route of routes) await inspect(`${localBase}${route}`, `local-reduced:${route}`, "reduce");
for (const route of sources) await inspect(`https://fileon.framer.website${route}`, `source:${route}`);

await browser.close();
await mkdir(path.join(process.cwd(), "docs", "research"), { recursive: true });
await writeFile(path.join(process.cwd(), "docs", "research", "INTERNAL_MOTION_AUDIT.json"), JSON.stringify(report, null, 2), "utf8");
