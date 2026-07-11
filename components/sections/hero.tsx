import { Icon } from "@/components/ui/icon";
import { SiteImage } from "@/components/ui/site-image";
import { phoneHref } from "@/lib/source-data";

export function Hero() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8">
        <div>
          <p className="eyebrow">Reparaturwerkstatt in Berlin-Moabit</p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl leading-tight text-[var(--color-primary)] sm:text-5xl lg:text-6xl">
            Fachwerkstatt für Kaffeemaschinen.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-muted-foreground)]">
            Kostenlose Diagnose, Kostenvoranschlag und Abholung für Kaffeevollautomaten.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a className="btn-cta" href={phoneHref}>
              <Icon name="phone" className="h-5 w-5" />
              Jetzt anrufen
            </a>
            <a className="btn-secondary" href="#kontakt">
              <Icon name="truck" className="h-5 w-5" />
              Abholung anfragen
            </a>
          </div>
        </div>
        <SiteImage
          src="/images/hero.webp"
          alt="Techniker repariert eine geöffnete Espressomaschine in einer warm beleuchteten Werkstatt"
          className="aspect-video"
          priority
          sizes="(min-width: 1024px) 44vw, 100vw"
        />
      </div>
    </section>
  );
}
