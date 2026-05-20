"use client";

import { motion } from "framer-motion";

import {
  BriefcaseBusiness,
  BadgeCheck,
  MonitorCog,
  Users,
  ArrowUpRight,
} from "lucide-react";

const features = [
  {
    title: "Enterprise Lab Infrastructure",
    description:
      "Train in real-world enterprise lab environments designed to simulate modern networking, cloud and security infrastructures. Students gain practical exposure to routing, switching, firewall configuration, cloud deployment and troubleshooting scenarios used in real IT environments.",
    icon: MonitorCog,
  },
  {
    title: "Corporate Industry Trainers",
    description:
      "Learn directly from experienced professionals working in networking, cloud and cybersecurity domains. Our trainers focus on practical implementation, real-time troubleshooting, interview preparation and industry best practices instead of only theoretical learning.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Career & Placement Support",
    description:
      "We help students become industry-ready through resume optimization, LinkedIn profile building, mock interviews, technical mentorship and placement-focused preparation programs tailored for networking and cloud engineering careers.",
    icon: Users,
  },
  {
    title: "Global Certification Guidance",
    description:
      "Receive complete support for globally recognized certifications including CCNA, CCNP, AWS, Azure, Palo Alto and cloud security programs. Our structured training approach helps students prepare confidently for certification exams and real-world implementation.",
    icon: BadgeCheck,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden py-28">

      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="absolute left-[-120px] bottom-[-120px] h-[420px] w-[420px] bg-[#D4AF37]/5 blur-[130px]" />

        <div className="absolute right-[-120px] top-[-120px] h-[420px] w-[420px] bg-[#D4AF37]/5 blur-[130px]" />

      </div>

      {/* CONTAINER */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-5">

        {/* HEADER */}
        <div className="max-w-[820px]">

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
              Why NG Cloud Networks
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
            Built for

            <span className="block text-[#D4AF37]">
              Future IT Professionals
            </span>

          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              mt-8
              max-w-[760px]
              text-[19px]
              leading-[1.8]
              text-white/60
            "
          >
            NG Cloud Networks combines enterprise-level infrastructure,
            practical implementation training and career-focused mentorship
            to prepare students for real-world cloud, networking and
            cybersecurity careers.
          </p>

        </div>

        {/* GRID */}
        <div className="mt-20 grid gap-7 md:grid-cols-2">

          {features.map((feature, index) => {
            const Icon = feature.icon;

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
                  p-9
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
                      text-[30px]
                      font-bold
                      leading-[1.15]
                      tracking-[-0.03em]
                      text-white
                    "
                  >
                    {feature.title}
                  </h3>

                  <p
                    className="
                      mt-6
                      text-[16px]
                      leading-[1.9]
                      text-white/55
                    "
                  >
                    {feature.description}
                  </p>

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}