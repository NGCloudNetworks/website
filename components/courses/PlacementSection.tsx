import {
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  GraduationCap,
  Trophy,
} from "lucide-react";

import { Course } from "@/types/course";
import { academyStats, placementSupport, trainingFeatures } from "@/data/academy";

type Props = {
  course: Course;
};

export default function PlacementSection({ course }: Props) {
  if (!trainingFeatures.placementAssistance) {
    return null;
  }

  return (
    <section
      id="placement"
      aria-labelledby="placement-heading"
      className="relative overflow-hidden py-12"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[-180px] top-[-120px] h-[430px] w-[430px] rounded-full bg-[#D4AF37]/10 blur-[170px]" />
        <div className="absolute right-[-180px] bottom-[-120px] h-[430px] w-[430px] rounded-full bg-[#D4AF37]/8 blur-[170px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1450px] px-5">

        {/* Heading — now names the actual course */}
        <div className="mx-auto max-w-[900px] text-center">
          <div
            className="
              inline-flex rounded-full border border-[#D4AF37]/20
              bg-[#D4AF37]/10 px-5 py-2 text-sm font-semibold
              tracking-wide text-[#D4AF37]
            "
          >
            Placement Assistance
          </div>

          <h2
            id="placement-heading"
            className="
              mt-8 text-[42px] font-black leading-[0.95] tracking-[-0.05em]
              text-white md:text-[64px]
            "
          >
            From {course.title}
            <span className="block text-[#D4AF37]">To Your First Job Offer</span>
          </h2>

          {/* Direct-answer paragraph, personalized with real course.jobRoles */}
          <p className="mx-auto mt-8 max-w-[850px] text-[18px] leading-[2] text-white/65">
            After completing {course.title}, students commonly pursue roles
            such as{" "}
            <strong className="text-white">
              {course.jobRoles.slice(0, 3).join(", ")}
            </strong>
            . Our placement support prepares you for these roles through
            interview coaching, resume optimization and continuous career
            guidance after training.
          </p>
        </div>

        {/* Placement Overview */}
        <div className="mt-20 overflow-hidden rounded-[34px] border border-[#D4AF37]/20 bg-[#D4AF37]/[0.05] p-10">
          <div className="grid gap-10 lg:grid-cols-[110px_1fr]">
            <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-[#D4AF37]/10">
              <Trophy className="h-12 w-12 text-[#D4AF37]" aria-hidden="true" />
            </div>

            <div>
              <h3 className="text-[36px] font-black leading-none tracking-[-0.04em] text-white">
                Beyond Training
                <span className="block text-[#D4AF37]">We Prepare You For Hiring</span>
              </h3>

              <p className="mt-6 text-[18px] leading-[2] text-white/70">
                Our placement assistance focuses on making {course.title}{" "}
                graduates industry-ready through technical mentoring, mock
                interviews, resume optimization, communication improvement
                and continuous career guidance so they can confidently
                participate in recruitment drives.
              </p>
            </div>
          </div>
        </div>

        {/* Placement Stats */}
        <div className="mt-20 grid gap-6 md:grid-cols-3">
          <PlacementStatCard
            icon={<BriefcaseBusiness className="h-8 w-8 text-[#D4AF37]" />}
            title="Placement Support"
            value={academyStats.placementSupport}
          />
          <PlacementStatCard
            icon={<GraduationCap className="h-8 w-8 text-[#D4AF37]" />}
            title="Course Duration"
            value={course.duration}
          />
          <PlacementStatCard
            icon={<Building2 className="h-8 w-8 text-[#D4AF37]" />}
            title="Starting Salary"
            value={placementSupport.startingSalary}
          />
        </div>

        {/* Job roles specific to this course — real, unique per page */}
        <div className="mt-20">
          <h3 className="text-center text-[28px] font-black tracking-[-0.03em] text-white">
            Job Roles After {course.title}
          </h3>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {course.jobRoles.map((role) => (
              <span
                key={role}
                className="
                  rounded-full border border-white/10 bg-white/[0.03]
                  px-4 py-2 text-[14px] font-medium text-white/80
                "
              >
                {role}
              </span>
            ))}
          </div>
        </div>

        {/* Hiring Companies */}
        <div className="mt-24">
          <div className="text-center">
            <h3 className="text-[40px] font-black tracking-[-0.04em] text-white">
              Opportunities With
              <span className="block text-[#D4AF37]">Leading Companies</span>
            </h3>

            <p className="mx-auto mt-6 max-w-[760px] text-[18px] leading-[2] text-white/60">
              Students completing this training become eligible to pursue
              opportunities across startups, enterprise organizations,
              system integrators, managed service providers and
              multinational companies depending on their skills, interview
              performance and certification achievements.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {placementSupport.companies.map((company) => (
              <CompanyCard key={company} company={company} />
            ))}
          </div>
        </div>

        {/* Placement Advantages */}
        <div className="mt-24 overflow-hidden rounded-[36px] border border-[#D4AF37]/15 bg-[#D4AF37]/[0.05] p-12">
          <div className="grid gap-12 lg:grid-cols-[420px_1fr]">
            <div>
              <div className="inline-flex rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-5 py-2 text-sm font-semibold text-[#D4AF37]">
                Career Support
              </div>

              <h3 className="mt-8 text-[40px] font-black leading-[1] tracking-[-0.04em] text-white">
                More Than
                <span className="block text-[#D4AF37]">Placement Assistance</span>
              </h3>
            </div>

            <div>
              <p className="text-[18px] leading-[2] text-white/72">
                We don&apos;t simply complete the course and stop there. Our
                objective is to help {course.title} students become
                interview-ready, technically confident and professionally
                prepared through structured mentoring, resume reviews, mock
                interviews and continuous career guidance throughout their
                placement journey.
              </p>

              <div className="mt-10 grid gap-5 md:grid-cols-2">
                <PlacementFeature text="ATS-Friendly Resume Building" />
                <PlacementFeature text="Technical Mock Interviews" />
                <PlacementFeature text="HR Interview Preparation" />
                <PlacementFeature text="LinkedIn Profile Guidance" />
                <PlacementFeature text="Certification Roadmap" />
                <PlacementFeature text="Career Mentorship" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function PlacementStatCard({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }) {
  return (
    <div
      className="
        rounded-[28px] border border-white/10 bg-white/[0.03] p-8
        text-center backdrop-blur-xl transition-all duration-300
        hover:-translate-y-1 hover:border-[#D4AF37]/30
      "
    >
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D4AF37]/10">
        {icon}
      </div>
      <h4 className="mt-6 text-[20px] font-bold text-white">{title}</h4>
      <p className="mt-4 text-[30px] font-black text-[#D4AF37]">{value}</p>
    </div>
  );
}

function CompanyCard({ company }: { company: string }) {
  return (
    <div
      className="
        flex items-center gap-4 rounded-[24px] border border-white/10
        bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300
        hover:border-[#D4AF37]/30
      "
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D4AF37]/10">
        <Building2 className="h-6 w-6 text-[#D4AF37]" aria-hidden="true" />
      </div>
      <span className="text-[17px] font-semibold text-white">{company}</span>
    </div>
  );
}

function PlacementFeature({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-5">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#D4AF37]/10">
        <CheckCircle2 className="h-5 w-5 text-[#D4AF37]" aria-hidden="true" />
      </div>
      <p className="text-[16px] font-medium text-white/75">{text}</p>
    </div>
  );
}