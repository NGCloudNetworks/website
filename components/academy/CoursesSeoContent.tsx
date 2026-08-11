import Link from "next/link";

const sections = [
  {
    heading: "IT Training in Hyderabad: Choosing the Right Path",
    paragraphs: [
      "Hyderabad has grown into one of India's largest IT and technology hubs, home to global enterprises, system integrators, managed service providers and a dense cluster of startups. That growth has created consistent demand for networking, cloud and cybersecurity professionals — but it has also created a crowded market of training institutes, many offering overlapping or thin course content with little practical depth.",
      "Choosing the right course, and the right institute, matters more than most students realize when they start looking. A certification alone rarely determines whether someone gets hired; practical, hands-on skill with real enterprise technology does. This page is designed to help you compare NG Cloud Networks' full catalog of networking, cloud and security training programs side by side, understand how they connect into real career paths, and make an informed decision rather than picking a course based on price or marketing alone.",
    ],
  },
  {
    heading: "Networking Foundations: CCNA, CCNP Enterprise and CCNP Core",
    paragraphs: [
      "Every networking career in Hyderabad's IT industry starts with the same foundation: understanding how routers, switches and enterprise networks actually work. Our",
    ],
    // rendered with inline links, see component below
    key: "networking",
  },
  {
    heading: "Cloud Computing: AWS and Microsoft Azure",
    key: "cloud",
  },
  {
    heading: "Network Security: Palo Alto, Fortigate and Cloud Security",
    key: "security",
  },
  {
    heading: "Infrastructure and WAN Technologies: F5 Load Balancer and Cisco SD-WAN",
    key: "infrastructure",
  },
  {
    heading: "How to Choose the Right Course for Your Background",
    paragraphs: [
      "Students arrive at NG Cloud Networks from very different starting points: some are engineering or diploma students with no prior IT exposure, others are working professionals looking to specialize, and some are career switchers moving into IT from unrelated fields entirely. The right course depends less on what sounds impressive and more on where you're actually starting from.",
      "If you have no prior networking experience, CCNA is almost always the correct starting point, regardless of your eventual goal — even students planning to specialize in cloud or security benefit from understanding core networking first, since firewalls, load balancers and cloud infrastructure all sit on top of a network. If you already hold CCNA or have equivalent working knowledge, the decision becomes about direction: CCNP Enterprise or CCNP Core for deeper networking specialization, AWS or Azure to pivot into cloud infrastructure, or Palo Alto and Fortigate to move into network security.",
      "A common mistake is choosing an advanced course too early, before the fundamentals are solid. Enterprise employers consistently value engineers who can troubleshoot from first principles, not just recite configuration commands memorized for a certification exam — which is why every course in our catalog is built around practical labs rather than theory-only instruction.",
    ],
  },
  {
    heading: "Certification Roadmap: What to Learn After Your First Course",
    paragraphs: [
      "Very few networking or cloud careers are built on a single certification. Most professionals follow a progression, adding certifications as their role and responsibilities grow. Understanding this roadmap in advance helps you plan your training investment rather than choosing courses reactively.",
      "A typical networking-focused path moves from CCNA into CCNP Enterprise or CCNP Core, then into Cisco SD-WAN for engineers moving toward enterprise WAN architecture roles. A cloud-focused path moves from CCNA into AWS or Azure, and often adds Cloud Security once the professional is responsible for securing cloud workloads rather than just deploying them. A security-focused path moves from CCNA into Palo Alto or Fortigate firewall administration, often adding the other platform later to become proficient across both leading vendors, since many enterprises run mixed-vendor security environments.",
      "F5 Load Balancer training is typically taken by professionals already working in infrastructure or application delivery roles, since load balancing sits at the intersection of networking and application performance — it pairs naturally with either a networking or infrastructure specialization rather than standing alone as a first course.",
    ],
  },
  {
    heading: "Career Growth and Salary Trajectory Across Tracks",
    paragraphs: [
      "Compensation in networking, cloud and security roles grows substantially with hands-on experience, not certification count alone. A fresher completing CCNA typically starts in Network Support Engineer or NOC Engineer roles. With two to five years of experience and a CCNP-level certification, professionals move into Senior Network Engineer or Enterprise Network Engineer roles, with further growth toward Infrastructure Specialist and Network Architect positions at the eight-to-twelve-year mark.",
      "Cloud and security specializations generally command higher compensation at each experience band, reflecting current enterprise demand, but they build directly on the same networking fundamentals — which is why we consistently recommend CCNA as a starting point even for students whose ultimate goal is a cloud or security role.",
      "Employers weigh practical troubleshooting ability, communication skills and project exposure alongside certifications when making hiring and promotion decisions. This is one reason our training methodology emphasizes enterprise-realistic labs over exam-focused theory throughout every course in our catalog.",
    ],
  },
  {
    heading: "Why Practical Labs Matter More Than Theory-Only Training",
    paragraphs: [
      "A significant number of networking and cloud training programs in Hyderabad focus primarily on helping students pass a certification exam. Certification matters, but employers routinely report that candidates who can recite configuration syntax but cannot troubleshoot a live connectivity issue struggle in technical interviews and in their first months on the job.",
      "Every course at NG Cloud Networks is built around enterprise-realistic practical labs — configuring real Cisco routers and switches, deploying Palo Alto and Fortigate firewalls, building AWS and Azure infrastructure, and working through structured troubleshooting scenarios rather than scripted configuration walkthroughs. This approach takes longer than pure exam preparation, but it produces graduates who perform confidently in technical interviews, which is ultimately what determines whether training leads to a job offer.",
    ],
  },
  {
    heading: "Placement Support and Industry Connections",
    paragraphs: [
      "Training and placement are treated as one connected process at NG Cloud Networks rather than two separate stages. Every course includes resume building, mock technical interviews, HR interview preparation and job referral support as part of the course fee, not as a separate paid add-on.",
      "Students from our programs have been placed at companies including Cisco, HCL Technologies, Cloud4C, ValueLabs, Teleperformance and Bell Techlogix, across network engineering, network security and network administration roles. Placement assistance is exactly that — assistance, not a guarantee — and outcomes depend on a student's own skill development, interview performance and the hiring market at the time of completion. We believe this honest framing matters more than an unverifiable guarantee.",
    ],
  },
  {
    heading: "Learning From an Industry Professional, Not Just a Certified Trainer",
    paragraphs: [
      "Training quality depends heavily on who is teaching, not just what curriculum is being followed. Our courses are led by a trainer with 14+ years of enterprise networking, infrastructure and cloud networking experience, which means class discussions consistently include real production scenarios and troubleshooting patterns, not just textbook explanations.",
      "Batch sizes are capped at a maximum of 10 students specifically so this experience translates into direct, personalized guidance rather than lecture-style delivery to a large group.",
    ],
  },
  {
    heading: "Training Formats: Live Online, Classroom and Hybrid",
    paragraphs: [
      "Every course in our catalog is available as live instructor-led online training, in-person classroom training at our Ameenpur, Hyderabad location, or a hybrid combination of both. Weekday morning, afternoon and evening batches accommodate students, job seekers and working professionals, and dedicated weekend batches support professionals who cannot attend on weekdays.",
      "International students can also join live online batches with timing adjusted for their time zone, subject to trainer and batch availability — a format increasingly common among students planning to work with global teams after certification.",
    ],
  },
  {
    heading: "Common Mistakes to Avoid When Choosing a Training Institute",
    paragraphs: [
      "Three mistakes come up repeatedly among students who later switch institutes or need to redo their training elsewhere. First, choosing based on the lowest price alone, without checking whether practical labs and placement support are genuinely included rather than advertised loosely. Second, enrolling in an advanced course like CCNP or a specialist firewall course without solid CCNA-level fundamentals, which typically results in struggling through the material rather than building real competence. Third, assuming a certification guarantees a job, rather than treating certification as one part of a broader skill-and-interview-readiness process.",
      "We'd rather a prospective student ask hard questions before enrolling — about batch size, real lab access, trainer experience and what placement support actually includes — than discover gaps after paying a course fee.",
    ],
  },
  {
    heading: "Frequently Compared: How Our Courses Relate to Each Other",
    paragraphs: [
      "A number of courses in our catalog are frequently compared against each other by prospective students. CCNP Enterprise and CCNP Core differ in scope: Core covers the single ENCOR exam required across all CCNP tracks, while Enterprise adds a concentration exam covering advanced routing, wireless and SD-WAN. Palo Alto and Fortigate differ primarily by vendor ecosystem rather than difficulty, and many security professionals eventually train on both, since enterprises frequently run mixed-vendor firewall environments. AWS and Azure differ by cloud provider rather than difficulty as well, and the choice often comes down to which cloud platform a student's target employers use most.",
      "Use the comparison table above to check duration and fees side by side, and the FAQ section below for direct answers to the most common course-selection questions we receive.",
    ],
  },
];

