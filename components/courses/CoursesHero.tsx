import Link from "next/link";

import {
  ArrowRight,
  BookOpen,
  LucideIcon,
  CheckCircle2,
  ChevronRight,
  GraduationCap,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { Course } from "@/types/course";
import { trainingFeatures, trainingModes } from "@/data/academy";
type Props = {
  course: Course;
};

export default function CoursesHero({
  course,
}: Props) {

  return (

    <section className="relative overflow-hidden pt-20 pb-12">

      {/* Background */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="absolute left-[-260px] top-[-180px] h-[560px] w-[560px] rounded-full bg-[#D4AF37]/10 blur-[200px]" />

        <div className="absolute right-[-240px] bottom-[-200px] h-[560px] w-[560px] rounded-full bg-[#D4AF37]/8 blur-[200px]" />

      </div>

      <div className="relative z-10 mx-auto max-w-[1450px] px-5">

        {/* Breadcrumb */}

        <nav
          aria-label="Breadcrumb"
          className="mb-10"
        >
        </nav>

        <div className="grid gap-20 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">

          <div>

            {/* Category */}

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
                py-1
                text-sm
                font-semibold
                tracking-wide
                text-[#D4AF37]
              "
            >

              <GraduationCap className="h-4 w-4" />

              {course.category} Professional Training

            </div>

            {/* Heading */}

            <h1
              className="
                mt-8
                text-[44px]
                font-black
                leading-[0.95]
                tracking-[-0.05em]
                text-white
                md:text-[72px]
              "
            >
              {course.title}

              <span className="mt-3 block text-[#D4AF37]">

                Build Practical Enterprise Skills

              </span>

            </h1>

            {/* Description */}

            <p
              className="
                mt-8
                max-w-[820px]
                text-[18px]
                leading-[2]
                text-white/72
              "
            >
              {course.excerpt}
            </p>

            {/* Trust Chips */}

            <div className="mt-10 flex flex-wrap gap-3">

              <TrustChip
                icon={BookOpen}
                text="Hands-on Enterprise Labs"
              />

              <TrustChip
                icon={ShieldCheck}
                text="Placement Assistance"
              />

              <TrustChip
                icon={Sparkles}
                text="Certification Guidance"
              />

            </div>

            {/* CTA */}

            <div className="mt-12 flex flex-wrap gap-5">

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

              <Link
                href="#course-snapshot"
                className="
                  inline-flex
                  items-center
                  rounded-full
                  border
                  border-[#D4AF37]/25
                  bg-white/[0.03]
                  px-8
                  py-4
                  text-[16px]
                  font-semibold
                  text-white
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-[#D4AF37]
                  hover:bg-[#D4AF37]/10
                "
              >

                Explore Course Details

              </Link>

            </div>

            {/* Why This Course */}

            <div
              className="
                mt-14
                rounded-[30px]
                border
                border-white/10
                bg-white/[0.03]
                p-8
                backdrop-blur-xl
              "
            >

              <h2
                className="
                  text-[24px]
                  font-bold
                  text-white
                "
              >
                Why Choose This Training?
              </h2>

              <p
                className="
                  mt-5
                  text-[17px]
                  leading-[2]
                  text-white/70
                "
              >
                This program combines instructor-led learning,
                enterprise lab practice, structured mentoring,
                certification guidance and interview preparation to help
                learners develop practical skills that are directly
                applicable in real-world IT environments.
              </p>

            </div>

          </div>

          <div className="relative">

            {/* Course Card */}

            <div
              className="
                relative
                overflow-hidden
                rounded-[36px]
                border
                border-[#D4AF37]/15
                bg-gradient-to-br
                from-white/[0.05]
                via-white/[0.03]
                to-[#D4AF37]/[0.04]
                backdrop-blur-2xl
              "
            >
              <div className="p-8">

                <h2
                  className="
                    text-[30px]
                    font-black
                    leading-tight
                    text-white
                  "
                >
                  Course Overview
                </h2>

                <p
                  className="
                    mt-4
                    text-[16px]
                    leading-[1.9]
                    text-white/70
                  "
                >
                  Everything you need to begin your learning journey,
                  from practical training and certification guidance to
                  interview preparation and placement assistance.
                </p>

                {/* Course Information */}

                <div className="mt-10 space-y-4">

                  <InfoRow
                    title="Duration"
                    value={course.duration}
                  />

                  <InfoRow
                    title="Training Mode"
                    value={trainingModes
                  .map((training) => training.mode.replace(" Training", ""))
                  .join(" • ")}
                  />

                  <InfoRow
                    title="Certification"
                    value={
                      trainingFeatures.certificationGuidance
                        ? "Included"
                        : "Course Completion"
                    }
                  />

                  <InfoRow
                    title="Placement"
                    value={
                      trainingFeatures.placementAssistance
                        ? "100% Assistance"
                        : "Career Guidance"
                    }
                  />

                </div>

                {/* Divider */}

                <div className="my-10 h-px bg-white/10" />

                {/* Skills */}

                <div>

                  <h3
                    className="
                      text-[20px]
                      font-bold
                      text-white
                    "
                  >
                    Key Skills You'll Learn
                  </h3>

                  <div className="mt-5 flex flex-wrap gap-3">

                    {course.skills
                      .slice(0, 8)
                      .map((skill) => (

                        <span
                          key={skill}
                          className="
                            rounded-full
                            border
                            border-[#D4AF37]/15
                            bg-[#D4AF37]/8
                            px-4
                            py-2
                            text-sm
                            font-medium
                            text-[#F5E6B3]
                          "
                        >
                          {skill}
                        </span>

                      ))}

                  </div>

                </div>

                {/* CTA */}

                <Link
                  href="/contact"
                  className="
                    mt-10
                    inline-flex
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-2xl
                    bg-[#D4AF37]
                    px-6
                    py-4
                    text-[17px]
                    font-bold
                    text-black
                    transition-all
                    duration-300
                    hover:bg-[#E7C75A]
                  "
                >

                  Book Free Career Consultation

                  <ArrowRight className="h-5 w-5" />

                </Link>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );

}

type TrustChipProps = {
  icon: LucideIcon;
  text: string;
};

function TrustChip({
  icon: Icon,
  text,
}: TrustChipProps) {

  return (

    <div
      className="
        inline-flex
        items-center
        gap-2
        rounded-full
        border
        border-white/10
        bg-white/[0.03]
        px-4
        py-2
        backdrop-blur-xl
      "
    >

      <Icon
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
          text-white/80
        "
      >
        {text}
      </span>

    </div>

  );

}

type InfoRowProps = {
  title: string;
  value: string;
};

function InfoRow({
  title,
  value,
}: InfoRowProps) {

  return (

    <div
      className="
        flex
        items-center
        justify-between
        gap-6
        rounded-2xl
        border
        border-white/10
        bg-black/20
        p-5
      "
    >

      <span
        className="
          text-[15px]
          font-medium
          text-white/60
        "
      >
        {title}
      </span>

      <span
        className="
          text-right
          text-[15px]
          font-semibold
          text-white
        "
      >
        {value}
      </span>

    </div>

  );

}

type OutcomeItemProps = {
  text: string;
};

function OutcomeItem({
  text,
}: OutcomeItemProps) {

  return (

    <div
      className="
        flex
        items-start
        gap-3
      "
    >

      <CheckCircle2
        className="
          mt-0.5
          h-5
          w-5
          shrink-0
          text-[#D4AF37]
        "
      />

      <p
        className="
          text-[16px]
          leading-[1.8]
          text-white/72
        "
      >
        {text}
      </p>

    </div>

  );

}