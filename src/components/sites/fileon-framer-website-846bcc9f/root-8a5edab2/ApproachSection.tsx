import Image from "next/image";

import { cn } from "@/lib/utils";

const IMAGE_BASE = "/sites/fileon-framer-website-846bcc9f/root-8a5edab2/images";

type CardAlign = "left" | "center" | "right";

interface ApproachCardData {
  readonly icon: string;
  readonly title: string;
  readonly description: string;
  readonly categories: readonly [string, string];
  /** Desktop-only (>=1380px) alignment variant. Tablet/mobile are always left. */
  readonly align: CardAlign;
}

const CARDS: readonly ApproachCardData[] = [
  {
    icon: `${IMAGE_BASE}/fknRetAySXeP6naCWowim4qvujk.svg`,
    title: "Case Evaluation",
    description:
      "We carefully assess every legal matter to understand risks, opportunities, and the best path forward.",
    categories: ["Analysis", "Strategy"],
    align: "left",
  },
  {
    icon: `${IMAGE_BASE}/Tuv1uz5knoX4Ax2PdkWHsK0uyqY.svg`,
    title: "Legal Strategy",
    description:
      "A tailored legal approach designed to protect interests and support long-term client objectives.",
    categories: ["Counsel", "Protection"],
    align: "center",
  },
  {
    icon: `${IMAGE_BASE}/wFSgPqwms5Uxc4VrKntBH7ixKL0.svg`,
    title: "Client Advocacy",
    description:
      "Dedicated representation focused on clear communication, strong preparation, and effective outcomes.",
    categories: ["Support", "Results"],
    align: "right",
  },
];

/** .framer-styles-preset-n4ys0b - Geist Mono 14px / 150%, uppercase. */
const MONO_LABEL =
  "font-[family-name:var(--fileon-font-mono)] text-[14px] leading-[150%] font-normal uppercase tracking-[0em]";

