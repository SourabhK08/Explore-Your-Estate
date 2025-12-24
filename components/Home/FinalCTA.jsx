"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="relative bg-gray-900 py-32 px-6 overflow-hidden border-t border-white/5">
      {/* Soft Radial Glow behind text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#10a1fd]/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="container mx-auto text-center relative z-10">
        {/* Small Authority Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex justify-center items-center gap-3 mb-8"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#10a1fd] animate-pulse" />
          <span className="text-[#10a1fd] font-mono tracking-[0.4em] uppercase text-xs font-bold">
            START THE CONVERSATION
          </span>
        </motion.div>

        {/* Strong Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-8xl font-bold text-[#e6e6e6] mb-8 leading-tight tracking-tighter"
        >
          Let’s Build a Real Estate Brand <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10a1fd] to-blue-400">
            That Actually Sells.
          </span>
        </motion.h2>

        {/* Strategic Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-[#e6e6e6]/60 text-xl md:text-2xl max-w-2xl mx-auto mb-12 leading-relaxed font-light"
        >
          Whether you’re launching a new project or redefining an existing one,
          EYE partners with you to build clarity, credibility, and conversions.
        </motion.p>

        {/* Primary CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center gap-6"
        >
          <Link href="/contact-us">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 40px rgba(16, 161, 253, 0.4)",
              }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-black px-12 py-5 rounded-full font-black text-lg flex items-center gap-3 group transition-all"
            >
              Book a Strategy Call
              <ArrowRight
                className="group-hover:translate-x-2 transition-transform text-black"
                size={20}
              />
            </motion.button>
          </Link>

          {/* Secondary Micro-Assurance */}
          <p className="text-[#e6e6e6]/30 text-xs font-mono tracking-widest uppercase">
            No sales pitch. Just clarity on how your project can win. 
          </p>
        </motion.div>
      </div>

      {/* Subtle UI Accents */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-linear-to-r from-transparent via-[#10a1fd]/20 to-transparent" />
    </section>
  );
}
