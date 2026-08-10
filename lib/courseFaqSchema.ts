// lib/courseFaqSchema.ts
import { Course } from "@/types/course";

export function buildCourseFaqSchema(course: Course) {
  if (!course.faqs?.length) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: course.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}