"use client";

import { motion } from "framer-motion";

import {
  Star,
  Quote,
} from "lucide-react";

const testimonials = [
  {
    name: "Rahul Kumar",
    role: "AWS Cloud Engineer",
    review:
      "The training at NG Cloud Networks completely changed my confidence level. The practical AWS labs, real-time implementation sessions and interview preparation helped me successfully transition into a cloud engineering role.",
  },
  {
    name: "Sai Teja",
    role: "Network Engineer",
    review:
      "The CCNA and enterprise networking training was highly practical and industry-focused. The mentors explained real-world networking scenarios clearly and the placement guidance helped me crack interviews confidently.",
  },
  {
    name: "Akhil Reddy",
    role: "Security Analyst",
    review:
      "The firewall and cloud security training gave me strong practical exposure to enterprise security environments. The hands-on approach and mentor support made learning much more effective than traditional institutes.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden py-28">

      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="absolute right-[-120px] top-[-120px] h-[420px] w-[420px] bg-[#D4AF37]/5 blur-[130px]" />

        <div className="absolute left-[-120px] bottom-[-120px] h-[420px] w-[420px] bg-[#D4AF37]/5 blur-[130px]" />

      </div>

      {/* CONTAINER */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-5">

        {/* HEADER */}
        <div className="mx-auto max-w-[900px] text-center">

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
              Student Success Stories
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
            What Our

            <span className="block text-[#D4AF37]">
              Students Say
            </span>

          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              mx-auto
              mt-7
              max-w-[760px]
              text-[19px]
              leading-[1.8]
              text-white/60
            "
          >
            Hear from students who transformed their careers through
            our enterprise cloud, networking and cybersecurity training programs.
          </p>

        </div>

        {/* TESTIMONIAL GRID */}
        <div className="mt-20 grid gap-7 lg:grid-cols-3">

          {testimonials.map((item, index) => (
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

              {/* CONTENT */}
              <div className="relative">

                {/* TOP */}
                <div className="flex items-start justify-between">

                  {/* STARS */}
                  <div className="flex items-center gap-1">

                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="
                          h-5
                          w-5
                          fill-[#D4AF37]
                          text-[#D4AF37]
                        "
                      />
                    ))}

                  </div>

                  {/* QUOTE */}
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#D4AF37]/20
                      bg-[#D4AF37]/10
                    "
                  >

                    <Quote className="h-5 w-5 text-[#D4AF37]" />

                  </div>

                </div>

                {/* REVIEW */}
                <p
                  className="
                    mt-8
                    text-[16px]
                    leading-[1.9]
                    text-white/60
                  "
                >
                  “{item.review}”
                </p>

                {/* USER */}
                <div className="mt-10 border-t border-white/10 pt-6">

                  <h3
                    className="
                      text-[22px]
                      font-bold
                      tracking-[-0.03em]
                      text-white
                    "
                  >
                    {item.name}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-[14px]
                      font-medium
                      tracking-wide
                      text-[#D4AF37]
                    "
                  >
                    {item.role}
                  </p>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}