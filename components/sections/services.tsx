import { Icon } from "@/components/ui/icon";
import { SiteImage } from "@/components/ui/site-image";
import { data, publicService } from "@/lib/source-data";

const featured = data.services.slice(0, 5);

export function Services() {
  return (
    <section id="leistungen" className="section-pad bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="section-title">Reparatur, Wartung und Ersatzteile aus einer Werkstatt.</h2>
            <p className="mt-5 text-lg leading-8 text-[var(--color-muted-foreground)]">
              Von der Fehlerdiagnose bis zur fertigen Reparatur: Wir prüfen Ihr
              Gerät, erstellen einen kostenlosen Kostenvoranschlag und setzen es
              nach Ihrer Freigabe instand.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <SiteImage
                src="/images/leistung-reparatur.webp"
                alt="Detailaufnahme einer Reparatur an einer Espressomaschine mit Werkzeug"
                className="aspect-[4/3]"
                sizes="(min-width: 640px) 25vw, 100vw"
              />
              <SiteImage
                src="/images/leistung-ersatzteile.webp"
                alt="Sortierte Ersatzteile und Dichtungen in Werkstattschubladen"
                className="aspect-[4/3]"
                sizes="(min-width: 640px) 25vw, 100vw"
              />
            </div>
          </div>
          <div className="grid gap-4">
            {featured.map((service) => (
              <article className="card flex gap-4" key={service}>
                <Icon name="tool" className="mt-1 h-6 w-6 shrink-0 text-[var(--color-accent)]" />
                <p className="font-semibold leading-7">{publicService(service)}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
