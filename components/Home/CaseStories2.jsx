"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MoveUpRight, Zap, Scan, MousePointer2 } from "lucide-react";
import { BackgroundEffects } from "../BackgroundEffects";

const chapters = [
  {
    title: "The Intelligence Layer",
    description:
      "We decode location signals, buyer intent, and competitor positioning to uncover your project’s true market advantage.",
    sub: "MARKET CONFUSION",
    metrics: "",
  },
  {
    title: "The Visual Transformation",
    description:
      "Strategy becomes cinematic 3D visuals and storytelling that help buyers emotionally connect before they ever visit.",
    sub: "STRATEGIC DISCOVERY",
    metrics: "Location & Audience Intelligence Activated",
  },
  {
    title: "The Performance Engine",
    description:
      "Targeted campaigns, funnels, and content systems convert attention into qualified leads and site visits",
    sub: "STORYTELLING ENGINE",
    metrics: "3D & Cinematic Assets Deployed",
  },
  {
    title: "The Result",
    description:
      "The project emerges as a market authority — trusted, recognizable, and positioned to sell faster.",
    sub: "MARKET AUTHORITY",
    metrics: "Brand Authority Established",
  },
];

export default function CaseStories2() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Background Opacity & Scale morphs
  const backgroundScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1.1, 1, 1.05]
  );
  const overlayOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.8, 0.4, 0.2, 0.6]
  );

  return (
    <div ref={targetRef} className="relative h-[500vh] bg-black">
      {/* FIXED CANVAS CONTAINER */}
      <BackgroundEffects />


{/* SECTION INTRO */}
<div className="relative z-30 container mx-auto px-6 pt-10 text-center">
  <div className="">
    <span className="text-[#10a1fd] font-mono tracking-[0.4em] text-sm uppercase block mb-3">
      The EYE Method
    </span>

    <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-3">
      How We Turn Real Estate
      <span className="text-[#10a1fd]"> Vision Into Sales</span>
    </h2>

    <p className="text-white/60 text-lg leading-relaxed">
      Every successful real estate brand follows a transformation.
      This is the strategic journey every EYE-led project goes through —
      from market confusion to brand authority.
    </p>
  </div>
</div>

      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* CINEMATIC BACKGROUND LAYER */}
        <motion.div
          style={{ scale: backgroundScale }}
          className="absolute inset-0 z-0"
        >
          {/* Chapter 1-2: Wireframe/Blueprint Visual */}
          <motion.div
            style={{ opacity: useTransform(scrollYProgress, [0, 0.4], [1, 0]) }}
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503387762-592dea58ef23?q=80&w=2000')] bg-cover bg-center grayscale contrast-[1.2]"
          >
            <div className="absolute inset-0 bg-black/60 mix-blend-multiply" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#10a1fd10,transparent_70%)]" />
          </motion.div>

          {/* Chapter 3-5: Realistic Morph Visual */}
          <motion.div
            style={{
              opacity: useTransform(scrollYProgress, [0.3, 0.6], [0, 1]),
            }}
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600607687940-47a04b629753?q=80&w=2000')] bg-cover bg-center"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
          </motion.div>
        </motion.div>

        {/* GRAIN & HUD OVERLAY */}
        <div className="absolute inset-0 pointer-events-none z-10 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

        {/* NARRATIVE TEXT ENGINE */}
        <div className="relative z-20 container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2">
          <div className="max-w-xl">
            {chapters.map((chapter, i) => {
              const start = i / chapters.length;
              const end = (i + 1) / chapters.length;
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const opacity = useTransform(
                scrollYProgress,
                i === 0
                  ? [0, 0, end - 0.05, end] // First slide: Start at 1 immediately
                  : [start, start + 0.05, end - 0.05, end], // Other slides: Fade in/out
                i === 0
                  ? [1, 1, 1, 0] // First slide opacity values
                  : [0, 1, 1, 0] // Other slides opacity values
              );
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const y = useTransform(
                scrollYProgress,
                [start, end],
                i === 0 ? [0, -20] : [20, -20]
              );

              return (
                <motion.div
                  key={i}
                  style={{ opacity, y }}
                  className="absolute -translate-y-1/2"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-[1px] w-8 bg-[#10a1fd]" />
                    <span className="text-[#10a1fd] font-mono tracking-[0.4em] text-xs uppercase">
  Phase {i + 1} : {chapter.sub}
</span>
                  </div>
                  <h2 className="text-6xl md:text-8xl font-black text-white leading-none mb-8">
                    {chapter.title.toUpperCase()}
                  </h2>
                  <p className="text-xl md:text-2xl text-white/60 leading-relaxed font-light">
                    {chapter.description}
                  </p>

                  {chapter.metrics && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      className="mt-12 inline-flex items-center gap-4 px-6 py-3 rounded-full border border-[#10a1fd]/30 bg-black/40 backdrop-blur-xl"
                    >
                      <Zap className="text-[#10a1fd]" size={16} />
                      <span className="text-[#10a1fd] font-mono text-sm font-bold tracking-tighter">
                        {chapter.metrics}
                      </span>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* RIGHT SIDE: HUD ELEMENTS */}
          <div className="hidden lg:flex flex-col justify-center items-end">
            <motion.div
              style={{
                opacity: useTransform(scrollYProgress, [0.1, 0.9], [0, 1]),
              }}
              className="p-8 border border-white/10 rounded-3xl bg-black/20 backdrop-blur-md"
            >
              <div className="flex gap-12 text-right">
                <div>
                  <p className="text-[10px] font-mono text-white/30 uppercase mb-2">
                     Strategic Focus
                  </p>
                  <p className="text-[#10a1fd] font-bold">Brand-Led Growth</p>
                </div>
                {/* <div>
                  <p className="text-[10px] font-mono text-white/30 uppercase mb-2">
                     Execution Model
                  </p>
                  <p className="text-white font-bold tracking-tighter uppercase">
                    Intelligence → Visuals → Performance
                  </p>
                </div> */}
              </div>
            </motion.div>
          </div>
        </div>

        {/* BOTTOM PROGRESS INDICATOR */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4 items-center">
          <span className="text-[10px] font-mono text-white/20">01</span>
          <div className="w-48 h-[1px] bg-white/10 relative">
            <motion.div
              style={{ scaleX: scrollYProgress, originX: 0 }}
              className="absolute inset-0 bg-[#10a1fd] shadow-[0_0_10px_#10a1fd]"
            />
          </div>
          <span className="text-[10px] font-mono text-white/20">05</span>
        </div>
      </div>
    </div>
  );
}
