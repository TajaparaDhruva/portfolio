import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function IntroScreen({ onComplete }) {
  const [show, setShow] = useState(true);
  const [scramble, setScramble] = useState("DHRUVA");

  useEffect(() => {
    // Scramble effect for the name
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let iterations = 0;
    
    const interval = setInterval(() => {
      setScramble((prev) => 
        prev.split("").map((_, index) => {
          if (index < iterations) return "DHRUVA"[index];
          return chars[Math.floor(Math.random() * chars.length)];
        }).join("")
      );

      iterations += 1/3;
      if (iterations >= 6) clearInterval(interval);
    }, 40);

    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(onComplete, 1000);
    }, 2800);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#020617] overflow-hidden"
        >
          {/* Central Portal Core */}
          <div className="relative">
             {/* Rotating Rings */}
             <motion.div
               animate={{ rotate: 360 }}
               transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-[#d4a843]/10 border-dashed"
             />
             <motion.div
               animate={{ rotate: -360 }}
               transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full border border-white/5"
             />

             {/* Main Identification Module */}
             <div className="relative flex flex-col items-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-4 text-center"
                >
                   <div className="flex items-center justify-center gap-4 mb-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#d4a843] animate-pulse" />
                      <span className="text-[10px] font-mono text-[#d4a843] uppercase tracking-[1em] font-black pl-[1em]">Identity_Lock</span>
                   </div>
                   
                   <h1 className="text-7xl md:text-9xl font-heading font-black text-white leading-none uppercase tracking-tighter">
                      {scramble}
                   </h1>

                   <motion.div
                     initial={{ width: 0 }}
                     animate={{ width: "100%" }}
                     transition={{ delay: 0.8, duration: 1.5, ease: "easeInOut" }}
                     className="h-px bg-gradient-to-r from-transparent via-[#d4a843] to-transparent"
                   />

                   <p className="text-[10px] font-mono text-white/20 uppercase tracking-[0.5em] pt-4">
                      Establishing_Secure_Interface
                   </p>
                </motion.div>
             </div>

             {/* Corner Accents */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none">
                <div className="absolute top-0 left-0 w-20 h-20 border-t border-l border-[#d4a843]/20" />
                <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-[#d4a843]/20" />
                <div className="absolute bottom-0 left-0 w-20 h-20 border-b border-l border-[#d4a843]/20" />
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b border-r border-[#d4a843]/20" />
             </div>
          </div>

          {/* Background Ambient Pulses */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,168,67,0.03)_0%,transparent_70%)]" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
