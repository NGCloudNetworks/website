"use client";

import Link from "next/link";

import { MessageCircleMore } from "lucide-react";

export default function WhatsappFloat() {
  return (
    <Link
      href="https://wa.me/919989939191?text=Hello%20NG%20Cloud%20Networks,%20I%20want%20to%20know%20more%20about%20your%20courses."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        group
        fixed
        bottom-6
        right-6
        z-[120]
      "
    >

      {/* OUTER GLOW */}
      <div
        className="
          absolute
          inset-0
          scale-110
          rounded-full
          bg-[#25D366]/20
          blur-2xl
          transition-all
          duration-500
          group-hover:scale-125
          group-hover:bg-[#25D366]/30
        "
      />

      {/* BUTTON */}
      <div
        className="
          relative
          flex
          h-[68px]
          w-[68px]
          items-center
          justify-center
          rounded-full
          border
          border-white/[0.08]
          bg-[#050505]/88
          backdrop-blur-2xl
          shadow-[0_20px_60px_rgba(0,0,0,0.55)]
          transition-all
          duration-300
          group-hover:scale-[1.06]
          group-hover:border-[#25D366]/30
        "
      >

        {/* INNER LIGHT */}
        <div
          className="
            absolute
            inset-[6px]
            rounded-full
            border
            border-white/[0.03]
          "
        />

        <MessageCircleMore
          className="
            h-8
            w-8
            text-[#25D366]
            transition-transform
            duration-300
            group-hover:scale-110
          "
        />

      </div>

    </Link>
  );
}