import { SiteImage } from "@/components/ui/site-image";
import { data } from "@/lib/source-data";

export function Brands() {
  return (
    <section className="section-pad">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
        <div>
          <h2 className="section-title">Servicierte Marken als Textliste, ohne Logos.</h2>
          <p className="mt-5 leading-7 text-[var(--color-muted-foreground)]">
            Markennamen dienen ausschließlich zur Beschreibung der reparierten Geräte.
            {` ${data.legal.independenceDisclaimer.textVerbatim}`}
          </p>
          <SiteImage
            src="/images/maschinen-lineup.webp"
            alt="Verschiedene Kaffee- und Espressomaschinen nebeneinander auf einer Werkbank"
            className="mt-8 aspect-[3/2]"
          />
        </div>
        <div className="flex flex-wrap content-start gap-2">
          {data.brands.map((brand) => (
            <span className="brand-pill" key={brand}>
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
