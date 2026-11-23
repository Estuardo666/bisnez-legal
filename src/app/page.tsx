import type { Metadata } from "next";

import { SmoothScroll } from "@/components/sites/fileon-framer-website-846bcc9f/shared/SmoothScroll";
import { EditorialHeader } from "@/components/sites/fileon-framer-website-846bcc9f/shared/EditorialHeader";
import { HeroSection } from "@/components/sites/fileon-framer-website-846bcc9f/root-8a5edab2/HeroSection";
import { BrandSection } from "@/components/sites/fileon-framer-website-846bcc9f/root-8a5edab2/BrandSection";
import { AboutSection } from "@/components/sites/fileon-framer-website-846bcc9f/root-8a5edab2/AboutSection";
import { ApproachSection } from "@/components/sites/fileon-framer-website-846bcc9f/root-8a5edab2/ApproachSection";
import { CaseStudiesSection } from "@/components/sites/fileon-framer-website-846bcc9f/root-8a5edab2/CaseStudiesSection";
import { ServiceSection } from "@/components/sites/fileon-framer-website-846bcc9f/root-8a5edab2/ServiceSection";
import { TestimonialSection } from "@/components/sites/fileon-framer-website-846bcc9f/root-8a5edab2/TestimonialSection";
import { ExpertiseSection } from "@/components/sites/fileon-framer-website-846bcc9f/root-8a5edab2/ExpertiseSection";
import { PricingSection } from "@/components/sites/fileon-framer-website-846bcc9f/root-8a5edab2/PricingSection";
import { GuidanceSection } from "@/components/sites/fileon-framer-website-846bcc9f/root-8a5edab2/GuidanceSection";
import { BlogSection } from "@/components/sites/fileon-framer-website-846bcc9f/root-8a5edab2/BlogSection";
import { Footer } from "@/components/sites/fileon-framer-website-846bcc9f/root-8a5edab2/Footer";

export const metadata: Metadata = {
  title: "Meiker · Registro de Marca en Ecuador",
  description:
    "Abogados que sí saben de negocios. Protegemos tu marca y los activos que le dan valor a tu negocio en Ecuador.",
  icons: {
    icon: "/meiker/favico.png",
  },
  openGraph: {
    type: "website",
    title: "Meiker · Registro de Marca en Ecuador",
    description:
      "Registro de marca, constitución S.A.S. y contratos empresariales para negocios que quieren crecer con seguridad jurídica.",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meiker · Registro de Marca en Ecuador",
    description:
      "Registro de marca, constitución S.A.S. y contratos empresariales para negocios que quieren crecer con seguridad jurídica.",
    images: ["/opengraph-image"],
  },
};

export default function Home() {
  return (
    <div className="fileon relative w-full">
      <SmoothScroll />
      <EditorialHeader />
      <main>
        <HeroSection />
        <BrandSection />
        <AboutSection />
        <ApproachSection />
        <CaseStudiesSection />
        <ServiceSection />
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
