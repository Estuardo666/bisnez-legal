import type { Metadata } from "next";

import { Footer } from "@/components/sites/fileon-framer-website-846bcc9f/root-8a5edab2/Footer";
import { EditorialHeader } from "@/components/sites/fileon-framer-website-846bcc9f/shared/EditorialHeader";
import { TeamsPage } from "@/components/sites/fileon-framer-website-846bcc9f/teams-a30fe034/TeamsPage";

export const metadata: Metadata = {
  title: "Equipo | Meiker",
  description:
    "Conoce al equipo de Meiker: especialistas que convierten la protección legal de tu negocio en decisiones claras y estratégicas.",
  openGraph: {
    title: "Equipo | Meiker",
    description:
      "Personas detrás de Meiker, con experiencia en propiedad intelectual, negocios y crecimiento empresarial en Ecuador.",
    images: [
      "/meiker/images/legal-team.jpg",
    ],
  },
};

export default function TeamsRoute() {
  return (
    <div className="fileon relative w-full" style={{ "--fileon-cacao": "#461312", "--fileon-arena": "#ffeaca", "--fileon-coral": "#ff5b35", "--fileon-brisa": "#d8efff", "--fileon-body": "#614c49", "--fileon-bg": "#fffaf4" } as React.CSSProperties}>
      <EditorialHeader />
      <main>
        <TeamsPage />
      </main>
      <Footer />
    </div>
  );
}
