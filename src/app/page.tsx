"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
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
import CyberLoader from "@/components/ui/loader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user has visited before in this session
    const hasVisited = sessionStorage.getItem("hasVisited");
    if (hasVisited) {
      setLoading(false);
    } 
  }, []);

  const handleCallback = () => {
    setLoading(false);
    sessionStorage.setItem("hasVisited", "true");
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <CyberLoader onFinish={handleCallback} />}
      </AnimatePresence>
      
      {!loading && (
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
      )}
    </>
  );
}
