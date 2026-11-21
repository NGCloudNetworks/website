"use client";

import { trackMetaLead } from "@/lib/track";
import { useState } from "react";

type Props = {
  branch: string; 
  branchOptions?: string[];
  courses: { value: string; label: string }[];
  modes: string[];
  phoneDisplay: string;
  phoneTel: string;
  whatsappUrl: string;
};

const label = "mb-1.5 block text-sm font-medium text-gray-200";
// text-base keeps inputs at 16px, which stops iOS from zooming in on focus.
const field =
  "w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-base text-white placeholder:text-gray-500 focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40";

export default function BranchEnquiryForm({ branch, branchOptions, courses, modes, phoneDisplay, phoneTel, whatsappUrl }: Props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [mode, setMode] = useState(modes[0] ?? "");
  const [pickedBranch, setPickedBranch] = useState(branchOptions?.[0] ?? branch);
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState(""); // honeypot, must stay empty

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (loading) return;
    if (website) {
      setSuccess(true); // bots: pretend success, send nothing
      return;
    }
    setLoading(true);
    setSuccess(false);
    setError(false);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          course,
          message: `Branch: ${pickedBranch}\nMode: ${mode}${message ? `\n\n${message}` : ""}`,
          branch: pickedBranch,
          mode,
          type: "contact",
        }),
      });
      const data = await res.json().catch(() => ({ success: false }));
      if (res.ok && data.success) {
        setSuccess(true);
        trackMetaLead();
        (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag?.("event", "generate_lead", {
          form: `${branch.toLowerCase()}_page`,
          course,
          branch: pickedBranch,
          mode,
        });
        setName("");
        setPhone("");
        setEmail("");
        setCourse("");
        setMessage("");
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={submit} className="grid gap-4 md:grid-cols-2" aria-label={`${branch} enquiry form`}>
      <div>
        <label htmlFor="enq-name" className={label}>Your name</label>
        <input id="enq-name" name="name" className={field} value={name} onChange={(e) => setName(e.target.value)}
          placeholder="Full name" autoComplete="name" required minLength={2} maxLength={80} />
      </div>
      <div>
        <label htmlFor="enq-phone" className={label}>Phone number</label>
        <input id="enq-phone" name="phone" type="tel" inputMode="tel" className={field} value={phone}
          onChange={(e) => setPhone(e.target.value)} placeholder="+91 99999 99999" autoComplete="tel" required
          pattern="[0-9+\-\s]{10,15}" title="Enter a valid phone number, 10 to 15 digits" />
      </div>
      {branchOptions && (
        <div className="md:col-span-2">
          <label htmlFor="enq-branch" className={label}>Preferred branch</label>
          <select id="enq-branch" name="branch" className={field} value={pickedBranch} onChange={(e) => setPickedBranch(e.target.value)}>
            {branchOptions.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>
      )}
      <div className="md:col-span-2">
        <label htmlFor="enq-email" className={label}>Email address</label>
        <input id="enq-email" name="email" type="email" className={field} value={email}
          onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" autoComplete="email" required maxLength={120} />
      </div>
      <div>
        <label htmlFor="enq-course" className={label}>Course</label>
        <select id="enq-course" name="course" className={field} value={course} onChange={(e) => setCourse(e.target.value)} required>
          <option value="" disabled>Select a course</option>
          {courses.map((c) => (
            <option key={c.value} value={c.label}>{c.label}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="enq-mode" className={label}>Preferred mode</label>
        <select id="enq-mode" name="mode" className={field} value={mode} onChange={(e) => setMode(e.target.value)}>
          {modes.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
      </div>
      <div className="md:col-span-2">
        <label htmlFor="enq-message" className={label}>Message (optional)</label>
        <textarea id="enq-message" name="message" rows={3} className={field} value={message}
          onChange={(e) => setMessage(e.target.value)} placeholder="Your background and the role you are aiming for" maxLength={1000} />
      </div>

      {/* honeypot */}
      <div className="absolute left-[-9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="enq-website">Leave this field empty</label>
        <input id="enq-website" name="website" type="text" tabIndex={-1} autoComplete="off"
          value={website} onChange={(e) => setWebsite(e.target.value)} />
      </div>

      <button type="submit" disabled={loading}
        className="rounded-xl bg-[#D4AF37] px-6 py-3 text-base font-bold text-black hover:opacity-90 disabled:opacity-70 md:col-span-2">
        {loading ? "Sending..." : branchOptions ? "Send enquiry" : `Send enquiry to ${branch} branch`}
      </button>

      <p className="text-xs text-gray-400 md:col-span-2">
        We use your details only to reply to your enquiry. Prefer to talk? Call{" "}
        <a href={`tel:${phoneTel}`} className="font-semibold text-[#D4AF37]">{phoneDisplay}</a> or{" "}
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#D4AF37]">message us on WhatsApp</a>.
      </p>

      <div role="status" aria-live="polite" className="md:col-span-2">
        {success && (
          <div className="rounded-xl border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-300">
            Thank you. Our team will contact you shortly.
          </div>
        )}
        {error && (
          <div role="alert" className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
            Something went wrong and your enquiry was not sent. Please call {phoneDisplay} or use WhatsApp, and we will help you right away.
          </div>
        )}
      </div>
    </form>
  );
}