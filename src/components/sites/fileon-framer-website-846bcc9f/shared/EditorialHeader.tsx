"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { createPortal } from "react-dom";
import { useEffect, useId, useRef, useState } from "react";

import { MotionArrowButton } from "@/components/sites/fileon-framer-website-846bcc9f/shared/MotionArrowButton";

const SERVICE_LINKS = [
  { label: "Registro de marca", href: "/servicios/registro-de-marca" },
  { label: "Cese de uso", href: "/servicios/cese-de-uso" },
  { label: "Constitución S.A.S.", href: "/servicios/constitucion-sas" },
  { label: "Contratos empresariales", href: "/servicios/contratos-empresariales" },
  { label: "Activos intangibles", href: "/servicios/activos-intangibles" },
  { label: "Oposición y vigilancia", href: "/servicios/oposicion-y-vigilancia" },
  { label: "Derechos de autor", href: "/servicios/derechos-de-autor" },
  { label: "Prevención empresarial", href: "/servicios/prevencion-empresarial" },
] as const;

const LINKS = [
  { key: "inicio", label: "Inicio", href: "/" },
  { key: "nosotros", label: "Nosotros", href: "/nosotros" },
  { key: "registro", label: "Registro de marca", href: "/servicios/registro-de-marca" },
  { key: "blog", label: "Blog", href: "/#blog" },
  { key: "contacto", label: "Contacto", href: "/contacto" },
] as const;

const CTA_HREF = "https://meetings.hubspot.com/bisnez";
const EASE_OUT = [0.22, 1, 0.36, 1] as const;
const EASE_EXIT = [0.4, 0, 1, 1] as const;

const mobileLinkVariants = {
  hidden: { opacity: 0, transform: "translateY(-7px)" },
  visible: { opacity: 1, transform: "translateY(0px)" },
};

