"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

import { cn } from "@/lib/utils";

const ASSET_BASE = "/sites/fileon-framer-website-846bcc9f/root-8a5edab2/images";

type NavLink = {
  readonly label: string;
  readonly href: string;
};

const PRIMARY_LINKS: readonly NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

/** Four "Links Wrapper" columns of the overlay panel, in DOM order. */
const PANEL_COLUMNS: readonly (readonly NavLink[])[] = [
  [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  [
    { label: "Services", href: "/services" },
    { label: "Service details", href: "/services/corporate-legal-advisory" },
    { label: "Blogs", href: "/blogs" },
  ],
  [
    {
      label: "Blog Details",
      href: "/blogs/understanding-contract-risks-before-signing-agreements",
    },
    { label: "Case studies", href: "/case-studies" },
    { label: "Case details", href: "/case-studies/corporate-dispute" },
  ],
  [
    { label: "Teams", href: "/teams" },
    { label: "Team Details", href: "/teams/michael-carter" },
    { label: "404", href: "/404" },
  ],
];

/** `.framer-styles-preset-c36khm` — Manrope 400 / 16px / 150% / 0em. */
const TEXT_PRESET =
  "font-[family-name:var(--fileon-font-sans)] text-[16px] font-normal leading-[150%] tracking-[0em] text-left";

/**
 * `.framer-E8Hpy.framer-sg6mql` (header) / `.framer-YELa5.framer-l38a88` (panel).
 * The `Line` child sits at `left:-70px` (header) / `left:-100px` (panel) and
 * slides to `left:0` on hover; the anchor clips it with `overflow:hidden`.
 */
function MenuLink({
  link,
  tone,
  onNavigate,
}: {
  link: NavLink;
  tone: "light" | "dark";
  onNavigate?: () => void;
}) {
  return (
    <Link
      href={link.href}
      onClick={onNavigate}
      className="group relative flex w-min cursor-pointer flex-col items-start justify-start gap-0 overflow-hidden p-0 pb-[2px] no-underline"
    >
      <span
        className={cn(
          "relative h-auto w-auto select-none whitespace-pre",
          TEXT_PRESET,
          tone === "light" ? "text-[var(--fileon-white)]" : "text-black",
        )}
      >
        {link.label}
      </span>
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute bottom-0 z-[1] h-px w-full transition-[left] duration-300 ease-out group-hover:left-0",
          tone === "light"
            ? "left-[-70px] bg-[var(--fileon-white)]"
            : "left-[-100px] bg-black",
        )}
      />
    </Link>
  );
}

