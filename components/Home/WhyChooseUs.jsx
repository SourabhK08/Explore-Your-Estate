"use client";
import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Users, Sparkles } from "lucide-react";
import { BackgroundEffects } from "../BackgroundEffects";

export default function WhyChooseUs() {
  const highlights = [
    {
      title: "Imagination into Visuals",
      text: "We convert ideas into powerful 3D stories that buyers instantly connect with[cite: 42].",
      icon: <Sparkles className="text-[#10a1fd]" />,
    },
    {
      title: "Measurable Results",
      text: "Campaigns designed to drive visibility, engagement, and quality leads for real sales[cite: 44].",
      icon: <TrendingUp className="text-[#10a1fd]" />,
    },
    {
      title: "Long-term Partnerships",
      text: "We work as an extended part of your team, growing your brand step by step[cite: 48].",
      icon: <Users className="text-[#10a1fd]" />,
    },
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">

        <BackgroundEffects/>
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Side: Text Content */}
          <div className="lg:w-1/2">
            <h2 className="text-[#e6e6e6] text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Why Real Estate Giants <br /> 
              <span className="text-[#10a1fd]">Choose EYE</span> [cite: 41]
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
                  <div className="flex-shrink-0 mt-1">{item.icon}</div>
                  <div>
                    <h4 className="text-[#e6e6e6] text-xl font-semibold mb-2">{item.title}</h4>
                    <p className="text-[#e6e6e6]/60 leading-relaxed">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: Interactive Result Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:w-1/2 relative group"
          >
            <div className="absolute inset-0 bg-[#10a1fd]/20 blur-[100px] group-hover:bg-[#10a1fd]/30 transition-all rounded-full" />
            <div className="relative border border-[#e6e6e6]/10 bg-black/40 backdrop-blur-xl p-10 rounded-[40px]">
                <div className="text-[#e6e6e6] space-y-6">
                    <div className="flex justify-between items-center border-b border-[#e6e6e6]/10 pb-4">
                        <span className="text-sm font-mono opacity-50 uppercase">Performance Metrics</span>
                        <CheckCircle2 className="text-[#10a1fd]" size={20} />
                    </div>
                    <div className="space-y-2">
                        <p className="text-5xl font-bold">20x</p>
                        <p className="text-[#10a1fd] font-bold tracking-widest uppercase text-sm">Lead Generation Boost</p>
                    </div>
                    <p className="text-[#e6e6e6]/40 text-sm italic">
                        "EYE is not just a service provider—we are your creative growth partner[cite: 48]."
                    </p>
                    <button className="w-full py-4 bg-[#e6e6e6] text-black font-bold rounded-2xl hover:bg-[#10a1fd] hover:text-[#e6e6e6] transition-colors">
                        Read Case Stories
                    </button>
                </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}