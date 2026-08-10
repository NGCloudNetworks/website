import { CircleCheck, CircleHelp, ShieldCheck } from "lucide-react";
import { trainingComparison } from "@/data/academy";

export default function ComparisonSection() {
  return (
    <section
      id="comparison"
      aria-labelledby="comparison-heading"
      className="relative overflow-hidden py-20 md:py-24"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-[-180px] top-[-120px] h-[420px] w-[420px] rounded-full bg-[#D4AF37]/7 blur-[180px]" />
        <div className="absolute right-[-180px] bottom-[-120px] h-[420px] w-[420px] rounded-full bg-[#D4AF37]/6 blur-[180px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1100px] px-5">

        {/* Header */}
        <header className="mx-auto max-w-[780px] text-center">
          <span
            className="
              inline-flex items-center gap-2 rounded-full border
              border-[#D4AF37]/20 bg-[#D4AF37]/10 px-4 py-2
              text-sm font-semibold text-[#D4AF37]
            "
          >
            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            Why Choose NG Cloud Networks
          </span>

          <h2
            id="comparison-heading"
            className="
              mt-6 text-[40px] font-black leading-[1] tracking-[-0.04em]
              text-white md:text-[56px]
            "
          >
            See the Difference for Yourself
          </h2>

          <p
            className="
              mx-auto mt-6 max-w-[680px] text-[17px] leading-[1.9]
              text-white/68
            "
          >
            Compare the training experience and support included with NG
            Cloud Networks against what varies across other providers.
          </p>
        </header>

        {/* Desktop Table */}
        <div className="mt-14 hidden overflow-hidden rounded-[28px] border border-white/10 md:block">
          <table className="w-full border-collapse text-left">
            <caption className="sr-only">
              Training feature comparison between NG Cloud Networks and the
              common industry approach
            </caption>
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.03]">
                <th scope="col" className="px-7 py-5 text-sm font-semibold text-white/60">
                  Training Feature
                </th>
                <th scope="col" className="px-7 py-5 text-center text-sm font-semibold text-[#D4AF37]">
                  NG Cloud Networks
                </th>
                <th scope="col" className="px-7 py-5 text-center text-sm font-semibold text-white/60">
                  Common Industry Approach
                </th>
              </tr>
            </thead>
            <tbody>
              {trainingComparison.map((item, index) => (
                <tr
                  key={item.feature}
                  className={`
                    border-b border-white/10 last:border-b-0
                    ${index % 2 === 1 ? "bg-white/[0.015]" : ""}
                  `}
                >
                  <th scope="row" className="px-7 py-5 text-sm font-medium text-white/80">
                    {item.feature}
                  </th>
                  <td className="px-7 py-5">
                    <div className="flex items-center justify-center gap-2">
                      <CircleCheck
                        className="h-4 w-4 shrink-0 text-[#D4AF37]"
                        aria-hidden="true"
                      />
                      <span className="text-sm font-semibold text-white">
                        {item.ngCloud}
                      </span>
                    </div>
                  </td>
                  <td className="px-7 py-5">
                    <div className="flex items-center justify-center gap-2">
                      <CircleHelp
                        className="h-4 w-4 shrink-0 text-white/30"
                        aria-hidden="true"
                      />
                      <span className="text-sm text-white/50">
                        {item.industry}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="mt-14 space-y-3 md:hidden">
          {trainingComparison.map((item) => (
            <div
              key={item.feature}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
            >
              <p className="text-sm font-semibold text-white">{item.feature}</p>

              <div className="mt-4 flex flex-col gap-2.5">
                <div className="flex items-center gap-2">
                  <CircleCheck className="h-4 w-4 shrink-0 text-[#D4AF37]" aria-hidden="true" />
                  <span className="text-[13.5px] font-semibold text-white">
                    NG Cloud Networks: {item.ngCloud}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CircleHelp className="h-4 w-4 shrink-0 text-white/30" aria-hidden="true" />
                  <span className="text-[13.5px] text-white/50">
                    Common approach: {item.industry}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}