import { data } from "@/lib/source-data";

export type ServicePageSlug =
  | "kaffeemaschinen-reparatur-berlin"
  | "kaffeemaschinen-vermietung-berlin"
  | "kaffeeautomaten-service-berlin"
  | "kaffeevollautomaten-reparaturservice";

type ImageSrc =
  | "/images/leistung-reparatur.webp"
  | "/images/maschinen-lineup.webp"
  | "/images/abholservice.webp"
  | "/images/ladenfront.webp";

type BaseBlock = {
  title: string;
  body?: string;
};

export type ServicePage = {
  slug: ServicePageSlug;
  oldUrl: string;
  title: string;
  metaTitle: string;
  description: string;
  hero: {
    kicker: string;
    title: string;
    body: string;
    image: ImageSrc;
    imageAlt: string;
  };
  highlights: string[];
  sections: Array<
    | (BaseBlock & { kind: "steps"; items: BaseBlock[] })
    | (BaseBlock & { kind: "cards"; items: BaseBlock[] })
    | (BaseBlock & { kind: "prices"; items: Array<{ name: string; details: string[] }> })
    | (BaseBlock & {
        kind: "locations";
        items: Array<{ district: string; name: string; address: string; hours: string[]; href: string }>;
      })
    | (BaseBlock & { kind: "form" })
  >;
};

const base = "https://www.kaffee-baerlin.de";

