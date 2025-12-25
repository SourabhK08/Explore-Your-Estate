"use client";
import { motion } from "framer-motion";

export default function WhyExists() {
  return (
    <section className="bg-black py-32 px-6">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="relative"
        >
          <div className="absolute -left-10 top-0 w-1 h-24 bg-[#10a1fd]/50" />
          <h2 className="text-4xl md:text-5xl font-bold text-[#e6e6e6] mb-8">Why EYE Exists</h2>
          <div className="space-y-6 text-[#e6e6e6]/60 text-lg leading-relaxed">
            <p>The real estate market is crowded. Most projects look similar. Most campaigns focus only on visibility—not perception.</p>
            <p className="text-[#e6e6e6]">EYE was built to solve this gap.</p>
            <p>We exist to help real estate projects stand out with clarity, credibility, and long-term brand value—not short-term noise[cite: 5, 46].</p>
          </div>
        </motion.div>
        
        <div className="relative h-64 lg:h-96 flex items-center justify-center">
          <div className="absolute w-full h-full bg-[#10a1fd]/5 blur-[100px] rounded-full" />
          <motion.div 
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="border border-[#10a1fd]/20 p-12 rounded-full backdrop-blur-3xl"
          >
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#10a1fd] to-blue-900 flex items-center justify-center">
               <span className="text-white font-mono text-xs tracking-widest">PURPOSE</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}