import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { SITE, EMAIL, PHONE_DISPLAY } from "@/data/branches";

export const metadata: Metadata = {
  title: "Privacy Policy | NG Cloud Networks",
  description: "How NG Cloud Networks collects, uses and protects the details you share through our website, enquiry forms and Facebook and Instagram lead forms.",
  alternates: { canonical: `${SITE}/privacy-policy` },
};

const h2 = "mt-10 text-2xl font-bold";
const p = "mt-3 text-gray-300 leading-relaxed";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#050505] px-4 pb-20 pt-32 text-white">
        <article className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-extrabold md:text-4xl">Privacy Policy</h1>
          <p className="mt-3 text-sm text-gray-400">Last updated: 21 November 2026</p>
          <p className={p}>
            NG Cloud Networks (&quot;we&quot;, &quot;us&quot;) is a networking, cloud and security training institute in Hyderabad, with branches in Ameenpur and Ameerpet. This policy explains what we collect when you use{" "}
            <Link href="/" className="text-[#D4AF37] underline">www.ngcloudnetworks.com</Link>, fill in our forms, or submit a lead form on Facebook or Instagram.
          </p>

          <h2 className={h2}>What we collect</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-300">
            <li>Details you give us: name, phone number, email address, the course or program you are interested in, your preferred mode and branch, your area or city, and any message you write.</li>
            <li>Details from Facebook and Instagram lead forms, which are the answers you submit in the form.</li>
            <li>Technical data from our website, such as pages viewed, device and browser type, and approximate location, collected through cookies and similar tools.</li>
          </ul>

          <h2 className={h2}>How we use it</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-300">
            <li>To call, WhatsApp or email you about the course, batch timings, fees and demo classes you asked about.</li>
            <li>To run admissions and keep a record of your enquiry.</li>
            <li>To understand which pages and advertisements work, so we can improve our website and marketing.</li>
          </ul>
          <p className={p}>We do not sell your personal details.</p>

          <h2 className={h2}>Who processes your data</h2>
          <p className={p}>
            We use service providers to run the website and our marketing: an email delivery service for form enquiries, Google Analytics for website statistics, and Meta (Facebook and Instagram) for advertising and lead forms. These providers process data under their own privacy terms. We share your details with them only as needed to provide these services.
          </p>

          <h2 className={h2}>Cookies and advertising</h2>
          <p className={p}>
            Our website uses Google Analytics and the Meta Pixel. They use cookies to measure visits and the results of our advertisements. You can block or delete cookies in your browser settings, and you can control ad personalisation in your Google and Meta account settings.
          </p>

          <h2 className={h2}>How long we keep your details</h2>
          <p className={p}>
            We keep enquiry details for as long as needed to respond to you and manage admissions, and delete them when you ask us to or when they are no longer needed.
          </p>

          <h2 className={h2}>Your choices</h2>
          <p className={p}>
            You can ask us to show, correct or delete the personal details we hold about you, or to stop contacting you. Email{" "}
            <a href={`mailto:${EMAIL}`} className="text-[#D4AF37] underline">{EMAIL}</a> or call {PHONE_DISPLAY}, and we will respond as soon as we can.
          </p>

          <h2 className={h2}>Contact</h2>
          <p className={p}>
            NG Cloud Networks, Flat No. 404, 4th Floor, Aditya Enclave, Annapurna Block, Ameerpet, Hyderabad 500038; and H.no:5-125/1/30, Plot No. 30, Royal Homes, Fusion School Back Side, Ameenpur, Hyderabad 502032.
          </p>
          <p className={p}>We may update this policy from time to time. The date at the top shows when it last changed.</p>
        </article>
      </main>
      <Footer />
    </>
  );
}
