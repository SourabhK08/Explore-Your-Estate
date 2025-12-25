"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutHero() {
  const pillars = [
    "Bring vision to life with cinematic storytelling",
    "Build brand identity from the ground up",
    "Drive leads through smart digital campaigns"
  ];

  return (
     <section className="relative bg-gray-900 py-24 px-6 border-b border-white/5">
        <div className="container mx-auto grid lg:grid-cols-2 gap-20 items-center">
          
          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#10a1fd] font-mono tracking-[0.4em] uppercase text-sm">
              About EYE
            </span>

            <h1 className="text-3xl md:text-5xl font-bold text-[#e6e6e6] mt-6 leading-tight">
              We Turn Real Estate <br />
              <span className="text-[#10a1fd]">Vision Into Authority.</span>
            </h1>

            <p className="text-[#e6e6e6]/60 text-xl mt-8 leading-relaxed max-w-xl">
              At Explore Your Estate (EYE), we help real estate companies transform
              their projects into powerful visual stories. From high-impact 3D
              visuals to targeted digital campaigns, we ensure your brand doesn’t
              just exist it thrives.
            </p>

            <ul className="mt-10 space-y-4 text-[#e6e6e6]/80">
              <li>• Bring your vision to life with cinematic storytelling</li>
              <li>• Build your brand identity from the ground up</li>
              <li>• Drive leads and sales through smart digital campaigns</li>
            </ul>
          </motion.div>

          {/* IMAGE */}
          <motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6 }}
  className="
    w-full 
    max-w-xl 
    mx-auto 
    rounded-3xl 
    overflow-hidden 
    border border-white/10
  "
>
  <Image
    src="/about/1.jpeg"
    alt="High-end real estate project visualized through cinematic 3D storytelling"
    width={800}
    height={500}
    className="
      w-full 
      h-auto 
      object-cover
    "
    sizes="(max-width: 768px) 100vw, 600px"
  />
</motion.div>

        </div>
      </section>
  );
}