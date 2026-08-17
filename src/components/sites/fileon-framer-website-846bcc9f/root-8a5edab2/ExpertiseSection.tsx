/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import { Reveal } from "@/components/sites/fileon-framer-website-846bcc9f/shared/Reveal";
import { cn } from "@/lib/utils";

const ASSETS = "/sites/fileon-framer-website-846bcc9f/root-8a5edab2/images";

const ARROW_ICON = `${ASSETS}/SZd9EedUwnpfottuX47mDHqgqXQ.svg`;
const CARD_DECOR = `${ASSETS}/zoNG0ibxoQksMZwzIIlEHHYDc.svg`;
const CARD_BACKDROP = `${ASSETS}/K7uBCQ3LbwXzrWYQFm5zt3VusU.png`;
const SIDE_IMAGE = `${ASSETS}/88hBRcmrYUi2R6q0IcPzDOWF0A.png`;

/** `.framer-styles-preset-n4ys0b` — Geist Mono 400, 14px / 150%, uppercase. */
const EYEBROW_TEXT =
  "font-[family-name:var(--fileon-font-mono)] text-[14px] font-normal leading-[150%] tracking-[0em] uppercase text-left whitespace-pre";

/** `.framer-styles-preset-1x3pol9` — Lora 400, 38 → 46 → 56px, line-height 120%. */
const H2_TEXT =
  "font-[family-name:var(--fileon-font-serif)] text-[38px] font-normal leading-[120%] tracking-[0em] text-left md:text-[46px] xl:text-[56px]";

/** `.framer-styles-preset-57gyz8` — Lora 400, 32 → 36 → 40px, line-height 125%. */
const H4_TEXT =
  "font-[family-name:var(--fileon-font-serif)] text-[32px] font-normal leading-[125%] tracking-[0em] md:text-[36px] xl:text-[40px]";

/** `.framer-styles-preset-4hunf2` — Manrope 500, 18px / 150%. */
const CARD_TITLE_TEXT =
  "font-[family-name:var(--fileon-font-sans)] text-[18px] font-medium leading-[150%] tracking-[0em]";

/** `.framer-styles-preset-c36khm` — Manrope 400, 16px / 150%, #575757. */
const BODY_TEXT =
  "font-[family-name:var(--fileon-font-sans)] text-[16px] font-normal leading-[150%] tracking-[0em] text-left text-[var(--fileon-body)]";

/** `.framer-styles-preset-1pwzd39` — Manrope 500, 16px / 150%, white. */
const BUTTON_TEXT =
  "font-[family-name:var(--fileon-font-sans)] text-[16px] font-medium leading-[150%] tracking-[0em] text-left text-[var(--fileon-white)] whitespace-pre";

/** `.framer-1r2Ll.framer-1vlt3ha` — pill CTA whose label and arrow swap places on hover. */
function ViewPricingButton() {
  return (
    // name="Secondary Button 01" .framer-1vlt3ha
    <Link
      href="/#pricing"
      className="group relative flex h-min w-min cursor-pointer flex-none flex-row items-center justify-center gap-[14px] overflow-hidden rounded-[50px] bg-[var(--fileon-ink)] py-[6px] pr-[6px] pl-[24px] no-underline"
    >
      {/* name="Title Wrapper" .framer-176aqmi */}
      <div className="relative flex h-min w-min flex-none flex-col items-start justify-start gap-[10px] overflow-hidden">
        {/* name="Title" .framer-yu6vuw — parked above, slides in on hover */}
        <div
          className={cn(
            "absolute top-[-50px] left-0 z-[1] h-auto w-auto flex-none",
            "group-hover:relative group-hover:top-auto group-hover:left-auto group-hover:z-auto",
          )}
        >
          <p className={BUTTON_TEXT}>View pricing</p>
        </div>
        {/* name="Title" .framer-1h58870 — resting label, slides out on hover */}
        <div
          className={cn(
            "relative h-auto w-auto flex-none",
            "group-hover:absolute group-hover:bottom-[-50px] group-hover:left-0 group-hover:z-[1]",
          )}
        >
          <p className={BUTTON_TEXT}>View pricing</p>
        </div>
      </div>

      {/* name="Icon Wrapper" .framer-1d5hfen */}
      <div className="relative flex aspect-[1] h-[35px] w-[35px] flex-none flex-col items-center justify-center gap-[10px] overflow-hidden rounded-[100px] bg-[var(--fileon-white)]">
        {/* name="Icon" .framer-dswrox — parked bottom-left, slides in on hover */}
        <div
          className={cn(
            "absolute bottom-[-20px] left-[-20px] z-[1] aspect-[1] h-[18px] w-[18px] flex-none overflow-hidden",
            "group-hover:relative group-hover:bottom-auto group-hover:left-auto group-hover:z-auto",
          )}
        >
          <span className="absolute inset-0 rounded-[inherit]">
            <img
              src={ARROW_ICON}
              alt="Icon"
              width={18}
              height={18}
              className="block h-full w-full rounded-[inherit] object-contain object-center"
            />
          </span>
        </div>
        {/* name="Icon" .framer-13sriid — resting arrow, exits top-right on hover */}
        <div
          className={cn(
            "relative aspect-[1] h-[18px] w-[18px] flex-none overflow-hidden",
            "group-hover:absolute group-hover:top-[-20px] group-hover:right-[-20px] group-hover:z-[1]",
          )}
        >
          <span className="absolute inset-0 rounded-[inherit]">
            <img
              src={ARROW_ICON}
              alt="Icon"
              width={18}
              height={18}
              className="block h-full w-full rounded-[inherit] object-contain object-center"
            />
          </span>
        </div>
      </div>
    </Link>
  );
}

