"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export interface CarouselService {
  readonly number: string;
  readonly id: string;
  readonly href: string;
  readonly title: string;
  readonly image: string;
  readonly imageAlt: string;
  readonly tag: string;
  readonly description: string;
}

export function ServiceCarousel({
  items,
  label,
}: {
  items: readonly CarouselService[];
  label: string;
}) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [cardStep, setCardStep] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const reduceMotion = Boolean(useReducedMotion());
  const maxIndex = Math.max(0, items.length - visibleCount);
  const canSlide = items.length > visibleCount;

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const measure = () => {
      // The viewport has 20px of shadow clearance on each side.
      const availableWidth = viewport.clientWidth - 40;
      const nextVisible = availableWidth >= 1100 ? 3 : availableWidth >= 650 ? 2 : 1;
      const width = (availableWidth - (nextVisible - 1) * 16) / nextVisible;
      setCardWidth(width);
      setCardStep(width + 16);
      setVisibleCount(nextVisible);
      setIndex((current) => Math.min(current, Math.max(0, items.length - nextVisible)));
    };

    const observer = new ResizeObserver(measure);
    observer.observe(viewport);
    measure();
    return () => observer.disconnect();
  }, [items.length]);

  const move = (direction: -1 | 1) => {
    setIndex((current) => Math.min(maxIndex, Math.max(0, current + direction)));
  };

  return (
    <section aria-label={label} className="mx-auto min-w-0 w-full max-w-[1300px]">
      <div className="mb-5 flex items-center justify-between gap-4">
        <p className="text-[13px] font-medium text-[var(--fileon-body)]">
          {String(index + 1).padStart(2, "0")} / {String(maxIndex + 1).padStart(2, "0")}
        </p>
        {canSlide ? (
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Ver servicios anteriores"
              onClick={() => move(-1)}
              disabled={index === 0}
              className="grid h-11 w-11 place-items-center rounded-[15px] border border-[color:rgb(70_19_18_/_14%)] bg-white text-[var(--fileon-cacao)] transition-[background-color,color,transform,scale] duration-[360ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[var(--fileon-brisa)] active:scale-[.96] disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronLeft aria-hidden="true" size={20} strokeWidth={1.8} />
            </button>
            <button
              type="button"
              aria-label="Ver más servicios"
              onClick={() => move(1)}
              disabled={index === maxIndex}
              className="grid h-11 w-11 place-items-center rounded-[15px] bg-[var(--fileon-coral)] text-white transition-[background-color,color,transform,scale] duration-[360ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#ef4d2c] active:scale-[.96] disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronRight aria-hidden="true" size={20} strokeWidth={1.8} />
            </button>
          </div>
        ) : null}
      </div>

      <div ref={viewportRef} className="-mx-5 -my-6 min-w-0 overflow-hidden px-5 py-6">
        <motion.div
          className="flex w-max items-stretch gap-4"
          animate={{ x: -(index * cardStep) }}
          transition={{ duration: reduceMotion ? 0.16 : 0.62, ease: EASE_OUT }}
          drag={canSlide ? "x" : false}
          dragConstraints={{ left: -(maxIndex * cardStep), right: 0 }}
          dragElastic={0.035}
          dragMomentum={false}
          onDragEnd={(_, info) => {
            if (info.offset.x < -48) move(1);
            if (info.offset.x > 48) move(-1);
          }}
        >
          {items.map((service, itemIndex) => (
            <div
              key={service.number}
              style={{ width: cardWidth || "min(84vw, 410px)" }}
              className="shrink-0"
            >
              <ServiceCard service={service} index={itemIndex} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: CarouselService; index: number }) {
  const tone = index % 3;
  const surface = tone === 0
    ? "bg-[var(--fileon-brisa)]"
    : tone === 1
      ? "bg-[var(--fileon-coral)]"
      : "bg-white";

  return (
    <Link
      id={service.id}
      href={service.href}
      className={cn("meiker-service-card group flex h-full min-h-[410px] flex-col overflow-hidden rounded-[34px] border border-[color:rgb(70_19_18_/_10%)] p-3.5 text-left text-[var(--fileon-cacao)] no-underline shadow-[0_10px_30px_rgba(70,19,18,0.08)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--fileon-coral)] md:min-h-[430px]", surface)}
    >
      <div className="relative h-[142px] w-full shrink-0 overflow-hidden rounded-[28px] bg-white/70 md:h-[158px]">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(min-width: 1380px) 410px, (min-width: 640px) 44vw, 84vw"
          className="meiker-image-zoom object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col px-2 pb-2 pt-5">
        <p className={cn("w-fit rounded-full bg-white/75 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]", tone === 1 ? "text-[var(--fileon-cacao)]" : "text-[var(--fileon-coral)]")}>{service.tag}</p>
        <h3 className="mt-2.5 text-[27px] font-semibold leading-[1.08] tracking-[-0.04em] md:text-[29px]">{service.title}</h3>
        <p className={cn("mt-3 flex-1 text-[16px] leading-[1.6]", tone === 1 ? "text-[var(--fileon-cacao)]" : "text-[var(--fileon-body)]")}>{service.description}</p>
        <span className={cn("mt-5 inline-flex items-center text-[14px] font-semibold transition-colors duration-[420ms]", tone === 1 ? "text-[var(--fileon-cacao)]" : "text-[var(--fileon-cacao)] group-hover:text-[var(--fileon-coral)]")}>
          Conocer servicio
        </span>
      </div>
    </Link>
  );
}
