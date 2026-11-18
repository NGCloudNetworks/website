import type { Metadata } from "next";

export const SITE = "https://www.ngcloudnetworks.com";
export const PHONE_DISPLAY = "+91 99899 39191";
export const PHONE_TEL = "+919989939191";
export const WA_NUMBER = "919989939191";
export const EMAIL = "info@ngcloudnetworks.com";
export const TRAINER_FULL_NAME = "Nazeer Basha";
export const HUB_PATH = "/networking-training-hyderabad";

export type BranchReview = { text: string; name: string };
export type BranchFaq = { q: string; a: string };

export type Branch = {
  slug: "ameenpur" | "ameerpet";
  name: string; // "Ameenpur"
  isNew: boolean;
  street: string;
  postalCode: string;
  mapUrl: string;
  // CONFIRM: office hours (not class timings). Must match the Google Business Profile.
  hoursText: string;
  nearbyAreas: string[];
  heroIntro: string;
  seoTitle: string;
  seoDescription: string;
  ogTitle: string;
  ogDescription: string;
  webPageName: string;
  schemaDescription: string;
  reviewCount: number;
  reviewStat: string; // shown in the hero stat tile
  reviewsAsOf: string;
  reviewsIntro: string;
  reviews: BranchReview[];
  suits: { title: string; text: string }[];
  localDoubts: BranchFaq[]; // three doubts specific to studying at this branch
  faqLocal: BranchFaq[]; // branch-specific FAQs, placed near the top
  difference: string; // answer to "difference between the branches"
  other: { name: string; path: string };
  lastUpdated: string; // ISO date; update when you edit the page
  lastUpdatedLabel: string;
};

const HOURS = "Monday to Saturday, 9:00 AM to 8:00 PM"; // CONFIRM
const AS_OF = "16 November 2026";

