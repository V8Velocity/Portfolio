"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, BookOpen, Cpu, Calendar, Award } from "lucide-react";

// Education Data (Chronological Order: 10th -> 12th -> B.Tech)
const educationData = [
  {
    id: 1,
    title: "Matriculation (10th Grade)",
    category: "Foundation",
    institution: "Takshila School, Begusarai",
    score: "93.4%",
    year: "Completed",
    description: "Built strong fundamentals in Mathematics & Science, developing analytical reasoning skills.",
    icon: BookOpen,
  },
  {
    id: 2,
    title: "Intermediate (12th Grade)",
    category: "Specialization",
    institution: "Mount Litera Public School, Begusarai",
    score: "88.2%",
    year: "Completed",
    description: "Specialized in Physics, Chemistry & Math. Cultivated problem-solving methodologies.",
    icon: Cpu,
  },
  {
    id: 3,
    title: "B.Tech in Computer Science",
    category: "Engineering Core",
    institution: "Lovely Professional University, Punjab",
    score: "7.61 CGPA",
    year: "Ongoing",
    description: "Specializing in Software Engineering, Data Structures, Algorithms, and Full-Stack Development.",
    icon: GraduationCap,
  },
];

export default function Education() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="education" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="pointer-events-none absolute inset-0 flex justify-center">
        <div className="h-full w-[1px] bg-gradient-to-b from-transparent via-[#00ff9c]/10 to-transparent" />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-6" ref={containerRef}>
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-glow">
            <span className="font-mono text-[#00ff9c] mr-3">&lt;</span>
            Academic Journey
            <span className="font-mono text-[#00ff9c] ml-3">/&gt;</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#00ff9c] shadow-[0_0_20px_#00ff9c]" />
        </motion.div>

        {/* Timeline Container */}
        <div className="relative mx-auto max-w-4xl">
          {/* Central Line (Animated) */}
          <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-[2px] h-full bg-[#111] md:-translate-x-1/2">
            <motion.div 
              style={{ scaleY, originY: 0 }}
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#00ff9c] via-[#00ff9c] to-transparent shadow-[0_0_20px_#00ff9c]"
            />
          </div>

          <div className="space-y-16 md:space-y-24">
            {educationData.map((edu, index) => {
              const Icon = edu.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex flex-col md:flex-row items-center md:justify-between gap-8 md:gap-0 ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Node (Center) */}
                  <div className="absolute left-[10px] md:left-1/2 top-0 md:top-8 w-5 h-5 md:-translate-x-1/2 z-10 flex items-center justify-center">
                    <div className="w-3 h-3 bg-[#050505] border-2 border-[#00ff9c] rounded-full shadow-[0_0_10px_#00ff9c] relative">
                        <div className="absolute inset-0 bg-[#00ff9c] animate-ping opacity-50 rounded-full" />
                    </div>
                  </div>

                  {/* Empty Spacer for alternating layout */}
                  <div className="hidden md:block w-1/2" />

                  {/* Content Card */}
                  <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"}`}>
                    
                    {/* Category Label */}
                    <div className={`flex items-center gap-2 mb-2 ${isEven ? "md:justify-end" : "md:justify-start"}`}>
                      <span className="text-xs font-mono text-[#00ff9c] uppercase tracking-widest bg-[#00ff9c]/10 px-2 py-1 rounded border border-[#00ff9c]/20">
                        0{edu.id} // {edu.category}
                      </span>
                    </div>

                    <div className="group relative bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/5 p-6 rounded-2xl hover:border-[#00ff9c]/30 transition-colors duration-300">
                      {/* Hover Glow Effect */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00ff9c] to-blue-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-500" />
                      
                      <div className="relative z-10">
                        {/* Header */}
                        <div className={`flex flex-col gap-1 mb-4 ${isEven ? "md:items-end" : "md:items-start"}`}>
                          <h3 className="text-xl font-bold text-white group-hover:text-[#00ff9c] transition-colors">
                            {edu.title}
                          </h3>
                          <div className="flex items-center gap-2 text-neutral-400 text-sm">
                            <span className="truncate">{edu.institution}</span>
                          </div>
                        </div>

                        {/* Details Grid */}
                        <div className={`flex flex-wrap gap-4 mb-4 text-sm ${isEven ? "md:justify-end" : "md:justify-start"}`}>
                           <div className="flex items-center gap-1.5 text-neutral-300 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                              <Award className="w-4 h-4 text-[#00ff9c]" />
                              <span className="text-white font-semibold">{edu.score}</span>
                           </div>
                           <div className="flex items-center gap-1.5 text-neutral-400">
                              <Calendar className="w-4 h-4" />
                              <span>{edu.year}</span>
                           </div>
                        </div>

                        <p className="text-neutral-400 text-sm leading-relaxed">
                          {edu.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
