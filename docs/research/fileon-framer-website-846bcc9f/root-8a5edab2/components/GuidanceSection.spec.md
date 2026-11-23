# GuidanceSection Specification

## Overview
- **Target file:** `src/components/sites/fileon-framer-website-846bcc9f/root-8a5edab2/GuidanceSection.tsx`
- **Interaction model:** click-driven accordion (FAQ)
- **Source of truth (read both, they are exact captures of the live site):**
  - DOM outline: `docs/research/fileon-framer-website-846bcc9f/root-8a5edab2/raw/guidance.dom.txt` (152 lines)
  - Scoped CSS: `docs/research/fileon-framer-website-846bcc9f/root-8a5edab2/raw/guidance.css.txt` (70 rules)

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
click-driven accordion (FAQ)

Hover affordances present in the dump appear as `:hover` selectors in the CSS file — implement each one
with its exact transition duration and easing.

## Assets
Rewrite every remote URL to its local copy:
- `https://framerusercontent.com/images/<id>` → `/sites/fileon-framer-website-846bcc9f/root-8a5edab2/images/<id>`
- `https://framerusercontent.com/assets/<id>.mp4` → `/sites/fileon-framer-website-846bcc9f/root-8a5edab2/videos/<id>.mp4`

Files referenced by this section (5):
- `/sites/fileon-framer-website-846bcc9f/root-8a5edab2/images/y0aoDt88F21BV1gXi4qELBus.svg`
- `/sites/fileon-framer-website-846bcc9f/root-8a5edab2/images/K7uBCQ3LbwXzrWYQFm5zt3VusU.png`
- `/sites/fileon-framer-website-846bcc9f/root-8a5edab2/images/MfOB64mcIPl4UU1zU4e1ipbMGSs.svg`
- `/sites/fileon-framer-website-846bcc9f/root-8a5edab2/images/EYDLAZGki3fWmXGqR28GepT0H40.svg`
- `/sites/fileon-framer-website-846bcc9f/root-8a5edab2/images/Bj7BRyFPI2wxg0fmPoj7fzHMZY.png`

Inline `<svg>` elements in this section: 2. Keep them inline as JSX.

## Text content (verbatim)
- Join us today
- Ready
- to
- discuss
- your
- legal
- matter?
- Ready to discuss your legal
- Schedule a confidential consultation and receive experienced legal guidance tailored to your situation
- CASE FILE 024
- OPEN
- 98%
- Matter Resolution Rate Focused on practical solutions and favorable outcomes.
- Get guidance

## Responsive behavior
- **Desktop (≥1380px):** base rules in the CSS dump.
- **Tablet (810–1379px):** `@media (max-width:1379px) and (min-width:810px)` rules.
- **Mobile (≤809px):** `@media (max-width:809px) and (min-width:0)` rules.
