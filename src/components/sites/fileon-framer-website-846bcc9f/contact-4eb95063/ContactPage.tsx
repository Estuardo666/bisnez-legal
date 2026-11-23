import Image from "next/image";
import { ArrowUpRight, Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { Eyebrow, FadeIn, FaqList, MeikerButton } from "@/components/sites/fileon-framer-website-846bcc9f/shared/PagePrimitives";
import { MotionArrowButton } from "@/components/sites/fileon-framer-website-846bcc9f/shared/MotionArrowButton";

const ASSETS = "/meiker/images";
const ADDRESS = "Sucre entre Rocafuerte y 10 de Agosto";
const HOURS = "De 9:00 a 19:00";

const METHODS = [
  { label: "WhatsApp", value: "095 965 2566", href: "https://wa.me/593959652566", icon: MessageCircle, external: true, tone: "brisa" },
  { label: "Llámanos", value: "099 356 0952", href: "tel:+593993560952", icon: Phone, external: false, tone: "coral" },
  { label: "Correo electrónico", value: "augusto@bisnez.legal", href: "mailto:augusto@bisnez.legal", icon: Mail, external: false, tone: "cacao" },
] as const;

const FAQS = [
  { question: "¿Qué tipo de negocios acompaña Meiker?", answer: "Acompañamos a emprendedores, empresas en crecimiento y compañías consolidadas que buscan proteger su marca y operar con seguridad jurídica." },
  { question: "¿Cómo es la primera conversación?", answer: "Escuchamos tu situación, identificamos el riesgo principal y te explicamos con claridad las alternativas y el siguiente paso." },
  { question: "¿Qué debo llevar a la asesoría?", answer: "Puedes compartir tu nombre comercial, logo, RUC, contratos o cualquier documento relacionado. Si estás empezando, basta con contarnos qué quieres construir." },
  { question: "¿Meiker puede registrar mi marca?", answer: "Sí. Revisamos la viabilidad, presentamos la solicitud ante el SENADI y acompañamos el trámite hasta su resolución." },
  { question: "¿Cuánto demora recibir una respuesta?", answer: "Te contactamos para coordinar la conversación inicial y, una vez revisado tu caso, te explicamos tiempos, alcance y próximos pasos." },
  { question: "¿Dónde atiende Meiker?", answer: "Acompañamos a emprendedores y empresas en todo Ecuador. Puedes visitarnos en Sucre entre Rocafuerte y 10 de Agosto, de 9:00 a 19:00, o coordinar una asesoría en línea." },
] as const;

export function ContactPage() {
  return (
    <div className="overflow-hidden bg-[var(--fileon-bg)]">
      <section className="relative flex min-h-[250px] items-end overflow-hidden px-5 pb-8 text-white md:min-h-[647px] md:px-[70px] md:pb-[82px]">
        <Image src={`${ASSETS}/legal-team.jpg`} alt="Equipo joven trabajando en una asesoría para empresas" fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(70,19,18,0.46),rgba(70,19,18,0.04)_70%)]" />
        <div className="relative z-[1] mx-auto w-full max-w-[1300px]">
          <FadeIn subtle>
            <div className="max-w-[720px]">
              <div className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.16em]"><span className="h-2.5 w-2.5 bg-[var(--fileon-coral)]" /> Contacto</div>
              <h1 className="text-balance text-[40px] font-medium leading-[1.06] tracking-[-0.05em] md:text-[64px] md:leading-[1.15]">Hablemos de tu negocio</h1>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="px-5 py-8 md:px-[70px] md:py-[60px]">
        <div className="mx-auto grid max-w-[1300px] gap-3 md:grid-cols-2 xl:grid-cols-3">
          {METHODS.map((method, index) => {
            const Icon = method.icon;
            return (
              <FadeIn key={method.label} delay={index * 45} subtle>
                <a href={method.href} target={method.external ? "_blank" : undefined} rel={method.external ? "noopener noreferrer" : undefined} className={`meiker-hover-lift group flex min-h-[185px] touch-manipulation flex-col justify-between rounded-[32px] border border-white/50 p-6 no-underline shadow-[0_8px_24px_rgba(70,19,18,0.07)] hover:shadow-[0_16px_34px_rgba(70,19,18,0.12)] active:scale-[.99] md:min-h-[250px] ${method.tone === "brisa" ? "bg-[var(--fileon-brisa)] text-[var(--fileon-cacao)]" : method.tone === "coral" ? "bg-[var(--fileon-coral)] text-[var(--fileon-cacao)]" : "bg-[var(--fileon-cacao)] text-[var(--fileon-arena)]"}`}>
                  <Icon size={36} strokeWidth={1.4} aria-hidden />
                  <div>
                    <p className={`text-[11px] font-semibold uppercase tracking-[0.15em] ${method.tone === "cacao" ? "text-[var(--fileon-arena)]/75" : "text-[var(--fileon-cacao)]/70"}`}>{method.label}</p>
                    <div className="mt-4 flex items-center justify-between gap-4">
                      <p className="min-w-0 break-words text-[20px] font-medium tracking-[-0.035em] md:text-[25px]">{method.value}</p>
                      <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rotate-45 ${method.tone === "coral" ? "bg-white text-[var(--fileon-cacao)]" : "bg-[var(--fileon-coral)] text-white"}`}><ArrowUpRight size={18} /></span>
                    </div>
                  </div>
                </a>
              </FadeIn>
            );
          })}
        </div>
        <FadeIn delay={140} subtle>
          <div className="mx-auto mt-3 grid max-w-[1300px] gap-3 rounded-[32px] border border-[color:rgb(70_19_18_/_9%)] bg-white p-6 text-[var(--fileon-cacao)] shadow-[0_8px_24px_rgba(70,19,18,0.05)] md:grid-cols-2 md:p-8">
            <div className="flex items-start gap-4">
              <MapPin size={26} strokeWidth={1.4} aria-hidden className="mt-0.5 shrink-0 text-[var(--fileon-coral)]" />
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--fileon-cacao)]/70">Oficina</p>
                <p className="mt-2 text-[18px] font-medium tracking-[-0.02em] md:text-[20px]">{ADDRESS}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock size={26} strokeWidth={1.4} aria-hidden className="mt-0.5 shrink-0 text-[var(--fileon-coral)]" />
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--fileon-cacao)]/70">Horario de atención</p>
                <p className="mt-2 text-[18px] font-medium tracking-[-0.02em] md:text-[20px]">{HOURS}</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      <section id="contact-form" className="bg-[color:rgb(70_19_18_/_5%)] px-5 py-20 md:px-[70px] md:py-28 xl:py-32">
        <div className="mx-auto max-w-[1300px]">
          <FadeIn subtle>
            <figure className="mx-auto max-w-[820px] text-center">
              <blockquote className="text-balance text-[32px] font-medium leading-[1.12] tracking-[-0.045em] text-[var(--fileon-cacao)] md:text-[40px] md:leading-[1.22]">“Cada negocio merece una guía clara, una defensa firme y una estrategia legal construida alrededor de sus objetivos.”</blockquote>
              <figcaption className="mt-8 flex items-center justify-center gap-3 text-left">
                <Image src={`${ASSETS}/advisor-portrait.jpg`} alt="Asesora del equipo Meiker" width={54} height={54} className="h-[54px] w-[54px] rounded-full object-cover" />
                <div><p className="text-[16px] font-medium text-[var(--fileon-cacao)]">Equipo Meiker</p><p className="text-[13px] text-[var(--fileon-body)]">Propiedad intelectual y negocios</p></div>
              </figcaption>
            </figure>
          </FadeIn>

          <FadeIn delay={60} subtle>
            <form action="mailto:augusto@bisnez.legal" method="post" encType="text/plain" className="mx-auto mt-14 max-w-[680px] rounded-[32px] border border-[color:rgb(70_19_18_/_9%)] bg-white p-6 shadow-[0_10px_30px_rgba(70,19,18,0.05)] md:mt-16 md:p-10">
              <div className="grid gap-5">
                <Field label="Nombre completo" name="name" type="text" placeholder="Tu nombre" autoComplete="name" />
                <Field label="Correo electrónico" name="email" type="email" placeholder="tu@correo.com" autoComplete="email" />
                <Field label="Número de teléfono" name="phone" type="tel" placeholder="09..." autoComplete="tel" />
                <Field label="Asunto" name="subject" type="text" placeholder="¿En qué podemos ayudarte?" />
                <label className="grid gap-2 text-[13px] font-medium text-[var(--fileon-cacao)]">Cuéntanos sobre tu proyecto<textarea name="message" required rows={7} placeholder="Nombre del negocio, servicio que buscas y cualquier detalle importante" className="min-h-[190px] resize-y rounded-[20px] border border-transparent bg-[var(--fileon-bg)] px-4 py-3 text-[16px] font-normal leading-[1.5] outline-none transition-colors duration-[420ms] placeholder:text-[var(--fileon-muted)] focus:border-[var(--fileon-coral)]" /></label>
              </div>
              <MotionArrowButton type="submit" className="mt-8">Enviar mensaje</MotionArrowButton>
            </form>
          </FadeIn>
        </div>
      </section>

      <section className="px-5 py-20 md:px-[70px] md:py-28 xl:py-32">
        <div className="mx-auto grid max-w-[1300px] gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
          <FadeIn subtle>
            <div>
              <Eyebrow>Preguntas frecuentes</Eyebrow>
              <h2 className="mt-6 max-w-[420px] text-[44px] font-medium leading-[1.02] tracking-[-0.055em] text-[var(--fileon-heading)] md:text-[56px] md:leading-[1.08]">Resolvemos tus dudas.</h2>
              <div className="mt-8"><MeikerButton href="#contact-form">Escríbenos</MeikerButton></div>
            </div>
          </FadeIn>
          <FadeIn delay={60} subtle><FaqList items={FAQS} /></FadeIn>
        </div>
      </section>
    </div>
  );
}

function Field({ label, name, type, placeholder, autoComplete }: { label: string; name: string; type: string; placeholder: string; autoComplete?: string }) {
  return <label className="grid gap-2 text-[13px] font-medium text-[var(--fileon-cacao)]">{label}<input required name={name} type={type} placeholder={placeholder} autoComplete={autoComplete} className="min-h-12 rounded-[18px] border border-[color:rgb(70_19_18_/_10%)] bg-[var(--fileon-bg)] px-4 text-[16px] font-normal outline-none transition-[background-color,border-color,box-shadow] duration-[420ms] placeholder:text-[var(--fileon-muted)] focus:border-[var(--fileon-coral)] focus:bg-white focus:shadow-[0_0_0_3px_rgb(255_91_53_/_12%)]" /></label>;
}
