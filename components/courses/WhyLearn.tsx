import { TrendingUp, Sparkles, CheckCircle2 } from "lucide-react";
import { Course } from "@/types/course";

type Props = {
  course: Course;
};

export default function WhyLearn({ course }: Props) {
  return (
    <section
      id="why-learn"
      aria-labelledby="why-learn-heading"
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
            <TrendingUp className="h-4 w-4" aria-hidden="true" />
            Industry Trend &amp; Demand
          </span>

          <h2
            id="why-learn-heading"
            className="
              mt-6 text-[32px] font-black leading-[1.1] tracking-[-0.04em]
              text-white md:text-[42px]
            "
          >
            {course.whyLearn.title}
          </h2>

          {/* Direct-answer paragraph — course.whyLearn.description already
              written as a citable claim; rendered as-is, not padded */}
          <p className="mx-auto mt-6 text-[15.5px] leading-[1.9] text-white/70">
            {course.whyLearn.description}
          </p>
        </header>

        {/* Two-column layout: reasons list + a distinct "why now" callout,
            so the trend/demand angle isn't just buried inside the bullet list */}
        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_320px]">

          {/* Reasons grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {course.whyLearn.points.map((point) => (
              <div
                key={point}
                className="
                  flex items-start gap-3 rounded-2xl border border-white/10
                  bg-white/[0.03] p-5
                "
              >
                <CheckCircle2
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#D4AF37]"
                  aria-hidden="true"
                />
                <span className="text-[14px] leading-[1.7] text-white/75">
                  {point}
                </span>
              </div>
            ))}
          </div>

          {/* Why now — standalone trend callout, distinct visual weight */}
          <div
            className="
              flex flex-col justify-center gap-4 rounded-[28px] border
              border-[#D4AF37]/20 bg-[#D4AF37]/[0.05] p-7
            "
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#D4AF37]/10">
              <Sparkles className="h-5 w-5 text-[#D4AF37]" aria-hidden="true" />
            </div>

            <h3 className="text-[16px] font-bold text-white">Why Now</h3>

            <p className="text-[13.5px] leading-[1.8] text-white/65">
              As enterprises continue shifting toward hybrid and cloud-first
              infrastructure, demand for professionals who understand{" "}
              {course.category.toLowerCase()} continues to grow. Building
              this skill now, backed by hands-on labs rather than theory
              alone, positions you ahead of candidates with certification
              knowledge but no practical implementation experience.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}