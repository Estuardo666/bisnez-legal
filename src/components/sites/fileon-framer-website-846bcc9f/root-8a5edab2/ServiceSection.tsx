import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

const IMG = "/sites/fileon-framer-website-846bcc9f/root-8a5edab2/images";

/** `SZd9EedUwnpfottuX47mDHqgqXQ.svg` — arrow used by the "All services" button. */
const ARROW_BUTTON = `${IMG}/SZd9EedUwnpfottuX47mDHqgqXQ.svg`;
/** `FIszeMQLivTjqTsp12DiTTrvDU.svg` — arrow inside every card's white circle. */
const ARROW_CARD = `${IMG}/FIszeMQLivTjqTsp12DiTTrvDU.svg`;

type Service = {
  number: string;
  title: string;
  href: string;
  icon: string;
  /**
   * Desktop-only card background (Framer `Desktop Service Card 02` variant).
   * The tablet / phone variants are all `#eeece6`.
   */
  desktopBg: string;
};

const SERVICES: readonly Service[] = [
  {
    number: "01.",
    title: "Corporate Legal Advisory",
    href: "/services/corporate-legal-advisory",
    icon: `${IMG}/kSZxPjbuz7uX9eNP9yMuitis.svg`,
    desktopBg: "#f7f7f2",
  },
  {
    number: "02.",
    title: "Employment Law Services",
    href: "/services/employment-law-services",
    icon: `${IMG}/oqf1jpX2WEylAGtqU4zCaEBDX2g.svg`,
    desktopBg: "#eeece6",
  },
  {
    number: "03.",
    title: "Corporate Legal Advisory Copy 4",
    href: "/services/corporate-legal-advisory-copy-4",
    icon: `${IMG}/vOwtLdLYHDQN05D1lD0ys3YnE.svg`,
    desktopBg: "#e4e2dc",
  },
  {
    number: "04.",
    title: "Dispute Resolution Support",
    href: "/services/dispute-resolution-support",
    icon: `${IMG}/lX9i5KUe1EOeeADRLuyXNbIBbo.svg`,
    desktopBg: "#d0cec8",
  },
];

/**
 * The CSS dump encodes both hover affordances as instant `position` swaps (Framer animates
 * them from JS, so no duration/easing is present in the stylesheet). They are re-expressed
 * here as transforms so they can actually tween.
 */
const HOVER_MOTION =
  "transition-transform duration-[400ms] ease-[cubic-bezier(0.44,0,0.56,1)]";

