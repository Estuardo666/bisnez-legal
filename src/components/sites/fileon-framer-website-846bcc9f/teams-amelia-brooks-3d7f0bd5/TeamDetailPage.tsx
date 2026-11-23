import Image from "next/image";
import { Mail, Phone } from "lucide-react";

import { Footer } from "@/components/sites/fileon-framer-website-846bcc9f/root-8a5edab2/Footer";
import { EditorialHeader } from "@/components/sites/fileon-framer-website-846bcc9f/shared/EditorialHeader";
import { FadeIn, MeikerButton } from "@/components/sites/fileon-framer-website-846bcc9f/shared/PagePrimitives";

const ASSETS = "/meiker/images";

const PRACTICE = [
  {
    title: "Registro y protección de marcas",
    body: "Acompaña la búsqueda, solicitud y seguimiento de marcas ante el SENADI, ayudando a cada cliente a entender qué protege y cómo puede reducir riesgos antes de invertir en su identidad.",
  },
  {
    title: "Propiedad Intelectual para negocios",
    body: "Identifica los activos intangibles que sostienen el valor de una empresa: nombres comerciales, metodologías, contenido, manuales, procesos y derechos relacionados.",
  },
  {
    title: "Prevención y seguridad jurídica",
    body: "Convierte problemas legales complejos en decisiones concretas, con una mirada preventiva que ayuda a los negocios a operar y crecer con mayor claridad.",
  },
  {
    title: "Estrategia legal clara",
    body: "Su enfoque conecta la protección jurídica con los objetivos comerciales para que el derecho funcione como una herramienta de negocio y no como una barrera.",
  },
] as const;

export function TeamDetailPage() {
  return (
    <div className="fileon min-h-screen overflow-x-clip bg-[var(--fileon-bg)]">
      <EditorialHeader />
      <main>
        <section className="relative flex min-h-[290px] items-end overflow-hidden px-5 pb-8 text-white md:min-h-[574px] md:px-[70px] md:pb-[82px]">
          <Image src={`${ASSETS}/team-meeting.jpg`} alt="Equipo Meiker en una reunión de trabajo" fill priority sizes="100vw" className="object-cover object-center" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(70,19,18,0.58),rgba(70,19,18,0.12)_75%)]" />
          <FadeIn subtle>
            <div className="relative z-[1] mx-auto w-full max-w-[1300px]">
              <div className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.16em]"><span className="h-2.5 w-2.5 bg-[var(--fileon-coral)]" /> Equipo Meiker</div>
              <h1 className="max-w-[850px] text-[40px] font-medium leading-[1.06] tracking-[-0.05em] md:text-[64px] md:leading-[1.15]">Perfil profesional</h1>
            </div>
          </FadeIn>
        </section>

        <section className="px-5 py-16 md:px-[70px] md:py-28 xl:py-32">
          <div className="mx-auto grid max-w-[1300px] gap-10 lg:grid-cols-[560px_minmax(0,1fr)] lg:gap-10">
            <FadeIn subtle>
              <div className="lg:pt-[130px]">
                <div className="relative aspect-[401/315] w-full max-w-[401px] overflow-hidden rounded-[34px]">
                  <Image src={`${ASSETS}/lawyer-portrait.jpg`} alt="Augusto Abendaño, socio fundador de Meiker" fill priority sizes="(min-width:1024px) 401px, 100vw" className="object-cover object-[center_22%]" />
                </div>
              </div>
            </FadeIn>

            <div>
              <FadeIn delay={45} subtle>
                <aside className="rounded-[32px] border border-[color:rgb(70_19_18_/_9%)] bg-white p-6 shadow-[0_10px_30px_rgba(70,19,18,0.045)] md:p-8">
                  <div className="grid gap-7 md:grid-cols-[1fr_1fr] md:items-start">
                    <div>
                      <h2 className="text-[38px] font-medium leading-[1.08] tracking-[-0.045em] text-[var(--fileon-heading)]">Augusto Abendaño</h2>
                      <p className="mt-2 text-[15px] text-[var(--fileon-body)]">Socio fundador · Propiedad Intelectual</p>
                    </div>
                    <div className="grid gap-4 text-[14px] text-[var(--fileon-body)]">
                      <a href="https://wa.me/593959652566" target="_blank" rel="noopener noreferrer" className="flex min-h-11 items-center gap-3 text-inherit no-underline transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-[var(--fileon-coral)]"><Phone size={19} strokeWidth={1.5} />095 965 2566</a>
                      <a href="mailto:augusto@bisnez.legal" className="flex min-h-11 items-center gap-3 text-inherit no-underline transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-[var(--fileon-coral)]"><Mail size={19} strokeWidth={1.5} />augusto@bisnez.legal</a>
                    </div>
                  </div>
                </aside>
              </FadeIn>

              <article className="mt-14 text-[16px] leading-[1.62] text-[var(--fileon-body)]">
                <FadeIn subtle>
                  <section>
                    <h2 className="text-[28px] font-medium leading-[1.2] tracking-[-0.035em] text-[var(--fileon-heading)]">Augusto Abendaño</h2>
                    <p className="mt-6">Augusto es socio fundador de Meiker y especialista en Propiedad Intelectual. Su trabajo se concentra en proteger marcas y otros activos intangibles que diferencian a un negocio y sostienen su crecimiento.</p>
                    <p className="mt-5">Desde el primer diagnóstico traduce el lenguaje legal en decisiones claras para que cada cliente sepa qué está protegiendo, qué riesgo enfrenta y cuál es el siguiente paso.</p>
                  </section>
                </FadeIn>

                <FadeIn subtle>
                  <section className="mt-9">
                    <h3 className="text-[25px] font-medium leading-[1.2] tracking-[-0.03em] text-[var(--fileon-heading)]">Como socio fundador</h3>
                    <p className="mt-5">Acompaña a emprendedores y empresas desde la definición de su estrategia de marca hasta la protección, defensa y organización jurídica de los activos que crean valor.</p>
                  </section>
                </FadeIn>

                {PRACTICE.map((item, index) => (
                  <FadeIn key={item.title} delay={index * 35} subtle>
                    <section className="mt-9">
                      <h3 className="text-[25px] font-medium leading-[1.2] tracking-[-0.03em] text-[var(--fileon-heading)]">{item.title}</h3>
                      <p className="mt-5">{item.body}</p>
                    </section>
                  </FadeIn>
                ))}
              </article>

              <div className="mt-14 grid gap-4 sm:grid-cols-2">
                <FadeIn subtle>
                  <article className="rounded-[32px] bg-[var(--fileon-brisa)] p-6">
                    <h3 className="text-[20px] font-medium text-[var(--fileon-heading)]">Especialidad profesional</h3>
                    <p className="mt-8 text-[15px] leading-[1.55] text-[var(--fileon-body)]">Propiedad Intelectual y registro de marcas en Ecuador.</p>
                  </article>
                </FadeIn>
                <FadeIn delay={45} subtle>
                  <article className="rounded-[28px] bg-[var(--fileon-brisa)] p-6">
                    <h3 className="text-[20px] font-medium text-[var(--fileon-heading)]">Enfoque</h3>
                    <p className="mt-8 text-[15px] leading-[1.55] text-[var(--fileon-body)]">Procesos claros, lenguaje sencillo y una estrategia conectada con el negocio.</p>
                  </article>
                </FadeIn>
              </div>

              <div className="mt-16 flex flex-wrap gap-3">
                <MeikerButton href="/contacto" variant="coral">Agendar asesoría</MeikerButton>
                <MeikerButton href="/equipo" variant="canela">Volver al equipo</MeikerButton>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
