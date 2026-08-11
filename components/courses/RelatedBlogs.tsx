import { ArrowUpRight, BookOpen } from "lucide-react";
import Link from "next/link";
import { Course } from "@/types/course";

type Props = {
  course: Course;
};

// Converts a blog path like "/blog/ccna-course-fees-in-hyderabad" into a
// readable title: "Ccna Course Fees In Hyderabad" -> fixed casing pass below.
// This is a display fallback only — see note at bottom of file.
function titleFromSlug(path: string): string {
  const slug = path.replace("/blog/", "").replace(/\/$/, "");
  return slug
    .split("-")
    .map((word) => {
      const upperAcronyms = ["ccna", "ccnp", "aws", "f5", "sdwan", "sd-wan"];
      if (upperAcronyms.includes(word.toLowerCase())) {
        return word.toUpperCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

export default function RelatedBlogs({ course }: Props) {
  if (!course.relatedBlogs || course.relatedBlogs.length === 0) {
    return null;
  }

  return (
    <section
      id="related-blogs"
      aria-labelledby="related-blogs-heading"
      className="relative overflow-hidden py-16 md:py-20"
    >
      <div className="mx-auto max-w-[1100px] px-5">

        <header className="mx-auto max-w-[720px] text-center">
          <span
            className="
              inline-flex items-center gap-2 rounded-full border
              border-[#D4AF37]/20 bg-[#D4AF37]/10 px-4 py-2
              text-sm font-semibold text-[#D4AF37]
            "
          >
            <BookOpen className="h-4 w-4" aria-hidden="true" />
            Related Reading
          </span>

          <h2
            id="related-blogs-heading"
            className="
              mt-6 text-[28px] font-black leading-[1.1] tracking-[-0.04em]
              text-white md:text-[36px]
            "
          >
            Articles About {course.title}
          </h2>

          <p className="mx-auto mt-4 text-[14.5px] leading-[1.8] text-white/60">
            Read more on fees, career paths and comparisons related to{" "}
            {course.title.replace(" in Hyderabad", "")}.
          </p>
        </header>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {course.relatedBlogs.map((path) => (
            <Link
              key={path}
              href={path}
              className="
                group flex flex-col justify-between rounded-2xl border
                border-white/10 bg-white/[0.03] p-6 transition-all
                duration-300 hover:border-[#D4AF37]/30 hover:bg-[#D4AF37]/[0.04]
              "
            >
              <p className="text-[14.5px] font-semibold leading-snug text-white">
                {titleFromSlug(path)}
              </p>

              <div className="mt-5 flex items-center gap-1.5 text-[13px] font-semibold text-[#D4AF37]">
                Read Article
                <ArrowUpRight
                  className="h-3.5 w-3.5 transition-all duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}