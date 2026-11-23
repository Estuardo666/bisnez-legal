import Image from "next/image";
import Link from "next/link";

import { FadeIn } from "@/components/sites/fileon-framer-website-846bcc9f/shared/PagePrimitives";

const FOOTER_LINKS = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Servicios", href: "/servicios" },
  { label: "Contacto", href: "/contacto" },
  { label: "Equipo", href: "/equipo" },
] as const;

const SERVICE_LINKS = [
  { label: "Registro de marca", href: "/servicios/registro-de-marca" },
  { label: "Constitución S.A.S.", href: "/servicios/constitucion-sas" },
  { label: "Contratos empresariales", href: "/servicios/contratos-empresariales" },
  { label: "Cese de uso", href: "/servicios/cese-de-uso" },
] as const;

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://www.instagram.com/meiker_legal/", external: true },
  { label: "Facebook", href: "https://www.facebook.com/bisnez.legal1/", external: true },
] as const;

export function Footer() {
  return (
    <footer className="overflow-hidden bg-[var(--fileon-brisa)] px-5 pb-5 pt-16 text-[var(--fileon-cacao)] md:px-[30px] md:pt-24 xl:pt-32">
      <div className="mx-auto max-w-[1300px]">
        <FadeIn subtle={false}>
          <div className="grid gap-12 border-b border-[color:rgb(70_19_18_/_18%)] pb-14 md:grid-cols-[1.1fr_0.9fr_0.9fr_1.1fr] md:gap-8">
            <div className="max-w-[360px]">
              <Link href="/" className="flex items-center gap-2 text-[var(--fileon-cacao)] no-underline">
                <Image src="/meiker/logo para fondo claro.png" alt="Meiker" width={242} height={60} className="h-auto w-[150px]" />
              </Link>
              <p className="mt-6 text-[17px] leading-[1.55] text-[var(--fileon-body)]">
                Abogados que sí saben de negocios. Protegemos tu marca y los activos que le dan valor a tu empresa.
              </p>
              <a href="mailto:augusto@bisnez.legal" className="mt-8 inline-block text-[15px] text-[var(--fileon-cacao)] underline decoration-[var(--fileon-coral)] underline-offset-4">augusto@bisnez.legal</a>
            </div>

            <FooterColumn title="Explora" links={FOOTER_LINKS} />
            <FooterColumn title="Soluciones" links={SERVICE_LINKS} />
            <FooterColumn title="Redes sociales" links={SOCIAL_LINKS} />
          </div>
        </FadeIn>

        <div className="flex flex-col gap-8 py-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[var(--fileon-body)]">¿Hablamos por WhatsApp?</p>
            <a href="https://wa.me/593959652566" target="_blank" rel="noopener noreferrer" className="mt-2 block text-[clamp(2.2rem,5vw,4.5rem)] font-medium leading-none tracking-[-0.07em] text-[var(--fileon-cacao)] no-underline transition-colors duration-300 hover:text-[var(--fileon-coral)]">095 965 2566</a>
          </div>
          <div className="text-left text-[13px] leading-[1.5] text-[var(--fileon-body)] md:text-right">
            <p>Sucre entre Rocafuerte y 10 de Agosto · De 9:00 a 19:00</p>
            <p>Llámanos: <a href="tel:+593993560952" className="text-inherit underline decoration-[var(--fileon-coral)] underline-offset-4">099 356 0952</a></p>
            <p>Meiker S.A.S., empresa constituida legalmente en Ecuador.</p>
            <p>© 2026 Meiker. Todos los derechos reservados.</p>
          </div>
        </div>

      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: readonly { label: string; href: string; external?: boolean }[] }) {
  return (
    <div>
      <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[var(--fileon-body)]">{title}</p>
      <div className="mt-5 flex flex-col items-start gap-2">
        {links.map((link) => link.external ? (
          <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="text-[16px] text-[var(--fileon-cacao)] no-underline transition-colors duration-300 hover:text-[var(--fileon-coral)]">{link.label}</a>
        ) : (
          <Link key={link.href} href={link.href} className="text-[16px] text-[var(--fileon-cacao)] no-underline transition-colors duration-300 hover:text-[var(--fileon-coral)]">{link.label}</Link>
        ))}
      </div>
    </div>
  );
}
