"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import {
  ArrowRight,
  ShieldCheck,
  Cloud,
  Network,
  BadgeCheck,
  BriefcaseBusiness,
  GraduationCap,
} from "lucide-react";

import { useState } from "react";

const courseOptions = [
  {
    label: "CCNA Training Hyderabad",
    href: "/courses/ccna-training-hyderabad",
  },
  {
    label: "CCNP Enterprise Training Hyderabad",
    href: "/courses/ccnp-enterprise-training-hyderabad",
  },
  {
    label: "AWS Training Hyderabad",
    href: "/courses/aws-training-hyderabad",
  },
  {
    label: "Azure Training Hyderabad",
    href: "/courses/azure-cloud-training-hyderabad",
  },
  {
    label: "Palo Alto Training Hyderabad",
    href: "/courses/palo-alto-firewall-training-hyderabad",
  },
  {
    label: "Fortigate Training Hyderabad",
    href: "/courses/fortigate-firewall-training-hyderabad",
  },
];

export default function HeroSection() {

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [responseType, setResponseType] = useState<
    "success" | "error" | ""
  >("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >
  ) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async () => {

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.course
    ) {
      alert("Please fill all fields.");
      return;
    }

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

        setResponseType("success");

        setResponseMessage(
          "Thank you for reaching NG Cloud Networks. Our team will contact you shortly."
        );

        setFormData({
          name: "",
          email: "",
          phone: "",
          course: "",
        });

      } else {

        setResponseType("error");

        setResponseMessage(
          "Something went wrong. Please try again."
        );
      }
    } catch (error) {

      console.log(error);

      setResponseType("error");

      setResponseMessage(
        "Server error. Please try again later."
      );

    } finally {

      setLoading(false);

    }
  };

  return (
    <section className="relative overflow-hidden pt-[150px] pb-24">

      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        <div className="absolute top-[-180px] left-[-120px] h-[420px] w-[420px] bg-[#D4AF37]/10 blur-[120px]" />

        <div className="absolute bottom-[-180px] right-[-120px] h-[420px] w-[420px] bg-[#D4AF37]/10 blur-[120px]" />

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

        <div className="grid items-center gap-14 lg:grid-cols-[1fr_560px]">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-[780px]"
          >

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

              <span className="text-sm font-medium text-[#f5e6b3]">
                Enterprise Networking, Cloud & Security Academy
              </span>

            </div>

            {/* HEADING */}
            <h1
              className="
    mt-8
    text-[50px]
    font-black
    leading-[0.92]
    tracking-[-0.05em]
    text-white
    md:text-[68px]
    xl:text-[88px]
  "
            >

              Best

              <span
                className="
      mt-2
      block
      bg-gradient-to-r
      from-[#D4AF37]
      via-[#f7d977]
      to-[#D4AF37]
      bg-clip-text
      text-transparent
    "
              >
                CCNA, AWS & Cyber Security
              </span>

              <span className="block text-white">
                Training Institute in Hyderabad
              </span>

            </h1>

            {/* DESCRIPTION */}
            <p
              className="
    mt-8
    max-w-[720px]
    text-[19px]
    leading-[1.9]
    text-white/60
  "
            >

              NG Cloud Networks is a leading networking,
              cloud and cyber security training institute
              in Hyderabad offering practical CCNA,
              CCNP, AWS Cloud, Azure, Palo Alto,
              Fortigate and F5 Load Balancer training
              with real-time labs, certification guidance,
              interview preparation and placement support.

            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap items-center gap-5">

              <Link
                href="/contact"
                className="
                  group
                  flex
                  h-[60px]
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
                  hover:scale-[1.03]
                  hover:shadow-[0_0_35px_rgba(212,175,55,0.35)]
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

              <Link
                href="/courses"
                className="
                  flex
                  h-[60px]
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
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-[#D4AF37]/40
                  hover:text-[#D4AF37]
                "
              >
                Explore Courses
              </Link>

            </div>

          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >

            <div className="absolute inset-0 bg-[#D4AF37]/10 blur-[90px]" />

            <div
              className="
                relative
                overflow-hidden
                rounded-[38px]
                border
                border-[#D4AF37]/15
                bg-white/[0.04]
                backdrop-blur-3xl
              "
            >

              {/* TOP */}
              <div
                className="
                  relative
                  overflow-hidden
                  border-b
                  border-white/10
                  p-8
                  lg:p-10
                "
              >

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-[#D4AF37]/20
                    via-[#D4AF37]/5
                    to-transparent
                  "
                />

                <div className="relative z-10">

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

                    <GraduationCap className="h-4 w-4 text-[#D4AF37]" />

                    <span className="text-sm text-[#f5e6b3]">
                      Free Career Guidance
                    </span>

                  </div>

                  <h2
                    className="
                      mt-7
                      text-[42px]
                      font-black
                      leading-[0.95]
                      tracking-[-0.04em]
                      text-white
                    "
                  >
                    Start Your IT Journey
                  </h2>

                  <p
                    className="
                      mt-5
                      max-w-[480px]
                      text-[16px]
                      leading-[1.9]
                      text-white/60
                    "
                  >
                    Connect with our experts and get guidance on
                    certifications, placements, networking careers,
                    cloud computing and cyber security training.
                  </p>

                </div>

              </div>

              {/* FEATURES */}
              <div className="grid grid-cols-2 gap-4 border-b border-white/10 p-8">

                {[
                  "Practical Enterprise Labs",
                  "Placement Support",
                  "Certification Guidance",
                  "Interview Preparation",
                ].map((item) => (

                  <div
                    key={item}
                    className="
                      flex
                      items-center
                      gap-3
                      rounded-2xl
                      border
                      border-white/10
                      bg-black/20
                      px-4
                      py-4
                    "
                  >

                    <BadgeCheck className="h-4 w-4 text-[#D4AF37]" />

                    <span className="text-[13px] text-white/75">
                      {item}
                    </span>

                  </div>
                ))}

              </div>

              {/* FORM */}
              <div className="space-y-5 p-8 lg:p-10">

                {/* NAME */}
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="
                    h-[60px]
                    w-full
                    rounded-2xl
                    border
                    border-white/10
                    bg-black/30
                    px-5
                    text-white
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-white/30
                    focus:border-[#D4AF37]/50
                    focus:bg-black/40
                  "
                />

                {/* EMAIL */}
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="
                    h-[60px]
                    w-full
                    rounded-2xl
                    border
                    border-white/10
                    bg-black/30
                    px-5
                    text-white
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-white/30
                    focus:border-[#D4AF37]/50
                    focus:bg-black/40
                  "
                />

                {/* PHONE */}
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="
                    h-[60px]
                    w-full
                    rounded-2xl
                    border
                    border-white/10
                    bg-black/30
                    px-5
                    text-white
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-white/30
                    focus:border-[#D4AF37]/50
                    focus:bg-black/40
                  "
                />

                {/* COURSE */}
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="
                    h-[60px]
                    w-full
                    appearance-none
                    rounded-2xl
                    border
                    border-white/10
                    bg-[#111111]
                    px-5
                    text-[15px]
                    font-medium
                    text-white
                    outline-none
                    transition-all
                    duration-300
                    focus:border-[#D4AF37]/50
                    focus:bg-[#151515]
                  "
                >

                  <option
                    value=""
                    disabled
                    className="bg-[#111111] text-white"
                  >
                    Select Course
                  </option>

                  {courseOptions.map((course) => (
                    <option
                      key={course.label}
                      value={course.label}
                      className="bg-[#111111] text-white"
                    >
                      {course.label}
                    </option>
                  ))}

                </select>

                {/* SUBMIT */}
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="
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
                    transition-all
                    duration-300
                    hover:scale-[1.01]
                    hover:shadow-[0_0_35px_rgba(212,175,55,0.35)]
                    disabled:opacity-70
                  "
                >

                  <BriefcaseBusiness className="h-4 w-4" />

                  {loading
                    ? "Submitting..."
                    : "Book Free Demo"}

                </button>
                {responseMessage && (

                  <div
                    className={`
      rounded-2xl
      border
      px-5
      py-4
      text-[14px]
      leading-[1.7]
      backdrop-blur-xl
      ${responseType === "success"
                        ? `
            border-[#D4AF37]/30
            bg-[#D4AF37]/10
            text-[#f5e6b3]
          `
                        : `
            border-red-500/20
            bg-red-500/10
            text-red-300
          `
                      }
    `}
                  >
                    {responseMessage}
                  </div>

                )}

              </div>

            </div>

          </motion.div>
        </div>

      </div>

    </section>
  );
}