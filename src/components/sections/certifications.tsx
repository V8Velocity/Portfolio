"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Bookmark, BadgeCheck, Building2, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { certifications } from "@/lib/data";

export default function Certifications() {
  const autoplay = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      containScroll: "trimSnaps",
      dragFree: true,
      loop: true,
    },
    [autoplay.current]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="certifications" className="py-24 bg-zinc-950 relative overflow-hidden select-none">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div className="text-left w-full">
            <h2 className="text-3xl font-bold tracking-tight text-white mb-4 sm:text-4xl flex items-center gap-3">
              <span className="font-mono text-[#00ff41] text-2xl">&lt;</span>
              Continuous Learning
              <span className="font-mono text-[#00ff41] text-2xl">/&gt;</span>
              <span className="animate-pulse inline-block w-3 h-8 bg-[#00ff41] align-middle rounded-sm shadow-[0_0_10px_#00ff41]" />
            </h2>
            <p className="max-w-2xl text-zinc-400 leading-relaxed font-sans text-lg mt-6">
              Verified coursework across networking, computer architecture, operating systems, and core computing fundamentals, demonstrating continuous learning and technical depth.
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={scrollPrev}
              className="p-3 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:text-[#00ff41] hover:border-[#00ff41]/50 hover:bg-[#00ff41]/10 transition-all duration-300 pointer-events-auto"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              className="p-3 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:text-[#00ff41] hover:border-[#00ff41]/50 hover:bg-[#00ff41]/10 transition-all duration-300 pointer-events-auto"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>

      <div className="relative w-full max-w-[100vw] mx-auto py-8">
        {/* Embla Carousel Container */}
        <div
          className="embla overflow-hidden"
          ref={emblaRef}
          style={{
            maskImage: "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
          }}
        >
          {/* embla__container - No padding here to prevent offset bugs */}
          <div className="embla__container flex -ml-4 md:-ml-6 touch-pan-y">
            {certifications.map((cert, index) => (
              <div
                key={index}
                // embla__slide
                className="embla__slide min-w-0 flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_28%] pl-4 md:pl-6"
              >
                <div className="group relative h-full flex flex-col rounded-xl bg-zinc-900/50 border border-zinc-800 p-6 transition-all duration-500 hover:border-[#00ff41]/50 hover:shadow-[0_0_30px_rgba(0,255,65,0.15)] overflow-hidden cursor-grab active:cursor-grabbing">
                  
                  {/* Subtle Grid Pattern Overlay */}
                  <div 
                    className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none transition-opacity duration-500 group-hover:opacity-[0.08]" 
                    style={{ 
                      backgroundImage: "linear-gradient(to right, #00ff41 1px, transparent 1px), linear-gradient(to bottom, #00ff41 1px, transparent 1px)", 
                      backgroundSize: "24px 24px" 
                    }} 
                  />

                  <div className="relative z-10 flex flex-col flex-grow">
                    {/* Top Bar */}
                    <div className="flex items-center justify-between mb-6">
                      <Bookmark className="w-5 h-5 text-[#00ff41]/80" />
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#00ff41]/10 border border-[#00ff41]/20">
                        <BadgeCheck className="w-3.5 h-3.5 text-[#00ff41]" />
                        <span className="text-[10px] font-mono font-bold tracking-wider text-[#00ff41]">VERIFIED</span>
                      </div>
                    </div>

                    {/* Body */}
                    <h3 className="text-lg font-bold text-white mb-3 line-clamp-2 leading-tight">
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-2 text-zinc-400 mb-6">
                      <Building2 className="w-4 h-4 shrink-0" />
                      <span className="text-sm font-sans truncate">{cert.issuer}</span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {(cert.tags || []).map((tag, i) => (
                        <span 
                          key={i} 
                          className="text-[10px] font-mono text-zinc-300 bg-zinc-800/80 border border-zinc-700 px-3 py-1 rounded-full uppercase tracking-wider"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* View Credential Button - Pushed to bottom */}
                    <div className="mt-auto">
                      {cert.url ? (
                        <a 
                          href={cert.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="w-full flex items-center justify-center gap-2 py-3 rounded-lg border border-[#00ff41]/30 text-[#00ff41] font-sans text-sm font-medium transition-all duration-300 opacity-70 group-hover:opacity-100 group-hover:bg-[#00ff41]/5 group-hover:border-[#00ff41]/60"
                        >
                          View Credential <ExternalLink className="w-4 h-4" />
                        </a>
                      ) : (
                        <div 
                          className="w-full flex items-center justify-center gap-2 py-3 rounded-lg border border-zinc-800 text-zinc-600 font-sans text-sm font-medium cursor-not-allowed opacity-60"
                          title="Credential not yet available"
                        >
                          View Credential <ExternalLink className="w-4 h-4" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
