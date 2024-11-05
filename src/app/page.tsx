import About from "@/components/About";
import Contact from "@/components/Contact";
import Focuses from "@/components/Focuses";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";


export default function Home() {
  return (
    <div>
      <HeroSection/>
      <br /> <br />
      <About/>
      <br /> <br />
      <Focuses/>
      <br /> <br />
      <Projects/>
      <br /> <br />
      <Contact/>
      <br /> <br /> <br /> <br />
    </div>
  );
}
