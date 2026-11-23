#!/usr/bin/env node
// Generates the illustrations for the service-detail cards with OpenAI's
// gpt-image-1.5 at low quality, all requests in parallel.
//
//   node scripts/generate-service-card-images.mjs          # only missing files
//   node scripts/generate-service-card-images.mjs --force  # regenerate all
//
// Reads OPENAI_API_KEY from the environment or from .env.local.

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const OUT_DIR = join(ROOT, "public", "meiker", "images", "cards");
const FORCE = process.argv.includes("--force");

const STYLE = [
  "Minimal editorial 3D still-life illustration with soft matte clay and paper materials.",
  "Warm off-white cream background (#fffaf4), gentle daylight from the upper left, soft contact shadows.",
  "Strict palette: deep cacao brown (#461312), coral orange (#ff5b35), pale sky blue (#d8efff), warm sand (#ffeaca).",
  "One clear centered composition with generous negative space, calm and premium, landscape framing.",
  "No text, no letters, no numbers, no logos, no people, no hands.",
].join(" ");

const IMAGES = [
  {
    file: "registro-de-marca-garantia.webp",
    subject:
      "A rounded coral shield with a cacao checkmark embossed on it, resting beside a small stack of sand-colored coins that is neatly set aside, signalling a guarantee with nothing to pay.",
  },
  {
    file: "registro-de-marca-activo.webp",
    subject:
      "A blank cacao brand tag with a coral ring, standing on top of three ascending pale-blue blocks like a podium, suggesting a brand that grows into a valuable business asset.",
  },
  {
    file: "registro-de-marca-entender.webp",
    subject:
      "A large cacao magnifying glass hovering over a few blank paper cards with simple abstract shapes (circle, arch, square) in coral and pale blue, one of them highlighted, suggesting careful review of similar marks.",
  },
  {
    file: "registro-de-marca-proceso.webp",
    subject:
      "A clean path made of four rounded stepping tiles in sand, pale blue and coral leading to a folded document with a cacao seal, suggesting a clear step-by-step filing process.",
  },
];

function readKey() {
  if (process.env.OPENAI_API_KEY) return process.env.OPENAI_API_KEY.trim();
  const envFile = join(ROOT, ".env.local");
  if (!existsSync(envFile)) return "";
  const line = readFileSync(envFile, "utf8")
    .split(/\r?\n/)
    .find((l) => l.startsWith("OPENAI_API_KEY="));
  return line ? line.slice("OPENAI_API_KEY=".length).trim().replace(/^["']|["']$/g, "") : "";
}

async function generate(key, image) {
  const res = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${key}` },
    body: JSON.stringify({
      model: "gpt-image-1.5",
      prompt: `${image.subject} ${STYLE}`,
      quality: "low",
      size: "1536x1024",
      output_format: "webp",
      output_compression: 85,
      n: 1,
    }),
  });
  const json = await res.json();
  if (!res.ok) throw new Error(`${image.file}: ${res.status} ${json?.error?.message ?? "unknown error"}`);
  const b64 = json?.data?.[0]?.b64_json;
  if (!b64) throw new Error(`${image.file}: response had no image data`);
  writeFileSync(join(OUT_DIR, image.file), Buffer.from(b64, "base64"));
  return image.file;
}

const key = readKey();
if (!key) {
  console.error("OPENAI_API_KEY not found. Add it to .env.local or the environment.");
  process.exit(1);
}

mkdirSync(OUT_DIR, { recursive: true });
const todo = IMAGES.filter((image) => FORCE || !existsSync(join(OUT_DIR, image.file)));
if (todo.length === 0) {
  console.log("All images already exist. Use --force to regenerate.");
  process.exit(0);
}

console.log(`Generating ${todo.length} image(s) with gpt-image-1.5 (low)...`);
const results = await Promise.allSettled(todo.map((image) => generate(key, image)));
let failed = 0;
for (const result of results) {
  if (result.status === "fulfilled") console.log(`  ok    ${result.value}`);
  else {
    failed += 1;
    console.error(`  fail  ${result.reason.message}`);
  }
}
process.exit(failed ? 1 : 0);
