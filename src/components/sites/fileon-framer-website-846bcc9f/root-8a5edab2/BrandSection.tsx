import type { CSSProperties } from "react";

import { cn } from "@/lib/utils";

/** Marquee cycle time. Not recoverable from the CSS dump (Framer drives its
 *  Ticker from JS), so this is tuned to roughly match the live site's speed. */
const MARQUEE_DURATION = "40s";

const REGISTERED_BRANDS = ["Farmalemana", "Crónica", "Prometeo", "Grupo Palacios", "Clínica San José"] as const;

function TickerRun({ hidden = false }: { hidden?: boolean }) {
  return (
    <>
      {REGISTERED_BRANDS.map((brand) => (
        <li
          key={`${brand}${hidden ? "-clone" : ""}`}
          className="flex shrink-0 items-center gap-[20px] md:gap-[30px] xl:gap-[45px]"
          aria-hidden={hidden || undefined}
        >
          <span className="whitespace-nowrap text-[20px] font-medium tracking-[-0.035em] text-[var(--fileon-cacao)] md:text-[24px]">{brand}</span>
          <span aria-hidden className="h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--fileon-coral)]" />
        </li>
      ))}
    </>
  );
}

export function BrandSection({ className }: { className?: string }) {
  return (
    <section
      aria-label="Algunas marcas registradas por Meiker"
      className={cn(
        "relative flex h-min w-full flex-none flex-row items-center justify-center gap-[10px] overflow-hidden bg-[var(--fileon-bg)] px-[20px] py-[20px] md:px-[30px]",
        className,
      )}
    >
      {/* Container */}
      <div className="relative flex h-min w-px flex-1 flex-row items-center justify-center gap-[10px]">
        {/* Content */}
        <div className="relative flex h-min w-px flex-1 flex-col items-start justify-start gap-[14px]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--fileon-body)]">+150 marcas registradas en Ecuador · Algunos de nuestros clientes</p>
          {/* Ticker */}
          <div className="relative flex w-full flex-row items-center overflow-hidden">
            <ul
              aria-label="Farmalemana, Crónica, Prometeo, Grupo Palacios y Clínica San José"
              className="fileon-marquee-track m-0 list-none items-center gap-[20px] p-0 md:gap-[30px] xl:gap-[45px]"
              style={
                {
                  "--fileon-marquee-duration": MARQUEE_DURATION,
                } as CSSProperties
              }
            >
              <TickerRun />
              <TickerRun hidden />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
