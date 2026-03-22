"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Terminal, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } 
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20"
    >
      {/* Background radial highlight */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00ff9c]/[0.02] blur-[120px] rounded-full" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-[1000px] px-6 w-full flex flex-col pt-12"
      >
        {/* Premium Terminal Block */}
        <motion.div variants={fadeUp} className="mb-12">
          <div className="inline-flex flex-col bg-[#111111]/80 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl p-6 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00ff9c]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="flex items-center gap-2 mb-4">
              <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
              <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
              <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
              <div className="ml-4 flex items-center gap-2 text-xs font-mono text-neutral-500">
                <Terminal className="h-3.5 w-3.5" />
                <span>shivam@system: ~</span>
              </div>
            </div>

            <div className="font-mono text-sm sm:text-base leading-relaxed text-neutral-300">
              <span className="text-[#00ff9c]">const</span> profile = {'{'}
              <br />
              <span className="ml-6 tracking-wide">name: <span className="text-[#e6b450]">'Shivam'</span>,</span>
              <br />
              <span className="ml-6 tracking-wide">role: <span className="text-[#e6b450]">'Software Engineer'</span>,</span>
              <br />
              <span className="ml-6 tracking-wide">focus: <span className="text-[#e6b450]">'Scalable Full-Stack Architecture'</span></span>
              <br />
              {'}'};
            </div>
          </div>
        </motion.div>

        {/* Main Value Proposition */}
        <motion.div variants={fadeUp} className="max-w-4xl">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-[-0.02em] text-white leading-[1.1] mb-8">
            Engineering robust systems for <br className="hidden md:block" />
            <span className="text-[#00ff9c]">high-performance</span> web scale.
          </h1>
          
          <p className="text-lg sm:text-xl text-neutral-400 max-w-2xl leading-relaxed font-light mb-12">
            I design and build resilient architectures, bridging the gap between intricate backend logic and seamless user workflows. Actively seeking opportunities to drive engineering excellence.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-4">
          <button
            onClick={() => scrollTo("#projects")}
            className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black transition-all hover:bg-neutral-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            Explore My Work <ArrowRight className="h-4 w-4" />
          </button>
          
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-medium text-white transition-all hover:bg-white/10 hover:border-white/20"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-medium text-white transition-all hover:bg-white/10 hover:border-white/20"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-1/2 -focus-x-1/2 flex flex-col items-center gap-2 text-neutral-500"
      >
        <span className="text-[10px] tracking-[0.3em] font-mono uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
