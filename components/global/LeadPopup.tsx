"use client";

import { useEffect, useState } from "react";

import {
  CalendarDays,
  X,
} from "lucide-react";

import { usePathname } from "next/navigation";

export default function LeadPopup() {

  const [open, setOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
  });

  const pathname = usePathname();

  /* INPUT HANDLER */
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

  /* SUBMIT */
  const handleSubmit = async () => {

    if (
      !formData.name ||
      !formData.phone ||
      !formData.email ||
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

        alert(
          "Thank you. Our team will contact you shortly."
        );

        setFormData({
          name: "",
          phone: "",
          email: "",
          course: "",
        });

        setOpen(false);

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

  /* POPUP CONTROL */
  useEffect(() => {

    if (pathname !== "/") return;

    const alreadyShown =
      localStorage.getItem("ng-lead-popup");

    if (!alreadyShown) {

      const timer = setTimeout(() => {

        setOpen(true);

        localStorage.setItem(
          "ng-lead-popup",
          "true"
        );

      }, 2200);

      return () => clearTimeout(timer);
    }

  }, [pathname]);

  if (!open) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-[140]
        flex
        items-center
        justify-center
        bg-black/85
        px-5
        backdrop-blur-xl
      "
    >

      {/* MODAL */}
      <div
        className="
          relative
          w-full
          max-w-[960px]
          overflow-hidden
          rounded-[38px]
          border
          border-white/[0.06]
          bg-[#050505]/95
          shadow-[0_30px_120px_rgba(0,0,0,0.85)]
        "
      >

        {/* TOP GLOW */}
        <div
          className="
            absolute
            left-[-120px]
            top-[-120px]
            h-[320px]
            w-[320px]
            rounded-full
            bg-[#D4AF37]/10
            blur-[120px]
          "
        />

        {/* CLOSE */}
        <button
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="
            absolute
            right-5
            top-5
            z-20
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-white/[0.03]
            text-white/70
            transition-all
            duration-300
            hover:border-[#D4AF37]/30
            hover:text-[#D4AF37]
          "
        >

          <X className="h-5 w-5" />

        </button>

        <div className="grid lg:grid-cols-[1fr_0.95fr]">

          {/* LEFT */}
          <div
            className="
              relative
              overflow-hidden
              border-b
              border-white/10
              p-10
              lg:border-b-0
              lg:border-r
              lg:p-14
            "
          >

            <div className="relative z-10">

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
                "
              >

                <div className="h-2 w-2 rounded-full bg-[#D4AF37]" />

                <span className="text-sm text-[#f5e6b3]">
                  Free Career Consultation
                </span>

              </div>

              {/* TITLE */}
              <h2
                className="
                  mt-8
                  text-[42px]
                  font-black
                  leading-[0.94]
                  tracking-[-0.04em]
                  text-white
                  lg:text-[56px]
                "
              >
                Start Your Career in

                <span className="block text-[#D4AF37]">
                  Cloud & Networking
                </span>

              </h2>

              {/* DESCRIPTION */}
              <p
                className="
                  mt-8
                  max-w-[420px]
                  text-[16px]
                  leading-[1.9]
                  text-white/60
                "
              >
                Connect with our experts and explore
                enterprise-focused training programs
                designed for real-world IT careers.
              </p>

            </div>

          </div>

          {/* RIGHT */}
          <div className="p-10 lg:p-12">

            <h3 className="text-[32px] font-black text-white">
              Book Free Demo
            </h3>

            <div className="mt-8 space-y-5">

              {/* NAME */}
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="
                  h-[58px]
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
                  focus:border-[#D4AF37]/40
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
                  h-[58px]
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
                  focus:border-[#D4AF37]/40
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
                  h-[58px]
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
                  focus:border-[#D4AF37]/40
                "
              />

              {/* COURSE */}
              <label htmlFor="popup-course" className="sr-only">
                Select Course
              </label>
              <select
                id="popup-course"
                name="course"
                value={formData.course}
                onChange={handleChange}
                className="
                  h-[58px]
                  w-full
                  appearance-none
                  rounded-2xl
                  border
                  border-white/10
                  bg-[#0f0f0f]
                  px-5
                  text-[15px]
                  font-medium
                  text-white
                  outline-none
                  transition-all
                  duration-300
                  focus:border-[#D4AF37]/40
                "
              >

                <option
                  value=""
                  disabled
                  className="bg-[#111] text-white"
                >
                  Select Course
                </option>

                <option
                  value="CCNA Routing & Switching"
                  className="bg-[#111] text-white"
                >
                  CCNA Routing & Switching
                </option>

                <option
                  value="CCNP Enterprise"
                  className="bg-[#111] text-white"
                >
                  CCNP Enterprise
                </option>

                <option
                  value="AWS Cloud"
                  className="bg-[#111] text-white"
                >
                  AWS Cloud
                </option>

                <option
                  value="Azure Cloud"
                  className="bg-[#111] text-white"
                >
                  Azure Cloud
                </option>

                <option
                  value="Palo Alto Firewall"
                  className="bg-[#111] text-white"
                >
                  Palo Alto Firewall
                </option>

              </select>

              {/* BUTTON */}
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="
                  flex
                  h-[58px]
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
                  hover:scale-[1.01]
                  hover:shadow-[0_0_35px_rgba(212,175,55,0.30)]
                  disabled:opacity-70
                "
              >

                <CalendarDays className="h-4 w-4" />

                {loading
                  ? "Submitting..."
                  : "Book Free Demo"}

              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}