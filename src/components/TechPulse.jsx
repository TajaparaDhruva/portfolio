import { motion } from "framer-motion";

export default function TechPulse() {
  const stats = [
    { label: "Status", value: "Available", color: "bg-green-500" },
    { label: "Learning", value: "Web 3.0", color: "bg-[#d4a843]" },
    { label: "Active", value: "Bhavnagar, IN", color: "bg-blue-500" },
  ];

  return (
    <div className="fixed bottom-8 left-8 z-[90] hidden xl:block">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5 }}
        className="bg-[#0b1221]/80 backdrop-blur-2xl p-4 rounded-2xl border border-white/5 shadow-2xl flex flex-col gap-3"
      >
        <div className="flex items-center gap-2 mb-1 px-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#d4a843] animate-pulse" />
          <span className="text-[10px] text-white/40 font-black uppercase tracking-[0.2em]">Live Status</span>
        </div>

        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col gap-1">
            <div className="flex items-center justify-between gap-8">
              <span className="text-[9px] text-white/20 font-bold uppercase tracking-widest">{stat.label}</span>
              <div className={`w-1 h-1 rounded-full ${stat.color} shadow-[0_0_5px_currentColor]`} />
            </div>
            <span className="text-[11px] text-white/70 font-mono font-medium">{stat.value}</span>
          </div>
        ))}

        <div className="mt-2 h-1 w-full bg-white/5 rounded-full overflow-hidden">
           <motion.div 
             animate={{ x: ["-100%", "100%"] }}
             transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
             className="w-1/2 h-full bg-gradient-to-r from-transparent via-[#d4a843]/50 to-transparent"
           />
        </div>
      </motion.div>
    </div>
  );
}
