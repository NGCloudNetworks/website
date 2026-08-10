"use client";

import { useState } from "react";

import {
  ChevronDown,
  HelpCircle,
} from "lucide-react";

const academyFaqs = [
  {
    question:
      "What makes NG Cloud Networks different from other IT training institutes in Hyderabad?",
    answer:
      "NG Cloud Networks focuses on practical, job-oriented learning rather than theory alone. Every program combines live instructor-led sessions, enterprise lab practice, real-world implementation, career mentoring and placement assistance. Our objective is to help students develop practical skills that employers value while building the confidence required to succeed in technical interviews and professional IT roles.",
  },

  {
    question:
      "Do you provide online, classroom and hybrid training options?",
    answer:
      "Yes. Students can choose classroom training, live online instructor-led classes or hybrid learning based on their convenience. All training modes follow the same structured curriculum, practical exercises and mentoring approach to ensure a consistent learning experience regardless of location.",
  },

  {
    question:
      "Who can join your training programs?",
    answer:
      "Our programs are designed for engineering students, degree graduates, freshers, working professionals, career switchers and anyone looking to build practical skills in networking, cloud computing, cyber security or enterprise infrastructure technologies. Individual course prerequisites may vary depending on the learning path.",
  },

  {
    question:
      "Do I need previous IT experience before joining?",
    answer:
      "No. Many of our foundation-level programs are suitable for beginners with little or no prior IT experience. Training starts with fundamental concepts before progressing toward advanced enterprise technologies, allowing students to build knowledge in a structured and practical manner.",
  },

  {
    question:
      "Will I receive hands-on practical lab experience during training?",
    answer:
      "Absolutely. Practical learning is a core part of every program. Students work on enterprise-style lab exercises, configuration tasks, troubleshooting scenarios and guided implementations using technologies such as Cisco, AWS, Microsoft Azure, Palo Alto Networks, Fortinet, F5 and other industry-standard platforms where applicable.",
  },
  {
  question:
    "Do you provide placement assistance after course completion?",
  answer:
    "Yes. We provide 100% placement assistance to help students become job-ready. Our career support includes ATS-friendly resume building, LinkedIn profile optimization, technical mock interviews, HR interview guidance, career mentoring and job search support. While employment depends on individual performance, preparation and market opportunities, our team continues to guide students throughout the placement process."
},

{
  question:
    "Will I receive certification guidance during the training?",
  answer:
    "Yes. Our instructors provide guidance on relevant industry certifications, recommended preparation strategies, practical exam concepts and learning resources to help students confidently prepare for certification exams related to their chosen technology."
},

{
  question:
    "Which technologies can I learn at NG Cloud Networks?",
  answer:
    "Our training portfolio includes enterprise networking, cloud computing, cyber security and application delivery technologies. Students can learn Cisco CCNA, CCNP Enterprise, Cisco SD-WAN, AWS Cloud, Microsoft Azure, Palo Alto Networks, Fortinet FortiGate and F5 BIG-IP through practical instructor-led programs."
},

{
  question:
    "Which course should I start with if I am a beginner?",
  answer:
    "For most beginners interested in enterprise IT careers, Cisco CCNA provides an excellent foundation because networking concepts are used across cloud computing, cyber security and enterprise infrastructure. After mastering networking fundamentals, students can progress into specialized learning paths such as AWS, Microsoft Azure, Palo Alto Networks, Fortinet or F5 based on their career goals."
},

{
  question:
    "Can working professionals attend your training programs?",
  answer:
    "Yes. Many of our learners are working professionals looking to upskill or transition into new technology domains. We offer flexible batch schedules, including weekday, evening and weekend options, allowing professionals to continue learning without interrupting their work commitments."
}
];

export default function CoursesFaq() {

  const [openIndex, setOpenIndex] =
    useState<number>(0);

  return (

    <section className="relative overflow-hidden py-12">

      {/* Background */}

      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute left-[-220px] top-[-120px] h-[460px] w-[460px] rounded-full bg-[#D4AF37]/10 blur-[180px]" />

        <div className="absolute right-[-220px] bottom-[-120px] h-[460px] w-[460px] rounded-full bg-[#D4AF37]/8 blur-[180px]" />

      </div>

      <div className="relative z-10 mx-auto max-w-[1100px] px-5">

        {/* Heading */}

        <div className="mx-auto max-w-[900px] text-center">

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

            <HelpCircle className="h-4 w-4" />

            Frequently Asked Questions

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
            Everything You Need to Know
            <span className="block text-[#D4AF37]">
              Before Starting Your IT Journey
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-8
              max-w-[850px]
              text-[18px]
              leading-[2]
              text-white/68
            "
          >
            Choosing the right training institute is an important career
            decision. Below are answers to some of the most frequently
            asked questions about our training methodology, learning
            experience, practical labs, career guidance and placement
            assistance to help you make an informed decision.
          </p>

        </div>

        {/* FAQ List */}

        <div className="mt-20 space-y-5">

          {academyFaqs.map((faq, index) => {

            const isOpen = openIndex === index;

            return (

              <div
                key={faq.question}
                className="
                  overflow-hidden
                  rounded-[24px]
                  border
                  border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl
                  transition-all
                  duration-300
                "
              >                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(
                      isOpen ? -1 : index
                    )
                  }
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-6
                    px-8
                    py-7
                    text-left
                  "
                >

                  <h3
                    className="
                      text-[20px]
                      font-bold
                      leading-[1.5]
                      text-white
                    "
                  >
                    {faq.question}
                  </h3>

                  <div
                    className={`
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#D4AF37]/10
                      transition-transform
                      duration-300
                      ${
                        isOpen
                          ? "rotate-180"
                          : ""
                      }
                    `}
                  >

                    <ChevronDown
                      className="
                        h-5
                        w-5
                        text-[#D4AF37]
                      "
                    />

                  </div>

                </button>

                <div
                  className={`
                    grid
                    transition-all
                    duration-500
                    ease-in-out
                    ${
                      isOpen
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                    }
                  `}
                >

                  <div className="overflow-hidden">

                    <div
                      className="
                        border-t
                        border-white/10
                        px-8
                        pb-8
                        pt-6
                      "
                    >

                      <p
                        className="
                          text-[17px]
                          leading-[2]
                          text-white/68
                        "
                      >
                        {faq.answer}
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            );

          })}

        </div>

      </div>

    </section>

  );

}