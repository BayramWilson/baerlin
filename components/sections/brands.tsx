import { SiteImage } from "@/components/ui/site-image";
import { data } from "@/lib/source-data";

export function Brands() {
  const namedBrands = data.brands.filter((brand) => !brand.includes("(allg.)"));
  const machineTypes = data.brands
    .filter((brand) => brand.includes("(allg.)"))
    .map((brand) => brand.replace(" (allg.)", ""));

  return (
    <section className="section-pad">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
        <div>
          <p className="eyebrow">Marken &amp; Geräte</p>
          <h2 className="section-title mt-3">Viele Marken. Eine erfahrene Werkstatt.</h2>
          <p className="mt-5 leading-7 text-[var(--color-muted-foreground)]">
            Wir reparieren Kaffeevollautomaten, Siebträger, Kapselmaschinen,
            Kaffeemühlen und Gastro-Kaffeeautomaten zahlreicher Hersteller.
          </p>
          <SiteImage
            src="/images/maschinen-lineup.webp"
            alt="Verschiedene Kaffee- und Espressomaschinen nebeneinander auf einer Werkbank"
            className="mt-8 aspect-[3/2]"
          />
        </div>
        <div className="self-center border-y border-[var(--color-border)]">
          <ul className="grid grid-cols-2 divide-x divide-y divide-[var(--color-border)] sm:grid-cols-3">
            {namedBrands.map((brand) => (
              <li className="min-w-0 px-3 py-3 text-sm font-bold text-[var(--color-primary)] sm:px-4" key={brand}>
                {brand}
              </li>
            ))}
          </ul>
          <div className="border-t border-[var(--color-border)] px-3 py-4 sm:px-4">
            <p className="text-xs font-bold uppercase text-[var(--color-muted-foreground)]">
              Außerdem
            </p>
            <p className="mt-2 text-sm leading-6">{machineTypes.join(", ")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
