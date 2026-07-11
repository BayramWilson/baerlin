import { Icon } from "@/components/ui/icon";
import { SiteImage } from "@/components/ui/site-image";
import { data, phoneHref } from "@/lib/source-data";

export function Contact() {
  return (
    <section id="kontakt" className="section-pad">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-lg border border-[var(--color-border)] bg-white shadow-sm lg:grid-cols-[0.95fr_1.05fr]">
          <div className="p-6 sm:p-8 lg:p-10">
            <p className="eyebrow">Kontakt</p>
            <h2 className="section-title">Reparatur oder Abholung anfragen.</h2>
            <p className="mt-5 leading-7 text-[var(--color-muted-foreground)]">
              Für die schnellste Klärung rufen Sie direkt an. Das Formular ist als
              Frontend vorbereitet; Versand und Datenschutzprüfung bleiben TODO.
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
          <form className="grid gap-4 bg-[var(--color-muted)] p-6 sm:p-8 lg:p-10">
            <label>
              <span className="form-label">Name</span>
              <input className="input mt-2 w-full" name="name" type="text" />
            </label>
            <label>
              <span className="form-label">Telefon</span>
              <input className="input mt-2 w-full" name="phone" type="tel" />
            </label>
            <label>
              <span className="form-label">Gerät / Marke</span>
              <input className="input mt-2 w-full" name="machine" type="text" />
            </label>
            <label>
              <span className="form-label">Nachricht</span>
              <textarea className="input mt-2 min-h-32 w-full resize-y" name="message" />
            </label>
            <button
              className="btn-cta opacity-75"
              type="button"
              aria-describedby="form-todo"
            >
              Anfrage vorbereiten
            </button>
            <p id="form-todo" className="text-sm leading-6 text-[var(--color-muted-foreground)]">
              TODO: Formularversand ist noch nicht implementiert.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
