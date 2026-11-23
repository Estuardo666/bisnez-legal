/* eslint-disable @next/next/no-img-element */
"use client";


import { Reveal } from "@/components/sites/fileon-framer-website-846bcc9f/shared/Reveal";
import { MotionArrowButton } from "@/components/sites/fileon-framer-website-846bcc9f/shared/MotionArrowButton";
import { cn } from "@/lib/utils";

const ASSETS = "/sites/fileon-framer-website-846bcc9f/root-8a5edab2/images";

const CARD_ILLUSTRATION = `${ASSETS}/y0aoDt88F21BV1gXi4qELBus.svg`;
const CARD_ONE_BACKGROUND = "/meiker/images/agreement.jpg";
const STAT_ICON = `${ASSETS}/MfOB64mcIPl4UU1zU4e1ipbMGSs.svg`;
const CARD_TWO_BACKGROUND = "/meiker/images/team-meeting.jpg";

/** .framer-styles-preset-n4ys0b — Geist Mono 14px / 150%, uppercase, 0em. */
const MONO_LABEL =
  "font-[family-name:var(--fileon-font-mono)] text-[14px] leading-[150%] font-normal uppercase tracking-[0em]";

/** .framer-styles-preset-c36khm — Manrope 16px / 150%, 400. */
const BODY_TEXT =
  "font-[family-name:var(--fileon-font-sans)] text-[16px] leading-[150%] font-normal tracking-[0em]";

/**
 * Primary Button 01 / 02 — .framer-1r2Ll.framer-1vlt3ha.
 * Desktop renders the two-copy hover swap (variant v-1vlt3ha); tablet/mobile
 * ship the static variant (v-mpuqe), so the swap is gated behind `xl:`.
 * The CSS dump encodes the swap as instant `position` changes (Framer tweens
 * them from JS, so no duration/easing survives into the stylesheet). They are
 * re-expressed here as transforms so they can actually animate — same timing
 * the sibling sections use.
 */

/** Primary Button 01 — pill CTA whose label and arrow swap places on hover (xl only). */
function GuidanceButton() {
  return <MotionArrowButton href="/contacto" variant="coral">Quiero mi asesoría gratis</MotionArrowButton>;
}

/**
 * Guidance Section — .framer-1htzal2.
 *
 * The live section is a two-card call-to-action (no accordion / FAQ markup is
 * present in the capture). Framer emits each block up to three times inside
 * `ssr-variant hidden-*` wrappers; those duplicates are collapsed here into a
 * single tree driven by responsive utilities:
 *   base  → mobile  (max-width: 809.98px)
 *   md:   → tablet  (810px – 1379.98px)
 *   xl:   → desktop (min-width: 1380px)
 */
