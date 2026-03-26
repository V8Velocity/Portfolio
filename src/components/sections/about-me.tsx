"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutMe() {
  return (
    <section id="about-me" className="py-24 sm:py-32 bg-black font-sans relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: The Narrative */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col"
        >
          <h2 className="text-2xl font-mono text-white mb-6 flex items-center gap-2">
            <span className="text-[#00ff41]">&lt;</span>
            whoami
            <span className="text-[#00ff41]">&gt;</span>
          </h2>
          
          <p className="text-zinc-300 leading-relaxed text-lg">
            Still learning, always building. As a third-year computer science student, I spend my time bridging the gap between core computing fundamentals and modern full-stack development. I build mostly with React and Node.js, but my real focus is on{" "}
            <span className="text-[#00ff41] font-medium">rapid adaptation</span>
            —learning how to learn. It’s a constant process of breaking things and fixing them, but my absolute favorite part of the journey is that rewarding moment when the{" "}
            <span className="text-[#00ff41] font-medium">error logs finally go quiet</span>{" "}
            and everything just clicks into place.
          </p>
        </motion.div>

        {/* Right Column: The Status Card / Terminal Window */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col"
        >
          <div className="bg-zinc-900/40 rounded-xl border border-zinc-800 shadow-2xl overflow-hidden backdrop-blur-sm">
            {/* Mock Window Header */}
            <div className="bg-zinc-900 px-4 py-3 flex items-center border-b border-zinc-800">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-6 sm:p-8 flex flex-col gap-8">
              <div className="font-mono text-[#00ff41]/80 text-sm">
                &gt; CURRENT_ENVIRONMENT
              </div>
              
              {/* University Logo */}
              <div className="relative w-24 h-12 sm:w-32 sm:h-16 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-500">
                <Image
                  src="/784dc92f1b193133087de93a315ac694.jpg"
                  alt="University Logo"
                  fill
                  className="object-contain object-left"
                  sizes="(max-width: 768px) 96px, 128px"
                />
              </div>

              {/* Status Lines */}
              <div className="flex flex-col gap-3 font-mono text-sm sm:text-base">
                <div className="flex">
                  <span className="text-zinc-500 w-24 sm:w-32 shrink-0">ROLE</span>
                  <span className="text-white break-words">: Full-Stack Developer</span>
                </div>
                <div className="flex">
                  <span className="text-zinc-500 w-24 sm:w-32 shrink-0">EDUCATION</span>
                  <span className="text-white break-words">: B.Tech Computer Science Engineering</span>
                </div>
                <div className="flex">
                  <span className="text-zinc-500 w-24 sm:w-32 shrink-0">LEVEL</span>
                  <span className="text-[#00ff41] break-words">: Year 03</span>
                </div>
                <div className="flex">
                  <span className="text-zinc-500 w-24 sm:w-32 shrink-0">STATUS</span>
                  <span className="text-[#00ff41] break-words">: Active Learner</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
