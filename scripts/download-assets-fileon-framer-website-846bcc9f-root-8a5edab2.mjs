// Downloads Fileon (fileon.framer.website) home-page media assets into the
// namespaced public asset root. Fonts are handled via next/font/google instead.
import fs from 'node:fs/promises';
import path from 'node:path';

const ROOT = 'public/sites/fileon-framer-website-846bcc9f/root-8a5edab2';
const SRC = 'docs/research/fileon-framer-website-846bcc9f/root-8a5edab2/asset-urls.txt';

const raw = (await fs.readFile(SRC, 'utf8')).split('\n').map((l) => l.trim()).filter(Boolean);

// Keep media only; woff2 fonts come from next/font/google.
const media = raw.filter((u) => /\.(png|jpe?g|webp|avif|gif|svg|mp4|webm)(\?|$)/i.test(u));

// One entry per underlying asset id, preferring the largest declared width.
const best = new Map();
for (const url of media) {
  const id = url.split('/').pop().split('?')[0];
  const width = Number(new URL(url).searchParams.get('scale-down-to') ?? new URL(url).searchParams.get('width') ?? 0);
  const prev = best.get(id);
  if (!prev || width > prev.width) best.set(id, { url, width });
}

const jobs = [...best.entries()].map(([id, { url }]) => ({
  url,
  dest: path.join(ROOT, /\.mp4|\.webm/i.test(id) ? 'videos' : 'images', id),
}));

await fs.mkdir(path.join(ROOT, 'images'), { recursive: true });
await fs.mkdir(path.join(ROOT, 'videos'), { recursive: true });

const failures = [];
for (let i = 0; i < jobs.length; i += 4) {
  await Promise.all(
    jobs.slice(i, i + 4).map(async ({ url, dest }) => {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        await fs.writeFile(dest, Buffer.from(await res.arrayBuffer()));
      } catch (err) {
        failures.push(`${url} → ${err.message}`);
      }
    }),
  );
}

console.log(`downloaded ${jobs.length - failures.length}/${jobs.length}`);
if (failures.length) console.error('FAILED:\n' + failures.join('\n'));
