# BlogSection Specification

## Overview
- **Target file:** `src/components/sites/fileon-framer-website-846bcc9f/root-8a5edab2/BlogSection.tsx`
- **Interaction model:** static + card hover
- **Source of truth (read both, they are exact captures of the live site):**
  - DOM outline: `docs/research/fileon-framer-website-846bcc9f/root-8a5edab2/raw/blog.dom.txt` (352 lines)
  - Scoped CSS: `docs/research/fileon-framer-website-846bcc9f/root-8a5edab2/raw/blog.css.txt` (77 rules)

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
static + card hover

Hover affordances present in the dump appear as `:hover` selectors in the CSS file — implement each one
with its exact transition duration and easing.

## Assets
Rewrite every remote URL to its local copy:
- `https://framerusercontent.com/images/<id>` → `/sites/fileon-framer-website-846bcc9f/root-8a5edab2/images/<id>`
- `https://framerusercontent.com/assets/<id>.mp4` → `/sites/fileon-framer-website-846bcc9f/root-8a5edab2/videos/<id>.mp4`

Files referenced by this section (7):
- `/sites/fileon-framer-website-846bcc9f/root-8a5edab2/images/SZd9EedUwnpfottuX47mDHqgqXQ.svg`
- `/sites/fileon-framer-website-846bcc9f/root-8a5edab2/images/5KMN0unxlWFjDSiBlujYK0I1V4.png`
- `/sites/fileon-framer-website-846bcc9f/root-8a5edab2/images/CekQhoySyk4yvSOaCWN8WNaPKqk.svg`
- `/sites/fileon-framer-website-846bcc9f/root-8a5edab2/images/PGYGVLmyGTP0EPMngjG7vljuTs.svg`
- `/sites/fileon-framer-website-846bcc9f/root-8a5edab2/images/BODlVlNXnbQ0PJhZCOMVc48x8.png`
- `/sites/fileon-framer-website-846bcc9f/root-8a5edab2/images/aQ5R4aV6rdcY8okvLRUjvHNsvY.png`
- `/sites/fileon-framer-website-846bcc9f/root-8a5edab2/images/94vQ2MMtTlhPfCbUnLo8w42XqIg.png`

Inline `<svg>` elements in this section: 0. Keep them inline as JSX.

## Text content (verbatim)
- our blogs
- Legal
- Updates
- And
- Perspectives
- Legal Updates And
- View all blogs
- Understanding contract risks before signing agreements
- Olivia Bennett
- January 1, 2026
- Protecting business interests through legal planning
- Michael Carter
- February 17, 2026
- Managing legal challenges with strategic guidance
- Amelia Brooks
- February 22, 2026
- Navigating corporate disputes with effective legal strategies
- Sophia Bennett
- March 15, 2026

## Responsive behavior
- **Desktop (≥1380px):** base rules in the CSS dump.
- **Tablet (810–1379px):** `@media (max-width:1379px) and (min-width:810px)` rules.
- **Mobile (≤809px):** `@media (max-width:809px) and (min-width:0)` rules.