export function ExpertiseSection() {
  return (
    /* name="Expertise Section" .framer-givjni */
    <section
      className={cn(
        "relative flex w-full flex-none flex-col items-center justify-start gap-[10px] overflow-hidden",
        "bg-[var(--fileon-bg-warm)]",
        "px-[20px] pt-[80px] pb-[40px]",
        "md:px-[30px] md:pt-[100px] md:pb-[50px]",
        "xl:pt-[130px] xl:pb-[65px]",
      )}
    >
      {/* name="Container" .framer-1khnf7p */}
      <div className="relative flex h-min w-full max-w-[1300px] flex-none flex-row items-center justify-center gap-[10px]">
        {/* name="Content" .framer-txy3gq */}
        <div
          className={cn(
            "relative flex h-min w-px flex-1 basis-0 flex-col items-start justify-start gap-[20px]",
            "xl:flex-row xl:items-center xl:gap-[10px]",
          )}
        >
          {/* name="Content Wrapper" .framer-18dpgu9 */}
          <div
            className={cn(
              "relative flex h-min w-full flex-none flex-col items-start justify-start gap-[10px]",
              "md:gap-[20px]",
              "xl:w-px xl:max-w-[645px] xl:flex-1 xl:basis-0 xl:gap-[10px]",
            )}
          >
            {/* name="Title & Button Wrapper" .framer-m1z951 */}
            <div
              className={cn(
                "relative flex h-min w-full flex-none flex-col items-start justify-start overflow-visible rounded-[10px] bg-[var(--fileon-white)]",
                "gap-[30px] p-[20px]",
                "md:gap-[40px] md:p-[30px]",
                "xl:gap-[125px]",
              )}
            >
              {/* name="Title Wrapper" .framer-1jglopg */}
              <div className="relative flex h-min w-full flex-none flex-col items-start justify-start gap-[10px]">
                {/* .framer-bgflyh-container */}
                <Reveal className="relative h-auto w-auto flex-none" fromScale={0.9}>
                  {/* name="Section Title 01" .framer-1gnz6fr */}
                  <div className="relative flex h-min w-min flex-none flex-row items-center justify-start gap-[10px]">
                    {/* name="Icon" .framer-18gvpqs */}
                    <div className="relative h-[10px] w-[10px] flex-none overflow-hidden bg-[var(--fileon-ink)]" />
                    {/* name="Title" .framer-uioks9 */}
                    <div className="relative h-auto w-auto flex-none">
                      <p className={cn(EYEBROW_TEXT, "text-[#000000]")}>Why choose us</p>
                    </div>
                  </div>
                </Reveal>

                {/* name="Title & Sub Title" .framer-psb2fq */}
                <div className="relative flex h-min w-full flex-none flex-col items-start justify-start gap-[10px] md:gap-[15px] xl:gap-[24px]">
                  {/* name="Title " .framer-sldt6v */}
                  <div className="relative h-auto w-full flex-none [text-wrap:balance]">
                    <h2 className={cn(H2_TEXT, "text-[var(--fileon-ink)]")}>
                      Your Trusted Legal Partners{" "}
                      <span className="text-[var(--fileon-black-50)]">Always</span>
                    </h2>
                  </div>
                  {/* name="Short Description" .framer-1gpszmk */}
                  <div className="relative h-auto w-full flex-none [text-wrap:balance]">
                    <p className={BODY_TEXT}>
                      We treat every case as a turning point, not just a file. From first consultation to final outcome,
                      we provide clear guidance and strong strategy
                    </p>
                  </div>
                </div>
              </div>

              {/* .framer-1eo2n19-container */}
              <Reveal className="relative h-auto w-auto flex-none" fromScale={0.8} delay={120}>
                <ViewPricingButton />
              </Reveal>
            </div>

            {/* name="Expertise Card Wrapper" .framer-1rkb943 */}
            <div
              className={cn(
                "relative flex h-min w-full flex-none flex-col items-center justify-center gap-[20px] overflow-hidden rounded-[10px] p-[30px]",
                "xl:flex-row xl:gap-[10px]",
              )}
            >
              {/* name="Expertise Card 01" .framer-by4pyk */}
              <Reveal
                fromScale={0.92}
                className={cn(
                  "relative z-[3] flex h-min w-full flex-none flex-col items-start justify-start gap-[50px] overflow-visible rounded-[10px] bg-[var(--fileon-white)] p-[20px]",
                  "md:w-px md:flex-1 md:basis-0 md:gap-[76px] md:p-[25px]",
                )}
              >
                {/* name="Number" .framer-zjgoiq */}
                <div className="relative h-auto w-full flex-none [word-break:break-word] whitespace-pre-wrap [overflow-wrap:break-word]">
                  <h4 className={cn(H4_TEXT, "text-left text-[#000000]")}>$24.8M</h4>
                </div>
                {/* name="Title Wrapper" .framer-qwp3ld */}
                <div className="relative flex h-min w-full flex-none flex-col items-start justify-start gap-[5px]">
                  {/* name="Title" .framer-a78gi5 */}
                  <div className="relative h-auto w-full flex-none [word-break:break-word] whitespace-pre-wrap [overflow-wrap:break-word]">
                    <p className={cn(CARD_TITLE_TEXT, "text-left text-[#000000]")}>Value Recovered</p>
                  </div>
                  {/* name="Short Description" .framer-ek62vz */}
                  <div className="relative h-auto w-full flex-none [text-wrap:balance]">
                    <p className={BODY_TEXT}>Total compensation secured through successful cases</p>
                  </div>
                </div>
              </Reveal>

              {/* name="Expertise Card 02" .framer-1izcb6q */}
              <Reveal
                fromScale={0.92}
                delay={120}
                className={cn(
                  "relative z-[3] flex h-min w-full flex-none flex-col items-center justify-start gap-[75px] overflow-visible rounded-[10px] bg-[var(--fileon-white)] px-[20px] pt-[100px] pb-[20px]",
                  "md:w-px md:flex-1 md:basis-0 md:gap-[76px] md:px-[25px] md:pt-[116px] md:pb-[25px]",
                )}
              >
                {/* name="Title Wrapper" .framer-ophkwf */}
                <div className="relative z-[5] flex h-min w-full flex-none flex-col items-center justify-center gap-[20px] md:gap-[38px]">
                  {/* name="Number" .framer-1c83sex */}
                  <div className="relative h-auto w-full flex-none [word-break:break-word] whitespace-pre-wrap [overflow-wrap:break-word]">
                    <h4 className={cn(H4_TEXT, "text-center text-[#000000]")}>10k+</h4>
                  </div>
                  {/* name="Title" .framer-om4hjl */}
                  <div className="relative h-auto w-full flex-none [word-break:break-word] whitespace-pre-wrap [overflow-wrap:break-word]">
                    <p className={cn(CARD_TITLE_TEXT, "text-center text-[#000000]")}>Active clients</p>
                  </div>
                </div>

                {/* .framer-18webn8 — decorative arc behind the stat */}
                <div className="absolute top-[20px] left-1/2 z-[1] aspect-[1.80916] h-auto w-[85%] flex-none -translate-x-1/2 overflow-hidden md:top-[25px] md:w-[285px] xl:w-[237px]">
                  <span className="absolute inset-0 rounded-[inherit]">
                    <img
                      src={CARD_DECOR}
                      alt=""
                      aria-hidden="true"
                      className="block h-full w-full rounded-[inherit] object-contain object-center"
                    />
                  </span>
                </div>
              </Reveal>

              {/* .framer-1sfp1uo — photographic backdrop behind both cards */}
              <div className="absolute top-0 left-0 z-[1] h-full w-full flex-none overflow-hidden rounded-[10px]">
                <span className="absolute inset-0 rounded-[inherit]">
                  <img
                    src={CARD_BACKDROP}
                    alt=""
                    aria-hidden="true"
                    className="block h-full w-full rounded-[inherit] object-cover object-center"
                  />
                </span>
              </div>
            </div>
          </div>

          {/* name="Image Wrapper" .framer-1h30b3z */}
          <div
            className={cn(
              "relative flex h-min w-full flex-none flex-col items-start justify-start gap-[10px] overflow-hidden rounded-[10px]",
              "xl:w-px xl:flex-1 xl:basis-0",
            )}
          >
            {/* .framer-1g1ikih */}
            <Reveal fromScale={1.25} delay={120} className="w-full">
              <div className="relative aspect-[1.16667] h-auto w-full flex-none overflow-hidden rounded-[10px] md:aspect-[1.5] xl:aspect-auto xl:h-[795px]">
                <span className="absolute inset-0 rounded-[inherit]">
                  <img
                    src={SIDE_IMAGE}
                    alt="Image"
                    width={1290}
                    height={1592}
                    className="block h-full w-full rounded-[inherit] object-cover object-[center_top]"
                  />
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
