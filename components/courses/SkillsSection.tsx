import { CheckCircle2 } from "lucide-react";
import { Course } from "@/types/course";

type Props = {
  course: Course;
};

export default function SkillsSection({ course }: Props) {
  return (
    <section
      id="course-skills"
      aria-labelledby="skills-heading"
      itemScope
      itemType="https://schema.org/Course"
      className="relative overflow-hidden py-20 md:py-24"
    >

      {/* Background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-[-180px] top-[-120px] h-[420px] w-[420px] rounded-full bg-[#D4AF37]/7 blur-[180px]" />
        <div className="absolute right-[-180px] bottom-[-120px] h-[420px] w-[420px] rounded-full bg-[#D4AF37]/6 blur-[180px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-5">

        {/* Section Introduction */}
        <header className="mx-auto max-w-[900px] text-center">
          <span
            className="
              inline-flex rounded-full border border-[#D4AF37]/20
              bg-[#D4AF37]/10 px-4 py-2 text-sm font-semibold text-[#D4AF37]
            "
          >
            Skills &amp; Learning Outcomes
          </span>

          <h2
            id="skills-heading"
            className="
              mt-6 text-[40px] font-black leading-[1] tracking-[-0.04em]
              text-white md:text-[56px]
            "
          >
            Skills You&apos;ll Learn
          </h2>

          {/* Already unique per course — direct-answer, citable claim */}
          <p className="mx-auto mt-6 max-w-[840px] text-[17px] leading-[1.9] text-white/70">
            {course.skillsOverview}
          </p>
        </header>

        {/* Core Skills — tag cloud, not a checklist. Better UX at 30 items,
            and itemProp="teaches" ties visible content to the Course schema's
            `teaches` field already emitted at the page level */}
        <div className="mx-auto mt-14 max-w-[1100px]">
          <h3 className="text-[24px] font-bold text-white">Core Skills Covered</h3>

          <div
            aria-label={`${course.title} skills`}
            className="mt-7 flex flex-wrap gap-2.5"
          >
            {course.skills.map((skill) => (
              <span
                key={skill}
                itemProp="teaches"
                className="
                  rounded-full border border-white/10 bg-white/[0.03]
                  px-4 py-2 text-[13.5px] font-medium text-white/80
                  transition-all duration-300
                  hover:border-[#D4AF37]/30 hover:text-[#D4AF37]
                "
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Learning Outcomes — real checklist, since these are sequential
            "what you'll be able to do" statements, not a flat tag set */}
        <div className="mx-auto mt-16 max-w-[1100px]">
          <h3 className="text-[24px] font-bold text-white">What You&apos;ll Be Able to Do</h3>

          {/* Course-specific direct-answer sentence, replacing the generic
              boilerplate that was identical across all 10 course pages */}
          <p className="mt-3 max-w-[820px] text-[16px] leading-[1.9] text-white/65">
            By the end of {course.title}, you will be able to{" "}
            {course.outcomes[0].charAt(0).toLowerCase() + course.outcomes[0].slice(1).replace(/\.$/, "")},
            along with the additional practical outcomes below.
          </p>

          <ul
            aria-label={`${course.title} learning outcomes`}
            className="mt-7 grid gap-x-12 gap-y-4 sm:grid-cols-2"
          >
            {course.outcomes.map((outcome) => (
              <li key={outcome} className="flex items-start gap-3 text-[15px] leading-[1.8] text-white/72">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#D4AF37]" aria-hidden="true" />
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}