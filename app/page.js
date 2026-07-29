import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Skill from "./components/Skill";

export default function Home() {
  return (
    <div className="bg-[#1e1e1f] h-screen">
      <Navbar />
      <Hero/>
      <About />
      <Resume />
      <Projects />
      <Skills />
   
      <Contact/>
    </div>
  );
}
