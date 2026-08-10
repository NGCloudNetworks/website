import { Monitor, Building2, Shuffle, Clock3, Globe2 } from "lucide-react";
import {
  trainingModes,
  batchTimings,
  weekendSchedule,
  internationalStudents,
} from "@/data/academy";

const modeIcons: Record<string, React.ElementType> = {
  "Live Online Training": Monitor,
  "Classroom Training": Building2,
  "Hybrid Training": Shuffle,
};

export default function TrainingScheduleSection() {
  return (
    <section
      id="training-schedule"
      aria-labelledby="training-schedule-heading"
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
            Flexible Training Schedule
          </span>

          <h2
            id="training-schedule-heading"
            className="
              mt-6 text-[40px] font-black leading-[1] tracking-[-0.04em]
              text-white md:text-[56px]
            "
          >
            Training Modes &amp; Batch Timings
          </h2>

          <p
            className="
              mx-auto mt-6 max-w-[720px] text-[17px] leading-[1.9]
              text-white/68
            "
          >
            Choose live online, classroom or hybrid training in Hyderabad,
            with morning, afternoon, evening and weekend batches designed
            for students, working professionals and career switchers.
          </p>
        </header>

        {/* Training Modes */}
        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {trainingModes.map((mode) => {
            const Icon = modeIcons[mode.mode] ?? Monitor;
            return (
              <div
                key={mode.mode}
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

                <h3 className="mt-6 text-[19px] font-bold text-white">
                  {mode.mode}
                </h3>

                <p className="mt-3 text-[14.5px] leading-[1.8] text-white/65">
                  {mode.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Weekday Batch Timings */}
        <div className="mt-20">
          <div className="flex items-center gap-3">
            <Clock3 className="h-5 w-5 text-[#D4AF37]" aria-hidden="true" />
            <h3 className="text-[24px] font-bold text-white">
              Weekday Batch Timings
            </h3>
          </div>

          <div className="mt-7 overflow-hidden rounded-2xl border border-white/10">
            <table className="w-full border-collapse text-left">
              <caption className="sr-only">
                Weekday training batch timings and who each batch suits
              </caption>
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.03]">
                  <th scope="col" className="px-6 py-4 text-sm font-semibold text-white/60">
                    Batch
                  </th>
                  <th scope="col" className="px-6 py-4 text-sm font-semibold text-[#D4AF37]">
                    Timing
                  </th>
                  <th scope="col" className="px-6 py-4 text-sm font-semibold text-white/60">
                    Suitable For
                  </th>
                </tr>
              </thead>
              <tbody>
                {batchTimings.map((batch) => (
                  <tr key={batch.batch} className="border-b border-white/10 last:border-b-0">
                    <th scope="row" className="px-6 py-4 text-sm font-medium text-white/80">
                      {batch.batch}
                    </th>
                    <td className="px-6 py-4 text-sm font-semibold text-[#D4AF37]">
                      {batch.time}
                    </td>
                    <td className="px-6 py-4 text-sm text-white/55">
                      {batch.suitableFor}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Weekend Schedule */}
        <div className="mt-14">
          <h3 className="text-[24px] font-bold text-white">
            Weekend Schedule
          </h3>

          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            {weekendSchedule.map((day) => (
              <div
                key={day.day}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <div className="flex items-center justify-between">
                  <p className="text-[17px] font-bold text-white">{day.day}</p>
                  <p className="text-[14px] font-semibold text-[#D4AF37]">{day.time}</p>
                </div>
                <p className="mt-3 text-[14.5px] leading-[1.7] text-white/65">
                  {day.purpose}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* International Students */}
        {internationalStudents.available && (
          <div
            className="
              mt-14 flex flex-col items-start gap-4 rounded-[28px]
              border border-[#D4AF37]/20 bg-[#D4AF37]/[0.05] p-7
              sm:flex-row sm:items-center md:p-8
            "
          >
            <div
              className="
                flex h-12 w-12 shrink-0 items-center justify-center
                rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37]
              "
            >
              <Globe2 className="h-6 w-6" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-[17px] font-bold text-white">
                {internationalStudents.title}
              </h3>
              <p className="mt-2 text-[14.5px] leading-[1.8] text-white/65">
                {internationalStudents.description}
              </p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}