export const AMEENPUR: Branch = {
  slug: "ameenpur",
  name: "Ameenpur",
  isNew: false,
  street: "H.no:5-125/1/30, Plot No. 30, Royal Homes, Fusion School Back Side, Ameenpur",
  postalCode: "502032",
  // CONFIRM: replace with the short link from the Ameenpur Google Business Profile (Share > Send a link to the map).
  mapUrl: "https://www.google.com/maps/search/?api=1&query=NG+Cloud+Networks+Ameenpur+Hyderabad",
  hoursText: HOURS,
  // CONFIRM: keep only the areas your students really come from.
  nearbyAreas: ["Miyapur", "Bachupally", "BHEL Township (RC Puram)", "Chandanagar", "Lingampally", "Patancheru"],
  heroIntro:
    "NG Cloud Networks Ameenpur is a networking, security and cloud training institute at Royal Homes, behind Fusion School, Hyderabad. Founder and trainer Nazeer Basha teaches live, lab-based classes in batches of up to 10 students, in the classroom or online.",
  seoTitle: "CCNA, CCNP & Cloud Training in Ameenpur | NG Cloud Networks",
  seoDescription:
    "Networking, firewall and cloud training in Ameenpur, Hyderabad: CCNA, CCNP, Palo Alto, AWS, Azure. Max 10 per batch, hands-on labs. Book a free demo.",
  ogTitle: "NG Cloud Networks Ameenpur: Networking, Security & Cloud Training",
  ogDescription: "Learn CCNA, CCNP, firewall and cloud courses at our Ameenpur branch with hands-on labs, small batches and a free demo class.",
  webPageName: "CCNA, CCNP & Cloud Training in Ameenpur, Hyderabad",
  schemaDescription:
    "Networking, firewall and cloud training institute in Ameenpur, Hyderabad offering CCNA, CCNP, Cisco SD-WAN, Palo Alto, Fortigate, F5, AWS, Azure and Cloud Security courses.",
  reviewCount: 14,
  reviewStat: "5.0 ★ (14)",
  reviewsAsOf: AS_OF,
  reviewsIntro: `Our Ameenpur profile has 14 Google reviews, all 5 stars, as of ${AS_OF}. Here are three, lightly tidied for spelling and spacing.`,
  reviews: [
    { text: "CCNA and enterprise networking training was highly practical and industry-focused. The mentors explained real-world networking scenarios clearly, and I cracked my interviews confidently.", name: "Prasad G." },
    { text: "The way Nazer sir is explaining clearly each and every topic, clarification of doubts everything is soo perfect.", name: "Aleem K." },
    { text: "Nazeer Sir is an excellent instructor for CCNA and Palo Alto Firewall training.", name: "Mohammed Z., Google Local Guide" },
  ],
  suits: [
    {
      title: "Learners in western Hyderabad",
      text: "The branch is in Ameenpur, so it can suit learners from Miyapur, Bachupally, BHEL Township, Chandanagar, Lingampally and Patancheru. Check the route on Google Maps for your travel time.",
    },
    {
      title: "Learners who want an established branch",
      text: `The Ameenpur profile has 14 Google reviews from students as of ${AS_OF}, and Nazeer teaches here in the same small batches.`,
    },
    {
      title: "Learners comparing branches",
      text: "Ameenpur and Ameerpet run the same courses and the same timetable, so choose by travel time, or join live online.",
    },
  ],
  localDoubts: [
    {
      q: "I live in Miyapur, Bachupally or Patancheru. Is the commute realistic?",
      a: "Ameenpur is close to these areas. Pick the batch that fits your commute: early morning, evening from 7:00 PM, or a Saturday or Sunday morning session.", // CONFIRM areas
    },
    {
      q: "Can I move to the Ameerpet branch later if it suits me better?",
      a: "Both branches run the same courses and timetable with the same trainer, so ask us if a change of branch suits you. We will confirm batch availability when you call.",
    },
    {
      q: "Is the Ameenpur branch only for classroom learners?",
      a: "No. Ameenpur also runs live online and hybrid batches, so you can join from home and visit the branch when you want hands-on guidance.",
    },
  ],
  faqLocal: [
    {
      q: "Is the Ameenpur branch convenient for Miyapur or Bachupally?",
      a: "Ameenpur is on the western side of Hyderabad, close to Miyapur and Bachupally. Check the route on Google Maps for the travel time from your area.", // CONFIRM
    },
    {
      q: "Can I join online if I cannot travel to Ameenpur?",
      a: "Yes. Live online and hybrid classes are available with the same trainer and the same recorded sessions. You can start online and visit the branch for lab guidance whenever you like.",
    },
  ],
  difference:
    "Both branches offer the same courses, the same timetable and the same lab approach. Ameenpur is on the western side of Hyderabad and Ameerpet is in the centre, so pick whichever is easier to reach.",
  other: { name: "Ameerpet", path: "/ameerpet" },
  lastUpdated: "2026-11-17",
  lastUpdatedLabel: "17 November 2026",
};

