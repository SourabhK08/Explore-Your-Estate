"use client";
import { motion } from 'framer-motion';
import { BackgroundEffects } from './BackgroundEffects';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505] pt-20">
      {/* Background AI Glow */}
      <BackgroundEffects/>
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-50 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase border border-[#0a4c84]/50 rounded-full text-[#0a4c84] bg-[#0a4c84]/5">
            Real Estate Marketing Redefined
          </span>
          
          <h1 className="text-5xl md:text-8xl font-bold text-[#e6e6e6] mb-6 leading-tight">
            Explore Your Estate <br /> 
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#0a4c84] to-blue-400">
               Differently
            </span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-10">
            We help real estate projects thrive through high-impact 3D visuals and targeted digital campaigns that ensure your brand doesn't just exist—it leads.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button className="px-8 py-4 bg-[#e6e6e6] text-black font-bold rounded-xl hover:scale-105 transition-transform">
              Request a Free Consultation
            </button>
            <button className="px-8 py-4 border border-white/10 text-[#e6e6e6] font-bold rounded-xl hover:bg-white/5 transition-all">
              View Showreel
            </button>
          </div>
        </motion.div>

        {/* Stats / Clients Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/5 pt-10"
        >
          {[
            { label: "Lead Gen", val: "20x" },
            { label: "Visuals", val: "CGI" },
            { label: "Target", val: "Global" },
            { label: "Tech", val: "AI Driven" }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <h3 className="text-[#0a4c84] text-2xl font-bold">{stat.val}</h3>
              <p className="text-gray-500 text-sm uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;