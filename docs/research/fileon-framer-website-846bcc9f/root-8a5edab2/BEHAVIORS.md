# Fileon — Behavior Bible

## Global
- **Smooth scroll:** Lenis is active (`window.Lenis` true, `.lenis` class present). Native scroll feel is
  noticeably different — the clone must initialise Lenis at page level.
- **Scroll-snap:** none.
- **Framer appear animations:** 2 elements carry `data-framer-appear-id`; the header is one of them
  (initial inline state `opacity: 0.001; transform: translateX(-50%) translateY(-400px)`, animating to
  its resting position on load).
- **Scroll-reveal:** images and cards enter with a scale + opacity transition as they cross into the
  viewport. Verified live on the About section: the portrait renders small/faded at first paint and
  settles to full size + full opacity once the section is fully in view.
- **Sticky elements** (`position: sticky`):
  | Element | Section | `top` | Height |
  |---|---|---|---|
  | `.framer-19fzg5e` | Case Studies | 20px | 600 |
  | `.framer-1r2muwo` | Case Studies / Service list | 0px | 1840 |
  | `.framer-7lwzb0` | Approach | 40px | 452 |
- **Marquees:** 15 marquee/ticker nodes — Brand section logo strip and Trust Bar. Continuous
  time-driven translation, no user input.
- **Video:** one `<video loop muted>` at `/videos/Aa9VhrfiSGs0BMTmIIWVUTVY.mp4`, no poster.

## Header
- `position: absolute; top: 0; z-index: 9`, width 1715 (full bleed), inner nav 1300 wide, height 72.
- Links: Home (`./`), About (`./about`), Services (`./services`), Contact (`./contact`), each with a
  `Line` underline element that is the hover affordance.
- Hamburger icon opens a full overlay menu (`.framer-ga75o4-container`, initial `opacity: 0`),
  a white rounded panel (`border-radius: 10px`, `border: 2px solid #d9d9d9`) — **click-driven**.
- Over the hero the link colour is white (`--token-11ace084` → `#fff`).

## Per-section interaction models
See `PAGE_TOPOLOGY.md` for the table. Model determined by scrolling *before* clicking, per skill rules:
- Case Studies / Approach / Service are **scroll-driven sticky**, not tabbed. The left column pins while
  the right column scrolls past it. Do not build these as click-to-switch tabs.
- Guidance is the only genuinely **click-driven** section (FAQ accordion).
- Brand + Trust Bar are **time-driven** (marquee), independent of scroll.

## Responsive
Breakpoints are explicit in the Framer CSS and each section's `raw/<name>.css.txt` dump contains all
three variants of every rule, in this order:
1. base rule — desktop (`min-width: 1380px`)
2. `@media (max-width:1379px) and (min-width:810px)` — tablet
3. `@media (max-width:809px) and (min-width:0)` — mobile

Example (Hero padding): `380px 30px 50px` → `160px 30px 50px` → `140px 20px 40px`.

Builders must implement all three from the dump rather than inventing breakpoints.
