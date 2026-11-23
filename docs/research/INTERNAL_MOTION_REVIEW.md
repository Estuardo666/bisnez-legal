# Internal pages — motion review

HOME was explicitly excluded and its original header, smooth scrolling and reveal behavior remain unchanged.

| Before | After | Why |
| --- | --- | --- |
| Internal pages used the HOME pill header | Internal routes use the flat Fileon-style editorial header | Restores source silhouette and navigation rhythm |
| Lenis `1.2s` smooth scrolling on every route | Native scrolling on internal pages | Avoids scroll-jacking and matches the static editorial templates |
| Reveal from `scale(0.85)` over `700ms` | `translateY(12px) scale(0.99)` over `400ms` | Subtle spatial cue without dramatic zoom |
| Generic `ease-out` | `cubic-bezier(0.23,1,0.32,1)` | Faster perceived response and a stronger finish |
| No consistent press state | Interactive controls use `scale(0.97)` over `150ms` | Immediate, interruptible feedback without layout shift |
| Accordion content snapped open | 240ms block-size/opacity transition where supported | Communicates state change while preserving native details semantics |
| Reduced-motion depended on scattered rules | All internal reveals resolve visible with reduced motion | Prevents invisible content and respects user preference |

## Verification

- Playwright audit: six internal routes, source and local versions.
- Local routes returned HTTP 200 with zero page errors.
- No horizontal overflow at 390 px, 375 px or 844 × 390 landscape.
- Reduced-motion run reported zero hidden reveal elements.
- Desktop/mobile captures are stored under `docs/design-references/meiker-qa/`.
- Raw motion report: `docs/research/INTERNAL_MOTION_AUDIT.json`.
