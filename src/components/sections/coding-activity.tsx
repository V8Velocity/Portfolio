"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { Github, Code2 } from "lucide-react";

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  { ssr: false }
);

const GITHUB_USERNAME = "V8Velocity";
const LEETCODE_USERNAME = "ripelabrador";

// Matrix green theme for GitHub calendar
const matrixTheme = {
  dark: ["black", "#003d1f", "#005c2e", "#00993d", "white"],
};

export default function CodingActivity() {
  return (
    <section id="coding-activity" className="py-28 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            <span className="font-mono text-[#00ff9c] mr-2 text-2xl">
              &lt;
            </span>
            Coding Activity
            <span className="font-mono text-[#00ff9c] ml-2 text-2xl">
              /&gt;
            </span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-[#00ff9c]" />
          <p className="mt-4 text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Consistency is key — my contribution graphs across GitHub and
            LeetCode.
          </p>
        </motion.div>

        {/* Side-by-side grid */}
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
          {/* ── GitHub ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            whileHover={{
              borderColor: "rgba(0, 255, 156,0.3)",
              boxShadow: "0 0 30px rgba(0, 255, 156,0.08)",
            }}
            className="glass-card rounded-2xl p-8 transition-all flex flex-col"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#00ff9c]/10 border border-[#00ff9c]/20">
                <Github className="h-5 w-5 text-[#00ff9c]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  GitHub Contributions
                </h3>
                <a
                  href={`https://github.com/${GITHUB_USERNAME}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-mono text-[#00ff9c]/70 hover:text-[#00ff9c] transition-colors"
                >
                  @{GITHUB_USERNAME}
                </a>
              </div>
            </div>

            <div className="overflow-x-auto flex-1 flex items-center">
              <GitHubCalendar
                username={GITHUB_USERNAME}
                colorScheme="dark"
                theme={matrixTheme}
                blockSize={11}
                blockMargin={3}
                fontSize={12}
                style={{ width: "100%" }}
              />
            </div>
          </motion.div>

          {/* ── LeetCode ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{
              borderColor: "rgba(0, 255, 156,0.3)",
              boxShadow: "0 0 30px rgba(0, 255, 156,0.08)",
            }}
            className="glass-card rounded-2xl p-8 transition-all flex flex-col"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#00ff9c]/10 border border-[#00ff9c]/20">
                <Code2 className="h-5 w-5 text-[#00ff9c]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  LeetCode Progress
                </h3>
                <a
                  href={`https://leetcode.com/u/${LEETCODE_USERNAME}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-mono text-[#00ff9c]/70 hover:text-[#00ff9c] transition-colors"
                >
                  @{LEETCODE_USERNAME}
                </a>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-[#00ff9c]/20 flex-1">
              <iframe
                src={`https://leetcard.jacoblin.cool/${LEETCODE_USERNAME}?theme=dark&font=JetBrains%20Mono&ext=heatmap&border=0`}
                width="100%"
                height="100%"
                style={{
                  border: "none",
                  background: "transparent",
                  minHeight: "320px",
                }}
                title="LeetCode Stats"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
