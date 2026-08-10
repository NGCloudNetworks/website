import {
  BadgeCheck,
  CheckCircle2,
  Clock3,
  GraduationCap,
  Users,
} from "lucide-react";

import { Course } from "@/types/course";
import { trainingComparison } from "@/data/academy";

type Props = {
  course: Course;
};

export default function CourseFeeSection({
  course,
}: Props) {
  return (
    <section
      id="course-fee"
      aria-labelledby="course-fee-heading"
      className="relative overflow-hidden py-20 md:py-24"
    >

      {/* Background */}

      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute left-[-180px] top-[-120px] h-[420px] w-[420px] rounded-full bg-[#D4AF37]/7 blur-[180px]" />

        <div className="absolute right-[-180px] bottom-[-120px] h-[420px] w-[420px] rounded-full bg-[#D4AF37]/6 blur-[180px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-5">

        {/* =========================================
            HEADER
        ========================================= */}

        <header className="mx-auto max-w-[850px] text-center">

          <span
            className="
              inline-flex
              items-center
              gap-2
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
            Course Fee & Enrollment
          </span>

          <h2
            id="course-fee-heading"
            className="
              mt-6
              text-[40px]
              font-black
              leading-[1]
              tracking-[-0.04em]
              text-white
              md:text-[56px]
            "
          >
            {course.title}
            <span className="block text-[#D4AF37]">
              Course Fee
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-[820px]
              text-[17px]
              leading-[1.9]
              text-white/70
            "
          >
            {course.priceDescription}
          </p>

        </header>

        {/* =========================================
            PRICE
        ========================================= */}

        <div className="mx-auto mt-12 max-w-[820px]">

          <div
            className="
              rounded-[28px]
              border
              border-[#D4AF37]/20
              bg-[#D4AF37]/[0.05]
              p-7
              md:p-9
            "
          >

            <div
              className="
                flex
                flex-col
                gap-8
                md:flex-row
                md:items-center
                md:justify-between
              "
            >

              <div>

                <p
                  className="
                    text-sm
                    font-semibold
                    uppercase
                    tracking-[0.14em]
                    text-[#D4AF37]
                  "
                >
                  Course Investment
                </p>

                <p
                  className="
                    mt-3
                    text-[42px]
                    font-black
                    tracking-[-0.04em]
                    text-white
                    md:text-[50px]
                  "
                >
                  {course.price}
                </p>

                <p className="mt-2 text-sm text-white/50">
                  Course fee shown above is the current published
                  training fee.
                </p>

              </div>

              <a
                href="/contact"
                className="
                  inline-flex
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#D4AF37]
                  px-7
                  py-3.5
                  text-[15px]
                  font-bold
                  text-black
                  transition-all
                  duration-300
                  hover:bg-[#E7C75A]
                "
              >
                Enquire About Enrollment
              </a>

            </div>

            {/* Course Facts */}

            <dl
              className="
                mt-8
                grid
                gap-5
                border-t
                border-white/10
                pt-7
                sm:grid-cols-3
              "
            >

              <CourseFact
                icon={<Clock3 className="h-5 w-5" />}
                label="Duration"
                value={course.duration}
              />

              <CourseFact
                icon={<GraduationCap className="h-5 w-5" />}
                label="Training"
                value="Live & Practical"
              />

              <CourseFact
                icon={<Users className="h-5 w-5" />}
                label="Batch Size"
                value="Maximum 10 Students"
              />

            </dl>

          </div>

        </div>

        {/* =========================================
            WHAT'S INCLUDED
        ========================================= */}

        <div className="mx-auto mt-16 max-w-[1100px]">

          <div className="flex items-center gap-3">

            <BadgeCheck
              className="h-5 w-5 text-[#D4AF37]"
              aria-hidden="true"
            />

            <h3 className="text-[24px] font-bold text-white">
              What's Included in This Course Fee?
            </h3>

          </div>

          <ul
            className="
              mt-7
              grid
              gap-x-12
              gap-y-4
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >

            {course.includedFeatures.map((feature) => (

              <li
                key={feature}
                className="
                  flex
                  items-start
                  gap-3
                  border-b
                  border-white/10
                  pb-4
                  text-[15px]
                  leading-[1.7]
                  text-white/75
                "
              >

                <CheckCircle2
                  className="
                    mt-0.5
                    h-5
                    w-5
                    shrink-0
                    text-[#D4AF37]
                  "
                  aria-hidden="true"
                />

                <span>{feature}</span>

              </li>

            ))}

          </ul>

        </div>

        {/* =========================================
            COMPARISON
        ========================================= */}

        <div className="mx-auto mt-20 max-w-[1100px]">

          <header className="max-w-[780px]">

            <h3
              className="
                text-[28px]
                font-black
                tracking-[-0.03em]
                text-white
              "
            >
              Why Choose NG Cloud Networks?
            </h3>

            <p
              className="
                mt-3
                text-[16px]
                leading-[1.8]
                text-white/62
              "
            >
              Compare the training experience and support included
              with NG Cloud Networks against features that may vary
              across training providers.
            </p>

          </header>

          {/* Desktop Table */}

          <div className="mt-8 hidden overflow-hidden rounded-2xl border border-white/10 md:block">

            <table className="w-full border-collapse text-left">

              <caption className="sr-only">
                Training feature comparison for {course.title}
              </caption>

              <thead>
                <tr className="border-b border-white/10 bg-white/[0.03]">

                  <th
                    scope="col"
                    className="px-6 py-4 text-sm font-semibold text-white/60"
                  >
                    Training Feature
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-4 text-sm font-semibold text-[#D4AF37]"
                  >
                    NG Cloud Networks
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-4 text-sm font-semibold text-white/60"
                  >
                    Common Industry Approach
                  </th>

                </tr>
              </thead>

              <tbody>

                {trainingComparison.map((item) => (

                  <tr
                    key={item.feature}
                    className="border-b border-white/10 last:border-b-0"
                  >

                    <th
                      scope="row"
                      className="px-6 py-4 text-sm font-medium text-white/80"
                    >
                      {item.feature}
                    </th>

                    <td
                      className="px-6 py-4 text-sm font-semibold text-[#D4AF37]"
                    >
                      {item.ngCloud}
                    </td>

                    <td
                      className="px-6 py-4 text-sm text-white/55"
                    >
                      {item.industry}
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

          {/* Mobile Comparison */}

          <div className="mt-8 space-y-3 md:hidden">

            {trainingComparison.map((item) => (

              <div
                key={item.feature}
                className="
                  rounded-xl
                  border
                  border-white/10
                  px-4
                  py-4
                "
              >

                <p className="text-sm font-semibold text-white">
                  {item.feature}
                </p>

                <div className="mt-3 flex flex-col gap-1 text-sm">

                  <span className="font-semibold text-[#D4AF37]">
                    NG Cloud Networks: {item.ngCloud}
                  </span>

                  <span className="text-white/45">
                    Common industry approach: {item.industry}
                  </span>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* =========================================
            PRICING FAQ
        ========================================= */}

        {course.pricingFaqs.length > 0 && (

          <div className="mx-auto mt-20 max-w-[900px]">

            <header>

              <h3
                className="
                  text-[28px]
                  font-black
                  tracking-[-0.03em]
                  text-white
                "
              >
                {course.title} Fee FAQs
              </h3>

            </header>

            <div className="mt-7 divide-y divide-white/10">

              {course.pricingFaqs.map((faq) => (

                <details
                  key={faq.question}
                  className="group py-5"
                >

                  <summary
                    className="
                      cursor-pointer
                      list-none
                      pr-8
                      text-[16px]
                      font-semibold
                      text-white
                      marker:hidden
                    "
                  >
                    {faq.question}
                  </summary>

                  <p
                    className="
                      mt-3
                      max-w-[820px]
                      text-[15px]
                      leading-[1.8]
                      text-white/65
                    "
                  >
                    {faq.answer}
                  </p>

                </details>

              ))}

            </div>

          </div>

        )}

      </div>

    </section>
  );
}


/* =========================================
   COURSE FACT
========================================= */

function CourseFact({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3">

      <span
        className="
          flex
          h-9
          w-9
          shrink-0
          items-center
          justify-center
          rounded-lg
          bg-[#D4AF37]/10
          text-[#D4AF37]
        "
        aria-hidden="true"
      >
        {icon}
      </span>

      <div>

        <dt className="text-xs text-white/45">
          {label}
        </dt>

        <dd className="mt-1 text-sm font-semibold text-white">
          {value}
        </dd>

      </div>

    </div>
  );
}