import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {

  return {
    rules: {
      userAgent: "*",

      allow: "/",

      disallow: [
        "/api/",
      ],
    },

    sitemap:
      "https://ngcloudnetworks.com/sitemap.xml",

    host:
      "https://ngcloudnetworks.com",
  };
}