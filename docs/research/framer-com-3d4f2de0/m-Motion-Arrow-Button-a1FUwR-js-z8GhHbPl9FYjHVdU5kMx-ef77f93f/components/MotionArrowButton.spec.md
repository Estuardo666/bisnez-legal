# MotionArrowButton specification

## DOM and geometry

- Wrapper: inline flex, width min-content, no text decoration, visible overflow.
- Inner container: flex row, center aligned, 16 px gap, padding 16 px 24 px.
- Backdrop: absolute inset 0, 24 px radius with `superellipse(1.5)` corner shape where supported.
- Source label: Space Grotesk 500, 24 px/1; Meiker adaptation uses Geist 600 at 16 px to preserve the established site scale while keeping source geometry and motion.
- Glyph wrapper: row with 2 px gap.
- Column one: 2 px width, vertical, 17 px gap, two bars.
- Column two: 2 px width, vertical, 7 px gap, two bars.
- Column three: 2 px width, one bar.
- Every bar: 4 × 3 px.

## Hover and pressed states

- Backdrop hover: scale 1.04 and shadow:
  `0.398px 0.398px 0.563px -0.313px rgba(0,0,0,.07), 1.207px 1.207px 1.707px -0.625px rgba(0,0,0,.08), 3.191px 3.191px 4.513px -0.938px rgba(0,0,0,.1), 10px 10px 14.142px -1.25px rgba(0,0,0,.19)`.
- Backdrop transition: spring duration 0.4 s, bounce 0; CSS approximation uses `400ms cubic-bezier(.16,1,.3,1)`.
- Pressed backdrop: scale 1.
- Hover glyph: opacity 0 → 1, right 31 px → 24 px; bars scale 0.2 → 1.
- Hover glyph transition: 1 s spring, bounce 0; CSS approximation uses `1000ms cubic-bezier(.16,1,.3,1)`.
- Reduced motion: no movement; final colors remain available.

## Meiker variants

- Dark: cacao backdrop, arena text, muted arena default glyph, coral hover glyph.
- Coral: coral backdrop, white text, translucent white default glyph, cacao hover glyph.
- Light: white backdrop, cacao text, muted cacao default glyph, coral hover glyph.

