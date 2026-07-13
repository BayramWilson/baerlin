import Image from "next/image";
import Link from "next/link";
import { data, phoneHref } from "@/lib/source-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-primary)] text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1fr_1fr] lg:px-8">
        <div>
          <Image
            src="/images/logo.png"
            alt="Kaffee Bärlin"
            width={265}
            height={42}
            className="h-9 w-auto bg-white"
          />
          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#FDF6EC]">
            {data.legal.independenceDisclaimer.textVerbatim}
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              className="rounded-md border border-white/30 px-3 py-1.5 text-sm font-semibold text-white hover:bg-white/10"
              href="https://www.kaffee-baerlin24.de/"
              target="_blank"
              rel="noreferrer"
            >
              Zum Shop
            </a>
            <a
              className="rounded-md border border-white/30 px-3 py-1.5 text-sm font-semibold text-white hover:bg-white/10"
              href="https://www.instagram.com/kaffeebaerlin/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <Link
              className="rounded-md border border-white/30 px-3 py-1.5 text-sm font-semibold text-white hover:bg-white/10"
              href="/wartungsvertrag-kaffeemaschinen-berlin"
            >
              Wartungsvertrag
            </Link>
          </div>
        </div>
        <div className="md:text-right">
          <nav className="flex flex-wrap gap-4 md:justify-end">
            <Link href="/kaffeemaschinen-reparatur-berlin">Reparatur</Link>
            <Link href="/kaffeemaschinen-vermietung-berlin">Mietmaschinen</Link>
            <Link href="/kaffeeautomaten-service-berlin">Online-Formular</Link>
            <Link href="/kaffeevollautomaten-reparaturservice">Annahmestellen</Link>
            <Link href="/wartungsvertrag-kaffeemaschinen-berlin">Wartungsvertrag</Link>
            <Link href="/impressum">Impressum</Link>
            <Link href="/datenschutz">Datenschutz</Link>
            <Link href="/agb">AGB</Link>
          </nav>
          <p className="mt-4 text-sm text-[#FDF6EC]">
            {data.nap.street}, {data.nap.postalCode} {data.nap.city}
          </p>
          <p className="mt-2 text-sm text-[#FDF6EC]">
            <a className="underline" href={phoneHref}>{data.nap.phone}</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
