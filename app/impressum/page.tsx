import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/legal-page";
import { data } from "@/lib/source-data";

export const metadata: Metadata = {
  title: "Impressum | Kaffee Bärlin",
  description: "Impressum von Kaffee Bärlin in Berlin-Moabit.",
};

export default function ImpressumPage() {
  const text = `${data.legal.impressum.textVerbatim}\n\n${data.legal.disclaimer.textVerbatim}`;
  return <LegalPage title="Impressum" text={text} />;
}
