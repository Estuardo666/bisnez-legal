import type { Metadata } from "next";

import { AboutPage } from "@/components/sites/fileon-framer-website-846bcc9f/about-979bddc4/AboutPage";

export const metadata: Metadata = {
  title: "Sobre Meiker | Registro de marca en Ecuador",
  description:
    "Conoce Meiker: abogados empresariales especialistas en propiedad intelectual y protección de marcas en Ecuador.",
  openGraph: {
    title: "Sobre Meiker | Registro de marca en Ecuador",
    description:
      "Protegemos tu marca y los activos que le dan valor a tu negocio, para que operes y crezcas con seguridad jurídica.",
    images: [
      "/meiker/images/team-meeting.jpg",
    ],
  },
};

export default function AboutRoute() {
  return <AboutPage />;
}
