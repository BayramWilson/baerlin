import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/icon";
import { data, phoneHref } from "@/lib/source-data";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-border)] bg-[rgba(253,246,236,0.92)] backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="block shrink-0" aria-label="Kaffee Bärlin Startseite">
          <Image
            src="/images/logo.png"
            alt="Kaffee Bärlin"
            width={265}
            height={42}
            priority
            className="h-8 w-auto sm:h-9"
          />
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-[var(--color-muted-foreground)] md:flex">
          <a href="#leistungen">Leistungen</a>
          <a href="#ablauf">Ablauf</a>
          <a href="#standort">Standort</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
        <a className="btn-cta min-h-11 px-4 py-2 text-sm" href={phoneHref}>
          <Icon name="phone" className="h-4 w-4" />
          {data.nap.phone}
        </a>
      </div>
    </header>
  );
}
