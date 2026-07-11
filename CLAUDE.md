# Claude Code Hinweise

Siehe `AGENTS.md` für Commands, Struktur und Projektkonventionen.

## Workflow

- Gate-Struktur aus dem ursprünglichen Kawai-Labs-Prompt beachten.
- Phase 0 Datenquelle: `research/source-data.json`.
- Phase 1 Design-System: `ui-ux-pro-max` nur einmalig zum Generieren/Persistieren nutzen.
- Phase 5 Feinschliff: `taste` nutzen, falls im Environment verfügbar; sonst manuell gegen `design-system/kaffee-baerlin/MASTER.md` prüfen.

## Content-Regeln

- `research/source-data.json` ist die Quelle der Wahrheit für Copy, NAP, Öffnungszeiten, Marken, Services und Rechtstexte.
- Unsichere Felder bleiben als TODO/PLACEHOLDER sichtbar.
- Keine Inhalte von Maps/Fotos/Reviews verwenden, solange sie nicht verifiziert wurden.
