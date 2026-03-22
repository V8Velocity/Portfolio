"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Award, BookOpen, School } from "lucide-react";
import { education } from "@/lib/data";

const iconMap = [GraduationCap, BookOpen, School];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Education() {
  return (
    <section id="education" className="relative py-24 px-6">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#00ff9c]/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            <span className="font-mono text-[#00ff9c] mr-2 text-2xl">&lt;</span>
            Education
            <span className="font-mono text-[#00ff9c] ml-2 text-2xl">/&gt;</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-[#00ff9c]" />
        </motion.div>

        {/* Education grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 md:grid-cols-3"
        >
          {education.map((edu, index) => {
            const Icon = iconMap[index] || GraduationCap;

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -6,
                  borderColor: "rgba(0, 255, 156,0.2)",
                  boxShadow: "0 12px 40px rgba(0, 0, 0, 0.5), 0 0 16px rgba(0, 255, 156,0.04)",
                  transition: { duration: 0.3 },
                }}
                className="glass-card flex flex-col items-center text-center rounded-2xl p-8 sm:p-10 transition-all h-full"
              >
                {/* Icon */}
                <div className="mb-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
                    className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#00ff9c]/10 border border-[#00ff9c]/20"
                    style={{ boxShadow: "0 0 15px rgba(0, 255, 156,0.1)" }}
                  >
                    <Icon className="h-8 w-8 text-[#00ff9c]" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-medium text-[#00ff9c] mb-1 font-mono">
                    {edu.field}
                  </p>
                  <div className="flex items-center justify-center gap-1.5 text-neutral-400 mb-5">
                    <MapPin className="h-3.5 w-3.5" />
                    <p className="text-xs">{edu.institution}</p>
                  </div>

                  {/* Divider */}
                  <div className="mx-auto mb-5 h-px w-16 bg-gradient-to-r from-transparent via-[#00ff9c]/30 to-transparent" />

                  {/* CGPA & Status */}
                  <div className="flex items-center justify-center gap-6">
                    <div className="text-center">
                      <div className="flex items-center gap-1.5 text-neutral-500 mb-1">
                        <Award className="h-3 w-3" />
                        <span className="text-[10px] uppercase tracking-widest font-mono">
                          {edu.cgpa.includes("%") ? "Score" : "CGPA"}
                        </span>
                      </div>
                      <p className="text-xl font-bold neon-text font-mono">
                        {edu.cgpa}
                      </p>
                    </div>
                    <div className="h-8 w-px bg-[#00ff9c]/15" />
                    <div className="text-center">
                      <div className="text-[10px] uppercase tracking-widest text-neutral-500 mb-1 font-mono">
                        Status
                      </div>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-[#00ff9c]/20 bg-[#00ff9c]/10 px-2.5 py-0.5 text-xs font-mono font-medium text-[#00ff9c]">
                        {edu.status === "Pursuing" && (
                          <span
                            className="h-1.5 w-1.5 rounded-full bg-[#00ff9c] animate-pulse"
                            style={{ boxShadow: "0 0 6px rgba(0, 255, 156,0.6)" }}
                          />
                        )}
                        {edu.status}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
