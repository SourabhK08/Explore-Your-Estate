import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';

export const BackgroundEffects = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the mouse movement
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* 1. Interactive Spotlight */}
      <motion.div
        style={{
          left: springX,
          top: springY,
        }}
        className="absolute w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-[#0a4c84]/15 rounded-full blur-[120px] z-0"
      />

      {/* 2. Floating Aura Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#0a4c84]/10 rounded-full blur-[100px]"
      />

      {/* 3. Animated Cyber-Grid */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `linear-gradient(#e6e6e6 1px, transparent 1px), linear-gradient(90deg, #e6e6e6 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)',
        }}
      />

      {/* 4. Noise Texture for that "Premium" Grain */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('https://res.cloudinary.com/dlbv8id70/image/upload/v1680554535/noise_twhv0n.png')]" />
    </div>
  );
};
