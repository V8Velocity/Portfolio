"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Award, Verified, ExternalLink, Building2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { certifications } from "@/lib/data";

// Register ScrollTrigger, only on client side
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function CertificationCard({ cert, isMobile = false }: { cert: typeof certifications[0], isMobile?: boolean }) {
  return (
    <div className={`cert-card ${isMobile ? "w-full h-auto" : "w-[400px] shrink-0 h-[460px]"} glass-card flex flex-col rounded-2xl relative overflow-hidden group hover:border-[#00ff9c]/40 hover:shadow-[0_12px_40px_rgba(0,0,0,0.6),_0_0_20px_rgba(0,255,156,0.1)] transition-all duration-500 bg-neutral-950/80`}>
      {/* Premium Top Line */}
      {!isMobile && <div className="absolute top-0 left-0 right-0 h-1 z-20 bg-gradient-to-r from-transparent via-[#00ff9c]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />}
      
      {/* UPPER SECTION (Text & Metadata) */}
      <div className={`p-6 flex flex-col z-10 ${isMobile ? "pb-6" : "h-[220px]"}`}>
        {/* Top Row: Icon + Badge */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#00ff9c]/10 border border-[#00ff9c]/20 group-hover:bg-[#00ff9c]/20 transition-colors" style={{ boxShadow: "0 0 10px rgba(0, 255, 156, 0.05)" }}>
            <Award className="h-5 w-5 text-[#00ff9c]" />
          </div>
          <div className="flex items-center gap-1.5 text-[10px] uppercase font-mono tracking-widest text-[#00ff9c] bg-[#00ff9c]/10 px-2.5 py-1 rounded-full border border-[#00ff9c]/20">
            <Verified className="h-3 w-3" />
            Verified
          </div>
        </div>

        {/* Title & Issuer */}
        <div className="mb-4">
          <h3 className="text-lg font-bold text-white tracking-tight leading-snug line-clamp-2 mb-1 group-hover:text-[#00ff9c] transition-colors">
            {cert.title}
          </h3>
          <p className="text-sm text-neutral-400 font-mono flex items-center gap-2">
            <Building2 className="h-3.5 w-3.5 opacity-70 shrink-0" />
            <span className="truncate">{cert.issuer}</span>
          </p>
        </div>

        {/* Metadata Row */}
        <div className="flex gap-2 mt-auto flex-wrap">
          {(cert.tags || ["Coursera", "Professional"]).map((tag, i) => (
            <span key={i} className="text-[10px] uppercase tracking-wider font-mono text-neutral-400 bg-white/5 border border-white/10 px-2 py-1 rounded-md backdrop-blur-md">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* LOWER SECTION (Image / Fallback & CTA Overlay) */}
      <div className={`relative w-full ${isMobile ? "h-[200px]" : "flex-1"} overflow-hidden border-t border-white/10 group-hover:border-[#00ff9c]/20 transition-colors z-0 bg-black/50`}>
        {/* Dark Matrix Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 opacity-80 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />
        
        {/* The Image or CSS Fallback */}
        {cert.image ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img 
            src={cert.image} 
            alt={`${cert.title} Certificate`}
            className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
          />
        ) : (
          <div className="w-full h-full opacity-40 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out flex items-center justify-center bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#00ff9c]/5" />
             <Award className="h-16 w-16 text-neutral-700 group-hover:text-[#00ff9c]/40 transition-colors duration-500" />
          </div>
        )}

        {/* Hover CTA Button Overlay */}
        {cert.url && (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-out bg-black/40 backdrop-blur-[2px]">
            <a 
              href={cert.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-black/80 border border-[#00ff9c]/50 text-[#00ff9c] px-5 py-2.5 rounded-lg font-mono text-sm tracking-wide flex items-center gap-2 hover:bg-[#00ff9c]/10 hover:shadow-[0_0_20px_rgba(0,255,156,0.3)] transition-all transform hover:-translate-y-1"
            >
              View Credential <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Certifications() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    let ctx = gsap.context(() => {
      const cardsWrapper = cardsRef.current;
      if (!cardsWrapper) return;

      const tl = gsap.to(cardsWrapper, {
        xPercent: -50,
        ease: "none",
        duration: 35,
        repeat: -1,
      });

      cardsWrapper.addEventListener("mouseenter", () => gsap.to(tl, { timeScale: 0, duration: 0.5 }));
      cardsWrapper.addEventListener("mouseleave", () => gsap.to(tl, { timeScale: 1, duration: 0.5 }));
    }, containerRef);

    return () => ctx.revert();
  }, { scope: containerRef }); 

  return (
    <section id="certifications" className="py-24 relative overflow-hidden" ref={containerRef}>
      {/* Background glow specific to certs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-[#00ff9c]/5 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 mb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-left"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white mb-6 sm:text-4xl text-glow flex items-center gap-3">
            <span className="font-mono text-[#00ff9c] text-2xl">&lt;</span>
            Continuous Learning
            <span className="font-mono text-[#00ff9c] text-2xl">/&gt;</span>
            <span className="animate-blink inline-block w-3 h-8 bg-[#00ff9c] align-middle" />
          </h2>
          <div className="h-1 w-20 rounded-full bg-[#00ff9c] shadow-[0_0_20px_#00ff9c]" />
          <p className="mt-6 text-neutral-400 max-w-2xl leading-relaxed">
            Verified coursework across networking, computer architecture, operating systems, and core computing fundamentals, demonstrating continuous learning and technical depth.
          </p>
        </motion.div>
      </div>

      {/* GSAP Infinite Carousel (Desktop) */}
      <div className="hidden md:block py-10 overflow-hidden">
        <div 
          ref={scrollWrapperRef} 
          className="relative flex flex-col justify-center"
        >
          <div 
            ref={cardsRef} 
            className="flex w-max"
          >
            <div className="flex gap-6 pr-6 w-max">
              {certifications.map((cert, i) => (
                <CertificationCard key={`a-${i}`} cert={cert} />
              ))}
            </div>
            <div className="flex gap-6 pr-6 w-max">
              {certifications.map((cert, i) => (
                <CertificationCard key={`b-${i}`} cert={cert} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stacked Vertical Fallback (Mobile) */}
      <div className="md:hidden px-6 grid gap-6">
        {certifications.map((cert, i) => (
          <motion.div
            key={`mobile-${i}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <CertificationCard cert={cert} isMobile />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
