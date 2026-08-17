# ApproachSection Specification

## Overview
- **Target file:** `src/components/sites/fileon-framer-website-846bcc9f/root-8a5edab2/ApproachSection.tsx`
- **Interaction model:** scroll-driven sticky card stack (top:40px) — NOT tabs
- **Source of truth (read both, they are exact captures of the live site):**
  - DOM outline: `docs/research/fileon-framer-website-846bcc9f/root-8a5edab2/raw/approach.dom.txt` (324 lines)
  - Scoped CSS: `docs/research/fileon-framer-website-846bcc9f/root-8a5edab2/raw/approach.css.txt` (76 rules)

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
scroll-driven sticky card stack (top:40px) — NOT tabs

Hover affordances present in the dump appear as `:hover` selectors in the CSS file — implement each one
with its exact transition duration and easing.

## Assets
Rewrite every remote URL to its local copy:
- `https://framerusercontent.com/images/<id>` → `/sites/fileon-framer-website-846bcc9f/root-8a5edab2/images/<id>`
- `https://framerusercontent.com/assets/<id>.mp4` → `/sites/fileon-framer-website-846bcc9f/root-8a5edab2/videos/<id>.mp4`

Files referenced by this section (4):
- `/sites/fileon-framer-website-846bcc9f/root-8a5edab2/images/SZd9EedUwnpfottuX47mDHqgqXQ.svg`
- `/sites/fileon-framer-website-846bcc9f/root-8a5edab2/images/1cHrjp5K6KglQzCNss20hhllKs.png`
- `/sites/fileon-framer-website-846bcc9f/root-8a5edab2/images/L4RmATyJykuXVAMJnBgwKowz29k.png`
- `/sites/fileon-framer-website-846bcc9f/root-8a5edab2/images/mxgPf2wfnMIMiICGG7TLPGuxpo4.png`

Inline `<svg>` elements in this section: 9. Keep them inline as JSX.

## Text content (verbatim)
- case studies
- Results
- that
- Build
- Trust
- Results that Build
- Explore how strategic legal counsel helped clients overcome challenges and achieve successful outcomes
- View all case studies
- 1/ Corporate Law
- Corporate Dispute
- Represented a growing business in a complex commercial dispute, securing a favorable resolution while protecting long-term business interests.
- 2/ Corporate Law
- Real Estate Law
- Successfully resolved a property ownership conflict through strategic legal representation and careful case preparation.
- 3/ Corporate Law
- Employment Law
- Provided legal guidance in a workplace dispute, helping the client achieve a fair, good and favorable outcome for all ages and culture

## Responsive behavior
- **Desktop (≥1380px):** base rules in the CSS dump.
- **Tablet (810–1379px):** `@media (max-width:1379px) and (min-width:810px)` rules.
- **Mobile (≤809px):** `@media (max-width:809px) and (min-width:0)` rules.
