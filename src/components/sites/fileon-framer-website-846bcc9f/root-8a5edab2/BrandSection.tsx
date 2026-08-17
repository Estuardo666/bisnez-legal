/* eslint-disable @next/next/no-img-element */
import type { CSSProperties } from "react";

import { cn } from "@/lib/utils";

const IMAGE_BASE = "/sites/fileon-framer-website-846bcc9f/root-8a5edab2/images";

/** Marquee cycle time. Not recoverable from the CSS dump (Framer drives its
 *  Ticker from JS), so this is tuned to roughly match the live site's speed. */
const MARQUEE_DURATION = "40s";

interface BrandLogo {
  /** Framer layer id, used only as a React key. */
  readonly id: string;
  readonly src: string;
  /** Exact width from the CSS dump (px). */
  readonly width: number;
  /** Exact `aspect-ratio` from the CSS dump. */
  readonly aspectRatio: number;
}

const LOGOS: readonly BrandLogo[] = [
  {
    id: "16j18q9",
    src: `${IMAGE_BASE}/scVS81Jnx30x2b0MzSKkkpPt59M.svg`,
    width: 112,
    aspectRatio: 4.30769,
  },
  {
    id: "1wyxwsx",
    src: `${IMAGE_BASE}/yKkNXPXw2oAHCMTnwpu5Rt0xTU.svg`,
    width: 112,
    aspectRatio: 4.30769,
  },
  {
    id: "7f9by0",
    src: `${IMAGE_BASE}/G59izM35Hm0ZwRLSQEqeoEvbd0.svg`,
    width: 95,
    aspectRatio: 2.56757,
  },
  {
    id: "1s3il9e",
    src: `${IMAGE_BASE}/89mgXsqMGFihSdS6ogYtaQNdww.svg`,
    width: 100,
    aspectRatio: 3.84615,
  },
  {
    id: "1ni0a8v",
    src: `${IMAGE_BASE}/uPDvqu8x2Yzj9a8ZESzrVwAlA4.svg`,
    width: 73,
    aspectRatio: 2.80769,
  },
];

function TickerRun({ hidden = false }: { hidden?: boolean }) {
  return (
    <>
      {LOGOS.map((logo) => (
        <li
          key={`${logo.id}${hidden ? "-clone" : ""}`}
          className="contents"
          aria-hidden={hidden || undefined}
        >
          <span
            className="relative block h-auto shrink-0 overflow-clip"
            style={{
              width: `${logo.width}px`,
              aspectRatio: `${logo.aspectRatio}`,
            }}
          >
            <img
              src={logo.src}
              alt={hidden ? "" : "Logo"}
              className="block h-full w-full object-contain object-center"
            />
          </span>
          {/* Line */}
          <span
            aria-hidden
            className="relative block h-[40px] w-px shrink-0 overflow-clip bg-[#bebebe] md:h-[50px] xl:h-[85px]"
          />
        </li>
      ))}
    </>
  );
}

export function BrandSection({ className }: { className?: string }) {
  return (
    <section
      className={cn(
        "relative flex h-min w-full flex-none flex-row items-center justify-center gap-[10px] overflow-hidden bg-[var(--fileon-bg-warm)] px-[20px] py-[20px] md:px-[30px]",
        className,
      )}
    >
      {/* Container */}
      <div className="relative flex h-min w-px flex-1 flex-row items-center justify-center gap-[10px]">
        {/* Content */}
        <div className="relative flex h-min w-px flex-1 flex-col items-start justify-start gap-[10px]">
          {/* Ticker */}
          <div className="relative flex w-full flex-row items-center overflow-hidden">
            <ul
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
