#!/usr/bin/env node
// Generates the home hero photo from the team reference photo with OpenAI's
// gpt-image-1.5 (images/edits), then crops each variant to 16:9 webp.
//
//   node scripts/generate-hero-image.mjs        # 2 variants, high quality
//   node scripts/generate-hero-image.mjs --n 1
//
// Reads OPENAI_API_KEY from the environment or from .env.local.
// Writes public/images/hero-team-<i>.webp (16:9) and a raw png per variant
// in docs/design-references/hero-team-raw-<i>.png.

import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const REFERENCE = join(ROOT, "docs", "design-references", "hero-team-reference.png");
const OUT_DIR = join(ROOT, "public", "images");
const RAW_DIR = join(ROOT, "docs", "design-references");
const nArg = process.argv.indexOf("--n");
const N = nArg > -1 ? Number(process.argv[nArg + 1]) : 2;

const PROMPT = [
  "Professional editorial team photograph for a law firm website hero, wide landscape framing.",
  "Keep the exact same four people from the reference: same faces, hairstyles, glasses, jewelry, poses and the exact same clothing and shoes",
  "(man on the left in a black jacket; woman sitting on the desk in a light blue top and cream wide-leg trousers;",
  "man in front in a navy jacket, light blue shirt, beige chinos and white sneakers with black stripes; woman on the right in an olive top and black skirt).",
  "Keep them on the same black office chairs and around the same wooden desk with the laptop, relaxed and smiling.",
  "Remove the coat rack and the clothes and bags hanging on it on the right side; replace it with a clean warm-white wall.",
  "Remove the TV screen, the door and wall clutter; clean minimal modern office with warm white walls and light wood floor.",
  "Place the group in the right two thirds of the frame, leaving calm empty wall space on the left third for headline text.",
  "Shot on a full-frame camera, 35mm lens, eye level, soft natural window light from the left, gentle shadows, warm neutral color grade,",
  "realistic skin texture, sharp focus on faces, subtle depth of field. Photorealistic, no text, no logos.",
].join(" ");

function readKey() {
  if (process.env.OPENAI_API_KEY) return process.env.OPENAI_API_KEY.trim();
  const envFile = join(ROOT, ".env.local");
  if (!existsSync(envFile)) return "";
  const line = readFileSync(envFile, "utf8")
    .split(/\r?\n/)
    .find((l) => l.startsWith("OPENAI_API_KEY="));
  return line ? line.slice("OPENAI_API_KEY=".length).trim().replace(/^["']|["']$/g, "") : "";
}

async function requestEdit(key, withFidelity) {
  const form = new FormData();
  form.append("model", "gpt-image-1.5");
  form.append("prompt", PROMPT);
  form.append("size", "1536x1024");
  form.append("quality", "high");
  form.append("n", String(N));
  form.append("output_format", "png");
  if (withFidelity) form.append("input_fidelity", "high");
  form.append("image", new Blob([readFileSync(REFERENCE)], { type: "image/png" }), "reference.png");

  const res = await fetch("https://api.openai.com/v1/images/edits", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}` },
    body: form,
  });
  const body = await res.json();
  return { ok: res.ok, status: res.status, body };
}

const key = readKey();
if (!key) {
  console.error("Missing OPENAI_API_KEY (env or .env.local).");
  process.exit(1);
}

let result = await requestEdit(key, true);
if (!result.ok && /input_fidelity/i.test(JSON.stringify(result.body))) {
  console.log("input_fidelity not supported, retrying without it.");
  result = await requestEdit(key, false);
}
if (!result.ok) {
  console.error(`OpenAI error ${result.status}: ${result.body?.error?.message ?? "unknown"}`);
  process.exit(1);
}

for (const [i, item] of result.body.data.entries()) {
  const png = Buffer.from(item.b64_json, "base64");
  const rawPath = join(RAW_DIR, `hero-team-raw-${i + 1}.png`);
  writeFileSync(rawPath, png);
  // 1536x1024 -> 1536x864 (16:9), dropping empty wall at the top so the feet stay in frame.
  const outPath = join(OUT_DIR, `hero-team-${i + 1}.webp`);
  await sharp(png).extract({ left: 0, top: 160, width: 1536, height: 864 }).webp({ quality: 86 }).toFile(outPath);
  console.log(`saved ${outPath}`);
}
console.log("usage:", JSON.stringify(result.body.usage ?? {}));
