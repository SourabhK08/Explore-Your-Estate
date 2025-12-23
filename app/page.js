import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesBento from "@/components/Home/ServicesBento";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import HowWeWork from "@/components/Home/HowWeWork";
import CaseStories from "@/components/Home/CaseStories";
import CaseStories2 from "@/components/Home/CaseStories2";
import Clients from "@/components/Home/Clients";


export default function Home() {
  return (
    <main className="bg-[#050505] selection:bg-[#10a1fd] selection:text-white">
      <Navbar />

      <Hero />
      <ServicesBento />
      <WhyChooseUs />
      <HowWeWork />
      {/* <CaseStories/>
      <CaseStories2/> */}
      <Clients/>
     
    </main>
  );
}
