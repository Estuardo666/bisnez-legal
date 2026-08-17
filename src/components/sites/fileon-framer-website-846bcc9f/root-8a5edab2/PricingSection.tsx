/* eslint-disable @next/next/no-img-element */

import { Reveal } from "@/components/sites/fileon-framer-website-846bcc9f/shared/Reveal";
import { cn } from "@/lib/utils";

const ASSETS = "/sites/fileon-framer-website-846bcc9f/root-8a5edab2/images";

/** `He0tgRAwqMsefFs28LL4LqExkTc.svg` — 20×20 bullet in front of every feature row. */
const LIST_ICON = `${ASSETS}/He0tgRAwqMsefFs28LL4LqExkTc.svg`;
/** `SZd9EedUwnpfottuX47mDHqgqXQ.svg` — 18×18 arrow inside the "Start today" button. */
const ARROW_ICON = `${ASSETS}/SZd9EedUwnpfottuX47mDHqgqXQ.svg`;
/** `K7uBCQ3LbwXzrWYQFm5zt3VusU.png` — full-bleed backdrop behind the Custom Plan card. */
const CUSTOM_PLAN_IMAGE = `${ASSETS}/K7uBCQ3LbwXzrWYQFm5zt3VusU.png`;

const FEATURES: readonly string[] = [
  "Court filing assistance included",
  "Basic legal consultation plan",
  "Document review and drafting",
  "Case evaluation and guidance",
  "Email and phone support",
];

const PHONE_NUMBER = "+1 (415) 555-0123";

/**
 * `.framer-nkSep .framer-styles-preset-c36khm` — Manrope 16 / 400 / 150%, `#575757`.
 * Used by the month label, both short descriptions and every feature row.
 */
const BODY_TEXT =
  "text-left font-[family-name:var(--fileon-font-sans)] text-[16px] leading-[150%] font-normal tracking-[0em] text-[var(--fileon-body,#575757)]";

/**
 * `.framer-oYnH7 .framer-styles-preset-1pwzd39` — Manrope 16 / 500 / 150%.
 * Used by the two pricing pills and the "Start today" label.
 */
const PILL_TEXT =
  "font-[family-name:var(--fileon-font-sans)] text-[16px] leading-[150%] font-medium tracking-[0em]";

/**
 * The CSS dump encodes the "Secondary Button" hover as instant `position` swaps
 * (`.framer-v-12ea8fe.hover .framer-yu6vuw` etc. — Framer tweens them from JS, so
 * the stylesheet carries no duration). They are re-expressed here as transforms,
 * matching the easing the rest of the page uses.
 */
const HOVER_MOTION =
  "transition-transform duration-[400ms] ease-[cubic-bezier(0.44,0,0.56,1)]";

interface PricingSectionProps {
  className?: string;
}

/**
 * "Pricing Section" — oversized `Pricing` wordmark above two cards: the white
 * `Basic plan` card (price, feature list, CTA) and the image-backed
 * `Custom Plan` card.
 */
export function PricingSection({ className }: PricingSectionProps) {
  return (
    // .framer-1c3bnwr — padding 80/20 → 100/30 → 130/30, overflow hidden
    <section
      data-framer-name="Pricing Section"
      className={cn(
        "relative flex w-full flex-none flex-row items-center justify-center gap-[10px] overflow-hidden",
        "bg-[var(--fileon-bg,#f7f7f2)]",
        "px-[20px] py-[80px] md:px-[30px] md:py-[100px] xl:py-[130px]",
        className,
      )}
    >
      {/* Container — .framer-1a3h2fr */}
      <div className="relative flex h-min w-px max-w-[1300px] flex-1 flex-row items-center justify-center gap-[10px] p-0">
        {/* Content — .framer-1ufbjls, gap 40 → 50 → 0 */}
        <div className="relative flex h-min w-px flex-1 flex-col items-start justify-start gap-[40px] p-0 md:gap-[50px] xl:gap-0">
          {/* Title — .framer-kg6hdi + preset 15wn7d (60 → 120 → 230) */}
          <Reveal className="w-full" fromScale={1}>
            <div className="relative h-auto w-full flex-none break-words whitespace-pre-wrap">
              <p className="text-left font-[family-name:var(--fileon-font-serif)] text-[60px] leading-[90%] font-medium tracking-[0em] text-[rgba(0,0,0,0.5)] uppercase md:text-center md:text-[120px] xl:text-[230px]">
                Pricing
              </p>
            </div>
          </Reveal>

          {/* Card Wrapper — .framer-16duk0y, column until 1380px */}
          <div className="relative flex h-min w-full flex-none flex-col items-start justify-start gap-[20px] p-0 xl:flex-row xl:items-center xl:gap-[10px]">
            {/* .framer-3ed4qh-container — max-width 830 only at desktop */}
            <div className="relative h-auto w-full flex-none xl:w-px xl:max-w-[830px] xl:flex-1">
              <BasicPlanCard />
            </div>
            <CustomPlanCard />
          </div>
        </div>
      </div>
    </section>
  );
}