export const AMEERPET: Branch = {
  slug: "ameerpet",
  name: "Ameerpet",
  isNew: true,
  street: "Flat No. 404, 4th Floor, Aditya Enclave, Annapurna Block, Ameerpet",
  postalCode: "500038", // must match the Ameerpet Google Business Profile
  mapUrl: "https://maps.app.goo.gl/B5qT6V1v5F6zUMyv5",
  hoursText: HOURS, // CONFIRM: the Ameerpet profile may use different hours
  nearbyAreas: ["SR Nagar", "Begumpet", "Punjagutta"], // CONFIRM
  heroIntro:
    "NG Cloud Networks Ameerpet is our newest branch, a networking, security and cloud training institute at Aditya Enclave, Annapurna Block, Hyderabad. Founder and trainer Nazeer Basha teaches live, lab-based classes in batches of up to 10 students, in the classroom or online.",
  seoTitle: "CCNA, CCNP & Cloud Training in Ameerpet | NG Cloud Networks",
  seoDescription:
    "Networking, firewall and cloud training in Ameerpet, Hyderabad: CCNA, CCNP, Palo Alto, AWS, Azure. Max 10 per batch, hands-on labs. Book a free demo.",
  ogTitle: "NG Cloud Networks Ameerpet: Networking, Security & Cloud Training",
  ogDescription: "Visit our Ameerpet branch for CCNA, CCNP, firewall and cloud courses with hands-on labs, small batches and a free demo class.",
  webPageName: "CCNA, CCNP & Cloud Training in Ameerpet, Hyderabad",
  schemaDescription:
    "Networking, firewall and cloud training institute in Ameerpet, Hyderabad offering CCNA, CCNP, Cisco SD-WAN, Palo Alto, Fortigate, F5, AWS, Azure and Cloud Security courses.",
  reviewCount: 5,
  reviewStat: "5 reviews",
  reviewsAsOf: AS_OF,
  reviewsIntro: `Our Ameerpet profile has 5 Google reviews as of ${AS_OF}, and two include written feedback. Here they are, lightly tidied for spelling and capitalisation.`,
  reviews: [
    { text: "Successfully completed my CCNA and FortiGate training. Special thanks to Nazeer Sir for his excellent teaching, hands-on practical experience with real devices, and continuous support. Great learning experience. Highly recommended!", name: "Gowtham P." },
    { text: "Best training network and firewall institute. Best teachers, amazing way of teaching.", name: "Jama A." },
  ],
  suits: [
    {
      title: "Learners in central Hyderabad",
      text: "Ameerpet is widely known as Hyderabad's IT-training area, and the branch can suit learners from SR Nagar, Begumpet and Punjagutta.",
    },
    {
      title: "Learners travelling by metro",
      text: "Ameerpet metro station is an interchange between the Red and Blue lines, so the area is reachable from many parts of the city. Use Google Maps for the walking route to Aditya Enclave.",
    },
    {
      title: "Learners who want the same trainer in the city centre",
      text: "Nazeer Basha teaches at Ameerpet as well as Ameenpur, with the same courses and the same timetable.",
    },
  ],
  localDoubts: [
    {
      q: "I work near Ameerpet, SR Nagar or Begumpet. Can I attend after work?",
      a: "Evening batches run from 7:00 PM and weekend sessions run 9:00 AM to 1:00 PM, so you can attend after work or on weekends. Check your course in the batch table on the Hyderabad training page.", // CONFIRM areas
    },
    {
      q: "I live far from Ameerpet. Do I have to travel every day?",
      a: "No. Live online and hybrid batches are available, so you can mix classroom days with online classes. Every class is recorded for revision.",
    },
    {
      q: "Is Ameerpet a new branch, and does that change the training?",
      a: "Ameerpet is our newest branch, but the courses, lab approach and timetable are the same as at Ameenpur. Nazeer Basha teaches here as well.",
    },
  ],
  faqLocal: [
    {
      q: "How do I reach the Ameerpet branch by metro?",
      a: "Ameerpet metro station is an interchange between the Red and Blue lines, so it can be reached from many parts of the city. Use the Google Maps link on this page for the exact walking route to Aditya Enclave.", // CONFIRM walking distance
    },
    {
      q: "Is Ameerpet a good place to study IT courses?",
      a: "Ameerpet is widely known as Hyderabad's IT-training area, so many learners come here from across the city. What matters more than the area is the trainer, the batch size and the lab time, which is why we cap batches at 10.",
    },
  ],
  difference:
    "Both branches offer the same courses, the same timetable and the same lab approach. Ameerpet is in central Hyderabad and Ameenpur is on the western side, so pick whichever is easier to reach.",
  other: { name: "Ameenpur", path: "/ameenpur" },
  lastUpdated: "2026-11-17",
  lastUpdatedLabel: "17 November 2026",
};

export function branchMetadata(b: Branch): Metadata {
  const url = `${SITE}/${b.slug}`;
  return {
    title: b.seoTitle,
    description: b.seoDescription,
    alternates: { canonical: url },
    openGraph: {
      title: b.ogTitle,
      description: b.ogDescription,
      url,
      type: "website",
      locale: "en_IN",
      // images: [{ url: `${SITE}/images/${b.slug}-branch.jpg`, width: 1200, height: 630, alt: `NG Cloud Networks ${b.name} branch` }], // add a real photo
    },
    twitter: { card: "summary_large_image", title: `NG Cloud Networks ${b.name}`, description: `CCNA, CCNP, firewall and cloud training in ${b.name}, Hyderabad.` },
  };
}