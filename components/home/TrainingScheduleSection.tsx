import Link from "next/link";
import {
  Monitor,
  Building2,
  Shuffle,
  Clock3,
  Globe2,
  ArrowRight,
} from "lucide-react";
import {
  trainingModes,
  courseBatches,
  weekendSchedule,
  internationalStudents,
} from "@/data/academy";

const modeIcons: Record<string, React.ElementType> = {
  "Live Online Training": Monitor,
  "Classroom Training": Building2,
  "Hybrid Training": Shuffle,
};

const periods = ["Morning", "Afternoon", "Evening"] as const;

function joinList(items: string[]) {
  if (items.length <= 1) return items.join("");
  return `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;
}

function ModeBadge({ mode }: { mode: string }) {
  return (
    <span
      className="
        inline-flex items-center gap-1.5 whitespace-nowrap rounded-full
        border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-3 py-1
        text-xs font-semibold text-[#D4AF37]
      "
    >
      <Monitor className="h-3 w-3" aria-hidden="true" />
      {mode}
    </span>
  );
}

type Props = {
  /** Pass the course slug on course pages to show only that course's batches. */
  courseSlug?: string;
};

export default function TrainingScheduleSection({ courseSlug }: Props) {
  const courseSlots = courseSlug
    ? courseBatches.filter((b) => b.courseSlug === courseSlug)
    : [];

  const heading = !courseSlug
    ? "Weekday Batch Timings"
    : courseSlots.length > 0
      ? `${courseSlots[0].course} Batch Timings`
      : "Batch Timings";

  const allHybrid =
    courseSlots.length > 0 &&
    courseSlots.every((s) => s.mode === "Online + Offline");

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
            <h3 className="text-[24px] font-bold text-white">{heading}</h3>
          </div>

          {/* A) Homepage: full timetable */}
          {!courseSlug && (
            <>
              {/* Desktop / tablet: table */}
              <div className="mt-7 hidden overflow-hidden rounded-2xl border border-white/10 md:block">
                <table className="w-full border-collapse text-left">
                  <caption className="sr-only">
                    Weekday training batch timings by course, trainer and
                    training mode
                  </caption>
                  <thead>
                    <tr className="border-b border-white/10 bg-white/[0.03]">
                      <th scope="col" className="px-6 py-4 text-sm font-semibold text-[#D4AF37]">
                        Timing
                      </th>
                      <th scope="col" className="px-6 py-4 text-sm font-semibold text-white/60">
                        Course
                      </th>
                      <th scope="col" className="px-6 py-4 text-sm font-semibold text-white/60">
                        Trainer
                      </th>
                      <th scope="col" className="px-6 py-4 text-sm font-semibold text-white/60">
                        Mode
                      </th>
                    </tr>
                  </thead>

                  {periods.map((period) => {
                    const slots = courseBatches.filter((b) => b.period === period);
                    if (slots.length === 0) return null;

                    return (
                      <tbody key={period}>
                        <tr className="bg-white/[0.02]">
                          <th
                            colSpan={4}
                            scope="rowgroup"
                            className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white/45"
                          >
                            {period}
                          </th>
                        </tr>
                        {slots.map((slot) => (
                          <tr
                            key={`${slot.courseSlug}-${slot.time}`}
                            className="border-b border-white/10 last:border-b-0"
                          >
                            <td className="whitespace-nowrap px-6 py-4 text-sm font-semibold text-[#D4AF37]">
                              {slot.time}
                            </td>
                            <td className="px-6 py-4 text-sm font-medium">
                              <Link
                                href={`/courses/${slot.courseSlug}`}
                                className="text-white/85 transition-colors hover:text-[#D4AF37]"
                              >
                                {slot.course}
                              </Link>
                            </td>
                            <td className="px-6 py-4 text-sm text-white/55">
                              {slot.trainer}
                            </td>
                            <td className="px-6 py-4">
                              <ModeBadge mode={slot.mode} />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    );
                  })}
                </table>
              </div>

              {/* Mobile: cards grouped by time of day */}
              <div className="mt-7 space-y-7 md:hidden">
                {periods.map((period) => {
                  const slots = courseBatches.filter((b) => b.period === period);
                  if (slots.length === 0) return null;

                  return (
                    <div key={period}>
                      <p className="text-xs font-semibold uppercase tracking-wider text-white/45">
                        {period}
                      </p>
                      <div className="mt-3 space-y-3">
                        {slots.map((slot) => (
                          <div
                            key={`${slot.courseSlug}-${slot.time}`}
                            className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                          >
                            <p className="text-[18px] font-bold text-[#D4AF37]">
                              {slot.time}
                            </p>
                            <Link
                              href={`/courses/${slot.courseSlug}`}
                              className="mt-1 block text-[16px] font-semibold text-white/90"
                            >
                              {slot.course}
                            </Link>
                            <p className="mt-1 text-[13.5px] text-white/55">
                              Trainer: {slot.trainer}
                            </p>
                            <div className="mt-3">
                              <ModeBadge mode={slot.mode} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-[13.5px] leading-[1.7] text-white/50">
                  Timings are subject to batch availability. For other
                  courses, contact us for the next batch dates.
                </p>
                <Link
                  href="/contact"
                  className="
                    group inline-flex h-[52px] shrink-0 items-center justify-center
                    gap-2 rounded-full bg-[#D4AF37] px-7 text-[15px]
                    font-semibold text-black transition-all duration-300
                    hover:scale-[1.02]
                  "
                >
                  Check batch availability
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </>
          )}

          {/* B) Course page: only this course's slots */}
          {courseSlug && courseSlots.length > 0 && (
            <>
              <p className="mt-5 max-w-[820px] text-[15px] leading-[1.8] text-white/65">
                {courseSlots[0].course}{" "}
                {courseSlots.length === 1 ? "batch runs" : "batches run"} on
                weekdays at {joinList(courseSlots.map((s) => s.time))}
                {allHybrid ? ", online and offline." : "."}
              </p>

              <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {courseSlots.map((slot) => (
                  <div
                    key={slot.time}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
                  >
                    <p className="text-[12px] font-semibold uppercase tracking-wider text-white/45">
                      {slot.period}
                    </p>
                    <p className="mt-2 text-[20px] font-bold text-[#D4AF37]">
                      {slot.time}
                    </p>
                    <p className="mt-3 text-[14.5px] text-white/65">
                      Trainer: {slot.trainer}
                    </p>
                    <div className="mt-4">
                      <ModeBadge mode={slot.mode} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href="/contact"
                  className="
                    group inline-flex h-[52px] items-center justify-center
                    gap-2 rounded-full bg-[#D4AF37] px-7 text-[15px]
                    font-semibold text-black transition-all duration-300
                    hover:scale-[1.02]
                  "
                >
                  Check batch availability
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/#training-schedule"
                  className="text-[14.5px] font-medium text-white/60 underline underline-offset-4 transition-colors hover:text-[#D4AF37]"
                >
                  See the full weekday timetable
                </Link>
              </div>

              <p className="mt-5 text-[13.5px] text-white/50">
                Timings are subject to batch availability.
              </p>
            </>
          )}

          {/* C) Course page with no listed slots yet */}
          {courseSlug && courseSlots.length === 0 && (
            <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:flex sm:items-center sm:justify-between sm:gap-6">
              <p className="text-[15px] leading-[1.8] text-white/65">
                Contact our team for the next batch timings for this course.
              </p>
              <Link
                href="/contact"
                className="
                  group mt-5 inline-flex h-[52px] shrink-0 items-center
                  justify-center gap-2 rounded-full bg-[#D4AF37] px-7
                  text-[15px] font-semibold text-black transition-all
                  duration-300 hover:scale-[1.02] sm:mt-0
                "
              >
                Check batch availability
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          )}
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