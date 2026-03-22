import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Education from "@/components/sections/education";
import TechStack from "@/components/sections/tech-stack";
import Projects from "@/components/sections/projects";
import DeveloperProfile from "@/components/sections/developer-profile";
import Learning from "@/components/sections/learning";
import Certifications from "@/components/sections/certifications";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <DeveloperProfile />
        <Learning />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
