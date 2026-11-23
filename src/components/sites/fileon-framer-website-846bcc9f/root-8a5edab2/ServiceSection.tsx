import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, Building2, FilePenLine, ShieldX, type LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { MotionArrowButton } from "@/components/sites/fileon-framer-website-846bcc9f/shared/MotionArrowButton";

const IMG = "/sites/fileon-framer-website-846bcc9f/root-8a5edab2/images";

/** `FIszeMQLivTjqTsp12DiTTrvDU.svg` — arrow inside every card's white circle. */
const ARROW_CARD = `${IMG}/FIszeMQLivTjqTsp12DiTTrvDU.svg`;

type Service = {
  number: string;
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  desktopBg: string;
  foreground: string;
  hoverColor: string;
  iconIsLight?: boolean;
};

const SERVICES: readonly Service[] = [
  {
    number: "01.",
    title: "Registro de marca",
    description: "Protección integral de tu identidad ante el SENADI, de inicio a fin.",
    href: "/servicios#registro-de-marca",
    icon: BadgeCheck,
    desktopBg: "var(--fileon-brisa)",
    foreground: "var(--fileon-cacao)",
    hoverColor: "var(--fileon-coral)",
  },
  {
    number: "02.",
    title: "Cese de uso de marca",
    description: "Frenamos a quien usa tu nombre sin autorización.",
    href: "/servicios#cese-de-uso",
    icon: ShieldX,
    desktopBg: "var(--fileon-coral)",
    foreground: "var(--fileon-cacao)",
    hoverColor: "var(--fileon-cacao)",
    iconIsLight: true,
  },
  {
    number: "03.",
    title: "Constitución de S.A.S.",
    description: "Formaliza tu empresa con la estructura correcta para crecer.",
    href: "/servicios#constitucion",
    icon: Building2,
    desktopBg: "var(--fileon-arena)",
    foreground: "var(--fileon-cacao)",
    hoverColor: "var(--fileon-cacao)",
  },
  {
    number: "04.",
    title: "Contratos empresariales",
    description: "Términos y condiciones, confidencialidad, uso de imagen y cesión de derechos.",
    href: "/servicios#contratos",
    icon: FilePenLine,
    desktopBg: "var(--fileon-cacao)",
    foreground: "var(--fileon-white)",
    hoverColor: "var(--fileon-brisa)",
    iconIsLight: true,
  },
];

/**
 * The CSS dump encodes both hover affordances as instant `position` swaps (Framer animates
 * them from JS, so no duration/easing is present in the stylesheet). They are re-expressed
 * here as transforms so they can actually tween.
 */
