# ServiceDetailPage specification

## Contract

- Route template: `/services/[slug]`.
- Verified source route: `/services/corporate-legal-advisory-copy-4`.
- Receives a service record; content is Meiker-branded while geometry follows Fileon.

## Geometry

- Page background: warm off-white.
- Desktop content width: 1350 px; outer gutter: 40–70 px.
- Intro grid: `1fr 1fr`, 10 px gap, minimum 700 px visual height.
- Intro text panel: white, 10 px radius, 35 px inner padding.
- Desktop title: 64 px, 73.6 px line height; mobile: 40 px, 46 px line height.
- Metric cards: two columns, 10 px gap, minimum 190 px height.
- Main image: 645 × 700 desktop, 10 px radius, cover crop.
- Article: maximum 1080 px, 80–120 px vertical spacing, 17 px body copy.
- Body image: 2.04:1 ratio, full article width, 10 px radius.

## Branding substitutions

- Typeface: Geist, per Meiker brief.
- Cacao `#461312`, Arena `#FFEACA`, Coral `#FF5B35`, Brisa `#D8EFFF`.
- Supported metrics only: `+150` registered brands and `$348` professional fees.
- Images remain the original Fileon template assets, as requested.

## Responsive behavior

- At `<1024px`, intro becomes one column and image follows the metrics.
- At `<640px`, 20 px page gutters and vertically stacked metrics.
- No scroll-driven or time-driven state.
