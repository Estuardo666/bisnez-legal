"use client";

import { motion, useReducedMotion } from "motion/react";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export function WhatsAppFloat() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <motion.a
      href="https://wa.me/593959652566?text=Hola%20Meiker%2C%20quiero%20agendar%20una%20asesor%C3%ADa."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      title="Escríbenos por WhatsApp"
      initial={{ opacity: 0, transform: reduceMotion ? "none" : "translateY(12px) scale(.96)" }}
      animate={{ opacity: 1, transform: "translateY(0px) scale(1)", transition: { duration: reduceMotion ? 0.16 : 0.32, ease: EASE_OUT, delay: reduceMotion ? 0 : 0.2 } }}
      whileHover={reduceMotion ? undefined : { transform: "translateY(-3px) scale(1.04)" }}
      whileTap={reduceMotion ? undefined : { transform: "scale(.96)" }}
      transition={{ duration: reduceMotion ? 0.18 : 0.38, ease: EASE_OUT }}
      className="group fixed bottom-[max(16px,env(safe-area-inset-bottom))] right-4 z-40 grid h-[58px] w-[58px] touch-manipulation place-items-center rounded-[20px] border border-[color:rgb(255_234_202_/_42%)] bg-[var(--fileon-coral)] text-white shadow-[0_10px_30px_rgba(70,19,18,0.2)] outline-none sm:bottom-6 sm:right-6"
    >
      <span className="grid h-[46px] w-[46px] place-items-center rounded-[15px] bg-white/15 text-white transition-[border-radius,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rounded-[18px]" aria-hidden="true">
        <svg viewBox="0 0 32 32" className="h-[25px] w-[25px] fill-current" focusable="false">
          <path d="M16 3.2A12.5 12.5 0 0 0 5.3 22.2L3.7 28l6-1.6A12.5 12.5 0 1 0 16 3.2Zm0 22.6a10 10 0 0 1-5.1-1.4l-.4-.2-3.5.9.9-3.4-.3-.5A10 10 0 1 1 16 25.8Zm5.5-7.5c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.6-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.6-.1-.2-.7-1.7-1-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.8s1.2 3.2 1.4 3.4c.2.2 2.4 3.7 5.8 5.2.8.4 1.4.6 1.9.7.8.3 1.5.2 2 .1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.4Z" />
        </svg>
      </span>
      <span className="pointer-events-none absolute right-[68px] translate-x-1 whitespace-nowrap rounded-[12px] bg-white px-3 py-2 text-[13px] font-medium text-[var(--fileon-cacao)] opacity-0 shadow-lg transition-[opacity,transform,translate] duration-[380ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 max-sm:hidden">
        Escríbenos por WhatsApp
      </span>
    </motion.a>
  );
}
