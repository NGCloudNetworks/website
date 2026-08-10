import {
  Cloud,
  Cpu,
  Globe,
  Network,
  Router,
  Server,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const industryTools = [
  {
    name: "Cisco Enterprise Networking",
    category: "Networking",
    description:
      "Build practical routing, switching and enterprise infrastructure skills using Cisco technologies widely adopted across modern organizations.",
    icon: Router,
  },

  {
    name: "Amazon Web Services (AWS)",
    category: "Cloud Computing",
    description:
      "Learn cloud networking, compute, storage and infrastructure services through practical implementation using the AWS platform.",
    icon: Cloud,
  },

  {
    name: "Microsoft Azure",
    category: "Cloud Computing",
    description:
      "Develop enterprise cloud administration skills including virtual networking, identity management and cloud infrastructure deployment.",
    icon: Globe,
  },

  {
    name: "Palo Alto Networks",
    category: "Cyber Security",
    description:
      "Gain hands-on experience with next-generation firewall configuration, security policies and enterprise network protection.",
    icon: ShieldCheck,
  },

  {
    name: "Fortinet FortiGate",
    category: "Cyber Security",
    description:
      "Understand enterprise firewall deployment, VPN implementation, threat protection and secure network connectivity.",
    icon: ShieldCheck,
  },

  {
    name: "F5 BIG-IP",
    category: "Application Delivery",
    description:
      "Learn enterprise load balancing, traffic management, application delivery and high availability solutions.",
    icon: Workflow,
  },

  {
    name: "Cisco Packet Tracer & GNS3",
    category: "Enterprise Labs",
    description:
      "Practice networking concepts through realistic enterprise lab simulations before implementing them in production environments.",
    icon: Network,
  },

  {
    name: "Wireshark & Enterprise Tools",
    category: "Network Analysis",
    description:
      "Analyze packets, troubleshoot network issues and understand communication between enterprise systems using professional diagnostic tools.",
    icon: Cpu,
  },
];

export default function IndustryTools() {

  return (

    <section className="relative overflow-hidden py-12">

      {/* Background */}

      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute left-[-220px] top-[-120px] h-[460px] w-[460px] rounded-full bg-[#D4AF37]/10 blur-[180px]" />

        <div className="absolute right-[-220px] bottom-[-120px] h-[460px] w-[460px] rounded-full bg-[#D4AF37]/8 blur-[180px]" />

      </div>

      <div className="relative z-10 mx-auto max-w-[1450px] px-5">

        {/* Heading */}

        <div className="mx-auto max-w-[930px] text-center">

          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#D4AF37]/20
              bg-[#D4AF37]/10
              px-5
              py-2
              text-sm
              font-semibold
              tracking-wide
              text-[#D4AF37]
            "
          >

            <Server className="h-4 w-4" />

            Enterprise Technologies

          </div>

          <h2
            className="
              mt-8
              text-[42px]
              font-black
              leading-[0.95]
              tracking-[-0.05em]
              text-white
              md:text-[64px]
            "
          >
            Train with
            <span className="block text-[#D4AF37]">
              Enterprise Technologies & Professional Tools
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-8
              max-w-[900px]
              text-[18px]
              leading-[2]
              text-white/68
            "
          >
            Modern IT professionals work with interconnected technologies
            rather than isolated tools. Our practical training ecosystem
            provides hands-on exposure to enterprise networking, cloud
            computing, cyber security and application delivery platforms
            used by organizations around the world. Students develop
            practical implementation skills through instructor-led
            sessions, enterprise lab exercises and real-world
            troubleshooting scenarios.
          </p>

        </div>

        {/* Technology Grid */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {industryTools.map((tool) => (

            <ToolCard
              key={tool.name}
              name={tool.name}
              category={tool.category}
              description={tool.description}
              Icon={tool.icon}
            />

          ))}

        </div>

      </div>

    </section>

  );

}

type ToolCardProps = {
  name: string;
  category: string;
  description: string;
  Icon: React.ComponentType<{
    className?: string;
  }>;
};

function ToolCard({
  name,
  category,
  description,
  Icon,
}: ToolCardProps) {

  return (

    <div
      className="
        group
        rounded-[30px]
        border
        border-white/10
        bg-white/[0.03]
        p-8
        backdrop-blur-xl
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-[#D4AF37]/30
        hover:shadow-[0_25px_70px_rgba(212,175,55,.12)]
      "
    >

      <div
        className="
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-[#D4AF37]/10
          transition-all
          duration-300
          group-hover:bg-[#D4AF37]/15
        "
      >

        <Icon className="h-8 w-8 text-[#D4AF37]" />

      </div>

      <div
        className="
          mt-7
          inline-flex
          rounded-full
          border
          border-[#D4AF37]/20
          bg-[#D4AF37]/10
          px-3
          py-1
          text-xs
          font-semibold
          tracking-wide
          text-[#D4AF37]
        "
      >
        {category}
      </div>

      <h3
        className="
          mt-5
          text-[24px]
          font-bold
          leading-[1.3]
          text-white
        "
      >
        {name}
      </h3>

      <p
        className="
          mt-5
          text-[16px]
          leading-[1.9]
          text-white/68
        "
      >
        {description}
      </p>

    </div>

  );

}

function LearningPoint({
  text,
}: {
  text: string;
}) {

  return (

    <div
      className="
        flex
        items-center
        gap-4
        rounded-2xl
        border
        border-white/10
        bg-black/20
        p-5
      "
    >

      <div
        className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          bg-[#D4AF37]/10
        "
      >

        <Server className="h-5 w-5 text-[#D4AF37]" />

      </div>

      <p
        className="
          text-[16px]
          font-medium
          text-white/75
        "
      >
        {text}
      </p>

    </div>

  );

}