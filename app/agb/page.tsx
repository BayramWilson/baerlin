import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/legal-page";
import { data } from "@/lib/source-data";

export const metadata: Metadata = {
  title: "AGB | Kaffee Bärlin",
  description: "Allgemeine Geschäftsbedingungen von Kaffee Bärlin.",
};

export default function AgbPage() {
  return <LegalPage title="AGB" text={data.legal.agb.textVerbatim} />;
}
