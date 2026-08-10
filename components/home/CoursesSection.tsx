import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { courseLinks, courseCategories } from "@/data/courseLinks";

export default function CoursesSection() {
  const groupedCourses = courseCategories.map((category) => ({
    category,
    items: courseLinks.filter((c) => c.category === category),
  }));

  const coursesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: courseLinks.map((course, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://ngcloudnetworks.com${course.href}`,
      name: course.anchor,
    })),
  };

  return (
    <section
      id="courses"
      aria-labelledby="courses-heading"
      className="relative overflow-hidden py-20 md:py-24"
    >

      {/* Background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-[-180px] top-[-120px] h-[420px] w-[420px] rounded-full bg-[#D4AF37]/7 blur-[180px]" />
        <div className="absolute right-[-180px] bottom-[-120px] h-[420px] w-[420px] rounded-full bg-[#D4AF37]/6 blur-[180px]" />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(coursesSchema) }}
      />

      <div className="relative z-10 mx-auto max-w-[1280px] px-5">

        {/* Header */}
        <header className="mx-auto max-w-[820px] text-center">
          <span
            className="
              inline-flex rounded-full border border-[#D4AF37]/20
              bg-[#D4AF37]/10 px-4 py-2 text-sm font-semibold text-[#D4AF37]
            "
          >
            Our Courses
          </span>

          <h2
            id="courses-heading"
            className="
              mt-6 text-[40px] font-black leading-[1] tracking-[-0.04em]
              text-white md:text-[56px]
            "
          >
            Networking, Cloud &amp; Security Training Programs
          </h2>

          <p
            className="
              mx-auto mt-6 max-w-[720px] text-[17px] leading-[1.9]
              text-white/68
            "
          >
            NG Cloud Networks offers 10 certification-focused training
            programs in Hyderabad across Cisco networking, cloud platforms
            and enterprise security, each built around practical labs and
            placement-oriented mentorship.
          </p>
        </header>

        {/* Grouped course cards */}
        <div className="mt-16 space-y-16">
          {groupedCourses.map((group) => (
            <div key={group.category}>

              <h3
                className="
                  text-[13px] font-semibold uppercase tracking-wider
                  text-[#D4AF37]/80
                "
              >
                {group.category} Courses
              </h3>

              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((course) => (
                  <Link
                    key={course.slug}
                    href={course.href}
                    className="
                      group flex flex-col justify-between rounded-[28px]
                      border border-white/10 bg-white/[0.03] p-7
                      transition-all duration-300
                      hover:border-[#D4AF37]/30 hover:bg-[#D4AF37]/[0.04]
                    "
                  >
                    <div>
                      <p className="text-xs font-medium text-[#D4AF37]/80">
                        {course.subtitle}
                      </p>

                      <h4 className="mt-3 text-[19px] font-bold leading-snug text-white">
                        {course.anchor}
                      </h4>
                    </div>

                    <div
                      className="
                        mt-6 flex items-center gap-2 text-[14px] font-semibold
                        text-[#D4AF37]
                      "
                    >
                      View Course Details
                      <ArrowUpRight
                        className="
                          h-4 w-4 transition-all duration-300
                          group-hover:translate-x-1
                        "
                        aria-hidden="true"
                      />
                    </div>
                  </Link>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/courses"
            className="
              inline-flex h-[58px] items-center justify-center gap-2
              rounded-full bg-[#D4AF37] px-9 text-[15px] font-bold text-black
              transition-all duration-300 hover:scale-[1.02]
              hover:shadow-[0_0_35px_rgba(212,175,55,0.35)]
            "
          >
            View All Courses
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

      </div>
    </section>
  );
}