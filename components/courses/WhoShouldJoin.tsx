import { CheckCircle2, XCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Course } from "@/types/course";
import { courses } from "@/data/courses";

type Props = {
  course: Course;
};

// Derives fit/not-fit framing from course level, same heuristic used on
// the /courses hub page — keeps this data-driven rather than hardcoded
// per course, at the cost of needing a real `level` field eventually.
function getFitProfile(course: Course) {
  const isBeginner = course.slug.includes("ccna");
  const isCore = course.slug.includes("core") || course.slug.includes("enterprise");

  if (isBeginner) {
    return {
      goodFor: [
        "Students and freshers with no prior networking experience",
        "Career switchers moving into IT from an unrelated field",
        "System administrators wanting to strengthen networking fundamentals",
        "Anyone planning to eventually specialize in cloud or security",
      ],
      notFor: [
        {
          text: "Already hold a CCNA certification or equivalent working knowledge",
          altSlug: "ccnp-enterprise-training-hyderabad",
          altLabel: "CCNP Enterprise",
        },
      ],
    };
  }

  if (isCore) {
    return {
      goodFor: [
        "CCNA-certified professionals ready for advanced enterprise networking",
        "Working Network Engineers looking to move into senior infrastructure roles",
        "Professionals preparing for the Cisco ENCOR exam",
      ],
      notFor: [
        {
          text: "Completely new to networking with no CCNA-level foundation",
          altSlug: "ccna-training-hyderabad",
          altLabel: "CCNA Training",
        },
      ],
    };
  }

  return {
    goodFor: [
      "Professionals with CCNA-level networking fundamentals",
      `Engineers looking to specialize in ${course.category.toLowerCase()}`,
      "Working professionals aiming for a focused, specialist role",
    ],
    notFor: [
      {
        text: "Completely new to networking with no prior fundamentals",
        altSlug: "ccna-training-hyderabad",
        altLabel: "CCNA Training",
      },
    ],
  };
}

export default function WhoShouldJoin({ course }: Props) {
  const fit = getFitProfile(course);

  return (
    <section
      id="who-should-join"
      aria-labelledby="who-should-join-heading"
      className="relative overflow-hidden py-16 md:py-20"
    >
      <div className="mx-auto max-w-[1000px] px-5">

        <header className="mx-auto max-w-[720px] text-center">
          <span
            className="
              inline-flex rounded-full border border-[#D4AF37]/20
              bg-[#D4AF37]/10 px-4 py-2 text-sm font-semibold text-[#D4AF37]
            "
          >
            Is This Course Right for You?
          </span>

          <h2
            id="who-should-join-heading"
            className="
              mt-6 text-[32px] font-black leading-[1.1] tracking-[-0.04em]
              text-white md:text-[42px]
            "
          >
            Who Should Join {course.title}
          </h2>

          {/* Direct-answer, citable claim: exactly who this is for */}
          <p className="mx-auto mt-5 text-[15.5px] leading-[1.9] text-white/68">
            <strong className="text-white">{course.title}</strong> is
            designed for {fit.goodFor[0].toLowerCase()}. If you already have
            the background this course assumes, a different course on this
            page may be a better fit — see below.
          </p>
        </header>

        {/* Two-column fit comparison — better UX than a flat bullet list */}
        <div className="mt-12 grid gap-5 md:grid-cols-2">

          {/* Right fit */}
          <div className="rounded-[28px] border border-[#D4AF37]/20 bg-[#D4AF37]/[0.05] p-7">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#D4AF37]/15">
                <CheckCircle2 className="h-5 w-5 text-[#D4AF37]" aria-hidden="true" />
              </div>
              <h3 className="text-[17px] font-bold text-white">This course is right for you if...</h3>
            </div>

            <ul className="mt-6 space-y-3.5">
              {fit.goodFor.map((point) => (
                <li key={point} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#D4AF37]" aria-hidden="true" />
                  <span className="text-[14.5px] leading-[1.7] text-white/75">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not the right fit — honest, with a real alternative link */}
          <div className="rounded-[28px] border border-white/10 bg-white/[0.02] p-7">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5">
                <XCircle className="h-5 w-5 text-white/40" aria-hidden="true" />
              </div>
              <h3 className="text-[17px] font-bold text-white">Consider a different course if...</h3>
            </div>

            <ul className="mt-6 space-y-4">
              {fit.notFor.map((item) => {
                const altCourse = courses.find((c) => c.slug === item.altSlug);
                return (
                  <li key={item.text}>
                    <div className="flex items-start gap-2.5">
                      <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-white/30" aria-hidden="true" />
                      <span className="text-[14.5px] leading-[1.7] text-white/60">{item.text}</span>
                    </div>
                    {altCourse && (
                      <Link
                        href={`/courses/${altCourse.slug}`}
                        className="
                          mt-2 ml-6 inline-flex items-center gap-1.5
                          text-[13.5px] font-semibold text-[#D4AF37]
                          underline underline-offset-2
                        "
                      >
                        Explore {item.altLabel} instead
                        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}