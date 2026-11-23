"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

const PRIMARY_LINKS = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Servicios", href: "/servicios" },
  { label: "Contacto", href: "/contacto" },
] as const;

const MORE_LINKS = [
  { label: "Registro de marca", href: "/servicios#registro-de-marca" },
  { label: "Cese de uso", href: "/servicios#cese-de-uso" },
  { label: "Constitución S.A.S.", href: "/servicios#constitucion" },
  { label: "Nuestro equipo", href: "/equipo" },
  { label: "Perfil del fundador", href: "/equipo/augusto-abendano" },
] as const;

function NavigationLink({ label, href, onClick }: { label: string; href: string; onClick?: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="group relative inline-flex w-fit py-1 text-[15px] font-medium text-white no-underline"
    >
      {label}
      <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-[var(--fileon-coral)] transition-transform duration-300 group-hover:scale-x-100" />
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const close = () => {
    setOpen(false);
    setMoreOpen(false);
  };

  return (
    <header className="absolute left-1/2 top-0 z-20 w-full -translate-x-1/2 px-5 pt-4 md:px-[30px] md:pt-5">
      <div className="mx-auto flex max-w-[1300px] items-center justify-between rounded-full border border-white/20 bg-[color:rgb(70_19_18_/_88%)] px-4 py-3 shadow-lg shadow-black/10 backdrop-blur-xl md:px-5">
        <Link href="/" onClick={close} className="flex items-center gap-2 text-white no-underline">
          <Image
            src="/meiker/isotipo-black.png"
            alt="Meiker"
            width={40}
            height={40}
            priority
            className="h-9 w-9 invert"
          />
          <span className="text-[19px] font-semibold tracking-[-0.06em]">meiker</span>
          <span className="hidden text-[10px] font-semibold uppercase tracking-[0.16em] text-white/60 sm:inline">jurídico</span>
        </Link>

        <nav className="hidden items-center gap-7 xl:flex" aria-label="Navegación principal">
          {PRIMARY_LINKS.map((link) => <NavigationLink key={link.href} {...link} />)}
          <button
            type="button"
            aria-expanded={moreOpen}
            aria-label={moreOpen ? "Cerrar más enlaces" : "Abrir más enlaces"}
            onClick={() => setMoreOpen((value) => !value)}
            className={cn("grid h-8 w-8 place-items-center rounded-full border border-white/40 text-xl leading-none text-white transition-colors hover:bg-[var(--fileon-coral)]", moreOpen && "bg-[var(--fileon-coral)]")}
          >
            {moreOpen ? "−" : "+"}
          </button>
        </nav>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="relative grid h-10 w-10 place-items-center rounded-full border border-white/30 text-white xl:hidden"
        >
          <span className={cn("absolute h-px w-5 bg-white transition-transform duration-300", open ? "rotate-45" : "-translate-y-1.5")} />
          <span className={cn("absolute h-px w-5 bg-white transition-transform duration-300", open ? "-rotate-45" : "translate-y-1.5")} />
        </button>

        {moreOpen ? (
          <div className="absolute right-5 top-[74px] hidden w-[260px] flex-col gap-3 rounded-2xl border border-[var(--fileon-cacao)]/20 bg-white p-5 shadow-xl xl:flex">
            {MORE_LINKS.map((link) => <Link key={link.href} href={link.href} onClick={close} className="text-[15px] text-[var(--fileon-cacao)] no-underline hover:text-[var(--fileon-coral)]">{link.label}</Link>)}
          </div>
        ) : null}
      </div>

      {open ? (
        <div className="mx-auto mt-3 flex max-w-[1300px] flex-col gap-4 rounded-3xl bg-white p-6 xl:hidden">
          {PRIMARY_LINKS.map((link) => <NavigationLink key={link.href} {...link} onClick={close} />)}
          <div className="my-1 h-px bg-white/20" />
          {MORE_LINKS.map((link) => <NavigationLink key={link.href} {...link} onClick={close} />)}
        </div>
      ) : null}
    </header>
  );
}
