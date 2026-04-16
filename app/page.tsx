import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Extracurriculars from "@/components/Extracurriculars";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
      <main className = "flex flex-col gap-24 px-6 md:px-16 py-10">
          <Hero />
          <Education />
          <Experience />
          <Projects />
          <Extracurriculars />
          <Skills />
      </main>
  );
}