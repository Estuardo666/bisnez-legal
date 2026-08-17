/* eslint-disable @next/next/no-img-element */
import { Fragment } from "react";

import { cn } from "@/lib/utils";

const IMAGE_BASE = "/sites/fileon-framer-website-846bcc9f/root-8a5edab2/images";
const ICON_SRC = `${IMAGE_BASE}/i5lSt1InIvAyoekYqU1hMKkvE7o.svg`;

const ITEMS: readonly string[] = [
  "Client-first advocacy",
  "$50M+ settlements secured",
  "Cross-border representation",
];

function TrustBarItem({ title }: { title: string }) {
  return (
    <div className="relative flex h-min w-full flex-row items-start gap-[10px] md:w-min md:items-center xl:gap-[20px]">
      {/* Icon */}
      <div className="relative aspect-square h-[28px] w-[28px] flex-none overflow-clip md:h-[30px] md:w-[30px]">
        <img
          src={ICON_SRC}
          alt="Icon"
          className="block h-full w-full object-contain object-center"
        />
      </div>
      {/* Title */}
      <div className="relative w-px min-w-0 flex-1 break-words md:h-auto md:w-auto md:flex-none">
        <h6 className="text-[22px] leading-[1.35] font-normal tracking-[0em] text-black [font-family:var(--fileon-font-serif)] md:whitespace-pre xl:text-[24px]">
          {title}
        </h6>
      </div>
    </div>
  );
}

export function TrustBarSection({ className }: { className?: string }) {
  return (
    <section
      className={cn(
        "relative flex h-min w-full flex-none flex-row items-center justify-center gap-[10px] overflow-hidden px-[20px] pt-[40px] pb-[80px] md:px-[30px] md:pt-[50px] md:pb-[100px] xl:pt-[60px] xl:pb-[130px]",
        className,
      )}
    >
      {/* Container */}
      <div className="relative flex h-min w-px max-w-[1300px] flex-1 flex-row items-center justify-center gap-[10px]">
        {/* Content */}
        <div className="relative flex h-min w-px flex-1 flex-col items-start justify-start gap-[40px] md:gap-[50px] xl:gap-[60px]">
          {/* List Wrapper */}
          <div className="relative flex h-min w-full flex-col items-start justify-start gap-x-[80px] gap-y-[20px] md:flex-row md:flex-wrap md:gap-y-[25px] xl:flex-nowrap xl:justify-between xl:gap-x-0 xl:gap-y-0">
            {ITEMS.map((title, index) => (
              <Fragment key={title}>
                {index > 0 ? (
                  /* Line */
                  <div
                    aria-hidden
                    className="relative hidden h-[32px] w-px flex-none overflow-clip bg-black md:block"
                  />
                ) : null}
                <TrustBarItem title={title} />
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
