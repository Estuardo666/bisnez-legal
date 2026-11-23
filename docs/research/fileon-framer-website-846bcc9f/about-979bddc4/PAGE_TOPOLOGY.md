# Meiker /about — topology

Source: `https://fileon.framer.website/about` · route: `/about`.

The source is a banner-led editorial page with the shared header and footer. The clone keeps that topology and replaces the copy with Meiker's company story:

1. Banner image + “Sobre Meiker”.
2. What we do / mission / vision / differentiators.
3. Meiker principles and proof points.
4. Team preview linking to `/teams`.
5. Outcomes/services cards.
6. Story milestones.
7. FAQ and contact CTA.

Implementation: `AboutPage.tsx` in the page-key component root, shared `Header`, `Footer`, `SmoothScroll`, `Reveal`, and `PagePrimitives`.
