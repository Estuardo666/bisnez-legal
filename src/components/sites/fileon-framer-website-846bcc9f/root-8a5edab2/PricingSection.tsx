/* eslint-disable @next/next/no-img-element */

import { Check } from "lucide-react";

import { Reveal } from "@/components/sites/fileon-framer-website-846bcc9f/shared/Reveal";
import { MotionArrowButton } from "@/components/sites/fileon-framer-website-846bcc9f/shared/MotionArrowButton";
import { cn } from "@/lib/utils";

const ASSETS = "/sites/fileon-framer-website-846bcc9f/root-8a5edab2/images";

/** `SZd9EedUwnpfottuX47mDHqgqXQ.svg` — 18×18 arrow inside the CTA button. */
/** `K7uBCQ3LbwXzrWYQFm5zt3VusU.png` — full-bleed backdrop behind the Custom Plan card. */
const CUSTOM_PLAN_IMAGE = "/meiker/images/legal-team.jpg";

const FEATURES: readonly string[] = [
  "Informe de registrabilidad incluido",
  "Gestión completa ante el SENADI",
  "Seguimiento directo de tu trámite",
  "Vigilancia marcaria por 10 años",
  "Acompañamiento por correo electrónico y teléfono",
];

const PHONE_NUMBER = "099 356 0952";

/**
 * `.framer-nkSep .framer-styles-preset-c36khm` — Manrope 16 / 400 / 150%, `#575757`.
 * Used by the month label, both short descriptions and every feature row.
 */
const BODY_TEXT =
  "text-left font-[family-name:var(--fileon-font-sans)] text-[16px] leading-[150%] font-normal tracking-[0em] text-[var(--fileon-body,#614c49)]";

/**
 * `.framer-oYnH7 .framer-styles-preset-1pwzd39` — Manrope 16 / 500 / 150%.
 * Used by the two pricing pills and the "Start today" label.
 */
const PILL_TEXT =
  "font-[family-name:var(--fileon-font-sans)] text-[16px] leading-[150%] font-semibold tracking-[-0.01em]";

/**
 * The CSS dump encodes the "Secondary Button" hover as instant `position` swaps
 * (`.framer-v-12ea8fe.hover .framer-yu6vuw` etc. — Framer tweens them from JS, so
 * the stylesheet carries no duration). They are re-expressed here as transforms,
 * matching the easing the rest of the page uses.
 */

interface PricingSectionProps {
  className?: string;
}

/**
 * Pricing options with a concise section heading and two plan cards.
 */
