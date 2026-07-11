import { Icon } from "@/components/ui/icon";
import { SiteImage } from "@/components/ui/site-image";

const facts = [
  "12 Monate Reparaturgarantie ab Abnahme",
  "Kostenloser, unverbindlicher Kostenvoranschlag",
  "Reparatur mit Original-Ersatzteilen",
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
          <p className="eyebrow">Ihre Maschine in guten Händen</p>
          <h2 className="section-title mt-3">Klarer Ablauf. Verlässliche Leistungen.</h2>
          <p className="mt-5 text-lg leading-8 text-[var(--color-muted-foreground)]">
            Sie entscheiden erst nach Diagnose und Kostenvoranschlag, ob wir die
            Reparatur ausführen. Danach beginnt die Instandsetzung umgehend.
          </p>
          <div className="mt-8 grid gap-4">
            {facts.map((fact) => (
              <div className="card flex gap-4" key={fact}>
                <Icon name="check" className="mt-1 h-6 w-6 text-[var(--color-accent)]" />
                <p className="font-semibold">{fact}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
