import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";

import { Eyebrow, MeikerButton } from "@/components/sites/fileon-framer-website-846bcc9f/shared/PagePrimitives";

export function StaggeredTitle({
  text,
  startDelay = 180,
  className = "",
}: {
  text: string;
  startDelay?: number;
  className?: string;
}) {
  return (
    <span className={className} aria-label={text}>
      {text.split(" ").map((word, index) => (
        <span
          aria-hidden="true"
          className="meiker-word-enter inline-block"
          key={`${word}-${index}`}
          style={{ "--word-delay": `${startDelay + index * 34}ms` } as CSSProperties}
        >
          {word}
          {index < text.split(" ").length - 1 ? "\u00a0" : ""}
        </span>
      ))}
    </span>
  );
}

export function PhotoEditorialHero({
  image,
  imageAlt,
  title,
  kind,
  aside,
  cta,
}: {
  image: string;
  imageAlt: string;
  title: string;
  kind: "about" | "services";
  aside?: ReactNode;
  cta?: { label: string; href: string };
}) {
  const about = kind === "about";

  return (
    <section className="bg-[var(--fileon-bg)]">
      <div className="relative h-[201px] w-full overflow-hidden md:h-[750px]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className={`relative px-5 py-7 md:px-[70px] md:py-[30px] ${about ? "md:min-h-[230px]" : "md:min-h-[223px]"}`}>
        <span
          aria-hidden="true"
          className="absolute right-0 top-[-40px] hidden h-10 w-[236px] bg-[var(--fileon-bg)] [clip-path:polygon(14%_0,100%_0,100%_100%,0_100%)] md:block"
        />
        <div className={`mx-auto flex w-full max-w-[1300px] gap-8 ${about ? "items-end justify-between" : "items-end justify-between"}`}>
          <h1
            className={
              about
                ? "min-w-0 flex-1 font-medium uppercase leading-[0.9] tracking-[-0.075em] text-[var(--fileon-heading)] text-[44px] md:whitespace-nowrap md:text-[clamp(6rem,9vw,8.125rem)]"
                : "max-w-[820px] text-[42px] font-medium leading-[1.03] tracking-[-0.055em] text-[var(--fileon-heading)] md:text-[64px] md:leading-[1.15]"
            }
          >
            <StaggeredTitle text={title} />
          </h1>
          {aside ? <div className="hidden shrink-0 md:block">{aside}</div> : null}
          {cta ? (
            <div className="hidden shrink-0 pb-4 md:block">
              <MeikerButton href={cta.href} variant="coral">{cta.label}</MeikerButton>
            </div>
          ) : null}
        </div>
        {cta ? (
          <div className="mt-6 md:hidden">
            <MeikerButton href={cta.href} variant="coral">{cta.label}</MeikerButton>
          </div>
        ) : null}
        {aside ? <div className="mt-5 md:hidden">{aside}</div> : null}
      </div>
    </section>
  );
}

export function EditorialIntroHero({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <section className="relative min-h-[255px] bg-[var(--fileon-bg)] px-5 pb-10 pt-[96px] md:min-h-[408px] md:px-[70px] md:pb-20 md:pt-[100px]">
      <div className="mx-auto w-full max-w-[1300px]">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-5 max-w-[640px] text-[42px] font-medium leading-[1.02] tracking-[-0.055em] text-[var(--fileon-heading)] md:text-[64px] md:leading-[1.15]">
          <StaggeredTitle text={title} />
        </h1>
      </div>
      <span
        aria-hidden="true"
        className="absolute bottom-[-1px] right-0 h-[26px] w-[calc(100%-152px)] bg-[var(--fileon-bg)] [clip-path:polygon(26px_0,100%_0,100%_100%,0_100%)] md:h-[72px] md:w-[236px] md:[clip-path:polygon(32px_0,100%_0,100%_100%,0_100%)]"
      />
    </section>
  );
}
