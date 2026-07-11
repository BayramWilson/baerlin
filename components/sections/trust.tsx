import { Icon } from "@/components/ui/icon";
import { SiteImage } from "@/components/ui/site-image";
import { data, publicNote } from "@/lib/source-data";

const facts = [
  "12 Monate Reparaturgarantie ab Abnahme",
  "Kostenloser, unverbindlicher Kostenvoranschlag",
  "Original-Ersatzteile laut Altseite",
];

export function Trust() {
  return (
    <section className="section-pad">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <SiteImage
          src="/images/team-portrait.webp"
          alt="Portrait eines Werkstatt-Technikers von Kaffee Bärlin"
          className="aspect-[4/5]"
          sizes="(min-width: 1024px) 38vw, 100vw"
        />
        <div>
          <h2 className="section-title">Belegte Fakten statt erfundener Bewertungen.</h2>
          <p className="mt-5 text-lg leading-8 text-[var(--color-muted-foreground)]">
            Google-Reviews konnten wegen Consent-Wall nicht verifiziert werden. Deshalb
            zeigt diese Version keine Sterne, keine Review-Anzahl und keine Zitate.
          </p>
          <div className="mt-8 grid gap-4">
            {facts.map((fact) => (
              <div className="card flex gap-4" key={fact}>
                <Icon name="check" className="mt-1 h-6 w-6 text-[var(--color-accent)]" />
                <p className="font-semibold">{fact}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 rounded-lg border border-[var(--color-border)] bg-white p-4 text-sm leading-6 text-[var(--color-muted-foreground)]">
            {publicNote(data.reviews.note)}
          </p>
        </div>
      </div>
    </section>
  );
}
