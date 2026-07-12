import Link from "next/link";
import Image from "next/image";
import { Icon } from "@/components/ui/icon";
import { SiteImage } from "@/components/ui/site-image";
import { data, phoneHref } from "@/lib/source-data";
import type { ServicePage } from "@/lib/service-pages";

function RentalForm({ title }: { title: string }) {
  return (
    <form className="card grid gap-5" action="#" aria-label={title}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2">
          <span className="form-label">Name *</span>
          <input className="input" name="name" autoComplete="name" required />
        </label>
        <label className="grid gap-2">
          <span className="form-label">E-Mail *</span>
          <input className="input" name="email" type="email" autoComplete="email" required />
        </label>
        <label className="grid gap-2">
          <span className="form-label">Telefon *</span>
          <input className="input" name="phone" type="tel" autoComplete="tel" required />
        </label>
        <label className="grid gap-2">
          <span className="form-label">Firma / Organisation</span>
          <input className="input" name="company" autoComplete="organization" />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2">
          <span className="form-label">Gewünschte Maschine</span>
          <select className="input" name="machine" defaultValue="">
            <option value="" disabled>Bitte wählen</option>
            <option value="Jura Giga X7">Jura Giga X7</option>
            <option value="ECM Elektronika 2 Gruppig">ECM Elektronika 2 Gruppig</option>
            <option value="Jura X8 Platin">Jura X8 Platin</option>
            <option value="Bezzera Aria">Bezzera Aria</option>
            <option value="Jura XJ9">Jura XJ9</option>
            <option value="Ceado E37 Kaffeemühle">Ceado E37 Kaffeemühle</option>
            <option value="Andere">Andere / noch unentschieden</option>
          </select>
        </label>
        <label className="grid gap-2">
          <span className="form-label">Verwendungszweck</span>
          <select className="input" name="purpose" defaultValue="">
            <option value="" disabled>Bitte wählen</option>
            <option value="Büro">Büro</option>
            <option value="Messe">Messe</option>
            <option value="Event">Event</option>
            <option value="Privat">Privat</option>
            <option value="Sonstiges">Sonstiges</option>
          </select>
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2">
          <span className="form-label">Mietbeginn *</span>
          <input className="input" name="startDate" type="date" required />
        </label>
        <label className="grid gap-2">
          <span className="form-label">Mietende *</span>
          <input className="input" name="endDate" type="date" required />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2">
          <span className="form-label">Anzahl Personen / Gäste</span>
          <input className="input" name="guests" type="number" min={1} placeholder="z. B. 50" />
        </label>
        <label className="grid gap-2">
          <span className="form-label">Liefer-/Abholort</span>
          <input className="input" name="location" placeholder="z. B. Berlin Mitte" />
        </label>
      </div>

      <label className="grid gap-2">
        <span className="form-label">Weitere Wünsche / Hinweise</span>
        <textarea className="input min-h-28" name="message" placeholder="Kaffeebohnen, Milchoptionen, Zubehör, Abholung …" />
      </label>

      <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-muted)] p-4 text-sm leading-6 text-[var(--color-muted-foreground)]">
        TODO: Dieses Formular versendet noch keine Daten. Bitte rufen Sie für echte Mietanfragen aktuell an.
      </div>

      <div className="flex flex-wrap gap-3">
        <button type="submit" className="btn-cta w-fit">
          <Icon name="truck" className="h-5 w-5" />
          Mietanfrage absenden
        </button>
        <a className="btn-secondary w-fit" href={phoneHref}>
          <Icon name="phone" className="h-5 w-5" />
          Jetzt anrufen
        </a>
      </div>
    </form>
  );
}

