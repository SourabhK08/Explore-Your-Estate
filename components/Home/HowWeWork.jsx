"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { Search, PenTool, Box, BarChart, Cpu } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Discovery & Market Intelligence",
    desc: "We decode location intelligence, buyer intent, and competitor gaps to define your unfair advantage.",
    detail: "AI-backed audience mapping and location intelligence.",
    label: "INTELLIGENCE LAYER",
    icon: <Search className="text-[#10a1fd]" />
  },
  {
    id: "02",
    title: "Brand Positioning & Story",
    desc: "Naming, tone, and visual language that gives your project a distinct voice in the market.",
    detail: "Shaping perception to turn projects into legendary brands.",
    label: "PERCEPTION ENGINEERING",
    icon: <PenTool className="text-[#10a1fd]" />
  },
  {
    id: "03",
    title: "3D Visual Storytelling",
    desc: "Immersive walkthroughs and cinematic renders that allow buyers to imagine their future spaces.",
    detail: "Bridging the gap between vision and reality.",
    label: "IMMERSION ENGINE",
    icon: <Box className="text-[#10a1fd]" />
  },
  {
    id: "04",
    title: "Performance Marketing Engine",
    desc: "Data-driven ads and funnels designed to deliver quality leads that translate into real sales.",
    detail: "Real-time performance signals and CRM-ready lead delivery.",
    label: "PERFORMANCE ALGORITHMS",
    icon: <BarChart className="text-[#10a1fd]" />
  },
  {
    id: "05",
    title: "Optimization & Scale",
    desc: "We work as an extended part of your team, scaling what converts to maximize visibility.",
    detail: "Growing your brand step-by-step with measurable results.",
    label: "STRATEGY OPTIMIZATION",
    icon: <Cpu className="text-[#10a1fd]" />
  }
];

export default function HowWeWork() {
  const containerRef = useRef(null);
  
  // Logic for the Scroll Journey Line - Target the whole container height
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="relative bg-gray-900 py-24 overflow-visible">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-12 items-start">
        
        {/* LEFT SIDE: STICKY NARRATIVE - Fixed relative to the parent container */}
        <div className="w-full lg:w-1/2 lg:sticky lg:top-32 z-20">
          <motion.span 
            className="text-[#10a1fd] font-mono tracking-widest uppercase text-sm mb-4 block"
          >
            The EYE Method 
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-bold text-[#e6e6e6] mb-8 leading-tight">
            How We Turn <br /> 
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#10a1fd] to-blue-400">
              Vision Into Sales 
            </span>
          </h2>
          <p className="text-[#e6e6e6]/60 text-xl max-w-md leading-relaxed">
            A strategic blueprint designed to eliminate friction and build market authority for your real estate brand.
          </p>
          
          <div className="mt-12 hidden lg:flex items-center gap-4 text-[#10a1fd]">
            <div className="w-1 h-12 bg-linear-to-b from-[#10a1fd] to-transparent" />
            <span className="text-sm font-bold uppercase tracking-tighter italic opacity-50">
              Intelligence-Led Process 
            </span>
          </div>
        </div>

        {/* RIGHT SIDE: SCROLLING CONTENT */}
        <div className="w-full lg:w-1/2 relative space-y-24 lg:space-y-48">
          
          {/* VERTICAL JOURNEY LINE - Placed behind cards */}
          <div className="absolute left-[39px] top-0 bottom-0 w-[1px] bg-white/10 hidden lg:block" />
          <motion.div 
            style={{ scaleY, originY: 0 }}
            className="absolute left-[39px] top-0 bottom-0 w-[2px] bg-[#10a1fd] shadow-[0_0_15px_#10a1fd] hidden lg:block z-0"
          />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0.1, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ margin: "-10% 0px -25% 0px" }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              {/* Depth Illusion Step Number [cite: 16] */}
              <span className="absolute -left-6 -top-12 text-9xl font-black text-[#10a1fd]/5 select-none pointer-events-none z-0 transition-all duration-700 group-hover:text-[#10a1fd]/10 group-hover:-translate-y-2">
                {step.id}
              </span>

              <div className="relative z-10 flex items-start gap-8 bg-white/[0.01] hover:bg-white/[0.03] p-8 md:p-10 rounded-[3rem] border border-white/5 hover:border-[#10a1fd]/20 transition-all duration-500 backdrop-blur-sm">
                
                {/* Icon Container [cite: 17] */}
                <div className="shrink-0 w-16 h-16 rounded-2xl bg-black border border-[#10a1fd]/30 flex items-center justify-center group-hover:border-[#10a1fd] group-hover:shadow-[0_0_30px_rgba(16,161,253,0.3)] transition-all duration-500">
                  {step.icon}
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
                    <span className="text-[#10a1fd] font-mono text-xs font-bold tracking-[0.25em]">STEP {step.id}</span>
                    <span className="w-fit text-[9px] text-[#10a1fd] border border-[#10a1fd]/40 px-3 py-1 rounded-full uppercase tracking-[0.2em] font-bold bg-[#10a1fd]/5 backdrop-blur-md">
                      {step.label}
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-[#e6e6e6] mb-6 group-hover:text-[#10a1fd] transition-colors leading-tight">
                    {step.title} 
                  </h3>
                  
                  <p className="text-[#e6e6e6]/50 mb-10 leading-relaxed text-lg">
                    {step.desc} 
                  </p>
                  
                  <motion.div 
                    className="p-6 bg-black/40 rounded-2xl border border-white/5 group-hover:border-[#10a1fd]/10 transition-colors"
                  >
                    <p className="text-sm text-[#e6e6e6]/40 leading-relaxed">
                      <span className="text-[#10a1fd] font-bold uppercase tracking-widest text-[10px] block mb-2">Strategic Insight </span> 
                      {step.detail} 
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}