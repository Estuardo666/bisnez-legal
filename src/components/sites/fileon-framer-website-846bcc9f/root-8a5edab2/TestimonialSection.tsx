/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef, useState } from "react";

import { Reveal } from "@/components/sites/fileon-framer-website-846bcc9f/shared/Reveal";
import { cn } from "@/lib/utils";

const ASSETS = "/sites/fileon-framer-website-846bcc9f/root-8a5edab2/images";
const STAR_FULL = `${ASSETS}/9ihf1DLBVzmuEyl8rEzkmWaZm8.svg`;
const STAR_HALF = `${ASSETS}/ofLbu5mL76J5YREgU64729IO7F8.svg`;
const AVATAR = "/meiker/images/founder-portrait.jpg";
const QUOTE_MARK = `${ASSETS}/c7l9SnoBhlRXHwyD9o41pd04tw.svg`;

const AUTHOR_NAME = "Augusto Abendaño";
const AUTHOR_ROLE = "Socio fundador, Meiker";
const RATING_LABEL = "4.8/5 Calificación verificada";

/** Desktop / tablet slideshow — three distinct quotes, 992px cards. */
const WIDE_QUOTES: readonly string[] = [
  "Meiker convirtió un proceso legal complejo en pasos claros. Hoy nuestra marca está protegida y podemos crecer con tranquilidad.",
  "Entendimos qué debíamos proteger, cuánto costaba y qué iba a pasar en cada etapa. Una asesoría realmente cercana y estratégica.",
  "Su enfoque preventivo nos ayudó a tomar decisiones antes de perder valor. Se nota que son abogados que sí saben de negocios.",
];

/** Mobile slideshow — the short quote, repeated exactly as the live site emits it. */
const NARROW_QUOTES: readonly string[] = [
  "Protección legal clara para negocios que quieren crecer.",
  "Protección legal clara para negocios que quieren crecer.",
  "Protección legal clara para negocios que quieren crecer.",
];

const WIDE_CARD_WIDTH = 992;
const NARROW_CARD_WIDTH = 350;
const SLIDE_GAP = 10;
const SLIDE_INTERVAL = 5000;

