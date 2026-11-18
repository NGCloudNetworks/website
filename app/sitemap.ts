import type { MetadataRoute } from "next";

import { courses } from "@/data/courses";
import { blogs } from "@/data/blogs";
import { AMEENPUR, AMEERPET } from "@/data/branches";
import { SITE } from "@/lib/site";

// Update a date here only when the page's content really changes.
const PAGES: { path: string; lastModified?: string }[] = [
  { path: "" },
  { path: "/courses" },
  { path: "/networking-training-hyderabad", lastModified: "2026-11-17" },
  { path: "/ameenpur", lastModified: AMEENPUR.lastUpdated },
  { path: "/ameerpet", lastModified: AMEERPET.lastUpdated },
  { path: "/contact" },
  { path: "/about" },
  { path: "/blog" },
  { path: "/placements" },
  { path: "/resources" },
  { path: "/corporate-training" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = PAGES.map(({ path, lastModified }) => ({
    url: `${SITE}${path}`,
    ...(lastModified ? { lastModified: new Date(lastModified) } : {}),
  }));

  const courseUrls = courses.map((course) => ({
    url: `${SITE}/courses/${course.slug}`,
  }));

  const blogUrls = blogs.map((blog) => ({
    url: `${SITE}/blog/${blog.slug}`,
    ...(blog.publishedDate ? { lastModified: new Date(blog.publishedDate) } : {}),
  }));

  return [...pages, ...courseUrls, ...blogUrls];
}