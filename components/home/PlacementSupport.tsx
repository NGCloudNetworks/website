import { TrendingUp, Users2, Building2 } from "lucide-react";
import { placementSupport, academyStats } from "@/data/academy";

export default function PlacementSection() {
  return (
    <section
      id="placements"
      aria-labelledby="placements-heading"
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
            Career &amp; Placement Support
          </span>

          <h2
            id="placements-heading"
            className="
              mt-6 text-[40px] font-black leading-[1] tracking-[-0.04em]
              text-white md:text-[56px]
            "
          >
            From Training to a Real Job Offer
          </h2>

          <p
            className="
              mx-auto mt-6 max-w-[720px] text-[17px] leading-[1.9]
              text-white/68
            "
          >
            NG Cloud Networks provides structured placement support, from
            resume building to job referrals, with students placed at
            companies including {placementSupport.companies.slice(0, 3).join(", ")}
            {" "}and more.
          </p>
        </header>

        {/* Stats strip */}
        <dl
          className="
            mx-auto mt-14 grid max-w-[820px] grid-cols-1 gap-6
            border-y border-white/10 py-10 sm:grid-cols-3
          "
        >
          <div className="flex flex-col-reverse items-center gap-2 text-center">
            <dt className="text-xs text-white/50">Placement Support</dt>
            <dd className="flex items-center gap-2 text-[26px] font-black text-white">
              <Users2 className="h-5 w-5 text-[#D4AF37]" aria-hidden="true" />
              {academyStats.placementSupport}
            </dd>
          </div>

          <div className="flex flex-col-reverse items-center gap-2 text-center">
            <dt className="text-xs text-white/50">Starting Salary</dt>
            <dd className="flex items-center gap-2 text-[26px] font-black text-white">
              <TrendingUp className="h-5 w-5 text-[#D4AF37]" aria-hidden="true" />
              {placementSupport.startingSalary}
            </dd>
          </div>

          <div className="flex flex-col-reverse items-center gap-2 text-center">
            <dt className="text-xs text-white/50">Hiring Partners</dt>
            <dd className="flex items-center gap-2 text-[26px] font-black text-white">
              <Building2 className="h-5 w-5 text-[#D4AF37]" aria-hidden="true" />
              {placementSupport.companies.length}+
            </dd>
          </div>
        </dl>

        {/* Process — horizontal numbered flow */}
        <div className="mt-16">
          <h3 className="text-center text-[13px] font-semibold uppercase tracking-wider text-[#D4AF37]/80">
            How Placement Support Works
          </h3>

          <ol className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {placementSupport.process.slice(0, 5).map((step, index) => (
              <li
                key={step}
                className="
                  relative rounded-2xl border border-white/10 bg-white/[0.03]
                  p-5 text-center
                "
              >
                <span
                  className="
                    mx-auto flex h-8 w-8 items-center justify-center
                    rounded-full bg-[#D4AF37]/10 text-[13px] font-bold
                    text-[#D4AF37]
                  "
                >
                  {index + 1}
                </span>
                <p className="mt-3 text-[13.5px] font-medium leading-snug text-white/80">
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </div>

        {/* Hiring partners — infinite marquee */}
        <div className="mt-20">
          <h3 className="text-center text-[13px] font-semibold uppercase tracking-wider text-[#D4AF37]/80">
            Students Placed At
          </h3>

          <div
            className="
              relative mt-8 overflow-hidden
              [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]
            "
          >
            <div className="flex w-max animate-marquee gap-4">
              {[...placementSupport.companies, ...placementSupport.companies].map(
                (company, index) => (
                  <span
                    key={`${company}-${index}`}
                    className="
                      shrink-0 rounded-full border border-white/10
                      bg-white/[0.03] px-6 py-3 text-[14px] font-semibold
                      text-white/75
                    "
                  >
                    {company}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}