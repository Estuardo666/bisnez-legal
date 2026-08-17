# TestimonialSection Specification

## Overview
- **Target file:** `src/components/sites/fileon-framer-website-846bcc9f/root-8a5edab2/TestimonialSection.tsx`
- **Interaction model:** scroll-driven reveal
- **Source of truth (read both, they are exact captures of the live site):**
  - DOM outline: `docs/research/fileon-framer-website-846bcc9f/root-8a5edab2/raw/testimonial.dom.txt` (281 lines)
  - Scoped CSS: `docs/research/fileon-framer-website-846bcc9f/root-8a5edab2/raw/testimonial.css.txt` (50 rules)

The CSS dump contains every rule that targets this section's Framer classes, taken verbatim from the
live page's stylesheets. Every value is therefore exact — do not estimate anything.

## DOM structure
See the DOM outline. Indentation is nesting depth; `»` lines are text nodes; `name="..."` is the
original Framer layer name and is the best guide for what to call each sub-component.

Framer emits the same content up to three times, once per breakpoint, wrapped in
`ssr-variant hidden-*` containers. **Collapse those duplicates into one React tree** and express the
differences with Tailwind responsive classes instead.

## Computed styles
Every rule is in the CSS dump, in this order per class:
1. base rule — desktop (`min-width: 1380px`)
2. `@media (max-width:1379px) and (min-width:810px)` — tablet
3. `@media (max-width:809px) and (min-width:0)` — mobile

Map them to Tailwind as: base rule → unmodified utilities, tablet → `md:`, mobile → `max-md:`,
with `md` configured at 810px. If a value has no Tailwind equivalent, use an arbitrary value
(e.g. `pt-[380px]`) rather than rounding to the nearest scale step.

## States & behaviors
scroll-driven reveal

Hover affordances present in the dump appear as `:hover` selectors in the CSS file — implement each one
with its exact transition duration and easing.

## Assets
Rewrite every remote URL to its local copy:
- `https://framerusercontent.com/images/<id>` → `/sites/fileon-framer-website-846bcc9f/root-8a5edab2/images/<id>`
- `https://framerusercontent.com/assets/<id>.mp4` → `/sites/fileon-framer-website-846bcc9f/root-8a5edab2/videos/<id>.mp4`

Files referenced by this section (6):
- `/sites/fileon-framer-website-846bcc9f/root-8a5edab2/images/9ihf1DLBVzmuEyl8rEzkmWaZm8.svg`
- `/sites/fileon-framer-website-846bcc9f/root-8a5edab2/images/ofLbu5mL76J5YREgU64729IO7F8.svg`
- `/sites/fileon-framer-website-846bcc9f/root-8a5edab2/images/amzAiW9uC662kw3FTeOzQFBAhlE.png`
- `/sites/fileon-framer-website-846bcc9f/root-8a5edab2/images/c7l9SnoBhlRXHwyD9o41pd04tw.svg`
- `/sites/fileon-framer-website-846bcc9f/root-8a5edab2/images/LLYmLXau2Lwn5kDwpjdouVnLKR8.svg`
- `/sites/fileon-framer-website-846bcc9f/root-8a5edab2/images/Qdd8KYVqqFLz8k349mORNdnHbe8.svg`

Inline `<svg>` elements in this section: 0. Keep them inline as JSX.

## Text content (verbatim)
- Clients review
- From consultation to resolution, the firm's professionalism and attention to detail exceeded our expectations. Their advice helped us make informed decisions and achieve a favorable outcome
- 4.8/5 Verified Rating
- Michael Reynolds
- Founder, Reynolds Holdings
- We were impressed by the firm's responsiveness, legal expertise, and professionalism, helping us make informed decisions and move forward with confidence throughout every step.
- Every interaction reflected the firm's commitment to excellence, attention to detail, strategic guidance, and client satisfaction, giving us confidence throughout the entire process.
- Professional guidance delivered informed decisions and favorable legal outcomes.

## Responsive behavior
- **Desktop (≥1380px):** base rules in the CSS dump.
- **Tablet (810–1379px):** `@media (max-width:1379px) and (min-width:810px)` rules.
- **Mobile (≤809px):** `@media (max-width:809px) and (min-width:0)` rules.
