import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesBento from "@/components/Home/ServicesBento";
import WhyChooseUs from "@/components/Home/WhyChooseUs";

export default function Home() {
  return (
    <main className="bg-[#050505] selection:bg-[#10a1fd] selection:text-white">
      <Navbar />
      <Hero />

      <ServicesBento />
      <WhyChooseUs />
    </main>
  );
}
