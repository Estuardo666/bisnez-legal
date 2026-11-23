"use client";

import { BriefcaseBusiness, MessageCircleMore, ShieldCheck } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

const CARDS = [
  {
    icon: BriefcaseBusiness,
    title: "Procesos claros",
    description: "Sabes exactamente qué incluye tu servicio, cuánto cuesta y cuándo estará listo, sin costos ocultos ni cobros extra.",
    categories: ["Claridad", "Confianza"],
    tone: "brisa",
  },
  {
    icon: MessageCircleMore,
    title: "Hablamos tu idioma",
    description: "Entiendes cada paso y cada decisión, para que protejas tu negocio con total claridad.",
    categories: ["Simple", "Cercano"],
    tone: "coral",
  },
  {
    icon: ShieldCheck,
    title: "Nos encargamos de todo",
    description: "Gestionamos cada proceso legal de principio a fin, para que no tengas que preocuparte por trámites.",
    categories: ["Integral", "Preventivo"],
    tone: "brisa",
  },
] as const;

function ApproachCard({ card, index }: { card: (typeof CARDS)[number]; index: number }) {
  const reduceMotion = Boolean(useReducedMotion());
  const Icon = card.icon;
  const alignment = index === 0 ? "xl:items-start xl:text-left" : index === 1 ? "xl:items-center xl:text-center" : "xl:items-end xl:text-right";

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : index * 0.08, ease: EASE_OUT }}
      className={`flex min-h-[340px] flex-col gap-7 rounded-[36px] border border-white/70 p-7 text-[var(--fileon-cacao)] shadow-[0_12px_30px_rgba(70,19,18,0.07)] md:p-8 xl:min-h-[340px] ${alignment} ${card.tone === "coral" ? "bg-[var(--fileon-coral)]" : "bg-[var(--fileon-brisa)]"}`}
    >
      <div className={`grid h-[74px] w-[74px] shrink-0 place-items-center ${card.tone === "coral" ? "text-white" : "text-[var(--fileon-cacao)]"}`}>
        <Icon aria-hidden="true" size={44} strokeWidth={1.6} />
      </div>
      <div className="flex flex-1 flex-col">
        <h3 className="text-[24px] font-semibold leading-[1.1] tracking-[-0.035em]">{card.title}</h3>
        <p className="mt-4 text-[16px] leading-[1.5]">{card.description}</p>
        <div className={`mt-auto flex flex-wrap gap-2 pt-6 ${index === 1 ? "xl:justify-center" : index === 2 ? "xl:justify-end" : ""}`}>
          {card.categories.map((category) => (
            <span key={category} className="rounded-full bg-white px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.05em]">
              {category}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export function ApproachSection() {
  return (
    <section id="about" className="bg-[var(--fileon-bg)] px-5 pt-20 pb-12 scroll-mt-[90px] md:px-[30px] md:pt-28 md:pb-16 xl:pt-32">
      <div className="mx-auto w-full max-w-[1300px]">
        <div className="max-w-[610px]">
          <p className="flex items-center gap-2.5 font-[family-name:var(--fileon-font-mono)] text-[13px] uppercase text-[var(--fileon-cacao)]">
            <span aria-hidden="true" className="h-2.5 w-2.5 bg-[var(--fileon-coral)]" />
            por qué elegir Meiker
          </p>
          <h2 className="mt-4 text-[clamp(2.5rem,4.4vw,3.5rem)] leading-[1.08] font-semibold tracking-[-0.045em] text-[var(--fileon-heading)]">
            Claridad para<br />cada <span className="text-[var(--fileon-cacao)]/50">decisión</span>
          </h2>
        </div>

        <div aria-hidden="true" className="relative mt-14 hidden h-[92px] xl:block">
          <div className="absolute top-[10px] right-[calc((100%_-_3rem)_/_6)] left-[calc((100%_-_3rem)_/_6)] h-[2px] bg-[color:rgb(70_19_18_/_18%)]">
            <div className="h-full w-full bg-[linear-gradient(90deg,transparent,var(--fileon-coral),transparent)] opacity-50" />
          </div>
          <div className="relative grid h-full grid-cols-3 gap-6">
            {[0, 1, 2].map((point) => (
              <div key={point} className="flex flex-col items-center">
                <span className="relative grid h-[22px] w-[22px] place-items-center rounded-full border-[3px] border-[var(--fileon-brisa)] bg-[var(--fileon-bg)] shadow-[0_0_0_5px_var(--fileon-bg)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--fileon-coral)]" />
                </span>
                <span className="h-[70px] w-px bg-[linear-gradient(to_bottom,rgba(70,19,18,0.28),transparent)]" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 xl:mt-5 xl:grid-cols-3 xl:gap-6">
          {CARDS.map((card, index) => <ApproachCard key={card.title} card={card} index={index} />)}
        </div>
      </div>
    </section>
  );
}
