import fs from "node:fs/promises";
import { existsSync } from "node:fs";

const PORT = 9222;
const siteKey = "fileon-framer-website-846bcc9f";
const pages = [
  { path: "/about", key: "about-979bddc4" },
  { path: "/services", key: "services-3b1aeccb" },
  { path: "/contact", key: "contact-4eb95063" },
  { path: "/teams", key: "teams-a30fe034" },
  { path: "/teams/amelia-brooks", key: "teams-amelia-brooks-3d7f0bd5" },
];

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function connect() {
  const response = await fetch(`http://127.0.0.1:${PORT}/json/list`);
  const tabs = await response.json();
  const tab = tabs.find((item) => item.type === "page");
  if (!tab) throw new Error("No Chrome page available");
  const socket = new WebSocket(tab.webSocketDebuggerUrl);
  await new Promise((resolve, reject) => {
    socket.addEventListener("open", resolve, { once: true });
    socket.addEventListener("error", reject, { once: true });
  });
  let id = 0;
  const pending = new Map();
  socket.addEventListener("message", (event) => {
    const message = JSON.parse(event.data);
    if (message.id && pending.has(message.id)) {
      const { resolve, reject } = pending.get(message.id);
      pending.delete(message.id);
      if (message.error) reject(new Error(JSON.stringify(message.error)));
      else resolve(message.result);
    }
  });
  const command = (method, params = {}) => new Promise((resolve, reject) => {
    const requestId = ++id;
    pending.set(requestId, { resolve, reject });
    socket.send(JSON.stringify({ id: requestId, method, params }));
  });
  await command("Page.enable");
  await command("Runtime.enable");
  return { command, close: () => socket.close() };
}

async function evaluate(browser, expression, returnByValue = true) {
  const result = await browser.command("Runtime.evaluate", {
    expression,
    awaitPromise: true,
    returnByValue,
  });
  if (result.exceptionDetails) {
    throw new Error(result.exceptionDetails.text || "Runtime evaluation failed");
  }
  return result.result?.value;
}

const reconExpression = `(() => {
  const clean = (value) => (value || "").replace(/\\s+/g, " ").trim();
  const cssProps = [
    "display", "position", "width", "height", "maxWidth", "minHeight", "padding", "margin", "gap",
    "gridTemplateColumns", "flexDirection", "alignItems", "justifyContent", "fontFamily", "fontSize",
    "fontWeight", "lineHeight", "letterSpacing", "color", "backgroundColor", "border", "borderRadius",
    "boxShadow", "opacity", "overflow", "zIndex", "transition", "transform", "textTransform"
  ];
  const styleOf = (el) => {
    const computed = getComputedStyle(el);
    return Object.fromEntries(cssProps.map((prop) => [prop, computed[prop]]));
  };
  const uniqueStyles = [...document.querySelectorAll("body, main, header, footer, section, h1, h2, h3, p, a, button, input, textarea, img, video")]
    .slice(0, 300)
    .map((el) => ({
      tag: el.tagName.toLowerCase(),
      id: el.id || null,
      classes: typeof el.className === "string" ? el.className.split(/\\s+/).slice(0, 6) : [],
      text: clean(el.textContent).slice(0, 240),
      styles: styleOf(el),
      rect: (() => { const r = el.getBoundingClientRect(); return { x: Math.round(r.x), y: Math.round(r.y + scrollY), width: Math.round(r.width), height: Math.round(r.height) }; })(),
    }));
  return {
    url: location.href,
    title: document.title,
    viewport: { width: innerWidth, height: innerHeight, devicePixelRatio },
    htmlClass: document.documentElement.className,
    bodyClass: document.body.className,
    bodyStyles: styleOf(document.body),
    htmlStyles: styleOf(document.documentElement),
    headings: [...document.querySelectorAll("h1,h2,h3,h4")].map((el) => ({ tag: el.tagName.toLowerCase(), text: clean(el.textContent), rect: (() => { const r = el.getBoundingClientRect(); return { y: Math.round(r.y + scrollY), width: Math.round(r.width), height: Math.round(r.height) }; })(), styles: styleOf(el) })),
    sections: [...document.querySelectorAll("main > *, main section, body > main > *")].map((el) => ({ tag: el.tagName.toLowerCase(), id: el.id || null, classes: typeof el.className === "string" ? el.className.split(/\\s+/).slice(0, 8) : [], text: clean(el.textContent).slice(0, 500), rect: (() => { const r = el.getBoundingClientRect(); return { y: Math.round(r.y + scrollY), width: Math.round(r.width), height: Math.round(r.height) }; })() })).filter((item, index, all) => item.height > 40 && all.findIndex((other) => other.rect.y === item.rect.y && other.rect.height === item.rect.height) === index),
    text: clean(document.body.innerText),
    links: [...document.querySelectorAll("a")].map((el) => ({ text: clean(el.innerText), href: el.href, aria: el.getAttribute("aria-label") })).filter((item) => item.text || item.aria),
    images: [...document.images].map((img) => ({ src: img.currentSrc || img.src, alt: img.alt, width: img.naturalWidth, height: img.naturalHeight, loading: img.loading, className: img.className })),
    videos: [...document.querySelectorAll("video")].map((video) => ({ src: video.currentSrc || video.src, poster: video.poster, autoplay: video.autoplay, loop: video.loop, muted: video.muted })),
    backgroundImages: [...document.querySelectorAll("*")].map((el) => ({ el: el.tagName.toLowerCase(), className: typeof el.className === "string" ? el.className.split(/\\s+/).slice(0, 4).join(" ") : "", value: getComputedStyle(el).backgroundImage })).filter((item) => item.value && item.value !== "none").slice(0, 200),
    svgCount: document.querySelectorAll("svg").length,
    styleSamples: uniqueStyles,
  };
})()`;

