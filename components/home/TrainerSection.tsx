import {
  Award,
  BadgeCheck,
  GraduationCap,
  User2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

import { trainer } from "@/data/academy";

export default function TrainerSection({ emitSchema = true }: { emitSchema?: boolean }) {
  const trainerSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://www.ngcloudnetworks.com/#trainer-nazeer-basha",
    name: trainer.name,
    jobTitle: trainer.designation,
    description: trainer.bio,
    knowsAbout: trainer.expertise,
    hasOccupation: {
      "@type": "Occupation",
      name: trainer.designation,
      experienceRequirements: trainer.experience,
    },
    worksFor: {
      "@id": "https://www.ngcloudnetworks.com/#organization",
    },
  };

  return (
    <section
      id="trainer"
      aria-labelledby="trainer-heading"
      className="relative overflow-hidden py-20 md:py-24"
    >
      {emitSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(trainerSchema) }}
        />
      )}

      {/* Background */}

      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute left-[-180px] top-[-120px] h-[420px] w-[420px] rounded-full bg-[#D4AF37]/8 blur-[180px]" />

        <div className="absolute right-[-180px] bottom-[-120px] h-[420px] w-[420px] rounded-full bg-[#D4AF37]/6 blur-[180px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-5">

        {/* Section Introduction */}

        <header className="mx-auto max-w-[900px] text-center">

          <div
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
            <GraduationCap className="h-4 w-4" />

            Meet Your Instructor
          </div>

          <h2
            id="trainer-heading"
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
            Learn From an
            <span className="block text-[#D4AF37]">
              Experienced Industry Professional
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-[820px]
              text-[17px]
              leading-[1.9]
              text-white/65
            "
          >
            Training at NG Cloud Networks is led by{" "}
            <strong className="font-semibold text-white">
              {trainer.name}
            </strong>
            , {trainer.designation}, bringing real enterprise
            implementation experience directly into every session.
          </p>

        </header>

        {/* Trainer Information */}

        <div className="mt-14 grid gap-12 lg:grid-cols-[320px_1fr]">

          {/* Trainer Identity */}

          <article
            itemScope
            itemType="https://schema.org/Person"
            className="
              self-start
              border-b
              border-white/10
              pb-8
              lg:border-b-0
              lg:border-r
              lg:pb-0
              lg:pr-12
            "
          >

            <div
              className="
                flex
                h-24
                w-24
                items-center
                justify-center
                rounded-full
                border
                border-[#D4AF37]/20
                bg-[#D4AF37]/10
              "
              aria-hidden="true"
            >
              <User2 className="h-11 w-11 text-[#D4AF37]" />
            </div>

            <h3
              itemProp="name"
              className="
                mt-6
                text-[30px]
                font-black
                leading-tight
                tracking-[-0.03em]
                text-white
              "
            >
              {trainer.name}
            </h3>

            <p
              itemProp="jobTitle"
              className="
                mt-3
                text-[16px]
                font-medium
                leading-relaxed
                text-[#D4AF37]
              "
            >
              {trainer.designation}
            </p>

            <div
              className="
                mt-7
                flex
                items-center
                gap-3
                text-white/70
              "
            >
              <Award
                className="h-5 w-5 shrink-0 text-[#D4AF37]"
                aria-hidden="true"
              />

              <span>
                {trainer.experience} Experience
              </span>
            </div>

            <Link
              href="/contact"
              className="
                mt-7
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-[#D4AF37]
                px-6
                py-3
                text-[13.5px]
                font-bold
                text-black
                transition-all
                duration-300
                hover:scale-[1.02]
                hover:shadow-[0_0_35px_rgba(212,175,55,0.35)]
              "
            >
              Book a Free Demo
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>

          </article>

          {/* Trainer Details */}

          <div>

            {/* About */}

            <article>

              <div className="flex items-center gap-3">

                <GraduationCap
                  className="h-5 w-5 text-[#D4AF37]"
                  aria-hidden="true"
                />

                <h3
                  className="
                    text-[23px]
                    font-bold
                    text-white
                  "
                >
                  About the Instructor
                </h3>

              </div>

              <p
                itemProp="description"
                className="
                  mt-5
                  max-w-[900px]
                  text-[17px]
                  leading-[1.95]
                  text-white/70
                "
              >
                {trainer.bio}
              </p>

            </article>

            {/* Expertise */}

            <article className="mt-12">

              <div className="flex items-center gap-3">

                <BadgeCheck
                  className="h-5 w-5 text-[#D4AF37]"
                  aria-hidden="true"
                />

                <h3
                  className="
                    text-[23px]
                    font-bold
                    text-white
                  "
                >
                  Trainer Expertise
                </h3>

              </div>

              <ul
                className="
                  mt-6
                  grid
                  gap-x-10
                  gap-y-3
                  sm:grid-cols-2
                "
              >

                {trainer.expertise.map((skill) => (

                  <li
                    key={skill}
                    itemProp="knowsAbout"
                    className="
                      flex
                      items-start
                      gap-3
                      text-[15px]
                      leading-[1.7]
                      text-white/70
                    "
                  >

                    <BadgeCheck
                      className="
                        mt-0.5
                        h-4
                        w-4
                        shrink-0
                        text-[#D4AF37]
                      "
                      aria-hidden="true"
                    />

                    <span>
                      {skill}
                    </span>

                  </li>

                ))}

              </ul>

            </article>

          </div>

        </div>

      </div>

    </section>
  );
}