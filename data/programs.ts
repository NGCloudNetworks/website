// data/programs.ts
// Combined-course offers for the 1 December 2026 batch. Individual course fees and durations stay as on each course page.
// Update START_DATE, the fee and the slots here when the offer changes; the pages read everything from this file.
import { SITE } from "@/lib/site";

export type ProgramModule = { name: string; detail: string; href?: string };
export type Program = {
  slug: string;
  path: string;
  seoTitle: string;
  seoDescription: string;
  h1: string;
  eyebrow: string;
  intro: string;
  fee: number; // before GST
  gstPercent: number;
  duration: string;
  batchSize: string;
  startDate: string; // ISO
  startLabel: string;
  slots: string[];
  modules: ProgramModule[];
  forWho: string[];
  extras: { title: string; text: string }[]; // lab or delivery details printed on the poster
  priceNote?: string;
  faqs: { q: string; a: string }[];
  formLabel: string;
};

export const GST = 18;
export const gstAmount = (fee: number) => Math.round((fee * GST) / 100);
export const totalWithGst = (fee: number) => fee + gstAmount(fee);
export const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;

export const NETWORK_SECURITY: Program = {
  slug: "network-security-engineer-course-hyderabad",
  path: "/network-security-engineer-course-hyderabad",
  seoTitle: "Network Security Engineer Course in Hyderabad | NG Cloud",
  seoDescription:
    "CCNA + CCNP + Palo Alto + FortiGate in one 4-month program at Ameerpet, Hyderabad. 5 students per batch, starts 1 Dec 2026. ₹30,000 + GST.",
  h1: "Network Security Engineer Course in Hyderabad",
  eyebrow: "December 2026 batch · Ameerpet",
  intro:
    "A combined 4-month program that takes you from CCNA routing and switching, through CCNP Enterprise, to Palo Alto and FortiGate firewalls, with hands-on practice on real devices. Batches are limited to 5 students and start on 1 December 2026 at our Ameerpet branch, in the classroom or live online.",
  fee: 30000,
  gstPercent: GST,
  duration: "4 months",
  batchSize: "5 students per batch",
  startDate: "2026-12-01",
  startLabel: "1 December 2026",
  slots: ["9:00 AM – 10:30 AM", "4:00 PM – 5:30 PM", "8:00 PM – 9:30 PM"],
  modules: [
    { name: "CCNA 200-301", detail: "Routing and switching fundamentals, IP addressing, VLANs, OSPF, ACLs and troubleshooting.", href: "/courses/ccna-training-hyderabad" },
    { name: "CCNP Enterprise (ENCOR and ENARSI)", detail: "Enterprise routing, switching, WAN and infrastructure at job level.", href: "/courses/ccnp-enterprise-training-hyderabad" },
    { name: "Palo Alto Firewall", detail: "Next-generation firewall policies, NAT, threat prevention and Panorama basics.", href: "/courses/palo-alto-firewall-training-hyderabad" },
    { name: "FortiGate Firewall", detail: "FortiGate policies, NAT, VPN and security profiles on Fortinet firewalls.", href: "/courses/fortigate-firewall-training-hyderabad" },
  ],
  forWho: [
    "Freshers and non-IT graduates who want a networking and security career. CCNA starts from the basics.",
    "Working professionals who want to move into network or firewall roles.",
    "Network engineers who want to add Palo Alto and FortiGate to their skills.",
  ],
  extras: [
    { title: "Dedicated practice rack", text: "Real network connectivity on our lab: 4 switches, 2 routers and 2 dedicated WAN connections. You get 2 dedicated racks for practice." },
    { title: "Offline and online", text: "Practise in our lab, or connect remotely, so online students are not left with theory only." },
  ],
  priceNote:
    "Taken separately, the four courses are listed at ₹10,000 + ₹15,000 + ₹10,000 + ₹10,000 = ₹45,000 before GST on our course pages. This combined offer is for the 1 December 2026 batch.",
  faqs: [
    { q: "What does the Network Security Engineer course include?", a: "It covers CCNA, CCNP Enterprise (ENCOR and ENARSI), Palo Alto Firewall and FortiGate Firewall in one 4-month program. Practice is on real devices in our lab." },
    { q: "What is the fee?", a: "₹30,000 plus 18% GST (₹5,400), so ₹35,400 in total. Exam vouchers are not included." },
    { q: "Can a beginner join?", a: "Yes. The program starts at CCNA, which begins from the basics, so you need basic computer skills and regular practice, not prior IT experience." },
    { q: "How many students are in a batch?", a: "Only 5. A small batch means the trainer can check every student's lab work." },
    { q: "Can I take only one course instead of the combined program?", a: "Yes. Every course can be joined individually at the fee and duration on its course page." },
    { q: "Can I attend online?", a: "Yes. Classes are offered in the classroom at Ameerpet and live online, and you can use the lab remotely." },
  ],
  formLabel: "Network Security Engineer program (CCNA + CCNP + Palo Alto + FortiGate)",
};

