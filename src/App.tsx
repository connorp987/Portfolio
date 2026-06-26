import { useReveal } from "./hooks/useReveal";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { StatBand } from "./components/StatBand";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  const root = useReveal<HTMLDivElement>();

  return (
    <div ref={root}>
      <a className="skip-link" href="#work">
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <StatBand />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
