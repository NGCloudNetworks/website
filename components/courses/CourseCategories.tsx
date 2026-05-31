"use client";

import Link from "next/link";

import {
  Cloud,
  Network,
  ShieldCheck,
  Server,
  ArrowUpRight,
} from "lucide-react";

const categories = [
  {
    title: "Networking Courses",
    description:
      "Build strong enterprise networking skills with routing, switching and infrastructure technologies used in modern IT environments.",
    icon: Network,
    courses: [
      {
        name: "CCNA Routing & Switching",
        href: "/courses/ccna-training-hyderabad",
      },
      {
        name: "CCNP Enterprise",
        href: "/courses/ccnp-enterprise-training-hyderabad",
      },
      {
        name: "CCNP Core",
        href: "/courses/ccnp-core-training-hyderabad",
      },
    ],
  },
  {
    title: "Firewall & Security",
    description:
      "Learn enterprise firewall implementation, threat prevention and security infrastructure management with practical labs.",
    icon: ShieldCheck,
    courses: [
      {
        name: "Palo Alto Firewall",
        href: "/courses/palo-alto-firewall-training-hyderabad",
      },
      {
        name: "Fortigate Firewall",
        href: "/courses/fortigate-firewall-training-hyderabad",
      },
      {
        name: "F5 LTM & GTM",
        href: "/courses/f5-load-balancer-training-hyderabad",
      },
    ],
  },
  {
    title: "Cloud Computing",
    description:
      "Master cloud infrastructure, deployment and administration with industry-focused AWS and Azure training programs.",
    icon: Cloud,
    courses: [
      {
        name: "AWS Cloud",
        href: "/courses/aws-training-hyderabad",
      },
      {
        name: "Azure Cloud",
        href: "/courses/azure-cloud-training-hyderabad",
      },
      {
        name: "Cloud Security",
        href: "/courses/cloud-security-training-hyderabad",
      },
    ],
  },
];

export default function CourseCategories() {
  return (
    <section className="relative overflow-hidden py-28">

      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="absolute left-[-120px] bottom-[-120px] h-[420px] w-[420px] bg-[#D4AF37]/5 blur-[130px]" />

      </div>

      {/* CONTAINER */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-5">

        {/* HEADER */}
        <div className="max-w-[850px]">

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
            "
          >

            <div className="h-2 w-2 rounded-full bg-[#D4AF37]" />

            <span className="text-sm text-[#f5e6b3]">
              Training Categories
            </span>

          </div>

          {/* TITLE */}
          <h2
            className="
              mt-8
              text-[42px]
              font-black
              leading-[1]
              tracking-[-0.04em]
              text-white
              md:text-[58px]
              lg:text-[72px]
            "
          >
            Explore Our

            <span className="block text-[#D4AF37]">
              Specialized Training Programs
            </span>

          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              mt-7
              max-w-[760px]
              text-[19px]
              leading-[1.8]
              text-white/60
            "
          >
            Choose from industry-focused networking,
            cloud and cybersecurity programs designed
            with enterprise-level practical training
            and certification guidance.
          </p>

        </div>

        {/* GRID */}
        <div className="mt-20 grid gap-7 lg:grid-cols-3">

          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <div
                key={index}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[34px]
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-8
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-[#D4AF37]/30
                  hover:bg-[#D4AF37]/[0.03]
                "
              >

                {/* HOVER LIGHT */}
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

                {/* ICON */}
                <div
                  className="
                    relative
                    flex
                    h-[74px]
                    w-[74px]
                    items-center
                    justify-center
                    rounded-[24px]
                    border
                    border-[#D4AF37]/20
                    bg-[#D4AF37]/10
                  "
                >

                  <Icon className="h-8 w-8 text-[#D4AF37]" />

                </div>

                {/* CONTENT */}
                <div className="relative mt-8">

                  <h3
                    className="
                      text-[30px]
                      font-bold
                      leading-[1.15]
                      tracking-[-0.03em]
                      text-white
                    "
                  >
                    {category.title}
                  </h3>

                  <p
                    className="
                      mt-5
                      text-[16px]
                      leading-[1.9]
                      text-white/55
                    "
                  >
                    {category.description}
                  </p>

                </div>

                {/* COURSES */}
                <div className="relative mt-10 space-y-4">

                  {category.courses.map((course, courseIndex) => (
                    <Link
                      key={courseIndex}
                      href={course.href}
                      className="
                        group/item
                        flex
                        items-center
                        justify-between
                        rounded-2xl
                        border
                        border-white/10
                        bg-black/20
                        px-5
                        py-4
                        transition-all
                        duration-300
                        hover:border-[#D4AF37]/30
                        hover:bg-[#D4AF37]/[0.04]
                      "
                    >

                      <span
                        className="
                          text-[15px]
                          font-medium
                          text-white/80
                          transition-colors
                          duration-300
                          group-hover/item:text-white
                        "
                      >
                        {course.name}
                      </span>

                      <ArrowUpRight
                        className="
                          h-4
                          w-4
                          text-[#D4AF37]
                          opacity-0
                          translate-x-1
                          transition-all
                          duration-300
                          group-hover/item:translate-x-0
                          group-hover/item:opacity-100
                        "
                      />

                    </Link>
                  ))}

                </div>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}