export const servicePages: Record<ServicePageSlug, ServicePage> = {
  "kaffeemaschinen-reparatur-berlin": {
    slug: "kaffeemaschinen-reparatur-berlin",
    oldUrl: `${base}/kaffeemaschinen-reparatur-berlin.html`,
    title: "Reparatur-Abwicklung",
    metaTitle: "Kaffeemaschinen Reparatur Berlin | Kaffee Bärlin",
    description:
      "Drei Wege zur Reparatur: Abgabe in Berlin-Moabit, kostenloser Abholservice für Kaffeevollautomaten in Berlin oder bundesweiter Versand.",
    hero: {
      kicker: "Reparatur-Abwicklung",
      title: "Drei Wege zur Kaffeemaschinen-Reparatur.",
      body:
        "Abgabe ohne Voranmeldung, Abholservice in Berlin oder Versand an die Werkstatt in Moabit.",
      image: "/images/leistung-reparatur.webp",
      imageAlt: "Werkstattdetail einer Reparatur an einer Espressomaschine",
    },
    highlights: [
      "Abgabe ohne Voranmeldung während der Öffnungszeiten",
      "Kostenloser Abholservice innerhalb Berlins nur für Kaffeevollautomaten",
      "Kostenloser und unverbindlicher Kostenvoranschlag nach Eingang und Prüfung",
    ],
    sections: [
      {
        kind: "steps",
        title: "So kommt Ihre Maschine in die Werkstatt",
        body:
          "Die Altseite nennt drei Möglichkeiten. Bitte geben Sie Ihre Kaffeemaschine mit Zubehörteilen ab.",
        items: [
          {
            title: "Selbstanlieferung",
            body: `Direkte Abgabe ohne Voranmeldung im Fachgeschäft: ${data.nap.street}, ${data.nap.postalCode} ${data.nap.city}. Alternativ ist die Abgabe bei einer Reparatur-Annahmestelle möglich.`,
          },
          {
            title: "Abholservice innerhalb Berlins",
            body:
              "Der kostenlose Abholservice gilt innerhalb Berlins für Kaffeevollautomaten. Siebträgermaschinen sind laut Quelle ausgeschlossen.",
          },
          {
            title: "Bundesweiter Versand",
            body:
              "Sie können die Maschine selbst sicher verpackt einsenden. Nach Eingang und Prüfung erhalten Sie einen kostenlosen und unverbindlichen Kostenvoranschlag.",
          },
        ],
      },
      {
        kind: "cards",
        title: "Wichtige Hinweise aus der Quelle",
        items: [
          {
            title: "Auftragsschein",
            body:
              "Die Altseite bittet darum, den Auftragsschein nach Moeglichkeit vorab auszufüllen, um Wartezeiten bei der Übergabe zu vermeiden.",
          },
          {
            title: "Rückversand bei Ablehnung",
            body:
              "Wenn das Reparaturangebot nicht angenommen wird, nennt die Quelle eine Rücksendung per DHL mit Rückversandkosten von 9,90 Euro.",
          },
          {
            title: "Kontakt",
            body: `Telefonisch erreichbar unter ${data.nap.phone}. Das neue Online-Formular ist als Frontend vorbereitet, der Versand ist noch TODO.`,
          },
        ],
      },
    ],
  },
  "kaffeemaschinen-vermietung-berlin": {
    slug: "kaffeemaschinen-vermietung-berlin",
    oldUrl: `${base}/kaffeemaschinen-vermietung-berlin.html`,
    title: "Mietmaschinen",
    metaTitle: "Kaffeemaschinen mieten Berlin | Kaffee Bärlin",
    description:
      "Kaffeemaschinen, Espressomaschinen, Espressomühle und Kaffeebohnen für Büro, Messe oder Event in Berlin anfragen.",
    hero: {
      kicker: "Mietmaschinen",
      title: "Kaffeemaschinen mieten für Büro, Messe und Event.",
      body:
        "Die Altseite nennt Tagesmiete, Folgetage, Wochenendtarif und Wochentarif für ausgewählte Maschinen.",
      image: "/images/maschinen-lineup.webp",
      imageAlt: "Mehrere Kaffee- und Espressomaschinen in einer Werkstatt",
    },
    highlights: [
      "Unverbindliche Mietanfrage für ein individuelles Angebot",
      "Kaffeevollautomaten, Espressomaschinen und Espressomühle",
      "Geschäftszeiten für Abholung und Rückgabe: Mo - Fr, 08:00 - 16:00 Uhr",
    ],
    sections: [
      {
        kind: "prices",
        title: "Mietgeräte und Preise laut Altseite",
        body:
          "Preise sind quellenbasiert übernommen. Bitte vor Veröffentlichung erneut beim Betrieb bestätigen.",
        items: [
          {
            name: "Jura Giga X7 Professional Kaffeevollautomat",
            details: ["Tagesmiete 89,00 Euro", "je weiterer Tag 69,00 Euro", "Wochenendtarif 158,00 Euro", "Wochentarif 298,00 Euro"],
          },
          {
            name: "ECM Elektronika 2 Gruppig mit Wassertank und 230V Anschluss",
            details: ["Tagesmiete 179,00 Euro", "je weiterer Tag 69,00 Euro", "Wochenendtarif 248,00 Euro", "Wochentarif 349,00 Euro"],
          },
          {
            name: "Jura X8 Platin Kaffeevollautomat",
            details: ["Tagesmiete 79,00 Euro", "je weiterer Tag 59,00 Euro", "Wochenendtarif 138,00 Euro", "Wochentarif 279,00 Euro"],
          },
          {
            name: "Bezzera Aria Espressomaschine",
            details: ["Tagesmiete 69,00 Euro", "je weiterer Tag 29,00 Euro", "Wochenendtarif 98,00 Euro", "Wochentarif 179,00 Euro"],
          },
          {
            name: "Jura XJ9 Kaffeevollautomat",
            details: ["Tagesmiete 59,00 Euro", "je weiterer Tag 39,00 Euro", "Wochenendtarif 98,00 Euro", "Wochentarif 219,00 Euro"],
          },
          {
            name: "Ceado E37 Kaffeemühle / Espressomühle",
            details: ["Tagesmiete 29,00 Euro", "je weiterer Tag 15,00 Euro", "Wochenendtarif 39,00 Euro", "Wochentarif 89,00 Euro"],
          },
        ],
      },
      {
        kind: "cards",
        title: "Kaffeebohnen zur Miete",
        body:
          "Die Mietseite nennt Miss Silvia Caffe Crema, Aroma und Espresso als 1000-g-Packungen. Berechnet werden laut Formularhinweis nur gegeöffnete Verpackungen.",
        items: [
          { title: "Miss Silvia Caffe Crema", body: "80% Arabica / 20% Robusta, 1000 g, 24,90 Euro inkl. 7% MwSt." },
          { title: "Miss Silvia Caffe Aroma", body: "70% Arabica / 30% Robusta, 1000 g, 22,90 Euro inkl. 7% MwSt." },
          { title: "Miss Silvia Caffe Espresso", body: "60% Arabica / 40% Robusta, 1000 g, 21,50 Euro inkl. 7% MwSt." },
        ],
      },
      {
        kind: "form",
        title: "Unverbindliche Mietanfrage",
        body:
          "Das Formular ist als Frontend nachgebaut. Der Versand muss noch angebunden werden.",
      },
    ],
  },
  "kaffeeautomaten-service-berlin": {
    slug: "kaffeeautomaten-service-berlin",
    oldUrl: `${base}/kaffeeautomaten-service-berlin.html`,
    title: "Online-Formular",
    metaTitle: "Kaffeeautomaten Service Berlin | Kaffee Bärlin",
    description:
      "Anfrageformular oder Abholtermin für Kaffeeautomaten und Kaffeevollautomaten in Berlin vorbereiten.",
    hero: {
      kicker: "Online-Formular",
      title: "Anfrage oder Abholtermin vorbereiten.",
      body:
        "Nutzen Sie die Seite für Reparaturanfragen und Abholtermin-Vorschlaege. Der Versand ist im neuen Projekt noch TODO.",
      image: "/images/abholservice.webp",
      imageAlt: "Kaffeemaschine wird für den Abholservice vorbereitet",
    },
    highlights: [
      "Anfrageformular oder Abholtermin vorschlagen",
      "Abholtage laut Altseite: Montag, Mittwoch oder Freitag",
      "Zeitfenster laut Altseite: 08:00 - 10:00 Uhr oder 10:00 - 12:00 Uhr",
    ],
    sections: [
      {
        kind: "cards",
        title: "Welche Angaben benötigt werden",
        items: [
          { title: "Kontaktdaten", body: "Firma, Name, Straße, PLZ und Ort, Telefon und E-Mail." },
          { title: "Maschinendaten", body: "Hersteller, Modell, letzte Wartung und Kaufdatum." },
          { title: "Fehlerbeschreibung", body: "Anfrage, sonstige Anmerkungen und Beschreibung des Problems." },
        ],
      },
      {
        kind: "form",
        title: "Reparaturanfrage",
        body:
          "Dieses Frontend-Formular ersetzt nicht den Versand. Backend, Mailversand und Datenschutz-Freigabe bleiben TODO.",
      },
    ],
  },
  "kaffeevollautomaten-reparaturservice": {
    slug: "kaffeevollautomaten-reparaturservice",
    oldUrl: `${base}/kaffeevollautomaten-reparaturservice.html`,
    title: "Reparatur-Annahmestellen",
    metaTitle: "Reparatur-Annahmestellen Berlin | Kaffee Bärlin",
    description:
      "Annahmestellen für Kaffeemaschinen-Reparaturen in Berlin mit Adressen, Öffnungszeiten und Standortlinks.",
    hero: {
      kicker: "Annahmestellen",
      title: "Kaffeemaschinen in Berlin abgeben.",
      body:
        "Neben Moabit nennt die Altseite weitere Reparatur-Annahmestellen in Berliner Bezirken.",
      image: "/images/ladenfront.webp",
      imageAlt: "Ladenfront von Kaffee Bärlin in Berlin-Moabit",
    },
    highlights: [
      "Hauptannahme in Alt-Moabit 120",
      "Weitere Annahmestellen in mehreren Berliner Bezirken",
      "Öffnungszeiten je Standort vor Abgabe prüfen",
    ],
    sections: [
      {
        kind: "locations",
        title: "Annahmestellen laut Altseite",
        body:
          "Die folgenden Standorte wurden aus der Altseite übernommen. Bitte Öffnungszeiten vor Abgabe prüfen.",
        items: [
          {
            district: "Steglitz - Zehlendorf",
            name: "Torrefazione Rösterei",
            address: "Oberhofer Weg 4, 12209 Berlin-Lichterfelde",
            hours: ["Mo - Fr: 09:00 - 18:00 Uhr", "Sa: 08:30 - 14:00 Uhr"],
            href: "https://www.google.de/maps/place/Torrefazione/@52.4259755,13.2952024,13z/data=!4m5!3m4!1s0x41653b7252d3eb49:0x1cf530931dbbfc0b!8m2!3d52.4270966!4d13.3264214",
          },
          {
            district: "Prenzlauer Berg",
            name: "Berliner Kaffeekontor",
            address: "Stargarder Str. 4, 10437 Berlin-Prenzlauer Berg",
            hours: ["Montag: geschlossen", "Di - Fr: 11:00 - 18:30 Uhr", "Sa: 10:00 - 16:00 Uhr"],
            href: "https://www.google.com/maps/place/Stargarder+Str.+4,+10437+Berlin/@52.5475937,13.4110781,14.54z/data=!4m5!3m4!1s0x47a85206ccd2f37f:0xe7980fa121d51101!8m2!3d52.5473796!4d13.4147695",
          },
          {
            district: "Spandau - Wilhelmstadt",
            name: "Getränke Hoffmann",
            address: "Gatower Straße 74a/76, 13595 Berlin-Spandau",
            hours: ["Mo - Fr: 09:00 - 20:00 Uhr", "Sa: 09:00 - 18:00 Uhr"],
            href: "https://www.google.com/maps/place/Getr%C3%A4nke+Hoffmann/@52.5137114,13.1788391,15z/data=!4m5!3m4!1s0x0:0xac1683d44add8b9e!8m2!3d52.5140099!4d13.1831736",
          },
          {
            district: "Friedenau",
            name: "Ridders Kaffeerösterei",
            address: "Schmiljanstraße 13, 12161 Berlin",
            hours: ["Mo: geschlossen", "Di - Do: 10:00 - 15:00 Uhr", "Fr: 10:00 - 18:00 Uhr", "Sa: 10:00 - 14:00 Uhr"],
            href: "https://www.google.com/maps/place/Ridders+Kaffeer%C3%B6sterei/@52.4693515,13.3315692,15z/data=!4m2!3m1!1s0x0:0x1135cd417f78e8c8",
          },
          {
            district: "Schöneberg - Kreuzberg",
            name: "42 Inspiring Coffee",
            address: "Yorckstraße 27, 10965 Berlin",
            hours: ["Mo: geschlossen", "Di - Fr: 08:00 - 17:00 Uhr", "Sa - So: 09:00 - 18:00 Uhr"],
            href: "https://www.google.com/maps/place/42+Inspiring+Coffee/@52.4910822,13.3769394,14.71z/data=!4m6!3m5!1s0x47a8511c2feba5cd:0x3bb00941602d0240!8m2!3d52.4919223!4d13.3763913!16s%2Fg%2F11vj2rrhkp?entry=ttu",
          },
          {
            district: "Hohenschönhausen",
            name: "Markgrafen Getränkemarkt",
            address: "Egon-Erwin-Kisch-Straße 80, 13059 Berlin-Hohenschönhausen",
            hours: ["Mo - Fr: 09:00 - 18:00 Uhr", "Sa: 09:00 - 14:00 Uhr"],
            href: "https://www.google.com/maps/place/Markgrafen+Getr%C3%A4nkemarkt/@52.5562939,13.4854325,13.25z/data=!4m5!3m4!1s0x47a84c5a271867d9:0x97d99de03a885473!8m2!3d52.5685691!4d13.5105559",
          },
          {
            district: "Hellersdorf",
            name: "Lotto Toto / Hermes Paketshop",
            address: "Mädewalder Weg 44, 12621 Berlin-Kaulsdorf",
            hours: ["Mo - Fr: 07:00 - 18:00 Uhr", "Sa: 07:00 - 13:00 Uhr"],
            href: "https://www.google.com/maps/place/M%C3%A4dewalder+Weg+44,+12621+Berlin/@52.5066048,13.5566373,13.96z/data=!4m6!3m5!1s0x47a8499d6fa295d9:0x7dbaa9a69944ba7!8m2!3d52.5091046!4d13.58805!16s%2Fg%2F11bw41_0dr?entry=ttu",
          },
          {
            district: "Neukölln",
            name: "passenger coffee / roesterei",
            address: "Reuterstraße 52, 12047 Berlin",
            hours: ["Mo - So: 10:00 - 16:00 Uhr"],
            href: "https://www.google.com/maps?client=firefox-b-d&um=1&ie=UTF-8&fb=1&gl=de&sa=X&ftid=0x47a84ffc55f33e99:0x2105963a5d7da6e5",
          },
          {
            district: "Niederschöneweide",
            name: "Getränke Hoffmann",
            address: "Pietschkerstr. 14, 12487 Berlin",
            hours: ["Mo - Fr: 09:00 - 20:00 Uhr", "Sa: 08:00 - 18:00 Uhr"],
            href: "https://www.google.com/maps/place/Getr%C3%A4nke+Hoffmann/@52.4415027,13.4929908,13.25z/data=!4m5!3m4!1s0x47a848af1ff0226f:0x294831eb895af6b7!8m2!3d52.4506478!4d13.5094125",
          },
        ],
      },
    ],
  },
};

export const servicePageSlugs = Object.keys(servicePages) as ServicePageSlug[];
