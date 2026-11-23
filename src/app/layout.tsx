import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@fontsource-variable/google-sans-flex/wght.css";
import "./globals.css";

import { WhatsAppFloat } from "@/components/sites/fileon-framer-website-846bcc9f/shared/WhatsAppFloat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://meiker.totemmassmedia.com"),
  // Routes export their own metadata; this is only the fallback title pattern.
  title: { default: "Meiker · Registro de Marca en Ecuador", template: "%s" },
  description: "Meiker protege marcas y activos empresariales en Ecuador con procesos legales claros y estratégicos.",
  icons: {
    icon: "/meiker/favico.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
