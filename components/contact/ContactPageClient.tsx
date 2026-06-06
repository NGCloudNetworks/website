"use client";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { useState } from "react";
import {
    Mail,
    Phone,
    MapPin,
    Clock3,
    ArrowRight,
    BadgeCheck,
    MessageSquare,
    GraduationCap,
} from "lucide-react";
import Link from "next/link";
export default function ContactPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [course, setCourse] = useState("");
    const [message, setMessage] = useState("");

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        try {
            setLoading(true);
            setSuccess(false);
            setError(false);

            const response = await fetch("/api/contact", {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify({
                    name,
                    email,
                    phone,
                    course,
                    message,
                    type: "contact",
                }),
            });

            const data = await response.json();

            if (data.success) {
                setSuccess(true);

                setName("");
                setEmail("");
                setPhone("");
                setCourse("");
                setMessage("");
            } else {
                setError(true);
            }

        } catch (err) {
            console.log(err);
            setError(true);

        } finally {
            setLoading(false);
        }
    };
    return (
        <main className="overflow-hidden bg-[#050505] text-white">

            {/* NAVBAR */}
            <Navbar />
            {/* SEO CONTENT */}
            <section className="sr-only">

                <h1>
                    NG Cloud Networks - Best Networking, Cloud & Cyber Security Training Institute in Hyderabad
                </h1>

                <h2>
                    CCNA, CCNP, AWS, Azure, Palo Alto, Fortigate & Cloud Security Training
                </h2>

                <p>
                    NG Cloud Networks provides practical enterprise networking,
                    cloud computing and cyber security training in Hyderabad
                    with real-time labs, placement support,
                    certification mentoring and interview preparation.
                </p>

                <p>
                    Students learn practical technologies including
                    Cisco CCNA, CCNP Enterprise, AWS Cloud,
                    Azure Cloud, Palo Alto Firewall,
                    Fortigate Firewall, F5 Load Balancer,
                    SD-WAN and Cloud Security.
                </p>

            </section>

            {/* HERO */}
            <section className="relative overflow-hidden pt-40 pb-24 lg:pt-44 lg:pb-32">

                {/* BACKGROUND */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">

                    <div className="absolute left-[-140px] top-[-120px] h-[420px] w-[420px] rounded-full bg-[#D4AF37]/10 blur-[130px]" />

                    <div className="absolute right-[-140px] bottom-[-120px] h-[420px] w-[420px] rounded-full bg-[#D4AF37]/10 blur-[130px]" />

                    <div
                        className="absolute inset-0 opacity-[0.03]"
                        style={{
                            backgroundImage:
                                "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
                            backgroundSize: "52px 52px",
                        }}
                    />

                </div>

                <div className="relative z-10 mx-auto max-w-[1400px] px-5">

                    <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.95fr]">

                        {/* LEFT */}
                        <div>

                            {/* BADGE */}
                            <div
                                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[#D4AF37]/20
                  bg-[#D4AF37]/5
                  px-5
                  py-2.5
                  backdrop-blur-xl
                "
                            >

                                <div className="h-2 w-2 rounded-full bg-[#D4AF37]" />

                                <span className="text-sm tracking-wide text-[#f5e6b3]">
                                    Contact NG Cloud Networks
                                </span>

                            </div>

                            {/* TITLE */}
                            <h1
                                className="
                  mt-8
                  text-[46px]
                  font-black
                  leading-[0.95]
                  tracking-[-0.05em]
                  text-white
                  md:text-[72px]
                  xl:text-[92px]
                "
                            >
                                Let’s Build Your

                                <span className="mt-3 block text-[#D4AF37]">
                                    IT Career Together
                                </span>

                            </h1>

                            {/* DESCRIPTION */}
                            <p
                                className="
                  mt-8
                  max-w-[780px]
                  text-[18px]
                  leading-[1.9]
                  text-white/60
                "
                            >
                                Contact NG Cloud Networks for CCNA, CCNP, AWS, Azure,
                                SD-WAN, Palo Alto, Fortigate and F5 Load Balancer training
                                in Hyderabad. Get practical enterprise-level training,
                                certification guidance, real-time lab access and placement
                                support for networking, cloud and cybersecurity careers.
                            </p>
                            <Link href="/courses/ccna-training-hyderabad">
                                CCNA Training Hyderabad
                            </Link>

                            <Link href="/courses/aws-training-hyderabad">
                                AWS Cloud Training
                            </Link>

                            <Link href="/courses/palo-alto-firewall-training-hyderabad">
                                Palo Alto Firewall Training
                            </Link>

                            {/* INFO GRID */}
                            <div className="mt-12 grid gap-5 md:grid-cols-2">

                                {/* PHONE */}
                                <div
                                    className="
                    rounded-[28px]
                    border
                    border-white/10
                    bg-white/[0.03]
                    p-6
                    backdrop-blur-xl
                  "
                                >

                                    <div
                                        className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-[#D4AF37]/10
                    "
                                    >

                                        <Phone className="h-6 w-6 text-[#D4AF37]" />

                                    </div>

                                    <h3 className="mt-6 text-[22px] font-bold text-white">
                                        Call Us
                                    </h3>

                                    <p className="mt-3 text-[16px] text-white/60">
                                        +91 9989939191
                                    </p>

                                </div>

                                {/* EMAIL */}
                                <div
                                    className="
                    rounded-[28px]
                    border
                    border-white/10
                    bg-white/[0.03]
                    p-6
                    backdrop-blur-xl
                  "
                                >

                                    <div
                                        className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-[#D4AF37]/10
                    "
                                    >

                                        <Mail className="h-6 w-6 text-[#D4AF37]" />

                                    </div>

                                    <h3 className="mt-6 text-[22px] font-bold text-white">
                                        Email Us
                                    </h3>

                                    <p className="mt-3 text-[16px] text-white/60 break-all">
                                        info@ngcloudnetworks.com
                                    </p>

                                </div>

                                {/* LOCATION */}
                                <div
                                    className="
                    rounded-[28px]
                    border
                    border-white/10
                    bg-white/[0.03]
                    p-6
                    backdrop-blur-xl
                  "
                                >

                                    <div
                                        className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-[#D4AF37]/10
                    "
                                    >

                                        <MapPin className="h-6 w-6 text-[#D4AF37]" />

                                    </div>

                                    <h3 className="mt-6 text-[22px] font-bold text-white">
                                        Location
                                    </h3>

                                    <p className="mt-3 text-[16px] text-white/60">
                                        H.no:5-125/1/30, plot no,30,Royal Homes, Fusion School Back Side,Ameenpur,
                    Hyderabad, Telangana,
                    India
                                    </p>

                                </div>

                                {/* TIMINGS */}
                                <div
                                    className="
                    rounded-[28px]
                    border
                    border-white/10
                    bg-white/[0.03]
                    p-6
                    backdrop-blur-xl
                  "
                                >

                                    <div
                                        className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-[#D4AF37]/10
                    "
                                    >

                                        <Clock3 className="h-6 w-6 text-[#D4AF37]" />

                                    </div>

                                    <h3 className="mt-6 text-[22px] font-bold text-white">
                                        Working Hours
                                    </h3>

                                    <p className="mt-3 text-[16px] text-white/60">
                                        Monday - Saturday
                                    </p>

                                    <p className="mt-1 text-[16px] text-white/60">
                                        9:00 AM - 8:00 PM
                                    </p>

                                </div>

                            </div>

                        </div>

                        {/* FORM */}
                        <div
                            className="
                relative
                overflow-hidden
                rounded-[40px]
                border
                border-white/10
                bg-white/[0.03]
                p-8
                backdrop-blur-2xl
                lg:p-10
              "
                        >

                            <div
                                className="
                  absolute
                  inset-0
                  bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.12),transparent_55%)]
                "
                            />

                            <div className="relative z-10">

                                <div
                                    className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-[#D4AF37]/20
                    bg-[#D4AF37]/10
                    px-4
                    py-2
                  "
                                >

                                    <MessageSquare className="h-4 w-4 text-[#D4AF37]" />

                                    <span className="text-sm text-[#f5e6b3]">
                                        Get Free Career Guidance
                                    </span>

                                </div>

                                <h2
                                    className="
                    mt-8
                    text-[38px]
                    font-black
                    leading-[1]
                    tracking-[-0.04em]
                    text-white
                  "
                                >
                                    Send Us Your

                                    <span className="block text-[#D4AF37]">
                                        Enquiry
                                    </span>

                                </h2>

                                <p className="mt-5 text-[16px] leading-[1.8] text-white/60">
                                    Our team will contact you regarding courses,
                                    certifications, placements and training details.
                                </p>

                                {/* FORM */}
                                <form
                                    onSubmit={handleSubmit}
                                    className="mt-10 space-y-5"
                                >
                                    <div className="grid gap-5 md:grid-cols-2">

                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            required
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className="
        h-[58px]
        rounded-2xl
        border
        border-white/10
        bg-black/20
        px-5
        text-white
        outline-none
        transition-all
        duration-300
        placeholder:text-white/35
        focus:border-[#D4AF37]/40
      "
                                        />

                                        <input
                                            type="tel"
                                            placeholder="Phone Number"
                                            required
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            className="
        h-[58px]
        rounded-2xl
        border
        border-white/10
        bg-black/20
        px-5
        text-white
        outline-none
        transition-all
        duration-300
        placeholder:text-white/35
        focus:border-[#D4AF37]/40
      "
                                        />

                                    </div>

                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="
      h-[58px]
      w-full
      rounded-2xl
      border
      border-white/10
      bg-black/20
      px-5
      text-white
      outline-none
      transition-all
      duration-300
      placeholder:text-white/35
      focus:border-[#D4AF37]/40
    "
                                    />

                                    <select
                                        required
                                        value={course}
                                        onChange={(e) => setCourse(e.target.value)}
                                        className="
      h-[58px]
      w-full
      appearance-none
      rounded-2xl
      border
      border-white/10
      bg-[#0d0d0d]
      px-5
      text-[15px]
      font-medium
      text-white
      outline-none
      transition-all
      duration-300
      focus:border-[#D4AF37]/50
      focus:bg-[#111111]
      focus:shadow-[0_0_0_4px_rgba(212,175,55,0.08)]
    "
                                    >

                                        <option value="" disabled>
                                            Select Course
                                        </option>

                                        <option>CCNA Routing & Switching</option>
                                        <option>CCNP Enterprise</option>
                                        <option>AWS Cloud Training</option>
                                        <option>Azure Cloud Training</option>
                                        <option>Cisco SD-WAN</option>
                                        <option>Palo Alto Firewall</option>
                                        <option>Fortigate Firewall</option>
                                        <option>F5 Load Balancer</option>

                                    </select>

                                    <textarea
                                        rows={5}
                                        placeholder="Tell us about your career goals..."
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        className="
      w-full
      rounded-2xl
      border
      border-white/10
      bg-black/20
      px-5
      py-4
      text-white
      outline-none
      transition-all
      duration-300
      placeholder:text-white/35
      focus:border-[#D4AF37]/40
    "
                                    />

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="
      group
      flex
      h-[58px]
      w-full
      items-center
      justify-center
      gap-3
      rounded-2xl
      bg-[#D4AF37]
      text-[15px]
      font-semibold
      text-black
      transition-all
      duration-300
      hover:scale-[1.01]
      hover:shadow-[0_0_35px_rgba(212,175,55,0.35)]
      disabled:opacity-70
    "
                                    >

                                        {loading ? "Submitting..." : "Submit Enquiry"}

                                        {!loading && (
                                            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                        )}

                                    </button>

                                    {success && (
                                        <div
                                            className="
        rounded-2xl
        border
        border-green-500/20
        bg-green-500/10
        px-5
        py-4
        text-sm
        text-green-300
      "
                                        >
                                            Thank you for contacting NG Cloud Networks.
                                            Our team will reach out to you shortly.
                                        </div>
                                    )}

                                    {error && (
                                        <div
                                            className="
        rounded-2xl
        border
        border-red-500/20
        bg-red-500/10
        px-5
        py-4
        text-sm
        text-red-300
      "
                                        >
                                            Something went wrong. Please try again.
                                        </div>
                                    )}

                                </form>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* WHY CONTACT */}
            <section className="relative overflow-hidden py-24">

                <div className="mx-auto max-w-[1400px] px-5">

                    <div
                        className="
              relative
              overflow-hidden
              rounded-[40px]
              border
              border-[#D4AF37]/20
              bg-[#D4AF37]/5
              p-10
              backdrop-blur-2xl
              lg:p-16
            "
                    >

                        <div className="absolute right-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-[#D4AF37]/10 blur-[120px]" />

                        <div className="relative z-10">

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
                  py-2.5
                "
                            >

                                <BadgeCheck className="h-4 w-4 text-[#D4AF37]" />

                                <span className="text-sm text-[#f5e6b3]">
                                    Why Choose NG Cloud Networks
                                </span>

                            </div>

                            <h2
                                className="
                  mt-8
                  max-w-[900px]
                  text-[42px]
                  font-black
                  leading-[1]
                  tracking-[-0.04em]
                  text-white
                  md:text-[68px]
                "
                            >
                                Practical Training with

                                <span className="block text-[#D4AF37]">
                                    Career-Focused Mentorship
                                </span>

                            </h2>

                            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

                                {[
                                    "Enterprise Practical Labs",
                                    "Placement Assistance",
                                    "Certification Guidance",
                                    "Interview Preparation",
                                ].map((item, index) => (

                                    <div
                                        key={index}
                                        className="
                      rounded-[28px]
                      border
                      border-white/10
                      bg-black/20
                      p-6
                    "
                                    >

                                        <div
                                            className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        bg-[#D4AF37]/10
                      "
                                        >

                                            <GraduationCap className="h-6 w-6 text-[#D4AF37]" />

                                        </div>

                                        <h3 className="mt-6 text-[20px] font-bold text-white">
                                            {item}
                                        </h3>

                                    </div>
                                ))}

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* FOOTER */}
            <Footer />

        </main>
    );
}