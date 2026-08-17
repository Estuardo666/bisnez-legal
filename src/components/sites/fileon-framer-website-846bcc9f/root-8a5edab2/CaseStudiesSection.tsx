import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const ASSETS = "/sites/fileon-framer-website-846bcc9f/root-8a5edab2/images";

interface CaseStudy {
  /** Slug used for the link target and for scoping the inline SVG ids. */
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  width: number;
  height: number;
}

const CASE_STUDIES: readonly CaseStudy[] = [
  {
    slug: "corporate-dispute",
    eyebrow: "1/ Corporate Law",
    title: "Corporate Dispute",
    description:
      "Represented a growing business in a complex commercial dispute, securing a favorable resolution while protecting long-term business interests.",
    image: `${ASSETS}/1cHrjp5K6KglQzCNss20hhllKs.png`,
    width: 812,
    height: 568,
  },
  {
    slug: "real-estate-law",
    eyebrow: "2/ Corporate Law",
    title: "Real Estate Law",
    description:
      "Successfully resolved a property ownership conflict through strategic legal representation and careful case preparation.",
    image: `${ASSETS}/L4RmATyJykuXVAMJnBgwKowz29k.png`,
    width: 812,
    height: 568,
  },
  {
    slug: "employment-law",
    eyebrow: "3/ Corporate Law",
    title: "Employment Law",
    description:
      "Provided legal guidance in a workplace dispute, helping the client achieve a fair, good and favorable outcome for all ages and culture",
    image: `${ASSETS}/mxgPf2wfnMIMiICGG7TLPGuxpo4.png`,
    width: 812,
    height: 568,
  },
];

/** Framer text preset `n4ys0b` — Geist Mono 14 / 150% / uppercase. */
const PRESET_MONO =
  "font-[family-name:var(--fileon-font-mono)] text-[14px] leading-[150%] font-normal tracking-[0em] uppercase";

/** Framer text preset `c36khm` — Manrope 16 / 150%. */
const PRESET_BODY =
  "font-[family-name:var(--fileon-font-sans)] text-[16px] leading-[150%] font-normal tracking-[0em] text-[var(--fileon-body)]";

/** Framer text preset `1pwzd39` — Manrope 16 / 150% / 500. */
const PRESET_BUTTON =
  "font-[family-name:var(--fileon-font-sans)] text-[16px] leading-[150%] font-medium tracking-[0em]";

/**
 * The blurred "notch" plate that sits on the top-right corner of every card.
 * Framer emits it as a template `<svg>` referenced through `<use>`; here each
 * card renders its own copy with locally scoped ids.
 */
function CardPlate({ slug }: { slug: string }) {
  const clipId = `fileon-case-plate-${slug}-clip`;
  return (
    <svg
      width="193"
      height="38"
      viewBox="0 0 193 38"
      fill="none"
      aria-hidden="true"
      className="h-full w-full"
    >
      <foreignObject x="-21.7217" y="-25" width="239.722" height="88">
        <div
          style={{
            backdropFilter: "blur(12.5px)",
            clipPath: `url(#${clipId})`,
            height: "100%",
            width: "100%",
          }}
        />
      </foreignObject>
      <path
        data-figma-bg-blur-radius="25"
        d="M18.6131 2.66949L3.86191 30.6695C2.10777 33.9991 4.52214 38 8.28557 38H188C190.761 38 193 35.7614 193 33V5C193 2.23858 190.761 0 188 0H23.0367C21.1811 0 19.478 1.02772 18.6131 2.66949Z"
        fill="white"
        fillOpacity="0.45"
      />
      <defs>
        <clipPath id={clipId} transform="translate(21.7217 25)">
          <path d="M18.6131 2.66949L3.86191 30.6695C2.10777 33.9991 4.52214 38 8.28557 38H188C190.761 38 193 35.7614 193 33V5C193 2.23858 190.761 0 188 0H23.0367C21.1811 0 19.478 1.02772 18.6131 2.66949Z" />
        </clipPath>
      </defs>
    </svg>
  );
}

