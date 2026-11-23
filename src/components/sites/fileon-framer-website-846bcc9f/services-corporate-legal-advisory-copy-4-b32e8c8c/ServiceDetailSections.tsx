import { Check, ShieldCheck } from "lucide-react";

import { MotionArrowButton } from "@/components/sites/fileon-framer-website-846bcc9f/shared/MotionArrowButton";
import { Eyebrow, FaqList } from "@/components/sites/fileon-framer-website-846bcc9f/shared/PagePrimitives";

export type ServiceUrgency = {
  readonly title: string;
  readonly lines: readonly string[];
  readonly stat: string;
  readonly statLabel: string;
  readonly closing: string;
};

export type ServicePricing = {
  readonly id: string;
  readonly title: string;
  readonly items: readonly { title: string; detail: string; value: string }[];
  readonly totalLabel: string;
  readonly total: string;
  readonly offerLabel: string;
  readonly price: string;
  readonly cta: string;
  readonly ctaHref: string;
};

export type ServiceGuarantee = {
  readonly title: string;
  readonly body: string;
  readonly proof: string;
};

export function UrgencyBlock({ urgency }: { urgency: ServiceUrgency }) {
  return (
    <section className="mx-auto mt-4 grid max-w-[1300px] gap-4 rounded-[36px] bg-[var(--fileon-cacao)] p-6 text-[var(--fileon-arena)] md:p-10 lg:grid-cols-[1.4fr_1fr] lg:items-end lg:p-14">
      <div>
        <h2 className="meiker-urgency-title text-balance text-white">{urgency.title}</h2>
        <ul className="mt-6 space-y-1.5">
          {urgency.lines.map((line) => (
            <li key={line} className="text-[18px] leading-[1.5] text-[var(--fileon-arena)]/85 md:text-[20px]">
              {line}
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-[28px] bg-white/[0.06] p-6 ring-1 ring-white/10 md:p-8">
        <p className="text-[56px] font-semibold leading-none tracking-[-0.06em] text-[var(--fileon-coral)] md:text-[72px]">{urgency.stat}</p>
        <p className="mt-3 text-[16px] leading-[1.5] text-white md:text-[17px]">{urgency.statLabel}</p>
        <p className="mt-6 border-t border-white/15 pt-5 text-[15px] leading-[1.6] text-[var(--fileon-arena)]/80">{urgency.closing}</p>
      </div>
    </section>
  );
}

export function PricingBlock({ pricing }: { pricing: ServicePricing }) {
  return (
    <section id={pricing.id} className="mt-20 scroll-mt-[110px] md:mt-28">
      <Eyebrow>Precio del servicio</Eyebrow>
      <h2 className="meiker-service-body-title mt-4">{pricing.title}</h2>

      <div className="mt-8 grid gap-4 lg:grid-cols-[1.45fr_1fr]">
        <div className="rounded-[32px] border border-[color:rgb(70_19_18_/_9%)] bg-white p-3 shadow-[0_8px_22px_rgba(70,19,18,0.05)]">
          <ul>
            {pricing.items.map((item) => (
              <li
                key={item.title}
                className="flex items-start gap-4 border-b border-[color:rgb(70_19_18_/_10%)] px-4 py-5 last:border-b-0 md:px-5"
              >
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[var(--fileon-coral)] text-white">
                  <Check aria-hidden size={14} strokeWidth={2.8} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[17px] font-semibold leading-[1.3] tracking-[-0.02em] text-[var(--fileon-heading)] md:text-[18px]">{item.title}</p>
                  <p className="mt-1 text-[15px] leading-[1.55] text-[var(--fileon-body)]">{item.detail}</p>
                </div>
                <p className="shrink-0 text-[17px] font-semibold tabular-nums text-[var(--fileon-heading)]">{item.value}</p>
              </li>
            ))}
          </ul>
          <div className="mx-1 mb-1 flex items-center justify-between gap-4 rounded-[24px] bg-[var(--fileon-arena)] px-4 py-4 md:px-5">
            <p className="text-[16px] font-semibold text-[var(--fileon-heading)]">{pricing.totalLabel}</p>
            <p className="text-[20px] font-semibold tabular-nums text-[var(--fileon-heading)]">{pricing.total}</p>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-10 rounded-[32px] bg-[var(--fileon-coral)] p-6 text-[var(--fileon-cacao)] shadow-[0_16px_40px_rgba(255,91,53,0.22)] md:p-8">
          <p className="text-[18px] font-medium leading-[1.4] tracking-[-0.02em] md:text-[20px]">{pricing.offerLabel}</p>
          <div>
            <p className="flex items-baseline gap-4">
              <span aria-hidden className="text-[26px] font-medium tabular-nums text-[var(--fileon-cacao)]/60 line-through decoration-2">
                {pricing.total}
              </span>
              <span className="sr-only">Antes {pricing.total}, ahora </span>
              <span className="text-[64px] font-semibold leading-none tracking-[-0.06em] tabular-nums text-white md:text-[80px]">{pricing.price}</span>
            </p>
            <div className="mt-8">
              <MotionArrowButton href={pricing.ctaHref} variant="brisa">{pricing.cta}</MotionArrowButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function GuaranteeBlock({ guarantee }: { guarantee: ServiceGuarantee }) {
  return (
    <section className="mt-4 flex flex-col gap-6 rounded-[32px] bg-[var(--fileon-brisa)] p-6 md:flex-row md:items-start md:gap-8 md:p-10">
      <span className="grid h-16 w-16 shrink-0 place-items-center rounded-[22px] bg-white text-[var(--fileon-coral)] shadow-[0_8px_22px_rgba(70,19,18,0.08)]">
        <ShieldCheck aria-hidden size={34} strokeWidth={1.6} />
      </span>
      <div>
        <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[var(--fileon-cacao)]/70">Garantía</p>
        <h2 className="meiker-service-card-heading mt-2">{guarantee.title}</h2>
        <p className="mt-3 max-w-[720px] text-[17px] leading-[1.65] text-[var(--fileon-cacao)]">{guarantee.body}</p>
        <p className="mt-3 max-w-[720px] text-[16px] leading-[1.65] text-[var(--fileon-body)]">{guarantee.proof}</p>
      </div>
    </section>
  );
}

export function ServiceFaq({ faqs }: { faqs: readonly { question: string; answer: string }[] }) {
  return (
    <section className="mt-20 md:mt-28">
      <Eyebrow>Preguntas frecuentes</Eyebrow>
      <h2 className="meiker-service-body-title mb-8 mt-4">Lo que nos preguntan antes de registrar</h2>
      <FaqList items={faqs} />
    </section>
  );
}
