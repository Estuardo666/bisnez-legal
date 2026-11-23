import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const output = path.join(
  process.cwd(),
  "public",
  "sites",
  "fileon-framer-website-846bcc9f",
  "services-corporate-legal-advisory-copy-4-b32e8c8c",
  "images",
);

const assets = [
  {
    name: "service-detail-hero.png",
    url: "https://framerusercontent.com/images/dF1TN8FfvHaWgA5gx0M4MJHzIvU.png?scale-down-to=1024&width=1290&height=1400",
  },
  {
    name: "service-detail-body.png",
    url: "https://framerusercontent.com/images/GX3X4tjdyYelkTdUoM5nwOqxiJM.png?scale-down-to=2048&width=2160&height=1060",
  },
];

await mkdir(output, { recursive: true });

for (const asset of assets) {
  const response = await fetch(asset.url);
  if (!response.ok) throw new Error(`Unable to download ${asset.url}: ${response.status}`);
  await writeFile(path.join(output, asset.name), Buffer.from(await response.arrayBuffer()));
}
