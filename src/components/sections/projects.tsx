"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { projects } from "@/lib/data";

export default function Projects() {
  const container = useRef<HTMLElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const [hoveredProject, setHoveredProject] = useState<typeof projects[0] | null>(null);

  useGSAP(() => {
    const xTo = gsap.quickTo(previewRef.current, "left", {
      duration: 0.4,
      ease: "power3",
    });
    const yTo = gsap.quickTo(previewRef.current, "top", {
      duration: 0.4,
      ease: "power3",
    });

    const movePreview = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener("mousemove", movePreview);
    return () => {
      window.removeEventListener("mousemove", movePreview);
    };
  }, { scope: container });

  useEffect(() => {
    const handleScroll = () => {
      if (hoveredProject) setHoveredProject(null);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hoveredProject]);

  // Handle animate in/out for preview
  useEffect(() => {
    if (hoveredProject) {
      gsap.to(previewRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.4,
        ease: "back.out(1.7)",
      });
    } else {
      gsap.to(previewRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      });
    }
  }, [hoveredProject]);

  return (
    <section id="projects" className="relative py-32 px-6" ref={container} onMouseLeave={() => setHoveredProject(null)}>
      {/* GSAP Floating Preview */}
      <div
        ref={previewRef}
        className="pointer-events-none fixed z-50 hidden lg:flex h-[280px] w-[400px] -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-xl bg-[#0a0a0a] border border-[#00ff9c]/30 shadow-[0_0_30px_rgba(0,255,156,0.15)] opacity-0 scale-80"
      >
        {hoveredProject && (hoveredProject.liveUrl || hoveredProject.githubUrl) ? (
          <div className="relative w-full h-full">
            {hoveredProject.liveUrl ? (
              <iframe
                src={hoveredProject.liveUrl}
                className="absolute top-0 left-0 w-[1600px] h-[1120px] origin-top-left scale-[0.25] pointer-events-none border-0"
                tabIndex={-1}
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center bg-[#0a0a0a] text-neutral-500">
                <Github className="mb-2 h-8 w-8 opacity-50 text-[#00ff9c]" />
                <span className="text-sm font-mono tracking-wider text-[#00ff9c]/50">GitHub Repository</span>
              </div>
            )}
            
            {/* Overlay gradient to avoid weird iframe rendering artifacts */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
            
            {/* Project info badge inside preview */}
            <div className="absolute bottom-4 left-4 rounded-full bg-black/80 backdrop-blur-md px-4 py-1.5 text-xs font-medium text-[#00ff9c] shadow-[0_0_10px_rgba(0,255,156,0.2)] border border-[#00ff9c]/20 font-mono">
              {hoveredProject.title.split('—')[0].trim()}
            </div>
          </div>
        ) : (
          <span className="text-sm font-mono text-neutral-500">Preview not available</span>
        )}
      </div>

      <div className="relative mx-auto max-w-5xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-20 text-left"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white mb-6 sm:text-4xl text-glow flex items-center gap-3">
            <span className="font-mono text-[#00ff9c] text-2xl">&lt;</span>
            Selected Work
            <span className="font-mono text-[#00ff9c] text-2xl">/&gt;</span>
            <span className="animate-blink inline-block w-3 h-8 bg-[#00ff9c] align-middle" />
          </h2>
          <div className="h-1 w-20 rounded-full bg-[#00ff9c] shadow-[0_0_20px_#00ff9c]" />
        </motion.div>

        {/* Minimalist List styled for Matrix */}
        <div className="flex flex-col border-t border-[#00ff9c]/20">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative flex flex-col sm:flex-row sm:items-start justify-between border-b border-[#00ff9c]/10 py-12 transition-all hover:bg-[#00ff9c]/5 px-6 -mx-6 sm:rounded-lg sm:hover:shadow-2xl sm:hover:shadow-[#00ff9c]/5"
              onMouseEnter={() => setHoveredProject(project)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Left Side: Title & Info */}
              <div className="flex flex-col sm:w-2/3 pr-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-neutral-100 transition-colors group-hover:text-[#00ff9c] mb-4 font-mono">
                  {project.title}
                </h3>
                <p className="text-neutral-400 text-base leading-relaxed mb-6 sm:mb-0">
                  {project.description}
                </p>
              </div>

              {/* Right Side: Links & Tech */}
              <div className="flex flex-col sm:items-end gap-6 sm:w-1/3 mt-6 sm:mt-1">
                <div className="flex flex-wrap sm:justify-end gap-2.5">
                  {project.stack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[#00ff9c]/20 bg-[#00ff9c]/5 px-3 py-1.5 text-xs font-mono text-[#00ff9c]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 3 && (
                    <span className="rounded-full border border-[#00ff9c]/20 bg-[#00ff9c]/5 px-3 py-1 text-xs font-mono text-[#00ff9c]/70">
                      +{project.stack.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-4 mt-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-500 hover:text-[#00ff9c] transition-all hover:drop-shadow-[0_0_8px_rgba(0,255,156,0.5)] p-2 -m-2"
                      aria-label="GitHub Repository"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-[#00ff9c] transition-all hover:drop-shadow-[0_0_8px_rgba(0,255,156,0.5)]"
                    >
                      Live Site <ExternalLink className="h-4 w-4" />
                    </a>
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
