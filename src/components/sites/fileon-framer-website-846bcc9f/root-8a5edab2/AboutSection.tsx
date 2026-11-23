import Image from "next/image";
import { Reveal } from "@/components/sites/fileon-framer-website-846bcc9f/shared/Reveal";
import { MotionArrowButton } from "@/components/sites/fileon-framer-website-846bcc9f/shared/MotionArrowButton";
import { cn } from "@/lib/utils";

const IMAGES = "/meiker/images";

/** `.framer-styles-preset-n4ys0b` — Geist Mono 14px / 150% / uppercase. */
const EYEBROW_TEXT =
  "font-[family-name:var(--fileon-font-mono)] text-[14px] font-normal leading-[150%] tracking-[0em] uppercase text-left whitespace-pre";

/** `.framer-styles-preset-57gyz8` — Lora 400, 32 → 36 → 40px, line-height 125%. */
const HEADING_TEXT =
  "font-[family-name:var(--fileon-font-serif)] text-[32px] font-normal leading-[125%] tracking-[0em] text-left md:text-[36px] xl:text-[40px]";

export function AboutSection() {
  return (
    /* name="About Section" .framer-p81148 */
    <section
      className={cn(
        "relative flex w-full flex-none flex-col items-center justify-center gap-[10px] overflow-hidden",
        "bg-[var(--fileon-bg)] px-[20px] py-[80px] md:px-[30px] md:py-[100px] xl:py-[130px]",
      )}
    >
      {/* name="Container" .framer-9jyf3v */}
      <div className="relative flex w-full max-w-[1300px] flex-none flex-col items-center justify-center gap-[10px]">
        {/* name="Content" .framer-1anag4r */}
        <div className="relative flex w-full flex-none flex-col items-start justify-start gap-[15px] md:gap-[20px] xl:flex-row xl:justify-between xl:gap-0">
          {/* name="Section Title 01" .framer-1gnz6fr */}
          <div className="relative flex h-min w-min flex-none flex-row items-center justify-start gap-[10px]">
            {/* name="Icon" .framer-18gvpqs */}
            <div className="relative h-[10px] w-[10px] flex-none overflow-hidden bg-[var(--fileon-coral)]" />
            {/* name="Title" .framer-uioks9 */}
            <div className="relative h-auto w-auto flex-none">
              <p className={cn(EYEBROW_TEXT, "text-[var(--fileon-cacao)]")}>sobre Meiker</p>
            </div>
          </div>

          {/* name="Content Wrapper" .framer-1ff0fmx */}
          <div className="relative flex w-full flex-none flex-col items-start justify-start gap-[40px] md:gap-[50px] xl:w-px xl:max-w-[880px] xl:flex-1 xl:basis-0 xl:gap-[60px]">
            {/* name="Title & Button Wrapper" .framer-1260w58 */}
            <div className="relative flex w-full flex-none flex-col items-start justify-start gap-[25px] md:gap-[30px] xl:gap-[40px]">
              {/* name="Title" .framer-6kn4dy */}
              <div className="relative h-auto w-full flex-none [word-break:break-word] [overflow-wrap:break-word] whitespace-pre-wrap">
                <h4 className={cn(HEADING_TEXT, "text-[var(--fileon-heading)] [text-wrap:balance] md:[text-wrap:wrap]")}>
                  Creemos que el acompañamiento legal empieza por entender tu negocio, tus metas y los retos que
                  quieres resolver
                </h4>
              </div>

              {/* .framer-sfnxa4-container */}
              <div className="relative h-auto w-auto flex-none">
                <MotionArrowButton href="/nosotros" variant="coral">
                  Conoce nuestra historia
                </MotionArrowButton>
              </div>
            </div>

            {/* name="Card Wrapper" .framer-pi3qon */}
            <div className="relative flex w-full flex-none flex-col items-start justify-start gap-[10px] md:flex-row md:items-center">
              {/* name="About Card 01" .framer-5iv59s */}
              <Reveal
                fromScale={0.6}
                className="relative flex w-full flex-none flex-col items-start justify-start gap-[10px] overflow-hidden rounded-[32px] md:w-px md:flex-1 md:basis-0"
              >
                {/* .framer-6jkfx2 */}
                <div className="relative aspect-[1] h-auto w-full flex-none overflow-hidden rounded-[32px] md:aspect-[0.925532]">
                  <Image
                    src={`${IMAGES}/team-meeting.jpg`}
                    alt="Image"
                    width={870}
                    height={940}
                    className="absolute inset-0 block h-full w-full rounded-[inherit] object-cover object-[center_top]"
                  />
                </div>
              </Reveal>

              {/* name="About Card 02" .framer-ua14h8 */}
              <div className="relative flex w-full flex-none flex-col items-start justify-start gap-[10px] overflow-hidden rounded-[32px] md:w-px md:flex-1 md:basis-0">
                {/* .framer-i6fngp */}
                <Reveal fromScale={1.25} delay={120} className="w-full">
                  <div className="relative aspect-[1] h-auto w-full flex-none overflow-hidden rounded-[32px] md:aspect-[0.925532]">
                    <Image
                      src={`${IMAGES}/founders.jpg`}
                      alt="Image"
                      width={870}
                      height={940}
                      className="absolute inset-0 block h-full w-full rounded-[inherit] object-cover object-[center_top]"
                    />
                  </div>
                </Reveal>

                {/* name="Content Wrapper" .framer-1rhqb1m */}
                <div className="absolute bottom-[10px] left-0 z-[1] flex w-full flex-none flex-col items-center justify-center gap-[10px] px-[10px] md:bottom-[20px] md:px-[20px] xl:bottom-[50px] xl:px-[50px]">
                  {/* name="Content " .framer-4ij43e */}
                  <Reveal
                    fromScale={0.92}
                    delay={240}
                    className="relative flex w-full flex-none flex-col items-start justify-start gap-[20px] rounded-[30px] bg-[var(--fileon-white)] p-[18px] md:gap-[30px] md:p-[24px] xl:gap-[52px] xl:p-[30px]"
                  >
                    {/* name="Title Wrapper" .framer-de67i9 */}
                    <div className="relative flex w-full flex-none flex-col items-start justify-start gap-[10px] md:gap-[15px] xl:gap-[20px]">
                      {/* name="Number" .framer-yybbnq */}
                      <div className="relative h-auto w-full flex-none">
                        <h4 className={cn(HEADING_TEXT, "text-[var(--fileon-heading)]")}>95%</h4>
                      </div>
                      {/* name="Title & Short Description" .framer-xqhhzs */}
                      <div className="relative flex w-full flex-none flex-col items-start justify-start gap-[5px]">
                        {/* name="Title" .framer-xkesem */}
                        <div className="relative h-auto w-full flex-none">
                          <p className="font-[family-name:var(--fileon-font-sans)] text-[18px] leading-[150%] font-medium tracking-[0em] text-left text-[var(--fileon-ink)]">
                            Negocios acompañados
                          </p>
                        </div>
                        {/* name="Short Description" .framer-1dyi89y */}
                        <div className="relative h-auto w-full flex-none">
                          <p className="font-[family-name:var(--fileon-font-sans)] text-[16px] leading-[150%] font-normal tracking-[0em] text-left text-[var(--fileon-body)]">
                            Te ayudamos a tomar decisiones claras, seguras y estratégicas.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      aria-hidden="true"
                      className="relative aspect-[4.42857] h-auto w-full flex-none overflow-hidden rounded-[30px] bg-[radial-gradient(circle,rgba(255,91,53,0.55)_1px,transparent_1.5px)] bg-[length:14px_14px] md:aspect-[3.625] xl:aspect-[3.03192]"
                    />
                  </Reveal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
