import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { sitemapLastModified } from "@/lib/sitemap-last-modified";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: sitemapLastModified.home,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/ai-vibe-coding-astana`,
      lastModified: sitemapLastModified.aiVibeCodingAstana,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
