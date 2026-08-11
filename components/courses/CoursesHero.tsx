import Link from "next/link";
import { Clock3, IndianRupee, Users, ArrowRight, CheckCircle2 } from "lucide-react";
import { Course } from "@/types/course";
import { trainer } from "@/data/academy";

type Props = {
  course: Course;
};

export default function CoursesHero({ course }: Props) {
  return (
    <section
      aria-labelledby="course-hero-heading"
      className="relative overflow-hidden pt-[180px] pb-16 md:pt-[220px] md:pb-20"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-[-200px] top-[-140px] h-[480px] w-[480px] rounded-full bg-[#D4AF37]/8 blur-[200px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1000px] px-5">

        {/* Breadcrumb — visible, matches BreadcrumbList schema already emitted at page level */}
        <nav aria-label="Breadcrumb" className="mb-6 flex justify-center gap-2 text-[13px] text-white/45">
          <Link href="/" className="hover:text-[#D4AF37]">Home</Link>
          <span>/</span>
          <Link href="/courses" className="hover:text-[#D4AF37]">Courses</Link>
          <span>/</span>
          <span className="text-white/70">{course.title}</span>
        </nav>

        <div className="text-center">
          <span
            className="
              inline-flex items-center gap-2 rounded-full border
              border-[#D4AF37]/20 bg-[#D4AF37]/10 px-4 py-2
              text-sm font-semibold text-[#D4AF37]
            "
          >
            {course.category}
          </span>

          {/* H1 */}
          <h1
            id="course-hero-heading"
            className="
              mt-6 text-[36px] font-black leading-[1.08] tracking-[-0.04em]
              text-white md:text-[54px]
            "
          >
            {course.title}
          </h1>

          {/* AEO direct-answer paragraph — self-contained, citable */}
          <p className="mx-auto mt-6 max-w-[760px] text-[16px] leading-[1.9] text-white/70">
            {course.excerpt}
          </p>

          {/* Trainer credibility line — E-E-A-T, ties to the same trainer entity used site-wide */}
          <p className="mt-4 text-[13.5px] text-white/45">
            Taught by {trainer.name}, {trainer.designation} with {trainer.experience} of industry experience
          </p>
        </div>

        {/* Front-loaded fact strip — duration, fee, batch size, right in the hero,
            matching the pattern used by the strongest-ranking competitor pages
            (exact numbers up top, not buried further down the page) */}
        <div
          className="
            mx-auto mt-10 flex max-w-[760px] flex-col gap-4 rounded-[28px]
            border border-[#D4AF37]/20 bg-[#D4AF37]/[0.05] p-6 sm:flex-row
            sm:items-center sm:justify-between md:p-8
          "
        >
          <div className="grid flex-1 grid-cols-3 gap-4 text-center sm:text-left">
            <div>
              <div className="flex items-center justify-center gap-1.5 sm:justify-start">
                <Clock3 className="h-4 w-4 text-[#D4AF37]" aria-hidden="true" />
                <span className="text-[11px] uppercase tracking-wide text-white/45">Duration</span>
              </div>
              <p className="mt-1 text-[16px] font-bold text-white">{course.duration}</p>
            </div>

            <div>
              <div className="flex items-center justify-center gap-1.5 sm:justify-start">
                <IndianRupee className="h-4 w-4 text-[#D4AF37]" aria-hidden="true" />
                <span className="text-[11px] uppercase tracking-wide text-white/45">Fee</span>
              </div>
              <p className="mt-1 text-[16px] font-bold text-white">{course.price}</p>
            </div>

            <div>
              <div className="flex items-center justify-center gap-1.5 sm:justify-start">
                <Users className="h-4 w-4 text-[#D4AF37]" aria-hidden="true" />
                <span className="text-[11px] uppercase tracking-wide text-white/45">Batch Size</span>
              </div>
              <p className="mt-1 text-[16px] font-bold text-white">Max 10</p>
            </div>
          </div>

          <Link
            href="/contact"
            className="
              inline-flex h-[52px] shrink-0 items-center justify-center gap-2
              rounded-full bg-[#D4AF37] px-7 text-[14.5px] font-bold text-black
              transition-all duration-300 hover:scale-[1.02]
              hover:shadow-[0_0_35px_rgba(212,175,55,0.35)]
            "
          >
            Book Free Demo
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        {/* Trust micro-signals — quick scan, no claim without backing data */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] text-white/50">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-3.5 w-3.5 text-[#D4AF37]" aria-hidden="true" />
            Live Instructor-Led Training
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-3.5 w-3.5 text-[#D4AF37]" aria-hidden="true" />
            Enterprise Practical Labs
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-3.5 w-3.5 text-[#D4AF37]" aria-hidden="true" />
            Placement Assistance
          </span>
        </div>

      </div>
    </section>
  );
}