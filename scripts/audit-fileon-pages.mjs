import { chromium } from "playwright";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const pages = [
  { slug: "services-3b1aeccb", url: "https://fileon.framer.website/services" },
  { slug: "contact-4eb95063", url: "https://fileon.framer.website/contact" },
  { slug: "teams-amelia-brooks-3d7f0bd5", url: "https://fileon.framer.website/teams/amelia-brooks" },
  {
    slug: "services-corporate-legal-advisory-copy-4-b32e8c8c",
    url: "https://fileon.framer.website/services/corporate-legal-advisory-copy-4",
  },
];

const viewports = [
  { name: "desktop-audit", width: 1440, height: 1000 },
  { name: "tablet-audit", width: 768, height: 900 },
  { name: "mobile-audit", width: 390, height: 844 },
];

const browser = await chromium.launch({ headless: true });

for (const target of pages) {
  const screenshotDir = path.join(
    root,
    "docs",
    "design-references",
    "fileon-framer-website-846bcc9f",
    target.slug,
  );
  const rawDir = path.join(
    root,
    "docs",
    "research",
    "fileon-framer-website-846bcc9f",
    target.slug,
    "raw",
  );
  await mkdir(screenshotDir, { recursive: true });
  await mkdir(rawDir, { recursive: true });

  for (const viewport of viewports) {
    const context = await browser.newContext({
      viewport: { width: viewport.width, height: viewport.height },
      deviceScaleFactor: 1,
      reducedMotion: "reduce",
    });
    const page = await context.newPage();
    await page.goto(target.url, { waitUntil: "networkidle", timeout: 90_000 });
    await page.evaluate(async () => {
      const step = Math.max(320, Math.floor(window.innerHeight * 0.65));
      for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
        window.scrollTo(0, y);
        await new Promise((resolve) => setTimeout(resolve, 90));
      }
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(500);
    await page.screenshot({
      path: path.join(screenshotDir, `${viewport.name}.png`),
      fullPage: true,
      animations: "disabled",
    });

    const audit = await page.evaluate(() => {
      const styleOf = (element) => {
        const style = getComputedStyle(element);
        const rect = element.getBoundingClientRect();
        return {
          tag: element.tagName.toLowerCase(),
          text: element.textContent?.replace(/\s+/g, " ").trim().slice(0, 500) ?? "",
          x: Math.round(rect.x),
          y: Math.round(rect.y + window.scrollY),
          width: Math.round(rect.width),
          height: Math.round(rect.height),
          display: style.display,
          position: style.position,
          color: style.color,
          backgroundColor: style.backgroundColor,
          fontFamily: style.fontFamily,
          fontSize: style.fontSize,
          fontWeight: style.fontWeight,
          lineHeight: style.lineHeight,
          letterSpacing: style.letterSpacing,
          borderRadius: style.borderRadius,
          padding: style.padding,
          gap: style.gap,
        };
      };
      return {
        url: location.href,
        title: document.title,
        viewport: { width: innerWidth, height: innerHeight },
        page: {
          width: document.documentElement.scrollWidth,
          height: document.documentElement.scrollHeight,
        },
        headings: [...document.querySelectorAll("h1,h2,h3,h4")].map(styleOf),
        sections: [...document.querySelectorAll("main section, main > div")]
          .filter((element) => element.getBoundingClientRect().height > 80)
          .map(styleOf),
        links: [...document.querySelectorAll("a")].map((element) => ({
          text: element.textContent?.replace(/\s+/g, " ").trim() ?? "",
          href: element.href,
        })),
        buttons: [...document.querySelectorAll("button")].map(styleOf),
        inputs: [...document.querySelectorAll("input,textarea,select")].map((element) => ({
          ...styleOf(element),
          name: element.getAttribute("name"),
          type: element.getAttribute("type"),
          placeholder: element.getAttribute("placeholder"),
        })),
        images: [...document.querySelectorAll("img")].map((element) => ({
          src: element.currentSrc || element.src,
          alt: element.alt,
          ...styleOf(element),
        })),
      };
    });
    await writeFile(
      path.join(rawDir, `${viewport.name}.json`),
      JSON.stringify(audit, null, 2),
      "utf8",
    );
    if (viewport.name === "desktop-audit") {
      await writeFile(path.join(rawDir, "desktop-audit.html"), await page.content(), "utf8");
    }
    await context.close();
  }
}

await browser.close();
