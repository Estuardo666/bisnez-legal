import Image from "next/image";

import {
  Eyebrow,
  MeikerButton,
  SectionHeading,
  SurfaceSection,
} from "@/components/sites/fileon-framer-website-846bcc9f/shared/PagePrimitives";
import { Reveal } from "@/components/sites/fileon-framer-website-846bcc9f/shared/Reveal";

const IMAGE_BASE =
  "/meiker/images";

/** TeamDetailProfile — portrait, contact details, biography and founding role. */
export function TeamDetailProfile() {
  return (
    <SurfaceSection tone="base" className="pt-16 md:pt-24 xl:pt-32" id="perfil">
      <div className="grid gap-12 xl:grid-cols-[minmax(280px,0.72fr)_minmax(0,1.28fr)] xl:gap-24">
        <Reveal className="self-start">
          <div className="overflow-hidden rounded-[34px] bg-[var(--fileon-brisa)]">
            <div className="relative aspect-[0.854] w-full">
              <Image
                src={`${IMAGE_BASE}/lawyer-portrait.jpg`}
                alt="Retrato editorial del perfil de Augusto Abendaño"
                fill
                loading="eager"
                sizes="(min-width: 1380px) 31vw, (min-width: 810px) 42vw, 100vw"
                className="object-cover object-center"
              />
            </div>
            <div className="flex flex-col gap-5 p-6 md:p-8">
              <div>
                <p className="font-[family-name:var(--fileon-font-sans)] text-2xl font-medium leading-tight tracking-[-0.04em] text-[var(--fileon-cacao)]">
                  Augusto Abendaño
                </p>
                <p className="mt-2 text-[15px] leading-[1.5] text-[var(--fileon-body)]">
                  Socio fundador · Especialista en Propiedad Intelectual
                </p>
              </div>
              <div className="flex flex-col gap-3 border-t border-[color:rgb(70_19_18_/_18%)] pt-5 text-[15px] leading-[1.5] text-[var(--fileon-body)]">
                <a
                  href="https://wa.me/593959652566"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-[var(--fileon-coral)]"
                >
                  095 965 2566
                </a>
                <a href="mailto:augusto@bisnez.legal" className="transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-[var(--fileon-coral)]">augusto@bisnez.legal</a>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col gap-10 md:gap-14 xl:pt-3">
          <SectionHeading
            eyebrow="Quién está detrás"
            title="Estrategia legal que impulsa tu negocio"
            description="Meiker acompaña a emprendedores y empresas a convertir sus activos intangibles en una base sólida para operar, posicionarse y crecer con seguridad jurídica."
          />
          <Reveal delay={120}>
            <div className="flex flex-col gap-7 text-[17px] leading-[1.65] text-[var(--fileon-body)]">
              <p>
                Augusto Abendaño es socio fundador de Meiker y especialista en
                Propiedad Intelectual. Su trabajo se enfoca en proteger marcas,
                nombres comerciales y otros activos que sostienen el valor de
                un negocio en Ecuador.
              </p>
              <p>
                Desde el primer diagnóstico, traduce el lenguaje legal en
                decisiones claras para que cada cliente entienda qué está
                protegiendo, qué necesita hacer y cómo puede avanzar sin
                exponer lo que ha construido.
              </p>
              <div className="rounded-[12px] border border-[color:rgb(70_19_18_/_18%)] bg-white/60 p-6 md:p-8">
                <Eyebrow>Como socio fundador</Eyebrow>
                <p className="mt-5 max-w-[650px] text-[19px] leading-[1.5] tracking-[-0.02em] text-[var(--fileon-cacao)] md:text-[22px]">
                  Acompaña a los negocios desde el registro de su marca hasta
                  la constitución, los contratos y la protección estratégica de
                  sus activos intangibles.
                </p>
                <div className="mt-7">
                  <MeikerButton href="/contacto" variant="coral">
                    Agenda una asesoría
                  </MeikerButton>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </SurfaceSection>
  );
}
