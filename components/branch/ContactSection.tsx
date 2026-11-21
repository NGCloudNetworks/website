import type { ReactNode } from "react";
import BranchEnquiryForm from "@/components/branch/BranchEnquiryForm";
import { courses, modes, shortName } from "@/data/trainingContent";
import { PHONE_DISPLAY, PHONE_TEL, EMAIL } from "@/data/branches";
import { card, gold, h2 } from "@/components/branch/ui";

type Props = {
  branch: string;
  branchOptions?: string[];
  title: ReactNode;
  intro: string;
  whatsappUrl: string;
  whatsappLabel: string;
  formHeading: string;
  courseOptions?: { value: string; label: string }[]; // overrides the default 10-course list
};

export default function ContactSection({ branch, branchOptions, title, intro, whatsappUrl, whatsappLabel, formHeading, courseOptions }: Props) {
  return (
    <section id="enquire" aria-labelledby="enq-h" className="mx-auto max-w-4xl scroll-mt-24 px-4 py-12">
      <h2 id="enq-h" className={h2}>{title}</h2>
      <p className="mt-3 text-gray-300">{intro}</p>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <a href={`tel:${PHONE_TEL}`} className={`${card} block !p-5 hover:border-[#D4AF37]/60`}>
          <span className={`text-sm font-bold ${gold}`}>Call us</span>
          <span className="mt-1 block text-lg font-bold">{PHONE_DISPLAY}</span>
          <span className="mt-1 block text-sm text-gray-400">Fastest for batch timings</span>
        </a>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={`${card} block !p-5 hover:border-[#D4AF37]/60`}>
          <span className={`text-sm font-bold ${gold}`}>WhatsApp us</span>
          <span className="mt-1 block text-lg font-bold">{whatsappLabel}</span>
          <span className="mt-1 block text-sm text-gray-400">Opens WhatsApp with your message ready</span>
        </a>
        <a href="#enquiry-form" className={`${card} block !p-5 hover:border-[#D4AF37]/60`}>
          <span className={`text-sm font-bold ${gold}`}>Fill the form</span>
          <span className="mt-1 block text-lg font-bold">Send an enquiry</span>
          <span className="mt-1 block text-sm text-gray-400">Or email {EMAIL}</span>
        </a>
      </div>
      <div id="enquiry-form" className="mt-6 scroll-mt-24 rounded-3xl border border-[#D4AF37]/40 bg-[#D4AF37]/10 p-6 md:p-8">
        <h3 className="mb-1 text-xl font-bold">{formHeading}</h3>
        <p className="mb-6 text-sm text-gray-300">Tell us your course and preferred mode. We will share batch timings, the current fee and a demo slot.</p>
        <BranchEnquiryForm
          branch={branch}
          branchOptions={branchOptions}
          courses={courseOptions ?? courses.map((c) => ({ value: c.slug, label: shortName(c.anchor) }))}
          modes={modes}
          phoneDisplay={PHONE_DISPLAY}
          phoneTel={PHONE_TEL}
          whatsappUrl={whatsappUrl}
        />
      </div>
    </section>
  );
}