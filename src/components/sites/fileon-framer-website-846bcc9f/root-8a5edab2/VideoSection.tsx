"use client";

import { Reveal } from "@/components/sites/fileon-framer-website-846bcc9f/shared/Reveal";
import { cn } from "@/lib/utils";

const VIDEO_SRC =
  "/sites/fileon-framer-website-846bcc9f/root-8a5edab2/videos/Aa9VhrfiSGs0BMTmIIWVUTVY.mp4";

interface VideoSectionProps {
  className?: string;
}

/**
 * "Video Section" — a single full-bleed looping video.
 * Desktop: fixed 750px tall. Tablet: aspect-ratio 1.62. Mobile: aspect-ratio 1.56.
 */
export function VideoSection({ className }: VideoSectionProps) {
  return (
    <section
      className={cn(
        "relative flex w-full flex-none flex-row items-center justify-center gap-[10px] overflow-hidden p-0",
        "bg-[var(--fileon-bg)]",
        className,
      )}
    >
      {/* Container */}
      <div className="relative flex h-min w-px flex-1 flex-row items-center justify-center gap-[10px] p-0">
        {/* Content */}
        <div className="relative flex h-min w-px flex-1 flex-col items-start gap-[40px] p-0 md:gap-[50px] xl:gap-[60px]">
          <Reveal className="w-full" fromScale={0.4}>
            <div className="relative aspect-[1.56] h-auto w-full flex-none md:aspect-[1.62] xl:aspect-auto xl:h-[750px]">
              <video
                src={VIDEO_SRC}
                autoPlay
                loop
                muted
                playsInline
                className="block h-full w-full rounded-none bg-transparent object-cover object-[50%_50%]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
