import type { Metadata } from "next";

import { ServicesPage } from "@/components/sites/fileon-framer-website-846bcc9f/services-3b1aeccb/ServicesPage";

export const metadata: Metadata = {
  title: "Servicios legales para empresas | Meiker",
  description:
    "Registro de marca, cese de uso, Constitución S.A.S. y contratos empresariales para operar y crecer con seguridad jurídica en Ecuador.",
  openGraph: {
    title: "Servicios legales para empresas | Meiker",
    description:
      "Desde registrar tu marca hasta blindar tus contratos y constituir tu empresa.",
    images: [
      "/meiker/images/team-meeting.jpg",
    ],
  },
};

export default function ServicesRoute() {
  return <ServicesPage />;
}
