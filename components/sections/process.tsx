import { Icon } from "@/components/ui/icon";
import { SiteImage } from "@/components/ui/site-image";
import { data } from "@/lib/source-data";

const processImages = [
  {
    src: "/images/ablauf-1-abgabe.webp" as const,
    alt: "Kunde übergibt eine Espressomaschine in der Werkstatt",
  },
  {
    src: "/images/ablauf-2-diagnose.webp" as const,
    alt: "Techniker prüft eine geöffnete Kaffeemaschine mit Messgerät",
  },
  {
    src: "/images/ablauf-3-fertig.webp" as const,
    alt: "Reparierte Espressomaschine gibt Kaffee aus",
  },
];

export function Process() {
  return (
    <section id="ablauf" className="section-pad bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="section-title max-w-3xl">In drei Schritten von der Annahme zur Rückgabe.</h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {data.process.map((step, index) => (
            <article className="card" key={step.step}>
              <SiteImage
                src={processImages[index].src}
                alt={processImages[index].alt}
                className="aspect-square"
                sizes="(min-width: 1024px) 30vw, 100vw"
              />
              <div className="mt-5 flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--color-primary)] font-bold text-white">
                  {step.step}
                </span>
                <h3 className="text-xl font-bold text-[var(--color-primary)]">{step.title}</h3>
              </div>
              <p className="mt-4 text-sm leading-7 text-[var(--color-muted-foreground)]">{step.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 rounded-lg border border-[var(--color-border)] bg-[var(--color-muted)] p-5">
          <h3 className="flex items-center gap-2 font-bold text-[var(--color-primary)]">
            <Icon name="shield" className="h-5 w-5" />
            Wichtig zum Abholservice
          </h3>
          <ul className="mt-3 grid gap-2 text-sm leading-6 text-[var(--color-muted-foreground)] sm:grid-cols-2">
            {data.pickup.exclusions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