function StarRow() {
  return (
    // Icon Wrapper
    <div className="relative flex h-min w-full flex-none flex-row items-center justify-start gap-[5px] p-0">
      {[STAR_FULL, STAR_FULL, STAR_FULL, STAR_FULL, STAR_HALF].map((src, index) => (
        <div
          key={`${src}-${index}`}
          className="relative aspect-square h-[22px] w-[22px] flex-none overflow-hidden"
        >
          <div className="absolute inset-0 rounded-[inherit]">
            <img
              src={src}
              alt=""
              className="block h-full w-full rounded-[inherit] object-contain object-center"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function RatingBlock({ narrow }: { narrow: boolean }) {
  return (
    // Icon & Text Wrapper
    <div
      className={cn(
        "relative flex h-min max-w-[152px] flex-col items-start gap-[10px] overflow-hidden p-0",
        narrow ? "w-full flex-none" : "w-px flex-1",
      )}
    >
      <StarRow />
      {/* Text */}
      <div className="relative h-auto w-full flex-none [text-wrap:balance]">
        <p className="text-left font-[family-name:var(--fileon-font-sans)] text-[16px] leading-[150%] font-normal text-[var(--fileon-body)]">
          {RATING_LABEL}
        </p>
      </div>
    </div>
  );
}

function AuthorBlock({ narrow }: { narrow: boolean }) {
  return (
    // Image & Designation Wrapper
    <div
      className={cn(
        "relative flex h-min flex-row items-center justify-start gap-[20px] p-0",
        narrow ? "w-full flex-none" : "w-px flex-1",
      )}
    >
      <div className="relative aspect-square h-[61px] w-[61px] flex-none overflow-hidden rounded-[100px]">
        <div className="absolute inset-0 rounded-[inherit]">
          <img
            src={AVATAR}
            alt="Image"
            className="block h-full w-full rounded-[inherit] object-contain object-center"
          />
        </div>
      </div>
      {/* Author Name & Designation */}
      <div className="relative flex h-min w-px flex-1 flex-col items-start gap-[5px] overflow-hidden p-0">
        <div className="relative h-auto w-full flex-none [text-wrap:balance]">
          <h6 className="text-left font-[family-name:var(--fileon-font-serif)] text-[22px] leading-[135%] font-normal text-[var(--fileon-heading)] xl:text-[24px]">
            {AUTHOR_NAME}
          </h6>
        </div>
        <div className="relative h-auto w-full flex-none [text-wrap:balance]">
          <p className="text-left font-[family-name:var(--fileon-font-sans)] text-[16px] leading-[150%] font-normal text-[var(--fileon-body)]">
            {AUTHOR_ROLE}
          </p>
        </div>
      </div>
    </div>
  );
}

interface TestimonialCardProps {
  quote: string;
  /** `true` renders the mobile card variant (350px, stacked, no divider or quote mark). */
  narrow?: boolean;
}

function TestimonialCard({ quote, narrow = false }: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "relative flex h-min flex-col items-start justify-start p-0",
        narrow ? "w-[350px] gap-[40px]" : "w-[992px] gap-[60px]",
      )}
    >
      {/* Title */}
      <div className="relative h-auto w-full flex-none [text-wrap:balance]">
        <h4
          className={cn(
            "text-left font-[family-name:var(--fileon-font-serif)] leading-[125%] font-normal text-[var(--fileon-heading)]",
            narrow ? "text-[32px]" : "text-[36px] xl:text-[40px]",
          )}
        >
          {quote}
        </h4>
      </div>

      {/* Icon & Designation Wrapper */}
      <div
        className={cn(
          "relative flex h-min w-full flex-none p-0",
          narrow
            ? "flex-col items-start justify-start gap-[20px]"
            : "flex-row items-center justify-center gap-[60px]",
        )}
      >
        <RatingBlock narrow={narrow} />
        {!narrow && (
          // Line
          <div className="relative h-[60px] w-px flex-none overflow-hidden bg-[color:rgb(70_19_18_/_24%)]" />
        )}
        <AuthorBlock narrow={narrow} />
      </div>

      {!narrow && (
        // Icon (oversized quote mark)
        <div className="absolute right-0 -bottom-[40px] z-[1] aspect-square h-[140px] w-[140px] flex-none overflow-hidden">
          <div className="absolute inset-0 rounded-[inherit]">
            <img
              src={QUOTE_MARK}
              alt="Icon"
              className="block h-full w-full rounded-[inherit] object-contain object-center"
            />
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * Framer slideshow: cards sit on one horizontal track, only the active card is
 * fully opaque — the rest are pushed back in 3D exactly as the live page does
 * (`translateX(190px) scale(0.6) rotateY(80deg)` at 20% opacity). The live
 * controls are rendered with `opacity: 0; pointer-events: none`, so there are no
 * user-facing controls; the track simply advances on its own.
 */
function Slideshow({
  quotes,
  narrow,
  cardWidth,
}: {
  quotes: readonly string[];
  narrow: boolean;
  cardWidth: number;
}) {
  const [index, setIndex] = useState(0);
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced.current) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % quotes.length);
    }, SLIDE_INTERVAL);
    return () => window.clearInterval(id);
  }, [quotes.length]);

  return (
    <section
      className="relative m-0 flex h-full max-h-full w-full max-w-full flex-row place-items-center p-0 select-none"
      aria-roledescription="carousel"
    >
      <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none p-[inherit] [perspective:1200px] select-none">
        <ul
          className="m-0 flex h-full max-h-full w-full max-w-full list-none flex-row place-items-center p-0 transition-transform duration-700 ease-out"
          style={{
            gap: `${SLIDE_GAP}px`,
            transform: `translateX(-${index * (cardWidth + SLIDE_GAP)}px)`,
          }}
        >
          {quotes.map((quote, i) => (
            <li key={`${i}-${quote.slice(0, 24)}`} className="contents">
              <div
                className="relative h-full w-full shrink-0 transition-[opacity,transform] duration-700 ease-out will-change-transform select-none"
                style={
                  i === index
                    ? { opacity: 1, transform: "none" }
                    : {
                        opacity: 0.2,
                        transform: "translateX(190px) scale(0.6) rotateY(80deg)",
                      }
                }
                aria-hidden={i !== index}
              >
                <TestimonialCard quote={quote} narrow={narrow} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

interface TestimonialSectionProps {
  className?: string;
}

/**
 * "Testimonial Section" — scroll-revealed section title on the left, an
 * auto-advancing quote slideshow on the right (stacked below on tablet/mobile).
 */
export function TestimonialSection({ className }: TestimonialSectionProps) {
  return (
    <section
      className={cn(
        "relative flex w-full flex-none flex-col items-center justify-start gap-[10px] overflow-hidden",
        "bg-[var(--fileon-brisa)]",
        "px-[20px] pt-[40px] pb-[80px]",
        "md:px-[30px] md:pt-[50px] md:pb-[100px]",
        "xl:pt-[65px] xl:pb-[130px]",
        className,
      )}
    >
      {/* Container */}
      <div className="relative flex h-min w-full max-w-[1300px] flex-none flex-row items-center justify-center gap-[10px] p-0">
        {/* Content */}
        <div className="relative flex h-min w-px flex-1 flex-col items-start gap-[40px] p-0 md:flex-col md:gap-[50px] xl:flex-row xl:items-start xl:gap-[170px]">
          {/* Section Title 01 */}
          <Reveal className="h-auto w-auto flex-none" fromScale={1}>
            <div className="relative flex h-min w-min flex-row items-center justify-start gap-[10px] p-0">
              {/* Icon */}
              <div className="relative h-[10px] w-[10px] flex-none overflow-hidden bg-[var(--fileon-coral)]" />
              {/* Title */}
              <div className="relative h-auto w-auto flex-none whitespace-pre">
                <p className="text-left font-[family-name:var(--fileon-font-mono)] text-[14px] leading-[150%] font-normal tracking-normal text-[var(--fileon-ink)] uppercase">
                  Lo que dicen nuestros clientes
                </p>
              </div>
            </div>
          </Reveal>

          {/* Slideshow — wide cards on tablet & desktop */}
          <div className="relative hidden h-[450px] w-full flex-none md:block xl:w-px xl:flex-1">
            <Slideshow quotes={WIDE_QUOTES} narrow={false} cardWidth={WIDE_CARD_WIDTH} />
          </div>

          {/* Slideshow — narrow cards on mobile */}
          <div className="relative h-[480px] w-full flex-none md:hidden">
            <Slideshow quotes={NARROW_QUOTES} narrow cardWidth={NARROW_CARD_WIDTH} />
          </div>
        </div>
      </div>
    </section>
  );
}
