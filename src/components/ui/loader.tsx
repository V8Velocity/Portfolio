"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Monitor, Shield, CheckCircle, Lock, Cpu, Server, Terminal } from "lucide-react";

// Helper to scramble/decrypt text
const useScrambleText = (targetText: string, delay: number = 0, speed: number = 30) => {
  const [displayText, setDisplayText] = useState("");
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;':,./<>?";

  useEffect(() => {
    let iteration = 0;
    let interval: NodeJS.Timeout;

    const startTimeout = setTimeout(() => {
      interval = setInterval(() => {
        setDisplayText((prev) => 
          targetText
            .split("")
            .map((char, index) => {
              if (index < iteration) {
                return targetText[index];
              }
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("")
        );

        if (iteration >= targetText.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3; // Slow down the reveal
      }, speed);
    }, delay);

    return () => {
      clearTimeout(startTimeout);
      clearInterval(interval);
    };
  }, [targetText, delay, speed]);

  return displayText;
};

// Main Loader Component
export default function CyberLoader({ onFinish }: { onFinish: () => void }) {
  const [progress, setProgress] = useState(0);
  const [currentLine, setCurrentLine] = useState(0);
  const [showAccess, setShowAccess] = useState(false);
  
  const consoleLines = [
    { text: "Initializing SHIVAM.OS kernel...", status: "OK", delay: 0 },
    { text: "Loading neural interface modules...", status: "OK", delay: 600 },
    { text: "Verifying developer credentials...", status: "OK", delay: 1200 },
    { text: "Syncing GitHub repositories...", status: "SYNCED", delay: 1800 },
    { text: "Optimizing render pipeline...", status: "DONE", delay: 2400 },
  ];

  // Scramble main title
  const title = useScrambleText("SHIVAM // SOFTWARE ENGINEER", 3000);

  useEffect(() => {
    // Progress Bar Animation
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        // Random increments for realism
        const increment = Math.random() * 2.5; 
        return Math.min(prev + increment, 100);
      });
    }, 50);

    // Console Lines Animation
    consoleLines.forEach((_, index) => {
      setTimeout(() => {
        setCurrentLine(index + 1);
      }, _.delay);
    });

    // Access Granted Trigger
    setTimeout(() => setShowAccess(true), 3200);

    // Finish Trigger
    setTimeout(() => {
      onFinish();
    }, 4500); // Total duration

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        key="loader"
        initial={{ opacity: 1 }}
        exit={{ 
          opacity: 0, 
          filter: "blur(10px)",
          scale: 1.1,
          transition: { duration: 0.8, ease: "easeInOut" }
        }}
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505] overflow-hidden text-[#00ff9c] font-mono"
      >
        {/* CRT Scanline & Vignette Effects */}
        <div className="absolute inset-0 pointer-events-none z-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,6px_100%]" />
        <div className="absolute inset-0 pointer-events-none z-10 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.6)_100%)]" />
        
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-[0.03] bg-[size:50px_50px] bg-[linear-gradient(to_right,#00ff9c_1px,transparent_1px),linear-gradient(to_bottom,#00ff9c_1px,transparent_1px)]" />
        
        <div className="relative z-30 w-full max-w-2xl px-6 flex flex-col gap-8">
          
          {/* Main Logo / Title Area */}
          <div className="flex flex-col items-center gap-6 mb-8 text-center">
            {/* Spinning Core */}
            <div className="relative w-24 h-24 mb-4">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-t-2 border-b-2 border-[#00ff9c] opacity-80"
              />
              <motion.div 
                animate={{ rotate: -180 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-2 rounded-full border-r-2 border-l-2 border-[#00ff9c] opacity-50"
              />
              <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-8 rounded-full bg-[#00ff9c] blur-md"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Cpu className="w-8 h-8 text-black relative z-10" />
              </div>
            </div>

            {/* Decrypting Title */}
            <h1 className="text-2xl sm:text-3xl font-bold tracking-widest h-8 text-shadow-glow">
              {title}
              <span className="animate-pulse">_</span>
            </h1>
          </div>

          {/* Console Output */}
          <div className="bg-black/40 border border-[#00ff9c]/20 rounded-lg p-6 font-mono text-sm h-48 overflow-hidden relative shadow-[0_0_30px_rgba(0,255,156,0.05)] backdrop-blur-sm">
            <div className="flex flex-col gap-2">
              {consoleLines.map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ 
                    opacity: currentLine > index ? 1 : 0.5, 
                    x: currentLine > index ? 0 : -10,
                    color: currentLine > index ? "#00ff9c" : "#005533" 
                  }}
                  className="flex justify-between items-center"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-[#00ff9c]/50">➜</span> 
                    {line.text}
                  </span>
                  {currentLine > index && (
                    <motion.span 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-[#00ff9c] font-bold text-xs bg-[#00ff9c]/10 px-2 py-0.5 rounded"
                    >
                      [{line.status}]
                    </motion.span>
                  )}
                </motion.div>
              ))}
            </div>
            
            {/* Scanline overlay inside console */}
            <div className="absolute inset-0 bg-transparent pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] opacity-20" />
          </div>

          {/* Progress Bar */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between text-xs uppercase tracking-widest opacity-60">
              <span>System Loading</span>
              <span>{Math.floor(progress)}%</span>
            </div>
            <div className="h-2 w-full bg-[#00ff9c]/10 rounded-full overflow-hidden border border-[#00ff9c]/20">
              <motion.div
                className="h-full bg-[#00ff9c] shadow-[0_0_15px_#00ff9c]"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Access Granted Notification */}
          <AnimatePresence>
            {showAccess && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="absolute bottom-12 left-0 right-0 flex justify-center"
              >
                <div className="bg-[#00ff9c]/10 border border-[#00ff9c] text-[#00ff9c] px-6 py-2 rounded-full flex items-center gap-3 backdrop-blur-md shadow-[0_0_20px_rgba(0,255,156,0.3)]">
                  <Shield className="w-5 h-5" />
                  <span className="font-bold tracking-widest">ACCESS GRANTED</span>
                  <CheckCircle className="w-5 h-5" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}