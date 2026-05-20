"use client";

import Link from "next/link";

import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  Clock3,
  ShieldCheck,
  User2,
  Workflow,
  Globe2,
  Network,
  Search,
  TrendingUp,
  Sparkles,
} from "lucide-react";

import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

import { blogs } from "@/data/blogs";

const featuredPost = blogs.find((blog) => blog.featured);

const blogCategories = [
  {
    title: "Networking",
    icon: Network,
  },
  {
    title: "Cloud Computing",
    icon: Globe2,
  },
  {
    title: "Cyber Security",
    icon: ShieldCheck,
  },
  {
    title: "Enterprise Infrastructure",
    icon: Workflow,
  },
];

export default function BlogPage() {

  return (
    <main className="overflow-hidden bg-[#050505] text-white">

      <Navbar />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-36 pb-20 lg:pt-40 lg:pb-24">

        {/* BACKGROUND */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">

          <div className="absolute left-[-120px] top-[-120px] h-[420px] w-[420px] rounded-full bg-[#D4AF37]/10 blur-[130px]" />

          <div className="absolute right-[-120px] bottom-[-120px] h-[420px] w-[420px] rounded-full bg-[#D4AF37]/10 blur-[130px]" />

          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
              backgroundSize: "52px 52px",
            }}
          />

        </div>

        <div className="relative z-10 mx-auto max-w-[1450px] px-5">

          <div className="max-w-[1050px]">

            {/* BADGE */}
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

              <span className="text-sm tracking-wide text-[#f5e6b3]">
                Technical Blogs • Career Insights • Enterprise Learning
              </span>

            </div>

            {/* TITLE */}
            <h1
              className="
                mt-8
                max-w-[1100px]
                text-[46px]
                font-black
                leading-[0.9]
                tracking-[-0.06em]
                text-white
                md:text-[74px]
                xl:text-[100px]
              "
            >
              Enterprise Networking

              <span className="block text-[#D4AF37]">
                Cloud & Security Blogs
              </span>

            </h1>

            {/* DESCRIPTION */}
            <p
              className="
                mt-8
                max-w-[860px]
                text-[18px]
                leading-[2]
                text-white/60
              "
            >
              Explore practical networking tutorials, AWS cloud articles,
              cyber security insights, SD-WAN concepts, firewall technologies,
              interview preparation strategies and enterprise infrastructure
              knowledge designed for students, freshers and IT professionals.
            </p>

            {/* TAGS */}
            <div className="mt-8 flex flex-wrap gap-3">

              {[
                "CCNA Training",
                "AWS Cloud",
                "Cisco SD-WAN",
                "Cyber Security",
                "F5 Load Balancer",
                "Network Engineer Careers",
              ].map((item, index) => (

                <div
                  key={index}
                  className="
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.03]
                    px-4
                    py-2
                    text-[13px]
                    text-white/70
                  "
                >
                  {item}
                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* FEATURED BLOG */}
      {featuredPost && (

        <section className="relative overflow-hidden pb-24">

          <div className="mx-auto max-w-[1450px] px-5">

            <div
              className="
                group
                relative
                overflow-hidden
                rounded-[42px]
                border
                border-[#D4AF37]/20
                bg-[#D4AF37]/[0.04]
                p-7
                backdrop-blur-2xl
                transition-all
                duration-500
                hover:border-[#D4AF37]/35
                lg:p-10
              "
            >

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.12),transparent_55%)]" />

              <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">

                {/* LEFT */}
                <div>

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
                      text-[12px]
                      font-semibold
                      tracking-[0.08em]
                      text-[#D4AF37]
                    "
                  >

                    <Sparkles className="h-3.5 w-3.5" />

                    Featured Article

                  </div>

                  <h2
                    className="
                      mt-7
                      max-w-[780px]
                      text-[38px]
                      font-black
                      leading-[1]
                      tracking-[-0.04em]
                      text-white
                      md:text-[58px]
                    "
                  >
                    {featuredPost.title}
                  </h2>

                  <p
                    className="
                      mt-7
                      max-w-[760px]
                      text-[17px]
                      leading-[2]
                      text-white/60
                    "
                  >
                    {featuredPost.excerpt}
                  </p>

                  {/* META */}
                  <div className="mt-8 flex flex-wrap gap-4">

                    <div
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-white/10
                        bg-black/20
                        px-4
                        py-2
                      "
                    >

                      <CalendarDays className="h-4 w-4 text-[#D4AF37]" />

                      <span className="text-[13px] text-white/75">
                        {featuredPost.publishedDate}
                      </span>

                    </div>

                    <div
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-white/10
                        bg-black/20
                        px-4
                        py-2
                      "
                    >

                      <Clock3 className="h-4 w-4 text-[#D4AF37]" />

                      <span className="text-[13px] text-white/75">
                        {featuredPost.readTime}
                      </span>

                    </div>

                  </div>

                  {/* CTA */}
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="
                      group
                      mt-10
                      inline-flex
                      h-[60px]
                      items-center
                      justify-center
                      gap-3
                      rounded-full
                      bg-[#D4AF37]
                      px-8
                      text-[15px]
                      font-semibold
                      text-black
                      transition-all
                      duration-300
                      hover:scale-[1.02]
                      hover:shadow-[0_0_35px_rgba(212,175,55,0.35)]
                    "
                  >

                    Read Full Article

                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />

                  </Link>

                </div>

                {/* RIGHT */}
                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-[34px]
                    border
                    border-white/10
                    bg-black/20
                    p-10
                  "
                >

                  <div
                    className="
                      absolute
                      inset-0
                      bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.12),transparent_60%)]
                    "
                  />

                  <div className="relative z-10">

                    <div
                      className="
                        flex
                        h-20
                        w-20
                        items-center
                        justify-center
                        rounded-2xl
                        bg-[#D4AF37]/10
                      "
                    >

                      <TrendingUp className="h-10 w-10 text-[#D4AF37]" />

                    </div>

                    <h3
                      className="
                        mt-8
                        text-[34px]
                        font-black
                        leading-[1.1]
                        tracking-[-0.03em]
                        text-white
                      "
                    >
                      Build Real Enterprise Skills
                    </h3>

                    <p
                      className="
                        mt-6
                        text-[16px]
                        leading-[2]
                        text-white/60
                      "
                    >
                      Learn practical enterprise technologies including
                      CCNA, AWS Cloud, SD-WAN, Palo Alto Firewall,
                      Fortigate, Azure Cloud and F5 Load Balancer through
                      practical implementation-focused learning.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">

                      {featuredPost.tags?.slice(0, 4).map((tag, index) => (

                        <div
                          key={index}
                          className="
                            rounded-full
                            border
                            border-white/10
                            bg-white/[0.03]
                            px-4
                            py-2
                            text-[12px]
                            text-white/70
                          "
                        >
                          {tag}
                        </div>
                      ))}

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>
      )}

      {/* CATEGORIES */}
      <section className="relative overflow-hidden pb-20">

        <div className="mx-auto max-w-[1450px] px-5">

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

            {blogCategories.map((item, index) => {

              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="
                    group
                    rounded-[30px]
                    border
                    border-white/10
                    bg-white/[0.03]
                    p-7
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:border-[#D4AF37]/30
                    hover:bg-[#D4AF37]/[0.03]
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

                    <Icon className="h-8 w-8 text-[#D4AF37]" />

                  </div>

                  <h3
                    className="
                      mt-6
                      text-[24px]
                      font-black
                      leading-[1.2]
                      text-white
                    "
                  >
                    {item.title}
                  </h3>

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* BLOG GRID */}
      <section className="relative overflow-hidden pb-28">

        <div className="mx-auto max-w-[1450px] px-5">

          <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">

            {blogs.map((blog, index) => (

              <div
                key={index}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[34px]
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-7
                  backdrop-blur-2xl
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-[#D4AF37]/30
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
                    bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.12),transparent_55%)]
                  "
                />

                <div className="relative z-10">

                  {/* CATEGORY */}
                  <div
                    className="
                      inline-flex
                      rounded-full
                      border
                      border-[#D4AF37]/20
                      bg-[#D4AF37]/10
                      px-4
                      py-2
                      text-[12px]
                      font-semibold
                      tracking-wide
                      text-[#D4AF37]
                    "
                  >
                    {blog.category}
                  </div>

                  {/* TITLE */}
                  <h3
                    className="
                      mt-6
                      text-[30px]
                      font-black
                      leading-[1.08]
                      tracking-[-0.03em]
                      text-white
                    "
                  >
                    {blog.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p
                    className="
                      mt-5
                      text-[16px]
                      leading-[1.9]
                      text-white/60
                    "
                  >
                    {blog.excerpt}
                  </p>

                  {/* TAGS */}
                  <div className="mt-6 flex flex-wrap gap-2">

                    {blog.tags?.slice(0, 3).map((tag, idx) => (

                      <div
                        key={idx}
                        className="
                          rounded-full
                          border
                          border-white/10
                          bg-black/20
                          px-3
                          py-1.5
                          text-[11px]
                          text-white/70
                        "
                      >
                        {tag}
                      </div>
                    ))}

                  </div>

                  {/* META */}
                  <div className="mt-7 flex flex-wrap gap-4">

                    <div
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-white/10
                        bg-black/20
                        px-4
                        py-2
                      "
                    >

                      <CalendarDays className="h-4 w-4 text-[#D4AF37]" />

                      <span className="text-[13px] text-white/75">
                        {blog.publishedDate}
                      </span>

                    </div>

                    <div
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-white/10
                        bg-black/20
                        px-4
                        py-2
                      "
                    >

                      <Clock3 className="h-4 w-4 text-[#D4AF37]" />

                      <span className="text-[13px] text-white/75">
                        {blog.readTime}
                      </span>

                    </div>

                  </div>

                  {/* AUTHOR */}
                  <div
                    className="
                      mt-7
                      flex
                      items-center
                      gap-3
                    "
                  >

                    <div
                      className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-full
                        bg-[#D4AF37]/10
                      "
                    >

                      <User2 className="h-5 w-5 text-[#D4AF37]" />

                    </div>

                    <div>

                      <p className="text-[14px] font-semibold text-white">
                        {blog.author}
                      </p>

                      <p className="text-[13px] text-white/45">
                        Enterprise Training Team
                      </p>

                    </div>

                  </div>

                  {/* CTA */}
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="
                      mt-9
                      flex
                      h-[56px]
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-2xl
                      bg-[#D4AF37]
                      text-[15px]
                      font-semibold
                      text-black
                      transition-all
                      duration-300
                      hover:scale-[1.02]
                      hover:shadow-[0_0_35px_rgba(212,175,55,0.35)]
                    "
                  >

                    Read Article

                    <ArrowUpRight className="h-4 w-4" />

                  </Link>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="relative overflow-hidden pb-28">

        <div className="mx-auto max-w-[1450px] px-5">

          <div
            className="
              relative
              overflow-hidden
              rounded-[42px]
              border
              border-[#D4AF37]/20
              bg-[#D4AF37]/[0.05]
              p-10
              text-center
              backdrop-blur-2xl
              lg:p-16
            "
          >

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.12),transparent_60%)]" />

            <div className="relative z-10 mx-auto max-w-[920px]">

              <div
                className="
                  mx-auto
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  rounded-full
                  bg-[#D4AF37]/10
                "
              >

                <BookOpen className="h-10 w-10 text-[#D4AF37]" />

              </div>

              <h2
                className="
                  mt-8
                  text-[42px]
                  font-black
                  leading-[0.96]
                  tracking-[-0.04em]
                  text-white
                  md:text-[64px]
                "
              >
                Learn Enterprise Technologies

                <span className="block text-[#D4AF37]">
                  with Practical Training
                </span>

              </h2>

              <p
                className="
                  mt-8
                  text-[18px]
                  leading-[2]
                  text-white/65
                "
              >
                Build practical networking, cloud and cyber security
                skills through real-time labs, certification-oriented
                mentorship and enterprise infrastructure training.
              </p>

              <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">

                <Link
                  href="/courses"
                  className="
                    group
                    flex
                    h-[62px]
                    items-center
                    justify-center
                    gap-3
                    rounded-full
                    bg-[#D4AF37]
                    px-9
                    text-[15px]
                    font-semibold
                    text-black
                    transition-all
                    duration-300
                    hover:scale-[1.02]
                  "
                >

                  Explore Courses

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />

                </Link>

                <Link
                  href="/contact"
                  className="
                    flex
                    h-[62px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.03]
                    px-9
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
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}