"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/lib/data";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border-t border-[#00ff9c]/10 bg-[black]"
    >
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div className="text-center sm:text-left">
            <p className="text-xl font-bold text-white tracking-tight font-mono">
              shivam<span className="text-[#00ff9c]">.</span><span className="text-[#00ff9c] animate-pulse">_</span>
            </p>
            <p className="text-sm text-neutral-500 mt-2 font-mono">
              Software Engineer
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-[#00ff9c] hover:drop-shadow-[0_0_8px_rgba(0, 255, 156,0.5)] transition-all"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-[#00ff9c] hover:drop-shadow-[0_0_8px_rgba(0, 255, 156,0.5)] transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${siteConfig.links.email}`}
              className="text-neutral-500 hover:text-[#00ff9c] hover:drop-shadow-[0_0_8px_rgba(0, 255, 156,0.5)] transition-all"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#00ff9c]/10 text-center">
          <p className="text-xs text-neutral-600 font-mono">
            &copy; {new Date().getFullYear()} Shivam. Crafted with Next.js, TypeScript & Tailwind CSS.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