function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    /* .framer-17p5lej-container */
    <div className="relative z-[1] h-auto w-px flex-[1_0_0]">
      {/* .framer-1sv8yk3 — the card link */}
      <Link
        href={`/case-studies/${study.slug}`}
        className="relative flex w-full cursor-pointer flex-col items-start gap-[256px] overflow-hidden rounded-[10px] p-0 no-underline"
      >
        {/* .framer-1d75bo1 — cover image */}
        <div className="relative w-full flex-none overflow-hidden rounded-[inherit] h-[300px] md:h-auto md:aspect-[1.66667] xl:aspect-[1.35]">
          <Image
            src={study.image}
            alt="Image"
            width={study.width}
            height={study.height}
            sizes="(max-width: 809px) 100vw, (max-width: 1379px) 750px, 810px"
            className="absolute inset-0 block h-full w-full rounded-[inherit] object-cover object-center"
          />
        </div>

        {/* .framer-1h50kji — content wrapper pinned to the bottom-right */}
        <div className="absolute right-0 z-[1] flex flex-none flex-col items-end justify-end gap-[10px] bottom-[15px] w-[96%] pt-[25px] pr-[15px] pb-0 pl-0 md:bottom-[30px] md:w-full md:pr-[30px]">
          {/* .framer-447zbu */}
          <div className="relative z-[3] flex w-full max-w-[400px] flex-none flex-col items-start gap-[52px] rounded-[10px] bg-[var(--fileon-white)] p-[10px] md:p-[25px]">
            {/* .framer-zobqex */}
            <div className="relative flex w-full flex-none flex-col items-start gap-[15px] md:gap-[30px]">
              <p className={cn(PRESET_MONO, "w-full text-[var(--fileon-body)]")}>{study.eyebrow}</p>
              {/* .framer-1ls4xu1 */}
              <div className="relative flex w-full flex-none flex-col items-start gap-[5px] md:gap-[12px]">
                <h6 className="w-full font-[family-name:var(--fileon-font-serif)] text-[22px] leading-[135%] font-normal tracking-[0em] text-[var(--fileon-ink)] xl:text-[24px]">
                  {study.title}
                </h6>
                <p className={cn(PRESET_BODY, "w-full text-balance")}>{study.description}</p>
              </div>
            </div>
          </div>

          {/* .framer-9e137u — blurred plate */}
          <div className="absolute top-0 z-[1] h-[38px] w-[193px] flex-none aspect-[5.07895] right-[15px] md:right-[30px]">
            <CardPlate slug={study.slug} />
          </div>
        </div>
      </Link>
    </div>
  );
}

/**
 * Case-studies section ("Results that Build Trust").
 *
 * Interaction model is scroll-driven stickiness, not tabs: on desktop the white
 * title/button panel (`.framer-19fzg5e`, `top: 20px`) and the card column
 * (`.framer-1r2muwo`, `top: 0`) are both `position: sticky`, so the panel pins
 * beside the cards while they scroll past. Framer drops both to
 * `position: relative` below 1380px, which is reproduced here. Nothing between
 * the sticky elements and the section may set `overflow: hidden` or a
 * `transform` or the pinning breaks.
 */
