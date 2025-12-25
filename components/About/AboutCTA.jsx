"use client";
import { motion } from "framer-motion";
import { ArrowRight, MoveUpRight } from "lucide-react";

import { BackgroundEffects } from "../BackgroundEffects";

export default function AboutCTA() {
  return (
    <section className="relative  py-24 px-6 overflow-hidden border-t border-white/5">
      <BackgroundEffects/>
      

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
          className="text-5xl md:text-7xl font-bold text-[#e6e6e6] mb-8 leading-tight tracking-tighter"
        >
           If You’re Building for the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10a1fd] to-blue-400">
            Long Term, We Should Talk.
          </span>
        </motion.h2>

        {/* Strategic Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-[#e6e6e6]/60 text-xl md:text-2xl max-w-2xl mx-auto mb-12 leading-relaxed font-light"
        >
          EYE partners with developers who care about market authority, not short-term noise. 
        If you’re planning a serious project and want to position it to sell faster and with confidence — 
        a conversation is the right place to start.
        </motion.p>

        {/* Primary CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-10">
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(16, 161, 253, 0.4)" }}
          whileTap={{ scale: 0.98 }}
          className="px-10 py-5 bg-[#10a1fd] text-black font-black rounded-full text-lg shadow-2xl transition-all"
        >
          Request a Private Consultation
        </motion.button>
        
        <motion.button
          whileHover={{ x: 5, color: "#10a1fd" }}
          className="px-10 py-5 text-[#e6e6e6] font-bold text-lg flex items-center gap-2 transition-all"
        >
          View Our Approach <MoveUpRight size={20} />
        </motion.button>
      </div>


          {/* Secondary Micro-Assurance */}
          <p className="text-[#e6e6e6]/30 text-xs font-mono tracking-widest uppercase">
             We work with a limited number of developers each year to ensure execution integrity.
          </p>
        </motion.div>
      </div>

      {/* Subtle UI Accents */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-linear-to-r from-transparent via-[#10a1fd]/20 to-transparent" />
    </section>
  );
}
