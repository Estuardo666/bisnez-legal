import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  SERVICE_DETAILS,
  ServiceDetailPage,
} from "@/components/sites/fileon-framer-website-846bcc9f/services-corporate-legal-advisory-copy-4-b32e8c8c/ServiceDetailPage";

export function generateStaticParams() {
  return SERVICE_DETAILS.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICE_DETAILS.find((item) => item.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} | Meiker`,
    description: service.summary,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICE_DETAILS.find((item) => item.slug === slug);
  if (!service) notFound();
  return <ServiceDetailPage service={service} />;
}
