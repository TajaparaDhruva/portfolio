import { motion } from "framer-motion";
import { FaCode, FaServer, FaShapes, FaTerminal } from "react-icons/fa6";

export default function AboutSection() {
  const expertise = [
    { icon: FaShapes, title: "Interfaces", desc: "Interactive Design" },
    { icon: FaServer, title: "Systems", desc: "Scalable Architecture" },
    { icon: FaCode, title: "logic", desc: "Clean Protocols" },
  ];

  return (
    <section id="about" className="relative w-full py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#020617]">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#d4a843]/5 blur-[150px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
        
        {/* Side Identity Label */}
        <div className="hidden xl:flex flex-col items-center gap-6 sticky top-40 pt-10">
           <span className="text-[9px] font-mono text-white/20 uppercase tracking-[1em] [writing-mode:vertical-lr] rotate-180">
             IDENTITY_PROTOCOL
           </span>
           <div className="w-px h-24 bg-gradient-to-b from-white/10 to-transparent" />
        </div>

        {/* Mosaic Grid System */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-5 auto-rows-min">
          
          {/* Main Identity Core */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-12 lg:col-span-7 bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-10 md:p-12 relative overflow-hidden group"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
               <div className="space-y-6 flex-1">
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4a843]" />
                    <span className="text-[10px] font-mono text-[#d4a843] uppercase tracking-[0.4em] font-black">Full Stack Developer</span>
                  </div>
                  <h2 className="text-5xl md:text-7xl font-heading font-black text-white uppercase tracking-tighter leading-none">
                    DHRUVA <br />
                    <span className="text-[#d4a843]">TAJAPARA</span>
                  </h2>
                  <p className="text-white/40 font-mono text-xs uppercase tracking-[0.4em] pt-2">
                    Systems Engineering & Full-stack Architecture
                  </p>
               </div>
            </div>
          </motion.div>

          {/* Technical Philosophy Block */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-12 lg:col-span-5 bg-[#0a0f1d] border border-white/10 rounded-[2.5rem] p-10 flex flex-col justify-between group overflow-hidden relative"
          >
             <FaTerminal className="absolute -bottom-10 -right-10 text-[12rem] text-white/[0.02] group-hover:text-white/[0.05] transition-all" />
             <div className="space-y-6 relative z-10">
                <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">Technical Philosophy</span>
                <p className="text-xl md:text-2xl font-heading font-medium text-white/90 leading-tight uppercase tracking-tight">
                  I engineer <span className="text-[#d4a843]">scalable</span> full-stack solutions that bridge the gap between complex backend logic and <span className="text-white">seamless user experiences.</span>
                </p>
             </div>
             <div className="flex gap-2 pt-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-6 h-1 bg-white/5 rounded-full overflow-hidden">
                     <motion.div 
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                        className="w-full h-full bg-[#d4a843]/50" 
                     />
                  </div>
                ))}
             </div>
          </motion.div>

          {/* Bottom Expertise Row */}
          <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
             {expertise.map((item, index) => (
               <motion.div
                 key={item.title}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.3 + index * 0.1 }}
                 className="bg-white/[0.02] border border-white/5 rounded-[2rem] p-8 flex flex-col gap-5 hover:border-[#d4a843]/20 transition-all hover:bg-white/[0.03] group"
               >
                 <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#d4a843] text-lg group-hover:scale-110 group-hover:bg-[#d4a843]/10 transition-all">
                    <item.icon />
                 </div>
                 <div>
                    <h4 className="text-xs font-heading font-black text-white uppercase tracking-wider">{item.title}</h4>
                    <p className="text-[9px] font-mono text-white/30 uppercase mt-1 leading-relaxed">{item.desc}</p>
                 </div>
               </motion.div>
             ))}
          </div>

        </div>
      </div>
    </section>
  );
}
