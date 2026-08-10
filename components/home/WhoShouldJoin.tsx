import { GraduationCap, Briefcase, Repeat, Server } from "lucide-react";
import { whoShouldJoin } from "@/data/academy";

const audienceIcons: Record<string, React.ElementType> = {
  Students: GraduationCap,
  "Working Professionals": Briefcase,
  "Career Switchers": Repeat,
  "System Administrators": Server,
};

export default function WhoShouldJoinSection() {
  return (
    <section
      id="who-should-join"
      aria-labelledby="who-should-join-heading"
      className="relative overflow-hidden py-20 md:py-24"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-[-180px] top-[-120px] h-[420px] w-[420px] rounded-full bg-[#D4AF37]/7 blur-[180px]" />
        <div className="absolute right-[-180px] bottom-[-120px] h-[420px] w-[420px] rounded-full bg-[#D4AF37]/6 blur-[180px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-5">

        {/* Header */}
        <header className="mx-auto max-w-[820px] text-center">
          <span
            className="
              inline-flex rounded-full border border-[#D4AF37]/20
              bg-[#D4AF37]/10 px-4 py-2 text-sm font-semibold text-[#D4AF37]
            "
          >
            Who Should Join
          </span>

          <h2
            id="who-should-join-heading"
            className="
              mt-6 text-[40px] font-black leading-[1] tracking-[-0.04em]
              text-white md:text-[56px]
            "
          >
            Built for Every Stage of Your Career
          </h2>

          <p
            className="
              mx-auto mt-6 max-w-[720px] text-[17px] leading-[1.9]
              text-white/68
            "
          >
            NG Cloud Networks trains students, working professionals and
            career switchers across networking, cloud computing and
            cybersecurity, with batch timings suited to each background.
          </p>
        </header>

        {/* Audience grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whoShouldJoin.map((audience) => {
            const Icon = audienceIcons[audience.title] ?? GraduationCap;
            return (
              <div
                key={audience.title}
                className="
                  rounded-[28px] border border-white/10 bg-white/[0.03]
                  p-7 transition-all duration-300
                  hover:border-[#D4AF37]/25 hover:bg-[#D4AF37]/[0.04]
                "
              >
                <div
                  className="
                    flex h-12 w-12 items-center justify-center
                    rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37]
                  "
                >
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>

                <h3 className="mt-6 text-[18px] font-bold text-white">
                  {audience.title}
                </h3>

                <p className="mt-3 text-[14.5px] leading-[1.8] text-white/65">
                  {audience.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}