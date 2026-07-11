import { Icon } from "@/components/ui/icon";
import { SiteImage } from "@/components/ui/site-image";
import { data, mapsHref } from "@/lib/source-data";

export function Location() {
  return (
    <section id="standort" className="section-pad bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div>
          <h2 className="section-title">Abgabe in Berlin-Moabit.</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="card">
              <Icon name="map" className="h-6 w-6 text-[var(--color-accent)]" />
              <h3 className="mt-4 font-bold text-[var(--color-primary)]">Adresse</h3>
              <p className="mt-2 leading-7 text-[var(--color-muted-foreground)]">
                {data.nap.street}
                <br />
                {data.nap.postalCode} {data.nap.city}
              </p>
              <a className="mt-4 inline-flex font-bold text-[var(--color-accent)]" href={mapsHref}>
                Route öffnen
              </a>
            </div>
            <div className="card">
              <Icon name="clock" className="h-6 w-6 text-[var(--color-accent)]" />
              <h3 className="mt-4 font-bold text-[var(--color-primary)]">Öffnungszeiten</h3>
              <p className="mt-2 leading-7 text-[var(--color-muted-foreground)]">
                Mo-Fr: {data.hours.monFri}
                <br />
                Sa: {data.hours.sat}
              </p>
            </div>
          </div>
        </div>
        <SiteImage
          src="/images/ladenfront.webp"
          alt="Ladenfront einer Werkstatt in einer Berliner Straße"
          className="aspect-video"
          sizes="(min-width: 1024px) 38vw, 100vw"
        />
      </div>
    </section>
  );
}
