import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Journey from "@/components/Journey";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { education, experience } from "@/data/site";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Journey id="education" index="03" kicker="Education" title="Where I" accent="study" entries={education} />
        <Journey id="experience" index="04" kicker="Experience" title="How I" accent="practice" entries={experience} />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
