import type { MetadataRoute } from "next";

const routes = ["", "/impressum", "/datenschutz", "/agb"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://www.kaffee-baerlin.de${route}`,
    lastModified: new Date("2026-07-11"),
    changeFrequency: route ? "yearly" : "monthly",
    priority: route ? 0.4 : 1,
  }));
}
