"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText, ChevronRight } from "lucide-react";

const navLinks = [
  { label: "Skills", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleActiveSection = () => {
      const sections = navLinks.map(link => link.href.replace("#", ""));
      // Add hero to the sections list implicitly
      const allSections = ["hero", ...sections];
      
      let current = "";
      for (const section of allSections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is roughly in the middle of viewport
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            current = section;
          }
        }
      }
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleActiveSection);
    return () => window.removeEventListener("scroll", handleActiveSection);
  }, []);

  const handleClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const yOffset = -80; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          scrolled
            ? "bg-[#0a0a0a]/80 backdrop-blur-xl border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] h-20"
            : "bg-transparent border-transparent h-24"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleClick("#hero")}
            className="group relative z-50 flex flex-col items-start gap-0.5"
          >
            <div className="flex items-center gap-1">
              <span className="text-xl font-bold tracking-tighter text-white font-mono">
                shivam
              </span>
              <span className="w-2 h-2 rounded-full bg-[#00ff9c] animate-pulse" />
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6 rounded-full bg-white/5 px-6 py-2 border border-white/5 backdrop-blur-sm">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <button
                    key={link.href}
                    onClick={() => handleClick(link.href)}
                    className="relative text-sm font-medium transition-colors duration-300 group"
                  >
                    <span className={`relative z-10 ${isActive ? "text-[#00ff9c]" : "text-neutral-400 group-hover:text-white"}`}>
                      {link.label}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute inset-0 -inset-x-3 bg-white/5 rounded-full -z-10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            <a
              href="/Resumerefined.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#00ff9c] text-black px-5 py-2.5 rounded-full text-sm font-bold transition-all hover:bg-[#00cc7d] hover:shadow-[0_0_20px_rgba(0,255,156,0.3)] hover:scale-105 active:scale-95"
            >
              <FileText className="w-4 h-4" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative z-50 p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-3xl pt-28 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className="text-3xl font-bold text-white text-left flex items-center justify-between group border-b border-white/10 pb-4"
                >
                  <span className="font-mono">0{i + 1}. {link.label}</span>
                  <ChevronRight className="w-6 h-6 text-[#00ff9c] opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.button>
              ))}
              <motion.a
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                href="/Resumerefined.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2 bg-[#00ff9c] text-black py-4 rounded-xl text-lg font-bold"
              >
                Download Resume <FileText className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
