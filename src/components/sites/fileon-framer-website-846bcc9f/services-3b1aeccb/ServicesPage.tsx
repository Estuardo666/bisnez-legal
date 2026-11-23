import Image from "next/image";
import type { CSSProperties } from "react";

import { Footer } from "@/components/sites/fileon-framer-website-846bcc9f/root-8a5edab2/Footer";
import { EditorialHeader } from "@/components/sites/fileon-framer-website-846bcc9f/shared/EditorialHeader";
import {
  FadeIn,
  FaqList,
  MEIKER,
  MeikerButton,
  SectionHeading,
  SurfaceSection,
} from "@/components/sites/fileon-framer-website-846bcc9f/shared/PagePrimitives";
import { PhotoEditorialHero } from "@/components/sites/fileon-framer-website-846bcc9f/shared/InternalHero";
import { Reveal } from "@/components/sites/fileon-framer-website-846bcc9f/shared/Reveal";
import { ServiceCarousel } from "@/components/sites/fileon-framer-website-846bcc9f/services-3b1aeccb/ServiceCarousel";

const SERVICES_ASSETS = "/meiker/images";

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

const CORE_SERVICES = [
  {
    number: "01",
    id: "registro-de-marca",
    href: "/servicios/registro-de-marca",
    title: "Registro de marca",
    image: "/meiker/images/servicios/registro-de-marca.webp",
    imageAlt: "Sello de registro sobre un documento de marca en un escritorio",
    tag: "Servicio principal",
    description:
      "Gestionamos el proceso completo ante el SENADI para que tu nombre, logo e identidad sean legalmente tuyos.",
  },
  {
    number: "02",
    id: "cese-de-uso",
    href: "/servicios/cese-de-uso",
    title: "Cese de uso",
    image: "/meiker/images/servicios/cese-de-uso.webp",
    imageAlt: "Dos empaques casi idénticos frenados por una señal de alto",
    tag: "Defensa de marca",
    description:
      "Actuamos cuando alguien usa tu nombre sin autorización y ponemos límites antes de que afecte tu negocio.",
  },
  {
    number: "03",
    id: "constitucion",
    href: "/servicios/constitucion-sas",
    title: "Constitución S.A.S.",
    image: "/meiker/images/servicios/constitucion-sas.webp",
    imageAlt: "Bloques que forman un edificio junto a una carpeta y una llave",
    tag: "Estructura empresarial",
    description:
      "Formaliza tu empresa con la estructura correcta para crecer, contratar y tomar decisiones con seguridad.",
  },
  {
    number: "04",
    id: "contratos",
    href: "/servicios/contratos-empresariales",
    title: "Contratos empresariales",
    image: "/meiker/images/servicios/contratos-empresariales.webp",
    imageAlt: "Contrato con dos bolígrafos cruzados sobre una mesa de trabajo",
    tag: "Operación diaria",
    description:
      "Términos y condiciones, confidencialidad, uso de imagen y cesión de derechos para relaciones más claras.",
  },
  {
    number: "05",
    id: "activos-intangibles",
    href: "/servicios/activos-intangibles",
    title: "Activos intangibles",
    image: "/meiker/images/servicios/activos-intangibles.webp",
    imageAlt: "Cuaderno y bombilla protegidos dentro de una vitrina de vidrio",
    tag: "Protección estratégica",
    description:
      "Protegemos metodologías, manuales, procesos, bases de clientes y otros activos que hacen único a tu negocio.",
  },
] as const;

const EXTENDED_SERVICES = [
  {
    number: "06",
    id: "oposicion-y-vigilancia",
    href: "/servicios/oposicion-y-vigilancia",
    title: "Oposición y vigilancia",
    tag: "Defensa y monitoreo",
    description: "Detectamos solicitudes y usos que puedan afectar la identidad de tu marca y te ayudamos a decidir cómo responder.",
    image: "/meiker/images/servicios/oposicion-y-vigilancia.webp",
    imageAlt: "Lupa revisando muestras de color de una marca",
  },
  {
    number: "07",
    id: "derechos-de-autor",
    href: "/servicios/derechos-de-autor",
    title: "Derechos de autor",
    tag: "Ideas y contenido",
    description: "Ordenamos la protección de obras, metodologías, manuales comerciales y contenidos que diferencian tu negocio.",
    image: "/meiker/images/servicios/derechos-de-autor.webp",
    imageAlt: "Cuaderno de bocetos, cámara y manuscrito en un escritorio creativo",
  },
  {
    number: "08",
    id: "prevencion-empresarial",
    href: "/servicios/prevencion-empresarial",
    title: "Prevención empresarial",
    tag: "Decisiones seguras",
    description: "Identificamos puntos vulnerables en la operación y organizamos medidas prácticas antes de que se conviertan en problemas.",
    image: "/meiker/images/servicios/prevencion-empresarial.webp",
    imageAlt: "Escritorio ordenado con agenda, lista de control y paraguas",
  },
] as const;

