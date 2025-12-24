"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ServicesBento() {
  const services = [
    {
      id: "01",
      title: "Brand Building",
      desc: "Strategic branding, identity design, and concept design that position your real estate projects above the rest.",
      icon: (
        <Image src="/icons/5.png" alt="Brand Building" width={80} height={80} />
      ),
    },
    {
      id: "02",
      title: "Project Advisory",
      desc: "Consultation, strategy, and implementation to shape projects with maximum impact.",
      icon: (
        <Image src="/icons/3.png" alt="Brand Building" width={80} height={80} />
      ),
    },
    {
      id: "03",
      title: "Content Creation",
      desc: "Creative visuals, storytelling, and campaigns tailored to attract and engage the right audience",
      icon: <Image src="/icons/6.png" alt="Content" width={80} height={80} />,
    },
    {
      id: "04",
      title: "3D Visual Storytelling",
      desc: "Explain how EYE’s visuals help clients imagine, connect and decide faster",
      icon: <Image src="/icons/2.png" alt="3d" width={80} height={80} />,
    },
    {
      id: "05",
      title: "Powering Sales",
      desc: "Smart marketing strategies designed to deliver quality leads and drive real conversions.",
      icon: (
        <Image src="/icons/1.png" alt="Powering sales" width={80} height={80} />
      ),
    },
    {
      id: "06",
      title: "Marketing Motion",
      desc: "Digital growth, targeted campaigns, and strong partnerships to maximize visibility.",
      icon: (
        <Image
          src="/icons/4.png"
          alt="Marketing motion"
          width={80}
          height={80}
        />
      ),
    },
  ];

  return (
    <section className="py-24 bg-gray-900 overflow-hidden">
      <div className="px-6 mb-16 container mx-auto text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-[#10a1fd] font-mono tracking-[0.3em] uppercase text-xl block mb-4"
        >
          Our Services
        </motion.span>
        <h2 className="text-5xl md:text-6xl font-bold text-[#e6e6e6] tracking-tight">
          We Shape <span className="text-outline italic">Perception.</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-2 px-6 no-scrollbar">
        {services.map((service, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            className="min-w-[300px] bg-[#10a1fd]/5 border border-[#e6e6e6]/10 p-10 rounded-[2rem] snap-center group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 text-6xl font-bold text-[#10a1fd]/10 group-hover:text-[#10a1fd]/20 transition-colors">
              {service.id}
            </div>
            <div className="mb-8">{service.icon}</div>
            <h3 className="text-2xl font-bold text-[#e6e6e6] mb-4">
              {service.title}
            </h3>
            <p className="text-[#e6e6e6]/50 text-lg leading-relaxed mb-6">
              {service.desc}
            </p>
            <div className="w-12 h-[2px] bg-[#10a1fd] group-hover:w-full transition-all duration-500" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