export function Header() {
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const closeAll = useCallback(() => {
    setMenuOpen(false);
    setMobileOpen(false);
  }, []);

  useEffect(() => {
    if (!menuOpen && !mobileOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeAll();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen, mobileOpen, closeAll]);

  return (
    <header
      className={cn(
        // .framer-xhgdc7
        "absolute top-0 left-1/2 z-[9] order-[-999] flex h-min w-full flex-col items-center justify-center gap-0 overflow-visible p-0",
        "bg-[var(--fileon-black-15)] backdrop-blur-[10px]",
        // tablet + mobile: position:fixed
        "max-xl:fixed",
        // Framer load-in: opacity .001 / translateY(-400px) -> resting
        "-translate-x-1/2 transition-[opacity,transform] duration-[700ms] ease-[cubic-bezier(0.44,0,0.56,1)]",
        mounted
          ? "translate-y-0 opacity-100"
          : "-translate-y-[400px] opacity-[0.001]",
      )}
    >
      {/* .framer-1f6l7u8-container */}
      <div className="relative h-auto w-full max-w-[1300px] flex-none">
        {/* .framer-1abd38v */}
        <nav
          className={cn(
            "relative flex w-full items-center overflow-visible bg-transparent",
            "max-md:flex-col max-md:justify-center max-md:gap-0 max-md:p-[20px]",
            "md:max-xl:flex-col md:max-xl:justify-center md:max-xl:gap-0 md:max-xl:px-[30px] md:max-xl:py-[20px]",
            "xl:flex-row xl:justify-between xl:px-0 xl:py-[20px]",
          )}
        >
          {/* .framer-3owvb7 — Logo Wrapper */}
          <div
            className={cn(
              "relative z-[2] order-0 flex h-min flex-none flex-row items-center overflow-visible p-0",
              "max-xl:w-full max-xl:justify-between max-xl:gap-0",
              "xl:w-min xl:justify-start xl:gap-[20px]",
            )}
          >
            {/* .framer-sfhcxm — Logo and Name */}
            <Link
              href="/"
              className="relative order-0 flex h-min w-min flex-none flex-row items-center justify-center gap-[20px] overflow-visible p-0 no-underline"
            >
              {/* .framer-1d6tky0 — Logo */}
              <span className="relative block flex-none max-md:h-[40px] max-md:w-[116px] md:max-xl:h-[50px] md:max-xl:w-[146px] xl:h-[32px] xl:w-[121px]">
                <Image
                  src={`${ASSET_BASE}/v0uRH6YQbVK7LGBHkd2KY48r60s.svg`}
                  alt="Logo"
                  width={146}
                  height={50}
                  priority
                  className="block h-full w-full object-contain object-center"
                />
              </span>
            </Link>

            {/* .framer-1mke3fk — hamburger (tablet + mobile variants only) */}
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => {
                setMenuOpen(false);
                setMobileOpen((open) => !open);
              }}
              className={cn(
                "relative order-1 flex-none cursor-pointer overflow-hidden",
                "max-md:h-[36px] max-md:w-[35px] md:max-xl:h-[41px] md:max-xl:w-[41px]",
                "xl:hidden",
              )}
            >
              {/* .framer-pjydvf — top bar */}
              <span
                aria-hidden
                className={cn(
                  "absolute left-[calc(50%-10px)] h-[3px] w-[20px] flex-none overflow-hidden bg-[var(--fileon-white)] transition-all duration-300 ease-out",
                  mobileOpen
                    ? "top-[calc(50%-1.5px)] rotate-45"
                    : "top-[calc(37.5%-1.5px)]",
                )}
              />
              {/* .framer-y0uh4y — bottom bar */}
              <span
                aria-hidden
                className={cn(
                  "absolute left-[calc(50%-10px)] h-[3px] w-[20px] flex-none overflow-hidden bg-[var(--fileon-white)] transition-all duration-300 ease-out",
                  mobileOpen
                    ? "top-[calc(50%-1.5px)] -rotate-45"
                    : "top-[calc(62.5%-1.5px)]",
                )}
              />
            </button>
          </div>

          {/* .framer-15iixlp — Menu Wrapper */}
          <div
            className={cn(
              "relative flex-none overflow-visible p-0",
              // desktop: inline row
              "xl:flex xl:h-min xl:w-min xl:flex-row xl:items-center xl:justify-end xl:gap-[64px]",
              // tablet + mobile: full-height overlay column, only when open
              "max-xl:order-1 max-xl:h-[calc(var(--framer-viewport-height,100vh)*1)] max-xl:w-full max-xl:flex-col max-xl:items-center max-xl:justify-start",
              mobileOpen ? "max-xl:flex" : "max-xl:hidden",
            )}
          >
            {/* .framer-tcc7wo — Links */}
            <div
              className={cn(
                "relative z-[2] cursor-pointer overflow-visible",
                "xl:flex xl:h-min xl:w-min xl:flex-none xl:flex-row xl:items-center xl:justify-end xl:gap-[30px] xl:p-0",
                "max-xl:flex max-xl:h-full max-xl:w-px max-xl:flex-1 max-xl:shrink-0 max-xl:basis-0 max-xl:flex-col max-xl:items-start max-xl:justify-start max-xl:gap-[20px] max-xl:overflow-auto",
                "max-md:pt-[10px] max-md:pr-[20px] max-md:pb-[120px] max-md:pl-[20px]",
                "md:max-xl:pt-[10px] md:max-xl:pr-[30px] md:max-xl:pb-[120px] md:max-xl:pl-[30px]",
              )}
            >
              {PRIMARY_LINKS.map((link) => (
                <div
                  key={link.href}
                  className="relative z-10 h-auto w-auto flex-none"
                >
                  <MenuLink link={link} tone="light" onNavigate={closeAll} />
                </div>
              ))}

              {/* .framer-fkxzsd — Icon (opens the overlay panel) */}
              <button
                type="button"
                aria-label={
                  menuOpen ? "Close navigation panel" : "Open navigation panel"
                }
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((open) => !open)}
                className="relative aspect-square h-[26px] w-[26px] flex-none cursor-pointer overflow-visible"
              >
                <Image
                  src={`${ASSET_BASE}/nBjnCgM28r4yDcv6KKivFiP24yE.svg`}
                  alt="Icon"
                  width={26}
                  height={26}
                  className="block h-full w-full object-contain object-center"
                />
              </button>
            </div>
          </div>

          {/* backdrop for the overlay panel */}
          {menuOpen ? (
            <div
              aria-hidden
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-0 cursor-default"
            />
          ) : null}

          {/* .framer-ga75o4-container */}
          <div
            className={cn(
              "absolute top-[80px] right-[20px] z-[1] w-auto flex-none cursor-pointer",
              "transition-[opacity,transform] duration-300 ease-out",
              menuOpen
                ? "h-auto translate-y-0 opacity-100"
                : "pointer-events-none h-px -translate-y-[10px] opacity-0",
            )}
          >
            {/* .framer-eymhpy — Desktop panel */}
            <div
              className={cn(
                "relative flex h-min cursor-pointer items-start justify-start",
                "rounded-[10px] border-2 border-solid border-[var(--fileon-line)] bg-[var(--fileon-white)]",
                "max-xl:w-[250px] max-xl:flex-col max-xl:gap-[24px] max-xl:p-0",
                "xl:w-[700px] xl:flex-row xl:gap-[16px] xl:px-[20px] xl:py-[30px]",
              )}
            >
              {PANEL_COLUMNS.map((column, index) => (
                <div
                  key={column[0].href}
                  className={cn(
                    "relative flex h-min flex-col items-start justify-start gap-[20px] overflow-visible p-0",
                    "max-xl:w-[250px] max-xl:flex-none",
                    "xl:w-px xl:flex-1 xl:shrink-0 xl:basis-0",
                    index >= 2 && "xl:z-[1] xl:max-w-[243px]",
                  )}
                >
                  {column.map((link) => (
                    <div
                      key={link.href}
                      className="relative h-auto w-auto flex-none"
                    >
                      <MenuLink link={link} tone="dark" onNavigate={closeAll} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