export default function CoursesSeoContent() {
  return (
    <section
      aria-labelledby="courses-seo-content-heading"
      className="py-16 md:py-20"
    >
      <div className="mx-auto max-w-[900px] px-5">
        <h2 id="courses-seo-content-heading" className="sr-only">
          Complete Guide to Networking, Cloud and Security Training in Hyderabad
        </h2>

        <div className="space-y-14">

          {/* Intro */}
          <div>
            <h3 className="text-[26px] font-black tracking-[-0.03em] text-white md:text-[32px]">
              {sections[0].heading}
            </h3>
            {sections[0].paragraphs?.map((p, i) => (
              <p key={i} className="mt-4 text-[15.5px] leading-[1.95] text-white/68">
                {p}
              </p>
            ))}
          </div>

          {/* Networking track — with real inline internal links */}
          <div>
            <h3 className="text-[26px] font-black tracking-[-0.03em] text-white md:text-[32px]">
              Networking Foundations: CCNA, CCNP Enterprise and CCNP Core
            </h3>
            <p className="mt-4 text-[15.5px] leading-[1.95] text-white/68">
              Every networking career in Hyderabad&apos;s IT industry starts with
              the same foundation: understanding how routers, switches and
              enterprise networks actually work. Our{" "}
              <Link href="/courses/ccna-training-hyderabad" className="font-semibold text-[#D4AF37] underline underline-offset-2">
                CCNA Training in Hyderabad
              </Link>{" "}
              covers routing, switching, subnetting, VLANs and OSPF over
              two months and requires no prior certification, making it the
              standard entry point for students and career switchers alike.
            </p>
            <p className="mt-4 text-[15.5px] leading-[1.95] text-white/68">
              Once CCNA fundamentals are solid, professionals typically move
              into{" "}
              <Link href="/courses/ccnp-enterprise-training-hyderabad" className="font-semibold text-[#D4AF37] underline underline-offset-2">
                CCNP Enterprise Training
              </Link>{" "}
              or{" "}
              <Link href="/courses/ccnp-core-training-hyderabad" className="font-semibold text-[#D4AF37] underline underline-offset-2">
                CCNP Core (ENCOR) Training
              </Link>
              , both covering advanced routing, BGP, OSPF and enterprise
              infrastructure over three months. These are professional-level
              certifications aimed at CCNA holders ready for Senior Network
              Engineer or Infrastructure Specialist roles, and they form the
              foundation for further specialization into WAN or security
              technologies.
            </p>
          </div>

          {/* Cloud track */}
          <div>
            <h3 className="text-[26px] font-black tracking-[-0.03em] text-white md:text-[32px]">
              Cloud Computing: AWS and Microsoft Azure
            </h3>
            <p className="mt-4 text-[15.5px] leading-[1.95] text-white/68">
              As organizations continue shifting infrastructure to the cloud,
              demand for certified cloud engineers has grown alongside
              traditional networking roles. Our{" "}
              <Link href="/courses/aws-training-hyderabad" className="font-semibold text-[#D4AF37] underline underline-offset-2">
                AWS Cloud Training
              </Link>{" "}
              and{" "}
              <Link href="/courses/azure-cloud-training-hyderabad" className="font-semibold text-[#D4AF37] underline underline-offset-2">
                Azure Cloud Training
              </Link>{" "}
              programs are built for students with CCNA-level networking
              knowledge who want to specialize in cloud infrastructure,
              covering compute, storage, networking and security services on
              each platform through hands-on labs rather than slide-based
              theory.
            </p>
            <p className="mt-4 text-[15.5px] leading-[1.95] text-white/68">
              Students choosing between AWS and Azure are often better served
              by looking at which platform their target employers use most,
              since the underlying cloud networking concepts transfer
              between providers once the fundamentals are understood.
            </p>
          </div>

          {/* Security track */}
          <div>
            <h3 className="text-[26px] font-black tracking-[-0.03em] text-white md:text-[32px]">
              Network Security: Palo Alto, Fortigate and Cloud Security
            </h3>
            <p className="mt-4 text-[15.5px] leading-[1.95] text-white/68">
              Network security specialization commands some of the strongest
              salaries in our catalog, reflecting how central firewall and
              threat-prevention skills have become to enterprise IT teams.
              Our{" "}
              <Link href="/courses/palo-alto-firewall-training-hyderabad" className="font-semibold text-[#D4AF37] underline underline-offset-2">
                Palo Alto Firewall Training
              </Link>{" "}
              and{" "}
              <Link href="/courses/fortigate-firewall-training-hyderabad" className="font-semibold text-[#D4AF37] underline underline-offset-2">
                Fortigate Firewall Training
              </Link>{" "}
              programs cover next-generation firewall configuration, threat
              prevention and enterprise security policy design on each
              platform respectively.
            </p>
            <p className="mt-4 text-[15.5px] leading-[1.95] text-white/68">
              For professionals securing cloud workloads specifically rather
              than on-premises infrastructure, our{" "}
              <Link href="/courses/cloud-security-training-hyderabad" className="font-semibold text-[#D4AF37] underline underline-offset-2">
                Cloud Security Training
              </Link>{" "}
              covers securing AWS and Azure environments, and pairs naturally
              with either cloud course above for students building toward a
              Cloud Security Engineer role.
            </p>
          </div>

          {/* Infrastructure track */}
          <div>
            <h3 className="text-[26px] font-black tracking-[-0.03em] text-white md:text-[32px]">
              Infrastructure and WAN Technologies: F5 Load Balancer and Cisco SD-WAN
            </h3>
            <p className="mt-4 text-[15.5px] leading-[1.95] text-white/68">
              Two courses in our catalog target infrastructure specialists
              already working with enterprise networks. Our{" "}
              <Link href="/courses/f5-load-balancer-training-hyderabad" className="font-semibold text-[#D4AF37] underline underline-offset-2">
                F5 Load Balancer Training
              </Link>{" "}
              covers application delivery and traffic management, a
              specialization that sits at the intersection of networking and
              application performance engineering. Our{" "}
              <Link href="/courses/cisco-sdwan-training-hyderabad" className="font-semibold text-[#D4AF37] underline underline-offset-2">
                Cisco SD-WAN Training
              </Link>{" "}
              covers software-defined WAN architecture, the technology
              increasingly replacing traditional MPLS in enterprise branch
              connectivity, and is a natural next step after CCNP-level
              routing and switching expertise.
            </p>
          </div>

          {/* Remaining prose-only sections */}
          {sections.slice(5).map((section) => (
            <div key={section.heading}>
              <h3 className="text-[26px] font-black tracking-[-0.03em] text-white md:text-[32px]">
                {section.heading}
              </h3>
              {section.paragraphs?.map((p, i) => (
                <p key={i} className="mt-4 text-[15.5px] leading-[1.95] text-white/68">
                  {p}
                </p>
              ))}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}