/** .framer-vK7DH.framer-1sv7rdv + variants v-1knwztn (mobile) / v-jx7450 (tablet). */
function ApproachCard({ card }: { card: ApproachCardData }) {
  return (
    // .framer-12cpt28-container / .framer-1ynp1kk-container / .framer-qbkltc-container
    <div className="relative h-auto w-full flex-none self-start xl:w-auto xl:self-auto">
      <div
        className={cn(
          "relative flex h-min w-full flex-none flex-col items-start overflow-visible",
          // v-1knwztn (mobile): gap 30, padding 20, 1px border, radius 10
          "gap-[30px] rounded-[10px] border border-solid border-[#a9a9a9] p-[20px]",
          // v-jx7450 (tablet): gap 40, padding 20, 1px border, radius 10
          "md:gap-[40px]",
          // desktop base: gap 40, width 286, no padding, no border, radius 0
          "xl:w-[286px] xl:rounded-none xl:border-0 xl:p-0",
          card.align === "center" && "xl:items-center",
          card.align === "right" && "xl:items-end",
        )}
      >
        {/* Icon Wrapper - .framer-6ijtj3 */}
        <div className="relative flex h-[70px] w-[60px] flex-none flex-row items-center justify-center gap-[10px] overflow-hidden rounded-[100px] bg-black p-0 md:h-[70px] md:w-[70px] xl:h-[90px] xl:w-[90px]">
          {/* Icon - .framer-mhl4si */}
          <div className="relative h-[31px] w-[30px] flex-none overflow-hidden md:h-[35px] md:w-[35px] xl:h-[42px] xl:w-[42px]">
            <Image
              src={card.icon}
              alt="Icon"
              fill
              sizes="42px"
              className="block h-full w-full rounded-[inherit] object-contain object-center"
            />
          </div>
        </div>

        {/* Title & Category Wrapper - .framer-1a2wt5o */}
        <div
          className={cn(
            "relative flex h-min w-full flex-none flex-col items-start justify-start gap-[15px] overflow-visible p-0 md:gap-[20px]",
            (card.align === "center" || card.align === "right") &&
              "xl:items-center",
          )}
        >
          {/* Title & Short Description - .framer-1e2iof3 */}
          <div
            className={cn(
              "relative flex h-min w-full flex-none flex-col items-start justify-start gap-[10px] overflow-visible p-0 md:gap-[14px]",
              card.align === "right" && "xl:items-end",
            )}
          >
            {/* Title - .framer-anxj1l / preset-1hf31ua */}
            <h6
              className={cn(
                "relative h-auto w-full flex-none font-[family-name:var(--fileon-font-serif)] text-[22px] leading-[135%] font-normal tracking-[0em] break-words text-black xl:text-[24px]",
                card.align === "center" && "xl:text-center",
                card.align === "right" && "xl:text-right",
              )}
            >
              {card.title}
            </h6>
            {/* Short Description - .framer-6meb4f / preset-c36khm */}
            <p
              className={cn(
                "relative h-auto w-full flex-none font-[family-name:var(--fileon-font-sans)] text-[16px] leading-[150%] font-normal tracking-[0em] break-words text-[var(--fileon-body)]",
                card.align === "center" && "xl:text-center",
                card.align === "right" && "xl:text-right",
              )}
            >
              {card.description}
            </p>
          </div>

          {/* Category Wrapper - .framer-znw453 */}
          <div
            className={cn(
              "relative flex h-min w-full flex-none flex-row flex-wrap items-center justify-start gap-[10px] overflow-visible p-0 md:flex-nowrap",
              card.align === "center" && "xl:justify-center",
              card.align === "right" && "xl:justify-end",
            )}
          >
            {card.categories.map((category) => (
              // .framer-5s61vn / .framer-xtryf2
              <div
                key={category}
                className="relative flex h-min w-min flex-none flex-row items-center justify-start gap-[10px] overflow-visible rounded-[5px] bg-[var(--fileon-white)] px-[20px] py-[8px]"
              >
                <p
                  className={cn(
                    MONO_LABEL,
                    "relative h-auto w-auto flex-none text-left whitespace-pre text-black",
                  )}
                >
                  {category}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ApproachSection() {
  return (
    // .framer-bbtw1p
    <section className="relative z-[1] flex h-min w-full flex-none flex-col items-center justify-center gap-[10px] overflow-visible bg-[var(--fileon-bg-warm)] px-[20px] pt-[80px] pb-[40px] md:px-[30px] md:pt-[100px] md:pb-[50px] xl:pt-[130px] xl:pb-[65px]">
      {/* About Frame - .framer-1y4f0fw (scroll anchor) */}
      <div
        id="about"
        aria-hidden="true"
        className="absolute top-0 left-0 z-[1] h-[100px] w-full flex-none scroll-mt-[100px] overflow-hidden"
      />

      {/* Container - .framer-5lznv2 */}
      <div className="relative flex h-min w-full max-w-[1300px] flex-none flex-row overflow-visible p-0">
        {/* Content - .framer-qs1br2 */}
        <div className="relative z-[1] flex h-min w-px shrink-0 grow basis-0 flex-col items-start justify-start gap-[40px] overflow-visible p-0 md:gap-[50px] xl:gap-[60px]">
          {/* Title Wrapper - .framer-38y8v0 */}
          <div className="relative flex h-min w-full flex-none flex-col items-start justify-start gap-[10px] overflow-visible p-0 md:max-w-[550px] xl:max-w-[610px]">
            {/* Section Title 01 - .framer-1gnz6fr */}
            <div className="relative flex h-min w-min flex-none flex-row items-center justify-start gap-[10px] overflow-visible p-0">
              {/* Icon - .framer-18gvpqs */}
              <div className="relative h-[10px] w-[10px] flex-none overflow-hidden bg-[var(--fileon-ink)]" />
              {/* Title - .framer-uioks9 */}
              <div className="relative h-auto w-auto flex-none">
                <p
                  className={cn(
                    MONO_LABEL,
                    "text-left whitespace-pre text-black",
                  )}
                >
                  our approach
                </p>
              </div>
            </div>

            {/* Title - .framer-1snoxci / preset-1x3pol9 */}
            <div className="relative h-auto w-full flex-none [text-wrap:balance]">
              <h2 className="text-left font-[family-name:var(--fileon-font-serif)] text-[38px] leading-[120%] font-normal tracking-[0em] text-[var(--fileon-ink)] md:text-[46px] xl:text-[56px]">
                Guiding Every Decision With{" "}
                <span className="text-[var(--fileon-black-50)]">
                  Confidence
                </span>
              </h2>
            </div>
          </div>

          {/*
            Card Wrapper - .framer-7lwzb0
            position: sticky; top: 40px at every breakpoint (the CSS dump has no
            media override for it). No ancestor here may take `overflow: hidden`
            or a `transform`, or the pinning breaks.
          */}
          <div className="sticky top-[40px] z-[1] flex h-min w-full flex-none flex-col items-start justify-start gap-[20px] overflow-visible p-0">
            {/*
              Border & Line Wrapper - .framer-1rq0af5
              Carries Framer's `hidden-175ozha` gate: desktop-only (>=1380px).
            */}
            <div className="relative hidden h-min w-full flex-none flex-col items-start justify-start gap-[35px] overflow-visible p-0 xl:flex">
              {/* Border Wrapper - .framer-1picd6m */}
              <div className="relative flex h-min w-full flex-none flex-row items-center justify-between overflow-visible p-0">
                {/* Border - .framer-2i02ma */}
                <div className="absolute top-[calc(50%-7px)] left-0 z-[1] h-[14px] w-full flex-none overflow-hidden rounded-[30px] bg-[var(--fileon-line)]" />
                {/* Round x3 - .framer-szuidx / .framer-fnyyvx / .framer-ns4ttk */}
                {[0, 1, 2].map((index) => (
                  <div
                    key={index}
                    className="relative z-[3] aspect-square h-auto w-[20px] flex-none overflow-hidden rounded-[100px] bg-black"
                  />
                ))}
              </div>
              {/* Line Wrapper - .framer-tjqjus */}
              <div className="relative flex h-min w-full flex-none flex-row items-center justify-between overflow-visible p-0">
                {/* Line x3 - .framer-1sz0m2k / .framer-wn7p6r / .framer-ks8gg1 */}
                {[0, 1, 2].map((index) => (
                  <div
                    key={index}
                    className="relative h-[72px] w-px flex-none overflow-hidden bg-[#a9a9a9]"
                  />
                ))}
              </div>
            </div>

            {/* Card Wrapper - .framer-1mh7foo */}
            <div className="relative z-[1] flex h-min w-full flex-none flex-col items-start justify-start gap-[20px] overflow-visible p-0 xl:flex-row xl:items-center xl:justify-between">
              {CARDS.map((card) => (
                <ApproachCard key={card.title} card={card} />
              ))}
            </div>
          </div>

          {/*
            Trigger Column - .framer-1nwoypu
            Three empty full-viewport spacers, siblings of the sticky card
            wrapper inside Content. They give the column its ~300vh of extra
            height so the sticky wrapper stays pinned for three screens. Purely
            structural: the live site animates nothing off them.

            Carries Framer's `hidden-175ozha` gate: desktop-only (>=1380px).
            Below 1380px the live site renders no trigger column at all, so the
            three 100vh spacers must not contribute any height there.
          */}
          <div
            aria-hidden="true"
            className="relative hidden h-min w-full flex-none flex-col items-center justify-center gap-0 overflow-clip p-0 xl:flex"
          >
            <div
              id="trigger-one"
              className="relative h-screen w-full flex-none"
            />
            <div
              id="trigger-two"
              className="relative h-screen w-full flex-none"
            />
            <div
              id="trigger-three"
              className="relative h-screen w-full flex-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
