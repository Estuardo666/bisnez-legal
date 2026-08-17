import { SmoothScroll } from "@/components/sites/fileon-framer-website-846bcc9f/shared/SmoothScroll";
import { Header } from "@/components/sites/fileon-framer-website-846bcc9f/root-8a5edab2/Header";
import { HeroSection } from "@/components/sites/fileon-framer-website-846bcc9f/root-8a5edab2/HeroSection";
import { BrandSection } from "@/components/sites/fileon-framer-website-846bcc9f/root-8a5edab2/BrandSection";
import { AboutSection } from "@/components/sites/fileon-framer-website-846bcc9f/root-8a5edab2/AboutSection";
import { TrustBarSection } from "@/components/sites/fileon-framer-website-846bcc9f/root-8a5edab2/TrustBarSection";

export default function Home() {
  return (
    <div className="fileon relative w-full">
      <SmoothScroll />
      <Header />
      <main>
        <HeroSection />
        <BrandSection />
        <AboutSection />
        <TrustBarSection />
      </main>
    </div>
  );
}
