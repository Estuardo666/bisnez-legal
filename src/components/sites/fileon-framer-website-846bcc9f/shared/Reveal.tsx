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
}

/**
 * Scroll-reveal used across the Fileon page: elements fade and scale up once
 * they cross into the viewport, then stay settled (the original never replays).
 */
export function Reveal({ children, className, delay = 0, fromScale = 0.85 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -15% 0px", threshold: 0.15 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn("transition-[opacity,transform] duration-700 ease-out will-change-transform", className)}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "scale(1)" : `scale(${fromScale})`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
