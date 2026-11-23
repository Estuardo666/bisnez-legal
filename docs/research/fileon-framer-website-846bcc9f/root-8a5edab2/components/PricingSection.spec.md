# PricingSection Specification

## Overview
- **Target file:** `src/components/sites/fileon-framer-website-846bcc9f/root-8a5edab2/PricingSection.tsx`
- **Interaction model:** static + hover
- **Source of truth (read both, they are exact captures of the live site):**
  - DOM outline: `docs/research/fileon-framer-website-846bcc9f/root-8a5edab2/raw/pricing.dom.txt` (318 lines)
  - Scoped CSS: `docs/research/fileon-framer-website-846bcc9f/root-8a5edab2/raw/pricing.css.txt` (88 rules)

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
static + hover

Hover affordances present in the dump appear as `:hover` selectors in the CSS file — implement each one
with its exact transition duration and easing.

## Assets
Rewrite every remote URL to its local copy:
- `https://framerusercontent.com/images/<id>` → `/sites/fileon-framer-website-846bcc9f/root-8a5edab2/images/<id>`
- `https://framerusercontent.com/assets/<id>.mp4` → `/sites/fileon-framer-website-846bcc9f/root-8a5edab2/videos/<id>.mp4`

Files referenced by this section (3):
- `/sites/fileon-framer-website-846bcc9f/root-8a5edab2/images/He0tgRAwqMsefFs28LL4LqExkTc.svg`
- `/sites/fileon-framer-website-846bcc9f/root-8a5edab2/images/SZd9EedUwnpfottuX47mDHqgqXQ.svg`
- `/sites/fileon-framer-website-846bcc9f/root-8a5edab2/images/K7uBCQ3LbwXzrWYQFm5zt3VusU.png`

Inline `<svg>` elements in this section: 0. Keep them inline as JSX.

## Text content (verbatim)
- Pricing
- Basic plan
- Premium
- $2,500
- / Monthly plan
- Every project is unique, but our pricing stays clear, flexible, and aligned with real business goals, combining strategy, design, and creativity into one focused solution
- Court filing assistance included
- Basic legal consultation plan
- Document review and drafting
- Case evaluation and guidance
- Email and phone support
- Start today
- Custom Plan
- Custom legal plans tailored to your specific case needs, offering flexible support, strategy, and representation for complex or ongoing matters
- Call us :
- +1 (415) 555-0123

## Responsive behavior
- **Desktop (≥1380px):** base rules in the CSS dump.
- **Tablet (810–1379px):** `@media (max-width:1379px) and (min-width:810px)` rules.
- **Mobile (≤809px):** `@media (max-width:809px) and (min-width:0)` rules.
