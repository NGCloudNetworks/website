"use client";

// components/LeadPopup.tsx (v2: responsive, accessible)
import { useEffect, useRef, useState } from "react";
import { CalendarDays, ChevronDown, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { courseLinks } from "@/data/courseLinks";

const STORAGE_KEY = "ng-lead-popup";
const courseOptions = courseLinks.map((c) => c.anchor.replace(" Hyderabad", ""));

const inputCls =
  "h-[52px] w-full rounded-2xl border border-white/10 bg-black/30 px-4 text-base text-white outline-none transition-all duration-300 placeholder:text-white/30 focus:border-[#D4AF37]/50 focus:shadow-[0_0_0_4px_rgba(212,175,55,0.08)] sm:h-[58px] sm:px-5";

type Status = "idle" | "loading" | "success" | "error";

export default function LeadPopup() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", course: "" });
  const [website, setWebsite] = useState(""); // honeypot
  const dialogRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setFormData((d) => ({ ...d, [e.target.name]: e.target.value }));

  const close = () => setOpen(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (website) {
      setStatus("success");
      return;
    }
    try {
      setStatus("loading");
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, type: "demo" }),
      });
      const data = await response.json();
      if (data.success) {
        setStatus("success");
        (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag?.("event", "generate_lead", {
          form: "demo_popup",
          course: formData.course,
        });
        setFormData({ name: "", phone: "", email: "", course: "" });
        setTimeout(() => setOpen(false), 2500);
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  /* WHEN TO SHOW: homepage only, once per visitor. Later on phones, so it does not cover the page right after a search click. */
  useEffect(() => {
    if (pathname !== "/") return;
    let alreadyShown = false;
    try {
      alreadyShown = !!localStorage.getItem(STORAGE_KEY);
    } catch {
      /* storage blocked: treat as not shown */
    }
    if (alreadyShown) return;

    const delay = window.innerWidth < 768 ? 12000 : 2200;
    const timer = setTimeout(() => {
      setOpen(true);
      try {
        localStorage.setItem(STORAGE_KEY, "true");
      } catch {
        /* ignore */
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [pathname]);

  /* WHILE OPEN: lock page scroll, close on Escape, move focus into the dialog */
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    dialogRef.current?.focus();
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[140] flex items-center justify-center bg-black/85 p-3 backdrop-blur-xl sm:p-5"
      onMouseDown={(e) => e.target === e.currentTarget && close()}
    >
      {/* MODAL: never taller than the screen; its content scrolls inside */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="lead-popup-title"
        tabIndex={-1}
        className="relative max-h-[calc(100dvh-1.5rem)] w-full max-w-[960px] overflow-hidden rounded-[28px] border border-white/[0.06] bg-[#050505]/95 shadow-[0_30px_120px_rgba(0,0,0,0.85)] outline-none sm:max-h-[calc(100dvh-2.5rem)] sm:rounded-[38px]"
      >
        <div className="pointer-events-none absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-[#D4AF37]/10 blur-[120px]" aria-hidden="true" />

        {/* CLOSE: sits outside the scrolling area, so it is always reachable */}
        <button
          type="button"
          onClick={close}
          aria-label="Close dialog"
          className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white/70 transition-all duration-300 hover:border-[#D4AF37]/30 hover:text-[#D4AF37] sm:right-5 sm:top-5 sm:h-11 sm:w-11"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        <div className="max-h-[inherit] overflow-y-auto overscroll-contain">
          <div className="grid lg:grid-cols-[1fr_0.95fr]">
            {/* LEFT: compact on phones */}
            <div className="relative overflow-hidden border-b border-white/10 p-6 pr-16 sm:p-10 lg:border-b-0 lg:border-r lg:p-14">
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 px-4 py-2 sm:px-5 sm:py-2.5">
                  <div className="h-2 w-2 rounded-full bg-[#D4AF37]" aria-hidden="true" />
                  <span className="text-[13px] text-[#f5e6b3] sm:text-sm">Free Career Consultation</span>
                </div>

                <h2
                  id="lead-popup-title"
                  className="mt-5 text-[28px] font-black leading-[1] tracking-[-0.04em] text-white sm:mt-8 sm:text-[42px] lg:text-[56px] lg:leading-[0.94]"
                >
                  Start Your Career in
                  <span className="block text-[#D4AF37]">Cloud &amp; Networking</span>
                </h2>

                <p className="mt-5 hidden max-w-[420px] text-[16px] leading-[1.9] text-white/60 sm:block lg:mt-8">
                  Connect with our experts and explore enterprise-focused training programs designed for real-world IT careers.
                </p>
              </div>
            </div>

            {/* RIGHT: form */}
            <div className="p-6 sm:p-10 lg:p-12">
              <h3 className="text-[24px] font-black text-white sm:text-[32px]">Book Free Demo</h3>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4 sm:mt-8 sm:space-y-5" aria-label="Book a free demo">
                <div>
                  <label htmlFor="lead-name" className="sr-only">Full name</label>
                  <input id="lead-name" type="text" name="name" autoComplete="name" required placeholder="Full Name"
                    value={formData.name} onChange={handleChange} className={inputCls} />
                </div>

                <div>
                  <label htmlFor="lead-phone" className="sr-only">Phone number</label>
                  <input id="lead-phone" type="tel" name="phone" inputMode="tel" autoComplete="tel" required
                    pattern="[0-9+\-\s]{10,15}" title="Enter a valid phone number" placeholder="Phone Number"
                    value={formData.phone} onChange={handleChange} className={inputCls} />
                </div>

                <div>
                  <label htmlFor="lead-email" className="sr-only">Email address</label>
                  <input id="lead-email" type="email" name="email" autoComplete="email" required placeholder="Email Address"
                    value={formData.email} onChange={handleChange} className={inputCls} />
                </div>

                <div className="relative">
                  <label htmlFor="lead-course" className="sr-only">Select course</label>
                  <select id="lead-course" name="course" required value={formData.course} onChange={handleChange}
                    className={`${inputCls} appearance-none bg-[#0f0f0f] pr-12 font-medium`}>
                    <option value="" disabled className="bg-[#111] text-white">Select Course</option>
                    {courseOptions.map((c) => (
                      <option key={c} value={c} className="bg-[#111] text-white">{c}</option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" aria-hidden="true" />
                </div>

                {/* honeypot */}
                <div className="absolute left-[-9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
                  <label htmlFor="lead-website">Leave this field empty</label>
                  <input id="lead-website" name="website" type="text" tabIndex={-1} autoComplete="off"
                    value={website} onChange={(e) => setWebsite(e.target.value)} />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="flex h-[52px] w-full items-center justify-center gap-2 rounded-2xl bg-[#D4AF37] text-[15px] font-semibold text-black transition-all duration-300 hover:shadow-[0_0_35px_rgba(212,175,55,0.30)] disabled:opacity-70 sm:h-[58px]"
                >
                  <CalendarDays className="h-4 w-4" aria-hidden="true" />
                  {status === "loading" ? "Submitting..." : "Book Free Demo"}
                </button>

                <div role="status" aria-live="polite">
                  {status === "success" && (
                    <p className="rounded-2xl border border-green-500/20 bg-green-500/10 px-4 py-3 text-sm text-green-300">
                      Thank you. Our team will contact you shortly.
                    </p>
                  )}
                  {status === "error" && (
                    <p role="alert" className="rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                      Something went wrong. Please try again or call +91 99899 39191.
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}