export function PricingSection({ className }: PricingSectionProps) {
  return (
    // .framer-1c3bnwr — padding 80/20 → 100/30 → 130/30, overflow hidden
    <section
      data-framer-name="Pricing Section"
      className={cn(
        "relative flex w-full flex-none flex-row items-center justify-center gap-[10px] overflow-hidden",
        "bg-[var(--fileon-brisa)]",
        "px-[20px] py-[80px] md:px-[30px] md:py-[100px] xl:py-[130px]",
        className,
      )}
    >
      {/* Container — .framer-1a3h2fr */}
      <div className="relative flex h-min w-px max-w-[1300px] flex-1 flex-row items-center justify-center gap-[10px] p-0">
        {/* Content — .framer-1ufbjls, gap 40 → 50 → 0 */}
        <div className="relative flex h-min w-px flex-1 flex-col items-start justify-start gap-[40px] p-0 md:gap-[50px] xl:gap-[44px]">
          <Reveal className="w-full" fromScale={1}>
            <header className="max-w-[900px]">
              <p className="mb-4 flex items-center gap-[10px] font-[family-name:var(--fileon-font-mono)] text-[13px] font-normal leading-[150%] tracking-[0.08em] text-[var(--fileon-ink)] uppercase md:text-[14px]">
                <span aria-hidden="true" className="h-[10px] w-[10px] flex-none bg-[var(--fileon-coral)]" />
                Registro de marca
              </p>
              <h1 className="meiker-section-title max-w-[820px] text-balance font-[family-name:var(--fileon-font-sans)] text-[clamp(2.75rem,5vw,4.25rem)] font-medium leading-[1.02] tracking-[-0.055em] text-[var(--fileon-heading)]">
                Protege tu marca <span className="text-[var(--fileon-coral)]">con claridad.</span>
              </h1>
              <p className="mt-5 max-w-[680px] text-[16px] leading-[1.6] text-[var(--fileon-body)] md:text-[18px]">
                Elige el acompañamiento legal adecuado para registrar y cuidar el activo que distingue tu negocio.
              </p>
            </header>
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
          "rounded-[36px] border border-[color:rgb(255_91_53_/_28%)] bg-[var(--fileon-white,#ffffff)] shadow-[0_16px_40px_rgba(70,19,18,0.075)]",
        )}
      >
        {/* Content Wrapper — .framer-1i1a8ut, gap 20 → 50 → 120 */}
        <div className="relative flex h-min w-full flex-none flex-col items-start justify-start gap-[20px] p-0 md:w-px md:flex-1 md:gap-[50px] xl:max-w-[330px] xl:gap-[120px]">
          {/* Button & Price — .framer-1p5p26j, gap 20 → 30 → 50 */}
          <div className="relative flex h-min w-full flex-none flex-col items-start justify-start gap-[20px] p-0 md:gap-[30px] xl:gap-[50px]">
            {/* Button Wrapper — .framer-xjb9l9 */}
            <div className="relative flex h-min w-full flex-none flex-row items-center justify-start gap-[10px] p-0">
              <PricingPill
                label="Esencial"
                className="border-[color:rgb(255_91_53_/_28%)] bg-[var(--fileon-coral)] text-white"
              />
            </div>

            {/* Price & Month — .framer-zd7jbq */}
            <div className="relative flex h-min w-full flex-none flex-col items-start justify-start gap-0 p-0">
              {/* Price — .framer-1pj4fe + preset 4rqwjt (36 → 40 → 48) */}
              <div className="relative h-auto w-full flex-none break-words whitespace-pre-wrap">
                <h3 className="text-left font-[family-name:var(--fileon-font-serif)] text-[36px] leading-[120%] font-normal tracking-[0em] text-[var(--fileon-heading)] md:text-[40px] xl:text-[48px]">
                  <span aria-hidden="true" className="mr-3 align-middle text-[0.55em] text-[var(--fileon-muted)] line-through decoration-[var(--fileon-coral)]">$690</span>

                  <span className="sr-only">Antes $690, ahora </span>

                  $460
                </h3>
              </div>
              {/* Month — .framer-11fkyqe */}
              <div className="relative h-auto w-full flex-none break-words whitespace-pre-wrap">
                <p className={BODY_TEXT}>/ Registro de marca</p>
              </div>
            </div>
          </div>

          {/* Short Description — .framer-9g2gaz */}
          <div className="relative h-auto w-full flex-none [text-wrap:balance]">
            <p className={BODY_TEXT}>
              Servicio valorado en $690. Escríbenos hoy y accede al plan con descuento:
              precio fijo, sin costos ocultos.
            </p>
          </div>
        </div>

        {/* Line — .framer-cw0fdv : 100%×1 → 1×257 → 1×286 */}
        <div className="relative h-px w-full flex-none overflow-hidden bg-[color:rgb(70_19_18_/_24%)] md:h-[257px] md:w-px xl:h-[286px]" />

        {/* List & Button Wrapper — .framer-khb8rh, gap 25 → 50 → 75 */}
        <div className="relative flex h-min w-full flex-none flex-col items-start justify-start gap-[25px] p-0 md:w-px md:flex-1 md:gap-[50px] xl:gap-[75px]">
          {/* List Wrapper — .framer-1i94p6s, gap 8 → 10 → 14 */}
          <div className="relative flex h-min w-full flex-none flex-col items-start justify-start gap-[8px] p-0 md:gap-[10px] xl:gap-[14px]">
            {FEATURES.map((feature) => (
              // .framer-11t1jeh-container → Pricing List 01 .framer-1ob9wwr
              <div key={feature} className="relative h-auto w-full flex-none">
                <div className="relative flex h-min w-full flex-row items-center justify-start gap-[10px] p-0">
                  {/* Icon — .framer-1h59sfi */}
                  <div className="grid h-[22px] w-[22px] flex-none place-items-center rounded-full bg-[var(--fileon-coral)] text-white">
                    <Check aria-hidden="true" size={14} strokeWidth={2.8} />
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
  return <MotionArrowButton href="/contacto" variant="coral">Quiero aplicar al descuento</MotionArrowButton>;
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
          "relative flex h-min w-full flex-col items-center justify-center gap-[20px] overflow-hidden rounded-[36px] border border-white/60 p-[20px] shadow-[0_16px_40px_rgba(70,19,18,0.12)]",
          "md:flex-row md:p-[50px]",
          "xl:w-full xl:gap-[10px] xl:p-[30px]",
        )}
      >
        {/* Content Wrapper — .framer-genzu7, gap 30 → 60 → 149 */}
        <div className="relative z-[3] flex h-min w-full flex-none flex-col items-start justify-start gap-[30px] rounded-[32px] border border-[color:rgb(70_19_18_/_7%)] bg-[var(--fileon-white,#ffffff)] p-[20px] shadow-[0_12px_34px_rgba(70,19,18,0.08)] md:w-px md:flex-1 md:gap-[60px] md:p-[30px] xl:gap-[149px]">
          {/* Title Wrapper — .framer-1lnjv2h, gap 10 → 14 */}
          <div className="relative flex h-min w-full flex-none flex-col items-start justify-start gap-[10px] p-0 md:gap-[14px]">
            {/* Title — .framer-15cs5dq + preset 1lcxu9v (24 → 28 → 32) */}
            <div className="relative h-auto w-full flex-none break-words whitespace-pre-wrap">
              <h5 className="text-left font-[family-name:var(--fileon-font-serif)] text-[24px] leading-[130%] font-normal tracking-[0em] text-[var(--fileon-heading)] md:text-[28px] xl:text-[32px]">
                Plan a medida
              </h5>
            </div>
            {/* Short Description — .framer-1sqfdk6 */}
            <div className="relative h-auto w-full flex-none [text-wrap:balance]">
              <p className={BODY_TEXT}>
                Diseñamos un plan legal a la medida de tu negocio, con soporte flexible, estrategia y representación
                para asuntos complejos o continuos.
              </p>
            </div>
          </div>

          {/* Contact Number — .framer-n9lfmt */}
          <div className="relative flex h-min w-full flex-none flex-row items-center justify-start gap-[10px] p-0">
            {/* Text — .framer-n2cl4e + preset 4hunf2 */}
            <div className="relative h-auto w-auto flex-none [text-wrap:balance]">
              <p className="text-left font-[family-name:var(--fileon-font-sans)] text-[18px] leading-[150%] font-medium tracking-[0em] text-[var(--fileon-cacao)]">
                Llámanos:
              </p>
            </div>
            {/* Number — .framer-ipxrlk, link preset 1kyr8x0 */}
            <div className="relative h-auto w-px flex-1 [text-wrap:balance]">
              <p className={BODY_TEXT}>
                <a
                  href="tel:+593993560952"
                  className="text-[var(--fileon-body,#614c49)] no-underline transition-colors duration-300 ease-[cubic-bezier(0.44,0,0.56,1)] hover:text-[var(--fileon-cacao)]"
                >
                  {PHONE_NUMBER}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* .framer-443prm — full-bleed backdrop */}
        <div className="absolute top-0 left-0 z-[1] h-full w-full flex-none overflow-hidden rounded-[36px]">
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
