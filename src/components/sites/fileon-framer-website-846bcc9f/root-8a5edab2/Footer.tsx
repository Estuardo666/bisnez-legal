/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import { Reveal } from "@/components/sites/fileon-framer-website-846bcc9f/shared/Reveal";
import { cn } from "@/lib/utils";

const ASSETS = "/sites/fileon-framer-website-846bcc9f/root-8a5edab2/images";

/** `utKg9oPJRMxck3Dy2pvYHESR90.svg` — footer logo (152 × 42). */
const LOGO = `${ASSETS}/utKg9oPJRMxck3Dy2pvYHESR90.svg`;
/** `SZd9EedUwnpfottuX47mDHqgqXQ.svg` — arrow inside the newsletter submit button. */
const SUBMIT_ARROW = `${ASSETS}/SZd9EedUwnpfottuX47mDHqgqXQ.svg`;
/** `ACEm6wUhdzkFJDn8PlaTr4gkZc.svg` — oversized wordmark at the bottom (900 × 201). */
const WORDMARK = `${ASSETS}/ACEm6wUhdzkFJDn8PlaTr4gkZc.svg`;

/** `.framer-styles-preset-c36khm` — Manrope 400 / 16px / 150% / 0em. */
const BODY_TEXT =
  "font-[family-name:var(--fileon-font-sans)] text-[16px] font-normal leading-[150%] tracking-[0em] text-left";

/** `.framer-styles-preset-n4ys0b` — Geist Mono 400 / 14px / 150% / uppercase. */
const LABEL_TEXT =
  "font-[family-name:var(--fileon-font-mono)] text-[14px] font-normal leading-[150%] tracking-[0em] uppercase text-left";

/**
 * Framer drives the `Footer Menu 01` / `Footer Icon 01` / `Submit` hovers from JS, so the CSS
 * dump only records the end-state `position` swaps (`.hover .framer-…{left:0}` etc.) with no
 * duration or easing. They are re-expressed here as transforms using the one easing the dump
 * does spell out (`cubic-bezier(.44,0,.56,1)`, see `.framer-styles-preset-1wpt64j`).
 */
const HOVER_MOTION =
  "transition-transform duration-[400ms] ease-[cubic-bezier(0.44,0,0.56,1)]";

type FooterLink = { readonly label: string; readonly href: string };

type FooterColumn = {
  readonly title: string;
  readonly links: readonly FooterLink[];
  /** `--border-*-width` values from the DOM, per breakpoint. */
  readonly border: string;
};

const COLUMNS: readonly FooterColumn[] = [
  {
    title: "main pages",
    // Menu Wrapper 01 — mobile: none, tablet: right 1px, desktop: left + right 1px
    border: "md:border-r-[1px] xl:border-l-[1px]",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      {
        label: "Service details",
        href: "/services/corporate-legal-advisory",
      },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "More pages",
    // Menu Wrapper 02 — mobile: none, tablet + desktop: right 1px
    border: "md:border-r-[1px]",
    links: [
      { label: "Blogs", href: "/blogs" },
      {
        label: "Blog details",
        href: "/blogs/understanding-contract-risks-before-signing-agreements",
      },
      { label: "Case studies", href: "/case-studies" },
      { label: "Case details", href: "/case-studies/corporate-dispute" },
      { label: "Teams", href: "/teams" },
    ],
  },
  {
    title: "Utility pages",
    // Menu Wrapper 03 — no borders at any breakpoint
    border: "",
    links: [
      { label: "Team Details", href: "/teams/michael-carter" },
      { label: "404", href: "/404" },
    ],
  },
];

type SocialLink = {
  readonly href: string;
  readonly icon: string;
  readonly label: string;
};

const SOCIALS: readonly SocialLink[] = [
  {
    href: "https://www.facebook.com/",
    icon: `${ASSETS}/TyZt7YLLn48LTCi1q8cmT84AsJY.svg`,
    label: "Facebook",
  },
  {
    href: "https://x.com/",
    icon: `${ASSETS}/33rDQXnqeELgyzGqFx8c83lHke4.svg`,
    label: "X",
  },
  {
    href: "https://www.linkedin.com/",
    icon: `${ASSETS}/qB5792DCcdXcm8D6OLNC7qMYFE.svg`,
    label: "LinkedIn",
  },
  {
    href: "https://www.youtube.com/",
    icon: `${ASSETS}/xCMwW363AKtSqExMnUWduaSHA.svg`,
    label: "YouTube",
  },
];

