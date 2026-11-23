# FaqAccordionNR behaviors

Source: `https://framer.com/m/FaqAccordionNR-z1bQxI.js@WEEeKHECt7fNkcY24cgy`

- Interaction model: click-driven accordion.
- `singleOpen` defaults to true: opening one item closes the previously open item.
- `defaultOpen` defaults to index 0.
- Panel transition: CSS grid row interpolation from `0fr` to `1fr`, `300ms ease`.
- Content wrapper: `overflow: hidden`, allowing the answer to collapse without measuring height in JavaScript.
- Plus icon: rotates from `0deg` to `45deg`, `300ms ease`.
- Button exposes `aria-expanded` and `aria-controls`; panel exposes `role="region"` and `aria-labelledby`.
- Focus-visible state uses the accent color as an inset 2 px ring.

