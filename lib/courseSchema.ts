// lib/courseSchema.ts
import { Course } from "@/types/course";

export function buildCourseSchema(course: Course) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": `https://ngcloudnetworks.com/courses/${course.slug}#course`,
    name: course.title,
    description: course.seoDescription,
    provider: {
      "@id": "https://ngcloudnetworks.com/#organization",
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
          url: `https://ngcloudnetworks.com/courses/${course.slug}`,
        }
      : undefined,
    teaches: course.skills,
  };
}