export function EditorialHeader() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState<string | null>(null);
  const reduceMotion = Boolean(useReducedMotion());
  const triggerRef = useRef<HTMLButtonElement>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);
  const menuId = useId();
  const servicesId = useId();

  useEffect(() => {
    const breakpoint = window.matchMedia("(max-width: 1379px)");
    const updateBreakpoint = () => {
      setIsMobile(breakpoint.matches);
      if (!breakpoint.matches) {
        setOpen(false);
        setServicesOpen(false);
      }
    };

    updateBreakpoint();
    breakpoint.addEventListener("change", updateBreakpoint);
    return () => breakpoint.removeEventListener("change", updateBreakpoint);
  }, []);

  useEffect(() => {
    if (!open || !isMobile) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open, isMobile]);

  useEffect(() => {
    if (!open || !isMobile) return;
    const frame = requestAnimationFrame(() => firstMobileLinkRef.current?.focus());
    return () => cancelAnimationFrame(frame);
  }, [open, isMobile]);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      setServicesOpen(false);
      triggerRef.current?.focus();
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
    setServicesOpen(false);
  };

  const desktopLinkClass = "group relative inline-flex min-h-12 items-center whitespace-nowrap rounded-[17px] px-3.5 py-2 text-[16px] font-medium text-[var(--fileon-cacao)] no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--fileon-coral)]";

  const navHighlight = (active: boolean) => (
    <motion.span
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-1.5 inset-y-1 z-0 rounded-[14px] bg-[var(--fileon-brisa)]"
      initial={false}
      animate={{ opacity: active ? 1 : 0, scale: active ? 1 : 0.86 }}
      transition={{ duration: reduceMotion ? 0.16 : 0.42, ease: EASE_OUT }}
    />
  );

  const mobilePanel = (
    <AnimatePresence initial={false}>
      {open && isMobile ? (
        <div key="meiker-mobile-overlay">
          <motion.button
            type="button"
            aria-label="Cerrar menú"
            onClick={closeMenu}
            className="fixed inset-0 z-[60] cursor-default border-0 bg-[rgb(70_19_18_/_22%)] p-0 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: reduceMotion ? 0.16 : 0.38, ease: EASE_OUT } }}
            exit={{ opacity: 0, transition: { duration: reduceMotion ? 0.16 : 0.32, ease: EASE_EXIT } }}
          />
          <motion.nav
            id={menuId}
            aria-label="Navegación del sitio"
            className="fixed left-3 right-3 top-[calc(env(safe-area-inset-top)_+_80px)] z-[70] mx-auto flex max-h-[calc(100dvh_-_96px_-_env(safe-area-inset-top))] max-w-[500px] flex-col overflow-x-hidden overflow-y-auto overscroll-contain rounded-[32px] border border-[color:rgb(70_19_18_/_14%)] bg-[rgb(255_250_244_/_98%)] p-3 text-[var(--fileon-cacao)] shadow-[0_22px_56px_rgba(70,19,18,0.24)] backdrop-blur-xl sm:left-auto sm:right-5 sm:w-[min(440px,calc(100vw_-_40px))]"
            initial={{ opacity: 0, transform: reduceMotion ? "none" : "translateY(-10px) scale(.985)" }}
            animate={{ opacity: 1, transform: "translateY(0px) scale(1)", transition: { duration: reduceMotion ? 0.16 : 0.4, ease: EASE_OUT } }}
            exit={{ opacity: 0, transform: reduceMotion ? "none" : "translateY(-5px) scale(.99)", transition: { duration: reduceMotion ? 0.16 : 0.34, ease: EASE_EXIT } }}
          >
            <motion.div
              className="grid gap-1"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { delayChildren: reduceMotion ? 0 : 0.05, staggerChildren: reduceMotion ? 0 : 0.035 } } }}
            >
              {LINKS.slice(0, 3).map((link, index) => (
                <motion.div key={link.key} variants={mobileLinkVariants} transition={{ duration: reduceMotion ? 0.16 : 0.36, ease: EASE_OUT }}>
                  <Link
                    ref={index === 0 ? firstMobileLinkRef : undefined}
                    href={link.href}
                    onClick={closeMenu}
                    className="meiker-mobile-nav-link flex min-h-[50px] items-center rounded-[17px] px-4 text-[18px] font-medium tracking-[-0.025em] text-[var(--fileon-cacao)] no-underline hover:bg-[var(--fileon-brisa)] focus-visible:bg-[var(--fileon-brisa)] focus-visible:outline-2 focus-visible:outline-[var(--fileon-coral)]"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div variants={mobileLinkVariants} transition={{ duration: reduceMotion ? 0.16 : 0.36, ease: EASE_OUT }}>
                <button
                  type="button"
                  aria-expanded={servicesOpen}
                  aria-controls={servicesId}
                  onClick={() => setServicesOpen((value) => !value)}
                  className="flex min-h-[50px] w-full items-center justify-between rounded-[17px] px-4 text-left text-[18px] font-medium tracking-[-0.025em] text-[var(--fileon-cacao)] transition-[background-color,color] duration-[460ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[var(--fileon-brisa)] focus-visible:bg-[var(--fileon-brisa)] focus-visible:outline-2 focus-visible:outline-[var(--fileon-coral)]"
                >
                  Servicios
                  <motion.span aria-hidden="true" animate={{ transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)" }} transition={{ duration: reduceMotion ? 0.16 : 0.3, ease: EASE_OUT }} className="text-[18px]">⌄</motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {servicesOpen ? (
                    <motion.div
                      id={servicesId}
                      key="mobile-services-links"
                      className="overflow-hidden pl-3"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1, transition: { height: { duration: reduceMotion ? 0.16 : 0.44, ease: EASE_OUT }, opacity: { duration: reduceMotion ? 0.16 : 0.36, ease: EASE_OUT } } }}
                      exit={{ height: 0, opacity: 0, transition: { height: { duration: reduceMotion ? 0.16 : 0.34, ease: EASE_EXIT }, opacity: { duration: reduceMotion ? 0.16 : 0.3, ease: EASE_EXIT } } }}
                    >
                      <Link href="/servicios" onClick={closeMenu} className="flex min-h-10 items-center rounded-[14px] px-4 text-[15px] font-semibold text-[var(--fileon-cacao)] no-underline transition-colors duration-[380ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[color:rgb(255_91_53_/_16%)]">Todos los servicios</Link>
                      {SERVICE_LINKS.map((link) => (
                        <Link key={link.href} href={link.href} onClick={closeMenu} className="flex min-h-10 items-center rounded-[14px] px-4 text-[14px] text-[var(--fileon-body)] no-underline transition-colors duration-[380ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[color:rgb(255_91_53_/_16%)] hover:text-[var(--fileon-cacao)]">
                          {link.label}
                        </Link>
                      ))}
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.div>

              {LINKS.slice(3).map((link) => (
                <motion.div key={link.key} variants={mobileLinkVariants} transition={{ duration: reduceMotion ? 0.16 : 0.36, ease: EASE_OUT }}>
                <Link href={link.href} onClick={closeMenu} className="meiker-mobile-nav-link flex min-h-[50px] items-center rounded-[17px] px-4 text-[18px] font-medium tracking-[-0.025em] text-[var(--fileon-cacao)] no-underline hover:bg-[var(--fileon-brisa)] focus-visible:bg-[var(--fileon-brisa)] focus-visible:outline-2 focus-visible:outline-[var(--fileon-coral)]">{link.label}</Link>
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-3 border-t border-[color:rgb(70_19_18_/_14%)] px-1 pt-4">
              <MotionArrowButton href={CTA_HREF} variant="coral" size="compact" className="w-full justify-center" onLinkClick={closeMenu}>
                Agendar asesoría
              </MotionArrowButton>
            </div>
          </motion.nav>
        </div>
      ) : null}
    </AnimatePresence>
  );

  return (
    <>
      <header className="meiker-header-enter sticky top-3 z-50 mx-3 mt-3 -mb-[76px] text-[var(--fileon-cacao)] sm:top-4 sm:mx-5 sm:mt-4 sm:-mb-[86px]">
        <div className="meiker-header-surface relative mx-auto flex h-[64px] max-w-[1300px] items-center justify-between gap-2 rounded-[26px] border border-white/55 px-3 shadow-[0_9px_30px_rgba(70,19,18,0.16)] sm:h-[70px] sm:px-5 lg:px-6">
          <Link href="/" onClick={closeMenu} aria-label="Meiker, inicio" className="flex shrink-0 items-center no-underline">
            <Image
              src="/meiker/logo para fondo claro.png"
              alt="Meiker"
              width={242}
              height={60}
              priority
              sizes="(min-width:768px) 150px, (min-width:640px) 130px, 100px"
              className="h-auto w-[100px] sm:w-[130px] lg:w-[150px]"
            />
          </Link>

          <nav
            className="relative hidden items-center gap-0.5 xl:flex"
            aria-label="Navegación principal"
            onPointerLeave={() => {
              setActiveNavItem(null);
              setServicesOpen(false);
            }}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                setActiveNavItem(null);
                setServicesOpen(false);
              }
            }}
          >
            {LINKS.slice(0, 3).map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className={desktopLinkClass}
                onPointerEnter={() => setActiveNavItem(link.key)}
                onFocus={() => setActiveNavItem(link.key)}
              >
                {navHighlight(activeNavItem === link.key)}
                <span className="relative z-[1]">{link.label}</span>
              </Link>
            ))}
            <div className="relative py-1" onPointerEnter={() => { setActiveNavItem("servicios"); setServicesOpen(true); }}>
              <Link
                href="/servicios"
                className={`${desktopLinkClass} gap-1`}
                aria-haspopup="true"
                aria-expanded={servicesOpen}
                onPointerEnter={() => { setActiveNavItem("servicios"); setServicesOpen(true); }}
                onFocus={() => { setActiveNavItem("servicios"); setServicesOpen(true); }}
              >
                {navHighlight(activeNavItem === "servicios")}
                <span className="relative z-[1]">Servicios</span>
                <motion.span aria-hidden="true" animate={{ transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)" }} transition={{ duration: reduceMotion ? 0.16 : 0.3, ease: EASE_OUT }} className="ml-0.5 text-[12px]">⌄</motion.span>
              </Link>
              <AnimatePresence initial={false}>
                {servicesOpen ? (
                  <motion.div
                    key="desktop-services-menu"
                    className="absolute left-1/2 top-[calc(100%_+_7px)] z-20 w-[286px] -translate-x-1/2 origin-top rounded-[28px] border border-[color:rgb(70_19_18_/_12%)] bg-[var(--fileon-bg)] p-2.5 text-[var(--fileon-cacao)] shadow-[0_20px_42px_rgba(70,19,18,0.18)]"
                    initial={{ opacity: 0, transform: reduceMotion ? "none" : "translateY(-8px) scale(.975)" }}
                    animate={{ opacity: 1, transform: "translateY(0px) scale(1)", transition: { duration: reduceMotion ? 0.16 : 0.4, ease: EASE_OUT } }}
                    exit={{ opacity: 0, transform: reduceMotion ? "none" : "translateY(-4px) scale(.99)", transition: { duration: reduceMotion ? 0.16 : 0.34, ease: EASE_EXIT } }}
                    onPointerEnter={() => { setActiveNavItem("servicios"); setServicesOpen(true); }}
                  >
                    <Link href="/servicios" className="block rounded-[16px] px-3 py-2.5 text-[14px] font-semibold text-[var(--fileon-cacao)] no-underline transition-colors duration-[380ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[color:rgb(255_91_53_/_18%)] hover:text-[var(--fileon-coral)] focus-visible:outline-2 focus-visible:outline-[var(--fileon-coral)]">
                      Todos los servicios
                    </Link>
                    <div className="my-1 h-px bg-[color:rgb(70_19_18_/_14%)]" />
                    <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.025 } } }}>
                      {SERVICE_LINKS.map((link) => (
                        <motion.div key={link.href} variants={{ hidden: { opacity: 0, transform: "translateX(-6px)" }, visible: { opacity: 1, transform: "translateX(0px)" } }} transition={{ duration: reduceMotion ? 0.16 : 0.36, ease: EASE_OUT }}>
                          <Link href={link.href} className="block rounded-[14px] px-3 py-2 text-[14px] text-[var(--fileon-body)] no-underline transition-colors duration-[380ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[color:rgb(255_91_53_/_18%)] hover:text-[var(--fileon-cacao)] focus-visible:outline-2 focus-visible:outline-[var(--fileon-coral)]">{link.label}</Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
            {LINKS.slice(3).map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className={desktopLinkClass}
                onPointerEnter={() => setActiveNavItem(link.key)}
                onFocus={() => setActiveNavItem(link.key)}
              >
                {navHighlight(activeNavItem === link.key)}
                <span className="relative z-[1]">{link.label}</span>
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <MotionArrowButton href={CTA_HREF} variant="brisa" size="compact" className="meiker-header-cta shrink-0">
              <span className="sm:hidden">Agendar</span>
              <span className="hidden whitespace-nowrap sm:inline">Agendar asesoría</span>
            </MotionArrowButton>
            <motion.button
              ref={triggerRef}
              type="button"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
              aria-controls={open && isMobile ? menuId : undefined}
              onClick={() => {
                setOpen((value) => !value);
                setServicesOpen(false);
              }}
              whileTap={reduceMotion ? undefined : { scale: 0.96 }}
              transition={{ duration: reduceMotion ? 0.16 : 0.3, ease: EASE_OUT }}
              className="relative grid h-11 w-11 shrink-0 touch-manipulation place-items-center rounded-[13px] border border-[color:rgb(70_19_18_/_22%)] bg-transparent text-[var(--fileon-cacao)] transition-[background-color,border-color] duration-[380ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-[color:rgb(70_19_18_/_40%)] hover:bg-[color:rgb(70_19_18_/_6%)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--fileon-coral)] xl:hidden"
            >
              <motion.span aria-hidden="true" className="absolute h-[2px] w-5 rounded-full bg-current" animate={{ transform: open ? "translateY(0px) rotate(45deg)" : "translateY(-6px) rotate(0deg)" }} transition={{ duration: reduceMotion ? 0.16 : 0.3, ease: EASE_OUT }} />
              <motion.span aria-hidden="true" className="absolute h-[2px] w-5 rounded-full bg-current" animate={{ opacity: open ? 0 : 1, transform: open ? "scaleX(.4)" : "scaleX(1)" }} transition={{ duration: reduceMotion ? 0.16 : 0.3, ease: EASE_OUT }} />
              <motion.span aria-hidden="true" className="absolute h-[2px] w-5 rounded-full bg-current" animate={{ transform: open ? "translateY(0px) rotate(-45deg)" : "translateY(6px) rotate(0deg)" }} transition={{ duration: reduceMotion ? 0.16 : 0.3, ease: EASE_OUT }} />
            </motion.button>
          </div>
        </div>
      </header>
      {typeof document !== "undefined" ? createPortal(mobilePanel, document.body) : null}
    </>
  );
}
