import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/sites/fileon-framer-website-846bcc9f/shared/Reveal";

const ASSETS = "/sites/fileon-framer-website-846bcc9f/root-8a5edab2/images";

const RATING_ICON = `${ASSETS}/iB8AIgN4g8VTFqSdS9MqIgbF0ps.svg`;
const BUTTON_ARROW_ICON = `${ASSETS}/EYDLAZGki3fWmXGqR28GepT0H40.svg`;
const DISPLAY_ARROW_ICON = `${ASSETS}/1nSGlc9BFW8GOnDZlHhuYvggB5Q.svg`;
const HERO_IMAGE = `${ASSETS}/ekQrJGgkG0Af5PGzyISVjhyzbM.png`;

/**
 * The CSS dump encodes the button's label/icon swap as instant `position` swaps
 * (Framer tweens them from JS, so no duration/easing survives into the stylesheet).
 * They are re-expressed here as transforms so they can actually animate — same
 * timing the sibling sections use.
 */
const HOVER_MOTION = "transition-transform duration-[400ms] ease-[cubic-bezier(0.44,0,0.56,1)]";

interface HeroSectionProps {
  className?: string;
}

/**
 * Fileon hero — full-bleed portrait background, rating eyebrow, serif headline,
 * pill CTA and the oversized "RIGHTS" display lockup.
 *
 * Values are taken verbatim from raw/hero.dom.txt + raw/hero.css.txt.
 * Breakpoints: base = mobile (≤809px), `md:` = 810px (tablet), `xl:` = 1380px (desktop).
 */
