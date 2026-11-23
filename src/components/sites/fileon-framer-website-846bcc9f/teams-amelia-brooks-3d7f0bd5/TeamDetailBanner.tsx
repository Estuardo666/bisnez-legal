import Image from "next/image";

import { Eyebrow } from "@/components/sites/fileon-framer-website-846bcc9f/shared/PagePrimitives";
import { Reveal } from "@/components/sites/fileon-framer-website-846bcc9f/shared/Reveal";

const IMAGE_BASE =
  "/meiker/images";

/** TeamDetailBanner — original detail-page image banner and overlaid title. */
export function TeamDetailBanner() {
  return (
    <section className="relative flex min-h-[560px] items-end overflow-hidden bg-[var(--fileon-bg)] px-5 pb-10 pt-36 text-white md:min-h-[660px] md:px-[30px] md:pb-14 xl:min-h-[720px] xl:pb-20">
      <Image
        src={`${IMAGE_BASE}/team-meeting.jpg`}
        alt="Equipo Meiker en una reunión de trabajo"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-80"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(70,19,18,0.06),rgba(70,19,18,0.62))]" />
      <div className="relative z-[1] mx-auto flex w-full max-w-[1300px] flex-col gap-6">
        <Reveal fromScale={0.98}>
          <div style={{ "--fileon-cacao": "#ffffff" } as React.CSSProperties}>
            <Eyebrow>Perfil del equipo</Eyebrow>
          </div>
        </Reveal>
        <Reveal delay={100} fromScale={0.98}>
          <h1 className="max-w-[920px] text-balance font-[family-name:var(--fileon-font-sans)] text-[clamp(3rem,8vw,7.75rem)] font-medium leading-[0.95] tracking-[-0.065em]">
            Augusto Abendaño
          </h1>
        </Reveal>
      </div>
    </section>
  );
}
