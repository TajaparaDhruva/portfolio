import { motion } from "framer-motion";
import { FaGraduationCap, FaQrcode, FaCheckCircle, FaAward } from "react-icons/fa";
import { education } from "../data/education";

export default function EducationSection() {
  return (
    <section id="education" className="relative bg-[#020617] py-40 overflow-hidden w-full px-6 lg:px-12">
      
      {/* Structural Blueprint Lines */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-white" />
        <div className="absolute top-1/4 left-0 w-full h-px bg-white" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        
        {/* Editorial Header */}
        <div className="mb-32 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
           <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                 <span className="px-3 py-1 bg-[#d4a843]/10 text-[#d4a843] text-[9px] font-black tracking-[0.4em] uppercase border border-[#d4a843]/20">Protocol_7.1</span>
                 <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.5em]">Academic_Blueprint</span>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-7xl md:text-[10rem] font-heading font-black text-white leading-[0.8] uppercase tracking-tighter"
              >
                STUDY <br />
                <span className="text-[#d4a843]">PATH</span>
              </motion.h2>
           </div>
           
           <div className="max-w-xs text-right">
              <p className="text-white/40 text-xs font-mono uppercase tracking-widest leading-relaxed">
                 A chronological decomposition of technical milestones and institutional foundations.
              </p>
           </div>
        </div>

        {/* Milestone Stack */}
        <div className="space-y-32">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative group grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
            >
              {/* Background Year Anchor */}
              <div className="absolute -left-20 top-1/2 -translate-y-1/2 text-[15vw] font-black text-white/[0.02] uppercase select-none pointer-events-none tracking-tighter hidden lg:block">
                {edu.year.slice(0, 4)}
              </div>

              {/* ID Badge Module */}
              <div className="lg:col-span-5 relative">
                 <div className="relative aspect-video rounded-3xl overflow-hidden bg-white/[0.02] border border-white/5 p-8 flex flex-col justify-between hover:border-[#d4a843]/30 transition-all duration-700 backdrop-blur-3xl shadow-2xl">
                    <div className="flex justify-between items-start">
                       <div className="w-12 h-12 rounded-xl bg-[#d4a843]/5 border border-[#d4a843]/20 flex items-center justify-center text-[#d4a843]">
                          <FaGraduationCap size={24} />
                       </div>
                       <div className="text-right">
                          <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest block">Reference_ID</span>
                          <span className="text-[10px] font-mono text-white font-black">ARCH_0{index + 1}</span>
                       </div>
                    </div>
                    
                    <div className="space-y-2">
                       <span className="text-[10px] font-mono text-[#d4a843] uppercase tracking-[0.4em] font-black">{edu.year}</span>
                       <h3 className="text-2xl font-heading font-black text-white uppercase leading-tight group-hover:tracking-wider transition-all duration-500">{edu.degree}</h3>
                    </div>

                    <div className="flex justify-between items-end border-t border-white/5 pt-6">
                       <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]" />
                          <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest leading-none">Status: Validated</span>
                       </div>
                       <FaQrcode size={32} className="text-white/5 group-hover:text-[#d4a843]/20 transition-colors" />
                    </div>
                 </div>
              </div>

              {/* Detailed Content Module */}
              <div className="lg:col-span-7 space-y-8 pl-0 lg:pl-12">
                 <div className="space-y-4">
                    <div className="flex items-center gap-4">
                       <div className="w-1.5 h-1.5 rounded-full bg-[#d4a843]" />
                       <h4 className="text-[#d4a843] text-xl font-black uppercase tracking-tight">{edu.institution}</h4>
                    </div>
                    <p className="text-white/40 text-lg leading-relaxed font-medium max-w-xl">
                       {edu.description}
                    </p>
                 </div>

                 <div className="flex flex-wrap gap-12">
                    <div className="space-y-1">
                       <p className="text-white/20 text-[9px] font-mono uppercase tracking-widest">Performance</p>
                       <p className="text-2xl font-black text-white tracking-tighter underline underline-offset-8 decoration-[#d4a843]/40">{edu.grade}</p>
                    </div>
                    
                    <div className="flex items-center gap-4 px-6 border border-white/5 rounded-2xl bg-white/[0.01]">
                       <FaAward className="text-[#d4a843]" />
                       <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest">Institutional Honors Certified</span>
                    </div>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Identity Strip */}
        <div className="mt-40 pt-20 border-t border-white/5 flex flex-col items-center gap-6">
           <span className="text-[9px] font-mono text-white/10 uppercase tracking-[1em]">Knowledge_Continuity_Archive</span>
           <div className="w-1 h-20 bg-gradient-to-b from-[#d4a843]/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
