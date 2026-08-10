import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  GraduationCap,
  Layers3,
  LucideIcon,
} from "lucide-react";

import { Course } from "@/types/course";

type Props = {
  course: Course;
};

export default function CurriculumSection({
  course,
}: Props) {

  const totalModules = course.curriculum.length;

  const totalTopics = course.curriculum.reduce(
    (count, module) => count + module.topics.length,
    0
  );

  const totalLabs = course.curriculum.reduce(
    (count, module) => count + module.practicalLabs.length,
    0
  );

  return (

    <section
      id="course-curriculum"
      className="relative overflow-hidden py-14"
    >

      {/* Background */}

      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute left-[-220px] top-[-120px] h-[450px] w-[450px] rounded-full bg-[#D4AF37]/8 blur-[180px]" />

        <div className="absolute right-[-220px] bottom-[-120px] h-[450px] w-[450px] rounded-full bg-[#D4AF37]/8 blur-[180px]" />

      </div>

      <div className="relative z-10 mx-auto max-w-[1450px] px-5">

        <div className="max-w text-center">

          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#D4AF37]/20
              bg-[#D4AF37]/10
              px-5
              py-2
              text-sm
              font-semibold
              tracking-wide
              text-[#D4AF37]
            "
          >

            <Layers3 className="h-4 w-4" />

            Complete Course Curriculum

          </div>

          <h2
            className="
              mt-7
              text-[42px]
              font-black
              leading-[0.95]
              tracking-[-0.05em]
              text-white
              md:text-[64px]
            "
          >

            Learn Through a
            <span className="block text-[#D4AF37]">
              Structured Curriculum
            </span>

          </h2>

          <p
            className="
              mt-7
              max-w
              text-center
              text-[18px]
              leading-[2]
              text-white/68
            "
          >
            Our curriculum is carefully structured to take you from
            networking fundamentals to enterprise-level implementation.
            Each module combines conceptual learning, practical
            laboratory sessions, troubleshooting exercises and
            industry-standard tools so you graduate with the confidence
            required to work in real IT environments.
          </p>

        </div>

        {/* ===========================
            Curriculum Overview
        =========================== */}

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          <SummaryCard
            icon={BookOpen}
            title="Learning Modules"
            value={`${totalModules} Modules`}
          />

          <SummaryCard
            icon={CalendarDays}
            title="Course Duration"
            value={course.duration}
          />

          <SummaryCard
            icon={Layers3}
            title="Topics Covered"
            value={`${totalTopics}+ Topics`}
          />

          <SummaryCard
            icon={GraduationCap}
            title="Practical Labs"
            value={`${totalLabs}+ Labs`}
          />

        </div>

        {/* ===========================
            Curriculum Modules
        =========================== */}

        <div className="mt-20 space-y-8">

          {course.curriculum.map((module, index) => (

            <CurriculumCard
              key={module.module}
              module={module}
              index={index}
            />

          ))}

        </div>

        {/* ===========================
            Bottom CTA
        =========================== */}

        <div
          className="
            mt-20
            overflow-hidden
            rounded-[34px]
            border
            border-[#D4AF37]/15
            bg-gradient-to-r
            from-[#D4AF37]/10
            via-[#D4AF37]/5
            to-transparent
            p-10
            lg:p-14
          "
        >

          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <div
                className="
                  inline-flex
                  rounded-full
                  border
                  border-[#D4AF37]/20
                  bg-[#D4AF37]/10
                  px-4
                  py-2
                  text-sm
                  font-semibold
                  text-[#D4AF37]
                "
              >
                Career-Focused Learning
              </div>

              <h3
                className="
                  mt-6
                  text-[38px]
                  font-black
                  leading-tight
                  text-white
                "
              >
                Build Practical Skills.
                <span className="block text-[#D4AF37]">
                  Build Your IT Career.
                </span>
              </h3>

              <p
                className="
                  mt-5
                  max-w-[760px]
                  text-[17px]
                  leading-[2]
                  text-white/72
                "
              >
                Every module is designed to strengthen your technical
                knowledge through instructor-led sessions, enterprise
                labs, troubleshooting exercises, certification guidance
                and interview preparation.
              </p>

            </div>

            <Link
              href="/contact"
              className="
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-[#D4AF37]
                px-8
                py-4
                text-[16px]
                font-bold
                text-black
                transition-all
                duration-300
                hover:scale-105
                hover:bg-[#E7C75A]
              "
            >
              Enquire Now

              <ArrowRight className="h-5 w-5" />

            </Link>

          </div>

        </div>

      </div>

    </section>

  );

}

/* ==========================================================
   PART 2 STARTS HERE
   (CurriculumCard + Helper Components)
========================================================== */
type CurriculumCardProps = {
  module: Course["curriculum"][number];
  index: number;
};

function CurriculumCard({
  module,
  index,
}: CurriculumCardProps) {

  return (

    <article
      className="
        group
        overflow-hidden
        rounded-[32px]
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-[#D4AF37]/25
      "
    >

      <div className="grid lg:grid-cols-[320px_1fr]">

        {/* =====================================
            LEFT PANEL
        ===================================== */}

        <div
          className="
            border-b
            border-white/10
            bg-gradient-to-br
            from-[#D4AF37]/8
            via-[#D4AF37]/3
            to-transparent
            p-8
            lg:border-b-0
            lg:border-r
          "
        >

          <div
            className="
              inline-flex
              rounded-full
              border
              border-[#D4AF37]/20
              bg-[#D4AF37]/10
              px-4
              py-2
              text-sm
              font-semibold
              text-[#D4AF37]
            "
          >
            {module.week}
          </div>

          <p
            className="
              mt-5
              text-xs
              font-semibold
              uppercase
              tracking-[0.18em]
              text-white/45
            "
          >
            {module.timeline}
          </p>

          <h3
            className="
              mt-5
              text-[30px]
              font-black
              leading-[1.1]
              tracking-[-0.04em]
              text-white
            "
          >
            {module.module}
          </h3>

          <p
            className="
              mt-6
              text-[16px]
              leading-[1.9]
              text-white/70
            "
          >
            {module.description}
          </p>

          <div
            className="
              mt-8
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/10
              bg-black/20
              px-4
              py-2
            "
          >

            <BookOpen
              className="
                h-4
                w-4
                text-[#D4AF37]
              "
            />

            <span
              className="
                text-sm
                font-medium
                text-white/75
              "
            >
              Module {(index + 1)
                .toString()
                .padStart(2, "0")}
            </span>

          </div>

        </div>

        <div className="p-8">

          {/* Topics */}

          <SectionHeading
            title="Topics Covered"
          />

          <div className="mt-5 flex flex-wrap gap-3">

            {module.topics.map((topic) => (

              <span
                key={topic}
                className="
                  rounded-full
                  border
                  border-white/10
                  bg-black/20
                  px-4
                  py-2
                  text-[14px]
                  font-medium
                  text-white/80
                  transition-colors
                  duration-300
                  group-hover:border-[#D4AF37]/20
                "
              >
                {topic}
              </span>

            ))}

          </div>

          {/* Practical Labs */}

          <div className="mt-10">

            <SectionHeading
              title="Practical Lab Exercises"
            />

            <div className="mt-5 grid gap-4 md:grid-cols-2">

              {module.practicalLabs.map((lab) => (

                <LabItem
                  key={lab}
                  text={lab}
                />

              ))}

            </div>

          </div>

          {/* Industry Tools */}

          <div className="mt-10">

            <SectionHeading
              title="Industry Tools"
            />

            <div className="mt-5 flex flex-wrap gap-3">

              {module.tools.map((tool) => (

                <span
                  key={tool}
                  className="
                    rounded-full
                    border
                    border-[#D4AF37]/20
                    bg-[#D4AF37]/10
                    px-4
                    py-2
                    text-sm
                    font-semibold
                    text-[#F5E6B3]
                  "
                >
                  {tool}
                </span>

              ))}

            </div>

          </div>

        </div>

      </div>

    </article>

  );

}
type SummaryCardProps = {
  icon: LucideIcon;
  title: string;
  value: string;
};

function SummaryCard({
  icon: Icon,
  title,
  value,
}: SummaryCardProps) {

  return (

    <div
      className="
        group
        rounded-[26px]
        border
        border-white/10
        bg-white/[0.03]
        p-7
        backdrop-blur-xl
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#D4AF37]/25
        hover:bg-white/[0.05]
      "
    >

      <div
        className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          bg-[#D4AF37]/10
          transition-all
          duration-300
          group-hover:bg-[#D4AF37]/20
        "
      >

        <Icon
          className="
            h-7
            w-7
            text-[#D4AF37]
          "
        />

      </div>

      <p
        className="
          mt-6
          text-xs
          font-semibold
          uppercase
          tracking-[0.18em]
          text-white/45
        "
      >
        {title}
      </p>

      <h3
        className="
          mt-3
          text-[30px]
          font-black
          tracking-[-0.03em]
          text-white
        "
      >
        {value}
      </h3>

    </div>

  );

}

type SectionHeadingProps = {
  title: string;
};

function SectionHeading({
  title,
}: SectionHeadingProps) {

  return (

    <div
      className="
        flex
        items-center
        gap-3
      "
    >

      <div
        className="
          h-2
          w-2
          rounded-full
          bg-[#D4AF37]
        "
      />

      <h4
        className="
          text-[18px]
          font-bold
          text-white
        "
      >
        {title}
      </h4>

    </div>

  );

}

type LabItemProps = {
  text: string;
};

function LabItem({
  text,
}: LabItemProps) {

  return (

    <div
      className="
        flex
        items-start
        gap-4
        rounded-2xl
        border
        border-white/10
        bg-black/20
        p-5
        transition-all
        duration-300
        hover:border-[#D4AF37]/20
      "
    >

      <div
        className="
          mt-0.5
          flex
          h-9
          w-9
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-[#D4AF37]/10
        "
      >

        <BookOpen
          className="
            h-4
            w-4
            text-[#D4AF37]
          "
        />

      </div>

      <p
        className="
          text-[15px]
          leading-[1.8]
          text-white/75
        "
      >
        {text}
      </p>

    </div>

  );

}