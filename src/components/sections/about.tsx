"use client";

import { motion } from "framer-motion";
import { Code2, Layout, Database, Lightbulb, Globe, Settings, Cpu, Layers } from "lucide-react";
import { skills } from "@/lib/data";
import Image from "next/image";

const iconMap = {
  code: Code2,
  framework: Layout,
  database: Database,
  brain: Lightbulb,
} as const;

// Helper to get skill icon URL or component
const getSkillIcon = (skillName: string) => {
  const iconUrls: Record<string, string> = {
    "TypeScript": "https://cdn.simpleicons.org/typescript/3178C6",
    "JavaScript": "https://cdn.simpleicons.org/javascript/F7DF1E",
    "Python": "https://cdn.simpleicons.org/python/3776AB",
    "C++": "https://cdn.simpleicons.org/cplusplus/00599C",
    "Java": "https://cdn.simpleicons.org/openjdk/white",
    "PHP": "https://cdn.simpleicons.org/php/777BB4",
    
    "React.js": "https://cdn.simpleicons.org/react/61DAFB",
    "Next.js": "https://cdn.simpleicons.org/nextdotjs/white",
    "Tailwind CSS": "https://cdn.simpleicons.org/tailwindcss/06B6D4",
    "Framer Motion": "https://cdn.simpleicons.org/framer/white",
    "GSAP": "https://cdn.simpleicons.org/greensock/88CE02",
    
    "Node.js": "https://cdn.simpleicons.org/nodedotjs/339933",
    "Express": "https://cdn.simpleicons.org/express/white",
    "Flask": "https://cdn.simpleicons.org/flask/white",
    "MySQL": "https://cdn.simpleicons.org/mysql/4479A1",
    "MongoDB": "https://cdn.simpleicons.org/mongodb/47A248",
    
    "Vercel": "https://cdn.simpleicons.org/vercel/white",
    "Render": "https://cdn.simpleicons.org/render/white",
    "PostgreSQL": "https://cdn.simpleicons.org/postgresql/4169E1",
    "Docker": "https://cdn.simpleicons.org/docker/2496ED",
  };

  const manualIcons: Record<string, any> = {
    "REST APIs": Globe,
    "WebSocket": Settings,
    "System Design": Layers,
    "Microservices": Cpu,
  };

  if (iconUrls[skillName]) {
    return { type: 'img', src: iconUrls[skillName] };
  }
  
  if (manualIcons[skillName]) {
    return { type: 'icon', Icon: manualIcons[skillName] };
  }

  return { type: 'icon', Icon: Code2 }; // Default
};

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

                {/* Skill pills with logos */}
                <motion.div
                  variants={containerVariants}
                  className="flex flex-wrap gap-2 mt-auto"
                >
                  {category.items.map((skill) => {
                    const { type, src, Icon: SkillIcon } = getSkillIcon(skill);
                    return (
                      <motion.span
                        key={skill}
                        variants={pillVariants}
                        whileHover={{
                          scale: 1.05,
                          boxShadow: "0 0 15px rgba(0, 255, 156,0.15)",
                          borderColor: "rgba(0, 255, 156,0.4)",
                          backgroundColor: "rgba(0, 255, 156, 0.05)"
                        }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        className="group flex items-center gap-2 cursor-default rounded-md border border-white/5 bg-white/[0.02] px-3 py-1.5 text-xs font-medium text-neutral-300 transition-all font-mono hover:text-white"
                      >
                        {type === 'img' ? (
                          <div className="relative w-3.5 h-3.5 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0">
                            <img 
                              src={src} 
                              alt={skill} 
                              className="w-full h-full object-contain" 
                              loading="lazy"
                            />
                          </div>
                        ) : (
                          <SkillIcon className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 group-hover:text-[#00ff9c] transition-all" />
                        )}
                        <span>{skill}</span>
                      </motion.span>
                    );
                  })}
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
