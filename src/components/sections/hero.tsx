"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Terminal, ArrowRight, Code2, Database, Layers, Cpu, Globe } from "lucide-react";
import { siteConfig } from "@/lib/data";
import AvatarFlip from "@/components/ui/avatar-flip";

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
    transition: { staggerChildren: 0.12, delayChildren: 0.2 }
  },
};

const techStack = [
  { name: "Next.js", icon: Globe },
  { name: "React", icon: Code2 },
  { name: "TypeScript", icon: Terminal },
  { name: "Node.js", icon: Layers },
  { name: "System Design", icon: Database },
];

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      const yOffset = -80; 
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12 lg:pt-0"
    >
      {/* ── Background Elements ─────────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Main glow */}
        <div className="absolute top-[-20%] left-[-10%] w-[1000px] h-[1000px] bg-[#00ff9c]/5 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[800px] h-[800px] bg-[#00ff9c]/5 blur-[100px] rounded-full mix-blend-screen" />
        {/* Grid pattern overlay (optional) */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-150 contrast-150" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 w-full">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* ── Left Column: Content ────────────────────────────────── */}
          <div className="flex flex-col gap-8 max-w-2xl">
            {/* Status Badge */}
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00ff9c]/10 border border-[#00ff9c]/20 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff9c] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00ff9c]"></span>
                </span>
                <span className="text-xs font-mono font-medium text-[#00ff9c] uppercase tracking-wider">
                  System Online
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div variants={fadeUp}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                Engineering <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-500">
                  Robust Systems
                </span>
                <br />
                for <span className="text-[#00ff9c]">Web Scale</span>
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.p 
              variants={fadeUp}
              className="text-lg text-neutral-400 leading-relaxed max-w-xl border-l-2 border-[#00ff9c]/30 pl-6"
            >
              I architect high-performance digital solutions, bridging the gap between 
              <span className="text-white font-medium"> complex backend logic</span> and 
              <span className="text-white font-medium"> seamless user experiences</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 mt-2">
              <button
                onClick={() => scrollTo("#projects")}
                className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Projects <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-neutral-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </button>
              
              <div className="flex items-center gap-3">
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-[#00ff9c]/50 hover:text-[#00ff9c] transition-all"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-[#0077b5]/50 hover:text-[#0077b5] transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

            {/* Tech Stack Ticker (Proof Badges) */}
            <motion.div 
              variants={fadeUp}
              className="pt-8 border-t border-white/5 flex flex-col items-start gap-4"
            >
              <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest text-left">Powering Solutions With</span>
              <div className="flex flex-wrap items-center gap-6 opacity-70">
                {techStack.map((tech) => (
                  <div key={tech.name} className="flex items-center gap-2 group cursor-default">
                    <tech.icon className="w-5 h-5 text-neutral-400 group-hover:text-[#00ff9c] transition-colors" />
                    <span className="text-sm font-semibold text-neutral-300 group-hover:text-white transition-colors">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── Right Column: Cyber Profile HUD ─────────────────────── */}
          <motion.div 
            variants={fadeUp}
            className="relative flex justify-center lg:justify-end"
          >
            {/* HUD Container */}
            <div className="relative w-full max-w-md aspect-square">
              {/* Rotating outer rings */}
              <div className="absolute inset-0 border border-[#00ff9c]/20 rounded-full animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-4 border border-dashed border-[#00ff9c]/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
              
              {/* Decorative HUD lines */}
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00ff9c]/20 to-transparent" />
              <div className="absolute left-1/2 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-[#00ff9c]/20 to-transparent" />

              {/* Data Points */}
              <div className="absolute top-10 right-10 bg-black/80 backdrop-blur-md border border-[#00ff9c]/30 p-2 rounded text-xs font-mono text-[#00ff9c]">
                <div>COMMITS: 1.2K+</div>
                <div className="h-[2px] w-full bg-[#00ff9c]/20 my-1" />
                <div>UPTIME: 99.9%</div>
              </div>

              <div className="absolute bottom-10 left-10 bg-black/80 backdrop-blur-md border border-[#00ff9c]/30 p-2 rounded text-xs font-mono text-[#00ff9c]">
                <div>LOC: DEPLOYED</div>
                <div className="h-[2px] w-full bg-[#00ff9c]/20 my-1" />
                <div>LATENCY: 12ms</div>
              </div>

              {/* Center Content (Avatar Flip) */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative z-10 scale-90 sm:scale-100 transition-transform hover:scale-105 duration-500">
                  <AvatarFlip />
                  
                  {/* Glow under avatar */}
                  <div className="absolute inset-0 bg-[#00ff9c]/20 blur-[60px] -z-10 rounded-full" />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ── Scroll Indicator ──────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-500"
        >
          <div className="h-10 w-[1px] bg-gradient-to-b from-transparent via-[#00ff9c]/50 to-transparent" />
          <span className="text-[10px] tracking-[0.3em] font-mono uppercase text-[#00ff9c]/70">Scroll_Down</span>
        </motion.div>
      </div>
    </section>
  );
}
