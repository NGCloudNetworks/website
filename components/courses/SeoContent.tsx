import { BookOpen } from "lucide-react";

import { Course } from "@/types/course";

type Props = {
  course: Course;
};

export default function SeoContent({
  course,
}: Props) {

  return (

    <section className="relative py-12">

      {/* Background */}

      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute left-[-220px] top-0 h-[420px] w-[420px] rounded-full bg-[#D4AF37]/8 blur-[180px]" />

        <div className="absolute right-[-220px] bottom-0 h-[420px] w-[420px] rounded-full bg-[#D4AF37]/6 blur-[180px]" />

      </div>

      <div className="relative z-10 mx-auto max-w-[980px] px-5">

        {/* Heading */}

        <div className="text-center">

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

            <BookOpen className="h-4 w-4" />

            Complete Course Guide

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
            Everything About
            <span className="block text-[#D4AF37]">
              {course.title}
            </span>
          </h2>

        </div>

        {/* Introduction */}

        <div className="mt-16">

          <p
            className="
    text-[19px]
    leading-[2.1]
    text-white/75
  "
            dangerouslySetInnerHTML={{ __html: course.seoContent.introduction }}
          />

        </div>

        {/* Sections */}

        <div className="mt-24 space-y-24">

          {course.seoContent.sections.map((section) => (

            <article
              key={section.heading}
            >

              <h3
                className="
                  text-[36px]
                  font-black
                  leading-[1.15]
                  tracking-[-0.03em]
                  text-white
                "
              >
                {section.heading}
              </h3>

              <div className="mt-10 space-y-8">

                {section.paragraphs.map((paragraph) => (

                  <p
                    key={paragraph}
                    className="
      text-[18px]
      leading-[2.05]
      text-white/72
    "
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                  />

                ))}

              </div>

            </article>

          ))}

        </div>
        {/* Conclusion */}

        <div className="mt-24">

          <div
            className="
              overflow-hidden
              rounded-[36px]
              border
              border-[#D4AF37]/15
              bg-[#D4AF37]/[0.05]
              p-12
            "
          >

            <div className="mx-auto max-w-[850px]">

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

                <BookOpen className="h-4 w-4" />

                Final Thoughts

              </div>

              <h3
                className="
                  mt-8
                  text-[42px]
                  font-black
                  leading-[1]
                  tracking-[-0.04em]
                  text-white
                "
              >
                Build Skills That
                <span className="block text-[#D4AF37]">
                  Last Throughout Your Career
                </span>
              </h3>

              <p
                className="
    mt-8
    text-[19px]
    leading-[2.05]
    text-white/72
  "
                dangerouslySetInnerHTML={{ __html: course.seoContent.conclusion }}
              />

            </div>

          </div>

        </div>

        {/* Knowledge Note */}

        <div
          className="
            mt-20
            rounded-[28px]
            border-l-4
            border-[#D4AF37]
            bg-[#D4AF37]/5
            px-8
            py-8
          "
        >

          <h4
            className="
              text-[24px]
              font-bold
              tracking-[-0.02em]
              text-white
            "
          >
            Why This Course Matters
          </h4>

          <p
            className="
              mt-5
              text-[17px]
              leading-[2]
              text-white/70
            "
          >
            Technology evolves rapidly, but strong fundamentals remain
            valuable throughout an IT career. Whether you plan to work in
            networking, cloud computing, cybersecurity, infrastructure,
            DevOps or enterprise architecture, the knowledge you build
            here forms the foundation for understanding how modern IT
            systems communicate, perform and remain secure. Investing in
            practical skills today creates opportunities that continue to
            grow as technology advances.
          </p>

        </div>

      </div>

    </section>

  );

}