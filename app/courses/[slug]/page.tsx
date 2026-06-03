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
<section className="relative overflow-hidden border-b border-white/5 bg-[#050505] pt-28 pb-24 lg:pt-36">

  {/* ambient glow */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 overflow-hidden"
  >
    <div className="absolute left-[-10%] top-[10%] h-[420px] w-[420px] rounded-full bg-[#D4AF37]/10 blur-[140px]" />

    <div className="absolute right-[-10%] bottom-[-10%] h-[380px] w-[380px] rounded-full bg-[#D4AF37]/5 blur-[140px]" />

    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
        backgroundSize: "42px 42px",
      }}
    />
  </div>

  <div className="relative z-10 mx-auto grid max-w-[1440px] gap-14 px-5 lg:grid-cols-[1.08fr_0.92fr]">

    {/* LEFT CONTENT */}
    <div className="max-w-[820px]">

      {/* badges */}
      <div className="flex flex-wrap items-center gap-3">

        <div className="rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 px-5 py-2 text-[12px] font-semibold tracking-[0.18em] text-[#F5E6B3]">
          ENTERPRISE TRAINING PROGRAM
        </div>

        {course.priority === 1 && (
          <div className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-5 py-2 text-[12px] font-semibold tracking-[0.14em] text-emerald-300">
            MOST DEMANDED COURSE
          </div>
        )}

      </div>

      {/* heading */}
      <h1
        className="
          mt-8
          text-[42px]
          font-black
          leading-[0.95]
          tracking-[-0.04em]
          text-white
          sm:text-[56px]
          lg:text-[74px]
        "
      >
        Master
        <span className="block bg-gradient-to-r from-[#D4AF37] via-[#F5E6B3] to-[#D4AF37] bg-clip-text text-transparent">
          {course.shortTitle}
        </span>

        <span className="mt-2 block text-white">
          Training in Hyderabad
        </span>
      </h1>

      {/* description */}
      <p
        className="
          mt-8
          max-w-[760px]
          text-[17px]
          leading-[1.9]
          text-white/65
        "
      >
        {course.heroDescription}
      </p>

      {/* trust badges */}
      <div className="mt-8 flex flex-wrap gap-3">

        {[
          "Real-Time Labs",
          "Placement Assistance",
          "Certification Guidance",
          "Interview Preparation",
        ].map((item, index) => (
          <div
            key={index}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5"
          >
            <div className="h-2 w-2 rounded-full bg-[#D4AF37]" />

            <span className="text-[13px] font-medium text-white/70">
              {item}
            </span>
          </div>
        ))}

      </div>

      {/* metrics */}
      <div className="mt-10 flex flex-wrap gap-4">

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5 backdrop-blur-xl">
          <p className="text-[12px] uppercase tracking-[0.18em] text-white/40">
            Students Trained
          </p>

          <p className="mt-2 text-[24px] font-bold text-white">
            {course.students}+
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5 backdrop-blur-xl">
          <p className="text-[12px] uppercase tracking-[0.18em] text-white/40">
            Student Rating
          </p>

          <p className="mt-2 text-[24px] font-bold text-white">
            {course.rating}/5
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5 backdrop-blur-xl">
          <p className="text-[12px] uppercase tracking-[0.18em] text-white/40">
            Course Duration
          </p>

          <p className="mt-2 text-[24px] font-bold text-white">
            {course.duration}
          </p>
        </div>

      </div>
      <div
  className="
    mt-8
    rounded-[30px]
    border
    border-[#D4AF37]/20
    bg-gradient-to-r
    from-[#D4AF37]/10
    via-[#D4AF37]/5
    to-transparent
    p-7
  "
>

  <div className="flex items-center justify-between">

    <div>

      <span className="text-sm text-[#f5e6b3]">
        Course Investment
      </span>

      <h3 className="mt-2 text-[42px] font-black text-white">
        {course.price}
      </h3>

      <p className="mt-2 text-white/60">
        Includes practical labs, study materials,
        interview preparation and placement support.
      </p>

    </div>

    <div
      className="
        rounded-2xl
        border
        border-[#D4AF37]/20
        bg-[#D4AF37]/10
        px-5
        py-3
      "
    >
      <span className="text-[#D4AF37] font-semibold">
        Limited Seats
      </span>
    </div>

  </div>

</div>

      {/* CTA */}
      <div className="mt-12 flex flex-col gap-4 sm:flex-row">

        <Link
          href="/contact"
          className="
            inline-flex
            h-[58px]
            items-center
            justify-center
            rounded-2xl
            bg-[#D4AF37]
            px-8
            text-[15px]
            font-semibold
            text-black
            transition-all
            duration-300
            hover:translate-y-[-2px]
            hover:shadow-[0_10px_40px_rgba(212,175,55,0.25)]
          "
        >
          Book Free Demo
        </Link>

        <Link
          href="/courses"
          className="
            inline-flex
            h-[58px]
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
            transition-all
            duration-300
            hover:border-[#D4AF37]/30
            hover:text-[#D4AF37]
          "
        >
          Explore All Courses
        </Link>

      </div>

    </div>

    {/* RIGHT STICKY PANEL */}
    <div className="lg:sticky lg:top-28 lg:h-fit">

      <div
        className="
          overflow-hidden
          rounded-[32px]
          border
          border-white/10
          bg-[#0F0F0F]
          p-8
          shadow-[0_20px_80px_rgba(0,0,0,0.45)]
        "
      >

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.12),transparent_60%)]" />

        <div className="relative z-10">

          <p className="text-[12px] font-semibold tracking-[0.18em] text-[#D4AF37]">
            COURSE OVERVIEW
          </p>

          <h2 className="mt-4 text-[34px] font-black leading-[1.05] tracking-[-0.03em] text-white">
            Why Students
            <span className="block text-[#D4AF37]">
              Choose NG Cloud
            </span>
          </h2>

          <p className="mt-6 text-[15px] leading-[1.9] text-white/60">
            {course.instituteWhy}
          </p>

          <div className="mt-8 space-y-4">

            {course.courseHighlights?.slice(0, 5).map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-black/20 px-5 py-4"
              >

                <div className="mt-1 h-2.5 w-2.5 rounded-full bg-[#D4AF37]" />

                <p className="text-[15px] leading-[1.7] text-white/75">
                  {item}
                </p>

              </div>
            ))}

          </div>

          <div className="mt-8 rounded-3xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-6">

            <p className="text-[12px] font-semibold tracking-[0.18em] text-[#D4AF37]">
              CAREER OUTCOMES
            </p>

            <h3 className="mt-3 text-[28px] font-black leading-[1.1] tracking-[-0.03em] text-white">
              Build Your Career in
              <span className="block text-[#D4AF37]">
                {course.category}
              </span>
            </h3>

            <p className="mt-4 text-[15px] leading-[1.9] text-white/60">
              Learn enterprise-level practical skills with real-time projects,
              placement-focused mentorship and certification guidance.
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
{/* ABOUT */}
{/* ABOUT */}
<section className="relative overflow-hidden py-28 lg:py-36">
  
  {/* Background Accents */}
  <div className="absolute inset-0">
    <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.08),transparent_40%)]" />
    <div className="absolute bottom-0 right-0 h-full w-full bg-[radial-gradient(circle_at_bottom_right,rgba(212,175,55,0.05),transparent_35%)]" />
  </div>

  <div className="relative mx-auto max-w-[1500px] px-6">

    {/* Premium Frame */}
    <div className="relative rounded-[40px] border border-white/10 bg-[#0b0b0b]/80 p-8 shadow-[0_0_80px_rgba(0,0,0,0.45)] backdrop-blur-xl lg:p-14">

      {/* Decorative Lines */}
      <div className="absolute left-0 top-20 h-px w-24 bg-gradient-to-r from-transparent to-[#D4AF37]" />
      <div className="absolute bottom-20 right-0 h-px w-24 bg-gradient-to-l from-transparent to-[#D4AF37]" />

      <div className="grid items-start gap-16 lg:grid-cols-[1.1fr_0.9fr]">

        {/* LEFT SIDE */}
        <div className="relative">

          {/* Label */}
          <div className="inline-flex items-center gap-3 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/[0.05] px-6 py-3">
            <div className="h-2 w-2 rounded-full bg-[#D4AF37] shadow-[0_0_12px_#D4AF37]" />

            <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#f5e6b3]">
              About This Program
            </span>
          </div>

          {/* Heading */}
          <h2
            className="
              mt-10
              max-w-4xl
              text-[46px]
              font-black
              leading-[0.92]
              tracking-[-0.05em]
              text-white
              sm:text-[62px]
              xl:text-[86px]
            "
          >
            Why Learn

            <span className="mt-2 block text-[#D4AF37]">
              {course.shortTitle}
            </span>
          </h2>

          {/* Elegant Divider */}
          <div className="mt-10 flex items-center gap-4">
            <div className="h-px w-24 bg-[#D4AF37]" />
            <div className="h-2 w-2 rounded-full bg-[#D4AF37]" />
            <div className="h-px w-40 bg-gradient-to-r from-[#D4AF37]/60 to-transparent" />
          </div>

          {/* Main Paragraph */}
          <div className="mt-14 max-w-3xl">
            <p className="text-[19px] leading-[2] text-white/72">
              {course.whyLearn}
            </p>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="relative">

          {/* Luxury Content Card */}
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.025] p-8 lg:p-10">

            {/* Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.12),transparent_35%)]" />

            {/* Top Accent */}
            <div className="relative flex items-center justify-between border-b border-white/10 pb-6">
              <div>
                <p className="text-[11px] uppercase tracking-[0.3em] text-[#D4AF37]">
                  Program Vision
                </p>

                <h3 className="mt-3 text-2xl font-semibold text-white">
                  Modern Industry Learning
                </h3>
              </div>

              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 text-[#D4AF37]">
                ✦
              </div>
            </div>

            {/* Description */}
            <div className="relative pt-8">
              <p className="text-[17px] leading-[2] text-white/65">
                {course.description}
              </p>
            </div>

          </div>

          {/* Floating Premium Badge */}
          <div className="mt-8 flex items-center gap-5 rounded-2xl border border-white/10 bg-black/40 px-6 py-5 backdrop-blur-md">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#D4AF37]/10 text-xl text-[#D4AF37]">
              ★
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-[#D4AF37]/80">
                Career Focused
              </p>

              <p className="mt-2 text-white/60">
                Built for practical skills, real-world execution, and
                long-term professional growth.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  </div>
</section>
{/* SKILLS */}
<section className="relative overflow-hidden py-10 lg:py-14">

  <div className="mx-auto max-w-[1450px] px-5">

    {/* CENTERED HEADER */}
    <div className="border-b border-white/10 pb-10">

      <div className="mx-auto flex max-w-[950px] flex-col items-center text-center">

        <div className="inline-flex items-center gap-2.5 rounded-full border border-[#D4AF37]/15 bg-[#D4AF37]/[0.04] px-4 py-2">
          <div className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />

          <span className="text-[10px] uppercase tracking-[0.24em] text-[#f5e6b3]">
            Skills You Will Gain
          </span>
        </div>

        <h2
          className="
            mt-6
            text-[36px]
            font-black
            leading-[0.95]
            tracking-[-0.05em]
            text-white
            sm:text-[50px]
            xl:text-[62px]
          "
        >
          Build Practical

          <span className="block text-[#D4AF37]">
            Enterprise Skills
          </span>
        </h2>

        <p className="mt-6 max-w-2xl text-[15px] leading-[1.8] text-white/60">
          Master real-world tools, enterprise workflows, and production-ready
          implementation strategies used by modern engineering teams.
        </p>

      </div>

    </div>

    {/* COMPACT SKILLS TABLE */}
    <div className="mt-10 flex justify-center">

      <div className="w-full max-w-[950px] overflow-hidden rounded-[28px] border border-white/10 bg-[#0d0d0d]">

        {course.skills.map((skill, index) => (
          <div
            key={index}
            className="
              group
              grid
              items-center
              gap-4
              border-b
              border-white/10
              px-5
              py-4
              transition-all
              duration-300
              hover:bg-white/[0.03]
              md:grid-cols-[60px_1fr_auto]
              md:px-7
            "
          >

            {/* Number */}
            <div
              className="
                text-[11px]
                font-semibold
                tracking-[0.22em]
                text-[#D4AF37]/65
              "
            >
              {(index + 1).toString().padStart(2, "0")}
            </div>

            {/* Skill Name */}
            <h3
              className="
                text-[17px]
                font-bold
                tracking-[-0.03em]
                text-white
                transition-all
                duration-300
                group-hover:text-[#D4AF37]
                md:text-[20px]
              "
            >
              {skill}
            </h3>

            {/* Indicator */}
            <div className="hidden md:flex">
              <div
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#D4AF37]/15
                  bg-[#D4AF37]/10
                "
              >
                <Target className="h-3.5 w-3.5 text-[#D4AF37]" />
              </div>
            </div>

          </div>
        ))}

      </div>

    </div>

  </div>
</section>

{/* CURRICULUM */}
<section className="relative overflow-hidden py-20 lg:py-28">

  <div className="mx-auto max-w-[1450px] px-5">

    {/* HEADER */}
    <div className="mx-auto max-w-[900px] text-center">

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
          py-2
        "
      >
        <div className="h-2 w-2 rounded-full bg-[#D4AF37]" />

        <span className="text-[11px] tracking-[0.22em] uppercase text-[#f5e6b3]">
          Course Curriculum
        </span>

      </div>

      <h2
        className="
          mt-7
          text-[38px]
          font-black
          leading-[0.95]
          tracking-[-0.05em]
          text-white
          md:text-[56px]
          xl:text-[68px]
        "
      >
        Complete Training

        <span className="block text-[#D4AF37]">
          Learning Roadmap
        </span>

      </h2>

      <p
        className="
          mx-auto
          mt-6
          max-w-[720px]
          text-[16px]
          leading-[1.9]
          text-white/60
        "
      >
        Structured practical training designed to build
        enterprise-level expertise through real-time
        implementation, troubleshooting and project-based learning.
      </p>

    </div>

    {/* MODULES */}
    <div
  className={`
    mt-16
    grid
    gap-7
    md:grid-cols-2
    ${
      course.curriculum?.length <= 4
        ? "xl:grid-cols-2"
        : "xl:grid-cols-3"
    }
  `}
>

      {course.curriculum?.map((module, index) => (

  <div
    key={index}
    className="
      group
      relative
      overflow-hidden
      rounded-[32px]
      border
      border-white/10
      bg-white/[0.03]
      backdrop-blur-xl
      transition-all
      duration-500
      hover:-translate-y-1
      hover:border-[#D4AF37]/30
      hover:bg-[#D4AF37]/[0.03]
    "
  >

    {/* Glow */}
    <div
      className="
        absolute
        inset-0
        opacity-0
        transition-opacity
        duration-500
        group-hover:opacity-100
        bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.12),transparent_60%)]
      "
    />

    <div className="relative z-10 p-7">

      {/* Module Number */}
      <div
        className="
          inline-flex
          items-center
          rounded-full
          border
          border-[#D4AF37]/20
          bg-[#D4AF37]/10
          px-3
          py-1.5
          text-[11px]
          font-semibold
          uppercase
          tracking-[0.15em]
          text-[#D4AF37]
        "
      >
        Module {(index + 1).toString().padStart(2, "0")}
      </div>

      {/* Title */}
      <h3
        className="
          mt-5
          text-[24px]
          font-black
          leading-[1.15]
          tracking-[-0.03em]
          text-white
        "
      >
        {module.module}
      </h3>

      {/* Duration */}
      <div className="mt-5 flex flex-wrap gap-2">

        <span
          className="
            rounded-full
            border
            border-white/10
            bg-black/20
            px-4
            py-2
            text-[12px]
            text-white/70
          "
        >
          {module.duration}
        </span>

        <span
          className="
            rounded-full
            border
            border-[#D4AF37]/15
            bg-[#D4AF37]/10
            px-4
            py-2
            text-[12px]
            text-[#f5e6b3]
          "
        >
          {module.days}
        </span>

      </div>

      {/* Topics */}
      <div className="mt-7 space-y-3">

        {module.topics.map(
          (topic: string, topicIndex: number) => (

            <div
              key={topicIndex}
              className="
                flex
                items-start
                gap-3
              "
            >

              <div
                className="
                  mt-[7px]
                  h-2
                  w-2
                  shrink-0
                  rounded-full
                  bg-[#D4AF37]
                "
              />

              <span
                className="
                  text-[14px]
                  leading-[1.7]
                  text-white/70
                "
              >
                {topic}
              </span>

            </div>
          )
        )}

      </div>

    </div>

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