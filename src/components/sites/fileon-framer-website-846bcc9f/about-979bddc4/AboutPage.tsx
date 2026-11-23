import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

import { Footer } from "@/components/sites/fileon-framer-website-846bcc9f/root-8a5edab2/Footer";
import { EditorialHeader } from "@/components/sites/fileon-framer-website-846bcc9f/shared/EditorialHeader";
import {
  FadeIn,
  FaqList,
  ImageCard,
  MEIKER,
  MeikerButton,
  SectionHeading,
  SurfaceSection,
} from "@/components/sites/fileon-framer-website-846bcc9f/shared/PagePrimitives";
import { PhotoEditorialHero } from "@/components/sites/fileon-framer-website-846bcc9f/shared/InternalHero";
import { Reveal } from "@/components/sites/fileon-framer-website-846bcc9f/shared/Reveal";

const ABOUT_ASSETS = "/meiker/images";

const MEIKER_THEME = {
  "--fileon-cacao": MEIKER.cacao,
  "--fileon-arena": MEIKER.arena,
  "--fileon-coral": MEIKER.coral,
  "--fileon-brisa": MEIKER.brisa,
  "--fileon-ink": MEIKER.ink,
  "--fileon-body": MEIKER.body,
  "--fileon-ink-soft": MEIKER.cacao,
  "--fileon-white": "#ffffff",
  "--fileon-white-45": "rgb(255 255 255 / 45%)",
  "--fileon-white-10": "rgb(255 255 255 / 10%)",
  "--fileon-black-15": "rgb(70 19 18 / 15%)",
} as CSSProperties;

const TEAM = [
  {
    name: "Augusto Abendaño",
    role: "Socio fundador · Especialista en propiedad intelectual",
    image: `${ABOUT_ASSETS}/lawyer-portrait.jpg`,
  },
  {
    name: "Gustavo Tapia",
    role: "Director comercial · Administrador de empresas",
    image: `${ABOUT_ASSETS}/founder-portrait.jpg`,
  },
  {
    name: "Sofia Jaramillo",
    role: "Especialista en marketing · Licenciada en marketing",
    image: `${ABOUT_ASSETS}/advisor-portrait.jpg`,
  },
] as const;

const OUTCOMES = [
  {
    number: "01",
    title: "Registro de marca",
    description:
      "Protección integral de tu nombre, logo e identidad ante el SENADI, de inicio a fin.",
  },
  {
    number: "02",
    title: "Cese de uso",
    description:
      "Frenamos a quien usa tu nombre sin autorización y defendemos el valor de lo que construiste.",
  },
  {
    number: "03",
    title: "Constitución S.A.S.",
    description:
      "Formaliza tu empresa con la estructura correcta para operar, crecer y tomar decisiones con claridad.",
  },
  {
    number: "04",
    title: "Contratos empresariales",
    description:
      "Términos y condiciones, confidencialidad, uso de imagen y cesión de derechos para tus operaciones.",
  },
] as const;

const FAQS = [
  {
    question: "¿Qué protege Meiker?",
    answer:
      "Ayudamos a emprendedores y empresas a proteger sus marcas y activos intangibles, y a operar con soluciones legales claras y estratégicas.",
  },
  {
    question: "¿Por qué registrar una marca?",
    answer:
      "En Ecuador, la marca la tiene quien la registra primero. El registro te permite defender tu identidad y construir un activo que acompaña el crecimiento del negocio.",
  },
  {
    question: "¿Cómo es trabajar con Meiker?",
    answer:
      "Explicamos cada paso en lenguaje simple, definimos el alcance desde el inicio y te acompañamos con procesos claros, tiempos y precios transparentes.",
  },
  {
    question: "¿Solo atienden registros de marca?",
    answer:
      "El registro es nuestro producto principal, pero también resolvemos cese de uso, oposición, constitución S.A.S., contratos, derechos de autor, secretos empresariales y protección de datos.",
  },
] as const;

export function AboutHero() {
  return (
    <PhotoEditorialHero
      kind="about"
      title="Sobre Meiker"
      image={`${ABOUT_ASSETS}/team-meeting.jpg`}
      imageAlt="Equipo de Meiker reunido"
      aside={
        <div className="max-w-[250px] text-right text-[var(--fileon-cacao)]">
          <strong className="block text-[64px] font-medium leading-none tracking-[-0.06em]">+150</strong>
          <span className="mt-3 block text-[16px] leading-[1.35] text-[var(--fileon-body)]">marcas registradas en Ecuador</span>
        </div>
      }
    />
  );
}

