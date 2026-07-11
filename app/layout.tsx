import type { Metadata } from "next";
import { Calistoga, Inter } from "next/font/google";
import "./globals.css";

const calistoga = Calistoga({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kaffee-baerlin.de"),
  title: "Kaffeemaschinen Reparatur Berlin | Kaffee Bärlin",
  description:
    "Kaffee Bärlin in Berlin-Moabit repariert und wartet Kaffee- und Espressomaschinen mit kostenloser Diagnose, Kostenvoranschlag und Abholservice für Kaffeevollautomaten in Berlin.",
  openGraph: {
    title: "Kaffeemaschinen Reparatur Berlin | Kaffee Bärlin",
    description:
      "Reparatur, Wartung, kostenlose Diagnose und kostenloser Abholservice für Kaffeevollautomaten in Berlin.",
    url: "https://www.kaffee-baerlin.de/",
    siteName: "Kaffee Bärlin",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Kaffee Bärlin Kaffeemaschinen Reparatur Berlin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaffeemaschinen Reparatur Berlin | Kaffee Bärlin",
    description:
      "Reparatur, Wartung und kostenloser Abholservice für Kaffeevollautomaten in Berlin.",
    images: ["/images/og-image.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${calistoga.variable} ${inter.variable} scroll-smooth`}>
      <body>{children}</body>
    </html>
  );
}
