"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Terminal, Code2 } from "lucide-react";
import Image from "next/image";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32 bg-black font-sans overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[20%] -left-[10%] w-96 h-96 bg-[#00ff41] blur-[128px] rounded-full" />
        <div className="absolute bottom-[20%] -right-[10%] w-96 h-96 bg-[#00ff41] blur-[128px] rounded-full" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 lg:mb-24"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white mb-6 sm:text-4xl flex items-center gap-3">
            <span className="font-mono text-[#00ff41] text-2xl font-light">{"{"}/*</span>
            <span className="font-mono">Selected Work</span>
            <span className="font-mono text-[#00ff41] text-2xl font-light">*/{"}"}</span>
          </h2>
          <div className="h-[1px] w-32 bg-gradient-to-r from-[#00ff41] to-transparent" />
        </motion.div>

        {/* Projects Grid */}
        <div className="flex flex-col gap-24 lg:gap-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
            >
              
              {/* TEXT CONTENT (Left Side - 7 cols) */}
              <div className="flex flex-col order-2 lg:order-1 lg:col-span-7">
                
                {/* Title & Subtitle */}
                <div className="mb-6">
                  <div className="font-mono text-[#00ff41] text-sm mb-2 tracking-wider uppercase">Featured Project</div>
                  <h3 className="text-3xl sm:text-4xl font-bold group-hover:text-[#00ff41] transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>

                {/* Description Box */}
                <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 p-6 rounded-xl mb-6 shadow-2xl relative z-10 transition-colors duration-300 group-hover:border-[#00ff41]/20 group-hover:bg-zinc-900/80">
                  <p className="text-zinc-300 text-base leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  {/* STAR Bullets */}
                  <ul className="space-y-4">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start text-zinc-400 text-sm">
                        <span className="mr-3 text-[#00ff41] mt-0.5 opacity-80 group-hover:opacity-100 transition-opacity">
                          <Terminal className="w-4 h-4" />
                        </span>
                        <span className="leading-relaxed text-zinc-300 group-hover:text-white transition-colors">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-2.5 mb-8 relative z-10">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-xs font-mono text-zinc-400 border border-zinc-800 rounded-full bg-zinc-950 hover:border-[#00ff41]/50 hover:text-[#00ff41] hover:bg-[#00ff41]/5 transition-all cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex items-center gap-4 relative z-10">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 bg-[#00ff41] text-black font-semibold rounded hover:bg-[#00ff41]/90 hover:scale-[1.02] active:scale-[0.98] transition-all"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 border border-zinc-700 text-white font-medium rounded hover:border-[#00ff41] hover:text-[#00ff41] hover:bg-[#00ff41]/10 transition-all"
                    >
                      <Github className="h-4 w-4" />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </div>

              {/* VISUAL PREVIEW (Right Side - 5 cols) */}
              <div className="order-1 lg:order-2 lg:col-span-5 relative w-full aspect-video rounded-xl overflow-hidden group-hover:-translate-y-2 transition-transform duration-700">
                {/* Mock Browser/Terminal Editor Mockup */}
                <div className="absolute inset-0 bg-zinc-950 rounded-xl border border-zinc-800 group-hover:border-[#00ff41]/30 transition-colors duration-500 shadow-2xl flex flex-col overflow-hidden">
                  
                  {/* Mock Window Header */}
                  <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800 bg-zinc-900/50 z-20 relative">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-zinc-700 group-hover:bg-red-500/80 transition-colors" />
                      <div className="w-3 h-3 rounded-full bg-zinc-700 group-hover:bg-yellow-500/80 transition-colors" />
                      <div className="w-3 h-3 rounded-full bg-zinc-700 group-hover:bg-green-500/80 transition-colors" />
                    </div>
                    <div className="font-mono text-[10px] text-zinc-500 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                      <Code2 className="w-3 h-3" /> src/main.tsx
                    </div>
                  </div>                  {/* Project Screenshot or Live Preview or Fallback */}
                  {/* @ts-ignore - Suppressing TS error if the 'image' property is missing from type depending on your data.ts state */}
                  {project.image ? (
                    <div className="flex-1 w-full relative overflow-hidden bg-black flex items-center justify-center">
                      <Image 
                        src={(project as any).image} 
                        alt={project.title} 
                        fill 
                        className="object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      {/* Subtle Overlay to match dark theme */}
                      <div className="absolute inset-0 bg-[#00ff41]/5 group-hover:bg-transparent transition-colors duration-500" />
                      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-zinc-950 to-transparent opacity-90 transition-opacity duration-500" />
                    </div>
                  ) : project.liveUrl ? (
                    <div className="flex-1 w-full relative overflow-hidden bg-zinc-950 flex items-center justify-center group/iframe">
                      <div className="absolute top-0 left-0 w-[200%] h-[200%] origin-top-left scale-[0.5] transition-transform duration-700 ease-out group-hover:scale-[0.52]">
                        <iframe 
                          src={project.liveUrl} 
                          title={`${project.title} Live Preview`}
                          loading="lazy"
                          className="w-full h-full border-none opacity-40 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-screen group-hover:mix-blend-normal blur-[1px] group-hover:blur-none"
                          sandbox="allow-scripts allow-same-origin"
                        />
                      </div>
                      <div className="absolute inset-0 bg-transparent group-hover:bg-black/10 transition-colors duration-500 pointer-events-none" />
                      
                      {/* "Live" Indicator overlay */}
                      <div className="absolute bottom-4 right-4 bg-zinc-900/90 border border-zinc-800 text-zinc-400 text-[10px] uppercase tracking-widest font-mono px-3 py-1.5 rounded-full flex items-center gap-2 opacity-100 group-hover:opacity-0 transition-opacity">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00ff41] animate-pulse" /> Live Feed
                      </div>
                    </div>
                  ) : (
                    <div className="flex-1 w-full p-6 flex flex-col items-center justify-center relative overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900 to-zinc-950">
                      
                      {/* Glowing Accent */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        <div className="w-32 h-32 bg-[#00ff41]/10 rounded-full blur-2xl animate-pulse" />
                      </div>

                      {/* Central Tech Icon Logo Replacement */}
                      <div className="relative z-10 w-20 h-20 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 group-hover:border-[#00ff41]/40 group-hover:shadow-[0_0_30px_rgba(0,255,65,0.15)]">
                        <Code2 className="w-10 h-10 text-zinc-600 group-hover:text-[#00ff41] transition-colors duration-500" />
                      </div>
                      
                      {/* Terminal-like text lines below it */}
                      <div className="mt-8 relative z-10 w-full max-w-[200px] flex flex-col gap-3">
                        <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                          <div className="h-full w-0 bg-[#00ff41]/80 group-hover:w-[85%] transition-all duration-1000 ease-out delay-100" />
                        </div>
                        <div className="h-2 w-3/4 bg-zinc-800 rounded-full overflow-hidden">
                          <div className="h-full w-0 bg-[#00ff41]/60 group-hover:w-[60%] transition-all duration-1000 ease-out delay-300" />
                        </div>
                        <div className="h-2 w-1/2 bg-zinc-800 rounded-full overflow-hidden">
                          <div className="h-full w-0 bg-[#00ff41]/40 group-hover:w-[40%] transition-all duration-1000 ease-out delay-500" />
                        </div>
                      </div>
                      
                      {/* Glassmorphism subtle overlay */}
                      <div className="absolute right-0 bottom-0 pointer-events-none p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-300">
                        <span className="font-mono text-[10px] text-[#00ff41]/30">status: OK [200]</span>
                      </div>

                    </div>
                  )}
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

