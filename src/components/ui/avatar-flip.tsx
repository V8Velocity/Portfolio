"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Terminal } from "lucide-react";
import Image from "next/image";

export default function AvatarFlip() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="relative w-64 h-64 sm:w-80 sm:h-80 perspective-1000">
      <motion.div
        className="w-full h-full relative preserve-3d cursor-pointer"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        onClick={handleFlip}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side - Digital Avatar */}
        <div 
          className="absolute inset-0 w-full h-full backface-hidden rounded-full overflow-hidden border-4 border-[#00ff9c]/50 shadow-[0_0_50px_rgba(0,255,156,0.3)] bg-[#111111]"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-neutral-900 to-black relative">
             <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
             {/* Placeholder for Digital Avatar - using an icon for now or a generic avatar URL */}
             <div className="relative z-10 flex flex-col items-center gap-4">
                <div className="p-6 rounded-full bg-[#00ff9c]/10 border border-[#00ff9c]/20">
                  <Terminal className="w-16 h-16 text-[#00ff9c]" />
                </div>
                <span className="text-[#00ff9c] font-mono text-sm tracking-widest">&lt;DIGITAL /&gt;</span>
             </div>
             
             {/* Scanlines effect */}
             <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-20 bg-[length:100%_4px,6px_100%] pointer-events-none" />
          </div>
          
          <AnimatePresence>
            {isHovering && !isFlipped && (
               <motion.div 
                 initial={{ opacity: 0 }} 
                 animate={{ opacity: 1 }} 
                 exit={{ opacity: 0 }}
                 className="absolute bottom-4 left-0 right-0 text-center z-30"
               >
                 <span className="text-xs text-white/50 bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">Click to Reveal</span>
               </motion.div>
            )}
           </AnimatePresence>
        </div>

        {/* Back Side - Real Picture */}
        <div
          className="absolute inset-0 w-full h-full backface-hidden rounded-full overflow-hidden border-4 border-white/20 shadow-2xl bg-neutral-800"
          style={{ 
            backfaceVisibility: "hidden", 
            transform: "rotateY(180deg)" 
          }}
        >
          <div className="w-full h-full relative">
            <Image 
              src="https://github.com/V8Velocity.png" 
              alt="Real Picture" 
              fill
              className="object-cover"
              sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
             <div className="absolute bottom-6 left-0 right-0 text-center">
                 <span className="text-white font-semibold tracking-wide">Shivam</span>
             </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}