import type { Metadata } from "next";

import { Footer } from "@/components/sites/fileon-framer-website-846bcc9f/root-8a5edab2/Footer";
import { EditorialHeader } from "@/components/sites/fileon-framer-website-846bcc9f/shared/EditorialHeader";
import { ContactPage } from "@/components/sites/fileon-framer-website-846bcc9f/contact-4eb95063/ContactPage";

export const metadata: Metadata = {
  title: "Contacto | Meiker",
  description:
    "Conversa con el equipo de Meiker sobre registro de marca, propiedad intelectual y soluciones legales para tu negocio en Ecuador.",
  openGraph: {
    title: "Contacto | Meiker",
    description:
      "Agenda una conversación con Meiker y recibe orientación legal clara para proteger y hacer crecer tu negocio.",
    images: [
      "/meiker/images/legal-team.jpg",
    ],
  },
};

export default function ContactRoute() {
  return (
    <div className="fileon relative w-full" style={{ "--fileon-cacao": "#461312", "--fileon-arena": "#ffeaca", "--fileon-coral": "#ff5b35", "--fileon-brisa": "#d8efff", "--fileon-body": "#614c49", "--fileon-bg": "#fffaf4" } as React.CSSProperties}>
      <EditorialHeader />
      <main>
        <ContactPage />
      </main>
      <Footer />
    </div>
  );
}
