# Fileon — Page Topology

Document height at desktop: **15417px**. Single native scroll container (`<body>`), driven by Lenis.
Layout root: `#main > .framer-rxMlX`. Content column max-width **1300px**, centred.

## Z-index layers
| Layer | z-index |
|---|---|
| `<header>` (nav) | 9 |
| Sticky section columns | 1 |
| Page flow | auto |

The Framer "See More Templates / Customization Service / Made in Framer" badge (`.framer-1ser03c`, fixed, z 5)
is template-store chrome, **not part of the design — excluded from the clone**.

## Sections, in visual order
| # | Name | Top | Height | Background | Interaction model |
|---|---|---|---|---|---|
| — | Header / Nav | 0 | 72 | transparent (absolute overlay) | static overlay + hamburger click-driven overlay menu |
| 0 | Hero | 0 | 936 | photo | scroll-driven (entrance transform) |
| 1 | Brand | 936 | 125 | `#eeece6` | time-driven marquee |
| 2 | About | 1061 | 1027 | `#f7f7f2` | scroll-driven reveal (image scale/fade) |
| 3 | Case Studies | 2088 | 3879 | `#eeece6` | scroll-driven, sticky left column (`top: 20px`) |
| 4 | Approach | 5967 | 2035 | `#eeece6` | scroll-driven sticky card stack (`top: 40px`) |
| 5 | Service | 8002 | 1135 | `#f7f7f2` | scroll-driven sticky list (`top: 0`) |
| 6 | Video | 9137 | 750 | `#f7f7f2` | looping muted `<video>` |
| 7 | Trust Bar | 9887 | 222 | `#f7f7f2` | time-driven marquee |
| 8 | Expertise | 10110 | 990 | `#eeece6` | scroll-driven reveal |
| 9 | Testimonial | 11100 | 645 | `#eeece6` | scroll-driven reveal |
| 10 | Pricing | 11745 | 915 | `#f7f7f2` | static + hover |
| 11 | Guidance (FAQ) | 12660 | 1032 | `#eeece6` | click-driven accordion |
| 12 | Blog | 13692 | 1023 | `#f7f7f2` | static + card hover |
| — | Footer | 14715 | 702 | dark | static + link hover |

## Dependencies
- Header overlays the Hero and is the only element that spans sections.
- Sections 3, 4 and 5 each own an internal sticky element; they must not be wrapped in any
  ancestor with `overflow: hidden` or `transform`, or sticky positioning breaks.
- Lenis must be initialised once at the page level, not per section.
