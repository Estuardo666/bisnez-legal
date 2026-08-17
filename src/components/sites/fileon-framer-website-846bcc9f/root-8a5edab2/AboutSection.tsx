import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/sites/fileon-framer-website-846bcc9f/shared/Reveal";
import { cn } from "@/lib/utils";

const IMAGES = "/sites/fileon-framer-website-846bcc9f/root-8a5edab2/images";

/** `.framer-styles-preset-n4ys0b` — Geist Mono 14px / 150% / uppercase. */
const EYEBROW_TEXT =
  "font-[family-name:var(--fileon-font-mono)] text-[14px] font-normal leading-[150%] tracking-[0em] uppercase text-left whitespace-pre";

/** `.framer-styles-preset-57gyz8` — Lora 400, 32 → 36 → 40px, line-height 125%. */
const HEADING_TEXT =
  "font-[family-name:var(--fileon-font-serif)] text-[32px] font-normal leading-[125%] tracking-[0em] text-left md:text-[36px] xl:text-[40px]";

/** `.framer-styles-preset-1pwzd39` — Manrope 500, 16px / 150%. */
const BUTTON_TEXT =
  "font-[family-name:var(--fileon-font-sans)] text-[16px] font-medium leading-[150%] tracking-[0em] text-left text-[var(--fileon-white)] whitespace-pre";

/**
 * The CSS dump encodes the button's label/icon swap as instant `position` swaps
 * (Framer tweens them from JS, so no duration/easing survives into the stylesheet).
 * They are re-expressed here as transforms so they can actually animate — same
 * timing the sibling sections use.
 */
const HOVER_MOTION = "transition-transform duration-[400ms] ease-[cubic-bezier(0.44,0,0.56,1)]";

