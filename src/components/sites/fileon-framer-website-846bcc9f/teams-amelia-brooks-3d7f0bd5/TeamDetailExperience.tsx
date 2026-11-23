import {
  Eyebrow,
  SurfaceSection,
} from "@/components/sites/fileon-framer-website-846bcc9f/shared/PagePrimitives";
import { Reveal } from "@/components/sites/fileon-framer-website-846bcc9f/shared/Reveal";

const EXPERIENCE = [
  {
    number: "01",
    title: "Registro y protección de marcas",
    description:
      "Define la ruta para registrar tu nombre, logo e identidad ante el SENADI y acompaña el proceso completo hasta dejar tu marca protegida.",
  },
  {
    number: "02",
    title: "Propiedad Intelectual para negocios",
    description:
      "Identifica y protege los activos intangibles que diferencian a tu empresa: metodologías, procesos, manuales, obras y bases de datos.",
  },
  {
    number: "03",
    title: "Constitución empresarial",
    description:
      "Ayuda a formalizar empresas mediante una estructura S.A.S. adecuada para operar, ordenar responsabilidades y crecer con claridad.",
  },
  {
    number: "04",
    title: "Contratos y acuerdos comerciales",
    description:
      "Acompaña la creación de términos y condiciones, confidencialidad, uso de imagen, cesión de derechos y otros acuerdos empresariales.",
  },
  {
    number: "05",
    title: "Prevención y seguridad jurídica",
    description:
      "Convierte procesos legales complejos en pasos claros, con comunicación sencilla y una mirada preventiva para evitar problemas costosos.",
  },
] as const;

/** TeamDetailExperience — the detail-page experience list, adapted to Meiker practice areas. */
export function TeamDetailExperience() {
  return (
    <SurfaceSection tone="brisa" id="experiencia">
      <div className="grid gap-14 xl:grid-cols-[0.72fr_1.28fr] xl:gap-24">
        <div>
          <Eyebrow>Experiencia</Eyebrow>
          <h2 className="mt-5 max-w-[620px] text-balance font-[family-name:var(--fileon-font-sans)] text-[clamp(2.35rem,5vw,5rem)] font-medium leading-[0.98] tracking-[-0.055em] text-[var(--fileon-heading)]">
            Conocimiento legal aplicado a decisiones de negocio
          </h2>
          <p className="mt-5 max-w-[620px] text-[17px] leading-[1.55] text-[var(--fileon-body)]">
            El enfoque de Augusto parte del contexto real de cada empresa para
            diseñar una protección útil, comprensible y lista para acompañar
            su siguiente etapa.
          </p>
        </div>
        <div className="flex flex-col border-t border-[color:rgb(70_19_18_/_18%)]">
          {EXPERIENCE.map((item, index) => (
            <Reveal key={item.number} delay={index * 70} fromScale={0.98}>
              <article className="grid gap-5 border-b border-[color:rgb(70_19_18_/_18%)] py-7 md:grid-cols-[70px_minmax(0,1fr)] md:gap-8 md:py-9">
                <p className="font-[family-name:var(--fileon-font-mono)] text-[13px] uppercase tracking-[0.16em] text-[var(--fileon-coral)]">
                  {item.number}
                </p>
                <div>
                  <h3 className="text-[24px] font-medium leading-[1.15] tracking-[-0.035em] text-[var(--fileon-heading)] md:text-[30px]">
                    {item.title}
                  </h3>
                  <p className="mt-4 max-w-[660px] text-[16px] leading-[1.6] text-[var(--fileon-body)]">
                    {item.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </SurfaceSection>
  );
}
