"use client";

import { startTransition, useId, useState } from "react";

export type FaqAccordionItem = {
  readonly question: string;
  readonly answer: string;
};

export function FaqAccordion({ items }: { items: readonly FaqAccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(items.length ? 0 : null);
  const rawId = useId();
  const uid = rawId.replaceAll(":", "");

  const toggle = (index: number) => {
    startTransition(() => {
      setOpenIndex((current) => (current === index ? null : index));
    });
  };

  return (
    <div className="w-full max-w-[760px] justify-self-end border-t border-[color:rgb(70_19_18_/_18%)] bg-transparent">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const buttonId = `meiker-faq-${uid}-button-${index}`;
        const panelId = `meiker-faq-${uid}-panel-${index}`;

        return (
          <div key={item.question} className="border-b border-[color:rgb(70_19_18_/_18%)] bg-transparent">
            <button
              id={buttonId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(index)}
              className="flex w-full cursor-pointer select-none items-center justify-between gap-5 bg-transparent px-1 py-6 text-left focus:outline-none focus-visible:shadow-[inset_0_0_0_2px_var(--fileon-coral)]"
            >
              <span className="flex min-w-0 items-baseline gap-4">
                <span className="shrink-0 font-[family-name:var(--fileon-font-mono)] text-[13px] text-[var(--fileon-coral)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-[22px] font-medium leading-[1.2] tracking-[-0.025em] text-[var(--fileon-cacao)] md:text-[26px]">
                  {item.question}
                </span>
              </span>
              <span
                aria-hidden="true"
                className="meiker-faq-icon shrink-0 text-[26px] leading-none text-[var(--fileon-coral)]"
                style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
              >
                +
              </span>
            </button>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className="meiker-faq-panel grid"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <div className="max-w-[640px] pb-6 pl-10 pr-6 text-[15px] leading-[1.7] text-[var(--fileon-body)]">
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
