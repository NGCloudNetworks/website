// components/ameerpet/EnquiryForm.tsx
"use client";
import { useState } from "react";

type Props = {
  whatsappNumber: string; // digits only, e.g. 919989939191
  courses: { value: string; label: string }[];
  modes: string[];
};

const field =
  "w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-white placeholder:text-gray-500 focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40";

export default function EnquiryForm({ whatsappNumber, courses, modes }: Props) {
  const [name, setName] = useState("");
  const [course, setCourse] = useState(courses[0]?.label ?? "");
  const [mode, setMode] = useState(modes[0] ?? "");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const text =
      `Hi NG Cloud Networks, I'm ${name || "interested"}. ` +
      `I want details about ${course} (${mode}) at the Ameerpet branch. Please share batch timings and a demo class slot.`;
    // Optional analytics: fires only if GA4 is loaded.
    (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag?.("event", "ameerpet_enquiry", { course, mode });
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  }
  return (
    <form onSubmit={submit} className="grid gap-4 md:grid-cols-2" aria-label="Ameerpet enquiry form">
      <div>
        <label htmlFor="enq-name" className="mb-1 block text-sm text-gray-300">Your name</label>
        <input id="enq-name" className={field} value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name" autoComplete="name" required />
      </div>
      <div>
        <label htmlFor="enq-course" className="mb-1 block text-sm text-gray-300">Course</label>
        <select id="enq-course" className={field} value={course} onChange={(e) => setCourse(e.target.value)}>
          {courses.map((c) => (
            <option key={c.value} value={c.label}>{c.label}</option>
          ))}
        </select>
      </div>
      <div className="md:col-span-2">
        <label htmlFor="enq-mode" className="mb-1 block text-sm text-gray-300">Preferred mode</label>
        <select id="enq-mode" className={field} value={mode} onChange={(e) => setMode(e.target.value)}>
          {modes.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
      </div>
      <button type="submit" className="rounded-xl bg-[#D4AF37] px-6 py-3 font-bold text-black hover:opacity-90 md:col-span-2">
        Send enquiry on WhatsApp
      </button>
      <p className="text-xs text-gray-500 md:col-span-2">
        This opens WhatsApp with your details pre-filled. Nothing is stored on this website.
      </p>
    </form>
  );
}