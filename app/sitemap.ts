import { MetadataRoute } from "next";

import { courses } from "@/data/courses";
import { blogs } from "@/data/blogs"; // ⚠️ CONFIRM this import path/export name is correct

export default function sitemap(): MetadataRoute.Sitemap {

  const baseUrl = "https://www.ngcloudnetworks.com";

  const staticPages = [
    { path: "", priority: 1 },
    { path: "/courses", priority: 0.9 },
    { path: "/contact", priority: 0.9 },
    { path: "/about", priority: 0.8 },
    { path: "/blog", priority: 0.8 },
    { path: "/placements", priority: 0.7 },
    { path: "/resources", priority: 0.7 },
    { path: "/corporate-training", priority: 0.7 },
  ];

  const staticUrls = staticPages.map(({ path, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority,
  }));

  const courseUrls = courses.map((course) => ({
    url: `${baseUrl}/courses/${course.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.95,
  }));

  const blogUrls = blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: blog.publishedDate
      ? new Date(blog.publishedDate)
      : new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  return [
    ...staticUrls,
    ...courseUrls,
    ...blogUrls,
  ];
}