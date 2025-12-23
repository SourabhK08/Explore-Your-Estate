"use client";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  TrendingUp,
  Users,
  Sparkles,
  ArrowRight,
  ArrowDown,
} from "lucide-react";
import { BackgroundEffects } from "../BackgroundEffects";

export default function WhyChooseUs() {
  const highlights = [
    {
      title: "Imagination into Visuals",
      text: "We convert ideas into powerful 3D stories that buyers instantly connect with.",
      icon: <Sparkles className="text-[#10a1fd]" />,
    },
    {
      title: "Measurable Results",
      text: "Campaigns designed to drive visibility, engagement, and quality leads for real sales.",
      icon: <TrendingUp className="text-[#10a1fd]" />,
    },
    {
      title: "Long-term Partnerships",
      text: "We work as an extended part of your team, growing your brand step by step.",
      icon: <Users className="text-[#10a1fd]" />,
    },
  ];

  return (
    <section className="py-24  relative overflow-hidden">
      <BackgroundEffects />
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Side: Text Content */}
          <div className="lg:w-1/2">
            <h2 className="text-[#e6e6e6] text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Why Real Estate Giants <br />
              <span className="text-[#10a1fd]">Choose EYE </span>
            </h2>

            <div className="space-y-8">
              {highlights.map((item, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  key={idx}
                  className="flex gap-6"
                >
                  <div className="shrink-0 mt-1">{item.icon}</div>
                  <div>
                    <h4 className="text-[#e6e6e6] text-xl font-semibold mb-2">
                      {item.title}
                    </h4>
                    <p className="text-[#e6e6e6]/60 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: Interactive Result Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative group"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-[#10a1fd]/20 blur-[120px] opacity-60 group-hover:opacity-90 transition-all rounded-full" />

            <div className="relative border border-white/10 bg-black/50 backdrop-blur-xl p-10 rounded-[36px] space-y-8">
              {/* Header */}
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <span className="text-xs font-mono tracking-widest uppercase text-white/50">
                  Performance Metrics
                </span>
                <CheckCircle2 className="text-[#10a1fd]" size={18} />
              </div>

              {/* Main Metric */}
              <div className="space-y-2">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-6xl font-extrabold tracking-tight"
                >
                  <span className="text-white">20x</span>
                </motion.p>

                <p className="text-[#10a1fd] font-semibold tracking-[0.3em] uppercase text-xs">
                  Lead Generation Boost
                </p>
              </div>

              {/* Supporting Metrics */}
              <div className="grid grid-cols-2 gap-6 pt-2">
                <div>
                  <p className="text-2xl font-bold text-white flex items-center gap-2">
                    <ArrowDown /> 35%
                  </p>
                  <p className="text-xs uppercase tracking-widest text-white/40">
                    Cost per Lead
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">3.2x</p>
                  <p className="text-xs uppercase tracking-widest text-white/40">
                    Engagement Rate
                  </p>
                </div>
              </div>

              {/* Quote */}
              <p className="text-white/40 text-sm italic leading-relaxed">
                “EYE is not just a service provider — we operate as a strategic
                growth partner for ambitious real estate brands.”
              </p>

              {/* CTA */}
              <button className="w-full py-4 rounded-2xl font-semibold bg-white text-black hover:bg-[#10a1fd] hover:text-white transition-all duration-300 tracking-wide flex items-center justify-center gap-2 mt-4 cursor-pointer">
                Read Case Stories <ArrowRight />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
