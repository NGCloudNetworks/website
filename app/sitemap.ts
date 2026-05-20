import { MetadataRoute } from "next";

import { courses } from "@/data/courses";

export default function sitemap(): MetadataRoute.Sitemap {

  const baseUrl = "https://ngcloudnetworks.com";

  const staticPages = [
    "",
    "/courses",
    "/contact",
  ];

  const staticUrls = staticPages.map((page) => ({
    url: `${baseUrl}${page}`,

    lastModified: new Date(),

    changeFrequency: "weekly" as const,

    priority: page === "" ? 1 : 0.9,
  }));

  const courseUrls = courses.map((course) => ({
    url: `${baseUrl}/courses/${course.slug}`,

    lastModified: new Date(),

    changeFrequency: "weekly" as const,

    priority: 0.95,
  }));

  return [
    ...staticUrls,
    ...courseUrls,
  ];
}