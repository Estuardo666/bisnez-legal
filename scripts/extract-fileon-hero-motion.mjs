import { chromium } from "playwright";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const output = path.join(root, "docs", "research", "fileon-framer-website-846bcc9f", "motion-pass-2026-08-30");
const shots = path.join(root, "docs", "design-references", "fileon-framer-website-846bcc9f", "motion-pass-2026-08-30");
await mkdir(output, { recursive: true });
await mkdir(shots, { recursive: true });

const targets = [
  ["about-source", "https://fileon.framer.website/about"],
  ["services-source", "https://fileon.framer.website/services"],
  ["teams-source", "https://fileon.framer.website/teams"],
  ["service-detail-source", "https://fileon.framer.website/services/corporate-legal-advisory"],
  ["nosotros-local", "http://localhost:3001/nosotros"],
  ["servicios-local", "http://localhost:3001/servicios"],
  ["equipo-local", "http://localhost:3001/equipo"],
  ["detalle-servicio-local", "http://localhost:3001/servicios/registro-de-marca"],
];

const browser = await chromium.launch({ headless: true });

function snapshot(page) {
  return page.evaluate(() => {
    const pick = (element) => {
      const rect = element.getBoundingClientRect();
      const style = getComputedStyle(element);
      return {
        tag: element.tagName.toLowerCase(),
        text: element.textContent?.replace(/\s+/g, " ").trim().slice(0, 180) || "",
        className: typeof element.className === "string" ? element.className.slice(0, 240) : "",
        rect: { x: rect.x, y: rect.y, width: rect.width, height: rect.height },
        opacity: style.opacity,
        transform: style.transform,
        clipPath: style.clipPath,
        position: style.position,
        top: style.top,
        background: style.backgroundColor,
        fontSize: style.fontSize,
        lineHeight: style.lineHeight,
      };
    };
    const animations = document.getAnimations({ subtree: true }).slice(0, 80).map((animation) => {
      const effect = animation.effect;
      const target = effect?.target;
      return {
        target: target ? pick(target) : null,
        playState: animation.playState,
        currentTime: animation.currentTime,
        timing: effect?.getTiming?.(),
        keyframes: effect?.getKeyframes?.().map((frame) => ({
          offset: frame.offset,
          opacity: frame.opacity,
          transform: frame.transform,
          clipPath: frame.clipPath,
          easing: frame.easing,
        })),
      };
    });
    const candidates = [...document.querySelectorAll("header, main > *, main section, h1, h2, img")]
      .filter((node) => {
        const rect = node.getBoundingClientRect();
        return rect.height > 20 && rect.top < innerHeight * 1.5 && rect.bottom > -50;
      })
      .slice(0, 45)
      .map(pick);
    return {
      scrollY,
      pageHeight: document.documentElement.scrollHeight,
      candidates,
      animations,
    };
  });
}

for (const [name, url] of targets) {
  const context = await browser.newContext({
    viewport: { width: 1440, height: 1000 },
    deviceScaleFactor: 1,
    reducedMotion: "no-preference",
  });
  const page = await context.newPage();
  const records = [];
  try {
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 90_000 });
    for (const [label, delay] of [["t0", 0], ["t120", 120], ["t360", 240], ["t900", 540], ["t1800", 900]]) {
      if (delay) await page.waitForTimeout(delay);
      records.push({ label, ...(await snapshot(page)) });
      if (label === "t0" || label === "t360" || label === "t1800") {
        await page.screenshot({ path: path.join(shots, `${name}-${label}.png`) });
      }
    }
    const pageHeight = await page.evaluate(() => document.documentElement.scrollHeight);
    for (const y of [500, 900, 1400, 2200, Math.max(0, pageHeight - 1000)]) {
      await page.evaluate((nextY) => window.scrollTo(0, nextY), y);
      await page.waitForTimeout(90);
      records.push({ label: `scroll-${y}-early`, ...(await snapshot(page)) });
      await page.waitForTimeout(650);
      records.push({ label: `scroll-${y}-settled`, ...(await snapshot(page)) });
    }
    await writeFile(path.join(output, `${name}.json`), JSON.stringify({ url, records }, null, 2), "utf8");
  } catch (error) {
    await writeFile(path.join(output, `${name}.error.txt`), String(error), "utf8");
  }
  await context.close();
}

await browser.close();
