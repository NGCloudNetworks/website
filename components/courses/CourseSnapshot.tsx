import {
  BookOpen,
  CalendarDays,
  CheckCircle2,
  FileBadge2,
  GraduationCap,
  Monitor,
  User2,
  Users,
} from "lucide-react";

import { Course } from "@/types/course";
import { trainer, trainingFeatures, trainingModes } from "@/data/academy";

type Props = {
  course: Course;
};

export default function CourseSnapshot({
  course,
}: Props) {
  return (
    <section className="relative py-6">

      <div className="mx-auto max-w-[1450px] px-5">

        {/* Heading */}
        <div className="mx-auto max-w-[900px] text-center">

          <div
            className="
              inline-flex
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
            Course Snapshot
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
              Before You Enroll
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-8
              max-w-[820px]
              text-[18px]
              leading-[2]
              text-white/65
            "
          >
            Explore the complete training overview including duration,
            trainer profile, learning mode, practical labs,
            assessments, certification guidance and placement support.
          </p>

        </div>

        {/* Card */}
        <div
          className="
            mt-20
            overflow-hidden
            rounded-[36px]
            border
            border-white/10
            bg-white/[0.03]
            backdrop-blur-2xl
          "
        >

          <div className="grid lg:grid-cols-2">

            {/* Left */}
            <div className="border-b border-white/10 p-10 lg:border-b-0 lg:border-r">

              <InfoCard
                icon={<CalendarDays className="h-6 w-6 text-[#D4AF37]" />}
                title="Course Duration"
                value={course.duration}
              />

              <InfoCard
                icon={<Monitor className="h-6 w-6 text-[#D4AF37]" />}
                title="Training Mode"
                value={trainingModes
                  .map((training) => training.mode.replace(" Training", ""))
                  .join(" • ")}
              />

              <InfoCard
                icon={<User2 className="h-6 w-6 text-[#D4AF37]" />}
                title="Instructor"
                value={trainer.name}
              />

              <InfoCard
                icon={<GraduationCap className="h-6 w-6 text-[#D4AF37]" />}
                title="Experience"
                value={trainer.experience}
              />

              <InfoCard
                icon={<Users className="h-6 w-6 text-[#D4AF37]" />}
                title="Batch Size"
                value={trainingFeatures.batchSize}
              />

              <InfoCard
                icon={<BookOpen className="h-6 w-6 text-[#D4AF37]" />}
                title="Practical Labs"
                value={trainingFeatures.practicalLabs}
              />

            </div>

            {/* Right */}
            <div className="p-10">

              <Feature
                title="Recorded Classes"
                enabled={trainingFeatures.recordings}
              />

              <Feature
                title="Weekly Assessments"
                enabled={trainingFeatures.weeklyAssessments}
              />

              <Feature
                title="Live Doubt Clarification"
                enabled={trainingFeatures.liveDoubtSupport}
              />

              <Feature
                title="Interview Preparation"
                enabled={trainingFeatures.interviewPreparation}
              />

              <Feature
                title="Resume Building"
                enabled={trainingFeatures.resumeBuilding}
              />

              <Feature
                title="Placement Assistance"
                enabled={trainingFeatures.placementAssistance}
              />

              <Feature
                title="Certification Guidance"
                enabled={trainingFeatures.certificationGuidance}
              />

            </div>

          </div>

        </div>
      </div>

    </section>
  );
}

function InfoCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-5 border-b border-white/10 py-6 last:border-none">

      <div
        className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          bg-[#D4AF37]/10
        "
      >
        {icon}
      </div>

      <div>

        <p className="text-sm uppercase tracking-wide text-white/45">
          {title}
        </p>

        <h3 className="mt-2 text-[20px] font-bold text-white">
          {value}
        </h3>

      </div>

    </div>
  );
}

function Feature({
  title,
  enabled,
}: {
  title: string;
  enabled: boolean;
}) {
  return (
    <div className="flex items-center justify-between border-b border-white/10 py-5 last:border-none">

      <span className="text-[17px] text-white/75">
        {title}
      </span>

      <div className="flex items-center gap-2">

        <CheckCircle2
          className={`h-5 w-5 ${enabled
              ? "text-green-400"
              : "text-red-400"
            }`}
        />

        <span
          className={`font-semibold ${enabled
              ? "text-white"
              : "text-white/50"
            }`}
        >
          {enabled ? "Included" : "Not Included"}
        </span>

      </div>

    </div>
  );
}