export function AboutOverviewSection() {
  return (
    <SurfaceSection tone="base" className="overflow-hidden">
      <div className="grid gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-end lg:gap-24">
        <Reveal subtle>
          <SectionHeading
            eyebrow="Quiénes somos"
            title={<>Abogados que sí saben de negocios.</>}
            description="Meiker ayuda a empresas en crecimiento a proteger su marca y los activos que le dan valor a su negocio, para que operen y crezcan con seguridad jurídica."
          />
        </Reveal>

        <Reveal subtle delay={120} className="h-full">
          <div className="flex h-full flex-col justify-between rounded-[34px] border border-[color:rgb(70_19_18_/_8%)] bg-white p-7 text-[var(--fileon-cacao)] shadow-[0_12px_36px_rgba(70,19,18,0.05)] md:p-10">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[var(--fileon-coral)]">
                Nuestra razón de ser
              </p>
              <p className="mt-8 max-w-[470px] text-[clamp(1.65rem,3vw,2.75rem)] leading-[1.02] tracking-[-0.045em]">
                Convertimos procesos legales complejos en decisiones simples y estratégicas.
              </p>
            </div>
            <div className="mt-16 flex items-end justify-between gap-5 border-t border-[color:rgb(70_19_18_/_18%)] pt-5">
              <span className="text-[14px] text-[var(--fileon-body)]">Marcas registradas en Ecuador</span>
              <span className="text-[clamp(3.25rem,7vw,5.5rem)] font-medium leading-none tracking-[-0.08em] text-[var(--fileon-arena)]">
                +150
              </span>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-5 border-t border-[color:rgb(70_19_18_/_18%)] pt-7 md:mt-24 md:grid-cols-3 md:gap-8">
        {[
          ["Misión", "Brindar servicios legales especializados en propiedad intelectual, con foco en el registro de marca, además de soluciones legales que permiten a las empresas operar y escalar con seguridad jurídica."],
          ["Visión", "Convertirnos en la empresa referente en Ecuador en protección legal de marcas y activos empresariales, conectando el mundo empresarial tradicional con la nueva economía digital y tecnológica."],
          ["Valor", "Transformamos procesos legales complejos en soluciones simples y estratégicas, para que entiendas qué proteger y por qué, antes de enfrentar problemas o perder valor en el mercado."],
        ].map(([title, text], index) => (
          <FadeIn key={title} delay={index * 80}>
            <div className="border-l-2 border-[var(--fileon-coral)] pl-5">
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[var(--fileon-coral)]">{title}</p>
              <p className="mt-4 max-w-[330px] text-[16px] leading-[1.55] text-[var(--fileon-body)]">{text}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </SurfaceSection>
  );
}

export function AboutDifferentiatorsSection() {
  return (
    <SurfaceSection tone="base">
      <div className="grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-center lg:gap-24">
        <FadeIn>
          <div className="relative overflow-hidden rounded-[34px] bg-[var(--fileon-brisa)]">
            <Image
              src={`${ABOUT_ASSETS}/agreement.jpg`}
              alt="Detalle de una reunión de trabajo"
              width={854}
              height={1000}
              loading="eager"
              className="h-auto w-full object-cover"
            />
          </div>
        </FadeIn>

        <div>
          <SectionHeading
            eyebrow="Por qué Meiker"
            title={<>Entendemos la estrategia detrás de tu marca.</>}
            description="No solo ingresamos un trámite. Conectamos la protección legal con las decisiones que sostienen tu negocio."
          />
          <div className="mt-10 divide-y divide-[color:rgb(70_19_18_/_18%)] border-y border-[color:rgb(70_19_18_/_18%)]">
            {[
              ["Procesos claros", "Sabes qué sigue, cuánto tarda y qué necesitas en cada etapa."],
              ["Hablamos tu idioma", "Traducimos la ley a decisiones que puedes usar en tu negocio."],
              ["Nos encargamos de todo", "Acompañamos el proceso para que puedas concentrarte en crecer."],
            ].map(([title, text], index) => (
              <FadeIn key={title} delay={index * 90}>
                <div className="grid gap-3 py-5 sm:grid-cols-[190px_1fr] sm:gap-7">
                  <h3 className="text-[19px] font-medium tracking-[-0.035em] text-[var(--fileon-heading)]">{title}</h3>
                  <p className="text-[16px] leading-[1.55] text-[var(--fileon-body)]">{text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </SurfaceSection>
  );
}

export function AboutTeamSection() {
  return (
    <SurfaceSection tone="brisa" id="equipo">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          eyebrow="Nuestro equipo"
          title={<>Personas que entienden tu negocio.</>}
          description="Un equipo que combina propiedad intelectual, visión empresarial y comunicación para cuidar lo que estás construyendo."
        />
        <MeikerButton href="/equipo" variant="coral">Conoce al equipo</MeikerButton>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-3 md:gap-5 xl:mt-20">
        {TEAM.map((member, index) => (
          <FadeIn key={member.name} delay={index * 100}>
            <ImageCard
              src={member.image}
              alt={member.name}
              name={member.name}
              role={member.role}
              href="/equipo"
            />
          </FadeIn>
        ))}
      </div>
    </SurfaceSection>
  );
}

export function AboutOutcomesSection() {
  return (
    <SurfaceSection tone="base" id="servicios">
      <SectionHeading
        eyebrow="Lo que hacemos"
        title={<>Protección legal que se nota en tu operación.</>}
        description="Desde registrar tu marca hasta blindar tus contratos y constituir tu empresa, diseñamos soluciones que acompañan cada etapa."
      />

      <div className="mt-14 grid gap-4 md:grid-cols-2 xl:mt-20 xl:grid-cols-4">
        {OUTCOMES.map((outcome, index) => (
          <FadeIn key={outcome.number} delay={index * 80}>
            <Link
              href="/servicios"
              className="meiker-hover-lift group flex min-h-[285px] flex-col justify-between rounded-[32px] border border-[color:rgb(70_19_18_/_12%)] bg-white p-6 no-underline shadow-[0_8px_24px_rgba(70,19,18,0.04)] hover:border-[color:rgb(255_91_53_/_48%)] hover:shadow-[0_16px_34px_rgba(70,19,18,0.08)] md:p-7"
            >
              <div className="flex items-center justify-between">
                <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[var(--fileon-coral)]">{outcome.number}</span>
              </div>
              <div>
                <h3 className="text-[24px] font-medium leading-[1.03] tracking-[-0.045em] text-[var(--fileon-heading)]">{outcome.title}</h3>
                <p className="mt-4 text-[15px] leading-[1.55] text-[var(--fileon-body)]">{outcome.description}</p>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </SurfaceSection>
  );
}

export function AboutStorySection() {
  return (
    <SurfaceSection tone="brisa" id="historia">
      <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
        <div className="flex max-w-[760px] flex-col items-start gap-5">
          <div className="flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-[var(--fileon-coral)]">
            <span className="h-2.5 w-2.5 bg-[var(--fileon-coral)]" aria-hidden />
            <span>Nuestra historia</span>
          </div>
          <h2 className="text-balance text-[clamp(2.35rem,5vw,5rem)] font-medium leading-[0.98] tracking-[-0.055em] text-[var(--fileon-heading)]">
            Legal pensado para negocios reales.
          </h2>
          <p className="max-w-[620px] text-[17px] leading-[1.55] text-[var(--fileon-body)]">
            Meiker nace para acompañar a quienes están construyendo algo valioso en Ecuador.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["El origen", "Vimos que muchas empresas necesitaban entender la estrategia legal detrás de su marca, no solo resolver un trámite."],
            ["La especialidad", "Convertimos propiedad intelectual y asuntos empresariales en procesos ordenados, claros y accionables."],
            ["Lo que sigue", "Seguimos creciendo junto a marcas que quieren operar, proteger sus activos y escalar con seguridad."],
          ].map(([title, text], index) => (
            <FadeIn key={title} delay={index * 100}>
              <article className="flex min-h-[260px] flex-col justify-between border-t border-[color:rgb(70_19_18_/_18%)] pt-5">
                <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[var(--fileon-coral)]">0{index + 1}</span>
                <div>
                  <h3 className="text-[24px] font-medium leading-[1.03] tracking-[-0.045em] text-[var(--fileon-heading)]">{title}</h3>
                  <p className="mt-4 text-[15px] leading-[1.55] text-[var(--fileon-body)]">{text}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </SurfaceSection>
  );
}

export function AboutFaqSection() {
  return (
    <SurfaceSection tone="base" id="faq">
      <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="FAQ"
            title={<>Lo esencial, sin vueltas.</>}
            description="Si no encuentras tu respuesta, conversemos sobre lo que necesita tu negocio."
          />
          <div className="mt-8">
            <MeikerButton href="/contacto" variant="coral">Agenda una asesoría</MeikerButton>
          </div>
        </div>
        <FadeIn>
          <FaqList items={FAQS} />
        </FadeIn>
      </div>
    </SurfaceSection>
  );
}

export function AboutPage() {
  return (
    <div className="fileon relative w-full" style={MEIKER_THEME}>
      <EditorialHeader />
      <main>
        <AboutHero />
        <AboutOverviewSection />
        <AboutDifferentiatorsSection />
        <AboutTeamSection />
        <AboutOutcomesSection />
        <AboutStorySection />
        <AboutFaqSection />
      </main>
      <Footer />
    </div>
  );
}
