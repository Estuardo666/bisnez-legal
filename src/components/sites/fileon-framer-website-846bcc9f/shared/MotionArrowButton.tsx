"use client";

import Link from "next/link";
import type { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";

import { cn } from "@/lib/utils";

type MotionArrowVariant = "dark" | "coral" | "light" | "brisa" | "canela";

type MotionArrowButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: MotionArrowVariant;
  size?: "default" | "compact";
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onLinkClick?: MouseEventHandler<HTMLAnchorElement>;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  disabled?: boolean;
  ariaLabel?: string;
};

const variantClasses: Record<MotionArrowVariant, { text: string; backdrop: string; icon: string; hoverIcon: string }> = {
  dark: {
    text: "text-white",
    backdrop: "bg-[var(--fileon-coral)]",
    icon: "text-[color:rgb(255_255_255_/_76%)]",
    hoverIcon: "text-[var(--fileon-cacao)]",
  },
  coral: {
    text: "text-white",
    backdrop: "bg-[var(--fileon-coral)]",
    icon: "text-[color:rgb(255_255_255_/_76%)]",
    hoverIcon: "text-[var(--fileon-cacao)]",
  },
  light: {
    text: "text-white",
    backdrop: "bg-[var(--fileon-coral)]",
    icon: "text-[color:rgb(255_255_255_/_76%)]",
    hoverIcon: "text-[var(--fileon-cacao)]",
  },
  brisa: {
    text: "text-[var(--fileon-cacao)]",
    backdrop: "bg-[var(--fileon-brisa)]",
    icon: "text-[color:rgb(70_19_18_/_72%)]",
    hoverIcon: "text-[var(--fileon-cacao)]",
  },
  canela: {
    text: "text-white",
    backdrop: "bg-[var(--fileon-canela)]",
    icon: "text-white/75",
    hoverIcon: "text-white",
  },
};

function Glyph({ hover = false }: { hover?: boolean }) {
  const barClass = cn(
    "motion-arrow-button__bar h-[3px] w-1 bg-current",
    hover && "motion-arrow-button__hover-bar scale-[0.2]",
  );

  return (
    <span className="flex items-center justify-center gap-0.5" aria-hidden="true">
      <span className="flex w-0.5 flex-col items-center gap-[17px]"><span className={barClass} /><span className={barClass} /></span>
      <span className="flex w-0.5 flex-col items-center gap-[7px]"><span className={barClass} /><span className={barClass} /></span>
      <span className="flex w-0.5 flex-col items-center"><span className={barClass} /></span>
    </span>
  );
}

function Contents({ children, compact = false, iconColor, hoverIconColor }: { children: ReactNode; compact?: boolean; iconColor: string; hoverIconColor: string }) {
  return (
    <span className={cn("relative z-[1] flex w-max items-center justify-center", compact ? "min-h-11 gap-2 px-4 py-3" : "min-h-14 gap-4 px-6 py-4")}>
      <span className={cn("whitespace-nowrap font-semibold leading-none tracking-[-0.02em]", compact ? "text-[14px]" : "text-[16px]")}>{children}</span>
      <span className={cn("relative z-[1]", iconColor)}><Glyph /></span>
      <span className={cn("motion-arrow-button__hover-icon absolute right-[31px] top-1/2 z-[2] -translate-y-1/2 opacity-0", hoverIconColor)}>
        <Glyph hover />
      </span>
    </span>
  );
}

export function MotionArrowButton({
  children,
  href,
  variant = "coral",
  size = "default",
  className,
  onClick,
  onLinkClick,
  type = "button",
  disabled,
  ariaLabel,
}: MotionArrowButtonProps) {
  const classes = cn(
    "motion-arrow-button group relative inline-flex w-fit cursor-pointer touch-manipulation items-center justify-center overflow-visible no-underline outline-none transition-[transform,translate,scale,opacity] duration-[380ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-px active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--fileon-coral)] disabled:cursor-not-allowed disabled:opacity-55",
    variantClasses[variant].text,
    variantClasses[variant],
    className,
  );
  const content = (
    <>
      <span className={cn("motion-arrow-button__backdrop absolute inset-0 z-0", variantClasses[variant].backdrop)} />
      <Contents compact={size === "compact"} iconColor={variantClasses[variant].icon} hoverIconColor={variantClasses[variant].hoverIcon}>{children}</Contents>
    </>
  );

  if (href) {
    if (/^https?:\/\//.test(href)) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onLinkClick}
          aria-label={ariaLabel}
          className={classes}
        >
          {content}
        </a>
      );
    }

    return <Link href={href} onClick={onLinkClick} aria-label={ariaLabel} className={classes}>{content}</Link>;
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} aria-label={ariaLabel} className={classes}>
      {content}
    </button>
  );
}

