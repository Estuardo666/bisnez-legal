import fs from 'fs';

const SITE='fileon-framer-website-846bcc9f', PAGE='root-8a5edab2';
const meta = {
  header:      {C:'Header',      model:'static overlay + click-driven hamburger overlay menu'},
  hero:        {C:'HeroSection', model:'scroll-driven (entrance transform), static layout'},
  brand:       {C:'BrandSection',model:'time-driven marquee'},
  about:       {C:'AboutSection',model:'scroll-driven reveal (image scale + fade)'},
  casestudies: {C:'CaseStudiesSection', model:'scroll-driven with position:sticky left column (top:20px) — NOT tabs'},
  approach:    {C:'ApproachSection',    model:'scroll-driven sticky card stack (top:40px) — NOT tabs'},
  service:     {C:'ServiceSection',     model:'scroll-driven sticky list (top:0) — NOT tabs'},
  video:       {C:'VideoSection',       model:'looping muted <video>'},
  trustbar:    {C:'TrustBarSection',    model:'time-driven marquee'},
  expertise:   {C:'ExpertiseSection',   model:'scroll-driven reveal'},
  testimonial: {C:'TestimonialSection', model:'scroll-driven reveal'},
  pricing:     {C:'PricingSection',     model:'static + hover'},
  guidance:    {C:'GuidanceSection',    model:'click-driven accordion (FAQ)'},
  blog:        {C:'BlogSection',        model:'static + card hover'},
  footer:      {C:'Footer',             model:'static + link hover'},
};

for (const [key, { C, model }] of Object.entries(meta)) {
  const dom = fs.readFileSync(`raw/${key}.dom.txt`,'utf8');
  const text = [...dom.matchAll(/^\s*» (.+)$/gm)].map(m=>m[1])
    .filter(t=>!/^!--/.test(t)).filter((t,i,a)=>a.indexOf(t)===i);
  const imgs = [...new Set([...dom.matchAll(/src="(https:\/\/framerusercontent\.com\/[^"]+)"/g)]
    .map(m=>m[1].split('?')[0].split('/').pop()))];
  const svgs = (dom.match(/\[SVG\]/g)||[]).length;
  const cssLines = fs.readFileSync(`raw/${key}.css.txt`,'utf8').split('\n').length;

  fs.writeFileSync(`components/${C}.spec.md`, `# ${C} Specification

## Overview
- **Target file:** \`src/components/sites/${SITE}/${PAGE}/${C}.tsx\`
- **Interaction model:** ${model}
- **Source of truth (read both, they are exact captures of the live site):**
  - DOM outline: \`docs/research/${SITE}/${PAGE}/raw/${key}.dom.txt\` (${dom.split('\n').length} lines)
  - Scoped CSS: \`docs/research/${SITE}/${PAGE}/raw/${key}.css.txt\` (${cssLines} rules)

The CSS dump contains every rule that targets this section's Framer classes, taken verbatim from the
live page's stylesheets. Every value is therefore exact — do not estimate anything.

## DOM structure
See the DOM outline. Indentation is nesting depth; \`»\` lines are text nodes; \`name="..."\` is the
original Framer layer name and is the best guide for what to call each sub-component.

Framer emits the same content up to three times, once per breakpoint, wrapped in
\`ssr-variant hidden-*\` containers. **Collapse those duplicates into one React tree** and express the
differences with Tailwind responsive classes instead.

## Computed styles
Every rule is in the CSS dump, in this order per class:
1. base rule — desktop (\`min-width: 1380px\`)
2. \`@media (max-width:1379px) and (min-width:810px)\` — tablet
3. \`@media (max-width:809px) and (min-width:0)\` — mobile

Map them to Tailwind as: base rule → unmodified utilities, tablet → \`md:\`, mobile → \`max-md:\`,
with \`md\` configured at 810px. If a value has no Tailwind equivalent, use an arbitrary value
(e.g. \`pt-[380px]\`) rather than rounding to the nearest scale step.

## States & behaviors
${model}

Hover affordances present in the dump appear as \`:hover\` selectors in the CSS file — implement each one
with its exact transition duration and easing.

## Assets
Rewrite every remote URL to its local copy:
- \`https://framerusercontent.com/images/<id>\` → \`/sites/${SITE}/${PAGE}/images/<id>\`
- \`https://framerusercontent.com/assets/<id>.mp4\` → \`/sites/${SITE}/${PAGE}/videos/<id>.mp4\`

Files referenced by this section (${imgs.length}):
${imgs.map(f=>`- \`/sites/${SITE}/${PAGE}/images/${f}\``).join('\n') || '- none'}

Inline \`<svg>\` elements in this section: ${svgs}. Keep them inline as JSX.

## Text content (verbatim)
${text.map(t=>`- ${t}`).join('\n') || '- none'}

## Responsive behavior
- **Desktop (≥1380px):** base rules in the CSS dump.
- **Tablet (810–1379px):** \`@media (max-width:1379px) and (min-width:810px)\` rules.
- **Mobile (≤809px):** \`@media (max-width:809px) and (min-width:0)\` rules.
`);
  console.log(C, '| text', text.length, '| imgs', imgs.length, '| svg', svgs);
}
