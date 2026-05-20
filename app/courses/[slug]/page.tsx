import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

import {
  ArrowRight,
  Users,
  Star,
  ShieldCheck,
  TrendingUp,
  BriefcaseBusiness,
  BookOpen,
  Clock3,
  CheckCircle2,
  ChevronRight,
  GraduationCap,
  Target,
} from "lucide-react";

import { courses } from "@/data/courses";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};
export async function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}
export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {

  const { slug } = await params;

  const course = courses.find(
    (item) => item.slug === slug
  );

  if (!course) {
    return {};
  }

  const url = `https://ngcloudnetworks.com/courses/${course.slug}`;

  return {
    title: course.seoTitle,

    description: course.seoDescription,

    keywords: course.seoKeywords,

    alternates: {
      canonical: url,
    },

    openGraph: {
      title: course.seoTitle,

      description: course.seoDescription,

      url,

      siteName: "NG Cloud Networks",

      locale: "en_IN",

      type: "website",

      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: course.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title: course.seoTitle,

      description: course.seoDescription,

      images: ["/og-image.jpg"],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function CourseDetailPage({
  params,
}: Props) {
  const { slug } = await params;

  const course = courses.find(
    (item) => item.slug === slug
  );

  if (!course) {
    notFound();
  }
  const courseSchema = {
    "@context": "https://schema.org",

    "@type": "Course",

    name: course.title,

    description: course.seoDescription,

    provider: {
      "@type": "Organization",

      name: "NG Cloud Networks",

      url: "https://ngcloudnetworks.com",
    },

    educationalCredentialAwarded:
      course.certification,

    courseMode: "Offline & Online",

    inLanguage: "English",

    teaches: course.skills,

    url: `https://ngcloudnetworks.com/courses/${course.slug}`,
  };

  const faqSchema = {
    "@context": "https://schema.org",

    "@type": "FAQPage",

    mainEntity: course.faqs.map((faq) => ({
      "@type": "Question",

      name: faq.question,

      acceptedAnswer: {
        "@type": "Answer",

        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",

    "@type": "BreadcrumbList",

    itemListElement: [
      {
        "@type": "ListItem",

        position: 1,

        name: "Home",

        item: "https://ngcloudnetworks.com",
      },

      {
        "@type": "ListItem",

        position: 2,

        name: "Courses",

        item: "https://ngcloudnetworks.com/courses",
      },

      {
        "@type": "ListItem",

        position: 3,

        name: course.title,

        item: `https://ngcloudnetworks.com/courses/${course.slug}`,
      },
    ],
  };

  const recommendedCoursesData = courses.filter((item) =>
    course.recommendedCourses?.includes(item.slug)
  );

  return (
    <main className="relative overflow-hidden bg-[#050505] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(courseSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* PREMIUM TEXTURE */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.035] mix-blend-soft-light">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/asfalt-dark.png')",
          }}
        />
      </div>

      {/* GLOBAL GOLD GLOW */}
      <div className="pointer-events-none fixed left-[-250px] top-[10%] h-[500px] w-[500px] rounded-full bg-[#D4AF37]/[0.06] blur-[160px]" />

      <div className="pointer-events-none fixed bottom-[-250px] right-[-250px] h-[500px] w-[500px] rounded-full bg-[#D4AF37]/[0.06] blur-[160px]" />

      <Navbar />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-36 pb-20 lg:pt-44 lg:pb-28">

        {/* PREMIUM BACKGROUND */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">

          {/* GOLD GLOW */}
          <div className="absolute left-[-140px] top-[-120px] h-[420px] w-[420px] rounded-full bg-[#D4AF37]/10 blur-[130px]" />

          <div className="absolute right-[-120px] bottom-[-120px] h-[420px] w-[420px] rounded-full bg-[#D4AF37]/8 blur-[130px]" />

          {/* GRID */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
              backgroundSize: "42px 42px",
            }}
          />

          {/* RADIAL */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent_40%)]" />

        </div>

        {/* CONTAINER */}
        <div className="relative z-10 mx-auto max-w-[1500px] px-5">

          <div className="grid items-center gap-10 xl:grid-cols-[1.08fr_0.92fr]">

            {/* LEFT CONTENT */}
            <div className="max-w-[920px]">

              {/* TOP BADGES */}
              <div className="flex flex-wrap items-center gap-3">

                <div
                  className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#D4AF37]/20
              bg-[#D4AF37]/5
              px-5
              py-2.5
              backdrop-blur-xl
            "
                >

                  <div className="h-2 w-2 rounded-full bg-[#D4AF37]" />

                  <span className="text-[12px] font-semibold tracking-[0.18em] text-[#f5e6b3]">
                    ENTERPRISE TRAINING PROGRAM
                  </span>

                </div>

                {course.priority === 1 && (

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
              "
                  >

                    <TrendingUp className="h-4 w-4 text-[#D4AF37]" />

                    <span className="text-[12px] font-semibold tracking-[0.12em] text-[#D4AF37]">
                      MOST DEMANDED COURSE
                    </span>

                  </div>
                )}

              </div>

              {/* SEO KEYWORD */}
              <div
                className="
            mt-8
            inline-flex
            rounded-full
            border
            border-white/10
            bg-white/[0.03]
            px-5
            py-2.5
            backdrop-blur-xl
          "
              >

                <span className="text-[13px] font-medium tracking-[0.08em] text-white/70">
                  BEST {course.shortTitle.toUpperCase()} IN HYDERABAD
                </span>

              </div>

              {/* MAIN TITLE */}
              <div className="mt-7">

                <h1
                  className="
              max-w-[1000px]
              text-[42px]
              font-black
              leading-[0.92]
              tracking-[-0.06em]
              text-white
              sm:text-[56px]
              lg:text-[82px]
              xl:text-[96px]
            "
                >

                  <span className="block text-white">
                    {course.shortTitle}
                  </span>

                  <span
                    className="
                mt-2
                block
                bg-gradient-to-r
                from-[#D4AF37]
                via-[#f5e6b3]
                to-[#D4AF37]
                bg-clip-text
                text-transparent
              "
                  >
                    Training in Hyderabad
                  </span>

                </h1>

                {/* SUB KEYWORDS */}
                <div className="mt-5 flex flex-wrap gap-3">

                  {[
                    "Real-Time Labs",
                    "Placement Support",
                    "Certification Guidance",
                    "Interview Preparation",
                  ].map((item, idx) => (

                    <div
                      key={idx}
                      className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/10
                  bg-black/25
                  px-4
                  py-2.5
                "
                    >

                      <ShieldCheck className="h-3.5 w-3.5 text-[#D4AF37]" />

                      <span className="text-[12px] font-medium text-white/75">
                        {item}
                      </span>

                    </div>
                  ))}

                </div>

              </div>

              {/* DESCRIPTION */}
              <p
                className="
            mt-8
            max-w-[860px]
            text-[17px]
            leading-[2]
            text-white/60
            lg:text-[18px]
          "
              >
                {course.heroDescription}
              </p>

              {/* STATS */}
              <div className="mt-9 flex flex-wrap gap-4">

                <div
                  className="
              flex
              items-center
              gap-4
              rounded-2xl
              border
              border-white/10
              bg-white/[0.03]
              px-5
              py-4
              backdrop-blur-xl
            "
                >

                  <div
                    className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
                bg-[#D4AF37]/10
              "
                  >

                    <Users className="h-5 w-5 text-[#D4AF37]" />

                  </div>

                  <div>

                    <p className="text-[11px] uppercase tracking-[0.2em] text-white/40">
                      Students
                    </p>

                    <p className="mt-1 text-[16px] font-semibold text-white">
                      {course.students} Trained
                    </p>

                  </div>

                </div>

                <div
                  className="
              flex
              items-center
              gap-4
              rounded-2xl
              border
              border-white/10
              bg-white/[0.03]
              px-5
              py-4
              backdrop-blur-xl
            "
                >

                  <div
                    className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
                bg-[#D4AF37]/10
              "
                  >

                    <Star className="h-5 w-5 fill-[#D4AF37] text-[#D4AF37]" />

                  </div>

                  <div>

                    <p className="text-[11px] uppercase tracking-[0.2em] text-white/40">
                      Student Rating
                    </p>

                    <p className="mt-1 text-[16px] font-semibold text-white">
                      {course.rating} / 5 Rating
                    </p>

                  </div>

                </div>

                <div
                  className="
              flex
              items-center
              gap-4
              rounded-2xl
              border
              border-white/10
              bg-white/[0.03]
              px-5
              py-4
              backdrop-blur-xl
            "
                >

                  <div
                    className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
                bg-[#D4AF37]/10
              "
                  >

                    <Clock3 className="h-5 w-5 text-[#D4AF37]" />

                  </div>

                  <div>

                    <p className="text-[11px] uppercase tracking-[0.2em] text-white/40">
                      Course Duration
                    </p>

                    <p className="mt-1 text-[16px] font-semibold text-white">
                      {course.duration}
                    </p>

                  </div>

                </div>

              </div>

              {/* CTA */}
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">

                <Link
                  href="/contact"
                  className="
      group
      flex
      h-[60px]
      items-center
      justify-center
      gap-3
      rounded-2xl
      bg-[#D4AF37]
      px-8
      text-[15px]
      font-semibold
      text-black
      transition-all
      duration-300
      hover:scale-[1.02]
      hover:shadow-[0_0_40px_rgba(212,175,55,0.35)]
    "
                >

                  Book Free Demo

                  <ArrowRight
                    className="
        h-4
        w-4
        transition-transform
        duration-300
        group-hover:translate-x-1
      "
                  />

                </Link>

                {/* SECONDARY CTA */}
                <Link
                  href="/courses"
                  className="
      flex
      h-[60px]
      items-center
      justify-center
      rounded-2xl
      border
      border-white/10
      bg-white/[0.03]
      px-8
      text-[15px]
      font-medium
      text-white
      backdrop-blur-xl
      transition-all
      duration-300
      hover:border-[#D4AF37]/30
      hover:bg-[#D4AF37]/[0.03]
      hover:text-[#D4AF37]
    "
                >
                  Explore All Courses
                </Link>


              </div>

            </div>

            {/* RIGHT SIDE PREMIUM CARD */}
            <div
              className="
          relative
          overflow-hidden
          rounded-[36px]
          border
          border-white/10
          bg-white/[0.04]
          p-7
          backdrop-blur-2xl
          lg:p-8
        "
            >

              {/* INNER GLOW */}
              <div
                className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.12),transparent_55%)]
          "
              />

              <div className="relative z-10">

                {/* TITLE */}
                <div className="flex items-center justify-between gap-5">

                  <div>

                    <p className="text-[12px] font-semibold tracking-[0.18em] text-[#D4AF37]">
                      COURSE OVERVIEW
                    </p>

                    <h2
                      className="
                  mt-3
                  text-[34px]
                  font-black
                  leading-[1]
                  tracking-[-0.04em]
                  text-white
                "
                    >
                      Why Students
                      <span className="block text-[#D4AF37]">
                        Choose NG Cloud
                      </span>
                    </h2>

                  </div>

                </div>

                {/* CONTENT */}
                <p
                  className="
              mt-6
              text-[15px]
              leading-[1.95]
              text-white/60
            "
                >
                  {course.instituteWhy}
                </p>

                {/* FEATURES */}
                <div className="mt-8 grid gap-4">

                  {course.courseHighlights
                    ?.slice(0, 5)
                    .map((item, idx) => (

                      <div
                        key={idx}
                        className="
                    flex
                    items-center
                    gap-4
                    rounded-2xl
                    border
                    border-white/10
                    bg-black/20
                    px-5
                    py-4
                  "
                      >

                        <div
                          className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#D4AF37]/10
                    "
                        >

                          <ShieldCheck className="h-4 w-4 text-[#D4AF37]" />

                        </div>

                        <div>

                          <h3 className="text-[15px] font-semibold text-white">
                            {item}
                          </h3>

                        </div>

                      </div>
                    ))}

                </div>

                {/* BOTTOM CTA */}
                <div
                  className="
              mt-8
              rounded-3xl
              border
              border-[#D4AF37]/20
              bg-[#D4AF37]/6
              p-6
            "
                >

                  <p className="text-[13px] font-semibold tracking-[0.16em] text-[#D4AF37]">
                    CAREER OPPORTUNITIES
                  </p>

                  <h3
                    className="
                mt-3
                text-[28px]
                font-black
                leading-[1.1]
                tracking-[-0.03em]
                text-white
              "
                  >
                    Start Your Career in
                    <span className="block text-[#D4AF37]">
                      {course.category}
                    </span>
                  </h3>

                  <p className="mt-4 text-[15px] leading-[1.9] text-white/60">
                    Learn practical enterprise skills with real-time projects,
                    placement preparation and certification-focused mentorship.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* SECTION DIVIDER */}
      <div className="mx-auto h-px max-w-[1400px] bg-gradient-to-r from-transparent via-[#D4AF37]/10 to-transparent" />

      {/* ABOUT */}
      <section className="relative overflow-hidden py-32">

        <div className="mx-auto max-w-[1400px] px-5">

          <div className="grid gap-16 lg:grid-cols-2">

            <div>

              <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 px-5 py-2.5">

                <div className="h-2 w-2 rounded-full bg-[#D4AF37]" />

                <span className="text-sm text-[#f5e6b3]">
                  About This Program
                </span>

              </div>

              <h2
                className="
                  mt-8
                  text-[44px]
                  font-black
                  leading-[1]
                  tracking-[-0.04em]
                  text-white
                  md:text-[64px]
                "
              >
                Why Learn

                <span className="block text-[#D4AF37]">
                  {course.shortTitle}
                </span>

              </h2>

              <div className="mt-6 h-px w-28 bg-gradient-to-r from-[#D4AF37] to-transparent" />

            </div>

            <div className="space-y-8">

              <p className="text-[18px] leading-[2] text-white/65">
                {course.whyLearn}
              </p>

              <p className="text-[18px] leading-[2] text-white/65">
                {course.description}
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* SKILLS */}
      <section className="relative overflow-hidden py-32">

        <div className="mx-auto max-w-[1400px] px-5">

          <div className="max-w-[850px]">

            <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 px-5 py-2.5">

              <div className="h-2 w-2 rounded-full bg-[#D4AF37]" />

              <span className="text-sm text-[#f5e6b3]">
                Skills You Will Gain
              </span>

            </div>

            <h2
              className="
                mt-8
                text-[44px]
                font-black
                leading-[1]
                tracking-[-0.04em]
                text-white
                md:text-[64px]
              "
            >
              Build Practical

              <span className="block text-[#D4AF37]">
                Enterprise Skills
              </span>

            </h2>

            <div className="mt-6 h-px w-28 bg-gradient-to-r from-[#D4AF37] to-transparent" />

          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            {course.skills.map((skill, index) => (
              <div
                key={index}
                className="
                  rounded-[32px]
                  border
                  border-[#D4AF37]/10
                  bg-gradient-to-b
                  from-[#111111]
                  to-[#080808]
                  p-8
                  shadow-[0_10px_40px_rgba(0,0,0,0.45)]
                "
              >

                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[#D4AF37]/10
                  "
                >

                  <Target className="h-7 w-7 text-[#D4AF37]" />

                </div>

                <h3
                  className="
                    mt-7
                    text-[22px]
                    font-bold
                    leading-[1.5]
                    text-white
                  "
                >
                  {skill}
                </h3>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CURRICULUM */}
      <section className="relative overflow-hidden py-32">

        <div className="mx-auto max-w-[1400px] px-5">

          <div className="max-w-[850px]">

            <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 px-5 py-2.5">

              <div className="h-2 w-2 rounded-full bg-[#D4AF37]" />

              <span className="text-sm text-[#f5e6b3]">
                Course Curriculum
              </span>

            </div>

            <h2
              className="
                mt-8
                text-[44px]
                font-black
                leading-[1]
                tracking-[-0.04em]
                text-white
                md:text-[64px]
              "
            >
              Complete Training

              <span className="block text-[#D4AF37]">
                Curriculum Modules
              </span>

            </h2>

            <div className="mt-6 h-px w-28 bg-gradient-to-r from-[#D4AF37] to-transparent" />

          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

            {course.syllabus.map((item, index) => (
              <div
                key={index}
                className="
                  flex
                  items-start
                  gap-4
                  rounded-[30px]
                  border
                  border-[#D4AF37]/10
                  bg-gradient-to-b
                  from-[#111111]
                  to-[#080808]
                  p-7
                  shadow-[0_10px_40px_rgba(0,0,0,0.45)]
                "
              >

                <div
                  className="
                    mt-1
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#D4AF37]/10
                  "
                >

                  <CheckCircle2 className="h-5 w-5 text-[#D4AF37]" />

                </div>

                <h3
                  className="
                    text-[18px]
                    font-semibold
                    leading-[1.7]
                    text-white
                  "
                >
                  {item}
                </h3>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* JOB ROLES */}
      <section className="relative overflow-hidden py-32">

        <div className="mx-auto max-w-[1400px] px-5">

          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">

            <div>

              <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 px-5 py-2.5">

                <div className="h-2 w-2 rounded-full bg-[#D4AF37]" />

                <span className="text-sm text-[#f5e6b3]">
                  Career Opportunities
                </span>

              </div>

              <h2
                className="
                  mt-8
                  text-[44px]
                  font-black
                  leading-[1]
                  tracking-[-0.04em]
                  text-white
                  md:text-[64px]
                "
              >
                Job Roles After

                <span className="block text-[#D4AF37]">
                  Course Completion
                </span>

              </h2>

              <div className="mt-6 h-px w-28 bg-gradient-to-r from-[#D4AF37] to-transparent" />

              <p className="mt-8 text-[18px] leading-[2] text-white/60">
                {course.salary}
              </p>

            </div>

            <div className="grid gap-6 md:grid-cols-2">

              {course.jobRoles.map((career, index) => (
                <div
                  key={index}
                  className="
                    rounded-[32px]
                    border
                    border-[#D4AF37]/10
                    bg-gradient-to-b
                    from-[#111111]
                    to-[#080808]
                    p-8
                    shadow-[0_10px_40px_rgba(0,0,0,0.45)]
                  "
                >

                  <div
                    className="
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-2xl
                      bg-[#D4AF37]/10
                    "
                  >

                    <BriefcaseBusiness className="h-7 w-7 text-[#D4AF37]" />

                  </div>

                  <h3
                    className="
                      mt-7
                      text-[22px]
                      font-bold
                      leading-[1.4]
                      text-white
                    "
                  >
                    {career}
                  </h3>

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* RECOMMENDED COURSES */}
      {recommendedCoursesData.length > 0 && (
        <section className="relative overflow-hidden py-32">

          <div className="mx-auto max-w-[1400px] px-5">

            <div className="max-w-[850px]">

              <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 px-5 py-2.5">

                <div className="h-2 w-2 rounded-full bg-[#D4AF37]" />

                <span className="text-sm text-[#f5e6b3]">
                  Recommended Programs
                </span>

              </div>

              <h2
                className="
                  mt-8
                  text-[44px]
                  font-black
                  leading-[1]
                  tracking-[-0.04em]
                  text-white
                  md:text-[64px]
                "
              >
                Explore More

                <span className="block text-[#D4AF37]">
                  Career-Focused Courses
                </span>

              </h2>

              <div className="mt-6 h-px w-28 bg-gradient-to-r from-[#D4AF37] to-transparent" />

            </div>

            <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

              {recommendedCoursesData.map((item, index) => (
                <Link
                  key={index}
                  href={`/courses/${item.slug}`}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[32px]
                    border
                    border-[#D4AF37]/10
                    bg-gradient-to-b
                    from-[#111111]
                    to-[#080808]
                    p-8
                    transition-all
                    duration-500
                    hover:border-[#D4AF37]/30
                    hover:-translate-y-1
                    hover:shadow-[0_20px_60px_rgba(0,0,0,0.45)]
                  "
                >

                  <div
                    className="
                      absolute
                      inset-0
                      opacity-0
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                      bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.08),transparent_60%)]
                    "
                  />

                  <div className="relative z-10">

                    <div
                      className="
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        rounded-2xl
                        bg-[#D4AF37]/10
                      "
                    >
                      <BookOpen className="h-7 w-7 text-[#D4AF37]" />
                    </div>

                    <h3
                      className="
                        mt-7
                        text-[24px]
                        font-bold
                        leading-[1.3]
                        text-white
                        transition-colors
                        duration-300
                        group-hover:text-[#D4AF37]
                      "
                    >
                      {item.shortTitle}
                    </h3>

                    <p
                      className="
                        mt-5
                        line-clamp-3
                        text-[15px]
                        leading-[1.9]
                        text-white/60
                      "
                    >
                      {item.heroDescription}
                    </p>

                    <div
                      className="
                        mt-8
                        inline-flex
                        items-center
                        gap-2
                        text-sm
                        font-medium
                        text-[#D4AF37]
                      "
                    >
                      View Course

                      <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />

                    </div>

                  </div>

                </Link>
              ))}

            </div>

          </div>

        </section>
      )}

      {/* FINAL CTA */}
      <section className="relative overflow-hidden pb-32 pt-10">

        <div className="mx-auto max-w-[1400px] px-5">

          <div
            className="
              relative
              overflow-hidden
              rounded-[42px]
              border
              border-[#D4AF37]/10
              bg-gradient-to-b
              from-[#111111]
              to-[#080808]
              px-8
              py-20
              shadow-[0_20px_60px_rgba(0,0,0,0.45)]
              lg:px-16
            "
          >

            <div className="absolute right-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-[#D4AF37]/10 blur-[120px]" />

            <div className="relative z-10 max-w-[950px]">

              <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 px-5 py-2.5">

                <div className="h-2 w-2 rounded-full bg-[#D4AF37]" />

                <span className="text-sm text-[#f5e6b3]">
                  Start Your IT Career Journey
                </span>

              </div>

              <h2
                className="
                  mt-8
                  text-[44px]
                  font-black
                  leading-[1]
                  tracking-[-0.04em]
                  text-white
                  md:text-[68px]
                "
              >
                Join the Best

                <span className="block text-[#D4AF37]">
                  {course.shortTitle} Training Institute
                </span>

              </h2>

              <div className="mt-6 h-px w-28 bg-gradient-to-r from-[#D4AF37] to-transparent" />

              <p
                className="
                  mt-8
                  max-w-[760px]
                  text-[18px]
                  leading-[2]
                  text-white/65
                "
              >
                Build practical real-world skills with enterprise labs,
                placement-focused mentorship and certification guidance.
                Start your career with industry-focused training at
                NG Cloud Networks.
              </p>

              <div className="mt-12 flex flex-col gap-5 sm:flex-row">

                <button
                  className="
                    flex
                    h-[62px]
                    items-center
                    justify-center
                    rounded-full
                    bg-gradient-to-b
                    from-[#E7C35A]
                    to-[#C79A22]
                    px-10
                    text-[15px]
                    font-semibold
                    text-black
                    shadow-[0_10px_30px_rgba(212,175,55,0.25)]
                    transition-all
                    duration-300
                    hover:scale-[1.03]
                  "
                >
                  Book Free Demo
                </button>

                <button
                  className="
                    flex
                    h-[62px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#D4AF37]/10
                    bg-black/20
                    px-10
                    text-[15px]
                    font-medium
                    text-white
                    transition-all
                    duration-300
                    hover:border-[#D4AF37]/30
                    hover:text-[#D4AF37]
                  "
                >
                  Contact Our Team
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>
      <section className="relative py-20">
        <div className="mx-auto max-w-[1200px] px-5">

          <div
            className="
        rounded-[32px]
        border
        border-white/10
        bg-white/[0.03]
        p-8
        backdrop-blur-xl
      "
          >

            <h2 className="text-[38px] font-black text-white">
              {course.title}
            </h2>

            <div
              className="
          mt-6
          text-[17px]
          leading-[2]
          text-white/65
        "
            >
              {course.seoContent}
            </div>

          </div>

        </div>
      </section>

      <Footer />

    </main>
  );
}