export function ServiceSection() {
  return (
    // .framer-ikil37 — padding 80/20 → 100/30 → 130/30, overflow hidden
    <section
      data-framer-name="Service Section"
      className="relative flex w-full flex-none items-center justify-center gap-[10px] overflow-hidden bg-[var(--fileon-bg,#f7f7f2)] px-[20px] py-[80px] md:px-[30px] md:py-[100px] xl:py-[130px]"
    >
      {/* Container — .framer-aqhzhd */}
      <div className="relative flex h-min w-px max-w-[1300px] flex-1 items-center justify-center gap-[10px]">
        {/* Content — .framer-155a8ec, gap 40 → 50 → 60 */}
        <div className="relative flex h-min w-px flex-1 flex-col items-start justify-start gap-[40px] md:gap-[50px] xl:gap-[60px]">
          {/* Title & Button Wrapper — .framer-1o51td5 */}
          <div className="relative flex h-min w-full flex-none flex-col items-start justify-start gap-[20px] md:flex-row md:items-end md:justify-between md:gap-0">
            {/* Title Wrapper — .framer-17ctnff, max-width unset → 500 → 610 */}
            <div className="relative flex h-min w-full flex-none flex-col items-start justify-start gap-[10px] md:w-px md:max-w-[500px] md:flex-1 xl:max-w-[610px]">
              {/* Section Title 01 — .framer-1gnz6fr */}
              <div className="relative flex h-min w-min flex-none items-center justify-start gap-[10px]">
                {/* Icon — .framer-18gvpqs */}
                <div className="relative h-[10px] w-[10px] flex-none bg-[var(--fileon-ink,#191818)]" />
                {/* Title — .framer-uioks9 + preset n4ys0b */}
                <div className="relative h-auto w-auto flex-none whitespace-pre">
                  <p className="text-left font-[family-name:var(--fileon-font-mono,'Geist_Mono',monospace)] text-[14px] leading-[150%] font-normal tracking-[0em] text-black uppercase">
                    our services
                  </p>
                </div>
              </div>

              {/* Title — .framer-1lcosrt + preset 1x3pol9 (56 → 46 → 38) */}
              <div className="relative h-auto w-full flex-none [text-wrap:balance]">
                <h2 className="text-left font-[family-name:var(--fileon-font-serif,Lora,serif)] text-[38px] leading-[120%] font-normal tracking-[0em] text-[var(--fileon-ink,#191818)] md:text-[46px] xl:text-[56px]">
                  Experienced Counsel For Critical{" "}
                  <span className="text-[rgba(0,0,0,0.5)]">Decisions</span>
                </h2>
              </div>
            </div>

            {/* Secondary Button 01 — .framer-1vlt3ha */}
            <AllServicesButton />
          </div>

          {/* Card Wrapper — .framer-m44lov, gap 15 → 15 → 10 */}
          <div className="relative flex h-min w-full flex-none flex-col items-start justify-start gap-[15px] xl:gap-[10px]">
            {/* .framer-11tvwl3 — gap 20 → 20 → 10 */}
            <div className="relative flex h-min w-full flex-none flex-col items-start justify-start gap-[20px] xl:gap-[10px]">
              {SERVICES.map((service) => (
                // .framer-1fwn0km
                <div
                  key={service.number}
                  className="relative flex h-min w-full flex-none items-center justify-start gap-[10px]"
                >
                  {/* .framer-13e1vi1-container */}
                  <div className="relative h-auto w-px flex-1">
                    <ServiceCard service={service} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AllServicesButton() {
  return (
    <Link
      href="/services"
      data-framer-name="Secondary Button 01"
      className={cn(
        "group relative flex h-min w-min flex-none cursor-pointer items-center justify-center gap-[14px]",
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
          <p className="h-[24px] text-left font-[family-name:var(--fileon-font-sans,Manrope,sans-serif)] text-[16px] leading-[150%] font-medium tracking-[0em] whitespace-pre text-white">
            All services
          </p>
          <p className="h-[24px] text-left font-[family-name:var(--fileon-font-sans,Manrope,sans-serif)] text-[16px] leading-[150%] font-medium tracking-[0em] whitespace-pre text-white">
            All services
          </p>
        </div>
      </div>

      {/* Icon Wrapper — .framer-1d5hfen */}
      <div className="relative flex h-[35px] w-[35px] flex-none flex-col items-center justify-center gap-[10px] overflow-hidden rounded-[100px] bg-white">
        <div className="relative h-[18px] w-[18px] flex-none">
          {/* .framer-dswrox — parked at bottom:-20px / left:-20px, slides in on hover */}
          <span
            className={cn(
              "absolute inset-0 block -translate-x-[20px] translate-y-[20px] group-hover:translate-x-0 group-hover:translate-y-0",
              HOVER_MOTION,
            )}
          >
            <Image
              src={ARROW_BUTTON}
              alt="Icon"
              fill
              sizes="18px"
              className="object-contain object-center"
            />
          </span>
          {/* .framer-13sriid — in place, exits to top:-20px / right:-20px on hover */}
          <span
            className={cn(
              "absolute inset-0 block group-hover:translate-x-[20px] group-hover:-translate-y-[20px]",
              HOVER_MOTION,
            )}
          >
            <Image
              src={ARROW_BUTTON}
              alt="Icon"
              fill
              sizes="18px"
              className="object-contain object-center"
            />
          </span>
        </div>
      </div>
    </Link>
  );
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={service.href}
      data-framer-name="Service Card"
      style={{ "--fileon-card-bg": service.desktopBg } as React.CSSProperties}
      className={cn(
        // .framer-v-1clm7ew (phone) → .framer-v-a61ylr (tablet) → .framer-1bmj3q8 (desktop)
        "relative flex h-min w-full cursor-default flex-col items-start justify-start gap-[30px] p-[20px] no-underline",
        "md:flex-row md:items-center md:justify-start md:gap-[70px] md:px-[20px] md:py-[30px]",
        "xl:cursor-pointer xl:gap-[360px] xl:px-[30px] xl:py-[50px]",
        "rounded-[10px] bg-[#eeece6] xl:bg-[var(--fileon-card-bg)]",
      )}
    >
      {/* Number — .framer-ohfb30 + preset 1hf31ua (24 → 22 → 22) */}
      <div className="relative h-auto w-auto flex-none whitespace-pre">
        <h6 className="text-left font-[family-name:var(--fileon-font-serif,Lora,serif)] text-[22px] leading-[135%] font-normal tracking-[0em] text-black xl:text-[24px]">
          {service.number}
        </h6>
      </div>

      {/* Title & Icon Wrapper — .framer-gqj0mz */}
      <div className="relative flex h-min w-full flex-none flex-col items-end justify-start gap-[15px] md:w-px md:flex-1 md:flex-row md:items-center md:justify-between md:gap-0">
        {/* Title & Icon — .framer-tf79k2, gap 10 → 10 → 40 */}
        <div className="relative flex h-min w-full flex-none items-start justify-start gap-[10px] md:w-min md:items-center xl:gap-[40px]">
          {/* Icon — .framer-1uqsbff : 30×31 → 40 → 45 */}
          <div className="relative h-[31px] w-[30px] flex-none overflow-hidden md:h-[40px] md:w-[40px] xl:h-[45px] xl:w-[45px]">
            <Image
              src={service.icon}
              alt="Icon"
              fill
              sizes="45px"
              className="object-contain object-center"
            />
          </div>

          {/* Title — .framer-1j1oevh + preset 1lcxu9v (32 → 28 → 24) */}
          <div className="relative h-auto w-px flex-1 break-words whitespace-pre-wrap md:w-auto md:flex-none md:whitespace-pre">
            <h5 className="text-left font-[family-name:var(--fileon-font-serif,Lora,serif)] text-[24px] leading-[130%] font-normal tracking-[0em] text-black md:text-[28px] xl:text-[32px]">
              {service.title}
            </h5>
          </div>
        </div>

        {/* .framer-11ne1q1-container : 40×41 → 50×51 → 55×55 */}
        <div className="relative z-[1] h-[41px] w-[40px] flex-none md:h-[51px] md:w-[50px] xl:h-[55px] xl:w-[55px]">
          {/* Icon 01 — .framer-u2fmbh */}
          <div className="relative flex h-full w-full flex-col items-center justify-center gap-[10px] overflow-hidden rounded-[100px] border border-solid border-[#bebebe] bg-white">
            {/* .framer-1yk0gix */}
            <div className="relative h-[28px] w-[28px] flex-none overflow-hidden">
              <Image
                src={ARROW_CARD}
                alt="Icon"
                fill
                sizes="28px"
                className="object-contain object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