function DetailForm({ title }: { title: string }) {
  return (
    <form className="card grid gap-5" action="#" aria-label={title}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2">
          <span className="form-label">Name</span>
          <input className="input" name="name" autoComplete="name" />
        </label>
        <label className="grid gap-2">
          <span className="form-label">E-Mail</span>
          <input className="input" name="email" type="email" autoComplete="email" />
        </label>
        <label className="grid gap-2">
          <span className="form-label">Telefon</span>
          <input className="input" name="phone" type="tel" autoComplete="tel" />
        </label>
        <label className="grid gap-2">
          <span className="form-label">Hersteller / Modell</span>
          <input className="input" name="machine" />
        </label>
      </div>
      <label className="grid gap-2">
        <span className="form-label">Fehlerbeschreibung / Anfrage</span>
        <textarea className="input min-h-32" name="message" />
      </label>
      <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-muted)] p-4 text-sm leading-6 text-[var(--color-muted-foreground)]">
        TODO: Dieses Formular versendet noch keine Daten. Bitte rufen Sie für echte Anfragen aktuell an.
      </div>
      <a className="btn-cta w-fit" href={phoneHref}>
        <Icon name="phone" className="h-5 w-5" />
        Jetzt anrufen
      </a>
    </form>
  );
}

export function ServiceDetailPage({ page }: { page: ServicePage }) {
  return (
    <main>
      <section className="bg-[var(--color-background)] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="eyebrow">{page.hero.kicker}</p>
            <h1 className="mt-4 font-display text-4xl leading-[1.05] text-[var(--color-primary)] sm:text-5xl lg:text-6xl">
              {page.hero.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--color-muted-foreground)]">
              {page.hero.body}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="btn-cta" href={phoneHref}>
                <Icon name="phone" className="h-5 w-5" />
                Anrufen
              </a>
              <a className="btn-secondary" href="#anfrage">
                Anfrage vorbereiten
              </a>
            </div>
          </div>
          <SiteImage
            src={page.hero.image}
            alt={page.hero.imageAlt}
            className="aspect-[4/3] lg:aspect-[16/10]"
            priority
            sizes="(min-width: 1024px) 48vw, 100vw"
          />
        </div>
      </section>

      <section className="border-y border-[var(--color-border)] bg-white px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-3 md:grid-cols-3">
          {page.highlights.map((item) => (
            <div
              className="flex gap-3 rounded-lg bg-[var(--color-background)] p-4 text-sm font-bold leading-6 text-[var(--color-primary)]"
              key={item}
            >
              <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-accent)]" />
              {item}
            </div>
          ))}
        </div>
      </section>

      {page.sections.map((section) => {
        if (section.kind === "steps") {
          return (
            <section className="section-pad bg-white" key={section.title}>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="section-title max-w-3xl">{section.title}</h2>
                {section.body ? (
                  <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--color-muted-foreground)]">
                    {section.body}
                  </p>
                ) : null}
                <div className="mt-10 grid gap-5 lg:grid-cols-3">
                  {section.items.map((item) => (
                    <article className="card" key={item.title}>
                      <h3 className="text-xl font-extrabold text-[var(--color-primary)]">
                        {item.title}
                      </h3>
                      <p className="mt-4 leading-7 text-[var(--color-muted-foreground)]">
                        {item.body}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          );
        }

        if (section.kind === "prices") {
          return (
            <section className="section-pad bg-white" key={section.title}>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="section-title max-w-3xl">{section.title}</h2>
                {section.body ? (
                  <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--color-muted-foreground)]">
                    {section.body}
                  </p>
                ) : null}
                <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {section.items.map((item) => (
                    <article className="card" key={item.name}>
                      {item.image ? (
                        <div className="-mx-2 -mt-2 mb-5 overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-background)]">
                          <Image
                            src={item.image}
                            alt={item.imageAlt || item.name}
                            width={305}
                            height={305}
                            sizes="(min-width: 1024px) 28vw, (min-width: 768px) 42vw, 100vw"
                            className="aspect-square h-full w-full object-contain p-3"
                          />
                        </div>
                      ) : null}
                      <h3 className="text-lg font-extrabold text-[var(--color-primary)]">
                        {item.name}
                      </h3>
                      <ul className="mt-5 grid gap-2 text-sm font-semibold text-[var(--color-muted-foreground)]">
                        {item.details.map((detail) => (
                          <li className="rounded-md bg-[var(--color-background)] px-3 py-2" key={detail}>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          );
        }

        if (section.kind === "locations") {
          return (
            <section className="section-pad bg-white" key={section.title}>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="section-title max-w-3xl">{section.title}</h2>
                {section.body ? (
                  <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--color-muted-foreground)]">
                    {section.body}
                  </p>
                ) : null}
                <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {section.items.map((item) => (
                    <article className="card flex flex-col" key={`${item.district}-${item.name}`}>
                      <p className="font-extrabold text-[var(--color-accent)]">{item.district}</p>
                      <h3 className="mt-2 text-xl font-extrabold text-[var(--color-primary)]">
                        {item.name}
                      </h3>
                      <p className="mt-3 leading-7 text-[var(--color-muted-foreground)]">
                        {item.address}
                      </p>
                      <ul className="mt-4 grid gap-1 text-sm font-semibold text-[var(--color-muted-foreground)]">
                        {item.hours.map((hour) => (
                          <li key={hour}>{hour}</li>
                        ))}
                      </ul>
                      <a
                        className="btn-secondary mt-6 w-fit text-sm"
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Icon name="map" className="h-4 w-4" />
                        Route
                      </a>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          );
        }

        if (section.kind === "form") {
          const isRental = page.slug === "kaffeemaschinen-vermietung-berlin";
          return (
            <section id="anfrage" className="section-pad bg-[var(--color-background)]" key={section.title}>
              <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
                <div>
                  <h2 className="section-title">{section.title}</h2>
                  {section.body ? (
                    <p className="mt-5 text-lg leading-8 text-[var(--color-muted-foreground)]">
                      {section.body}
                    </p>
                  ) : null}
                  <p className="mt-5 leading-7 text-[var(--color-muted-foreground)]">
                    Nach einer Anfrage nennt die Altseite eine Bestätigung per E-Mail. Falls diese nicht eintrifft, soll telefonisch oder per E-Mail Kontakt aufgenommen werden.
                  </p>
                </div>
                {isRental ? <RentalForm title={section.title} /> : <DetailForm title={section.title} />}
              </div>
            </section>
          );
        }

        return (
          <section className="section-pad bg-[var(--color-background)]" key={section.title}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="section-title max-w-3xl">{section.title}</h2>
              {section.body ? (
                <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--color-muted-foreground)]">
                  {section.body}
                </p>
              ) : null}
              <div className="mt-10 grid gap-5 md:grid-cols-3">
                {section.items.map((item) => (
                  <article className="card" key={item.title}>
                    {item.image ? (
                      <div className="-mx-2 -mt-2 mb-5 overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-background)]">
                        <Image
                          src={item.image}
                          alt={item.imageAlt || item.title}
                          width={417}
                          height={500}
                          sizes="(min-width: 768px) 28vw, 100vw"
                          className="mx-auto aspect-[417/500] max-h-72 w-full object-contain p-3"
                        />
                      </div>
                    ) : null}
                    <h3 className="text-lg font-extrabold text-[var(--color-primary)]">{item.title}</h3>
                    <p className="mt-3 leading-7 text-[var(--color-muted-foreground)]">{item.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="bg-[var(--color-primary)] px-4 py-12 text-white sm:px-6 lg:px-8" id="kontakt">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-3xl leading-tight">Direkt mit der Werkstatt sprechen.</h2>
            <p className="mt-3 max-w-2xl text-[#FDF6EC]">
              {data.nap.street}, {data.nap.postalCode} {data.nap.city}. Unabhängiger Kundendienst, kein offizieller Servicepartner der genannten Marken.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a className="btn-cta" href={phoneHref}>
              <Icon name="phone" className="h-5 w-5" />
              {data.nap.phone}
            </a>
            <Link className="btn-secondary border-white text-white hover:bg-white/10" href="/">
              Zur Startseite
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
