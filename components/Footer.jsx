"use client";
import { motion } from "framer-motion";
import { Linkedin, Instagram, Youtube, Send, Facebook } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "About EYE", href: "/about-us" },
    { name: "Services", href: "/services" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Contact", href: "/contact-us" },
  ];

  const capabilities = [
    "Brand Building",
    "3D Visual Storytelling",
    "Digital Campaigns",
    "Lead Generation",
    "Project Advisory",
  ];

  return (
    <footer className="bg-black text-white pt-10 pb-4 px-6 border-t border-white/5 relative overflow-hidden">
      {/* Faint Background Grid */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[linear-gradient(to_right,#e6e6e6_1px,transparent_1px),linear-gradient(to_bottom,#e6e6e6_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* 1. BRAND BLOCK */}
          <div className="space-y-8">
            <Image
              src="/logo.png"
              alt="EYE - Explore Your Estate Logo"
              width={140}
              height={50}
              className="brightness-0 invert opacity-90"
            />
            <p className="text-white text-sm leading-relaxed max-w-xs font-light">
              EYE is a real estate branding and marketing partner, helping
              projects evolve into recognizable, trusted brands.
            </p>
          </div>

          {/* 2. NAVIGATION */}
          <div>
            <h4 className="text-[#10a1fd] font-mono tracking-[0.3em] uppercase mb-8 ">
              Navigation
            </h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white hover:text-[#10a1fd] transition-all duration-300 text-md font-light"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. CAPABILITIES */}
          <div>
            <h4 className="text-[#10a1fd] font-mono  tracking-[0.3em] uppercase mb-8">
              WHAT WE DO BEST
            </h4>
            <ul className="space-y-4">
              {capabilities.map((item) => (
                <li
                  key={item}
                  className="text-white text-md font-light hover:text-[#10a1fd] transition-all duration-300 cursor-pointer "
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* 4. CONNECT */}
          <div>
            <h4 className="text-[#10a1fd] font-mono  tracking-[0.3em] uppercase mb-8">
              Connect
            </h4>
            <div className="space-y-5">
              <div className="space-y-1 flex flex-col">
                <p className="text-sm text-white/50 uppercase tracking-widest">
                  Inquiries
                </p>
                <a
                  href="mailto:exploreyourestate@gmail.com"
                  className="text-md hover:text-[#10a1fd] transition-colors font-medium tracking-tight"
                >
                  exploreyourestate@gmail.com
                </a>
                <a
                  href="tel:+919828700234"
                  className="text-md hover:text-[#10a1fd] transition-colors font-medium tracking-tight mt-1"
                >
                  +91 98287 00234
                </a>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-white/50 uppercase tracking-widest">
                  Address
                </p>
                <a href="https://maps.app.goo.gl/CZaFApD87g2SizJT8" target="_blank" className="text-md font-light hover:text-[#10a1fd] transition-colors">
                  Chitrakoot, 133, Mahadev Nagar, Vaishali Nagar, Jaipur, Rajasthan 302021
                </a>
              </div>
              <div className="flex gap-5 pt-4">
                {[
                  {
                    Icon: Linkedin,
                    href: "https://www.linkedin.com/",
                    label: "LinkedIn",
                  },
                  {
                    Icon: Instagram,
                    href: "https://www.instagram.com/",
                    label: "Instagram",
                  },
                  {
                    Icon: Youtube,
                    href: "https://www.youtube.com/",
                    label: "YouTube",
                  },
                  {
                    Icon: Facebook,
                    href: "https://www.facebook.com/",
                    label: "Facebook",
                  },
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-white hover:text-[#10a1fd] transition-colors duration-300"
                  >
                    <Icon size={22} strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* SUB-FOOTER */}
        <div className="pt-4 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[12px] font-mono text-white tracking-widest uppercase">
            © {currentYear} EYE – Explore Your Estate. All rights reserved.
          </p>
          <p className="text-[12px] font-mono text-white tracking-widest uppercase ">
            Designed for brands that think long-term.
          </p>
        </div>
      </div>
    </footer>
  );
}
