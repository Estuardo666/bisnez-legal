# FaqAccordionNR specification

## Structure

- Width: 100%.
- Top and item dividers: 1 px.
- Question button: width 100%, flex row, baseline-aligned text group, `justify-content: space-between`, 20 px gap, 24 px vertical and 4 px horizontal padding.
- Index/question group: flex, baseline aligned, 16 px gap, minimum width 0.
- Source index: DM Mono at 85% of answer size; implementation uses the existing Geist Mono brand token.
- Source question: 26 px / 1.2 Cormorant Garamond; implementation uses Geist at 24–26 px to preserve Meiker's approved typography.
- Answer: 15 px / 1.7, max width 640 px; padding `0 40px 24px 40px` when indexes are visible.
- Icon: plus, 26 px, line-height 1, accent color.

## State and motion

- Default open item: first item.
- Only one item open at a time.
- Closed panel: `display:grid; grid-template-rows:0fr`.
- Open panel: `grid-template-rows:1fr`.
- Panel transition: `grid-template-rows 0.3s ease`.
- Closed icon: `rotate(0deg)`.
- Open icon: `rotate(45deg)`.
- Icon transition: `transform 0.3s ease`.
- Reduced motion: transition removed; state remains fully understandable.

## Meiker adaptation

- Question: `--fileon-cacao`.
- Answer: `--fileon-body`.
- Accent/index/icon: `--fileon-coral`.
- Divider: `rgb(70 19 18 / 18%)`.
- Background: `--fileon-bg`, retaining the source's filled light-panel treatment.

