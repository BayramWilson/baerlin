import Image from "next/image";
import { data } from "@/lib/source-data";

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

        <div className="mt-10 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white shadow-sm">
          <Image
            src="/images/brand-grid.jpg"
            alt="Markenlogos von Jura, DeLonghi, Saeco, GAGGIA, LaPavoni, KitchenAid, Isomac, Bezzera, Rocket, ECM, BFC, Vibiemme, Quickmill, Nivona, Melitta, Rancilio, Bosch, Siemens, Miele, Acopino, Beko, Smeg, Rotel, WMF, Philips, NEFF, Gaggenau, Krups und Thermomix"
            width={1200}
            height={800}
            className="h-auto w-full"
            unoptimized
          />
        </div>

        <div className="relative mt-8 overflow-hidden rounded-xl border border-[var(--color-border)] bg-white py-4 brand-ticker">
          <div className="brand-ticker-track">
            {[...namedBrands, ...namedBrands].map((brand, index) => (
              <span
                key={`${brand}-${index}`}
                className="whitespace-nowrap px-4 text-sm font-semibold text-[var(--color-muted-foreground)]"
              >
                {brand}
                <span className="mx-4 text-[var(--color-border)]">•</span>
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs font-bold uppercase text-[var(--color-muted-foreground)]">
            Außerdem
          </p>
          <p className="mt-2 text-sm leading-6 text-[var(--color-muted-foreground)]">
            {machineTypes.join(", ")}
          </p>
        </div>
      </div>
    </section>
  );
}
