import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import ScrollVelocity from "./components/ScrollVelocity/ScrollVelocity";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ScrollVelocity
        texts={["| SACHA AHSAN", "| FRONTEND DEVELOPER"]}
        className="custom-scroll-text"
      />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
