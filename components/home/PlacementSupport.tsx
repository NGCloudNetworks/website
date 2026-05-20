"use client";

import { motion } from "framer-motion";

import {
  FileText,
  GraduationCap,
  BriefcaseBusiness,
  Users,
  ArrowUpRight,
} from "lucide-react";

const placementSteps = [
  {
    title: "Professional Resume Strategy",
    description:
      "Build modern ATS-friendly resumes designed specifically for cloud, networking and cybersecurity roles.",
    icon: FileText,
  },
  {
    title: "Real-Time Interview Preparation",
    description:
      "Technical mock interviews, HR sessions and communication coaching to improve interview confidence.",
    icon: Users,
  },
  {
    title: "1:1 Career Guidance",
    description:
      "Receive mentorship from experienced professionals to choose the right technology and career direction.",
    icon: GraduationCap,
  },
  {
    title: "Placement & Hiring Support",
    description:
      "Get assistance with hiring drives, job applications, interview scheduling and career opportunities.",
    icon: BriefcaseBusiness,
  },
];

export default function PlacementSupport() {
  return (
    <section className="relative overflow-hidden py-28">

      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="absolute left-[-120px] top-[100px] h-[420px] w-[420px] bg-[#D4AF37]/5 blur-[130px]" />

        <div className="absolute right-[-120px] bottom-[-120px] h-[420px] w-[420px] bg-[#D4AF37]/5 blur-[130px]" />

      </div>

      {/* CONTAINER */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-5">

        <div className="grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr]">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-[650px]"
          >

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
                Placement & Career Support
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
              Build a

              <span className="block text-[#D4AF37]">
                Successful IT Career
              </span>

            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                mt-8
                text-[19px]
                leading-[1.8]
                text-white/60
              "
            >
              Beyond technical training, we prepare students for
              real-world careers through mentorship, interview preparation,
              resume optimization and placement-focused guidance.
            </p>

            {/* STATS */}
            <div className="mt-12 grid grid-cols-2 gap-6">

              {/* CARD */}
              <div
                className="
                  rounded-[28px]
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-7
                  backdrop-blur-xl
                "
              >

                <h3 className="text-5xl font-black text-[#D4AF37]">
                  1000+
                </h3>

                <p className="mt-3 text-white/55 leading-relaxed">
                  Students placed in cloud, networking
                  and security careers.
                </p>

              </div>

              {/* CARD */}
              <div
                className="
                  rounded-[28px]
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-7
                  backdrop-blur-xl
                "
              >

                <h3 className="text-5xl font-black text-[#D4AF37]">
                  95%
                </h3>

                <p className="mt-3 text-white/55 leading-relaxed">
                  Student satisfaction with training,
                  mentorship and support programs.
                </p>

              </div>

            </div>

          </motion.div>

          {/* RIGHT GRID */}
          <div className="grid gap-7 sm:grid-cols-2">

            {placementSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  viewport={{ once: true }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[32px]
                    border
                    border-white/10
                    bg-white/[0.03]
                    p-8
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:border-[#D4AF37]/30
                    hover:bg-[#D4AF37]/[0.04]
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

                  {/* TOP */}
                  <div className="relative flex items-start justify-between">

                    {/* ICON */}
                    <div
                      className="
                        flex
                        h-[72px]
                        w-[72px]
                        items-center
                        justify-center
                        rounded-[22px]
                        border
                        border-[#D4AF37]/20
                        bg-[#D4AF37]/10
                      "
                    >

                      <Icon className="h-8 w-8 text-[#D4AF37]" />

                    </div>

                    {/* ARROW */}
                    <div
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/10
                        bg-white/[0.03]
                        opacity-0
                        translate-x-2
                        transition-all
                        duration-500
                        group-hover:translate-x-0
                        group-hover:opacity-100
                      "
                    >

                      <ArrowUpRight className="h-5 w-5 text-[#D4AF37]" />

                    </div>

                  </div>

                  {/* CONTENT */}
                  <div className="relative mt-8">

                    <h3
                      className="
                        text-[28px]
                        font-bold
                        leading-[1.15]
                        tracking-[-0.03em]
                        text-white
                      "
                    >
                      {step.title}
                    </h3>

                    <p
                      className="
                        mt-5
                        text-[16px]
                        leading-[1.8]
                        text-white/55
                      "
                    >
                      {step.description}
                    </p>

                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
}