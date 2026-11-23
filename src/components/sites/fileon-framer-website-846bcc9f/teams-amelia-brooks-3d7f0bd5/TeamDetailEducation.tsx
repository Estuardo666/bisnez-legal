import Link from "next/link";

import {
  Eyebrow,
  SectionHeading,
  SurfaceSection,
} from "@/components/sites/fileon-framer-website-846bcc9f/shared/PagePrimitives";
import { Reveal } from "@/components/sites/fileon-framer-website-846bcc9f/shared/Reveal";
import { MotionArrowButton } from "@/components/sites/fileon-framer-website-846bcc9f/shared/MotionArrowButton";

const FOCUS_AREAS = [
  {
    label: "Especialidad profesional",
    title: "Propiedad Intelectual",
    description:
      "Registro de marcas y protección estratégica de la identidad y los activos que dan valor a cada negocio.",
  },
  {
    label: "Aplicación empresarial",
    title: "Negocios con seguridad jurídica",
    description:
      "Constitución de empresas, contratos y soluciones legales claras para operar y escalar en Ecuador.",
  },
] as const;

/** TeamDetailEducation — education block preserved as professional formation and focus. */
export function TeamDetailEducation() {
  return (
    <>
      <SurfaceSection tone="brisa" id="formacion">
        <div className="grid gap-12 xl:grid-cols-[0.72fr_1.28fr] xl:gap-24">
          <SectionHeading
            eyebrow="Formación y enfoque"
            title="Una práctica legal pensada para el mundo real"
            description="La experiencia de Augusto conecta la Propiedad Intelectual con las decisiones concretas que una empresa debe tomar para protegerse y crecer."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {FOCUS_AREAS.map((item, index) => (
              <Reveal key={item.title} delay={index * 100} fromScale={0.96}>
                <article className="flex h-full flex-col justify-between rounded-[12px] bg-white p-6 md:p-8">
                  <div>
                    <Eyebrow>{item.label}</Eyebrow>
                    <h3 className="mt-9 text-[26px] font-medium leading-[1.05] tracking-[-0.04em] text-[var(--fileon-heading)] md:text-[32px]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-14 text-[16px] leading-[1.6] text-[var(--fileon-body)]">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </SurfaceSection>

      <SurfaceSection tone="arena" className="!pt-0 md:!pt-0 xl:!pt-0">
        <Reveal fromScale={0.98}>
          <div className="flex flex-col gap-7 border-t border-[color:rgb(70_19_18_/_20%)] pt-8 md:flex-row md:items-center md:justify-between md:gap-10 md:pt-10">
            <div>
              <p className="font-[family-name:var(--fileon-font-mono)] text-[13px] uppercase tracking-[0.16em] text-[var(--fileon-cacao)]">
                Perfil del equipo
              </p>
              <p className="mt-3 text-[16px] leading-[1.5] text-[var(--fileon-body)]">
                Conoce más sobre el equipo que protege las marcas de Ecuador.
              </p>
            </div>
            <MotionArrowButton href="/equipo">Volver al equipo</MotionArrowButton>
          </div>
        </Reveal>
      </SurfaceSection>
    </>
  );
}
