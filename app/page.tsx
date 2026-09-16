import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Flagship from "@/components/Flagship";
import Projects from "@/components/Projects";
import OpenSource from "@/components/OpenSource";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Flagship />
      <Projects />
      <OpenSource />
      <Contact />
    </>
  );
}