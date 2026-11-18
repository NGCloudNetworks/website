import { courseLinks, courseCategories } from "@/data/courseLinks";
import { trainer, trainingFeatures, trainingModes } from "@/data/academy";
import { TRAINER_FULL_NAME } from "@/data/branches";

export const FACTS: Record<string, { duration: string; fee: string }> = {
  ccna: { duration: "2 months", fee: "₹10,000" },
  "ccnp-enterprise": { duration: "3 months", fee: "₹15,000 + GST" },
  "ccnp-core": { duration: "3 months", fee: "₹15,000 + GST" },
  "cisco-sdwan": { duration: "1 month", fee: "₹12,000 + GST" },
  "aws-cloud": { duration: "30 days", fee: "₹10,000 + GST" },
  "azure-cloud": { duration: "30 days", fee: "₹10,000 + GST" },
  "cloud-security": { duration: "45 days", fee: "₹15,000 + GST" },
  "palo-alto-firewall": { duration: "1 month", fee: "₹10,000 + GST" },
  "fortigate-firewall": { duration: "20 days", fee: "₹10,000 + GST" },
  "f5-load-balancer": { duration: "1 month", fee: "₹10,000 + GST" },
};

// Per-course decision content. Topics and roles come from each course page; CONFIRM the prerequisites.
export const COURSE_META: Record<
  string,
  { suits: string; prerequisite: string; learn: string[]; roles: string[]; next?: string }
> = {
  ccna: {
    suits: "Freshers, support engineers and career starters",
    prerequisite: "None. Basic computer skills are enough.",
    learn: ["IP addressing and subnetting", "VLANs, trunking, STP and EtherChannel", "Static routing and OSPF", "ACLs, NAT and DHCP", "Wireless and automation basics"],
    roles: ["Network Engineer", "NOC Engineer", "Technical Support Engineer"],
    next: "ccnp-enterprise",
  },
  "ccnp-enterprise": {
    suits: "CCNA holders and working network engineers",
    prerequisite: "CCNA-level routing and switching",
    learn: ["Enterprise architecture and advanced switching", "OSPF and BGP in depth", "Infrastructure services, wireless and security", "Automation and troubleshooting"],
    roles: ["Enterprise Network Engineer", "Network Operations Engineer (L2/L3)", "Senior Network Engineer"],
    next: "cisco-sdwan",
  },
  "ccnp-core": {
    suits: "CCNA holders who want the ENCOR core exam first",
    prerequisite: "CCNA-level routing and switching",
    learn: ["Cisco ENCOR (350-401) exam topics", "Enterprise architecture and virtualization", "Dual-stack routing and switching depth", "Foundation for any CCNP concentration"],
    roles: ["Network Engineer", "Enterprise Infrastructure Engineer", "NOC Specialist"],
    next: "cisco-sdwan",
  },
  "cisco-sdwan": {
    suits: "Network engineers moving into modern WAN roles",
    prerequisite: "Routing knowledge at CCNA or CCNP level",
    learn: ["Cisco SD-WAN architecture", "vManage, vSmart and WAN Edge routers", "Overlay and underlay design", "Policies, monitoring and troubleshooting"],
    roles: ["SD-WAN Engineer", "WAN Engineer", "Network Infrastructure Engineer"],
  },
  "aws-cloud": {
    suits: "Freshers, system admins and network engineers entering cloud",
    prerequisite: "None. Basic IT and networking knowledge helps.",
    learn: ["Compute and storage: EC2, S3, RDS, DynamoDB", "Networking with Amazon VPC", "Access control with AWS IAM", "Certification roadmap guidance"],
    roles: ["AWS Cloud Engineer", "Cloud Support Engineer", "Cloud Administrator"],
    next: "cloud-security",
  },
  "azure-cloud": {
    suits: "Windows and infrastructure admins, and anyone targeting Microsoft shops",
    prerequisite: "None. Basic IT and networking knowledge helps.",
    learn: ["Azure Virtual Machines, storage accounts and backup", "Azure Virtual Network and Load Balancer", "Identity and access management", "Certification roadmap guidance"],
    roles: ["Azure Cloud Engineer", "Azure Support Engineer", "Cloud Administrator"],
    next: "cloud-security",
  },
  "cloud-security": {
    suits: "Cloud and network engineers adding security skills",
    prerequisite: "Basic AWS or Azure awareness",
    learn: ["IAM and least-privilege access on AWS and Azure", "Network security on AWS VPC and Azure Virtual Network", "Infrastructure hardening and monitoring", "Hands-on security labs on both clouds"],
    roles: ["Cloud Security Engineer", "Cloud Security Analyst", "SOC Analyst"],
  },
  "palo-alto-firewall": {
    suits: "Network engineers moving into security",
    prerequisite: "CCNA-level networking basics",
    learn: ["Security policies and NAT", "App-ID, User-ID and threat prevention", "GlobalProtect VPN", "Panorama management and logging"],
    roles: ["Firewall Administrator", "Security Engineer", "Network Security Engineer"],
    next: "cloud-security",
  },
  "fortigate-firewall": {
    suits: "Network and support engineers who manage branch or SME firewalls",
    prerequisite: "CCNA-level networking basics",
    learn: ["FortiOS policies, NAT and routing", "IPSec and SSL VPN", "Application control and security profiles", "FortiManager, FortiAnalyzer and logging"],
    roles: ["Firewall Engineer", "Security Administrator", "Network Security Engineer"],
    next: "palo-alto-firewall",
  },
  "f5-load-balancer": {
    suits: "Infrastructure and data center engineers",
    prerequisite: "CCNA-level networking basics",
    learn: ["Local Traffic Manager: virtual servers and pools", "SSL client and server profiles", "iRules and F5 DNS", "High availability with device service clustering"],
    roles: ["F5 Engineer", "ADC Engineer", "Infrastructure Support Engineer"],
  },
};

