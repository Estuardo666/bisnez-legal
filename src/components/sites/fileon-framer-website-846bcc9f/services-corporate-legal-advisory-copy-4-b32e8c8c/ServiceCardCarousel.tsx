"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

export type ServiceCard = {
  readonly title: string;
  readonly body: string;
  readonly image?: string;
};

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function ServiceCardCarousel({ cards, label }: { cards: readonly ServiceCard[]; label: string }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const sync = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const slides = Array.from(track.children) as HTMLElement[];
    const left = track.scrollLeft;
    let nearest = 0;
    slides.forEach((slide, index) => {
      if (Math.abs(slide.offsetLeft - track.offsetLeft - left) < Math.abs(slides[nearest].offsetLeft - track.offsetLeft - left)) {
        nearest = index;
      }
    });
    const end = left + track.clientWidth >= track.scrollWidth - 2;
    setAtStart(left <= 2);
    setAtEnd(end);
    setActive(end ? slides.length - 1 : nearest);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(sync);
    };
    sync();
    track.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      track.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [sync]);

  const goTo = (index: number) => {
    const track = trackRef.current;
    const slide = track?.children[index] as HTMLElement | undefined;
    if (!track || !slide) return;
    track.scrollTo({
      left: slide.offsetLeft - track.offsetLeft,
      behavior: prefersReducedMotion() ? "auto" : "smooth",
    });
  };

  const step = (direction: 1 | -1) => goTo(Math.min(Math.max(active + direction, 0), cards.length - 1));

  return (
    <div role="region" aria-roledescription="carrusel" aria-label={label}>
      <div className="mb-6 flex items-center justify-between gap-4">
        <p className="text-[14px] font-semibold tabular-nums tracking-[0.08em] text-[var(--fileon-muted)]" aria-live="polite">
          <span className="text-[var(--fileon-heading)]">{String(active + 1).padStart(2, "0")}</span>
          {" / "}
          {String(cards.length).padStart(2, "0")}
        </p>
        <div className="flex gap-2">
          <CarouselButton label="Tarjeta anterior" disabled={atStart} onClick={() => step(-1)}>
            <ArrowLeft className="h-5 w-5" aria-hidden />
          </CarouselButton>
          <CarouselButton label="Tarjeta siguiente" disabled={atEnd} onClick={() => step(1)}>
            <ArrowRight className="h-5 w-5" aria-hidden />
          </CarouselButton>
        </div>
      </div>

      <div
        ref={trackRef}
        tabIndex={0}
        aria-label={`${label}: desliza o usa las flechas para ver más`}
        className="-my-4 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain py-4 outline-none [scrollbar-width:none] focus-visible:ring-2 focus-visible:ring-[var(--fileon-coral)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--fileon-bg)] [&::-webkit-scrollbar]:hidden"
      >
        {cards.map((card, index) => (
          <section
            key={card.title}
            aria-roledescription="tarjeta"
            aria-label={`${index + 1} de ${cards.length}`}
            className="meiker-hover-lift group flex w-[86%] shrink-0 snap-start flex-col rounded-[32px] border border-[color:rgb(70_19_18_/_9%)] bg-white p-3 shadow-[0_8px_22px_rgba(70,19,18,0.05)] hover:shadow-[0_16px_32px_rgba(70,19,18,0.12)] sm:w-[62%] lg:w-[calc((100%-1rem)/2.25)]"
          >
            {card.image ? (
              <div className="relative aspect-[3/2] overflow-hidden rounded-[24px] bg-[var(--fileon-arena)]">
                <Image
                  src={card.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 470px, (min-width: 640px) 62vw, 86vw"
                  className="meiker-image-zoom meiker-image-zoom--subtle object-cover"
                />
              </div>
            ) : null}
            <div className="flex flex-1 flex-col px-4 pb-5 pt-6 md:px-5 md:pb-6">
              <h2 className="meiker-service-card-heading">{card.title}</h2>
              <p className="mt-3 text-[16px] leading-[1.65] text-[var(--fileon-body)] md:text-[17px]">{card.body}</p>
            </div>
          </section>
        ))}
      </div>

      <div className="mt-7 flex justify-center gap-2">
        {cards.map((card, index) => (
          <button
            key={card.title}
            type="button"
            aria-label={`Ir a la tarjeta ${index + 1}`}
            aria-current={index === active ? "true" : undefined}
            onClick={() => goTo(index)}
            className="group/dot flex h-11 items-center px-1"
          >
            <span
              className={cn(
                "block h-2 rounded-full transition-[width,background-color] duration-300 ease-out",
                index === active ? "w-8 bg-[var(--fileon-coral)]" : "w-2 bg-[var(--fileon-black-15)] group-hover/dot:bg-[var(--fileon-black-30)]",
              )}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

function CarouselButton({
  label,
  disabled,
  onClick,
  children,
}: {
  label: string;
  disabled: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--fileon-border)] bg-white text-[var(--fileon-heading)] transition-[background-color,color,opacity,transform] duration-200 ease-out hover:bg-[var(--fileon-heading)] hover:text-white active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--fileon-coral)] disabled:pointer-events-none disabled:opacity-35"
    >
      {children}
    </button>
  );
}