export function GuidanceSection() {
  return (
    <section
      data-framer-name="Guidance Section"
      className="relative flex h-min w-full flex-none flex-row items-center justify-center gap-[10px] overflow-hidden bg-[var(--fileon-bg,#fffaf4)] px-[20px] py-[80px] md:px-[30px] md:py-[100px] xl:py-[130px]"
    >
      {/* Container — .framer-8cqs8l */}
      <div className="relative flex h-min w-px max-w-[1300px] flex-1 shrink-0 basis-0 flex-row items-center justify-center gap-[10px] overflow-visible p-0">
        {/* Content — .framer-1ovlr26 */}
        <div className="relative flex h-min w-px flex-1 shrink-0 basis-0 flex-col items-start justify-start gap-[40px] overflow-visible p-0 md:gap-[50px] xl:gap-[60px]">
          {/* Title Wrapper — .framer-1vgb9sp */}
          <div className="relative flex h-min w-full flex-none flex-col items-start justify-start gap-[10px] overflow-visible p-0 md:max-w-[500px] xl:max-w-[550px]">
            {/* Section Title 01 — .framer-1gnz6fr */}
            <Reveal className="relative h-auto w-auto flex-none" fromScale={1}>
              <div className="relative flex h-min w-min flex-none flex-row items-center justify-start gap-[10px] overflow-visible p-0">
                {/* Icon — .framer-18gvpqs */}
                <div className="relative h-[10px] w-[10px] flex-none overflow-hidden bg-[var(--fileon-coral)]" />
                {/* Title — .framer-uioks9 */}
                <div className="relative h-auto w-auto flex-none">
                  <p className={cn(MONO_LABEL, "text-left whitespace-pre text-[var(--fileon-cacao)]")}>
                    Hablemos de tu negocio
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Title — .framer-8ko8pp / preset-1x3pol9 */}
            <div className="relative h-auto w-full flex-none [text-wrap:balance]">
              <h2 className="text-left font-[family-name:var(--fileon-font-serif)] text-[38px] leading-[120%] font-normal tracking-[0em] text-[var(--fileon-heading)] md:text-[46px] xl:text-[56px]">
                Protege hoy{" "}
                <span className="text-[var(--fileon-black-50)]">lo que construiste.</span>
              </h2>
            </div>
          </div>

          {/* Card Wrapper — .framer-17h4u94 */}
          <div className="relative flex h-min w-full flex-none flex-col items-start justify-start gap-[20px] overflow-visible p-0 xl:flex-row xl:items-center xl:gap-[10px]">
            {/* Guidance Card 01 — .framer-1s0wz9w */}
            <div className="relative flex h-min w-full flex-none flex-col items-center justify-center gap-[20px] overflow-hidden rounded-[32px] p-[20px] md:flex-row md:p-[50px] xl:w-px xl:max-w-[645px] xl:flex-1 xl:shrink-0 xl:basis-0 xl:gap-[10px] xl:p-[60px]">
              {/* Content Wrapper — .framer-1k0j0mj */}
              <div className="relative z-[3] flex h-min w-full flex-none flex-col items-start justify-start gap-[30px] overflow-visible rounded-[32px] bg-[var(--fileon-white,#ffffff)] p-[20px] md:w-px md:flex-1 md:shrink-0 md:basis-0 md:items-center md:gap-[40px] md:p-[30px]">
                {/* Short Description — .framer-4e06ta */}
                <div className="relative h-auto w-full flex-none [text-wrap:balance]">
                  <p
                    className={cn(
                      BODY_TEXT,
                      "text-left text-[var(--fileon-body,#614c49)] md:text-center",
                    )}
                  >
                    Agenda tu asesoría gratuita y descubre qué necesita tu negocio para operar y crecer con seguridad
                    jurídica.
                  </p>
                </div>

                {/* .framer-ey4kpi */}
                <div className="relative flex h-min w-full flex-none flex-col items-center justify-center gap-[60px] overflow-clip p-0">
                  {/* Text Wrapper — .framer-16ggogz */}
                  <Reveal className="relative h-auto w-auto flex-none" fromScale={0.7}>
                    <div className="relative flex h-min w-min flex-none flex-row items-center justify-center gap-[14px] overflow-visible rounded-[24px] bg-[var(--fileon-brisa)] px-[10px] py-[5px] md:gap-[94px] md:py-[14px] md:pr-[20px] md:pl-[14px]">
                      {/* Title wrapper — .framer-r23w66 */}
                      <div className="relative flex h-min w-min flex-none flex-row items-center justify-start gap-[5px] overflow-visible p-0">
                        {/* Round — .framer-1jns2fs */}
                        <div className="relative aspect-square h-auto w-[12px] flex-none overflow-visible rounded-[100px] bg-[var(--fileon-coral)]" />
                        {/* Title — .framer-fgiepx */}
                        <div className="relative h-auto w-auto flex-none">
                          <p className={cn(MONO_LABEL, "text-center whitespace-pre text-[var(--fileon-cacao)]")}>
                            CASO MEIKER 024
                          </p>
                        </div>
                      </div>
                      {/* Title — .framer-yes3i6 */}
                      <div className="relative h-auto w-auto flex-none">
                        <p
                          className={cn(
                            MONO_LABEL,
                            "text-center whitespace-pre text-[var(--fileon-body,#614c49)]",
                          )}
                        >
                          DISPONIBLE
                        </p>
                      </div>
                    </div>
                  </Reveal>

                  {/* .framer-15ytg2j */}
                  <Reveal className="w-[70%] md:w-[216px]" fromScale={0.7}>
                    <div className="relative aspect-[1.27059] h-auto w-full flex-none overflow-clip">
                      <div className="absolute inset-0 rounded-[inherit]">
                        <img
                          src={CARD_ILLUSTRATION}
                          alt="Image"
                          className="block h-full w-full rounded-[inherit] object-contain object-center"
                        />
                      </div>
                    </div>
                  </Reveal>
                </div>
              </div>

              {/* Card background — .framer-1ip0zlr */}
              <div className="absolute top-0 left-0 z-[1] h-full w-full flex-none overflow-clip rounded-[32px]">
                <div className="absolute inset-0 rounded-[inherit]">
                  <img
                    src={CARD_ONE_BACKGROUND}
                    alt="Image"
                    className="block h-full w-full rounded-[inherit] object-cover object-center"
                  />
                </div>
              </div>
            </div>

            {/* Guidance Card 02 — .framer-1eg85v3 */}
            <Reveal className="w-full xl:w-px xl:flex-1 xl:shrink-0 xl:basis-0" fromScale={0.2}>
            <div className="relative flex h-min w-full flex-none flex-col items-center justify-center gap-[20px] overflow-hidden rounded-[32px] p-[20px] md:flex-row md:p-[50px] xl:max-w-[645px] xl:gap-[10px] xl:p-[30px]">
                {/* Content Wrapper — .framer-1spep3 */}
                <div className="relative z-[3] flex h-min w-full flex-none flex-col items-start justify-start gap-[60px] overflow-visible p-0 md:w-px md:flex-1 md:shrink-0 md:basis-0 md:gap-[120px] xl:gap-[290px]">
                  {/* Number & Short Description — .framer-177pfw3 */}
                  <div className="relative flex h-min w-full flex-none flex-col items-start justify-start gap-[10px] overflow-visible p-0 md:max-w-[300px] md:gap-[20px] xl:max-w-[240px]">
                    {/* Number & Icon — .framer-gmuhub */}
                    <div className="relative flex h-min w-min flex-none flex-row items-center justify-center gap-[5px] overflow-visible p-0 md:gap-[10px]">
                      {/* Number — .framer-ekl69m / preset-4rqwjt */}
                      <div className="relative h-auto w-auto flex-none whitespace-pre">
                        <h3 className="text-left font-[family-name:var(--fileon-font-serif)] text-[36px] leading-[120%] font-normal tracking-[0em] text-[var(--fileon-white,#ffffff)] md:text-[40px] xl:text-[48px]">
                          98%
                        </h3>
                      </div>
                      {/* Icon — .framer-1owfhnc */}
                      <div className="relative aspect-square h-auto w-[35px] flex-none overflow-clip md:w-[45px]">
                        <div className="absolute inset-0 rounded-[inherit]">
                          <img
                            src={STAT_ICON}
                            alt="Icon"
                            className="block h-full w-full rounded-[inherit] object-contain object-center"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Short Description — .framer-1dhrivo */}
                    <div className="relative h-auto w-full flex-none [text-wrap:balance]">
                      <p className={cn(BODY_TEXT, "text-left text-[var(--fileon-white,#ffffff)]")}>
                        Tasa de resolución. Nos enfocamos en soluciones prácticas y resultados favorables.
                      </p>
                    </div>
                  </div>

                  {/* .framer-2shqxh-container */}
                  <Reveal className="relative h-auto w-auto flex-none" fromScale={0.8}>
                    <GuidanceButton />
                  </Reveal>
                </div>

                {/* Card background — .framer-1gmpozz */}
                <div className="absolute top-0 left-0 z-[1] h-full w-full flex-none overflow-clip rounded-[32px]">
                  <div className="absolute inset-0 rounded-[inherit]">
                    <img
                      src={CARD_TWO_BACKGROUND}
                      alt="Image"
                      className="block h-full w-full rounded-[inherit] object-cover object-center"
                    />
                  </div>
                </div>

                {/* Vector — .framer-15l2v9d (notched corner cut in the section background) */}
                <div className="absolute right-[-2px] bottom-[-10px] z-[1] aspect-[6.33333] h-auto w-[150px] flex-none [image-rendering:pixelated] md:bottom-[-3px] md:w-[250px] xl:bottom-[-2px] xl:w-[266px]">
                  <div className="h-full w-full [aspect-ratio:inherit]">
                    <svg
                      viewBox="-1 -1 266 42"
                      fill="none"
                      className="h-full w-full"
                      aria-hidden="true"
                    >
                      <path
                        d="M27.3132 0L0 40H263.317V0H27.3132Z"
                        fill="var(--fileon-bg,#fffaf4)"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
