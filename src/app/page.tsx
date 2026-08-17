import { SmoothScroll } from "@/components/sites/fileon-framer-website-846bcc9f/shared/SmoothScroll";
import { Header } from "@/components/sites/fileon-framer-website-846bcc9f/root-8a5edab2/Header";
import { HeroSection } from "@/components/sites/fileon-framer-website-846bcc9f/root-8a5edab2/HeroSection";
import { BrandSection } from "@/components/sites/fileon-framer-website-846bcc9f/root-8a5edab2/BrandSection";
import { AboutSection } from "@/components/sites/fileon-framer-website-846bcc9f/root-8a5edab2/AboutSection";
import { ApproachSection } from "@/components/sites/fileon-framer-website-846bcc9f/root-8a5edab2/ApproachSection";
import { CaseStudiesSection } from "@/components/sites/fileon-framer-website-846bcc9f/root-8a5edab2/CaseStudiesSection";
import { ServiceSection } from "@/components/sites/fileon-framer-website-846bcc9f/root-8a5edab2/ServiceSection";
import { VideoSection } from "@/components/sites/fileon-framer-website-846bcc9f/root-8a5edab2/VideoSection";
import { TrustBarSection } from "@/components/sites/fileon-framer-website-846bcc9f/root-8a5edab2/TrustBarSection";
import { TestimonialSection } from "@/components/sites/fileon-framer-website-846bcc9f/root-8a5edab2/TestimonialSection";
import { ExpertiseSection } from "@/components/sites/fileon-framer-website-846bcc9f/root-8a5edab2/ExpertiseSection";
import { PricingSection } from "@/components/sites/fileon-framer-website-846bcc9f/root-8a5edab2/PricingSection";
import { GuidanceSection } from "@/components/sites/fileon-framer-website-846bcc9f/root-8a5edab2/GuidanceSection";
import { BlogSection } from "@/components/sites/fileon-framer-website-846bcc9f/root-8a5edab2/BlogSection";
import { Footer } from "@/components/sites/fileon-framer-website-846bcc9f/root-8a5edab2/Footer";

export default function Home() {
  return (
    <div className="fileon relative w-full">
      <SmoothScroll />
      <Header />
      <main>
        <HeroSection />
        <BrandSection />
        <AboutSection />
        <ApproachSection />
        <CaseStudiesSection />
        <ServiceSection />
        <VideoSection />
        <TrustBarSection />
        <ExpertiseSection />
        <TestimonialSection />
        <PricingSection />
        <GuidanceSection />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
}
