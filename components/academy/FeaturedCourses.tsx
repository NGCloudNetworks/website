import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  BookOpen,
  Clock3,
  Layers3,
} from "lucide-react";

import { courses } from "@/data/courses";
import { Course } from "@/types/course";
import { trainingModes } from "@/data/academy";

const courseCategories = [
  {
    title: "Enterprise Networking",
    description:
      "Build a strong networking foundation through Cisco routing, switching and enterprise infrastructure technologies.",
    courses: courses.filter(
      (course) => course.category === "Networking"
    ),
  },

  {
    title: "Cloud Computing",
    description:
      "Learn modern cloud platforms and services used to build, deploy and manage enterprise applications.",
    courses: courses.filter(
      (course) => course.category === "Cloud Computing"
    ),
  },

  {
    title: "Cyber Security",
    description:
      "Develop practical firewall administration and enterprise security skills using leading security platforms.",
    courses: courses.filter(
      (course) => course.category === "Cyber Security"
    ),
  },

  // {
  //   title: "Application Delivery",
  //   description:
  //     "Master enterprise application delivery, traffic management and load balancing technologies.",
  //   courses: courses.filter(
  //     (course) => course.category === "Application Delivery"
  //   ),
  // },
];

export default function FeaturedCourses() {

  return (

    <section
      id="featured-courses"
      className="relative overflow-hidden py-12"
    >

      {/* Background */}

      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute left-[-220px] top-[-100px] h-[470px] w-[470px] rounded-full bg-[#D4AF37]/10 blur-[180px]" />

        <div className="absolute right-[-220px] bottom-[-100px] h-[470px] w-[470px] rounded-full bg-[#D4AF37]/8 blur-[180px]" />

      </div>

      <div className="relative z-10 mx-auto max-w-[1450px] px-5">

        {/* Heading */}

        <div className="mx-auto max-w-[950px] text-center">

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

            Professional IT Training Programs

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
            Explore Our
            <span className="block text-[#D4AF37]">
              Industry-Focused Courses
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-8
              max-w-[900px]
              text-[18px]
              leading-[2]
              text-white/68
            "
          >
            Whether you're beginning your IT journey or advancing your
            professional expertise, our learning paths are designed to
            build practical skills across enterprise networking, cloud
            computing, cyber security and application delivery.
            Explore instructor-led programs covering Cisco, AWS,
            Microsoft Azure, Palo Alto Networks, Fortinet, Cisco
            SD-WAN and F5 technologies through practical labs,
            structured mentorship and career-focused training.
          </p>

        </div>

        {/* Categories */}

        <div className="mt-24 space-y-24">

          {courseCategories.map((category) => (

            <div key={category.title}>

              {/* Category Header */}

              <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

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
                    Learning Path
                  </div>

                  <h3
                    className="
                      mt-6
                      text-[38px]
                      font-black
                      leading-[1]
                      tracking-[-0.04em]
                      text-white
                    "
                  >
                    {category.title}
                  </h3>

                </div>

                <p
                  className="
                    max-w-[620px]
                    text-[17px]
                    leading-[2]
                    text-white/65
                  "
                >
                  {category.description}
                </p>

              </div>

              {/* Course Cards */}

              <div className="mt-12 grid gap-8 lg:grid-cols-2 xl:grid-cols-3">

                {category.courses.map((course) => (

                  <CourseCard
                    key={course.slug}
                    course={course}
                  />

                ))}

              </div>

            </div>

          ))}

        </div>
      </div>
    
    </section>
    
  );
}
function CourseCard({
  course,
}: {
  course: Course;
}) {

  return (

    <Link
      href={`/courses/${course.slug}`}
      className="
        group
        overflow-hidden
        rounded-[32px]
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-[#D4AF37]/30
        hover:shadow-[0_30px_80px_rgba(212,175,55,.14)]
      "
    >

      {/* Course Image */}

      <div className="relative h-64 overflow-hidden">

        {/* <Image
          src={course.image}
          alt={course.title}
          fill
          className="
            object-cover
            transition-transform
            duration-700
            group-hover:scale-110
          "
        /> */}

        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/20 to-transparent" />

        {/* Category Badge */}

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
            {course.category}
          </span>

        </div>

      </div>

      {/* Content */}

      <div className="p-8">

        <h4
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
          {course.title}
        </h4>

        <p
          className="
            mt-5
            line-clamp-3
            text-[16px]
            leading-[1.9]
            text-white/68
          "
        >
          {course.excerpt}
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

            <Clock3
              className="h-4 w-4 text-[#D4AF37]"
            />

            <span className="text-sm text-white/75">
              {course.duration}
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

              <BookOpen
                className="h-4 w-4 text-[#D4AF37]"
              />

              <span className="text-sm text-white/75">
                {trainingModes
                  .map((training) => training.mode.replace(" Training", ""))
                  .join(" • ")}
              </span>

          </div>

        </div>

        {/* Skills */}

        <div className="mt-8">

          <p
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.18em]
              text-white/40
            "
          >
            Key Skills
          </p>

          <div className="mt-4 flex flex-wrap gap-2">

            {course.skills.slice(0, 4).map((skill) => (

              <span
                key={skill}
                className="
                  rounded-full
                  border
                  border-[#D4AF37]/15
                  bg-[#D4AF37]/8
                  px-3
                  py-1.5
                  text-[13px]
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

        <div
          className="
            mt-10
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
        {/* Learning Journey */}

        <div
          className="
            mt-28
            overflow-hidden
            rounded-[40px]
            border
            border-[#D4AF37]/15
            bg-gradient-to-r
            from-[#D4AF37]/8
            via-[#D4AF37]/4
            to-transparent
            p-10
            lg:p-14
          "
        >

          <div className="grid gap-14 lg:grid-cols-[420px_1fr]">

            {/* Left */}

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
                Recommended Learning Journey
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
                Build Your Career
                <span className="block text-[#D4AF37]">
                  Step by Step
                </span>
              </h3>

              <p
                className="
                  mt-8
                  text-[18px]
                  leading-[2]
                  text-white/72
                "
              >
                Technology careers are built progressively. Rather
                than learning isolated tools, our structured learning
                paths help students develop strong networking
                fundamentals before advancing into enterprise cloud,
                cybersecurity and application delivery technologies.
              </p>

            </div>

            {/* Right */}

            <div className="grid gap-5">

              <JourneyStep
                step="01"
                title="Build Networking Fundamentals"
                description="Begin with Cisco CCNA to understand networking, routing, switching and enterprise infrastructure concepts."
              />

              <JourneyStep
                step="02"
                title="Advance Your Enterprise Skills"
                description="Continue with CCNP Enterprise and Cisco SD-WAN to master large-scale enterprise networking environments."
              />

              <JourneyStep
                step="03"
                title="Specialize in Cloud Computing"
                description="Expand into AWS and Microsoft Azure to build cloud infrastructure, networking and deployment expertise."
              />

              <JourneyStep
                step="04"
                title="Strengthen Cyber Security"
                description="Learn Palo Alto and Fortinet firewall technologies to secure enterprise networks and applications."
              />

              <JourneyStep
                step="05"
                title="Master Application Delivery"
                description="Complete your enterprise skill set with F5 BIG-IP load balancing and application delivery solutions."
              />

            </div>

          </div>

        </div>

type JourneyStepProps = {
  step: string;
  title: string;
  description: string;
};

function JourneyStep({
  step,
  title,
  description,
}: JourneyStepProps) {

  return (

    <div
      className="
        group
        flex
        gap-6
        rounded-[26px]
        border
        border-white/10
        bg-white/[0.03]
        p-6
        transition-all
        duration-300
        hover:border-[#D4AF37]/25
        hover:bg-white/[0.05]
      "
    >

      <div
        className="
          flex
          h-14
          w-14
          shrink-0
          items-center
          justify-center
          rounded-2xl
          bg-[#D4AF37]/10
          text-[20px]
          font-black
          text-[#D4AF37]
        "
      >
        {step}
      </div>

      <div>

        <h4
          className="
            text-[22px]
            font-bold
            leading-[1.3]
            text-white
          "
        >
          {title}
        </h4>

        <p
          className="
            mt-3
            text-[16px]
            leading-[1.9]
            text-white/68
          "
        >
          {description}
        </p>

      </div>

    </div>

  );

}