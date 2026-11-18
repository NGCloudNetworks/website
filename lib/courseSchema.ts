// lib/courseSchema.ts
import { Course } from "@/types/course";
import { SITE, ORG_ID } from "@/lib/site";

export function buildCourseSchema(course: Course) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": `${SITE}/courses/${course.slug}#course`,
    name: course.title,
    description: course.seoDescription,
    provider: {
      "@id": ORG_ID,
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: ["Blended", "Online", "InPerson"],
      courseWorkload: course.duration,
    },
    offers: course.price
      ? {
          "@type": "Offer",
          price: Number(course.price.replace(/[^0-9.]/g, "")) || undefined,
          priceCurrency: course.priceCurrency,
          availability: "https://schema.org/InStock",
          url: `${SITE}/courses/${course.slug}`,
        }
      : undefined,
    teaches: course.skills,
  };
}