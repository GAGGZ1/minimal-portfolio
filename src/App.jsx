import Header from "./components/Header";
import Section from "./components/Section";
import Card from "./components/Card";
import Skills from "./components/ SkillTag";
import Connect from "./components/Connect";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import About from "./components/About";
import CodingProfiles from "./components/CodingProfiles";
import Footer from "./components/Footer";


export default function App() {
  return (
    <div className="min-h-screen px-6 md:px-20 py-12 max-w-5xl mx-auto">
      <Header />
     


      {/* Experience */}
      <Section title="Experience">
        <Experience />
      </Section>

      {/* Projects */}
    <Section id="projects" title="Projects I've Built">

        <Projects />
      </Section>
      {/* Skills */}
      <Section title="Skills & Tools">
        <Skills />
      </Section>
      <Section title="Coding Profiles">
  <CodingProfiles />
</Section>

       <Section title="About Me">
  <About />
</Section>

      {/* Contact */}
  <Section id="contact" title="Connect with Me">

        <Connect />
      </Section>
      <Footer />
      
    </div>
  );
}