export function HeroSection({ className }: HeroSectionProps) {
  return (
    <section
      data-framer-name="Hero Section"
      className={cn(
        "relative flex w-full flex-none flex-row items-center justify-center gap-[10px] overflow-hidden",
        // padding: 140px 20px 40px (mobile) → 160px 30px 50px (tablet) → 380px 30px 50px (desktop)
        "px-[20px] pt-[140px] pb-[40px] md:px-[30px] md:pt-[160px] md:pb-[50px] xl:pt-[380px]",
        className,
      )}
    >
      {/* Background photograph */}
      <Reveal
        className="absolute top-0 left-0 z-[1] h-full w-full overflow-hidden"
        fromScale={1.25}
      >
        <Image
          src={HERO_IMAGE}
          alt="Image"
          fill
          priority
          sizes="100vw"
          className="block h-full w-full object-cover object-center"
        />
      </Reveal>

      {/* Linear gradient scrim: transparent → rgb(0 0 0 / 20%) */}
      <div
        data-framer-name="Linear"
        className="absolute top-0 left-0 z-[1] h-full w-full overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0) 0%, var(--fileon-black-30, rgba(0,0,0,0.2)) 100%)",
        }}
      />

      {/* Container */}
      <div
        data-framer-name="Container"
        className="relative flex w-px max-w-[1300px] flex-1 flex-row items-center justify-center gap-[10px]"
      >
        {/* Content */}
        <div
          data-framer-name="Content"
          className="relative z-[5] flex w-px flex-1 flex-col items-start justify-start gap-[40px] md:gap-[50px] xl:gap-[60px]"
        >
          {/* Text & Button Wrapper */}
          <div
            data-framer-name="Text & Button Wrapper"
            className="relative flex w-full flex-none flex-col items-start justify-start gap-[25px] md:max-w-[415px] md:gap-[30px] xl:gap-[40px]"
          >
            {/* Text & Short Description */}
            <div
              data-framer-name="Text & Short Description"
              className="relative flex w-full flex-none flex-col items-start justify-start gap-[15px] xl:gap-[20px]"
            >
              {/* Icon & Text Wrapper */}
              <div
                data-framer-name="Icon & Text Wrapper"
                className="relative flex w-min flex-none flex-row items-center justify-start gap-[10px] border-b border-b-[#bebebe] pb-[10px]"
              >
                <div
                  data-framer-name="Icon"
                  className="relative aspect-square w-[25px] flex-none overflow-clip"
                >
                  <Image
                    src={RATING_ICON}
                    alt="Icon"
                    width={25}
                    height={25}
                    unoptimized
                    className="block h-full w-full object-contain object-center"
                  />
                </div>
                <div data-framer-name="Text" className="relative h-auto w-auto flex-none whitespace-pre">
                  <p className="text-left text-[14px] leading-[150%] font-normal tracking-[0em] text-[var(--fileon-white,#ffffff)] uppercase [font-family:var(--fileon-font-mono)]">
                    4.9/5 Average Client Rating
                  </p>
                </div>
              </div>

              {/* Short Description */}
              <div data-framer-name="Short Description" className="relative h-auto w-full flex-none">
                <h6 className="text-left text-[22px] leading-[135%] font-normal tracking-[0em] text-balance text-[var(--fileon-white,#ffffff)] [font-family:var(--fileon-font-serif)] xl:text-[24px]">
                  Providing strategic legal counsel and representation for businesses, organizations,
                  and individuals
                </h6>
              </div>
            </div>

            {/* Primary Button */}
            <Reveal className="relative h-auto w-auto flex-none" fromScale={0.8}>
              <Link
                href="/contact"
                data-framer-name="Primary Button"
                className="group relative flex h-min w-min cursor-pointer flex-row items-center justify-center gap-[14px] overflow-hidden rounded-[50px] bg-[var(--fileon-white,#ffffff)] py-[6px] pr-[6px] pl-[24px] no-underline"
              >
                <div
                  data-framer-name="Title Wrapper"
                  className="relative flex h-[24px] w-min flex-none flex-col items-start justify-start overflow-hidden"
                >
                  {/* The two "Title" copies trade places on hover */}
                  <div className={cn("flex flex-col -translate-y-[24px] group-hover:translate-y-0", HOVER_MOTION)}>
                    <p className="h-[24px] text-left text-[16px] leading-[150%] font-medium tracking-[0em] whitespace-pre text-[var(--fileon-ink,#191818)] [font-family:var(--fileon-font-sans)]">
                      Book free consultaion
                    </p>
                    <p className="h-[24px] text-left text-[16px] leading-[150%] font-medium tracking-[0em] whitespace-pre text-[var(--fileon-ink,#191818)] [font-family:var(--fileon-font-sans)]">
                      Book free consultaion
                    </p>
                  </div>
                </div>

                <div
                  data-framer-name="Icon Wrapper"
                  className="relative flex aspect-square h-[35px] w-[35px] flex-none flex-col items-center justify-center gap-[10px] overflow-hidden rounded-[100px] bg-[var(--fileon-ink,#191818)]"
                >
                  <div className="relative aspect-square h-[18px] w-[18px] flex-none">
                    {/* parked bottom-left, slides in on hover */}
                    <span
                      className={cn(
                        "absolute inset-0 block -translate-x-[20px] translate-y-[20px] group-hover:translate-x-0 group-hover:translate-y-0",
                        HOVER_MOTION,
                      )}
                    >
                      <Image
                        src={BUTTON_ARROW_ICON}
                        alt="Icon"
                        width={18}
                        height={18}
                        unoptimized
                        className="block h-full w-full object-contain object-center"
                      />
                    </span>
                    {/* resting arrow, exits top-right on hover */}
                    <span
                      className={cn(
                        "absolute inset-0 block group-hover:translate-x-[20px] group-hover:-translate-y-[20px]",
                        HOVER_MOTION,
                      )}
                    >
                      <Image
                        src={BUTTON_ARROW_ICON}
                        alt="Icon"
                        width={18}
                        height={18}
                        unoptimized
                        className="block h-full w-full object-contain object-center"
                      />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          </div>

          {/* Title & Icon Wrapper — the oversized "RIGHTS" lockup */}
          <Reveal className="w-full md:w-min" fromScale={0.4}>
            <div
              data-framer-name="Title & Icon Wrapper"
              className="relative flex w-full flex-none flex-row flex-wrap items-center justify-start gap-0 md:w-min md:flex-nowrap"
            >
              <div data-framer-name="Title" className="relative h-auto w-auto flex-none whitespace-pre">
                <p className="text-left text-[60px] leading-[90%] font-medium tracking-[0em] text-[var(--fileon-white,#ffffff)] uppercase [font-family:var(--fileon-font-serif)] md:text-[120px] xl:text-[230px]">
                  Rights
                </p>
              </div>
              <div
                data-framer-name="Icon"
                className="relative aspect-square w-[55px] flex-none overflow-clip md:w-[108px] xl:w-[200px]"
              >
                <Image
                  src={DISPLAY_ARROW_ICON}
                  alt="Icon"
                  width={200}
                  height={200}
                  unoptimized
                  className="block h-full w-full object-contain object-center"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Bottom-right corner notch (inline SVG in the original) */}
      <div
        data-framer-name="Vector"
        className="absolute right-[-2px] bottom-[-10px] z-[1] h-auto w-[150px] flex-none [aspect-ratio:6.33333] [image-rendering:pixelated] md:bottom-[-3px] md:w-[250px] xl:bottom-[-2px] xl:w-[266px]"
      >
        <svg
          viewBox="-1 -1 266 42"
          fill="none"
          className="h-full w-full"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M27.3132 0L0 40H263.317V0H27.3132Z" fill="var(--fileon-bg-warm, #EEECE6)" />
        </svg>
      </div>
    </section>
  );
}
