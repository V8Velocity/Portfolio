"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Code2, ExternalLink, Activity, Trophy } from "lucide-react";
import Image from "next/image";

type LeetCodeStats = {
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  ranking: number;
};

export default function DeveloperProfile() {
  const [lcStats, setLcStats] = useState<LeetCodeStats | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch LeetCode stats
  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch("https://leetcode-api-faisalshohag.vercel.app/ripelabrador");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setLcStats({
          totalSolved: data.totalSolved || 0,
          totalQuestions: data.totalQuestions || 3000,
          easySolved: data.easySolved || 0,
          mediumSolved: data.mediumSolved || 0,
          hardSolved: data.hardSolved || 0,
          ranking: data.ranking || 0,
        });
      } catch (error) {
        console.error("LeetCode fetch error:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchStats();
  }, []);

  return (
    <section id="developer-profile" className="py-24 px-6 relative">
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
            Developer Identity
            <span className="font-mono text-[#00ff9c] ml-2 text-2xl">/&gt;</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-[#00ff9c]" />
          <p className="mt-4 text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Continuous technical growth mapped via Open Source contributions and rigorous DSA practice.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:gap-8 grid-cols-1 lg:grid-cols-2 max-w-5xl mx-auto">
          {/* GitHub Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col h-full rounded-2xl p-6 lg:p-8 bg-zinc-900/50 border border-zinc-800 transition-all duration-300 hover:border-emerald-500/30"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-full overflow-hidden border border-white/10 p-1 flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src="https://github.com/V8Velocity.png" 
                    alt="V8Velocity GitHub Avatar" 
                    width={56} 
                    height={56} 
                    className="rounded-full object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                    V8Velocity <Github className="h-4 w-4 text-neutral-500" />
                  </h3>
                  <span className="text-xs font-mono text-[#00ff9c] uppercase tracking-widest">GitHub Profile</span>
                </div>
              </div>
              <a 
                href="https://github.com/V8Velocity" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-center h-10 w-10 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-colors"
                aria-label="View GitHub"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
            
            <p className="text-neutral-400 text-sm leading-relaxed mb-8 border-l-2 border-[#00ff9c]/30 pl-4">
              Explore my code, experiments, and full-stack development work on GitHub, including practical projects, backend systems, and modern web implementations.
            </p>

            <div className="mt-auto">
              <div className="flex items-center gap-2 mb-4 text-xs font-mono text-neutral-500 uppercase tracking-widest">
                <Activity className="h-3.5 w-3.5 text-[#00ff9c]" />
                Contribution Heatmap
              </div>
              <div className="w-full overflow-x-auto custom-scrollbar bg-black/40 border border-zinc-800/50 rounded-xl p-4">
                <div className="min-w-[650px] pr-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src="https://ghchart.rshah.org/10b981/V8Velocity" 
                    alt="GitHub Contribution Chart"
                    className="w-full opacity-90 transition-opacity hover:opacity-100"
                    style={{ filter: "hue-rotate(240deg) brightness(0.9) contrast(1.2) invert(1)" }}
                  />
                  {/* The ghchart natively generates green for hex but without dark mode background. We invert it locally via CSS filter trick. */}
                </div>
              </div>
            </div>
          </motion.div>

          {/* LeetCode Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col h-full rounded-2xl p-6 lg:p-8 bg-zinc-900/50 border border-zinc-800 transition-all duration-300 hover:border-emerald-500/30"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-[#00ff9c]/10 to-transparent border border-[#00ff9c]/20">
                  <Code2 className="h-7 w-7 text-[#00ff9c]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                    ripelabrador
                  </h3>
                  <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">LeetCode & DSA</span>
                </div>
              </div>
              <a 
                href="https://leetcode.com/u/ripelabrador/" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-center h-10 w-10 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-colors"
                aria-label="View LeetCode"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            <p className="text-neutral-400 text-sm leading-relaxed mb-8 border-l-2 border-[#00ff9c]/30 pl-4">
              A consistent record of problem-solving practice across data structures, algorithms, and coding fundamentals, reflecting analytical thinking and implementation discipline.
            </p>

            <div className="mt-auto space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 uppercase tracking-widest">
                <Trophy className="h-3.5 w-3.5 text-emerald-400" />
                Algorithmic Metrics
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black/40 border border-zinc-800/50 rounded-lg p-4 flex flex-col items-center justify-center">
                  <span className="text-[10px] text-neutral-500 font-mono uppercase tracking-widest mb-1">Total Solved</span>
                  {loading ? (
                    <div className="h-8 w-16 bg-zinc-800 animate-pulse rounded" />
                  ) : (
                    <span className="text-3xl font-bold text-white font-mono">{lcStats?.totalSolved || "—"}</span>
                  )}
                </div>
                <div className="bg-black/40 border border-zinc-800/50 rounded-lg p-4 flex flex-col items-center justify-center">
                  <span className="text-[10px] text-neutral-500 font-mono uppercase tracking-widest mb-1">Global Rank</span>
                  {loading ? (
                    <div className="h-8 w-16 bg-zinc-800 animate-pulse rounded" />
                  ) : (
                    <span className="text-3xl font-bold text-emerald-400 font-mono">
                      {lcStats?.ranking ? `#${(lcStats.ranking / 1000).toFixed(1)}k` : "—"}
                    </span>
                  )}
                </div>
              </div>

              {/* Progress Bars */}
              <div className="space-y-3 pt-2">
                {[
                  { label: "Easy", count: lcStats?.easySolved, total: 800, color: "bg-teal-500" },
                  { label: "Medium", count: lcStats?.mediumSolved, total: 1700, color: "bg-orange-400" },
                  { label: "Hard", count: lcStats?.hardSolved, total: 700, color: "bg-red-500" },
                ].map((tier) => (
                  <div key={tier.label} className="flex items-center gap-4">
                    <span className="text-xs font-medium w-12 text-neutral-400">{tier.label}</span>
                    <div className="flex-1 h-1.5 rounded-full bg-zinc-800 overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: loading || !tier.count ? "0%" : `${Math.min((tier.count / tier.total) * 100, 100)}%` }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className={`h-full rounded-full ${tier.color}`} 
                      />
                    </div>
                    <span className="text-xs font-mono w-8 text-right text-neutral-300">
                      {loading ? "-" : tier.count || 0}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
