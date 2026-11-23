import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { FaqAccordion } from "@/components/sites/fileon-framer-website-846bcc9f/shared/FaqAccordion";
import { MotionArrowButton } from "@/components/sites/fileon-framer-website-846bcc9f/shared/MotionArrowButton";
import { Reveal } from "@/components/sites/fileon-framer-website-846bcc9f/shared/Reveal";

export const MEIKER = {
  cacao: "#461312",
  arena: "#ffeaca",
  coral: "#ff5b35",
  brisa: "#d8efff",
  ink: "#241514",
  body: "#614c49",
} as const;

export const SITE_ROOT = "/sites/fileon-framer-website-846bcc9f";

export function ArrowIcon({ light = false }: { light?: boolean }) {
  return (
    <span
      aria-hidden
      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${light ? "bg-[var(--fileon-coral)] text-white" : "bg-[var(--fileon-brisa)] text-[var(--fileon-cacao)]"}`}
    >
      <ArrowUpRight size={17} strokeWidth={1.7} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </span>
  );
}

export function MeikerButton({
  children,
  href,
  variant = "coral",
}: {
  children: ReactNode;
  href: string;
  variant?: "dark" | "coral" | "light" | "canela";
}) {
  return (
    <MotionArrowButton href={href} variant={variant}>{children}</MotionArrowButton>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-[var(--fileon-cacao)]">
      <span className="h-2.5 w-2.5 bg-[var(--fileon-coral)]" aria-hidden />
      <span>{children}</span>
    </div>
  );
}

export function PageBanner({
  eyebrow,
  title,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="relative flex min-h-[560px] w-full items-end overflow-hidden bg-[var(--fileon-bg)] px-5 pb-10 pt-36 text-white md:min-h-[660px] md:px-[30px] md:pb-14 xl:min-h-[720px] xl:pb-20">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-80"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(70,19,18,0.05),rgba(70,19,18,0.62))]" />
      <div className="relative z-[1] mx-auto flex w-full max-w-[1300px] flex-col gap-6">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="max-w-[900px] text-balance font-[family-name:var(--fileon-font-sans)] text-[clamp(3rem,8vw,7.75rem)] font-medium leading-[0.95] tracking-[-0.065em]">
          {title}
        </h1>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`flex max-w-[760px] flex-col gap-5 ${align === "center" ? "mx-auto items-center text-center" : "items-start"}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="text-balance font-[family-name:var(--fileon-font-sans)] text-[clamp(2.35rem,5vw,5rem)] font-medium leading-[0.98] tracking-[-0.055em] text-[var(--fileon-heading)]">
        {title}
      </h2>
      {description ? <p className="max-w-[620px] text-[17px] leading-[1.55] text-[var(--fileon-body)]">{description}</p> : null}
    </div>
  );
}

export function SurfaceSection({
  children,
  tone = "base",
  className = "",
  id,
}: {
  children: ReactNode;
  tone?: "base" | "arena" | "brisa";
  className?: string;
  id?: string;
}) {
  const toneClass = {
    base: "bg-[var(--fileon-bg)]",
    arena: "bg-[var(--fileon-bg)]",
    brisa: "bg-[var(--fileon-brisa)]",
  }[tone];
  return (
    <section id={id} className={`px-5 py-20 md:px-[30px] md:py-28 xl:py-36 ${toneClass} ${className}`}>
      <div className="mx-auto w-full max-w-[1300px]">{children}</div>
    </section>
  );
}

export function FaqList({
  items,
}: {
  items: readonly { question: string; answer: string }[];
}) {
  return <FaqAccordion items={items} />;
}

export function ImageCard({
  src,
  alt,
  name,
  role,
  href = "/equipo",
}: {
  src: string;
  alt: string;
  name: string;
  role: string;
  href?: string;
}) {
  return (
    <Link href={href} className="group block no-underline">
      <div className="relative aspect-[0.854] overflow-hidden rounded-[34px] bg-[var(--fileon-brisa)]">
        <Image src={src} alt={alt} fill loading="eager" sizes="(min-width: 1380px) 31vw, (min-width: 810px) 30vw, 100vw" className="object-cover transition-transform duration-[560ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]" />
      </div>
      <div className="flex items-start justify-between gap-4 border-b border-[color:rgb(70_19_18_/_18%)] py-4">
        <div>
          <h3 className="text-[21px] font-medium tracking-[-0.035em] text-[var(--fileon-heading)]">{name}</h3>
          <p className="mt-1 text-[14px] text-[var(--fileon-body)]">{role}</p>
        </div>
        <span className="hidden pt-1 text-[var(--fileon-coral)] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 md:inline" aria-hidden="true"><ArrowUpRight size={19} strokeWidth={1.7} /></span>
      </div>
    </Link>
  );
}

export function FadeIn({ children, delay = 0, subtle = true }: { children: ReactNode; delay?: number; subtle?: boolean }) {
  if (subtle) return <Reveal delay={delay} subtle>{children}</Reveal>;
  return (
    <div className="animate-[meiker-fade-in_700ms_ease-out_both]" style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}
