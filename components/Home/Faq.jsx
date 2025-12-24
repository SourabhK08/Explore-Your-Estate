"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { BackgroundEffects } from "../BackgroundEffects";

const faqs = [
  {
    id: "01",
    question: "Is EYE right for my project?",
    answer:
      "EYE works best with developers who want to build long-term brand value. We thrive on projects that require strategic differentiation and high-impact storytelling.",
  },
  {
    id: "02",
    question: "Do you handle both branding and marketing?",
    answer:
      "Yes. We provide a full-stack solution, from building your identity from the ground up to driving leads through smart, targeted digital campaigns.",
  },
  {
    id: "03",
    question: "How do you measure success?",
    answer:
      "We focus on measurable results: driving visibility, engagement, and quality leads that translate directly into real sales and faster site visits.",
  },
  {
    id: "04",
    question: "Do you work on a retainer or project basis?",
    answer:
      "We function as an extended part of your team. Our engagement models are flexible, tailored to the specific scale and lifecycle of your project.",
  },
  {
    id: "05",
    question: "What type of clients do you work with?",
    answer:
      "Our expertise spans developers, brokers, builders, and investors across residential, commercial, and luxury real estate segments.",
  },
];

// Sub-component for the Typewriter Effect
const Typewriter = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  const indexRef = useRef(0);

  useEffect(() => {
    indexRef.current = 0;
    setDisplayedText("");

    const interval = setInterval(() => {
      indexRef.current += 1;
      setDisplayedText(text.slice(0, indexRef.current));

      if (indexRef.current >= text.length) {
        clearInterval(interval);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [text]);

  return <span>{displayedText}</span>;
};

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className=" relatvie py-32 px-6 border-t border-white/5 relative overflow-hidden">
      <BackgroundEffects />
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" />

      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* LEFT SIDE: QUESTION NAVIGATOR */}
          <div className="lg:w-5/12 z-10">
            <motion.span className="text-[#10a1fd] font-mono tracking-[0.4em] uppercase text-xs mb-6 block">
              Clarifying the Process
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#e6e6e6] mb-12">
              Questions Serious <br /> Developers Ask
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-full flex items-center gap-6 py-6 border-b border-white/5 transition-all text-left group ${
                    activeIndex === index
                      ? "border-[#10a1fd]"
                      : "hover:border-white/20"
                  }`}
                >
                  <span
                    className={`font-mono text-sm transition-colors ${
                      activeIndex === index ? "text-[#10a1fd]" : "text-white/20"
                    }`}
                  >
                    {faq.id}
                  </span>
                  <span
                    className={`text-lg font-medium transition-colors ${
                      activeIndex === index
                        ? "text-[#e6e6e6]"
                        : "text-[#e6e6e6]/40 group-hover:text-[#e6e6e6]/60"
                    }`}
                  >
                    {faq.question}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: ANSWER PANEL WITH TYPE-ON EFFECT */}
          <div className="lg:w-7/12 flex items-center z-10">
            <div className="w-full min-h-[400px] relative p-12 lg:p-20 rounded-[3rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl flex flex-col justify-center shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="relative"
                >
                  {/* Visual indicator of "Active Processing" */}
                  <div className="flex items-center gap-2 mb-8">
                    <span className="w-2 h-2 rounded-full bg-[#10a1fd] animate-pulse" />
                    <span className="text-[#10a1fd] font-mono text-[10px] tracking-widest uppercase opacity-70">
                      STRATEGIC RESPONSE
                    </span>
                  </div>

                  <p className="text-2xl md:text-3xl text-[#e6e6e6] leading-relaxed font-light min-h-[150px]">
                    <Typewriter text={faqs[activeIndex].answer} />
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="inline-block w-1 h-7 bg-[#10a1fd] ml-2 align-middle"
                    />
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Strategic Glow Accent */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#10a1fd]/10 blur-[100px] rounded-full pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
