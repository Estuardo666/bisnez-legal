/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import { Reveal } from "@/components/sites/fileon-framer-website-846bcc9f/shared/Reveal";
import { cn } from "@/lib/utils";

const ASSETS = "/sites/fileon-framer-website-846bcc9f/root-8a5edab2/images";

/** `SZd9EedUwnpfottuX47mDHqgqXQ.svg` — arrow inside the "View all blogs" button. */
const ARROW_BUTTON = `${ASSETS}/SZd9EedUwnpfottuX47mDHqgqXQ.svg`;
/** `CekQhoySyk4yvSOaCWN8WNaPKqk.svg` — dark arrow on the light desktop badge (Blog Icon 01). */
const ARROW_CARD_DESKTOP = `${ASSETS}/CekQhoySyk4yvSOaCWN8WNaPKqk.svg`;
/** `PGYGVLmyGTP0EPMngjG7vljuTs.svg` — light arrow on the black tablet/phone badge (Blog Icon 02). */
const ARROW_CARD_COMPACT = `${ASSETS}/PGYGVLmyGTP0EPMngjG7vljuTs.svg`;

type BlogPost = {
  slug: string;
  title: string;
  author: string;
  date: string;
  image: string;
  /**
   * Framer only renders this entry inside the tablet `ssr-variant` (the 2-column
   * grid runs four cards, the 1- and 3-column grids run three).
   */
  tabletOnly?: boolean;
};

const POSTS: readonly BlogPost[] = [
  {
    slug: "understanding-contract-risks-before-signing-agreements",
    title: "Understanding contract risks before signing agreements",
    author: "Olivia Bennett",
    date: "January 1, 2026",
    image: `${ASSETS}/5KMN0unxlWFjDSiBlujYK0I1V4.png`,
  },
  {
    slug: "protecting-business-interests-through-legal-planning",
    title: "Protecting business interests through legal planning",
    author: "Michael Carter",
    date: "February 17, 2026",
    image: `${ASSETS}/BODlVlNXnbQ0PJhZCOMVc48x8.png`,
  },
  {
    slug: "managing-legal-challenges-with-strategic-guidance",
    title: "Managing legal challenges with strategic guidance",
    author: "Amelia Brooks",
    date: "February 22, 2026",
    image: `${ASSETS}/aQ5R4aV6rdcY8okvLRUjvHNsvY.png`,
  },
  {
    slug: "navigating-corporate-disputes-with-effective-legal-strategies",
    title: "Navigating corporate disputes with effective legal strategies",
    author: "Sophia Bennett",
    date: "March 15, 2026",
    image: `${ASSETS}/94vQ2MMtTlhPfCbUnLo8w42XqIg.png`,
    tabletOnly: true,
  },
];

/**
 * The CSS dump encodes the button's label/icon swap as instant `position` swaps
 * (Framer tweens them from JS, so no duration/easing survives into the stylesheet).
 * They are re-expressed here as transforms so they can actually animate — same
 * timing the sibling sections use.
 */
const HOVER_MOTION = "transition-transform duration-[400ms] ease-[cubic-bezier(0.44,0,0.56,1)]";

/** Framer preset `c36khm` — Manrope 16 / 150% / #575757. */
const PRESET_BODY =
  "text-left font-[family-name:var(--fileon-font-sans,Manrope,sans-serif)] text-[16px] leading-[150%] font-normal tracking-[0em] text-[var(--fileon-body,#575757)]";

