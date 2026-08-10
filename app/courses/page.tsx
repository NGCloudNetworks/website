import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, GraduationCap, ChevronDown, Clock3, IndianRupee } from "lucide-react";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import ComparisonSection from "@/components/home/ComparisonSection";
import { courses } from "@/data/courses";
import { courseCategories } from "@/data/courseLinks";
import { Course } from "@/types/course";

export const metadata: Metadata = {
  title:
    "All Courses – CCNA, CCNP, AWS, Azure, Palo Alto, Fortigate & More | NG Cloud Networks",

  description:
    "Compare all networking, cloud and security training programs at NG Cloud Networks, Hyderabad — course duration, fees and level for CCNA, CCNP Enterprise, CCNP Core, AWS, Azure, Palo Alto Firewall, Fortigate Firewall, F5 Load Balancer, Cisco SD-WAN and Cloud Security.",

  metadataBase: new URL("https://www.ngcloudnetworks.com"),

  alternates: {
    canonical: "/courses",
  },

  openGraph: {
    title: "All Courses – Networking, Cloud & Security Training | NG Cloud Networks",
    description:
      "10 certification-focused training programs in Hyderabad across Cisco networking, cloud platforms and enterprise security. Compare duration, fees and level.",
    url: "https://www.ngcloudnetworks.com/courses",
    siteName: "NG Cloud Networks",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NG Cloud Networks Courses",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "All Courses | NG Cloud Networks",
    description:
      "Networking, cloud and security certification training in Hyderabad — compare duration, fees and level.",
    images: ["/og-image.jpg"],
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

// Derived from each course's category — kept simple and explicit rather than
// guessed, so it's obvious where to correct it if a course is miscategorized
function levelForCourse(course: Course): "Beginner" | "Intermediate" | "Advanced" {
  if (course.slug.includes("ccna")) return "Beginner";
  if (course.slug.includes("core") || course.slug.includes("enterprise")) return "Intermediate";
  return "Advanced";
}

const catalogFaqs = [
  {
    question: "Which course should I compare first if I'm new to networking?",
    answer:
      "Start by comparing CCNA against the other beginner-friendly options on this page. CCNA has no prerequisites and the shortest path to an entry-level job, making it the natural first comparison point before looking at CCNP, cloud or security courses.",
  },
  {
    question: "Do course fees include the certification exam?",
    answer:
      "Course fees cover training, practical labs and certification guidance. Official vendor exam fees (Cisco, AWS, Microsoft, Palo Alto, Fortinet) are separate unless stated otherwise on the individual course page.",
  },
  {
    question: "Can I compare course duration before enrolling?",
    answer:
      "Yes. The table on this page lists the duration for every course side by side, so you can compare time commitment across CCNA, CCNP, cloud and security programs before choosing.",
  },
];

export default function CoursesHubPage() {
  const groupedCourses = courseCategories.map((category) => ({
    category,
    items: courses.filter((c) => c.navCategory === category),
  }));

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: courses.map((course, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://www.ngcloudnetworks.com/courses/${course.slug}`,
      name: course.title,
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ngcloudnetworks.com" },
      { "@type": "ListItem", position: 2, name: "Courses", item: "https://www.ngcloudnetworks.com/courses" },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: catalogFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
        author: { "@id": "https://www.ngcloudnetworks.com/#organization" },
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="overflow-hidden bg-[#050505] text-white">
        <Navbar />

        {/* Hub Hero + AEO direct-answer block */}
        <section
          aria-labelledby="courses-hub-heading"
          className="relative overflow-hidden pt-[180px] pb-16 md:pt-[220px] md:pb-20"
        >
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="absolute left-[-200px] top-[-140px] h-[480px] w-[480px] rounded-full bg-[#D4AF37]/8 blur-[200px]" />
          </div>

          <div className="relative z-10 mx-auto max-w-[900px] px-5 text-center">
            <nav aria-label="Breadcrumb" className="mb-6 flex justify-center gap-2 text-[13px] text-white/45">
              <Link href="/" className="hover:text-[#D4AF37]">Home</Link>
              <span>/</span>
              <span className="text-white/70">Courses</span>
            </nav>

            <span
              className="
                inline-flex items-center gap-2 rounded-full border
                border-[#D4AF37]/20 bg-[#D4AF37]/10 px-4 py-2
                text-sm font-semibold text-[#D4AF37]
              "
            >
              <GraduationCap className="h-4 w-4" aria-hidden="true" />
              10 Certification-Focused Programs
            </span>

            <h1
              id="courses-hub-heading"
              className="
                mt-6 text-[38px] font-black leading-[1.05] tracking-[-0.04em]
                text-white md:text-[54px]
              "
            >
              Networking, Cloud &amp; Security
              <span className="block text-[#D4AF37]">Training Courses in Hyderabad</span>
            </h1>

            {/* Self-contained, citable direct-answer paragraph */}
            <p className="mx-auto mt-6 max-w-[760px] text-[16px] leading-[1.9] text-white/70">
              NG Cloud Networks offers{" "}
              <strong className="text-white">10 certification-focused programs</strong>{" "}
              in Hyderabad: CCNA, CCNP Enterprise, CCNP Core, AWS Cloud, Azure
              Cloud, Palo Alto Firewall, Fortigate Firewall, F5 Load
              Balancer, Cisco SD-WAN and Cloud Security. Each course
              includes live instructor-led sessions, enterprise practical
              labs, certification guidance and placement assistance.
            </p>
          </div>
        </section>

        {/* Quick comparison table — duration, fee, level, at a glance */}
        <section aria-labelledby="quick-compare-heading" className="pb-16 md:pb-20">
          <div className="mx-auto max-w-[1100px] px-5">
            <h2
              id="quick-compare-heading"
              className="text-center text-[28px] font-black tracking-[-0.03em] text-white md:text-[36px]"
            >
              Compare All Courses at a Glance
            </h2>

            <div className="mt-8 overflow-hidden rounded-[28px] border border-white/10">
              <table className="w-full border-collapse text-left">
                <caption className="sr-only">
                  Duration, fee and level comparison across all NG Cloud
                  Networks training programs
                </caption>
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.03]">
                    <th scope="col" className="px-6 py-4 text-sm font-semibold text-white/60">Course</th>
                    <th scope="col" className="px-6 py-4 text-sm font-semibold text-white/60">Level</th>
                    <th scope="col" className="px-6 py-4 text-sm font-semibold text-white/60">Duration</th>
                    <th scope="col" className="px-6 py-4 text-right text-sm font-semibold text-[#D4AF37]">Fee</th>
                  </tr>
                </thead>
                <tbody>
                  {courses.map((course, index) => (
                    <tr
                      key={course.slug}
                      className={`border-b border-white/10 last:border-b-0 ${index % 2 === 1 ? "bg-white/[0.015]" : ""}`}
                    >
                      <th scope="row" className="px-6 py-4 text-sm font-medium text-white/85">
                        <Link href={`/courses/${course.slug}`} className="hover:text-[#D4AF37]">
                          {course.title}
                        </Link>
                      </th>
                      <td className="px-6 py-4 text-sm text-white/60">{levelForCourse(course)}</td>
                      <td className="px-6 py-4 text-sm text-white/60">{course.duration}</td>
                      <td className="px-6 py-4 text-right text-sm font-semibold text-[#D4AF37]">
                        {course.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Full catalog, grouped by category, real data per card */}
        <section aria-labelledby="course-catalog-heading" className="py-16 md:py-20">
          <div className="mx-auto max-w-[1280px] px-5">
            <h2 id="course-catalog-heading" className="sr-only">
              Full Course Catalog
            </h2>

            <div className="space-y-16">
              {groupedCourses.map((group) => (
                <div key={group.category}>
                  <h3 className="text-[13px] font-semibold uppercase tracking-wider text-[#D4AF37]/80">
                    {group.category} Courses
                  </h3>

                  <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {group.items.map((course) => (
                      <Link
                        key={course.slug}
                        href={`/courses/${course.slug}`}
                        className="
                          group flex flex-col justify-between rounded-[28px]
                          border border-white/10 bg-white/[0.03] p-7
                          transition-all duration-300
                          hover:border-[#D4AF37]/30 hover:bg-[#D4AF37]/[0.04]
                        "
                      >
                        <div>
                          <span
                            className="
                              inline-flex rounded-full bg-[#D4AF37]/10 px-2.5 py-1
                              text-[11px] font-bold uppercase tracking-wide
                              text-[#D4AF37]
                            "
                          >
                            {levelForCourse(course)}
                          </span>

                          <h4 className="mt-4 text-[19px] font-bold leading-snug text-white">
                            {course.title}
                          </h4>

                          <p className="mt-2 text-[13.5px] leading-[1.7] text-white/60">
                            {course.excerpt}
                          </p>
                        </div>

                        <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                          <div className="flex items-center gap-4 text-[12.5px] text-white/50">
                            <span className="flex items-center gap-1.5">
                              <Clock3 className="h-3.5 w-3.5 text-[#D4AF37]/70" aria-hidden="true" />
                              {course.duration}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <IndianRupee className="h-3.5 w-3.5 text-[#D4AF37]/70" aria-hidden="true" />
                              {course.price.replace("₹", "")}
                            </span>
                          </div>

                          <ArrowUpRight
                            className="h-4 w-4 text-[#D4AF37] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                            aria-hidden="true"
                          />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Institute comparison — reused trust content */}
        <ComparisonSection />

        {/* Catalog-specific FAQ — distinct from homepage FAQ, own FAQPage schema */}
        <section aria-labelledby="catalog-faq-heading" className="py-16 md:py-20">
          <div className="mx-auto max-w-[900px] px-5">
            <h2
              id="catalog-faq-heading"
              className="text-center text-[28px] font-black tracking-[-0.03em] text-white md:text-[36px]"
            >
              Questions About Comparing Courses
            </h2>

            <div className="mt-10 divide-y divide-white/10">
              {catalogFaqs.map((faq) => (
                <details key={faq.question} className="group py-5">
                  <summary
                    className="
                      flex cursor-pointer list-none items-center
                      justify-between gap-4 text-[16px] font-semibold
                      text-white marker:hidden
                    "
                  >
                    {faq.question}
                    <ChevronDown
                      className="h-5 w-5 shrink-0 text-[#D4AF37] transition-transform duration-300 group-open:rotate-180"
                      aria-hidden="true"
                    />
                  </summary>
                  <p className="mt-3 max-w-[820px] text-[15px] leading-[1.8] text-white/65">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}