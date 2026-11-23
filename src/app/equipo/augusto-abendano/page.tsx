import type { Metadata } from "next";

import { TeamDetailPage } from "@/components/sites/fileon-framer-website-846bcc9f/teams-amelia-brooks-3d7f0bd5/TeamDetailPage";

const IMAGE_BASE =
  "/meiker/images";

export const metadata: Metadata = {
  title: "Augusto Abendaño | Meiker",
  description:
    "Conoce a Augusto Abendaño, socio fundador de Meiker y especialista en Propiedad Intelectual, registro de marcas y soluciones legales para negocios en Ecuador.",
  alternates: {
    canonical: "/equipo/augusto-abendano",
  },
  openGraph: {
    type: "profile",
    title: "Augusto Abendaño | Meiker",
    description:
      "Socio fundador y especialista en Propiedad Intelectual, registro de marcas y seguridad jurídica para negocios en Ecuador.",
    images: [
      {
        url: `${IMAGE_BASE}/lawyer-portrait.jpg`,
        width: 854,
        height: 1000,
        alt: "Retrato editorial del perfil de Augusto Abendaño",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Augusto Abendaño | Meiker",
    description:
      "Socio fundador y especialista en Propiedad Intelectual para negocios en Ecuador.",
    images: [`${IMAGE_BASE}/lawyer-portrait.jpg`],
  },
};

export default function Page() {
  return <TeamDetailPage />;
}
