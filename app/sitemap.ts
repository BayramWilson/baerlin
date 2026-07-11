import type { MetadataRoute } from "next";
import { servicePageSlugs } from "@/lib/service-pages";

const routes = ["", "/impressum", "/datenschutz", "/agb", ...servicePageSlugs.map((slug) => `/${slug}`)];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://www.kaffee-baerlin.de${route}`,
    lastModified: new Date("2026-07-11"),
    changeFrequency: route.includes("impressum") || route.includes("datenschutz") || route.includes("agb") ? "yearly" : "monthly",
    priority: route ? 0.8 : 1,
  }));
}
