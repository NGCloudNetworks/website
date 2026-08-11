import { ArrowRight, Milestone } from "lucide-react";
import Link from "next/link";
import { Course } from "@/types/course";
import { courses } from "@/data/courses";

type Props = {
  course: Course;
};

export default function CareerPathSection({ course }: Props) {
  // Immediate next-step outcome, straight from the course's own career data —
  // no invented content, just the first stage already present in careerPath
  const firstStage = course.careerPath[0];

  // Resolve relatedCourses (stored as URL paths) into real Course objects
  // so we can show title + category, not just a bare link
  const nextCourses = course.relatedCourses
    .map((path) => {
      const slug = path.replace("/courses/", "");
      return courses.find((c) => c.slug === slug);
    })
    .filter((c): c is Course => Boolean(c))
    .slice(0, 3);

  return (
    <section
      id="after-this-course"
      aria-labelledby="after-course-heading"
      className="relative overflow-hidden py-16 md:py-20"
    >
      <div className="mx-auto max-w-[1000px] px-5">

        <header className="mx-auto max-w-[760px] text-center">
          <span
            className="
              inline-flex items-center gap-2 rounded-full border
              border-[#D4AF37]/20 bg-[#D4AF37]/10 px-4 py-2
              text-sm font-semibold text-[#D4AF37]
            "
          >
            <Milestone className="h-4 w-4" aria-hidden="true" />
            Your Path Forward
          </span>

          <h2
            id="after-course-heading"
            className="
              mt-6 text-[32px] font-black leading-[1.1] tracking-[-0.04em]
              text-white md:text-[42px]
            "
          >
            What Happens After {course.title}?
          </h2>

          {/* Direct-answer paragraph — states the immediate outcome and the
              next decision point in one citable sentence */}
          {firstStage && (
            <p className="mx-auto mt-6 text-[15.5px] leading-[1.9] text-white/70">
              Most students move into a{" "}
              <strong className="text-white">{firstStage.role}</strong> role
              (typically {firstStage.salary}) shortly after completing{" "}
              {course.title}. From there, many continue building expertise
              through one of the specializations below.
            </p>
          )}
        </header>

        {/* Immediate outcome — single highlighted stat, not buried in a table */}
        {firstStage && (
          <div
            className="
              mx-auto mt-10 flex max-w-[600px] items-center justify-between
              gap-6 rounded-[24px] border border-[#D4AF37]/20
              bg-[#D4AF37]/[0.05] p-6
            "
          >
            <div>
              <p className="text-[11px] uppercase tracking-wide text-white/45">
                {firstStage.stage}
              </p>
              <p className="mt-1 text-[18px] font-bold text-white">
                {firstStage.role}
              </p>
            </div>
            <p className="text-[20px] font-black text-[#D4AF37]">
              {firstStage.salary}
            </p>
          </div>
        )}

        {/* Next courses — real decision fork, not a generic "related" list */}
        {nextCourses.length > 0 && (
          <div className="mt-16">
            <h3 className="text-center text-[13px] font-semibold uppercase tracking-wider text-[#D4AF37]/80">
              Continue Your Learning Path
            </h3>

            <div className="mt-7 grid gap-5 sm:grid-cols-3">
              {nextCourses.map((next) => (
                <Link
                  key={next.slug}
                  href={`/courses/${next.slug}`}
                  className="
                    group flex flex-col justify-between rounded-2xl
                    border border-white/10 bg-white/[0.03] p-6
                    transition-all duration-300
                    hover:border-[#D4AF37]/30 hover:bg-[#D4AF37]/[0.04]
                  "
                >
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-wide text-[#D4AF37]/70">
                      {next.category}
                    </p>
                    <p className="mt-2 text-[15px] font-bold leading-snug text-white">
                      {next.title}
                    </p>
                  </div>

                  <div className="mt-5 flex items-center gap-1.5 text-[13px] font-semibold text-[#D4AF37]">
                    Explore Course
                    <ArrowRight
                      className="h-3.5 w-3.5 transition-all duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}