import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/legal-page";
import { data } from "@/lib/source-data";

export const metadata: Metadata = {
  title: "Datenschutz | Kaffee Bärlin",
  description: "Datenschutzerklärung von Kaffee Bärlin.",
};

export default function DatenschutzPage() {
  return <LegalPage title="Datenschutz" text={data.legal.datenschutz.textVerbatim} />;
}
