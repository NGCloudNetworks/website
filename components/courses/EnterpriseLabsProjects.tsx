import {
  CheckCircle2,
  FolderKanban,
  Network,
} from "lucide-react";

import { Course } from "@/types/course";

type Props = {
  course: Course;
};

export default function EnterpriseLabsProjects({
  course,
}: Props) {

  return (

    <section
      id="enterprise-labs-projects"
      className="relative py-12"
    >

      {/* Background */}

      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute left-[-180px] top-[-140px] h-[420px] w-[420px] rounded-full bg-[#D4AF37]/8 blur-[180px]" />

        <div className="absolute right-[-180px] bottom-[-120px] h-[420px] w-[420px] rounded-full bg-[#D4AF37]/8 blur-[180px]" />

      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-5">
        <div className="max-w text-center">

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

            <Network className="h-4 w-4" />

            Enterprise Labs & Real-World Projects

          </div>

          <h2
            className="
              mt-7
              text-[42px]
              font-black
              leading-[0.95]
              tracking-[-0.05em]
              text-white
              md:text-[64px]
            "
          >

            Learn Through
            <span className="block text-[#D4AF37]">
              Practical Implementation
            </span>

          </h2>

          <p
            className="
              mt-7
              max-w
              text-center
              text-[18px]
              leading-[2]
              text-white/68
            "
          >
            Practical experience is an essential part of our{" "}
            {course.title}. Every concept is reinforced through
            instructor-guided enterprise lab exercises and
            real-world implementation projects that help you
            develop troubleshooting skills, configuration
            confidence and practical knowledge required in
            enterprise networking environments.
          </p>

        </div>
        <div
          className="
            mt-14
            grid
            gap-12
            lg:grid-cols-2
          "
        >
          <div>

            <div className="flex items-center gap-3">

              <Network
                className="h-5 w-5 text-[#D4AF37]"
              />

              <h3
                className="
                  text-[24px]
                  font-bold
                  text-white
                "
              >
                Hands-on Enterprise Labs
              </h3>

            </div>

            <p
              className="
                mt-3
                text-[16px]
                leading-[1.9]
                text-white/65
              "
            >
              Configure, verify and troubleshoot enterprise
              networking technologies through practical lab
              exercises designed around real production
              environments.
            </p>

            <div
              className="
                mt-8
                space-y-4
              "
            >

              {course.labs.map((lab) => (

                <ListItem
                  key={lab}
                  text={lab}
                />

              ))}

            </div>

          </div>
                    <div>

            <div className="flex items-center gap-3">

              <FolderKanban
                className="h-5 w-5 text-[#D4AF37]"
              />

              <h3
                className="
                  text-[24px]
                  font-bold
                  text-white
                "
              >
                Real-World Projects
              </h3>

            </div>

            <p
              className="
                mt-3
                text-[16px]
                leading-[1.9]
                text-white/65
              "
            >
              Apply the concepts learned throughout the course by
              designing, configuring and validating enterprise
              networking solutions inspired by real organizational
              environments.
            </p>

            <div
              className="
                mt-8
                space-y-4
              "
            >

              {course.projects.map((project) => (

                <ListItem
                  key={project}
                  text={project}
                />

              ))}

            </div>

          </div>

        </div>

        <div
          className="
            mt-16
            border-t
            border-white/10
            pt-10
          "
        >

          <h3
            className="
              text-[24px]
              font-bold
              text-white
            "
          >
            Why Practical Learning Matters
          </h3>

          <p
            className="
              mt-5
              max-w-[980px]
              text-[17px]
              leading-[2]
              text-white/68
            "
          >
            Enterprise networking is built through practical
            implementation rather than theory alone. Throughout this
            course, you will configure network devices, solve
            connectivity issues, validate configurations and complete
            end-to-end implementation tasks that closely resemble
            real production environments. This practical approach
            strengthens technical confidence, improves troubleshooting
            ability and prepares you for certification exams,
            technical interviews and enterprise networking roles.
          </p>

        </div>

      </div>

    </section>

  );

}

/* ==========================================
   Helper Component
========================================== */

type ListItemProps = {
  text: string;
};

function ListItem({
  text,
}: ListItemProps) {

  return (

    <div
      className="
        flex
        items-start
        gap-3
      "
    >

      <CheckCircle2
        className="
          mt-1
          h-5
          w-5
          shrink-0
          text-[#D4AF37]
        "
      />

      <p
        className="
          text-[15px]
          leading-[1.8]
          text-white/72
        "
      >
        {text}
      </p>

    </div>

  );

}