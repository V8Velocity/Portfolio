"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { experience } from "@/lib/data";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const bulletVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.3 + i * 0.1,
      duration: 0.4,
      ease: "easeOut" as const,
    },
  }),
};

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 px-6">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full bg-[#00ff9c]/5 blur-[120px]" />
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
            Experience
            <span className="font-mono text-[#00ff9c] ml-2 text-2xl">/&gt;</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-[#00ff9c]" />
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative mt-8"
        >
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px sm:left-8 bg-gradient-to-b from-white/20 via-white/5 to-transparent" />

          {experience.map((exp, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative pl-8 sm:pl-24 mb-16 last:mb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-2 sm:left-8 -translate-x-1/2">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="flex h-5 w-5 items-center justify-center rounded-full border border-[#00ff9c]/50 bg-[#111111]"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-[#00ff9c]" />
                </motion.div>
              </div>

              {/* Card */}
              <motion.div
                whileHover={{
                  borderColor: "rgba(0, 255, 156, 0.2)",
                  boxShadow: "0 10px 40px rgba(0, 0, 0, 0.4)",
                  y: -2
                }}
                className="glass-card flex flex-col rounded-2xl p-8 sm:p-10 transition-all h-full"
              >
                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-medium tracking-tight text-white mb-3">
                    {exp.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-neutral-400 font-mono">
                    <span className="inline-flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-[#00ff9c]" />
                      <span className="text-neutral-300">{exp.company}</span>
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-[#00ff9c]" />
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="mb-8 text-base leading-relaxed text-neutral-400">
                  {exp.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-4 mb-8">
                  {exp.highlights.map((highlight, i) => (
                    <motion.li
                      key={i}
                      custom={i}
                      variants={bulletVariants}
                      className="flex items-start gap-4 text-sm sm:text-base text-neutral-300 leading-relaxed"
                    >
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00ff9c]/70" />
                      {highlight}
                    </motion.li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="mt-auto pt-6 border-t border-white/5 flex flex-wrap gap-2">
                  {exp.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-white/5 bg-white/[0.02] px-3 py-1.5 text-xs font-mono font-medium text-neutral-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
