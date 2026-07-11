import sourceData from "@/research/source-data.json";

export const data = sourceData;

export const phoneHref = `tel:${data.nap.phoneE164}`;
export const mapsHref =
  data.meta.mapsResolvedPlaceUrl ||
  "https://www.google.com/maps/search/?api=1&query=Kaffee%20B%C3%A4rlin%20Alt-Moabit%20120%2010559%20Berlin";

export const requiredImages = [
  "hero.webp",
  "leistung-reparatur.webp",
  "leistung-ersatzteile.webp",
  "werkstatt.webp",
  "maschinen-lineup.webp",
  "ablauf-1-abgabe.webp",
  "ablauf-2-diagnose.webp",
  "ablauf-3-fertig.webp",
  "abholservice.webp",
  "team-portrait.webp",
  "ladenfront.webp",
  "cta-hintergrund.webp",
  "og-image.webp",
  "og-image.png",
];

export const todos = [
  "E-Mail-Adresse info@kaffee-baerlin.de wurde aus Joomla-Cloak-JS rekonstruiert und sollte vor Veröffentlichung verifiziert werden.",
  "Keine echten Kundenbewertungen verfügbar. Trust bleibt deshalb faktenbasiert, ohne Sterne, Zitate oder aggregateRating.",
  "Zusätzliche Annahmestellen sind nur teilweise erfasst. Vor Veröffentlichung einer Liste separat nachrecherchieren.",
  "Datenschutztext der Altseite erwähnt alte Tracking-Dienste. Da die neue Seite trackingfrei ist, sollte der Text rechtlich aktualisiert werden.",
  "Reparaturanfrage-Formular ist nur Frontend. Versand/Backend ist als TODO markiert.",
];

export const sectionSources = [
  {
    section: "Hero",
    source: "nap, services, pickup.conditions, legal.independenceDisclaimer",
  },
  {
    section: "USP-Leiste",
    source: "services[0], pickup.conditions, process[0]",
  },
  { section: "Leistungen", source: "services" },
  { section: "Servicierte Marken", source: "brands, legal.independenceDisclaimer" },
  { section: "Ablauf", source: "process, Abholservice-Ausschlüsse" },
  { section: "Vertrauen", source: "services, reviews.note" },
  { section: "Standort & Öffnungszeiten", source: "nap, hours, pickup.dropoffPoints" },
  { section: "Kontakt/CTA", source: "nap, Abholservice-Bedingungen, Abholservice-Ausschlüsse" },
  { section: "Footer/Recht", source: "legal" },
];

export function openingHoursSpecification() {
  return [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "13:00",
    },
  ];
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "Kaffee Bärlin",
    url: "https://www.kaffee-baerlin.de/",
    telephone: data.nap.phoneE164,
    email: data.nap.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: data.nap.street,
      postalCode: data.nap.postalCode,
      addressLocality: data.nap.city,
      addressCountry: data.nap.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: data.nap.geo.lat,
      longitude: data.nap.geo.lng,
    },
    openingHoursSpecification: openingHoursSpecification(),
    areaServed: {
      "@type": "City",
      name: "Berlin",
    },
    makesOffer: data.services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service,
      },
    })),
    sameAs: [data.meta.mapsResolvedPlaceUrl],
  };
}

export function publicNote(text: string) {
  return text.replace(/[—–]/g, "-");
}

export function publicService(service: string) {
  if (service.includes("pickup.exclusions")) {
    return "Kostenloser Abholservice innerhalb Berlins für Kaffeevollautomaten";
  }

  return service;
}
