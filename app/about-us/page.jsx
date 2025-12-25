"use client";
import AboutHero from "@/components/About/AboutHero";
import CaseStories2 from "@/components/Home/CaseStories2";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Eye, MoveUpRight, Target } from "lucide-react";
import AboutCTA from "@/components/About/AboutCTA";

function page() {
  return (
    <>
      <AboutHero />
      <CaseStories2 />

      <section className="relative py-28 px-6 border-t border-white/5 bg-gray-900">
        <div className="container mx-auto grid lg:grid-cols-2 gap-24 items-center">
          {/* LEFT — TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <span className="text-[#10a1fd] font-mono tracking-[0.4em] uppercase text-sm">
              Our Philosophy
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-[#e6e6e6] mt-6 leading-tight">
              Built for the
              <span className="text-[#10a1fd] ml-2">Long Game.</span>
            </h2>

            <p className="mt-8 text-[#e6e6e6]/70 text-lg leading-relaxed max-w-xl">
              EYE was founded with a clear intent — to help real estate projects
              earn authority, not just attention. In markets crowded with noise,
              we believe brands win when vision, intelligence, and storytelling
              move together.
            </p>

            <div className="mt-8 space-y-8 max-w-xl">
              {/* Vision */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Eye className="w-5 h-5 text-[#10a1fd]" />
                  <p className="text-sm font-mono uppercase tracking-widest text-[#10a1fd]">
                    Vision
                  </p>
                </div>
                <p className="text-[#e6e6e6]/80 leading-relaxed">
                  To become the most trusted creative partner for real estate
                  brands by turning concepts into powerful visual stories that
                  spark engagement, build credibility, and drive measurable
                  growth.
                </p>
              </div>

              {/* Mission */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Target className="w-5 h-5 text-[#10a1fd]" />
                  <p className="text-sm font-mono uppercase tracking-widest text-[#10a1fd]">
                    Mission
                  </p>
                </div>
                <p className="text-[#e6e6e6]/80 leading-relaxed">
                  To empower real estate brands with marketing that goes beyond
                  the ordinary. We create 3D visuals and digital strategies that
                  allow buyers to truly imagine their future spaces. Every
                  project we touch is designed to feel memorable, aspirational,
                  and impactful. By blending creativity with strategy, we bridge
                  the gap between vision and reality.
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — VISUAL */}
          {/* RIGHT — VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
          >
            {/* Replace with Image */}
            <Image
              src="/about/2.jpeg"
              alt="Our vision & mission"
              layout="responsive"
              width={1200}
              height={800}
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      <AboutCTA />
    </>
  );
}

export default page;
