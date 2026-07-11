# Kaffee Bärlin

Lokale Business-Landingpage für eine Berliner Reparaturwerkstatt für Kaffee- und Espressomaschinen. Stack: Next.js App Router, TypeScript, Tailwind CSS, pnpm.

## Commands

- `dev`: `next dev`
- `build`: `next build`
- `lint`: `eslint`

Ausführen mit pnpm, z. B. `pnpm run build`.

## Struktur

- `app/`: Routen, Metadata, Sitemap/Robots
- `components/sections/*`: Landingpage-Sections
- `components/ui/*`: kleine wiederverwendbare UI-Bausteine
- `public/images/`: feste Bild-Namenskonvention aus dem Brief
- `research/source-data.json`: Quelle der Wahrheit für Inhalte
- `design-system/kaffee-baerlin/MASTER.md`: Design-System

## Konventionen

- Keine erfundenen Inhalte: Services, Marken, Öffnungszeiten, Kontaktdaten und Rechtstexte kommen aus `research/source-data.json`.
- Rechtstexte auf `/impressum`, `/datenschutz`, `/agb` bleiben 1:1 aus der Quelle.
- Marken nur als Text nennen, keine Markenlogos einbinden.
- Bilder nur aus `public/images/` nach der vorgegebenen Namenskonvention; fehlende Dateien als TODO/Platzhalter behandeln.
- Kein Tracking, keine Third-Party-Cookies, kein Cookie-Banner.

## No-Gos

- `design-system/kaffee-baerlin/MASTER.md` nicht durch freie Neugestaltung ersetzen.
- Rechtstexte nicht sprachlich glätten.
- Keine Google-Review-Sterne, Review-Zitate oder Aggregate-Rating-Markups ohne verifizierte Quelle.
