"use client";

import { useState } from "react";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import {
  Minus,
  Plus,
} from "lucide-react";

const faqs = [
  {
    question: "Which is the best cloud and networking training institute in Hyderabad?",
    answer:
      "NG Cloud Networks provides enterprise-focused cloud, networking and cybersecurity training with practical labs, certification guidance and placement-oriented mentorship for students and working professionals.",
  },
  {
    question: "Do you provide practical real-time lab training?",
    answer:
      "Yes. Students gain hands-on experience through enterprise-level networking, firewall and cloud lab environments designed around real-world implementation scenarios.",
  },
  {
    question: "Can beginners join AWS, Azure and networking courses?",
    answer:
      "Absolutely. Our training programs are designed for both beginners and experienced IT professionals with structured learning paths and mentor guidance.",
  },
  {
    question: "Do you provide placement assistance after course completion?",
    answer:
      "Yes. We provide placement-focused support including resume optimization, mock interviews, career mentorship and interview preparation sessions.",
  },
  {
    question: "Which course is best for cybersecurity careers?",
    answer:
      "Programs such as Palo Alto Firewall, Fortigate Firewall, AWS Cloud Security and Azure Security are excellent choices for students planning careers in cybersecurity and cloud protection.",
  },
];

export default function CoursesFaq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden py-28">

      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="absolute left-[-120px] top-[0px] h-[420px] w-[420px] bg-[#D4AF37]/5 blur-[130px]" />

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
              Frequently Asked Questions
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
            Common Questions About

            <span className="block text-[#D4AF37]">
              Our Training Programs
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
            Find answers to frequently asked questions about
            our networking, cloud and cybersecurity training,
            certification preparation and placement support.
          </p>

        </div>

        {/* FAQ LIST */}
        <div className="mx-auto mt-20 max-w-[1000px] space-y-6">

          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={index}
                layout
                transition={{ duration: 0.3 }}
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-[32px]
                  border
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  ${
                    isActive
                      ? "border-[#D4AF37]/30 bg-[#D4AF37]/[0.04]"
                      : "border-white/10 bg-white/[0.03]"
                  }
                `}
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

                {/* QUESTION */}
                <button
                  onClick={() => toggleFaq(index)}
                  className="
                    relative
                    z-10
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-6
                    px-8
                    py-8
                    text-left
                  "
                >

                  <h3
                    className="
                      text-[22px]
                      font-bold
                      leading-[1.5]
                      tracking-[-0.02em]
                      text-white
                    "
                  >
                    {faq.question}
                  </h3>

                  {/* ICON */}
                  <div
                    className={`
                      flex
                      h-[52px]
                      w-[52px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-2xl
                      transition-all
                      duration-300
                      ${
                        isActive
                          ? "bg-[#D4AF37] text-black"
                          : "border border-white/10 bg-white/[0.03] text-white"
                      }
                    `}
                  >

                    {isActive ? (
                      <Minus className="h-5 w-5" />
                    ) : (
                      <Plus className="h-5 w-5" />
                    )}

                  </div>

                </button>

                {/* ANSWER */}
                <AnimatePresence>

                  {isActive && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >

                      <div className="px-8 pb-8 pr-24">

                        <p
                          className="
                            text-[16px]
                            leading-[1.9]
                            text-white/60
                          "
                        >
                          {faq.answer}
                        </p>

                      </div>

                    </motion.div>
                  )}

                </AnimatePresence>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}