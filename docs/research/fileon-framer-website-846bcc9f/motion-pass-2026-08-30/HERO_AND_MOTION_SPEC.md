# Internal hero and service motion specification

Targets: `/about`, `/services`, `/teams`, and `/services/corporate-legal-advisory`. HOME is excluded. The approved Contact hero remains structurally unchanged.

## Shared header

- Height: 72 px source / 70 px branded implementation.
- Sticky at `top: 0`, z-index above page content.
- Photo heroes retain the source overlay silhouette by compensating the header height with a negative bottom margin on desktop.
- Editorial/light pages use the warm white surface in normal flow.
- Initial motion measured on Fileon: opacity `0.001 → 1` and vertical position `-400px → 0`, 1240 ms spring-generated animation.
- Reduced motion: no spatial entrance.

## About hero

- Desktop source: 1440 × 750 full-bleed photo, header overlay; title/stat strip starts at y=750.
- Mobile source: 390 × 201 photo after the 55 px header; title and stat stack below.
- Title belongs to the lower warm-white strip, never overlays the image.
- Right edge of the strip has a 26 px diagonal notch.
- Title words enter independently from `translateY(10px)`, opacity `0.001`, with 50 ms stagger beginning at 400 ms; measured duration 1700 ms.

## Services hero

- Same 1440 × 750 desktop photo geometry and header overlay.
- Warm-white title strip begins at y=750; source h1 is 64/73.6 px at x=70, y=780, width 700.
- Mobile: normal-flow light header, 390 × ~200 photo, title below, CTA below title.
- Diagonal notch at the photo/strip transition.
- Five source title words use the same 400/450/500/550/600 ms stagger and 10 px entrance.

## Teams hero

- No image hero.
- Light header followed by editorial warm-grey block.
- Desktop h1 x=70, y=201, width=600, 64/73.6 px. The hero ends near y=480 with a 26 px lower-right notch.
- Mobile h1 uses ~42 px type and the hero ends near y=265.
- Five title words use the same 50 ms stagger.

## Service detail motion

- Header uses the same initial spring entrance and remains sticky afterward.
- Source title words `Corporate / Legal / Advisory` enter at 400/450/500 ms, from opacity `0.001` and `translateY(10px)`, duration 1700 ms.
- Meiker title retains the exact interaction model but uses its branded service title words.
- Hero image and metrics are visible on load; no invented parallax or carousel.
- Body content uses restrained one-shot viewport reveals already shared by internal pages.

## Accessibility and performance

- Animate only opacity and transform.
- `prefers-reduced-motion: reduce` resolves all content visible with transforms removed.
- Buttons retain 0.97 active scale; hover motion is gated to capable pointing devices where practical.