export function AboutSection() {
  return (
    /* name="About Section" .framer-p81148 */
    <section
      className={cn(
        "relative flex w-full flex-none flex-col items-center justify-center gap-[10px] overflow-hidden",
        "bg-[var(--fileon-bg)] px-[20px] py-[80px] md:px-[30px] md:py-[100px] xl:py-[130px]",
      )}
    >
      {/* name="Container" .framer-9jyf3v */}
      <div className="relative flex w-full max-w-[1300px] flex-none flex-col items-center justify-center gap-[10px]">
        {/* name="Content" .framer-1anag4r */}
        <div className="relative flex w-full flex-none flex-col items-start justify-start gap-[15px] md:gap-[20px] xl:flex-row xl:justify-between xl:gap-0">
          {/* name="Section Title 01" .framer-1gnz6fr */}
          <div className="relative flex h-min w-min flex-none flex-row items-center justify-start gap-[10px]">
            {/* name="Icon" .framer-18gvpqs */}
            <div className="relative h-[10px] w-[10px] flex-none overflow-hidden bg-[var(--fileon-ink)]" />
            {/* name="Title" .framer-uioks9 */}
            <div className="relative h-auto w-auto flex-none">
              <p className={cn(EYEBROW_TEXT, "text-[#000000]")}>about our firm</p>
            </div>
          </div>

          {/* name="Content Wrapper" .framer-1ff0fmx */}
          <div className="relative flex w-full flex-none flex-col items-start justify-start gap-[40px] md:gap-[50px] xl:w-px xl:max-w-[880px] xl:flex-1 xl:basis-0 xl:gap-[60px]">
            {/* name="Title & Button Wrapper" .framer-1260w58 */}
            <div className="relative flex w-full flex-none flex-col items-start justify-start gap-[25px] md:gap-[30px] xl:gap-[40px]">
              {/* name="Title" .framer-6kn4dy */}
              <div className="relative h-auto w-full flex-none [word-break:break-word] [overflow-wrap:break-word] whitespace-pre-wrap">
                <h4 className={cn(HEADING_TEXT, "text-[#000000] [text-wrap:balance] md:[text-wrap:wrap]")}>
                  We believe effective legal representation starts with understanding our clients, their goals, and the
                  challenges they face
                </h4>
              </div>

              {/* .framer-sfnxa4-container */}
              <div className="relative h-auto w-auto flex-none">
                {/* name="Secondary Button 01" .framer-1vlt3ha */}
                <Link
                  href="/about"
                  className="group relative flex h-min w-min cursor-pointer flex-none flex-row items-center justify-center gap-[14px] overflow-hidden rounded-[50px] bg-[var(--fileon-ink)] py-[6px] pr-[6px] pl-[24px] no-underline"
                >
                  {/* name="Title Wrapper" .framer-176aqmi (overflow hidden, one line tall) */}
                  <div className="relative flex h-[24px] w-min flex-none flex-col items-start justify-start overflow-hidden">
                    {/* .framer-yu6vuw (parked above) and .framer-1h58870 trade places on hover */}
                    <div className={cn("flex flex-col -translate-y-[24px] group-hover:translate-y-0", HOVER_MOTION)}>
                      <p className={cn(BUTTON_TEXT, "h-[24px]")}>Learn more</p>
                      <p className={cn(BUTTON_TEXT, "h-[24px]")}>Learn more</p>
                    </div>
                  </div>

                  {/* name="Icon Wrapper" .framer-1d5hfen */}
                  <div className="relative flex h-[35px] w-[35px] flex-none flex-col items-center justify-center gap-[10px] overflow-hidden rounded-[100px] bg-[var(--fileon-white)]">
                    <div className="relative h-[18px] w-[18px] flex-none">
                      {/* name="Icon" .framer-dswrox — parked bottom-left, slides in on hover */}
                      <span
                        className={cn(
                          "absolute inset-0 block -translate-x-[20px] translate-y-[20px] group-hover:translate-x-0 group-hover:translate-y-0",
                          HOVER_MOTION,
                        )}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={`${IMAGES}/SZd9EedUwnpfottuX47mDHqgqXQ.svg`}
                          alt="Icon"
                          width={18}
                          height={18}
                          className="block h-full w-full object-contain object-center"
                        />
                      </span>
                      {/* name="Icon" .framer-13sriid — resting arrow, exits top-right on hover */}
                      <span
                        className={cn(
                          "absolute inset-0 block group-hover:translate-x-[20px] group-hover:-translate-y-[20px]",
                          HOVER_MOTION,
                        )}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={`${IMAGES}/SZd9EedUwnpfottuX47mDHqgqXQ.svg`}
                          alt="Icon"
                          width={18}
                          height={18}
                          className="block h-full w-full object-contain object-center"
                        />
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* name="Card Wrapper" .framer-pi3qon */}
            <div className="relative flex w-full flex-none flex-col items-start justify-start gap-[10px] md:flex-row md:items-center">
              {/* name="About Card 01" .framer-5iv59s */}
              <Reveal
                fromScale={0.6}
                className="relative flex w-full flex-none flex-col items-start justify-start gap-[10px] overflow-hidden rounded-[10px] md:w-px md:flex-1 md:basis-0"
              >
                {/* .framer-6jkfx2 */}
                <div className="relative aspect-[1] h-auto w-full flex-none overflow-hidden rounded-[10px] md:aspect-[0.925532]">
                  <Image
                    src={`${IMAGES}/GfChDHozkTi84ytPvKevdG7Rco.png`}
                    alt="Image"
                    width={870}
                    height={940}
                    className="absolute inset-0 block h-full w-full rounded-[inherit] object-cover object-[center_top]"
                  />
                </div>
              </Reveal>

              {/* name="About Card 02" .framer-ua14h8 */}
              <div className="relative flex w-full flex-none flex-col items-start justify-start gap-[10px] overflow-hidden rounded-[10px] md:w-px md:flex-1 md:basis-0">
                {/* .framer-i6fngp */}
                <Reveal fromScale={1.25} delay={120} className="w-full">
                  <div className="relative aspect-[1] h-auto w-full flex-none overflow-hidden rounded-[10px] md:aspect-[0.925532]">
                    <Image
                      src={`${IMAGES}/NzK6aglgtq6MeT36wLC0gdMToc.png`}
                      alt="Image"
                      width={870}
                      height={940}
                      className="absolute inset-0 block h-full w-full rounded-[inherit] object-cover object-[center_top]"
                    />
                  </div>
                </Reveal>

                {/* name="Content Wrapper" .framer-1rhqb1m */}
                <div className="absolute bottom-[10px] left-0 z-[1] flex w-full flex-none flex-col items-center justify-center gap-[10px] px-[10px] md:bottom-[20px] md:px-[20px] xl:bottom-[50px] xl:px-[50px]">
                  {/* name="Content " .framer-4ij43e */}
                  <Reveal
                    fromScale={0.92}
                    delay={240}
                    className="relative flex w-full flex-none flex-col items-start justify-start gap-[20px] rounded-[10px] bg-[var(--fileon-white)] p-[10px] md:gap-[30px] md:p-[20px] xl:gap-[52px] xl:p-[25px]"
                  >
                    {/* name="Title Wrapper" .framer-de67i9 */}
                    <div className="relative flex w-full flex-none flex-col items-start justify-start gap-[10px] md:gap-[15px] xl:gap-[20px]">
                      {/* name="Number" .framer-yybbnq */}
                      <div className="relative h-auto w-full flex-none">
                        <h4 className={cn(HEADING_TEXT, "text-[var(--fileon-ink)]")}>95%</h4>
                      </div>
                      {/* name="Title & Short Description" .framer-xqhhzs */}
                      <div className="relative flex w-full flex-none flex-col items-start justify-start gap-[5px]">
                        {/* name="Title" .framer-xkesem */}
                        <div className="relative h-auto w-full flex-none">
                          <p className="font-[family-name:var(--fileon-font-sans)] text-[18px] leading-[150%] font-medium tracking-[0em] text-left text-[var(--fileon-ink)]">
                            Satisfied clients
                          </p>
                        </div>
                        {/* name="Short Description" .framer-1dyi89y */}
                        <div className="relative h-auto w-full flex-none">
                          <p className="font-[family-name:var(--fileon-font-sans)] text-[16px] leading-[150%] font-normal tracking-[0em] text-left text-[var(--fileon-body)]">
                            Helping clients achieve clarity, confidence, and positive legal outcomes.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* .framer-10fkzmw — decorative dot grid */}
                    <div className="relative aspect-[4.42857] h-auto w-full flex-none overflow-hidden md:aspect-[3.625] xl:aspect-[3.03192]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`${IMAGES}/nEp9KxUnfhiXDhEv7FfANmgeaA.svg`}
                        alt=""
                        aria-hidden="true"
                        className="absolute inset-0 block h-full w-full rounded-[inherit] object-contain object-center"
                      />
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
