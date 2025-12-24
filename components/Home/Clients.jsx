"use client";
import { motion } from "framer-motion";
import { BackgroundEffects } from "../BackgroundEffects";
import Image from "next/image";

const brands = [
  { name: "Luxury Villas", category: "Residential" },
  { name: "Urban Commercial", category: "Commercial" },
  { name: "Eco Township", category: "Large Scale" },
  { name: "Boutique Living", category: "Luxury" },
  { name: "Corporate Hub", category: "Commercial" },
  { name: "Modern Retail", category: "Retail" },
  { name: "Skyline Suites", category: "Residential" },
  { name: "Heritage Homes", category: "Boutique" },
];

export default function Clients() {
  return (
    <section className="relative py-28 px-6 border-t border-white/5">
      <BackgroundEffects />
      <div className="container mx-auto">
        {/* SECTION INTRO */}
        <div className=" mb-10 text-center ">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#10a1fd] font-mono tracking-[0.4em] uppercase text-xl mb-6 block"
          >
            Brand Authority
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#e6e6e6] mb-8 leading-[1.1]">
            Where Projects Become Brands
            <span className="text-[#10a1fd]">.</span>
          </h2>
          <p className="text-[#e6e6e6]/50 text-xl leading-relaxed">
            We partner with developers, builders, and visionaries to transform
            real estate projects into recognizable, trusted brands.
          </p>
        </div>

        {/* LOGO GRID - Clean & Symmetrical */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border border-white/10 overflow-hidden rounded-4xl">
          {brands.map((brand, i) => (
            <motion.div
              key={i}
              whileHover={{ backgroundColor: "rgba(16, 161, 253, 0.03)" }}
              className="bg-black p-12 flex flex-col items-center justify-center group transition-all duration-500"
            >
              {/* Placeholder for Logo */}
              <div className="object-contain scale-125 transition-transform duration-500 group-hover:scale-140">
                <Image
                  src={`/clients/${i + 1}.png`}
                  alt={brand.name}
                  className="object-contain"
                  width={100}
                  height={100}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* MICRO BRAND STORY & TRUST INDICATORS */}
        <div className="mt-10 pt-2 border-t border-white/5 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12">
          <p className="text-[#e6e6e6]/60 text-lg max-w-xl italic">
            "From boutique villas to large-scale townships — EYE has shaped
            brands across residential, commercial, and luxury real estate."
          </p>

          <div className="flex flex-wrap gap-8 md:gap-12">
            {[
              { label: "Reach", val: "Pan-India" },
              { label: "Presence", val: "Multi-Channel" },
              { label: "Focus", val: "Performance-Led" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-[10px] font-mono text-[#10a1fd] uppercase tracking-[0.2em] mb-1">
                  {stat.label}
                </span>
                <span className="text-[#e6e6e6] font-bold text-lg">
                  {stat.val}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* SUBTLE BREADTH REINFORCEMENT */}
        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-4 opacity-80 justify-center">
          {[
            "Branding",
            "Visual Storytelling",
            "Performance Marketing",
            "Lead Generation",
          ].map((service, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-1 h-1 bg-[#10a1fd] rounded-full" />
              <span className="text-xs font-mono text-[#e6e6e6] uppercase tracking-widest">
                {service}{" "}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
