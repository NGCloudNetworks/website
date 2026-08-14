import { ChevronDown } from "lucide-react";
import Link from "next/link";

type FAQ = {
  question: string;
  answer: React.ReactNode;
  answerText: string; // plain-text version for schema (no JSX)
  category: "General" | "Courses" | "Fees & Enrollment" | "Placement" | "Choosing a Course";
  defaultOpen?: boolean;
};

const faqs: FAQ[] = [
  {
    category: "General",
    question: "Which is the best institute for CCNA training in Hyderabad?",
    defaultOpen: true,
    answerText:
      "NG Cloud Networks offers CCNA training in Hyderabad with live instructor-led sessions, enterprise Cisco labs, small batch sizes and placement assistance, led by a trainer with 14+ years of industry experience.",
    answer: (
      <>
        NG Cloud Networks offers{" "}
        <Link href="/courses/ccna-training-hyderabad" className="font-semibold text-[#D4AF37] underline underline-offset-2">
          CCNA training in Hyderabad
        </Link>{" "}
        with live instructor-led sessions, enterprise Cisco labs, small batch
        sizes and placement assistance, led by a trainer with{" "}
        <strong className="text-white">14+ years of industry experience</strong>.
      </>
    ),
  },
  {
    category: "Courses",
    question: "What courses does NG Cloud Networks offer?",
    answerText:
      "NG Cloud Networks offers CCNA, CCNP Enterprise, CCNP Core, AWS Cloud, Azure Cloud, Palo Alto Firewall, Fortigate Firewall, F5 Load Balancer, Cisco SD-WAN and Cloud Security training in Hyderabad.",
    answer: (
      <>
        NG Cloud Networks offers{" "}
        <strong className="text-white">10 certification-focused programs</strong>
        : CCNA, CCNP Enterprise, CCNP Core, AWS Cloud, Azure Cloud, Palo Alto
        Firewall, Fortigate Firewall, F5 Load Balancer, Cisco SD-WAN and Cloud
        Security training. View the full{" "}
        <Link href="/courses" className="font-semibold text-[#D4AF37] underline underline-offset-2">
          course catalog
        </Link>
        .
      </>
    ),
  },
  {
    category: "Courses",
    question: "Do you offer online CCNA and CCNP training?",
    answerText:
      "Yes. Live online, classroom and hybrid training formats are available for all courses, with flexible weekday, evening and weekend batch timings.",
    answer: (
      <>
        Yes.{" "}
        <strong className="text-white">
          Live online, classroom and hybrid
        </strong>{" "}
        training formats are available for all courses, with flexible
        weekday, evening and weekend batch timings.
      </>
    ),
  },
  {
    category: "Courses",
    question: "Is prior networking experience required to join CCNA?",
    answerText:
      "No. CCNA is an entry-level networking certification designed for beginners. Basic computer knowledge is sufficient to start learning.",
    answer: (
      <>
        <strong className="text-white">No.</strong> CCNA is an entry-level
        networking certification designed for beginners. Basic computer
        knowledge is sufficient to start learning.
      </>
    ),
  },
  {
    category: "Courses",
    question: "What is the difference between CCNP Enterprise and CCNP Core?",
    answerText:
      "CCNP Core (ENCOR) covers the core exam required for all CCNP certifications. CCNP Enterprise includes the core exam plus an enterprise-focused concentration exam, covering advanced routing, wireless and SD-WAN topics.",
    answer: (
      <>
        <Link href="/courses/ccnp-core-training-hyderabad" className="font-semibold text-[#D4AF37] underline underline-offset-2">
          CCNP Core (ENCOR)
        </Link>{" "}
        covers the core exam required for all CCNP certifications.{" "}
        <Link href="/courses/ccnp-enterprise-training-hyderabad" className="font-semibold text-[#D4AF37] underline underline-offset-2">
          CCNP Enterprise
        </Link>{" "}
        includes the core exam plus an enterprise-focused concentration exam,
        covering advanced routing, wireless and SD-WAN topics.
      </>
    ),
  },
  {
    category: "Choosing a Course",
    question: "Which course should I choose first if I'm completely new to networking?",
    defaultOpen: true,
    answerText:
      "CCNA is the right starting point for anyone new to networking. It has no prerequisites, is globally recognized, and builds the routing, switching and troubleshooting foundation that every other course assumes you already have.",
    answer: (
      <>
        <Link href="/courses/ccna-training-hyderabad" className="font-semibold text-[#D4AF37] underline underline-offset-2">
          CCNA
        </Link>{" "}
        is the right starting point for anyone new to networking. It has{" "}
        <strong className="text-white">no prerequisites</strong>, is
        globally recognized, and builds the routing, switching and
        troubleshooting foundation that every other course assumes you
        already have.
      </>
    ),
  },
  {
    category: "Choosing a Course",
    question: "Which course gets me a job fastest as a fresher?",
    answerText:
      "CCNA leads to the fastest entry-level placement, typically into roles like Network Support Engineer or NOC Engineer, because it is an entry-level certification employers hire freshers into directly. CCNP, cloud and security courses generally lead to better-paying but less entry-level roles.",
    answer: (
      <>
        <strong className="text-white">CCNA</strong> leads to the fastest
        entry-level placement, typically into roles like Network Support
        Engineer or NOC Engineer, because it is an entry-level
        certification employers hire freshers into directly. CCNP, cloud
        and security courses generally lead to better-paying but less
        entry-level roles.
      </>
    ),
  },
  {
    category: "Choosing a Course",
    question: "Is CCNP or AWS Cloud a better second course after CCNA?",
    answerText:
      "Choose CCNP Enterprise if you want to stay in core networking and move toward network architect roles. Choose AWS or Azure if you want to pivot toward cloud infrastructure roles, which are in higher demand as organizations shift workloads to the cloud.",
    answer: (
      <>
        Choose{" "}
        <Link href="/courses/ccnp-enterprise-training-hyderabad" className="font-semibold text-[#D4AF37] underline underline-offset-2">
          CCNP Enterprise
        </Link>{" "}
        if you want to stay in core networking and move toward network
        architect roles. Choose{" "}
        <Link href="/courses/aws-training-hyderabad" className="font-semibold text-[#D4AF37] underline underline-offset-2">
          AWS
        </Link>{" "}
        or{" "}
        <Link href="/courses/azure-cloud-training-hyderabad" className="font-semibold text-[#D4AF37] underline underline-offset-2">
          Azure
        </Link>{" "}
        if you want to pivot toward cloud infrastructure roles, which are
        in higher demand as organizations shift workloads to the cloud.
      </>
    ),
  },
  {
    category: "Choosing a Course",
    question: "Which certifications have the strongest future demand?",
    answerText:
      "Cloud (AWS, Azure), cloud security and SD-WAN skills currently show the strongest hiring demand in Hyderabad's IT market, as enterprises continue migrating infrastructure to hybrid and cloud-first architectures. Core networking (CCNA/CCNP) remains foundational and is required before specializing in these areas.",
    answer: (
      <>
        <strong className="text-white">
          Cloud (AWS, Azure), cloud security and SD-WAN
        </strong>{" "}
        skills currently show the strongest hiring demand in Hyderabad&apos;s
        IT market, as enterprises continue migrating infrastructure to
        hybrid and cloud-first architectures. Core networking (CCNA/CCNP)
        remains foundational and is required before specializing in these
        areas.
      </>
    ),
  },
  {
    category: "Placement",
    question: "Do you provide placement assistance after course completion?",
    defaultOpen: true,
    answerText:
      "Yes. Placement assistance includes resume building, mock technical interviews, HR interview preparation and job referral support. Students have been placed at companies including Cisco, HCL Technologies, Cloud4C and Teleperformance.",
    answer: (
      <>
        Yes. Placement assistance includes{" "}
        <strong className="text-white">
          resume building, mock technical interviews, HR interview
          preparation and job referral support
        </strong>
        . Students have been placed at companies including Cisco, HCL
        Technologies, Cloud4C and Teleperformance.
      </>
    ),
  },
  {
    category: "General",
    question: "What is the batch size for training?",
    answerText:
      "Batches are capped at a maximum of 10 students to ensure personalized instructor attention and hands-on lab time for every student.",
    answer: (
      <>
        Batches are capped at a{" "}
        <strong className="text-white">maximum of 10 students</strong> to
        ensure personalized instructor attention and hands-on lab time for
        every student.
      </>
    ),
  },
  {
    category: "General",
    question: "Will I get access to recorded class sessions?",
    answerText:
      "Yes. Recorded sessions are provided for every course so students can revise concepts and catch up on missed classes at their own pace.",
    answer: (
      <>
        <strong className="text-white">Yes.</strong> Recorded sessions are
        provided for every course so students can revise concepts and catch
        up on missed classes at their own pace.
      </>
    ),
  },
  {
    category: "Courses",
    question: "Are practical labs included in the training?",
    answerText:
      "Yes. All courses include hands-on practical labs using enterprise Cisco routers, switches, Palo Alto and Fortigate firewalls, F5 load balancers, and simulation tools like Packet Tracer and GNS3.",
    answer: (
      <>
        Yes. All courses include hands-on practical labs using{" "}
        <strong className="text-white">
          enterprise Cisco routers, switches, Palo Alto and Fortigate
          firewalls, F5 load balancers
        </strong>
        , and simulation tools like Packet Tracer and GNS3.
      </>
    ),
  },
  {
    category: "Fees & Enrollment",
    question: "Can international students join the training?",
    answerText:
      "Yes. Students joining from outside India can attend live online classes with flexible batch timings based on their country and time zone, subject to trainer and batch availability.",
    answer: (
      <>
        <strong className="text-white">Yes.</strong> Students joining from
        outside India can attend live online classes with flexible batch
        timings based on their country and time zone, subject to trainer and
        batch availability.
      </>
    ),
  },
  {
    category: "Placement",
    question: "What job roles can I apply for after completing training?",
    answerText:
      "Depending on the course, students commonly pursue roles such as Network Engineer, Network Security Engineer, Cloud Engineer, NOC Engineer, System Administrator and Infrastructure Support Engineer.",
    answer: (
      <>
        Depending on the course, students commonly pursue roles such as{" "}
        <strong className="text-white">
          Network Engineer, Network Security Engineer, Cloud Engineer, NOC
          Engineer, System Administrator
        </strong>{" "}
        and Infrastructure Support Engineer.
      </>
    ),
  },
  {
    category: "General",
    question: "Where is NG Cloud Networks located?",
    answerText:
      "NG Cloud Networks is located in Ameenpur, Hyderabad, Telangana, with both classroom and live online training options available.",
    answer: (
      <>
        NG Cloud Networks is located in{" "}
        <strong className="text-white">Ameenpur, Hyderabad, Telangana</strong>
        , with both classroom and live online training options available.
      </>
    ),
  },
];

