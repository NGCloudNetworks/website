import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  BookOpen,
  Clock3,
  Layers3,
} from "lucide-react";

import { Course } from "@/types/course";
import { courses } from "@/data/courses";

type Props = {
  course: Course;
};

export default function RelatedCourses({
  course,
}: Props) {

  const relatedCourses = course.relatedCourses
    .map((path) => {

      const slug = path.split("/").pop();

      return courses.find(
        (item) => item.slug === slug
      );

    })
    .filter(
      (item): item is Course => Boolean(item)
    );

  if (relatedCourses.length === 0) {
    return null;
  }

  return (

    <section className="relative overflow-hidden py-12">

      {/* Background */}

      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute left-[-220px] top-[-120px] h-[470px] w-[470px] rounded-full bg-[#D4AF37]/10 blur-[180px]" />

        <div className="absolute right-[-220px] bottom-[-120px] h-[470px] w-[470px] rounded-full bg-[#D4AF37]/8 blur-[180px]" />

      </div>

      <div className="relative z-10 mx-auto max-w-[1450px] px-5">

        {/* Heading */}

        <div className="mx-auto max-w-[920px] text-center">

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

            Continue Learning

          </div>

          <h2
            className="
              mt-8
              text-[42px]
              font-black
              leading-[0.95]
              tracking-[-0.05em]
              text-white
              md:text-[64px]
            "
          >
            Expand Your
            <span className="block text-[#D4AF37]">
              Professional Skill Set
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-8
              max-w-[850px]
              text-[18px]
              leading-[2]
              text-white/65
            "
          >
            Technology professionals continuously upgrade their
            expertise to stay relevant in the industry. After
            completing this course, explore the next logical learning
            path to strengthen your networking, cloud computing,
            cybersecurity and enterprise infrastructure knowledge.
          </p>

        </div>

        {/* Courses */}

        <div className="mt-20 grid gap-8 lg:grid-cols-2 xl:grid-cols-3">

          {relatedCourses.map((relatedCourse) => (

            <CourseCard
              key={relatedCourse.slug}
              relatedCourse={relatedCourse}
            />

          ))}

        </div>

        {/* Learning Journey */}

        <div
          className="
            mt-24
            overflow-hidden
            rounded-[36px]
            border
            border-[#D4AF37]/15
            bg-[#D4AF37]/[0.05]
            p-12
          "
        >

          <div className="grid gap-12 lg:grid-cols-[420px_1fr]">

            <div>

              <div
                className="
                  inline-flex
                  rounded-full
                  border
                  border-[#D4AF37]/20
                  bg-[#D4AF37]/10
                  px-5
                  py-2
                  text-sm
                  font-semibold
                  text-[#D4AF37]
                "
              >
                Career Progression
              </div>

              <h3
                className="
                  mt-8
                  text-[40px]
                  font-black
                  leading-[1]
                  tracking-[-0.04em]
                  text-white
                "
              >
                One Course Is
                <span className="block text-[#D4AF37]">
                  Just The Beginning
                </span>
              </h3>

            </div>

            <div>

              <p
                className="
                  text-[18px]
                  leading-[2]
                  text-white/72
                "
              >
                The IT industry rewards professionals who continuously
                expand their expertise. Building on your networking
                foundation with cloud, security and enterprise
                technologies creates stronger career opportunities,
                broader technical capabilities and long-term
                professional growth.
              </p>

              <div className="mt-10 grid gap-5 md:grid-cols-2">
                <LearningPoint text="Progressive Certification Path" />

                <LearningPoint text="Enterprise Technology Stack" />

                <LearningPoint text="Real-World Practical Experience" />

                <LearningPoint text="Higher Career Opportunities" />

                <LearningPoint text="Cross-Domain Technical Skills" />

                <LearningPoint text="Long-Term Professional Growth" />

              </div>

            </div>

          </div>

        </div>
      </div>

    </section>

  );

}

function CourseCard({
  relatedCourse,
}: {
  relatedCourse: Course;
}) {

  return (

    <Link
      href={`/courses/${relatedCourse.slug}`}
      className="
        group
        overflow-hidden
        rounded-[30px]
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-[#D4AF37]/30
        hover:shadow-[0_25px_70px_rgba(212,175,55,0.12)]
      "
    >

      {/* Image */}

      <div className="relative h-60 overflow-hidden">

        <Image
          src={relatedCourse.image}
          alt={relatedCourse.title}
          fill
          className="
            object-cover
            transition-transform
            duration-700
            group-hover:scale-110
          "
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/20 to-transparent" />

        <div
          className="
            absolute
            left-6
            top-6
            rounded-full
            border
            border-[#D4AF37]/30
            bg-black/60
            px-4
            py-2
            backdrop-blur-xl
          "
        >

          <span
            className="
              text-xs
              font-semibold
              tracking-wide
              text-[#D4AF37]
            "
          >
            PROFESSIONAL COURSE
          </span>

        </div>

      </div>

      {/* Content */}

      <div className="p-8">

        <h3
          className="
            text-[28px]
            font-black
            leading-[1.2]
            tracking-[-0.03em]
            text-white
            transition-colors
            duration-300
            group-hover:text-[#D4AF37]
          "
        >
          {relatedCourse.title}
        </h3>

        <p
          className="
            mt-5
            line-clamp-3
            text-[16px]
            leading-[1.9]
            text-white/65
          "
        >
          {relatedCourse.excerpt}
        </p>

        {/* Course Meta */}

        <div className="mt-8 flex flex-wrap gap-3">

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

            <Clock3 className="h-4 w-4 text-[#D4AF37]" />

            {/* <span className="text-sm text-white/75">
              {relatedCourse.course.duration}
            </span> */}

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

            <BookOpen className="h-4 w-4 text-[#D4AF37]" />

            {/* <span className="text-sm text-white/75">
              {relatedCourse.courseInfo.trainingMode}
            </span> */}

          </div>

        </div>

        {/* CTA */}

        <div
          className="
            mt-8
            inline-flex
            items-center
            gap-3
            font-semibold
            text-[#D4AF37]
            transition-all
            duration-300
            group-hover:gap-5
          "
        >

          Explore Course

          <ArrowRight className="h-5 w-5" />

        </div>

      </div>

    </Link>

  );

}

function LearningPoint({
  text,
}: {
  text: string;
}) {

  return (

    <div
      className="
        flex
        items-center
        gap-4
        rounded-2xl
        border
        border-white/10
        bg-black/20
        p-5
      "
    >

      <div
        className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          bg-[#D4AF37]/10
        "
      >

        <BookOpen
          className="h-5 w-5 text-[#D4AF37]"
        />

      </div>

      <p
        className="
          text-[16px]
          font-medium
          text-white/75
        "
      >
        {text}
      </p>

    </div>

  );

}