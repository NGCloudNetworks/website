"use client";

import Link from "next/link";

import {
  Clock3,
  BadgeCheck,
  BriefcaseBusiness,
  ArrowUpRight,
  Star,
  Users,
  ShieldCheck,
} from "lucide-react";

import { courses } from "@/data/courses";

export default function FeaturedCourses() {

  const featuredCourses = courses
    .filter((course) => course.featured)
    .sort((a, b) => a.priority - b.priority);

  return (
    <section className="relative overflow-hidden py-28 lg:py-32">

      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="absolute right-[-140px] top-0 h-[450px] w-[450px] rounded-full bg-[#D4AF37]/5 blur-[140px]" />

        <div className="absolute left-[-140px] bottom-0 h-[450px] w-[450px] rounded-full bg-[#D4AF37]/5 blur-[140px]" />

      </div>

      {/* CONTAINER */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-5">

        {/* HEADER */}
        <div className="max-w-[920px]">

          {/* BADGE */}
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#D4AF37]/20
              bg-[#D4AF37]/5
              px-5
              py-2.5
              backdrop-blur-xl
            "
          >

            <div className="h-2 w-2 rounded-full bg-[#D4AF37]" />

            <span className="text-sm tracking-wide text-[#f5e6b3]">
              Industry-Focused Training Programs
            </span>

          </div>

          {/* TITLE */}
          <h2
            className="
              mt-8
              text-[42px]
              font-black
              leading-[0.95]
              tracking-[-0.05em]
              text-white
              md:text-[62px]
              lg:text-[78px]
            "
          >
            Enterprise Networking,

            <span className="block text-[#D4AF37]">
              Cloud & Security Courses
            </span>

          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              mt-8
              max-w-[850px]
              text-[18px]
              leading-[1.9]
              text-white/60
            "
          >
            Learn practical enterprise technologies with real-time lab
            training, certification-focused learning and placement-oriented
            mentorship. Our programs are designed for students, working
            professionals and beginners looking to build careers in
            networking, cloud infrastructure and cybersecurity.
          </p>

        </div>

        {/* COURSES GRID */}
        <div className="mt-20 grid gap-7 md:grid-cols-2 xl:grid-cols-3">

          {featuredCourses.map((course, index) => (

            <div
              key={index}
              className={`
                group
                relative
                overflow-hidden
                rounded-[34px]
                border
                p-8
                backdrop-blur-2xl
                transition-all
                duration-500
                hover:-translate-y-1
                ${
                  course.priority === 1
                    ? "border-[#D4AF37]/25 bg-[#D4AF37]/[0.04]"
                    : "border-white/10 bg-white/[0.03]"
                }
              `}
            >

              {/* HOVER GLOW */}
              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                  bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.12),transparent_55%)]
                "
              />

              {/* TOP */}
              <div className="relative z-10 flex items-start justify-between gap-5">

                <div>

                  {/* CATEGORY */}
                  <div
                    className="
                      inline-flex
                      items-center
                      rounded-full
                      border
                      border-[#D4AF37]/20
                      bg-[#D4AF37]/10
                      px-4
                      py-2
                      text-[12px]
                      font-semibold
                      tracking-[0.08em]
                      text-[#D4AF37]
                    "
                  >
                    {course.category}
                  </div>

                  {/* TITLE */}
                  <h3
                    className="
                      mt-6
                      text-[30px]
                      font-black
                      leading-[1.1]
                      tracking-[-0.03em]
                      text-white
                    "
                  >
                    {course.title}
                  </h3>

                </div>

              </div>

              {/* DESCRIPTION */}
              <p
                className="
                  relative
                  z-10
                  mt-7
                  text-[16px]
                  leading-[1.9]
                  text-white/60
                "
              >
                {course.description}
              </p>

              {/* STATS */}
              <div className="relative z-10 mt-8 flex flex-wrap gap-3">

                <div
                  className="
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

                  <Users className="h-4 w-4 text-[#D4AF37]" />

                  <span className="text-[13px] text-white/75">
                    {course.students} Students
                  </span>

                </div>

                <div
                  className="
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

                  <Star className="h-4 w-4 fill-[#D4AF37] text-[#D4AF37]" />

                  <span className="text-[13px] text-white/75">
                    {course.rating} Rating
                  </span>

                </div>

              </div>

              {/* DETAILS */}
              <div className="relative z-10 mt-10 space-y-4">

                {/* DURATION */}
                <div
                  className="
                    flex
                    items-center
                    gap-4
                    rounded-2xl
                    border
                    border-white/10
                    bg-black/20
                    px-5
                    py-4
                  "
                >

                  <div
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#D4AF37]/10
                    "
                  >

                    <Clock3 className="h-5 w-5 text-[#D4AF37]" />

                  </div>

                  <div>

                    <p className="text-xs uppercase tracking-[0.18em] text-white/40">
                      Duration
                    </p>

                    <p className="mt-1 text-[15px] font-semibold text-white">
                      {course.duration}
                    </p>

                  </div>

                </div>

                {/* LEVEL */}
                <div
                  className="
                    flex
                    items-center
                    gap-4
                    rounded-2xl
                    border
                    border-white/10
                    bg-black/20
                    px-5
                    py-4
                  "
                >

                  <div
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#D4AF37]/10
                    "
                  >

                    <BriefcaseBusiness className="h-5 w-5 text-[#D4AF37]" />

                  </div>

                  <div>

                    <p className="text-xs uppercase tracking-[0.18em] text-white/40">
                      Level
                    </p>

                    <p className="mt-1 text-[15px] font-semibold text-white">
                      {course.level}
                    </p>

                  </div>

                </div>

                {/* CERTIFICATION */}
                <div
                  className="
                    flex
                    items-center
                    gap-4
                    rounded-2xl
                    border
                    border-white/10
                    bg-black/20
                    px-5
                    py-4
                  "
                >

                  <div
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#D4AF37]/10
                    "
                  >

                    <BadgeCheck className="h-5 w-5 text-[#D4AF37]" />

                  </div>

                  <div>

                    <p className="text-xs uppercase tracking-[0.18em] text-white/40">
                      Certification
                    </p>

                    <p className="mt-1 text-[15px] font-semibold text-white">
                      {course.certification}
                    </p>

                  </div>

                </div>

              </div>

              {/* HIGHLIGHTS */}
              <div className="relative z-10 mt-8 flex flex-wrap gap-3">

                {course.courseHighlights
                  ?.slice(0, 2)
                  .map((item, idx) => (

                    <div
                      key={idx}
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-white/10
                        bg-black/20
                        px-4
                        py-2
                        text-[13px]
                        text-white/75
                      "
                    >

                      <ShieldCheck className="h-3.5 w-3.5 text-[#D4AF37]" />

                      {item}

                    </div>
                  ))}

              </div>

              {/* CTA */}
              <Link
                href={`/courses/${course.slug}`}
                className="
                  relative
                  z-10
                  mt-10
                  flex
                  h-[58px]
                  items-center
                  justify-center
                  gap-2
                  rounded-2xl
                  bg-[#D4AF37]
                  text-[15px]
                  font-semibold
                  text-black
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                  hover:shadow-[0_0_35px_rgba(212,175,55,0.35)]
                "
              >

                Explore Course

                <ArrowUpRight className="h-4 w-4" />

              </Link>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}