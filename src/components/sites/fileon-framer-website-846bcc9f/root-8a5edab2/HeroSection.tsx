import Image from "next/image";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/sites/fileon-framer-website-846bcc9f/shared/Reveal";
import { MotionArrowButton } from "@/components/sites/fileon-framer-website-846bcc9f/shared/MotionArrowButton";

const HERO_IMAGE = "/images/hero-team-1.webp";

interface HeroSectionProps {
  className?: string;
}

/**
 * Meiker hero — full-bleed photo, brand message, and registered mark CTA.
 *
 * Values are taken verbatim from raw/hero.dom.txt + raw/hero.css.txt.
 * Breakpoints: base = mobile (≤809px), `md:` = 810px (tablet), `xl:` = 1380px (desktop).
 */
export function HeroSection({ className }: HeroSectionProps) {
  return (
    <section
      data-framer-name="Hero Section"
      className={cn(
        "relative flex h-[95vh] w-full flex-none flex-row items-center justify-center gap-[10px] overflow-hidden",
        // The solid site header now takes up its own 70px above the hero.
        // Keep the original content position by reducing the hero's top padding.
        "px-[20px] pt-[70px] pb-[40px] md:px-[30px] md:pt-[90px] md:pb-[50px] xl:pt-[310px]",
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
          alt="Equipo de Meiker reunido en la oficina"
          fill
          priority
          sizes="100vw"
          className="block h-full w-full object-cover object-[62%_center] md:object-center"
        />
      </Reveal>

      {/* Cacao scrim keeps the photo atmospheric while making the white hero copy legible. */}
      <div
        data-framer-name="Linear"
        className="absolute top-0 left-0 z-[1] h-full w-full overflow-hidden"
        style={{
          background:
            "linear-gradient(90deg, rgba(70,19,18,0.62) 0%, rgba(70,19,18,0.30) 54%, rgba(70,19,18,0.08) 100%), linear-gradient(0deg, rgba(70,19,18,0.18), transparent 55%)",
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
              {/* Brand pretitle */}
              <div
                data-framer-name="Icon & Text Wrapper"
                className="relative flex w-min flex-none flex-row items-center justify-start gap-[10px] border-b border-b-[color:rgb(70_19_18_/_24%)] pb-[10px]"
              >
                <div data-framer-name="Text" className="relative h-auto w-auto flex-none whitespace-pre">
                  <p className="text-left text-[14px] leading-[150%] font-normal tracking-[0em] text-[var(--fileon-white,#ffffff)] uppercase [font-family:var(--fileon-font-mono)]">
                    MEIKER · PROPIEDAD INTELECTUAL EN ECUADOR
                  </p>
                </div>
              </div>

              {/* Short Description */}
              <div data-framer-name="Short Description" className="relative h-auto w-full flex-none">
                <h1 className="max-w-[680px] text-left text-[clamp(2.35rem,8vw,3.5rem)] leading-[1.04] font-semibold tracking-[-0.04em] text-balance text-[var(--fileon-white,#ffffff)] [font-family:var(--fileon-font-serif)]">
                  Abogados que sí saben de negocios
                </h1>
                <p className="max-w-[510px] text-left text-[15px] leading-[1.5] font-normal tracking-[0em] text-[var(--fileon-white,#ffffff)] md:text-[17px]">
                  Protegemos tu marca y los activos que le dan valor a tu negocio, para que operes y crezcas con seguridad jurídica. Somos abogados empresariales, especialistas en propiedad intelectual en Ecuador.
                </p>
              </div>
            </div>

            {/* Primary Button */}
            <Reveal className="relative flex h-auto w-auto flex-none flex-wrap gap-3" fromScale={0.8}>
              <MotionArrowButton href="/servicios/registro-de-marca" variant="coral">
                Quiero registrar mi marca
              </MotionArrowButton>
              <MotionArrowButton href="/servicios" variant="brisa">
                Ver más servicios
              </MotionArrowButton>
            </Reveal>
          </div>

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
          <path d="M27.3132 0L0 40H263.317V0H27.3132Z" fill="var(--fileon-bg-warm, #FFEACA)" />
        </svg>
      </div>
    </section>
  );
}