export const courses = courseLinks;
export const byCat = courseCategories.map((cat) => ({ cat, items: courses.filter((c) => c.category === cat) }));
export const href = (slug: string) => courses.find((c) => c.slug === slug)?.href ?? "/courses";
export const shortName = (anchor: string) => anchor.replace(" Training Hyderabad", "").replace(" Hyderabad", "");
export const nameOf = (slug: string) => shortName(courses.find((c) => c.slug === slug)?.anchor ?? slug);
export const modes = trainingModes.map((m) => m.mode);

export const PATHS = [
  { who: "New to IT or networking", start: "ccna", then: "ccnp-enterprise", why: "CCNA teaches how networks work from the first principles; CCNP Enterprise builds job-level depth on top." },
  { who: "Network engineer adding security", start: "palo-alto-firewall", then: "cloud-security", why: "Firewall skills are in steady demand; cloud security extends them to AWS and Azure." },
  { who: "Moving into cloud", start: "aws-cloud", then: "cloud-security", why: "Pick AWS or Azure by the jobs you target, then add security." },
  { who: "Working on enterprise WAN", start: "ccnp-core", then: "cisco-sdwan", why: "ENCOR gives the core, SD-WAN covers where enterprise WANs are heading." },
] as const;

export const DOUBTS: { q: string; a: string; link?: [string, string] }[] = [
  {
    q: "I am from a non-IT background. Can I learn networking?",
    a: "Yes. CCNA starts from the basics, such as what an IP address is and how data moves between devices. You need basic computer skills and regular practice, not prior IT experience.",
    link: ["Start with CCNA", "ccna"],
  },
  {
    q: "What if I fall behind or miss a class?",
    a: `Batches are capped (${trainingFeatures.batchSize.toLowerCase()}), so the trainer notices when you are stuck. Classes are recorded for revision, and doubts are cleared live instead of being saved for later.`,
  },
  {
    q: "Will theory be enough to clear interviews?",
    a: "Usually not. Interviewers ask scenario and troubleshooting questions, so every course here is lab-based, and interview preparation includes mock technical rounds.",
  },
  {
    q: "Will I learn less if I join online?",
    a: "Online students attend the same live, instructor-led class with real-time interaction, and every session is recorded for revision. Doubts are cleared live in both modes, and you can switch to the classroom if you prefer.",
  },
  {
    q: "I work full time. Can I still manage?",
    a: "Yes. Evening batches run from 7:00 PM, weekend sessions run 9:00 AM to 1:00 PM on Saturday and Sunday, and recordings help you catch up.",
  },
];

export const STRUGGLES = [
  { struggle: "Cannot answer scenario questions", cause: "Learned commands from slides, never built a network", fix: "Hands-on labs in every course, plus scenario-based exercises" },
  { struggle: "Freezes in troubleshooting rounds", cause: "Never had to fix something that was broken", fix: "Real-time troubleshooting exercises and weekly practical assessments" },
  { struggle: "Resume looks like everyone else's", cause: "Lists course names but no lab work or tools", fix: "Resume building that shows the labs, devices and protocols you configured" },
  { struggle: "First interview is the first practice", cause: "No mock interviews before the real ones", fix: "Mock technical and HR interviews before interviews are scheduled" },
  { struggle: "Certificate but no confidence", cause: "Memorised exam answers instead of understanding", fix: "Certification guidance combined with practical lab evaluation" },
  { struggle: "Stuck after the course ends", cause: "Learning and support stop together", fix: "Recorded sessions for revision and continued placement support" },
];

export const PROMISE = [
  `${trainingFeatures.batchSize} per batch`,
  `Taught by the founder, ${TRAINER_FULL_NAME} (${trainer.experience}), in every course except Cloud Security`,
  "Hands-on labs in every course, not slides alone",
  "Live doubt clarification and recorded sessions",
  "Weekly practical assessments",
  "Resume building, mock interviews and referral assistance",
];
export const NOT_PROMISE = [
  "A guaranteed job or a guaranteed salary",
  "A guaranteed certification pass",
  "Exam fees included in the course fee, unless your enrolment offer says so",
  "Results without regular practice from your side",
];

export const JOURNEY = [
  { t: "Free demo class", d: "Sit in a live class, meet the trainer and ask your doubts before paying." },
  { t: "Pick your course and batch", d: "Choose by your experience and target role; pick a morning, afternoon, evening or weekend batch." },
  { t: "Learn in the lab", d: "Daily hands-on practice. Cisco courses use Packet Tracer and GNS3; cloud and firewall courses use their own lab platforms." },
  { t: "Measured every week", d: "Weekly practical assessments and live doubt clarification show you where you stand." },
  { t: "Career preparation", d: "Resume building, mock technical and HR interviews, then interview scheduling and referral assistance." },
];