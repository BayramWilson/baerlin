"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/icon";
import { data, phoneHref } from "@/lib/source-data";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { href: "/kaffeemaschinen-reparatur-berlin", label: "Reparatur" },
    { href: "/kaffeemaschinen-vermietung-berlin", label: "Miete" },
    { href: "/kaffeevollautomaten-reparaturservice", label: "Annahmestellen" },
    { href: "/#kontakt", label: "Kontakt" },
  ];

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
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a className="btn-cta min-h-11 px-4 py-2 text-sm" href={phoneHref}>
            <Icon name="phone" className="h-4 w-4" />
            <span className="sm:hidden">Anrufen</span>
            <span className="hidden sm:inline">{data.nap.phone}</span>
          </a>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-[var(--color-border)] bg-white text-[var(--color-primary)] md:hidden"
            aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
          >
            <Icon name={mobileOpen ? "x" : "menu"} className="h-5 w-5" />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-[var(--color-border)] bg-[rgba(253,246,236,0.98)] md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-3 text-sm font-semibold text-[var(--color-muted-foreground)] hover:bg-[var(--color-muted)]"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