async function capture(browser, path, key, width, height, label) {
  await browser.command("Emulation.setDeviceMetricsOverride", { width, height, deviceScaleFactor: 1, mobile: width < 600 });
  await browser.command("Page.navigate", { url: `https://fileon.framer.website${path}` });
  await sleep(7000);
  await evaluate(browser, "window.scrollTo(0, 0)");
  await sleep(300);
  const data = await evaluate(browser, reconExpression);
  await fs.writeFile(`docs/research/${siteKey}/${key}/raw/${label}.json`, JSON.stringify(data, null, 2), "utf8");
  const metrics = await browser.command("Page.getLayoutMetrics");
  const contentSize = metrics.cssContentSize || metrics.contentSize;
  const screenshot = await browser.command("Page.captureScreenshot", {
    format: "png",
    captureBeyondViewport: true,
    fromSurface: true,
    clip: { x: 0, y: 0, width: Math.max(width, contentSize.width), height: contentSize.height, scale: 1 },
  });
  await fs.writeFile(`docs/design-references/${siteKey}/${key}/${label}.png`, Buffer.from(screenshot.data, "base64"));
  return data;
}

async function main() {
  for (const page of pages) {
    await fs.mkdir(`docs/research/${siteKey}/${page.key}/raw`, { recursive: true });
    const desktop = await capture(browser, page.path, page.key, 1440, 900, "desktop");
    const mobile = await capture(browser, page.path, page.key, 390, 844, "mobile");
    await fs.writeFile(`docs/research/${siteKey}/${page.key}/RECON.json`, JSON.stringify({ source: `https://fileon.framer.website${page.path}`, desktop, mobile }, null, 2), "utf8");
    const assetUrls = [...new Set([...desktop.images, ...mobile.images].map((asset) => asset.src).filter(Boolean))];
    await fs.writeFile(`docs/research/${siteKey}/${page.key}/asset-urls.txt`, assetUrls.join("\n") + "\n", "utf8");
    console.log(`${page.path}: ${assetUrls.length} image assets, ${desktop.headings.length} headings, ${desktop.sections.length} sections`);
  }
  await browser.command("Emulation.clearDeviceMetricsOverride");
  browser.close();
}

const browser = await connect();
try {
  await main();
} catch (error) {
  browser.close();
  console.error(error);
  process.exitCode = 1;
}
