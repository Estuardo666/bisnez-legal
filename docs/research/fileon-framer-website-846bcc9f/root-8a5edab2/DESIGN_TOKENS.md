# Fileon — Design Tokens

Source: https://fileon.framer.website/ (Framer build `bee8ea6`)

## Breakpoints (authoritative, from Framer media queries)
| Name | Range |
|---|---|
| Desktop | `min-width: 1380px` |
| Tablet | `810px – 1379.98px` |
| Mobile | `max-width: 809.98px` |

Content container max-width: **1300px**.

## Colors
| Role | Hex | Framer token |
|---|---|---|
| Page background (light) | `#f7f7f2` | 2994410f |
| Section background (warm) | `#eeece6` | beccef53 |
| Surface / divider warm | `#e4e2dc` | 9efb0e8f |
| Border warm | `#dad8d2` | 1b12e9a7 |
| Border warm darker | `#d0cec8` | 2fe567bf |
| Text primary (near-black) | `#191818` | c6bc2161 |
| Text on dark surfaces | `#25231e` | a05ac567 |
| Olive accent | `#46462a` | 8b8593d9 |
| Olive accent 30% | `#46462a4d` | 8fa587a8 |
| Body / muted text | `#575757` | 01c63642, 8c0c01e9, cbd2f867 |
| Muted grey | `#9d9d9d` / `#a9a9a9` / `#bababa` / `#bebebe` | 4947208d / 3d2824e3 / 1694b4a4 / 41dd3dff |
| Neutral line | `#d9d9d9` | 571f531d |
| White | `#ffffff` | 11ace084, 2a98eae3, 5495cef9, 860dbbd2 |
| White 45% | `#ffffff73` | 8e229806 |
| White 10% | `#ffffff1a` | fae7250e |
| Black | `#000000` | 4fec0d91, 78028b0d, d779d31e |
| Black 50% / 30% / 15% | `#00000080` / `#0003` / `#00000026` | d3cd2c97 / 64cb17f5 / 0acc4d05 |
| Dark grey | `#333333` | f4a60c84 |
| Success green | `#09d89a` | 69206787, d338a4ae |
| Alert red | `#ff2244` | 079eb350 |

## Typography
Three families, all available on Google Fonts.

| Family | Use | Observed styles |
|---|---|---|
| **Lora** (serif) | All headings, display copy, stat numbers | 400 — 56px/67.2px, 40px/50px, 24px/32.4px |
| **Manrope** (sans) | Body copy, buttons, nav links | 400 & 500 — 16px/24px |
| **Geist Mono** (mono) | Eyebrow / label text, always `text-transform: uppercase` | 400 — 14px/21px |

Common colors on type: `#191818` (headings), `#575757` (body), `#ffffff` (on dark/photo), `rgba(0,0,0,0.5)` (de-emphasised display text).

## Global patterns
- **Lenis** smooth scroll is active on the page (`window.Lenis`).
- No `scroll-snap` anywhere.
- Scroll-reveal: images/cards scale + fade in as they enter the viewport.
- Sticky-stacking: three sticky containers (Approach cards `top: 40px`, Case Studies column `top: 20px`, Service list `top: 0`).
- Marquee/ticker components in the Brand and Trust Bar sections.
- One `<video>`: loop + muted, not autoplay-flagged in markup.

## Assets
59 media files downloaded to `public/sites/fileon-framer-website-846bcc9f/root-8a5edab2/`
(`images/` 58 PNG+SVG, `videos/` 1 MP4). SEO copies in `seo/`.
Fonts are **not** downloaded — served through `next/font/google`.