export function CaseStudiesSection() {
  return (
    <section className="relative flex w-full flex-none flex-col items-center justify-center gap-[10px] bg-[var(--fileon-bg-warm)] px-[20px] pt-[40px] pb-[80px] md:px-[30px] md:pt-[50px] md:pb-[100px] xl:pt-[65px] xl:pb-[130px]">
      {/* .framer-12ie2k0 — container */}
      <div className="relative flex w-full max-w-[1300px] flex-none items-center justify-center gap-[10px]">
        {/* .framer-1eb3dsu — content */}
        <div className="relative flex w-px flex-[1_0_0] flex-col items-start gap-[40px] md:gap-[50px] xl:gap-[60px]">
          {/* .framer-x6hghb — content wrapper */}
          <div className="relative flex w-full flex-none flex-col items-start gap-[40px] md:gap-[50px] xl:flex-row xl:justify-between xl:gap-0">
            {/* .framer-19fzg5e — sticky title & button panel */}
            <div className="relative z-[1] flex w-full flex-none flex-col items-start gap-[30px] rounded-[10px] bg-[var(--fileon-white)] p-[20px] md:gap-[40px] md:p-[30px] xl:sticky xl:top-[20px] xl:w-px xl:max-w-[480px] xl:flex-[1_0_0] xl:gap-[256px]">
              {/* .framer-17fr8xt — title wrapper */}
              <div className="relative flex w-full flex-none flex-col items-start gap-[10px] md:max-w-[550px] xl:max-w-none">
                {/* Section Title 01 */}
                <div className="relative flex w-min flex-none items-center justify-start gap-[10px]">
                  <div className="relative h-[10px] w-[10px] flex-none overflow-hidden bg-[var(--fileon-ink)]" />
                  <p className={cn(PRESET_MONO, "relative w-auto flex-none whitespace-pre text-black")}>
                    case studies
                  </p>
                </div>

                {/* .framer-5vzw1o — title & sub title */}
                <div className="relative flex w-full flex-none flex-col items-start gap-[10px] md:gap-[15px] xl:gap-[24px]">
                  <h2 className="w-full font-[family-name:var(--fileon-font-serif)] text-[38px] leading-[120%] font-normal tracking-[0em] text-balance text-[var(--fileon-ink)] md:text-[46px] xl:text-[56px]">
                    Results that Build{" "}
                    <span className="text-[var(--fileon-black-50)]">Trust</span>
                  </h2>
                  <p className={cn(PRESET_BODY, "w-full text-balance")}>
                    Explore how strategic legal counsel helped clients overcome challenges and
                    achieve successful outcomes
                  </p>
                </div>
              </div>

              {/* Secondary Button 01 */}
              <Link
                href="/case-studies"
                className="group relative flex h-min w-min cursor-pointer items-center justify-center gap-[14px] overflow-hidden rounded-[50px] bg-[var(--fileon-ink)] py-[6px] pr-[6px] pl-[24px] no-underline"
              >
                {/* .framer-176aqmi — title wrapper (masks the label swap) */}
                <div className="relative flex h-min w-min flex-none flex-col items-start gap-[10px] overflow-hidden">
                  {/* .framer-yu6vuw — incoming label */}
                  <p
                    className={cn(
                      PRESET_BUTTON,
                      "absolute top-[-50px] left-0 z-[1] h-auto w-auto flex-none whitespace-pre text-[var(--fileon-white)] group-hover:relative group-hover:top-auto group-hover:left-auto",
                    )}
                  >
                    View all case studies
                  </p>
                  {/* .framer-1h58870 — resting label */}
                  <p
                    className={cn(
                      PRESET_BUTTON,
                      "relative h-auto w-auto flex-none whitespace-pre text-[var(--fileon-white)] group-hover:absolute group-hover:bottom-[-50px] group-hover:left-0 group-hover:z-[1]",
                    )}
                  >
                    View all case studies
                  </p>
                </div>

                {/* .framer-1d5hfen — icon wrapper */}
                <div className="relative flex h-[35px] w-[35px] flex-none items-center justify-center gap-[10px] overflow-hidden rounded-[100px] bg-[var(--fileon-white)]">
                  {/* .framer-dswrox — incoming icon */}
                  <div className="absolute bottom-[-20px] left-[-20px] z-[1] h-[18px] w-[18px] flex-none overflow-hidden group-hover:relative group-hover:bottom-auto group-hover:left-auto">
                    <Image
                      src={`${ASSETS}/SZd9EedUwnpfottuX47mDHqgqXQ.svg`}
                      alt="Icon"
                      width={18}
                      height={18}
                      className="block h-full w-full object-contain object-center"
                    />
                  </div>
                  {/* .framer-13sriid — resting icon */}
                  <div className="relative h-[18px] w-[18px] flex-none overflow-hidden group-hover:absolute group-hover:top-[-20px] group-hover:right-[-20px] group-hover:z-[1]">
                    <Image
                      src={`${ASSETS}/SZd9EedUwnpfottuX47mDHqgqXQ.svg`}
                      alt="Icon"
                      width={18}
                      height={18}
                      className="block h-full w-full object-contain object-center"
                    />
                  </div>
                </div>
              </Link>
            </div>

            {/* .framer-4wpycy — card wrapper */}
            <div className="relative z-[1] flex w-full flex-none flex-col items-start gap-[20px] xl:w-px xl:max-w-[810px] xl:flex-[1_0_0] xl:gap-[10px]">
              {/* .framer-1r2muwo — sticky card stack */}
              <div className="relative z-[1] flex w-full flex-none flex-col items-start gap-[20px] xl:sticky xl:top-0">
                {CASE_STUDIES.map((study) => (
                  /* .framer-gwxslr — one card row */
                  <div
                    key={study.slug}
                    className="relative flex w-full flex-none items-center justify-start gap-[10px]"
                  >
                    <CaseStudyCard study={study} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
