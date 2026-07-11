import { Icon } from "@/components/ui/icon";
import { SiteImage } from "@/components/ui/site-image";
import { data, phoneHref } from "@/lib/source-data";

export function Contact() {
  return (
    <section id="kontakt" className="section-pad">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-lg border border-[var(--color-border)] bg-white shadow-sm lg:grid-cols-[1.05fr_0.95fr]">
          <div className="p-6 sm:p-8 lg:p-10">
            <p className="eyebrow">Kontakt</p>
            <h2 className="section-title">Reparatur oder Abholung anfragen.</h2>
            <p className="mt-5 leading-7 text-[var(--color-muted-foreground)]">
              Rufen Sie uns direkt an oder schreiben Sie eine E-Mail. Für die
              Abholung eines Kaffeevollautomaten vereinbaren wir gemeinsam einen Termin.
            </p>
            <div className="mt-8 grid gap-3">
              <a className="btn-cta justify-center sm:justify-start" href={phoneHref}>
                <Icon name="phone" className="h-5 w-5" />
                {data.nap.phone}
              </a>
              <a className="btn-secondary justify-center sm:justify-start" href={`mailto:${data.nap.email}`}>
                <Icon name="mail" className="h-5 w-5" />
                {data.nap.email}
              </a>
            </div>
            <SiteImage
              src="/images/cta-hintergrund.webp"
              alt="Techniker arbeitet konzentriert an einer Espressomaschine"
              className="mt-8 aspect-video"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
          <div className="flex flex-col justify-center bg-[var(--color-muted)] p-6 sm:p-8 lg:p-10">
            <h3 className="font-display text-2xl text-[var(--color-primary)]">Abholservice in Berlin</h3>
            <ul className="mt-6 grid gap-4">
              {data.pickup.conditions.map((condition) => (
                <li className="flex gap-3 leading-7" key={condition}>
                  <Icon name="check" className="mt-1 h-5 w-5 shrink-0 text-[var(--color-accent)]" />
                  <span>{condition}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t border-[var(--color-border)] pt-5 text-sm leading-6 text-[var(--color-muted-foreground)]">
              Siebträgermaschinen sind vom Abholservice ausgeschlossen und können
              direkt in Alt-Moabit 120 abgegeben werden.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
