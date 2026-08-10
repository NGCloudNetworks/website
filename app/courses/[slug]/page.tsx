import { notFound } from "next/navigation";
import type { Metadata } from "next";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

import CoursesHero from "@/components/courses/CoursesHero";
import CourseSnapshot from "@/components/courses/CourseSnapshot";
import WhyLearn from "@/components/courses/WhyLearn";
import TrainerSection from "@/components/home/TrainerSection";
import SkillsSection from "@/components/courses/SkillsSection";
import WhoShouldJoin from "@/components/home/WhoShouldJoin";
import CareerOpportunities from "@/components/courses/CareerOpportunities";
import PlacementSection from "@/components/courses/PlacementSection";
import RelatedCourses from "@/components/courses/RelatedCourses";
import RelatedBlogs from "@/components/courses/RelatedBlogs";
import FAQSection from "@/components/courses/FAQSection";
import SeoContent from "@/components/courses/SeoContent";
import CTASection from "@/components/courses/CTASection";

import { courses } from "@/data/courses";
import CurriculumSection from "@/components/courses/CurriculumSection";
import TrainingScheduleSection from "@/components/home/TrainingScheduleSection";
import EnterpriseLabsProjects from "@/components/courses/EnterpriseLabsProjects";
import CourseFeeSection from "@/components/courses/CourseFeeSection";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {

  const { slug } = await params;

  const course = courses.find(
    (item) => item.slug === slug
  );

  if (!course) {
    return {};
  }

  const url =
    `https://www.ngcloudnetworks.com/courses/${course.slug}`;

  return {
    metadataBase: new URL("https://www.ngcloudnetworks.com"),

    title: course.seoTitle,

    description: course.seoDescription,

    keywords: course.tags,

    applicationName: "NG Cloud Networks",

    authors: [
      {
        name: "NG Cloud Networks",
      },
    ],

    creator: "NG Cloud Networks",

    publisher: "NG Cloud Networks",

    category: "Education",

    alternates: {
      canonical: url,
    },

    openGraph: {
      title: course.seoTitle,

      description: course.seoDescription,

      url,

      siteName: "NG Cloud Networks",

      locale: "en_IN",

      type: "website",

      images: [
        {
          url: course.image,
          width: 1200,
          height: 630,
          alt: course.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title: course.seoTitle,

      description: course.seoDescription,

      images: [course.image],
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export default async function CoursePage({
  params,
}: Props) {

  const { slug } = await params;

  const course = courses.find(
    (item) => item.slug === slug
  );

  if (!course) {
    notFound();
  }

  const numericPrice = Number(course.price.replace(/[^0-9.]/g, ""));

  const courseSchema = {

    "@context": "https://schema.org",

    "@type": "Course",

    name: course.title,

    description: course.seoDescription,

    image:
      `https://www.ngcloudnetworks.com${course.image}`,

    url:
      `https://www.ngcloudnetworks.com/courses/${course.slug}`,

    courseMode: ["online", "onsite", "blended"],

    inLanguage: "English",

    educationalLevel:
      "Beginner to Intermediate",

    educationalCredentialAwarded:
      "Course Completion Certificate & Certification Guidance",

    teaches: course.skills,

    ...(numericPrice
      ? {
          offers: {
            "@type": "Offer",
            price: numericPrice,
            priceCurrency: course.priceCurrency,
            availability: "https://schema.org/InStock",
            url: `https://www.ngcloudnetworks.com/courses/${course.slug}`,
          },
        }
      : {}),

    provider: {
      "@id": "https://www.ngcloudnetworks.com/#organization",
    },

  };

  // Merged FAQ schema — combines pricing FAQs and general FAQs into one
  // FAQPage block. CourseFeeSection should render its accordion visually
  // but must NOT emit its own FAQPage schema anymore — this is the only one.
  const allFaqs = [
    ...(course.pricingFaqs ?? []),
    ...(course.faqs ?? []),
  ];

  const faqSchema = allFaqs.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: allFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }
    : null;

  const breadcrumbSchema = {

    "@context": "https://schema.org",

    "@type": "BreadcrumbList",

    itemListElement: [

      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.ngcloudnetworks.com",
      },

      {
        "@type": "ListItem",
        position: 2,
        name: "Courses",
        item: "https://www.ngcloudnetworks.com/courses",
      },

      {
        "@type": "ListItem",
        position: 3,
        name: course.title,
        item:
          `https://www.ngcloudnetworks.com/courses/${course.slug}`,
      },

    ],

  };

  return (
    <>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(courseSchema),
        }}
      />

      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* WebSite schema moved to root layout — do not repeat per course page */}
      {/* Fake page-outline ItemList schema removed — ItemList is for linkable
          item collections (courses, products), not a table of contents */}

      <main className="overflow-hidden bg-[#050505] text-white">

        {/* sr-only keyword-stuffing block removed — this duplicated
            SeoContent's visible copy in a hidden div, which is a hidden-text
            pattern flagged by Google's spam policies. SeoContent below
            already renders this content visibly. */}

        <Navbar />
        <CoursesHero
          course={course}
        />
        <CourseSnapshot
          course={course}
        />
        <WhyLearn
          course={course}
        />
        <SkillsSection
          course={course}
        />
        <CurriculumSection
          course={course} />
        <EnterpriseLabsProjects course={course} />
        <WhoShouldJoin/>
        <TrainingScheduleSection />

        {/* emitSchema=false: Person schema for the trainer is only emitted
            once, on the homepage, where the canonical @id is defined.
            Course pages reuse the same visual card without repeating the
            JSON-LD. Add this prop to TrainerSection if not already present. */}
        <TrainerSection emitSchema={false} />

        <CourseFeeSection course={course} />
        <PlacementSection
          course={course}
        />
        <CareerOpportunities
          course={course}
        />
        <FAQSection
          course={course}
        />
        <SeoContent
          course={course}
        />
        <RelatedCourses
          course={course}
        />

        <RelatedBlogs
          course={course}
        />

        <CTASection
          course={course}
        />
        <Footer />
      </main>
    </>
  );
}