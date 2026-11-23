import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const root = "public/sites/fileon-framer-website-846bcc9f";

const pages = {
  "about-979bddc4": [
    ["uiAUVw9ZgXgAZZ6U1IftqvZUTlQ", "about-hero.png"],
    ["8oChLy3Mf9o5Nz9p1SXhb1YR334", "about-feature.png"],
    ["EkJrn3quotADeedsaCTqAucjmY", "about-team-1.png"],
    ["u1JPcD5LUidLmg90l9pkbVRcY", "about-team-2.png"],
    ["udgwF2KwK80WNo7dU0A7uEyE8I", "about-team-3.png"],
    ["XOVrXbRYpmw3sjlDFpSLUqU5liQ", "about-team-4.png"],
    ["XxlJJIq7NuLzJr0kHQtlBUYcBg", "about-team-5.png"],
  ],
  "services-3b1aeccb": [
    ["3mQgnKcmHjteUltJZk3eIaDb2Kg", "services-hero.png"],
    ["Bj7BRyFPI2wxg0fmPoj7fzHMZY", "services-feature.png"],
    ["y0aoDt88F21BV1gXi4qELBus", "services-mark.svg"],
  ],
  "contact-4eb95063": [
    ["xTcCjuzR0rAYE5FrhnZfywSbxho", "contact-hero.png"],
    ["XxaIVTvPwKtQxFXVEpIMiCIvOgw", "contact-avatar.png"],
  ],
  "teams-a30fe034": [
    ["7zEjy2ci8iFkG1hnvouI6HKYJiE", "team-augusto.png"],
    ["hrWotnQDomIsdvxtWvoZQ4yXLQ0", "team-gustavo.png"],
    ["XxlJJIq7NuLzJr0kHQtlBUYcBg", "team-sofia.png"],
    ["EkJrn3quotADeedsaCTqAucjmY", "team-alt-1.png"],
    ["udgwF2KwK80WNo7dU0A7uEyE8I", "team-alt-2.png"],
    ["XOVrXbRYpmw3sjlDFpSLUqU5liQ", "team-alt-3.png"],
  ],
  "teams-amelia-brooks-3d7f0bd5": [
    ["AtXisp0R3hpWdOvM7jdz8FlwGI", "team-detail-hero.png"],
    ["XxlJJIq7NuLzJr0kHQtlBUYcBg", "team-detail-portrait.png"],
  ],
};

function extension(contentType, fallback) {
  const type = contentType.split(";")[0].trim();
  if (type === "image/svg+xml") return ".svg";
  if (type === "image/webp") return ".webp";
  if (type === "image/jpeg") return ".jpg";
  if (type === "image/png") return ".png";
  return path.extname(fallback) || ".bin";
}

for (const [page, assets] of Object.entries(pages)) {
  const outputDir = path.join(root, page, "images");
  await mkdir(outputDir, { recursive: true });
  for (const [assetId, filename] of assets) {
    const response = await fetch(
      `https://framerusercontent.com/images/${assetId}${path.extname(filename)}`,
    );
    if (!response.ok) throw new Error(`${assetId}: ${response.status}`);
    const suffix = extension(response.headers.get("content-type") ?? "", filename);
    const outputName = path.extname(filename) ? filename.replace(/\.[^.]+$/, suffix) : `${filename}${suffix}`;
    await writeFile(path.join(outputDir, outputName), Buffer.from(await response.arrayBuffer()));
    console.log(`${page}/${outputName}`);
  }
}