const FAQS = [
  {
    question: "¿Qué incluye el registro de marca?",
    answer:
      "Revisamos la viabilidad, preparamos la solicitud, gestionamos el trámite ante el SENADI y te acompañamos durante el proceso hasta su resolución.",
  },
  {
    question: "¿Cuánto tarda registrar una marca?",
    answer:
      "El proceso puede tomar entre seis y doce meses, según las etapas y novedades del trámite. Te mantenemos informado con claridad durante todo el camino.",
  },
  {
    question: "¿Por cuánto tiempo queda protegida?",
    answer:
      "Una marca registrada tiene una vigencia de diez años y puede renovarse para seguir protegiendo el activo que construiste.",
  },
  {
    question: "¿Puedo contratar solo un servicio?",
    answer:
      "Sí. Partimos de la necesidad actual de tu empresa y podemos sumar nuevas soluciones a medida que tu operación y tus activos crecen.",
  },
] as const;

export function ServicesHero() {
  return (
    <PhotoEditorialHero
      kind="services"
      title="Legal claro para crecer"
      image={`${SERVICES_ASSETS}/servicios/servicios-hero.webp`}
      imageAlt="Sala de reuniones luminosa en la oficina de Meiker"
      cta={{ label: "Agendar asesoría", href: "/contacto" }}
    />
  );
}

export function ServicesOverviewSection() {
  return (
    <SurfaceSection tone="base" className="overflow-hidden">
      <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-24">
        <Reveal subtle>
          <SectionHeading
            eyebrow="Lo que hacemos"
            title={<>De tu marca a toda tu operación.</>}
            description="Meiker combina propiedad intelectual y soluciones legales empresariales para que puedas concentrarte en hacer crecer tu negocio."
          />
          <div className="mt-9 flex flex-wrap gap-3">
            <MeikerButton href="/contacto" variant="coral">Quiero registrar mi marca</MeikerButton>
            <MeikerButton href="/nosotros" variant="canela">Conoce Meiker</MeikerButton>
          </div>
        </Reveal>

        <FadeIn delay={120}>
          <div className="relative overflow-hidden rounded-[36px] bg-[var(--fileon-brisa)]">
            <Image
              src={`${SERVICES_ASSETS}/servicios/servicios-resumen.webp`}
              alt="Escritorio con tarjeta de marca, contrato y sello de empresa"
              width={1024}
              height={1536}
              loading="eager"
              className="h-auto w-full object-cover"
            />
          </div>
        </FadeIn>
      </div>
    </SurfaceSection>
  );
}

export function ServicesCardGrid() {
  return (
    <SurfaceSection tone="base" id="servicios">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          eyebrow="Servicios"
          title={<>Soluciones para crecer protegido.</>}
          description="Empezamos por lo esencial y construimos contigo una protección legal que puede escalar."
        />
        <span className="hidden text-[12px] font-semibold uppercase tracking-[0.18em] text-[var(--fileon-body)] md:block">08 soluciones</span>
      </div>

      <div className="mt-12 xl:mt-16">
        <ServiceCarousel items={CORE_SERVICES} label="Servicios principales" />
      </div>
    </SurfaceSection>
  );
}

export function ServicesExtendedSection() {
  return (
    <SurfaceSection tone="brisa">
      <div className="grid gap-10 lg:grid-cols-[0.66fr_1.34fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="A medida que creces"
            title={<>La protección también evoluciona.</>}
            description="Tres especialidades que completan el cuidado de tu marca, tus ideas y la operación diaria de tu empresa."
          />
          <div className="mt-9">
            <MeikerButton href="/contacto" variant="coral">Conversemos sobre tu caso</MeikerButton>
          </div>
        </div>
        <div className="min-w-0">
          <ServiceCarousel items={EXTENDED_SERVICES} label="Servicios complementarios" />
        </div>
      </div>
    </SurfaceSection>
  );
}

export function ServicesCtaSection() {
  return (
    <SurfaceSection tone="base" id="consulta">
      <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-end lg:gap-24">
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[var(--fileon-coral)]">Da el siguiente paso</p>
          <h2 className="mt-6 max-w-[760px] text-balance text-[clamp(3rem,7vw,7rem)] font-medium leading-[0.92] tracking-[-0.07em] text-[var(--fileon-heading)]">
            Protege hoy lo que construiste.
          </h2>
        </div>
        <div className="lg:pb-2">
          <p className="max-w-[470px] text-[18px] leading-[1.5] text-[var(--fileon-body)]">
            Agenda tu asesoría gratuita y descubre qué necesita tu negocio para operar y crecer con seguridad jurídica.
          </p>
          <div className="mt-8">
            <MeikerButton href="/contacto" variant="coral">Quiero mi asesoría gratis</MeikerButton>
          </div>
        </div>
      </div>
    </SurfaceSection>
  );
}

export function ServicesFaqSection() {
  return (
    <SurfaceSection tone="base" id="faq">
      <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
        <SectionHeading
          eyebrow="Preguntas frecuentes"
          title={<>Lo importante, antes de empezar.</>}
          description="Te explicamos el proceso y el alcance para que tomes decisiones con información completa."
        />
        <FadeIn>
          <FaqList items={FAQS} />
        </FadeIn>
      </div>
    </SurfaceSection>
  );
}

export function ServicesPage() {
  return (
    <div className="fileon relative w-full" style={MEIKER_THEME}>
      <EditorialHeader />
      <main>
        <ServicesHero />
        <ServicesOverviewSection />
        <ServicesCardGrid />
        <ServicesExtendedSection />
        <ServicesCtaSection />
        <ServicesFaqSection />
      </main>
      <Footer />
    </div>
  );
}
