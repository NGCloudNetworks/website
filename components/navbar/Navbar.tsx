"use client";

import Image from "next/image";
import Link from "next/link";

import {
  CalendarDays,
  ChevronDown,
  Menu,
  Phone,
  X,
  ArrowUpRight,
  Mail,
  MapPin,
  Clock3,
  ShieldCheck,
} from "lucide-react";

import { useState } from "react";
import { courseLinks, courseCategories } from "@/data/courseLinks";

const navLinks = [
  {
    name: "Courses",
    href: "/courses",
    dropdown: true,
  },
  {
    name: "Placements",
    href: "/placements",
  },
  {
    name: "Corporate Training",
    href: "/corporate-training",
  },
  {
    name: "Resources",
    href: "/resources",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    date: "",
    slot: "",
    message: "",
  });
  const [mobileOpen, setMobileOpen] = useState(false);

  const [coursesOpen, setCoursesOpen] = useState(false);

  const [demoOpen, setDemoOpen] = useState(false);

  const [callOpen, setCallOpen] = useState(false);
  const groupedCourses = courseCategories.map((category) => ({
    category,
    items: courseLinks.filter((c) => c.category === category),
  }));

  const [mobileCoursesOpen, setMobileCoursesOpen] =
    useState(false);
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLSelectElement |
      HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async () => {
    try {
      setLoading(true);

      const response = await fetch("/api/contact", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          ...formData,
          type: "demo",
        }),
      });

      const data = await response.json();

      if (data.success) {

        alert(
          "Demo booked successfully. Our team will contact you shortly."
        );

        setFormData({
          name: "",
          email: "",
          phone: "",
          course: "",
          date: "",
          slot: "",
          message: "",
        });

      } else {
        alert("Something went wrong.");
      }

    } catch (error) {
      console.log(error);

      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 z-50 w-full px-4 pt-3">

        <div className="mx-auto max-w-[1780px]">

          <div
            className="
              relative
              flex
              items-center
              justify-between
              h-[92px]
              rounded-[32px]
              border
              border-[#D4AF37]/25
              bg-[#040404]/88
              backdrop-blur-[24px]
              supports-[backdrop-filter]:bg-[#050505]/72
              px-8
              xl:px-10
              shadow-[0_20px_80px_rgba(0,0,0,0.85)]
            "
          >

            {/* BRAND */}

            {/* LOGO */}
            <Link
              href="/"
              className="group flex items-center"
            >

              <div
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-2
                  transition-all
                  duration-300
                  group-hover:border-[#D4AF37]/30
                  group-hover:bg-[#D4AF37]/[0.05]
                "
              >

                <Image
                  src="/logo/ng-icon.png"
                  alt="NG Cloud Networks"
                  width={52}
                  height={52}
                  quality={60}
                  className="object-contain"
                />

              </div>

              <div className="ml-4 pt-[1px]">

                <h3
                  className="
                    text-[19px]
                    font-extrabold
                    tracking-[0.24em]
                    text-white
                    leading-none
                  "
                >
                  NG CLOUD
                </h3>

                <p
                  className="
                    mt-[7px]
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.52em]
                    text-[#D4AF37]
                    leading-none
                  "
                >
                  NETWORKS
                </p>

              </div>

            </Link>

            {/* DESKTOP NAV */}
            <nav
              className="
                hidden
                lg:flex
                items-center
                gap-9
              "
            >

              {navLinks.map((link) => (

                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => {
                    if (link.dropdown) {
                      setCoursesOpen(true);
                    }
                  }}
                  onMouseLeave={() => {
                    setTimeout(() => {
                      setCoursesOpen(false);
                    }, 180);
                  }}
                >

                  <Link
                    href={link.href}
                    className="
                      flex
                      items-center
                      gap-1.5
                      text-[15px]
                      font-medium
                      text-white/75
                      transition-all
                      duration-300
                      hover:text-white
                    "
                  >

                    {link.name}

                    {link.dropdown && (
                      <ChevronDown
                        className={`
                          h-4
                          w-4
                          transition-transform
                          duration-300
                          ${coursesOpen
                            ? "rotate-180"
                            : ""
                          }
                        `}
                      />
                    )}

                  </Link>

                  {/* DROPDOWN */}
                  {link.dropdown && (
                    <div
                      className={`
      absolute left-0 top-full pt-4 z-50 w-[820px] max-w-[90vw]
      overflow-hidden rounded-[32px] border
      border-[#D4AF37]/15 bg-[#080808]/95 p-7 shadow-[0_30px_80px_rgba(0,0,0,0.55)]
      backdrop-blur-3xl
      ${coursesOpen
                          ? "visible opacity-100"
                          : "invisible pointer-events-none opacity-0"
                        }
    `}
                    >
                      <div
                        className="
        absolute inset-0
        bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.12),transparent_55%)]
      "
                      />

                      <div className="relative z-10">

                        <div className="mb-6">
                          <h3
                            className="
            mt-2 text-[28px] font-black tracking-[-0.03em] text-white
          "
                          >
                            Explore Our Courses
                          </h3>
                        </div>

                        <div className="grid grid-cols-3 gap-6">

                          {groupedCourses.map((group) => (

                            <div key={group.category}>

                              <p
                                className="
                mb-3 text-[11px] font-semibold uppercase
                tracking-wider text-[#D4AF37]/70
              "
                              >
                                {group.category}
                              </p>

                              <div className="space-y-2">

                                {group.items.map((course) => (

                                  <Link
                                    key={course.slug}
                                    href={course.href}
                                    className="
                    group block rounded-[16px] border border-white/8
                    bg-white/[0.03] p-3.5 transition-all duration-300
                    hover:border-[#D4AF37]/30 hover:bg-[#D4AF37]/[0.04]
                  "
                                  >

                                    <div className="flex items-start justify-between gap-2">

                                      <div>
                                        <p className="text-[10px] text-[#D4AF37]/80">
                                          {course.subtitle}
                                        </p>

                                        <h4
                                          className="
                          mt-1 text-[13.5px] font-semibold leading-snug text-white
                        "
                                        >
                                          {course.anchor}
                                        </h4>
                                      </div>

                                      <ArrowUpRight
                                        className="
                        mt-0.5 h-3.5 w-3.5 shrink-0 text-[#D4AF37]
                        opacity-0 transition-all duration-300
                        group-hover:translate-x-1 group-hover:opacity-100
                      "
                                      />

                                    </div>

                                  </Link>
                                ))}

                              </div>

                            </div>

                          ))}

                        </div>

                      </div>

                    </div>
                  )}

                </div>
              ))}

            </nav>

            {/* RIGHT CTA */}
            <div
              className="
                hidden
                lg:flex
                items-center
                gap-3
              "
            >

              {/* CALL */}
              <button
                onClick={() => setCallOpen(true)}
                className="
                  flex
                  h-[54px]
                  items-center
                  justify-center
                  gap-3
                  rounded-[18px]
                  border
                  border-[#D4AF37]/20
                  bg-white/[0.03]
                  px-7
                  text-[15px]
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:border-[#D4AF37]/40
                  hover:bg-[#D4AF37]/5
                "
              >

                <Phone className="h-4 w-4 text-[#D4AF37]" />

                Call Now

              </button>

              {/* DEMO */}
              <button
                onClick={() => setDemoOpen(true)}
                className="
                  flex
                  h-[54px]
                  items-center
                  justify-center
                  gap-3
                  rounded-[18px]
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

                <CalendarDays className="h-4 w-4" />

                Book Demo

              </button>

            </div>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="
                lg:hidden
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
                text-white
              "
            >

              <Menu className="h-6 w-6" />

            </button>

          </div>

        </div >

      </header >

      {/* CALL MODAL */}
      {
        callOpen && (

          <div
            className="
            fixed
            inset-0
            z-[90]
            flex
            items-center
            justify-center
            bg-black/75
            p-5
            backdrop-blur-md
          "
          >

            <div
              className="
              relative
              w-full
              max-w-[520px]
              overflow-hidden
              rounded-[34px]
              border
              border-[#D4AF37]/20
              bg-[#080808]
              p-8
            "
            >

              <button
                onClick={() => setCallOpen(false)}
                aria-label="Close"
                className="absolute right-5 top-5 text-white/60"
              >
                <X className="h-6 w-6" />
              </button>

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

                <Phone className="h-7 w-7 text-[#D4AF37]" />

              </div>

              <h2
                className="
                mt-7
                text-[38px]
                font-black
                leading-[1]
                tracking-[-0.03em]
                text-white
              "
              >
                Contact Our Team
              </h2>

              <p className="mt-5 text-[16px] leading-[1.9] text-white/60">
                Speak directly with our training coordinators for
                course guidance, demo scheduling and placement support.
              </p>

              <div className="mt-8 space-y-4">

                <div
                  className="
                  flex
                  items-center
                  gap-4
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-5
                "
                >

                  <Phone className="h-5 w-5 text-[#D4AF37]" />

                  <span className="text-white">
                    +91 9989939191
                  </span>

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
                  p-5
                "
                >

                  <Mail className="h-5 w-5 text-[#D4AF37]" />

                  <span className="text-white">
                    info@ngcloudnetworks.com
                  </span>

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
                  p-5
                "
                >

                  <MapPin className="h-5 w-5 text-[#D4AF37]" />

                  <span className="text-white">
                    H.no:5-125/1/30, plot no,30,Royal Homes, Fusion School Back Side,Ameenpur,
                    Hyderabad, Telangana,
                    India
                  </span>

                </div>

              </div>

              <div className="mt-8 flex gap-4">

                <a
                  href="tel:+919989939191"
                  className="
                  flex
                  h-[56px]
                  flex-1
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[#D4AF37]
                  text-[15px]
                  font-semibold
                  text-black
                "
                >
                  Call Now
                </a>

                <Link
                  href="/contact"
                  className="
                  flex
                  h-[56px]
                  flex-1
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-white/10
                  text-white
                "
                >
                  Contact Page
                </Link>

              </div>

            </div>

          </div>
        )
      }

      {/* DEMO MODAL */}
      {
        demoOpen && (

          <div
            className="
    fixed
    inset-0
    z-[90]
    overflow-y-auto
    bg-black/75
    px-5
    py-10
    backdrop-blur-md
  "
          >

            <div
              className="
              relative
              mx-auto
              mt-10
              w-full
              max-w-[720px]
              overflow-hidden
              rounded-[36px]
              border
              border-[#D4AF37]/20
              bg-[#080808]
              p-8
              lg:p-10
            "
            >

              <button
                onClick={() => setDemoOpen(false)}
                aria-label="Close"
                className="absolute right-5 top-5 text-white/60"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="max-w-[620px]">

                <div
                  className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[#D4AF37]/20
                  bg-[#D4AF37]/5
                  px-4
                  py-2
                "
                >

                  <Clock3 className="h-4 w-4 text-[#D4AF37]" />

                  <span className="text-sm text-[#D4AF37]">
                    Schedule Your Free Demo Session
                  </span>

                </div>

                <h2
                  className="
                  mt-6
                  text-[42px]
                  font-black
                  leading-[1]
                  tracking-[-0.04em]
                  text-white
                "
                >
                  Book Your Demo Class
                </h2>

                <p className="mt-5 text-[16px] leading-[1.9] text-white/60">
                  Schedule a personalized demo session with our
                  trainers and explore real-time enterprise labs,
                  certification guidance and placement-focused training.
                </p>

              </div>

              {/* FORM */}
              <div className="mt-10 grid gap-5 md:grid-cols-2">

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="
                  h-[58px]
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-5
                  text-white
                  outline-none
                "
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="
                  h-[58px]
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-5
                  text-white
                  outline-none
                "
                />

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="
                  h-[58px]
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-5
                  text-white
                  outline-none
                "
                />
                <label htmlFor="course" className="sr-only">
                  Select Course
                </label>

                <select
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="
                  h-[58px]
                  rounded-2xl
                  border
                  border-white/10
                  bg-[#111]
                  px-5
                  text-white
                  outline-none
                "
                >

                  <option>Select Course</option>

                  {courseLinks.map((course) => (
                    <option
                      key={course.slug}
                      value={course.anchor}
                    >
                      {course.anchor}
                    </option>
                  ))}

                </select>

                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="
                  h-[58px]
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-5
                  text-white
                  outline-none
                "
                />
                <label htmlFor="slot" className="sr-only">
                  Select Time Slot
                </label>
                <select
                  id="slot"
                  name="slot"
                  value={formData.slot}
                  onChange={handleChange}
                  className="
                  h-[58px]
                  rounded-2xl
                  border
                  border-white/10
                  bg-[#111]
                  px-5
                  text-white
                  outline-none
                "
                >

                  <option>Select Time Slot</option>

                  <option>Morning</option>

                  <option>Afternoon</option>

                  <option>Evening</option>

                </select>

              </div>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message (Optional)"
                className="
                mt-5
                min-h-[140px]
                w-full
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                p-5
                text-white
                outline-none
              "
              />

              <button
                type="button"
                onClick={handleSubmit}
                disabled={loading}
                className="
    mt-6
    flex
    h-[60px]
    w-full
    items-center
    justify-center
    gap-3
    rounded-2xl
    bg-[#D4AF37]
    text-[15px]
    font-semibold
    text-black
    disabled:opacity-70
  "
              >
                <ShieldCheck className="h-4 w-4" />

                {loading
                  ? "Submitting..."
                  : "Submit Demo Request"}
              </button>

            </div>

          </div>
        )
      }

      {/* MOBILE MENU */}
      {/* MOBILE MENU */}
      <div
        className={`
    fixed top-0 right-0 z-[80] h-screen w-[88%] max-w-[380px]
    overflow-y-auto border-l border-white/10 bg-[#080808] p-6
    transition-transform duration-500 lg:hidden
    ${mobileOpen ? "translate-x-0" : "translate-x-full"}
  `}
      >
        <div className="flex items-center justify-between">
          <h3 className="text-[24px] font-bold text-white">Menu</h3>
          <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
            <X className="h-7 w-7 text-white" />
          </button>
        </div>

        <div className="mt-10 flex flex-col">
          <button
            onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
            className="flex items-center justify-between border-b border-white/5 py-5 text-left text-[15px] text-white"
          >
            Courses
            <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${mobileCoursesOpen ? "rotate-180" : ""}`} />
          </button>

          {/* Always rendered, CSS-controlled visibility — same fix as desktop */}
          <div
            className={`space-y-3 overflow-hidden transition-all duration-300 ${mobileCoursesOpen ? "max-h-[2000px] py-4 opacity-100" : "max-h-0 py-0 opacity-0"
              }`}
          >
            {courseLinks.map((course) => (
              <Link
                key={course.slug}
                href={course.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-2xl border border-white/8 bg-white/[0.03] p-4"
              >
                <p className="text-xs text-[#D4AF37]">{course.subtitle}</p>
                <p className="mt-2 text-white">{course.anchor}</p>
              </Link>
            ))}
          </div>

          {navLinks.filter((l) => !l.dropdown).map((link) => (
            <Link key={link.name} href={link.href} onClick={() => setMobileOpen(false)} className="border-b border-white/5 py-5 text-[15px] text-white/80">
              {link.name}
            </Link>
          ))}

          <div className="mt-8 space-y-4">
            <button onClick={() => { setCallOpen(true); setMobileOpen(false); }} className="flex h-[54px] w-full items-center justify-center rounded-2xl border border-white/10 text-white">
              Call Now
            </button>
            <button onClick={() => { setDemoOpen(true); setMobileOpen(false); }} className="flex h-[54px] w-full items-center justify-center rounded-2xl bg-[#D4AF37] font-semibold text-black">
              Book Demo
            </button>
          </div>
        </div>
      </div>

      {/* OVERLAY */}
      {
        (mobileOpen || demoOpen || callOpen) && (

          <div
            onClick={() => {
              setMobileOpen(false);
              setDemoOpen(false);
              setCallOpen(false);
            }}
            className="
            fixed
            inset-0
            z-40
            bg-black/70
            backdrop-blur-sm
          "
          />

        )
      }
    </>
  );
}