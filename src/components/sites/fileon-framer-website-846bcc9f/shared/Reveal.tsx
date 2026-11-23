"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Extra delay in ms, for staggering siblings. */
  delay?: number;
  /** Scale the element starts at before it enters the viewport. */
  fromScale?: number;
  /** Compact editorial reveal used by internal pages. Home keeps the original scale reveal. */
  subtle?: boolean;
}

/**
 * Scroll-reveal used across the Fileon page: elements fade and scale up once
 * they cross into the viewport, then stay settled (the original never replays).
 */
export function Reveal({ children, className, delay = 0, fromScale = 0.94, subtle = false }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // Deferred so the reveal is a post-paint state change, not a render-phase one.
      const frame = requestAnimationFrame(() => setShown(true));
      return () => cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px 8% 0px", threshold: 0.08 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        subtle
          ? "meiker-reveal transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform"
          : "meiker-reveal transition-[opacity,transform] duration-[620ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform",
        className,
      )}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0) scale(1)" : subtle ? "translateY(14px) scale(0.99)" : `translateY(12px) scale(${fromScale})`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
