"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Quote, ChevronRight, ChevronLeft } from "lucide-react";
import { BackgroundEffects } from "../BackgroundEffects";

const testimonials = [
  {
    quote:
      "EYE didn’t just market our project — they shaped how the market perceived it from day one.",
    author: "Siddharth Mehta",
    role: "Managing Director, Vista Group",
    project: "Luxury Residential",
    metrics: "Engagement ↑ | Brand Recall ↑ | Sales Velocity ↑",
  },
  {
    quote:
      "Their 3D storytelling allowed our buyers to connect emotionally with the space before the first brick was laid.",
    author: "Ananya Sharma",
    role: "Head of Marketing, Urban Trails",
    project: "Eco-Township",
    metrics: "Trust ↑ | Pre-launch Interest ↑ | Lead Quality ↑",
  },
];

export default function Testimonial() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  return (
    <section className="bg-gray-900 py-32 px-6 overflow-hidden">
      <div className="container mx-auto flex flex-col lg:flex-row gap-20 items-center">
        {/* LEFT SIDE: NARRATIVE CONTEXT (Sticky on Desktop) */}
        <div className="lg:w-1/2 lg:sticky lg:top-32">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#10a1fd] font-mono tracking-[0.4em] uppercase text-xs mb-6 block"
          >
            Trust & Partnership
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold text-[#e6e6e6] mb-8 leading-[1.1]">
            Trusted by Developers <br />
            Who Think Long-Term
          </h2>
          <p className="text-[#e6e6e6]/50 text-xl leading-relaxed max-w-md">
            We work as strategic partners, not vendors. Our success is measured
            by how confidently our clients grow.
          </p>

          <div className="mt-12 flex gap-4">
            <button
              onClick={prev}
              className="p-4 rounded-full border border-white/10 hover:border-[#10a1fd]/50 transition-colors text-white/40 hover:text-[#10a1fd]"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="p-4 rounded-full border border-white/10 hover:border-[#10a1fd]/50 transition-colors text-white/40 hover:text-[#10a1fd]"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* RIGHT SIDE: TESTIMONIAL PANEL */}
        <div className="lg:w-1/2 w-full relative h-[450px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full p-10 md:p-16 rounded-[3rem] bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 backdrop-blur-xl relative"
            >
              <Quote
                className="text-[#10a1fd] opacity-20 absolute top-10 right-10"
                size={40}
              />

              <p className="text-2xl md:text-3xl text-[#e6e6e6] leading-snug mb-12 font-light italic">
                “{testimonials[current].quote}”
              </p>

              <div className="border-t border-white/5 pt-8">
                <h4 className="text-xl font-bold text-[#e6e6e6] mb-1">
                  {testimonials[current].author}
                </h4>
                <p className="text-[#10a1fd] text-sm font-mono tracking-wider mb-4 uppercase">
                  {testimonials[current].role} — {testimonials[current].project}
                </p>

                <div className="inline-block bg-[#10a1fd]/5 border border-[#10a1fd]/20 px-4 py-1.5 rounded-full">
                  <span className="text-[10px] font-mono text-[#10a1fd] font-bold tracking-widest uppercase">
                    {testimonials[current].metrics}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* BACKGROUND DECORATION */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#10a1fd]/5 blur-[120px] rounded-full pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