export function BlogSection() {
  return (
    // Blog Section — .framer-1918kbp : padding 80/20 → 100/30 → 130/30, overflow hidden
    <section
      data-framer-name="Blog Section"
      className="relative flex w-full flex-none items-center justify-center gap-[10px] overflow-hidden bg-[var(--fileon-bg,#f7f7f2)] px-[20px] py-[80px] md:px-[30px] md:py-[100px] xl:py-[130px]"
    >
      {/* Container — .framer-1m336pp */}
      <div className="relative flex h-min w-px max-w-[1300px] flex-1 items-center justify-center gap-[10px]">
        {/* Content — .framer-150m405, gap 40 → 50 → 60 */}
        <div className="relative flex h-min w-px flex-1 flex-col items-start justify-start gap-[40px] md:gap-[50px] xl:gap-[60px]">
          {/* Title & Button Wrapper — .framer-1vzeben */}
          <div className="relative flex h-min w-full flex-none flex-col items-start justify-start gap-[20px] md:flex-row md:items-end md:justify-between md:gap-0">
            {/* Title Wrapper — .framer-xq51ad, max-width unset → 400 → 500 */}
            <div className="relative flex h-min w-full flex-none flex-col items-start justify-start gap-[10px] md:w-px md:max-w-[400px] md:flex-1 xl:max-w-[500px]">
              {/* Section Title 01 — .framer-1gnz6fr */}
              <Reveal className="relative h-auto w-auto flex-none" fromScale={1}>
                <div className="relative flex h-min w-min flex-none items-center justify-start gap-[10px]">
                  {/* Icon — .framer-18gvpqs */}
                  <div className="relative h-[10px] w-[10px] flex-none bg-[var(--fileon-ink,#191818)]" />
                  {/* Title — .framer-uioks9 + preset n4ys0b */}
                  <div className="relative h-auto w-auto flex-none whitespace-pre">
                    <p className="text-left font-[family-name:var(--fileon-font-mono,'Geist_Mono',monospace)] text-[14px] leading-[150%] font-normal tracking-[0em] text-black uppercase">
                      our blogs
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* Title — .framer-1hs35zk + preset 1x3pol9 (38 → 46 → 56) */}
              <div className="relative h-auto w-full flex-none [text-wrap:balance]">
                <h2 className="text-left font-[family-name:var(--fileon-font-serif,Lora,serif)] text-[38px] leading-[120%] font-normal tracking-[0em] text-[var(--fileon-ink,#191818)] md:text-[46px] xl:text-[56px]">
                  Legal Updates And{" "}
                  <span className="text-[rgba(0,0,0,0.5)]">Perspectives</span>
                </h2>
              </div>
            </div>

            {/* Secondary Button — .framer-1vlt3ha */}
            <Reveal className="h-auto w-auto flex-none" fromScale={0.8}>
              <ViewAllBlogsButton />
            </Reveal>
          </div>

          {/* Card Wrapper — .framer-1g1hmut, column/20 → row/20 → row/10 */}
          <div className="relative flex h-min w-full flex-none flex-col items-start justify-start gap-[20px] md:flex-row md:gap-[20px] xl:gap-[10px]">
            {/* .framer-126xfo4 — 1 col → 2 cols → 3 cols */}
            <div className="relative grid h-min w-full auto-rows-min grid-cols-[repeat(1,minmax(50px,1fr))] justify-start gap-[20px] md:w-px md:flex-1 md:grid-cols-[repeat(2,minmax(50px,1fr))] xl:gap-x-[10px] xl:gap-y-[20px] xl:grid-cols-[repeat(3,minmax(50px,1fr))]">
              {POSTS.map((post, index) => (
                // .framer-176mqhv
                <div
                  key={post.slug}
                  className={cn(
                    "relative flex h-min w-full flex-none items-center justify-start gap-[10px] self-start",
                    post.tabletOnly && "hidden md:flex xl:hidden",
                  )}
                >
                  {/* .framer-r7sjv6-container */}
                  <Reveal className="relative h-auto w-px flex-1" fromScale={0.7} delay={index * 90}>
                    <BlogCard post={post} />
                  </Reveal>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ViewAllBlogsButton() {
  return (
    <Link
      href="/blogs"
      data-framer-name="Secondary Button 01"
      className={cn(
        "group relative flex h-min w-min flex-none cursor-pointer items-center justify-center gap-[14px]",
        "overflow-hidden rounded-[50px] bg-[var(--fileon-ink,#191818)] py-[6px] pr-[6px] pl-[24px] no-underline",
      )}
    >
      {/* Title Wrapper — .framer-176aqmi (overflow hidden, one line tall) */}
      <div className="relative flex h-[24px] w-min flex-none flex-col items-start justify-start overflow-hidden">
        {/* .framer-yu6vuw (top:-50px) and .framer-1h58870 trade places on hover */}
        <div className={cn("flex flex-col group-hover:-translate-y-[24px]", HOVER_MOTION)}>
          <p className="h-[24px] text-left font-[family-name:var(--fileon-font-sans,Manrope,sans-serif)] text-[16px] leading-[150%] font-medium tracking-[0em] whitespace-pre text-white">
            View all blogs
          </p>
          <p className="h-[24px] text-left font-[family-name:var(--fileon-font-sans,Manrope,sans-serif)] text-[16px] leading-[150%] font-medium tracking-[0em] whitespace-pre text-white">
            View all blogs
          </p>
        </div>
      </div>

      {/* Icon Wrapper — .framer-1d5hfen */}
      <div className="relative flex h-[35px] w-[35px] flex-none flex-col items-center justify-center gap-[10px] overflow-hidden rounded-[100px] bg-white">
        <div className="relative h-[18px] w-[18px] flex-none">
          {/* .framer-dswrox — parked at bottom:-20px / left:-20px, slides in on hover */}
          <span
            className={cn(
              "absolute inset-0 block -translate-x-[20px] translate-y-[20px] group-hover:translate-x-0 group-hover:translate-y-0",
              HOVER_MOTION,
            )}
          >
            <img
              src={ARROW_BUTTON}
              alt="Icon"
              width={18}
              height={18}
              className="block h-full w-full object-contain object-center"
            />
          </span>
          {/* .framer-13sriid — in place, exits to top:-20px / right:-20px on hover */}
          <span
            className={cn(
              "absolute inset-0 block group-hover:translate-x-[20px] group-hover:-translate-y-[20px]",
              HOVER_MOTION,
            )}
          >
            <img
              src={ARROW_BUTTON}
              alt="Icon"
              width={18}
              height={18}
              className="block h-full w-full object-contain object-center"
            />
          </span>
        </div>
      </div>
    </Link>
  );
}

/**
 * Blog card. The only hover affordance in the CSS dump belongs to the desktop
 * variant: `.framer-SVZnX.framer-v-a4obmy.hover .framer-10fkup1 { height: 378px }`
 * — the cover image alone grows 350px → 378px, with no card transform and no
 * shadow. Framer drives that height from JS, so the stylesheet carries no
 * duration/easing; the shared 400ms `cubic-bezier(0.44,0,0.56,1)` used by the
 * sibling sections is applied here.
 */
function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blogs/${post.slug}`}
      data-framer-name="Blog Card"
      className={cn(
        // .framer-v-1ny2zzt (phone) → .framer-v-1tts9tm (tablet) → .framer-v-a4obmy (desktop)
        "group relative flex h-min w-full cursor-pointer flex-col items-start justify-start gap-[5px] overflow-hidden",
        "rounded-[10px] bg-[var(--fileon-white,#ffffff)] p-0 no-underline md:gap-0",
      )}
    >
      {/* Image Wrapper — .framer-101bcmv */}
      <div className="relative flex h-min w-full flex-none flex-col items-start justify-start gap-[10px] overflow-hidden rounded-t-[10px]">
        {/* .framer-10fkup1 — 220 → 300 → 350 (→ 378 on desktop hover) */}
        <div
          className={cn(
            "relative h-[220px] w-full flex-none overflow-hidden rounded-t-[10px]",
            "md:h-[300px] xl:h-[350px] xl:group-hover:h-[378px]",
            "transition-[height] duration-[400ms] ease-[cubic-bezier(0.44,0,0.56,1)]",
          )}
        >
          <img
            src={post.image}
            alt="Image"
            className="absolute inset-0 block h-full w-full rounded-[inherit] object-cover object-center"
          />
        </div>
      </div>

      {/* Content Wrapper — .framer-z6zd3x */}
      <div className="relative z-[3] flex h-min w-full flex-none flex-col items-start justify-start gap-[10px] px-[10px] pt-[10px] pb-[20px] md:gap-[12px] md:px-[20px] md:pt-[20px] md:pb-[30px] xl:gap-[14px] xl:px-[25px] xl:pt-[25px] xl:pb-[60px]">
        {/* Title — .framer-vpd1rt + preset 1hf31ua (22 → 22 → 24) */}
        <div className="relative h-auto w-full flex-none [text-wrap:balance]">
          <h6 className="text-left font-[family-name:var(--fileon-font-serif,Lora,serif)] text-[22px] leading-[135%] font-normal tracking-[0em] text-black xl:text-[24px]">
            {post.title}
          </h6>
        </div>

        {/* Author Name Wrapper — .framer-19ucsn0 */}
        <div className="relative flex h-min w-full flex-none flex-col items-start justify-start gap-[3px] md:flex-row md:items-center md:gap-[10px]">
          {/* Author Name — .framer-tf7e0c */}
          <div className="relative h-auto w-full flex-none [text-wrap:balance] md:w-auto">
            <p className={PRESET_BODY}>{post.author}</p>
          </div>
          {/* Line — .framer-1ehwsty (absent from the phone variant) */}
          <div className="relative hidden h-px w-[12px] flex-none overflow-hidden bg-[var(--fileon-body,#575757)] md:block" />
          {/* Date — .framer-1wmb1i5 */}
          <div className="relative h-auto w-full flex-none [text-wrap:balance] md:w-px md:flex-1">
            <p className={PRESET_BODY}>{post.date}</p>
          </div>
        </div>
      </div>

      {/* Blog Icon — .framer-ypozyw-container : 30 → 35 → 48, inset 20 → 20 → 25 */}
      <div className="absolute right-[20px] bottom-[20px] z-[5] h-[30px] w-[30px] flex-none md:h-[35px] md:w-[35px] xl:right-[25px] xl:bottom-[25px] xl:h-[48px] xl:w-[48px]">
        {/* Blog Icon 02 (black) below 1380px, Blog Icon 01 (#eeece6) on desktop */}
        <div className="relative flex h-full w-full flex-col items-center justify-center gap-[10px] overflow-hidden rounded-[100px] bg-black xl:bg-[var(--fileon-bg-warm,#eeece6)]">
          {/* Icon — .framer-1t1ntqc */}
          <div className="relative h-[20px] w-[20px] flex-none overflow-hidden">
            <img
              src={ARROW_CARD_COMPACT}
              alt="Icon"
              width={20}
              height={20}
              className="block h-full w-full object-contain object-center xl:hidden"
            />
            <img
              src={ARROW_CARD_DESKTOP}
              alt="Icon"
              width={20}
              height={20}
              className="hidden h-full w-full object-contain object-center xl:block"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
