"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, MoveUpRight, X } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            
            <span className="relative text-2xl font-bold tracking-tighter text-[#e6e6e6] group overflow-hidden">
              <Image src={"/logo.png"} width={100} height={100} alt="Explore Your Estate Logo" />
              <motion.span
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                className="absolute inset-0 bg-linear-to-r from-transparent via-[#10a1fd]/40 to-transparent italic h-[90%] "
              />
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#e6e6e6]/80">
            <a href="/" className="hover:text-[#10a1fd] transition-colors">
             Home
            </a>
            <a href="/about-us" className="hover:text-[#10a1fd] transition-colors">
              About EYE
            </a>
            <a href="/services" className="hover:text-[#10a1fd] transition-colors">
              Services
            </a>
            <a href="/case-studies" className="hover:text-[#10a1fd] transition-colors">
              Case Studies
            </a>
            {/* <a href="/case-studies" className="hover:text-[#10a1fd] transition-colors">
              Contact EYE
            </a> */}
            <a href="/contact-us" className="bg-[#10a1fd] text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all shadow-[0_0_15px_rgba(10,76,132,0.4)] flex items-center gap-2">
              Let's Talk <MoveUpRight size={20} />
            </a>
          </div>

          {/* Mobile Toggle */}
          <div
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
