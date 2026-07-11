import { Brands } from "@/components/sections/brands";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Location } from "@/components/sections/location";
import { Process } from "@/components/sections/process";
import { Services } from "@/components/sections/services";
import { SiteFooter } from "@/components/sections/site-footer";
import { SiteHeader } from "@/components/sections/site-header";
import { Trust } from "@/components/sections/trust";
import { UspBar } from "@/components/sections/usp-bar";
import { localBusinessJsonLd } from "@/lib/source-data";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd()) }}
      />
      <SiteHeader />
      <main>
        <Hero />
        <UspBar />
        <Services />
        <Brands />
        <Process />
        <Trust />
        <Location />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
