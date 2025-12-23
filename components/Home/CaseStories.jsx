"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, CheckCircle2 } from "lucide-react";
import { BackgroundEffects } from "../BackgroundEffects";

const cases = [
  {
    title: "The Zenith Residences",
    category: "Luxury Residential · Urban Core",
    challenge:
      "Low differentiation in a crowded premium housing market with flat sales.",
    approach:
      "Strategic brand positioning and cinematic 3D storytelling to evoke lifestyle aspiration.",
    impact: ["3.1x Engagement", "42% CPL Reduction", "Faster Site Visits"],
    tag: "Performance-Driven",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Eco-Township Initiative",
    category: "Smart City · Large Scale",
    challenge:
      "Struggling to communicate the scale and sustainability of a 200-acre project.",
    approach:
      "Interactive 3D walkthroughs and a data-optimized marketing engine.",
    impact: [
      "Global Reach",
      "Intelligence-Led Targeting",
      "85% Pre-Launch Interest",
    ],
    tag: "Data-Optimized",
    image:
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80&w=800",
  },
];

export default function CaseStories() {
  return (
    <section className=" py-32 px-6">
      <BackgroundEffects />
      <div className="container mx-auto">
        {/* SECTION INTRO */}
        <div className="max-w-3xl mb-24">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#10a1fd] font-mono tracking-widest uppercase text-sm mb-4 block"
          >
            Proof of Execution [cite: 42, 43]
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-bold text-[#e6e6e6] mb-8 leading-tight">
            When Strategy <br /> Meets <span className="italic">Reality.</span>{" "}
            [cite: 57, 59]
          </h2>
          <p className="text-[#e6e6e6]/60 text-xl leading-relaxed">
            A glimpse into how EYE transforms real estate projects into
            high-impact brands and performance-driven campaigns. [cite: 4, 31,
            56]
          </p>
        </div>

        {/* CASE CARDS */}
        <div className="space-y-12">
          {cases.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative flex flex-col lg:flex-row bg-[#e6e6e6]/[0.02] border border-white/5 rounded-[3rem] overflow-hidden hover:border-[#10a1fd]/30 transition-all duration-500"
            >
              {/* LEFT SIDE: Visual Content */}
              <div className="lg:w-2/5 relative overflow-hidden h-[300px] lg:h-auto">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all z-10" />
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.5 }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-8 left-8 z-20 bg-black/60 backdrop-blur-md text-[#10a1fd] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-[#10a1fd]/20">
                  {project.tag}
                </span>
              </div>

              {/* RIGHT SIDE: Story Content */}
              <div className="lg:w-3/5 p-8 lg:p-16 flex flex-col justify-center">
                <div className="mb-8">
                  <p className="text-[#10a1fd] font-mono text-xs uppercase tracking-[0.2em] mb-2">
                    {project.category} [cite: 11]
                  </p>
                  <h3 className="text-3xl md:text-5xl font-bold text-[#e6e6e6] mb-6">
                    {project.title}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
                  <div className="space-y-4">
                    <h4 className="text-[#e6e6e6] font-bold text-sm uppercase tracking-widest opacity-40">
                      The Challenge [cite: 49]
                    </h4>
                    <p className="text-[#e6e6e6]/60 leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-[#e6e6e6] font-bold text-sm uppercase tracking-widest opacity-40">
                      The EYE Approach [cite: 13, 15]
                    </h4>
                    <p className="text-[#e6e6e6]/60 leading-relaxed">
                      {project.approach}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-8 border-t border-white/5">
                  {project.impact.map((metric, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 bg-black/40 px-4 py-2 rounded-xl border border-[#10a1fd]/10"
                    >
                      <TrendingUp size={14} className="text-[#10a1fd]" />
                      <span className="text-[#e6e6e6] text-sm font-bold">
                        {metric} [cite: 43, 44]
                      </span>
                    </div>
                  ))}
                  <button className="ml-auto flex items-center gap-2 text-[#10a1fd] font-bold text-sm hover:translate-x-2 transition-transform">
                    VIEW CASE STORY <ArrowUpRight size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-32 p-12 lg:p-24 rounded-[4rem] bg-gradient-to-br from-[#10a1fd]/10 via-transparent to-transparent border border-[#10a1fd]/20 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <CheckCircle2 size={120} className="text-[#10a1fd]" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-[#e6e6e6] mb-8">
            Ready to Build a Brand <br /> That Sells?{" "}
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button className="px-10 py-5 bg-[#10a1fd] text-black font-black rounded-full hover:shadow-[0_0_30px_#10a1fd] transition-all">
              BOOK A STRATEGY CALL [cite: 60, 62]
            </button>
            <button className="px-10 py-5 border border-white/20 text-[#e6e6e6] font-bold rounded-full hover:bg-white/5 transition-all">
              Explore All Projects
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