const categories = [
  "General",
  "Courses",
  "Choosing a Course",
  "Fees & Enrollment",
  "Placement",
] as const;

export default function FAQSection() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answerText,
        author: {
          "@id": "https://www.ngcloudnetworks.com/#organization",
        },
      },
    })),
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      itemScope
      itemType="https://schema.org/FAQPage"
      className="relative overflow-hidden py-20 md:py-24"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-[-180px] top-[-120px] h-[420px] w-[420px] rounded-full bg-[#D4AF37]/7 blur-[180px]" />
        <div className="absolute right-[-180px] bottom-[-120px] h-[420px] w-[420px] rounded-full bg-[#D4AF37]/6 blur-[180px]" />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="relative z-10 mx-auto max-w-[900px] px-5">

        {/* Header */}
        <header className="mx-auto max-w-[720px] text-center">
          <span
            className="
              inline-flex rounded-full border border-[#D4AF37]/20
              bg-[#D4AF37]/10 px-4 py-2 text-sm font-semibold text-[#D4AF37]
            "
          >
            Frequently Asked Questions
          </span>

          <h2
            id="faq-heading"
            className="
              mt-6 text-[36px] font-black leading-[1.05] tracking-[-0.04em]
              text-white md:text-[48px]
            "
          >
            Common Questions About Our Training
          </h2>

          <p className="mt-4 text-[13.5px] text-white/60">
            Answered by the NG Cloud Networks training team, Ameenpur,
            Hyderabad
          </p>
        </header>

        {/* Accordion grouped by category — all rendered, all crawlable */}
        <div className="mt-14 space-y-10">
          {categories.map((category) => {
            const items = faqs.filter((f) => f.category === category);
            if (!items.length) return null;

            return (
              <div key={category}>
                <h3 className="text-[13px] font-semibold uppercase tracking-wider text-[#D4AF37]/80">
                  {category}
                </h3>

                <div className="mt-4 divide-y divide-white/10">
                  {items.map((faq) => (
                    <details
                      key={faq.question}
                      itemScope
                      itemProp="mainEntity"
                      itemType="https://schema.org/Question"
                      className="group py-5"
                      open={faq.defaultOpen}
                    >
                      <summary
                        itemProp="name"
                        className="
                          flex cursor-pointer list-none items-center
                          justify-between gap-4 text-[16px] font-semibold
                          text-white marker:hidden
                        "
                      >
                        {faq.question}
                        <ChevronDown
                          className="
                            h-5 w-5 shrink-0 text-[#D4AF37]
                            transition-transform duration-300
                            group-open:rotate-180
                          "
                          aria-hidden="true"
                        />
                      </summary>

                      <div
                        itemScope
                        itemProp="acceptedAnswer"
                        itemType="https://schema.org/Answer"
                      >
                        <p
                          itemProp="text"
                          className="mt-3 max-w-[820px] text-[15px] leading-[1.8] text-white/65"
                        >
                          {faq.answer}
                        </p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}