# Clone Output Plan

## Scope

Clone the following same-origin Fileon pages and preserve their exact pathnames:

| Source URL | App root | Destination route | Page key | Artifact root | Screenshot root | Component root | Asset root |
| --- | --- | --- | --- | --- | --- | --- | --- |
| https://fileon.framer.website/about | `C:/Users/Stuart/Documents/Bisnes Legal/Web 2` | `/about` | `about-979bddc4` | `docs/research/fileon-framer-website-846bcc9f/about-979bddc4/` | `docs/design-references/fileon-framer-website-846bcc9f/about-979bddc4/` | `src/components/sites/fileon-framer-website-846bcc9f/about-979bddc4/` | `public/sites/fileon-framer-website-846bcc9f/about-979bddc4/` |
| https://fileon.framer.website/services | `C:/Users/Stuart/Documents/Bisnes Legal/Web 2` | `/services` | `services-3b1aeccb` | `docs/research/fileon-framer-website-846bcc9f/services-3b1aeccb/` | `docs/design-references/fileon-framer-website-846bcc9f/services-3b1aeccb/` | `src/components/sites/fileon-framer-website-846bcc9f/services-3b1aeccb/` | `public/sites/fileon-framer-website-846bcc9f/services-3b1aeccb/` |
| https://fileon.framer.website/contact | `C:/Users/Stuart/Documents/Bisnes Legal/Web 2` | `/contact` | `contact-4eb95063` | `docs/research/fileon-framer-website-846bcc9f/contact-4eb95063/` | `docs/design-references/fileon-framer-website-846bcc9f/contact-4eb95063/` | `src/components/sites/fileon-framer-website-846bcc9f/contact-4eb95063/` | `public/sites/fileon-framer-website-846bcc9f/contact-4eb95063/` |
| https://fileon.framer.website/teams | `C:/Users/Stuart/Documents/Bisnes Legal/Web 2` | `/teams` | `teams-a30fe034` | `docs/research/fileon-framer-website-846bcc9f/teams-a30fe034/` | `docs/design-references/fileon-framer-website-846bcc9f/teams-a30fe034/` | `src/components/sites/fileon-framer-website-846bcc9f/teams-a30fe034/` | `public/sites/fileon-framer-website-846bcc9f/teams-a30fe034/` |
| https://fileon.framer.website/teams/amelia-brooks | `C:/Users/Stuart/Documents/Bisnes Legal/Web 2` | `/teams/amelia-brooks` | `teams-amelia-brooks-3d7f0bd5` | `docs/research/fileon-framer-website-846bcc9f/teams-amelia-brooks-3d7f0bd5/` | `docs/design-references/fileon-framer-website-846bcc9f/teams-amelia-brooks-3d7f0bd5/` | `src/components/sites/fileon-framer-website-846bcc9f/teams-amelia-brooks-3d7f0bd5/` | `public/sites/fileon-framer-website-846bcc9f/teams-amelia-brooks-3d7f0bd5/` |
| https://fileon.framer.website/services/corporate-legal-advisory-copy-4 | `C:/Users/Stuart/Documents/Bisnes Legal/Web 2` | `/services/corporate-legal-advisory-copy-4` through `/services/[slug]` | `services-corporate-legal-advisory-copy-4-b32e8c8c` | `docs/research/fileon-framer-website-846bcc9f/services-corporate-legal-advisory-copy-4-b32e8c8c/` | `docs/design-references/fileon-framer-website-846bcc9f/services-corporate-legal-advisory-copy-4-b32e8c8c/` | `src/components/sites/fileon-framer-website-846bcc9f/services-corporate-legal-advisory-copy-4-b32e8c8c/` | `public/sites/fileon-framer-website-846bcc9f/services-corporate-legal-advisory-copy-4-b32e8c8c/` |

## Implementation status

All five requested routes are implemented and preserve the source pathname:

- `/about` — hero, mission/vision/values, differentiators, Meiker team, outcomes, story and FAQ.
- `/services` — service overview, five practice cards, extended protection areas, CTA and FAQ.
- `/contact` — contact methods, lead form, FAQ and Ecuador office block.
- `/teams` — Meiker team cards and working principles.
- `/teams/amelia-brooks` — route preserved from the source; content is mapped to Augusto Abendaño, Meiker's founding partner, because the supplied business content identifies Augusto as the founder.
- `/services/corporate-legal-advisory-copy-4` — reusable service-detail template, mapped to Meiker's trademark-registration service while preserving the source pathname and Fileon page topology.

## Existing output preserved

- The existing Home route `/` and its shared Fileon components remain in place.
- No existing destination route was present for `/about`, `/services`, `/contact`, `/teams`, or `/teams/amelia-brooks` during pre-flight.
- Existing same-origin shared components under `src/components/sites/fileon-framer-website-846bcc9f/shared/` will be reused where their contracts match.

## Rebrand pass after cloning

After the five routes are cloned, apply the approved rebrand across the full site:

- Brand: **Meiker**, focused on trademark registration in Ecuador.
- Typography: Geist.
- Logo source: `C:/Users/Stuart/Documents/Bisnes Legal/Branding/ISOTIPO/ISOTIPO`.
- Color and usage source: `C:/Users/Stuart/Documents/Bisnes Legal/Branding/MEIKER_BRAND_2026.pdf`.
- Business content source: `C:/Users/Stuart/Documents/Bisnes Legal/Estructura Web Bisnez Legal.docx` and `C:/Users/Stuart/Documents/Bisnes Legal/Formulario sin título.csvs/Formulario sin título.csv`.
- Existing photography and videos remain unchanged in this pass.

## Verification

- `npx tsc --noEmit` passes.
- `npm run build` passes; Next.js also statically prerenders `/services/corporate-legal-advisory-copy-4` through `generateStaticParams`.
- Local HTTP smoke check returned `200` for all six routes, including the existing Home.
- Desktop and mobile screenshots are stored in `docs/design-references/meiker-final/`.
- Playwright QA returned `200` with no console or page errors for the audited routes at 1440 px and 390 px; results are stored in `docs/research/MEIKER_LOCAL_QA.json`.