export const CLOUD_SECURITY: Program = {
  slug: "cloud-security-combo-course-hyderabad",
  path: "/cloud-security-combo-course-hyderabad",
  seoTitle: "Cloud Security Combined Course in Hyderabad | NG Cloud",
  seoDescription:
    "CCNA + Linux + AWS + Multi Cloud Security (AWS, Azure, GCP) in one 3-month program at Ameerpet. 5 per batch, starts 1 Dec 2026. ₹19,999 + GST.",
  h1: "Cloud Security Combined Course in Hyderabad",
  eyebrow: "December 2026 batch · Ameerpet",
  intro:
    "A combined 3-month program that builds the networking and Linux base, then moves into AWS cloud security and multi-cloud security across AWS, Azure and GCP. The batch is limited to 5 members, starts on 1 December 2026 and meets at 5:00 PM at our Ameerpet branch.",
  fee: 19999,
  gstPercent: GST,
  duration: "3 months",
  batchSize: "5 members per batch",
  startDate: "2026-12-01",
  startLabel: "1 December 2026",
  slots: ["5:00 PM"],
  modules: [
    { name: "CCNA (Routing and Switching)", detail: "Networking fundamentals that every cloud and security role builds on.", href: "/courses/ccna-training-hyderabad" },
    { name: "Linux Administration", detail: "Command line, users, permissions and services for cloud and security work." },
    { name: "AWS Cloud Security", detail: "Securing AWS accounts, identity, networking and workloads.", href: "/courses/aws-training-hyderabad" },
    { name: "Multi Cloud Security (AWS, Azure, GCP)", detail: "Applying security controls consistently across the three major clouds.", href: "/courses/cloud-security-training-hyderabad" },
  ],
  forWho: [
    "Freshers who want a cloud security career and need the networking and Linux base first.",
    "Working professionals moving from support or networking into cloud security.",
    "Learners who want AWS, Azure and GCP security covered in one program.",
  ],
  extras: [],
  faqs: [
    { q: "What does the Cloud Security combined course include?", a: "It covers CCNA, Linux Administration, AWS Cloud Security and Multi Cloud Security across AWS, Azure and GCP, in one 3-month program." },
    { q: "What is the fee?", a: "₹19,999 plus 18% GST (about ₹3,600), so about ₹23,599 in total. Exam vouchers are not included." },
    { q: "Can a beginner join?", a: "Yes. The program starts with CCNA and Linux, so you need basic computer skills and regular practice, not prior IT experience." },
    { q: "How many members are in a batch?", a: "Only 5." },
    { q: "When is the class?", a: "The batch starts on 1 December 2026 and meets at 5:00 PM." },
    { q: "Can I join a single course instead?", a: "Yes. Every course can be joined individually at the fee and duration on its course page." },
  ],
  formLabel: "Cloud Security program (CCNA + Linux + AWS + Multi Cloud Security)",
};

export const programUrl = (p: Program) => `${SITE}${p.path}`;