export function Footer() {
  return (
    // name="Footer" .framer-1ds5rgd — row on tablet/desktop, column on mobile
    <footer className="relative flex w-full flex-none flex-col items-center justify-center gap-[10px] overflow-hidden p-0 md:flex-row">
      {/* .framer-15d65kj-container */}
      <div className="relative h-auto w-full flex-none md:w-px md:flex-1 md:basis-0">
        {/* name="Desktop"/"Tablet"/"Phone" .framer-c03et1 */}
        <div
          className={cn(
            "relative flex h-min w-full items-center justify-center gap-[10px] overflow-hidden bg-[var(--fileon-ink-soft)]",
            "px-[20px] pt-[80px] pb-[20px]",
            "md:px-[30px] md:pt-[100px] md:pb-[30px]",
            "xl:pt-[130px] xl:pb-0",
          )}
        >
          {/* name="Container" .framer-zuie9h */}
          <div className="relative flex h-min w-px max-w-[1300px] flex-1 basis-0 items-center justify-center gap-[10px] overflow-visible">
            {/* name="Content" .framer-1ne4ek3 */}
            <div className="relative flex h-min w-px flex-1 basis-0 flex-col items-end justify-end gap-[25px] overflow-visible md:items-start md:justify-start md:gap-[40px] xl:items-end xl:justify-end xl:gap-[10px]">
              {/* name="Content Wrappere" .framer-1ezr5ty */}
              <div className="relative flex h-min w-full flex-none flex-col items-start justify-start gap-[30px] overflow-visible md:gap-[40px] xl:gap-[80px]">
                {/* name="Logo & Menu Wrapper" .framer-2nznk */}
                <div className="relative flex h-min w-full flex-none flex-col items-start justify-start gap-[40px] overflow-visible md:gap-[50px] xl:flex-row xl:justify-between xl:gap-0">
                  <Reveal fromScale={1} className="w-full xl:w-px xl:flex-1">
                    {/* name="Logo & Form Wrapper" .framer-1oassly */}
                    <div className="relative flex h-min w-full flex-none flex-col items-start justify-start gap-[30px] overflow-visible md:max-w-[500px] xl:max-w-[400px] xl:gap-[60px]">
                      {/* name="Logo Wrapper" .framer-1wj8tu3 */}
                      <div className="relative flex h-min w-full flex-none flex-col items-start justify-start gap-[10px] overflow-visible md:gap-[14px]">
                        {/* name="Logo" .framer-1n1dizr */}
                        <Link
                          href="/"
                          className="relative block h-[42px] w-[152px] flex-none overflow-hidden no-underline"
                        >
                          <img
                            src={LOGO}
                            alt="Logo"
                            className="block h-full w-full object-contain object-center"
                          />
                        </Link>

                        {/* name="Short Description" .framer-1v5quko */}
                        <div className="relative h-auto w-full flex-none [text-wrap:balance]">
                          <p
                            className={cn(
                              BODY_TEXT,
                              "text-[var(--fileon-white)]",
                            )}
                          >
                            Providing trusted legal counsel built on integrity,
                            experience, and lasting client relationships
                          </p>
                        </div>
                      </div>

                      <NewsletterForm />
                    </div>
                  </Reveal>

                  <Reveal fromScale={1} className="w-full xl:w-px xl:flex-1">
                    {/* name="Menu Wrapper" .framer-crmzxd */}
                    <div className="relative flex h-min w-full flex-none flex-wrap items-start justify-start gap-x-[80px] gap-y-[30px] overflow-visible md:flex-nowrap md:gap-y-0 xl:max-w-[500px] xl:gap-0">
                      {COLUMNS.map((column) => (
                        <div
                          key={column.title}
                          className={cn(
                            "relative flex h-min w-min flex-none flex-col items-start justify-start gap-[15px] overflow-visible p-0",
                            "md:w-px md:flex-1 md:basis-0 md:gap-[30px] md:pr-[30px]",
                            "xl:gap-[50px] xl:px-[30px]",
                            "border-solid border-[var(--fileon-white-10)]",
                            column.border,
                          )}
                        >
                          {/* name="Title" .framer-5yckbm / .framer-prahfp / .framer-zlzy6p */}
                          <div className="relative h-auto w-auto flex-none whitespace-pre">
                            <p
                              className={cn(
                                LABEL_TEXT,
                                "text-[var(--fileon-white-45)]",
                              )}
                            >
                              {column.title}
                            </p>
                          </div>

                          {/* name="Menu Wrapper" .framer-80hdxl / .framer-15cvtr5 / .framer-2fu5sp */}
                          <div className="relative flex h-min w-min flex-none flex-col items-start justify-start gap-[5px] overflow-visible md:w-full md:gap-[10px]">
                            {column.links.map((link) => (
                              <div
                                key={`${column.title}-${link.label}`}
                                className="relative h-auto w-auto flex-none"
                              >
                                <FooterMenuLink link={link} />
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </Reveal>
                </div>

                {/* name="Icon & Text Wrapper" .framer-gbmktv */}
                <div className="relative flex h-min w-full flex-none flex-col items-start justify-start gap-[10px] overflow-visible md:flex-row md:items-center md:justify-between md:gap-0">
                  {/* name="Icon Wrapper" .framer-1jygl8f */}
                  <div className="relative flex h-min w-min flex-none flex-row items-center justify-start gap-[8px] overflow-visible p-0">
                    {SOCIALS.map((social) => (
                      <div
                        key={social.href}
                        className="relative h-[31px] w-[30px] flex-none md:h-[34px] md:w-[34px]"
                      >
                        <SocialIcon social={social} />
                      </div>
                    ))}
                  </div>

                  {/* name="Text" .framer-tzfsp5 */}
                  <div className="relative z-[5] h-auto w-full flex-none [text-wrap:balance] md:w-auto md:whitespace-pre md:[text-wrap:wrap]">
                    <p
                      className={cn(BODY_TEXT, "text-[var(--fileon-white)]")}
                    >
                      Copyright &amp; Design by{" "}
                      <a
                        href="https://reddevs.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#a9a9a9] no-underline transition-[color] duration-[300ms] ease-[cubic-bezier(0.44,0,0.56,1)] hover:text-[var(--fileon-white)]"
                      >
                        ©RedDevs
                      </a>{" "}
                      - Powered by&nbsp;Framer - 2026
                    </p>
                  </div>
                </div>
              </div>

              {/* .framer-jm8pxf — 900×201 desktop, 100%×167 tablet, 100%×45 mobile */}
              <Reveal fromScale={0.4} className="w-full xl:w-[900px]">
                <div className="relative h-[45px] w-full flex-none overflow-hidden md:h-[167px] xl:h-[201px] xl:w-[900px]">
                  <img
                    src={WORDMARK}
                    alt=""
                    className="block h-full w-full object-contain object-center"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/** `.framer-1uxegkr` — email capture with the absolutely positioned submit button. */
function NewsletterForm() {
  return (
    <form className="relative flex h-min w-full flex-none flex-col items-start justify-start gap-[20px] overflow-hidden p-0">
      {/* .framer-36mzd9 */}
      <label className="relative flex h-min w-full flex-none flex-col items-start justify-start gap-[10px] p-0">
        {/* .framer-hl3qok */}
        <span className="relative h-auto w-full flex-none break-words whitespace-pre-wrap">
          <span className={cn(LABEL_TEXT, "text-[var(--fileon-white-45)]")}>
            email
          </span>
        </span>

        {/* .framer-ipz5mx — bg #333, radius 45px, padding 14px 24px, focus ring #d9d9d9 */}
        <span className="relative flex h-auto w-full flex-none items-center overflow-hidden rounded-[45px] bg-[#333333] px-[24px] py-[14px] focus-within:outline focus-within:outline-[1px] focus-within:outline-[var(--fileon-line)]">
          <input
            type="email"
            name="email"
            className="w-full min-w-0 flex-1 overflow-hidden border-none bg-transparent p-0 text-left font-[family-name:var(--fileon-font-sans)] text-[16px] leading-[150%] font-normal tracking-[0em] text-ellipsis whitespace-nowrap text-[var(--fileon-white)] focus-visible:outline-none"
          />
        </span>
      </label>

      {/* .framer-1784zt-container — absolute, top 67%, right 9px, translateY(-50%) */}
      <div className="absolute top-[67%] right-[9px] z-[1] h-auto w-auto flex-none -translate-y-1/2">
        {/* name="Submit 01" .framer-asup8l */}
        <button
          type="submit"
          aria-label="Subscribe"
          className="group relative flex h-min w-min cursor-pointer flex-row items-center justify-center gap-[20px] overflow-visible rounded-[50px] bg-[var(--fileon-white)] p-0"
        >
          {/* name="Icon" .framer-1k76zbf */}
          <span className="relative z-[1] flex h-[35px] w-[35px] flex-none items-center justify-center gap-[10px] overflow-hidden rounded-[100px] bg-[var(--fileon-white)]">
            <span className="relative block h-[18px] w-[18px] flex-none">
              {/* .framer-1sny2l5 — parked at bottom:-20px / left:-20px */}
              <span
                className={cn(
                  "absolute inset-0 block -translate-x-[20px] translate-y-[20px] group-hover:translate-x-0 group-hover:translate-y-0",
                  HOVER_MOTION,
                )}
              >
                <img
                  src={SUBMIT_ARROW}
                  alt=""
                  className="block h-full w-full object-contain object-center"
                />
              </span>
              {/* .framer-1j3idy5 — in place, exits to top:-20px / right:-20px */}
              <span
                className={cn(
                  "absolute inset-0 block group-hover:translate-x-[20px] group-hover:-translate-y-[20px]",
                  HOVER_MOTION,
                )}
              >
                <img
                  src={SUBMIT_ARROW}
                  alt=""
                  className="block h-full w-full object-contain object-center"
                />
              </span>
            </span>
          </span>
        </button>
      </div>
    </form>
  );
}

/**
 * `name="Footer Menu 01"` — `.framer-1g7w5n`. The `Line` child (`.framer-1djgmhj`) sits at
 * `left:-300px` and moves to `left:0` on hover; the anchor clips it.
 */
function FooterMenuLink({ link }: { link: FooterLink }) {
  return (
    <Link
      href={link.href}
      className="group relative flex h-min w-min cursor-pointer flex-col items-start justify-start gap-[10px] overflow-hidden p-0 pb-[2px] no-underline"
    >
      <span className={cn(BODY_TEXT, "relative h-auto w-auto flex-none whitespace-pre text-[var(--fileon-white)]")}>
        {link.label}
      </span>
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute bottom-0 left-0 z-[1] h-px w-full -translate-x-[300px] bg-[var(--fileon-white)] group-hover:z-[2] group-hover:translate-x-0",
          HOVER_MOTION,
        )}
      />
    </Link>
  );
}

/**
 * `name="Footer Icon  01"` — `.framer-1lct7eb`. Two copies of the same glyph: the first is
 * parked at `top:-50px`, and on hover the pair swaps so it slides down into the slot.
 */
function SocialIcon({ social }: { social: SocialLink }) {
  return (
    <a
      href={social.href}
      target="_blank"
      rel="noreferrer"
      aria-label={social.label}
      className="group relative flex h-full w-full cursor-pointer flex-col items-center justify-center gap-[10px] overflow-hidden rounded-[100px] bg-[var(--fileon-white)] no-underline"
    >
      <span className="relative block h-[15px] w-[15px] overflow-hidden">
        <span
          className={cn(
            "flex -translate-y-[15px] flex-col group-hover:translate-y-0",
            HOVER_MOTION,
          )}
        >
          <img
            src={social.icon}
            alt=""
            className="block h-[15px] w-[15px] flex-none object-contain object-center"
          />
          <img
            src={social.icon}
            alt=""
            className="block h-[15px] w-[15px] flex-none object-contain object-center"
          />
        </span>
      </span>
    </a>
  );
}