/** `Pricing Card 01` — `.framer-k3fIM.framer-1d4neni` (+ tablet `v-1lugim0`, phone `v-xo7j3x`). */
function BasicPlanCard() {
  return (
    <Reveal fromScale={0.85}>
      <div
        data-framer-name="Pricing Card 01"
        className={cn(
          "relative flex h-min w-full flex-col items-start justify-start gap-[30px] overflow-hidden p-[20px]",
          "md:flex-row md:items-end md:justify-start md:gap-[42px] md:p-[30px]",
          "xl:gap-[50px]",
          "rounded-[10px] bg-[var(--fileon-white,#ffffff)]",
        )}
      >
        {/* Content Wrapper — .framer-1i1a8ut, gap 20 → 50 → 120 */}
        <div className="relative flex h-min w-full flex-none flex-col items-start justify-start gap-[20px] p-0 md:w-px md:flex-1 md:gap-[50px] xl:max-w-[330px] xl:gap-[120px]">
          {/* Button & Price — .framer-1p5p26j, gap 20 → 30 → 50 */}
          <div className="relative flex h-min w-full flex-none flex-col items-start justify-start gap-[20px] p-0 md:gap-[30px] xl:gap-[50px]">
            {/* Button Wrapper — .framer-xjb9l9 */}
            <div className="relative flex h-min w-full flex-none flex-row items-center justify-start gap-[10px] p-0">
              <PricingPill
                label="Basic plan"
                className="border-[#a9a9a9] bg-[var(--fileon-ink,#191818)] text-[var(--fileon-white,#ffffff)]"
              />
              <PricingPill
                label="Premium"
                className="border-[#eeece6] bg-[var(--fileon-bg,#f7f7f2)] text-black"
              />
            </div>

            {/* Price & Month — .framer-zd7jbq */}
            <div className="relative flex h-min w-full flex-none flex-col items-start justify-start gap-0 p-0">
              {/* Price — .framer-1pj4fe + preset 4rqwjt (36 → 40 → 48) */}
              <div className="relative h-auto w-full flex-none break-words whitespace-pre-wrap">
                <h3 className="text-left font-[family-name:var(--fileon-font-serif)] text-[36px] leading-[120%] font-normal tracking-[0em] text-black md:text-[40px] xl:text-[48px]">
                  $2,500
                </h3>
              </div>
              {/* Month — .framer-11fkyqe */}
              <div className="relative h-auto w-full flex-none break-words whitespace-pre-wrap">
                <p className={BODY_TEXT}>/ Monthly plan</p>
              </div>
            </div>
          </div>

          {/* Short Description — .framer-9g2gaz */}
          <div className="relative h-auto w-full flex-none [text-wrap:balance]">
            <p className={BODY_TEXT}>
              Every project is unique, but our pricing stays clear, flexible, and
              aligned with real business goals, combining strategy, design, and
              creativity into one focused solution
            </p>
          </div>
        </div>

        {/* Line — .framer-cw0fdv : 100%×1 → 1×257 → 1×286 */}
        <div className="relative h-px w-full flex-none overflow-hidden bg-[#bebebe] md:h-[257px] md:w-px xl:h-[286px]" />

        {/* List & Button Wrapper — .framer-khb8rh, gap 25 → 50 → 75 */}
        <div className="relative flex h-min w-full flex-none flex-col items-start justify-start gap-[25px] p-0 md:w-px md:flex-1 md:gap-[50px] xl:gap-[75px]">
          {/* List Wrapper — .framer-1i94p6s, gap 8 → 10 → 14 */}
          <div className="relative flex h-min w-full flex-none flex-col items-start justify-start gap-[8px] p-0 md:gap-[10px] xl:gap-[14px]">
            {FEATURES.map((feature) => (
              // .framer-11t1jeh-container → Pricing List 01 .framer-1ob9wwr
              <div key={feature} className="relative h-auto w-full flex-none">
                <div className="relative flex h-min w-full flex-row items-center justify-start gap-[10px] p-0">
                  {/* Icon — .framer-1h59sfi */}
                  <div className="relative h-[20px] w-[20px] flex-none overflow-hidden rounded-[100px]">
                    <div className="absolute inset-0 rounded-[inherit]">
                      <img
                        src={LIST_ICON}
                        alt="Icon"
                        className="block h-full w-full rounded-[inherit] object-contain object-center"
                      />
                    </div>
                  </div>
                  {/* Title — .framer-1k9ywo5 */}
                  <div className="relative h-auto w-px flex-1 [text-wrap:balance]">
                    <p className={BODY_TEXT}>{feature}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* .framer-1bgub4v-container → Secondary Button */}
          <Reveal className="h-auto w-auto flex-none" fromScale={0.8}>
            <StartTodayButton />
          </Reveal>
        </div>
      </div>
    </Reveal>
  );
}

/** `Pricing Button 01/02/03` — `.framer-45mST.framer-1c0cxv0` with a 1px `[data-border]` ring. */
function PricingPill({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <div className="relative h-auto w-auto flex-none">
      <div
        data-framer-name={`Pricing Button ${label}`}
        className={cn(
          "relative flex h-min w-min cursor-pointer flex-row items-center justify-center gap-[10px]",
          "overflow-hidden rounded-[45px] px-[20px] py-[8px]",
          className,
        )}
      >
        {/*
          Framer paints the 1px ring as a `[data-border]` overlay, not as a real
          border, so `.framer-1c0cxv0` measures 40px tall (8 + 24 + 8) — a real
          border would add 2px. `className` still supplies the border *colour*.
        */}
        <div
          data-border
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] border border-solid border-inherit"
        />
        {/* Title — .framer-4cym5i */}
        <div className="relative h-auto w-auto flex-none whitespace-pre">
          <p className={cn(PILL_TEXT, "text-center")}>{label}</p>
        </div>
      </div>
    </div>
  );
}

/** `Secondary Button 01/02` — `.framer-1r2Ll.framer-1vlt3ha`, label + icon swap on hover. */
function StartTodayButton() {
  return (
    <a
      href="/contact"
      data-framer-name="Secondary Button 01"
      className={cn(
        "group relative flex h-min w-min flex-none cursor-pointer flex-row items-center justify-center gap-[14px]",
        "overflow-hidden rounded-[50px] bg-[var(--fileon-ink,#191818)] py-[6px] pr-[6px] pl-[24px] no-underline",
      )}
    >
      {/* Title Wrapper — .framer-176aqmi (overflow hidden, one line tall) */}
      <div className="relative flex h-[24px] w-min flex-none flex-col items-start justify-start overflow-hidden">
        {/* .framer-yu6vuw (top:-50px) and .framer-1h58870 swap places on hover */}
        <div
          className={cn(
            "flex flex-col group-hover:-translate-y-[24px]",
            HOVER_MOTION,
          )}
        >
          <p
            className={cn(
              PILL_TEXT,
              "h-[24px] text-left whitespace-pre text-[var(--fileon-white,#ffffff)]",
            )}
          >
            Start today
          </p>
          <p
            className={cn(
              PILL_TEXT,
              "h-[24px] text-left whitespace-pre text-[var(--fileon-white,#ffffff)]",
            )}
          >
            Start today
          </p>
        </div>
      </div>

      {/* Icon Wrapper — .framer-1d5hfen */}
      <div className="relative flex aspect-square h-[35px] w-[35px] flex-none flex-col items-center justify-center gap-[10px] overflow-hidden rounded-[100px] bg-[var(--fileon-white,#ffffff)]">
        <div className="relative h-[18px] w-[18px] flex-none">
          {/* .framer-dswrox — parked at bottom:-20px / left:-20px, slides in on hover */}
          <span
            className={cn(
              "absolute inset-0 block -translate-x-[20px] translate-y-[20px] group-hover:translate-x-0 group-hover:translate-y-0",
              HOVER_MOTION,
            )}
          >
            <img
              src={ARROW_ICON}
              alt="Icon"
              className="block h-full w-full object-contain object-center"
            />
          </span>
          {/* .framer-13sriid — in place, exits to top:-20px / right:-20px on hover */}
          <span
            className={cn(
              "absolute inset-0 block group-hover:translate-x-[20px] group-hover:-translate-y-[20px]",
              HOVER_MOTION,
            )}
          >
            <img
              src={ARROW_ICON}
              alt="Icon"
              className="block h-full w-full object-contain object-center"
            />
          </span>
        </div>
      </div>
    </a>
  );
}

/** `Pricing Card 02` — `.framer-1wrjzfo`, white panel stacked over a full-bleed photo. */
function CustomPlanCard() {
  return (
    // `.framer-1wrjzfo` carries `flex:1 0 0; width:1px; max-width:460px` — the cap
    // has to live on the flex child itself, otherwise Card 01 never reaches 830.
    <Reveal className="w-full xl:w-px xl:max-w-[460px] xl:flex-1" fromScale={0.85}>
      <div
        data-framer-name="Pricing Card 02"
        className={cn(
          "relative flex h-min w-full flex-col items-center justify-center gap-[20px] overflow-hidden rounded-[10px] p-[20px]",
          "md:flex-row md:p-[50px]",
          "xl:w-full xl:gap-[10px] xl:p-[30px]",
        )}
      >
        {/* Content Wrapper — .framer-genzu7, gap 30 → 60 → 149 */}
        <div className="relative z-[3] flex h-min w-full flex-none flex-col items-start justify-start gap-[30px] rounded-[10px] bg-[var(--fileon-white,#ffffff)] p-[20px] md:w-px md:flex-1 md:gap-[60px] md:p-[30px] xl:gap-[149px]">
          {/* Title Wrapper — .framer-1lnjv2h, gap 10 → 14 */}
          <div className="relative flex h-min w-full flex-none flex-col items-start justify-start gap-[10px] p-0 md:gap-[14px]">
            {/* Title — .framer-15cs5dq + preset 1lcxu9v (24 → 28 → 32) */}
            <div className="relative h-auto w-full flex-none break-words whitespace-pre-wrap">
              <h5 className="text-left font-[family-name:var(--fileon-font-serif)] text-[24px] leading-[130%] font-normal tracking-[0em] text-black md:text-[28px] xl:text-[32px]">
                Custom Plan
              </h5>
            </div>
            {/* Short Description — .framer-1sqfdk6 */}
            <div className="relative h-auto w-full flex-none [text-wrap:balance]">
              <p className={BODY_TEXT}>
                Custom legal plans tailored to your specific case needs, offering
                flexible support, strategy, and representation for complex or
                ongoing matters
              </p>
            </div>
          </div>

          {/* Contact Number — .framer-n9lfmt */}
          <div className="relative flex h-min w-full flex-none flex-row items-center justify-start gap-[10px] p-0">
            {/* Text — .framer-n2cl4e + preset 4hunf2 */}
            <div className="relative h-auto w-auto flex-none [text-wrap:balance]">
              <p className="text-left font-[family-name:var(--fileon-font-sans)] text-[18px] leading-[150%] font-medium tracking-[0em] text-black">
                Call us :
              </p>
            </div>
            {/* Number — .framer-ipxrlk, link preset 1kyr8x0 */}
            <div className="relative h-auto w-px flex-1 [text-wrap:balance]">
              <p className={BODY_TEXT}>
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="text-[var(--fileon-body,#575757)] no-underline transition-colors duration-300 ease-[cubic-bezier(0.44,0,0.56,1)] hover:text-black"
                >
                  {PHONE_NUMBER}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* .framer-443prm — full-bleed backdrop */}
        <div className="absolute top-0 left-0 z-[1] h-full w-full flex-none overflow-hidden rounded-[10px]">
          <div className="absolute inset-0 rounded-[inherit]">
            <img
              src={CUSTOM_PLAN_IMAGE}
              alt="Image"
              className="block h-full w-full rounded-[inherit] object-cover object-center"
            />
          </div>
        </div>
      </div>
    </Reveal>
  );
}
