import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailPage } from "@/components/sections/service-detail-page";
import { SiteFooter } from "@/components/sections/site-footer";
import { SiteHeader } from "@/components/sections/site-header";
import { servicePages, servicePageSlugs, type ServicePageSlug } from "@/lib/service-pages";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return servicePageSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = servicePages[slug as ServicePageSlug];

  if (!page) {
    return {};
  }

  return {
    title: page.metaTitle,
    description: page.description,
    alternates: {
      canonical: `/${page.slug}`,
    },
    openGraph: {
      title: page.metaTitle,
      description: page.description,
      url: `/${page.slug}`,
      siteName: "Kaffee Bärlin",
      locale: "de_DE",
      type: "website",
      images: [
        {
          url: "/images/og-image.webp",
          width: 1200,
          height: 630,
          alt: page.title,
        },
      ],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const page = servicePages[slug as ServicePageSlug];

  if (!page) {
    notFound();
  }

  return (
    <>
      <SiteHeader />
      <ServiceDetailPage page={page} />
      <SiteFooter />
    </>
  );
}
