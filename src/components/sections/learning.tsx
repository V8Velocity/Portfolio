"use client";

import { motion } from "framer-motion";
import { Star, Award } from "lucide-react";
import { achievements } from "@/lib/data";

const iconMap = {
  star: Star,
  award: Award,
  trophy: Award,
} as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            <span className="font-mono text-[#00ff9c] mr-2 text-2xl">&lt;</span>
            Achievements & Training
            <span className="font-mono text-[#00ff9c] ml-2 text-2xl">/&gt;</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-[#00ff9c]" />
          <p className="mt-4 text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Milestones earned through consistent problem-solving practice and intensive training programs.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 gap-5 md:grid-cols-2"
        >
          {achievements.map((achievement) => {
            const Icon = iconMap[achievement.icon];

            return (
              <motion.div
                key={achievement.title}
                variants={cardVariants}
                whileHover={{
                  y: -6,
                  boxShadow: "0 12px 40px rgba(0, 0, 0, 0.5), 0 0 16px rgba(0, 255, 156,0.04)",
                  borderColor: "rgba(0, 255, 156,0.2)",
                  transition: { duration: 0.3 },
                }}
                className="glass-card group flex flex-col rounded-2xl p-8 transition-all h-full"
              >
                <div className="mb-6 flex flex-col gap-4">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#00ff9c]/10 border border-[#00ff9c]/20"
                    style={{ boxShadow: "0 0 10px rgba(0, 255, 156,0.1)" }}
                  >
                    <Icon className="h-6 w-6 text-[#00ff9c]" />
                  </div>
                  <h3 className="text-xl font-medium text-white tracking-tight">
                    {achievement.title}
                  </h3>
                </div>

                {/* Star rating visual */}
                {achievement.stars && (
                  <div className="mb-3 flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + i * 0.1, duration: 0.3, type: "spring" }}
                      >
                        <Star
                          className={`h-4 w-4 ${
                            i < achievement.stars!
                              ? "fill-[#00ff9c] text-[#00ff9c]"
                              : "text-neutral-700"
                          }`}
                          style={
                            i < achievement.stars!
                              ? { filter: "drop-shadow(0 0 4px rgba(0, 255, 156,0.5))" }
                              : undefined
                          }
                        />
                      </motion.div>
                    ))}
                  </div>
                )}

                <p className="text-sm leading-relaxed text-neutral-400">
                  {achievement.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
