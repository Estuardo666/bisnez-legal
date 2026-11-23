"use client";

import Image from "next/image";
import { useState } from "react";

import {
  Eyebrow,
  FadeIn,
  MeikerButton,
  SectionHeading,
  SurfaceSection,
} from "@/components/sites/fileon-framer-website-846bcc9f/shared/PagePrimitives";
import { EditorialIntroHero } from "@/components/sites/fileon-framer-website-846bcc9f/shared/InternalHero";
import { MotionArrowButton } from "@/components/sites/fileon-framer-website-846bcc9f/shared/MotionArrowButton";

const ASSETS = "/meiker/images";

type TeamMember = {
  readonly name: string;
  readonly role: string;
  readonly bio?: string;
  readonly image: string;
  readonly imageAlt: string;
};

const TEAM: readonly TeamMember[] = [
  {
    name: "Augusto Abendaño",
    role: "Socio fundador · Especialista en propiedad intelectual",
    bio: "Antes de ser abogado montó su propia empresa; por eso piensa cada caso también como empresario.",
    image: `${ASSETS}/lawyer-portrait.jpg`,
    imageAlt: "Retrato de Augusto Abendaño",
  },
  {
    name: "Gustavo Tapia",
    role: "Director comercial · Administrador de empresas",
    bio: "Fortalece la oferta de servicios, gestiona alianzas y optimiza procesos para que nuestros clientes tengan la mejor experiencia.",
    image: `${ASSETS}/founder-portrait.jpg`,
    imageAlt: "Retrato de Gustavo Tapia",
  },
  {
    name: "Sofia Jaramillo",
    role: "Especialista en marketing · Licenciada en marketing",
    bio: "Transforma información en estrategias claras y accionables. Le encanta la creatividad, pero también tomar decisiones basadas en datos.",
    image: `${ASSETS}/advisor-portrait.jpg`,
    imageAlt: "Retrato de Sofia Jaramillo",
  },
] as const;

export function TeamsPage() {
  return (
    <div className="overflow-hidden">
      <TeamsBanner />
      <TeamGrid />
      <TeamPrinciples />
    </div>
  );
}

export function TeamsBanner() {
  return (
    <EditorialIntroHero eyebrow="Nuestro equipo" title="Conoce al equipo detrás de Meiker" />
  );
}

export function TeamGrid() {
  const [loaded, setLoaded] = useState(false);

  return (
    <SurfaceSection tone="base" id="equipo">
      <div className="flex flex-col gap-12">
        <FadeIn>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Nuestro equipo"
              title={<>Legal, negocios y cercanía.</>}
              description="En Meiker combinamos propiedad intelectual, estrategia y comunicación clara para que tomes mejores decisiones."
            />
            <p className="max-w-[260px] text-[14px] leading-[1.5] text-[var(--fileon-body)] md:pb-1">Conoce a las personas que hacen posible cada proceso.</p>
          </div>
        </FadeIn>

        <div className="grid gap-x-5 gap-y-12 md:grid-cols-3">
          {TEAM.map((member, index) => (
            <FadeIn key={member.name} delay={index * 90}>
              <TeamCard member={member} />
            </FadeIn>
          ))}
        </div>

        <div className="flex flex-col items-center gap-4 border-t border-[color:rgb(70_19_18_/_18%)] pt-10">
          {!loaded ? (
            <MotionArrowButton onClick={() => setLoaded(true)}>Cargar más</MotionArrowButton>
          ) : (
            <p role="status" className="rounded-full bg-white px-5 py-3 text-center text-[14px] text-[var(--fileon-body)]">
              Estamos preparando nuevos perfiles para presentarte pronto.
            </p>
          )}
        </div>
      </div>
    </SurfaceSection>
  );
}

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article className="group">
      <div className="relative aspect-[0.854] overflow-hidden rounded-[34px] bg-[var(--fileon-brisa)]">
        <Image
          src={member.image}
          alt={member.imageAlt}
          fill
          loading="eager"
          sizes="(min-width: 1380px) 31vw, (min-width: 810px) 30vw, 100vw"
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex items-start justify-between gap-4 border-b border-[color:rgb(70_19_18_/_18%)] py-4">
        <div>
          <h2 className="text-[21px] font-medium tracking-[-0.035em] text-[var(--fileon-heading)]">{member.name}</h2>
          <p className="mt-1 max-w-[245px] text-[14px] leading-[1.4] text-[var(--fileon-body)]">{member.role}</p>
          {member.bio ? <p className="mt-3 max-w-[340px] text-[15px] leading-[1.55] text-[var(--fileon-body)]">{member.bio}</p> : null}
        </div>
      </div>
    </article>
  );
}

export function TeamPrinciples() {
  return (
    <SurfaceSection tone="brisa">
      <div className="grid gap-12 xl:grid-cols-[0.8fr_1.2fr] xl:gap-28">
        <FadeIn>
          <SectionHeading
            eyebrow="Cómo trabajamos"
            title={<>Protección legal a tu ritmo.</>}
          />
        </FadeIn>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            ["01", "Hablamos claro", "Traducimos lo legal a decisiones que puedas entender y aplicar."],
            ["02", "Pensamos a futuro", "Protegemos lo que tu negocio es hoy y la estructura que necesitará para crecer."],
            ["03", "Acompañamos de cerca", "Tienes un equipo que responde, explica y mantiene el proceso en movimiento."],
            ["04", "Prevenimos riesgos", "Identificamos problemas antes de que se conviertan en pérdidas para tu marca."],
          ].map(([number, title, description], index) => (
            <FadeIn key={number} delay={index * 70}>
              <div className="rounded-[32px] bg-white p-6 md:min-h-[185px]">
                <span className="font-[family-name:var(--fileon-font-mono)] text-[12px] uppercase tracking-[0.16em] text-[var(--fileon-coral)]">{number}</span>
                <h2 className="mt-9 text-[22px] font-medium tracking-[-0.04em] text-[var(--fileon-heading)]">{title}</h2>
                <p className="mt-2 text-[14px] leading-[1.5] text-[var(--fileon-body)]">{description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
      <div className="mt-14 flex flex-col gap-5 border-t border-[color:rgb(70_19_18_/_18%)] pt-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Eyebrow>¿Hablamos?</Eyebrow>
          <p className="mt-4 text-[17px] text-[var(--fileon-body)]">Tu negocio ya está creciendo. Su protección también debería hacerlo.</p>
        </div>
        <MeikerButton href="/contacto" variant="coral">Contactar a Meiker</MeikerButton>
      </div>
    </SurfaceSection>
  );
}
