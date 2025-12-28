"use client";
import React from "react";
import { motion } from "framer-motion";
import { BackgroundEffects } from "@/components/BackgroundEffects";
import { Mail, MapPin, Phone } from "lucide-react";

const items = [
  {
    label: "Email",
    val: "exploreyourestate@gmail.com",
    cap: "Project briefs & collaborations",
    icon: Mail,
    href: "mailto:exploreyourestate@gmail.com",
  },
  {
    label: "Phone",
    val: "+91 98287 00234",
    cap: "Direct line for serious inquiries",
    icon: Phone,
    href: "tel:+919828700234",
  },
  {
    label: "Office",
    val: "Vaishali Nagar, Jaipur",
    cap: "Our strategic operations base",
    icon: MapPin,
    href: "https://www.google.com/maps/search/?api=1&query=Vaishali+Nagar+Jaipur",
  },
];

function Contactpage() {
  return (
    <>
      <section className="relative min-h-[90vh] flex items-center bg-black pt-20 overflow-hidden">
        <BackgroundEffects />
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#10a1fd] font-mono tracking-[0.4em] uppercase text-sm mb-6 block">
              Contact EYE
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-[#e6e6e6] mb-8 leading-tight tracking-tighter">
              Let’s Take Your Brand <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#10a1fd] to-blue-400">
                To the Next Level.
              </span>
            </h1>
            <p className="text-[#e6e6e6]/60 text-xl max-w-lg mb-10 font-light leading-relaxed">
              Whether you are explaining your vision or ready to scale, we help
              turn attention into authority and sales.
            </p>
            <button className="px-10 py-5 bg-[#10a1fd] text-black font-black rounded-full hover:shadow-[0_0_30px_#10a1fd] transition-all">
              Start a Conversation
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative hidden lg:block"
          >
            <div className="aspect-square rounded-[3rem] border border-white/10 bg-white/[0.02] backdrop-blur-3xl p-4 overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000"
                alt="Cinematic real estate brand transformation"
                className="w-full h-full object-cover rounded-[2.5rem] grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-60" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-black py-24 border-y border-white/5">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.a
                href={item.href}
                target={item.label === "Office" ? "_blank" : undefined}
                rel="noopener noreferrer"
                key={i}
                whileHover={{ y: -6 }}
                className="relative overflow-hidden p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md group transition-all"
              >
                <span className="pointer-events-none absolute inset-0">
                  <span className="absolute -left-[120%] top-0 h-[200%] w-1/4 rotate-12 bg-linear-to-r from-transparent via-[#10a1fd]/40 to-transparent transition-all duration-1500 group-hover:left-[120%]" />
                </span>

                <div className="flex items-center gap-4 mb-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#10a1fd]/30 bg-[#10a1fd]/10">
                    <Icon className="h-6 w-6 text-[#10a1fd]" />
                  </div>

                  <p className="text-[#10a1fd] font-mono text-[15px] tracking-widest uppercase">
                    {item.label}
                  </p>
                </div>

                <h4 className="text-[#e6e6e6] text-xl font-bold mb-2">
                  {item.val}
                </h4>

                <p className="text-[#e6e6e6]/30 text-xs font-light">
                  {item.cap}
                </p>
              </motion.a>
            );
          })}
        </div>
      </section>

      <section className="bg-black py-32">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div>
              <span className="text-[#10a1fd] font-mono tracking-widest text-xs uppercase mb-4 block">
                Start a Project
              </span>
              <h2 className="text-4xl md:text-6xl font-bold text-[#e6e6e6] mb-6">
                Describe Your Vision
              </h2>
              <p className="text-[#e6e6e6]/40 text-lg">
                The more context you share, the more precise our strategic
                approach becomes.
              </p>
            </div>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Full Name"
                className="bg-white/[0.03] border border-white/10 p-5 rounded-2xl text-[#e6e6e6] focus:border-[#10a1fd] outline-none"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="bg-white/[0.03] border border-white/10 p-5 rounded-2xl text-[#e6e6e6] focus:border-[#10a1fd] outline-none"
              />
              <div className="relative md:col-span-2">
                <select
                  className="w-full bg-white/[0.03] border border-white/10 p-5 pr-12
               rounded-2xl text-[#e6e6e6]/70 focus:border-[#10a1fd]
               outline-none appearance-none"
                >
                  <option className="bg-black">Select Project Type</option>
                  <option className="bg-black">Residential</option>
                  <option className="bg-black">Commercial</option>
                  <option className="bg-black">Luxury Township</option>
                </select>

                <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[#e6e6e6]/40">
                  ▼
                </span>
              </div>

              <textarea
                placeholder="Tell us about your project vision..."
                rows={5}
                className="bg-white/[0.03] border border-white/10 p-5 rounded-2xl text-[#e6e6e6] focus:border-[#10a1fd] outline-none md:col-span-2"
              />
              <button className="md:col-span-2 py-5 bg-white text-black font-black rounded-2xl hover:bg-[#10a1fd] hover:text-white transition-all uppercase tracking-widest text-sm">
                Submit Project Brief
              </button>
            </form>
          </div>

          <div className="relative hidden lg:block rounded-[3rem] overflow-hidden border border-white/5">
            <img
              src="https://images.unsplash.com/photo-1448630360428-65ff23efd35f?q=80&w=1000"
              alt="Real estate vision engineering"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-linear-to-br from-[#10a1fd]/20 to-transparent" />
          </div>
        </div>
      </section>

      <section className="bg-black py-40 border-t border-white/5 text-center relative overflow-hidden">
        <BackgroundEffects />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#10a1fd]/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-7xl font-bold text-[#e6e6e6] mb-8 leading-tight">
            Every Great Project <br /> Starts With a Conversation.
          </h2>
          <p className="text-[#e6e6e6]/40 text-xl max-w-2xl mx-auto mb-12">
            Let’s build a brand that buyers trust, remember, and act on[cite:
            29, 31].
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <button className="px-12 py-5 bg-white text-black font-black rounded-full hover:shadow-[0_0_40px_rgba(16,161,253,0.3)] transition-all uppercase text-xs tracking-[0.2em]">
              Start a Conversation
            </button>
            <button className="px-12 py-5 border border-white/10 text-[#e6e6e6] font-bold rounded-full hover:bg-white/5 transition-all uppercase text-xs tracking-[0.2em]">
              View Our Approach
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contactpage;
