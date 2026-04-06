import { MetadataRoute } from "next";

const base = "https://shariffsufifoundation.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/mission", "/donate", "/legal", "/contact"];
  const lastModified = new Date();

  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));
}
