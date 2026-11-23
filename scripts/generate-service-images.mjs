#!/usr/bin/env node
// Generates the photos for /servicios and every service detail page with
// OpenAI's gpt-image-1.5 at low quality, all requests in parallel.
//
//   node scripts/generate-service-images.mjs          # only missing files
//   node scripts/generate-service-images.mjs --force  # regenerate all
//
// Per service: `<slug>.webp` (landscape: /servicios card + detail body image)
// and `<slug>-retrato.webp` (portrait: detail hero).
// Reads OPENAI_API_KEY from the environment or from .env.local.

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const OUT_DIR = join(ROOT, "public", "meiker", "images", "servicios");
const FORCE = process.argv.includes("--force");

const STYLE = [
  "Editorial still-life photograph for a modern business law firm in Ecuador.",
  "Warm minimal interior, soft natural window light, gentle shadows, shallow depth of field, shot on a full-frame camera.",
  "Color palette: warm cream and sand tones with deep cacao brown wood, small coral orange (#ff5b35) and pale sky blue (#d8efff) accents.",
  "Calm, premium, uncluttered composition with negative space. Photorealistic.",
  "No people, no faces, no hands, no readable text, no letters, no logos.",
].join(" ");

const SUBJECTS = {
  "registro-de-marca":
    "A wooden desk with a neat stack of documents, a round coral rubber stamp and its fresh seal on a blank page, a small blank brand tag and a fountain pen.",
  "cese-de-uso":
    "Two nearly identical blank product boxes on a desk, one of them pushed aside behind a raised palm-sized coral stop sign shape made of paper, a folder with a cacao ribbon next to them.",
  "constitucion-sas":
    "Building blocks in sand, cacao and pale blue stacked into a small modern building on a desk beside a closed leather folder, a key and a pen.",
  "contratos-empresariales":
    "Two elegant pens crossed over a bound contract with blank pages and a coral paper clip, a cup of coffee and a pair of glasses on a warm wooden table.",
  "activos-intangibles":
    "A glass display box on a desk protecting a closed notebook and a small lightbulb, with blank index cards and a pale blue binder around it.",
  "oposicion-y-vigilancia":
    "A brass magnifying glass resting on a spread of blank brand swatch cards in coral, cacao and pale blue, a small desk lamp casting warm light.",
  "derechos-de-autor":
    "An open sketchbook with abstract pencil shapes, a camera, a vinyl record and a closed manuscript tied with a coral string on a creative desk.",
  "prevencion-empresarial":
    "A tidy desk with a closed umbrella leaning on it, a planner with blank pages, a coral checklist card with tick marks and a pale blue folder.",
};

const IMAGES = [
  ...Object.entries(SUBJECTS).flatMap(([slug, subject]) => [
    { file: `${slug}.webp`, size: "1536x1024", subject: `${subject} Wide landscape framing.` },
    { file: `${slug}-retrato.webp`, size: "1024x1536", subject: `${subject} Tall vertical framing, objects in the lower half, wall above.` },
  ]),
  {
    file: "servicios-hero.webp",
    size: "1536x1024",
    subject:
      "A bright, minimal law office meeting room: long wooden table with neat folders, a laptop closed, chairs tucked in, plants, warm white walls. Wide landscape framing with calm empty space on the left.",
  },
  {
    file: "servicios-resumen.webp",
    size: "1024x1536",
    subject:
      "A desk corner seen from above at an angle: a blank brand logo card, a contract, a company stamp and a small potted plant, arranged in a calm editorial way. Tall vertical framing.",
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
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "gpt-image-1.5",
      prompt: `${STYLE} ${image.subject}`,
      size: image.size,
      quality: "low",
      output_format: "webp",
      n: 1,
    }),
  });
  const body = await res.json();
  if (!res.ok) throw new Error(`${image.file}: ${res.status} ${body?.error?.message ?? "unknown"}`);
  writeFileSync(join(OUT_DIR, image.file), Buffer.from(body.data[0].b64_json, "base64"));
  return image.file;
}

const key = readKey();
if (!key) {
  console.error("Missing OPENAI_API_KEY (env or .env.local).");
  process.exit(1);
}
mkdirSync(OUT_DIR, { recursive: true });

const todo = IMAGES.filter((img) => FORCE || !existsSync(join(OUT_DIR, img.file)));
console.log(`Generating ${todo.length} of ${IMAGES.length} images...`);
const results = await Promise.allSettled(todo.map((img) => generate(key, img)));
for (const r of results) console.log(r.status === "fulfilled" ? `ok   ${r.value}` : `FAIL ${r.reason.message}`);
if (results.some((r) => r.status === "rejected")) process.exit(1);
