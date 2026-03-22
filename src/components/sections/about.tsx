"use client";

import { motion } from "framer-motion";
import { Code2, Layout, Database, Lightbulb } from "lucide-react";
import { skills } from "@/lib/data";

const iconMap = {
  code: Code2,
  framework: Layout,
  database: Database,
  brain: Lightbulb,
} as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

const pillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" as const },
  },
};

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      {/* subtle top divider */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00ff9c]/20 to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* ---- section heading ---- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            <span className="font-mono text-[#00ff9c] mr-2 text-2xl">&lt;</span>
            Skills & Expertise
            <span className="font-mono text-[#00ff9c] ml-2 text-2xl">/&gt;</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-[#00ff9c]" />
          <p className="mt-4 text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Core technologies and competencies I leverage to build production-grade applications.
          </p>
        </motion.div>

        {/* ---- skills grid ---- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {skills.map((category) => {
            const Icon = iconMap[category.icon];

            return (
              <motion.div
                key={category.name}
                variants={cardVariants}
                whileHover={{
                  y: -4,
                  boxShadow: "0 10px 40px rgba(0, 0, 0, 0.4), 0 0 15px rgba(0, 255, 156,0.03)",
                  borderColor: "rgba(0, 255, 156,0.2)",
                  transition: { duration: 0.3 },
                }}
                className="glass-card flex flex-col rounded-2xl p-6 transition-all h-full"
              >
                {/* Category header */}
                <div className="mb-6 flex flex-col gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#00ff9c]/10 to-transparent border border-[#00ff9c]/20">
                    <Icon className="h-5 w-5 text-[#00ff9c]" />
                  </div>
                  <h3 className="text-lg font-medium tracking-tight text-white">
                    {category.name}
                  </h3>
                </div>

                {/* Skill pills */}
                <motion.div
                  variants={containerVariants}
                  className="flex flex-wrap gap-2 mt-auto"
                >
                  {category.items.map((skill) => (
                    <motion.span
                      key={skill}
                      variants={pillVariants}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 0 12px rgba(0, 255, 156,0.1)",
                        borderColor: "rgba(0, 255, 156,0.3)",
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      className="cursor-default rounded-md border border-white/5 bg-white/[0.02] px-3 py-1.5 text-xs font-medium text-neutral-300 transition-all font-mono hover:text-[#00ff9c] hover:bg-[#00ff9c]/5"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
