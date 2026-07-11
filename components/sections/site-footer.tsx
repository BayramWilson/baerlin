import Image from "next/image";
import Link from "next/link";
import { data, todos } from "@/lib/source-data";

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
        </div>
        <div className="md:text-right">
          <nav className="flex flex-wrap gap-4 md:justify-end">
            <Link href="/impressum">Impressum</Link>
            <Link href="/datenschutz">Datenschutz</Link>
            <Link href="/agb">AGB</Link>
          </nav>
          <p className="mt-4 text-sm text-[#FDF6EC]">
            {data.nap.street}, {data.nap.postalCode} {data.nap.city}
          </p>
        </div>
      </div>
      <details className="mx-auto max-w-7xl px-4 pb-8 text-sm text-[#FDF6EC] sm:px-6 lg:px-8">
        <summary className="cursor-pointer font-semibold">Offene TODOs</summary>
        <ul className="mt-3 grid gap-2">
          {todos.map((todo) => (
            <li key={todo}>{todo}</li>
          ))}
        </ul>
      </details>
    </footer>
  );
}