export function ServiceSection() {
  return (
    // .framer-ikil37 — padding 80/20 → 100/30 → 130/30, overflow hidden
    <section
      data-framer-name="Service Section"
      className="relative flex w-full flex-none items-center justify-center gap-[10px] overflow-hidden bg-[var(--fileon-bg,#fffaf4)] px-[20px] py-[80px] md:px-[30px] md:py-[100px] xl:py-[130px]"
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
                <div className="relative h-[10px] w-[10px] flex-none bg-[var(--fileon-coral)]" />
                {/* Title — .framer-uioks9 + preset n4ys0b */}
                <div className="relative h-auto w-auto flex-none whitespace-pre">
                  <p className="text-left font-[family-name:var(--fileon-font-mono,'Geist_Mono',monospace)] text-[14px] leading-[150%] font-normal tracking-[0em] text-[var(--fileon-cacao)] uppercase">
                    lo que hacemos
                  </p>
                </div>
              </div>

              {/* Title — .framer-1lcosrt + preset 1x3pol9 (56 → 46 → 38) */}
              <div className="relative h-auto w-full flex-none [text-wrap:balance]">
                <h2 className="text-left text-balance font-[family-name:var(--fileon-font-sans)] text-[38px] leading-[1.08] font-semibold tracking-[-0.045em] text-[var(--fileon-heading)] md:text-[46px] xl:text-[56px]">
                  Desde registrar tu marca hasta{" "}
                  <span className="text-[var(--fileon-coral)]">blindar tus contratos y constituir tu empresa</span>
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
    <MotionArrowButton href="/servicios" variant="coral">
      Ver todos los servicios
    </MotionArrowButton>
  );
}

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <Link
      href={service.href}
      data-framer-name="Service Card"
      style={{
        "--fileon-card-bg": service.desktopBg,
        "--fileon-card-foreground": service.foreground,
        "--fileon-card-hover": service.hoverColor,
      } as React.CSSProperties}
      className={cn(
        // .framer-v-1clm7ew (phone) → .framer-v-a61ylr (tablet) → .framer-1bmj3q8 (desktop)
        "group relative flex h-min w-full cursor-pointer flex-col items-start justify-start gap-[30px] p-[20px] no-underline",
        "md:flex-row md:items-center md:justify-start md:gap-[70px] md:px-[20px] md:py-[30px]",
        "xl:gap-[360px] xl:px-[30px] xl:py-[50px]",
        "rounded-[32px] bg-[var(--fileon-card-bg)] text-[var(--fileon-card-foreground)]",
        "meiker-hover-lift hover:shadow-[0_18px_40px_rgba(70,19,18,0.16)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--fileon-coral)]",
      )}
    >
      {/* Number — .framer-ohfb30 + preset 1hf31ua (24 → 22 → 22) */}
      <div className="relative h-auto w-auto flex-none whitespace-pre">
        <h6 className="text-left font-[family-name:var(--fileon-font-serif,Lora,serif)] text-[22px] leading-[135%] font-normal tracking-[0em] text-[var(--fileon-card-foreground)] xl:text-[24px]">
          {service.number}
        </h6>
      </div>

      {/* Title & Icon Wrapper — .framer-gqj0mz */}
      <div className="relative flex h-min w-full flex-none flex-col items-end justify-start gap-[15px] md:w-px md:flex-1 md:flex-row md:items-center md:justify-between md:gap-0">
        {/* Title & Icon — .framer-tf79k2, gap 10 → 10 → 40 */}
        <div className="relative flex h-min w-full flex-none items-start justify-start gap-[10px] md:w-min md:items-center xl:gap-[40px]">
          {/* Icon — .framer-1uqsbff : 30×31 → 40 → 45 */}
          <div className={cn("relative grid h-[31px] w-[30px] flex-none place-items-center md:h-[40px] md:w-[40px] xl:h-[45px] xl:w-[45px]", service.iconIsLight ? "text-white" : "text-[var(--fileon-cacao)]")}>
            <Icon aria-hidden="true" className="h-full w-full" strokeWidth={1.6} />
          </div>

          {/* Title — .framer-1j1oevh + preset 1lcxu9v (32 → 28 → 24) */}
          <div className="relative h-auto w-px flex-1 break-words md:w-auto md:flex-none">
            <h5 className="meiker-service-card-title text-left font-[family-name:var(--fileon-font-serif,Lora,serif)] text-[24px] leading-[130%] font-normal tracking-[0em] text-[var(--fileon-card-foreground)] group-hover:text-[var(--fileon-card-hover)] md:whitespace-pre md:text-[28px] xl:text-[32px]">
              {service.title}
            </h5>
            <p className="mt-1.5 max-w-[440px] text-[15px] leading-[1.5] text-[var(--fileon-card-foreground)] opacity-80 md:text-[16px]">
              {service.description}
            </p>
          </div>
        </div>

        {/* .framer-11ne1q1-container : 40×41 → 50×51 → 55×55 */}
        <div className="relative z-[1] h-[41px] w-[40px] flex-none md:h-[51px] md:w-[50px] xl:h-[55px] xl:w-[55px]">
          {/* Icon 01 — .framer-u2fmbh */}
          <div className="meiker-icon-grow relative flex h-full w-full flex-col items-center justify-center gap-[10px] overflow-hidden rounded-[28px] border border-solid border-white/50 bg-white/90 group-hover:bg-[var(--fileon-brisa)]">
            {/* .framer-1yk0gix */}
            <div className="relative h-[28px] w-[28px] flex-none overflow-hidden">
              <Image
                src={ARROW_CARD}
                alt=""
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
