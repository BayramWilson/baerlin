import { SiteImage } from "@/components/ui/site-image";
import { data } from "@/lib/source-data";

function BrandLogo({ brand }: { brand: string }) {
  return (
    <div className="group flex flex-col items-center gap-2 text-center">
      <div className="flex h-16 w-full items-center justify-center rounded-lg border border-[var(--color-border)] bg-white px-3 py-2 shadow-sm transition hover:shadow-md">
        <svg
          viewBox="0 0 120 40"
          className="h-full w-full"
          role="img"
          aria-label={brand}
        >
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            className="fill-[var(--color-primary)] text-[11px] font-bold uppercase tracking-tight"
          >
            {brand.length > 12 ? `${brand.slice(0, 12)}…` : brand}
          </text>
        </svg>
      </div>
      <span className="text-xs font-medium text-[var(--color-muted-foreground)]">{brand}</span>
    </div>
  );
}

export function Brands() {
  const namedBrands = data.brands.filter((brand) => !brand.includes("(allg.)"));
  const machineTypes = data.brands
    .filter((brand) => brand.includes("(allg.)"))
    .map((brand) => brand.replace(" (allg.)", ""));

  return (
    <section className="section-pad">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="eyebrow">Marken &amp; Geräte</p>
          <h2 className="section-title mt-3">Viele Marken. Eine erfahrene Werkstatt.</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-[var(--color-muted-foreground)]">
            Wir reparieren Kaffeevollautomaten, Siebträger, Kapselmaschinen,
            Kaffeemühlen und Gastro-Kaffeeautomaten zahlreicher Hersteller.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
          {namedBrands.map((brand) => (
            <BrandLogo key={brand} brand={brand} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs font-bold uppercase text-[var(--color-muted-foreground)]">
            Außerdem
          </p>
          <p className="mt-2 text-sm leading-6 text-[var(--color-muted-foreground)]">
            {machineTypes.join(", ")}
          </p>
        </div>

        <SiteImage
          src="/images/maschinen-lineup.webp"
          alt="Verschiedene Kaffee- und Espressomaschinen nebeneinander auf einer Werkbank"
          className="mx-auto mt-12 aspect-[3/2] max-w-3xl"
        />
      </div>
    </section>
  );
}
