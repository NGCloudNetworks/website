"use client";

import { useState } from "react";

import {
    ChevronDown,
    HelpCircle,
    MessageCircle,
} from "lucide-react";

import { Course } from "@/types/course";

type Props = {
    course: Course;
};

export default function FAQSection({
    course,
}: Props) {

    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index: number) => {

        setOpenIndex((current) =>
            current === index ? -1 : index
        );

    };

    return (

        <section className="relative overflow-hidden py-14">

            {/* Background */}

            <div className="absolute inset-0 pointer-events-none">

                <div className="absolute left-[-220px] top-[-120px] h-[460px] w-[460px] rounded-full bg-[#D4AF37]/10 blur-[180px]" />

                <div className="absolute right-[-220px] bottom-[-120px] h-[460px] w-[460px] rounded-full bg-[#D4AF37]/8 blur-[180px]" />

            </div>

            <div className="relative z-10 mx-auto max-w-[1250px] px-5">

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
                        Everything You Need
                        <span className="block text-[#D4AF37]">
                            To Know
                        </span>
                    </h2>

                    <p
                        className="
              mx-auto
              mt-8
              max-w-[860px]
              text-[18px]
              leading-[2]
              text-white/65
            "
                    >
                        Find answers to the most common questions about our
                        training program, certification guidance, practical
                        labs, placements, learning methodology and career
                        support. If you still have questions, our team is
                        always happy to help.
                    </p>

                </div>

                {/* FAQ List */}

                <div className="mt-20 space-y-5">

                    {course.faqs.map((faq, index) => (

                        <FAQItem
                            key={faq.question}
                            faq={faq}
                            index={index}
                            isOpen={openIndex === index}
                            onToggle={() => toggleFAQ(index)}
                        />

                    ))}

                </div>

                {/* Still Have Questions */}

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

                    <div className="grid gap-12 lg:grid-cols-[380px_1fr]">

                        <div>

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
                  text-[#D4AF37]
                "
                            >

                                <MessageCircle className="h-4 w-4" />

                                Need More Help?

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
                                Still Have
                                <span className="block text-[#D4AF37]">
                                    Questions?
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
                                Every learner has different goals and experience
                                levels. Whether you're choosing your first IT
                                certification, planning a career transition or
                                looking for advanced networking training, our
                                counselors can help you select the right learning
                                path and answer all your questions.
                            </p>

                            <div className="mt-10 grid gap-2 md:grid-cols-2">            
                                  <SupportPoint text="Free Career Guidance" />

                                <SupportPoint text="Course Selection Assistance" />

                                <SupportPoint text="Batch & Schedule Support" />

                                <SupportPoint text="Placement & Career Advice" />

                            </div>

                        </div>

                    </div>

                </div>
            </div>

        </section>

    );

}

type FAQItemProps = {
    faq: {
        question: string;
        answer: string;
    };
    index: number;
    isOpen: boolean;
    onToggle: () => void;
};

function FAQItem({
    faq,
    index,
    isOpen,
    onToggle,
}: FAQItemProps) {

    return (

        <article
            className="
        overflow-hidden
        rounded-[28px]
        border
        transition-all
        duration-300
        backdrop-blur-xl
        bg-white/[0.03]
        border-white/10
      "
        >

            <button
                type="button"
                onClick={onToggle}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${index}`}
                id={`faq-button-${index}`}
                className="
          flex
          w-full
          items-center
          justify-between
          gap-6
          p-8
          text-left
          transition-colors
          duration-300
          hover:bg-white/[0.02]
          focus:outline-none
          focus:ring-2
          focus:ring-[#D4AF37]
          focus:ring-offset-2
          focus:ring-offset-[#050505]
        "
            >

                <div className="flex items-start gap-5">

                    <div
                        className="
              mt-1
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-[#D4AF37]/10
              shrink-0
            "
                    >

                        <HelpCircle className="h-6 w-6 text-[#D4AF37]" />

                    </div>

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

                </div>

                <div
                    className={`
            flex
            h-12
            w-12
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-[#D4AF37]/10
            transition-transform
            duration-300
            ${isOpen ? "rotate-180" : ""}
          `}
                >

                    <ChevronDown className="h-5 w-5 text-[#D4AF37]" />

                </div>

            </button>

            <div
                id={`faq-panel-${index}`}
                role="region"
                aria-labelledby={`faq-button-${index}`}
                className={`
          grid
          transition-all
          duration-500
          ease-in-out
          ${isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
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

                        <div className="ml-[68px]">

                            <p
                                className="
                  text-[17px]
                  leading-[2]
                  text-white/70
                "
                            >
                                {faq.answer}
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </article>

    );

}

function SupportPoint({
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

                <MessageCircle
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