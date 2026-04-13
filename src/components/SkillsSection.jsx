import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { skillCategories } from "../data/skills";

function SkillModule({ category, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-[#d4a843]/0 group-hover:bg-[#d4a843]/5 transition-all duration-700 blur-[60px] rounded-3xl -z-10" />
      
      <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent p-8 backdrop-blur-md transition-all duration-500 group-hover:border-[#d4a843]/20">
        {/* Floating Decor */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-32 h-32 bg-[#d4a843]/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        <div className="flex flex-col h-full">
          <div className="mb-8 flex items-end justify-between border-b border-white/5 pb-4">
            <div>
              <span className="text-[10px] font-mono text-[#d4a843] uppercase tracking-[0.3em] font-bold">
                Module {index + 1}
              </span>
              <h3 className="text-2xl md:text-3xl font-heading font-black text-white mt-1 uppercase tracking-tight">
                {category.title}
              </h3>
            </div>
            <div className="text-4xl font-heading text-white/5 font-black uppercase tracking-tighter absolute top-6 right-8 select-none">
              {category.title.substring(0, 3)}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 flex-grow">
            {category.skills.map((skill, sIdx) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  whileHover={{ y: -5 }}
                  className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#d4a843]/30 transition-all duration-300 group/item"
                >
                  <div 
                    className="p-2 rounded-xl bg-white/5 group-hover/item:bg-white/10 transition-colors"
                  >
                    <Icon 
                      className="text-xl transition-transform duration-500 group-hover/item:rotate-[15deg] group-hover/item:scale-110"
                      style={{ color: skill.color }}
                    />
                  </div>
                  <span className="text-[11px] font-mono text-white/60 group-hover/item:text-white transition-colors uppercase tracking-wider font-semibold">
                    {skill.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Minimalist Accents */}
        <div className="absolute bottom-6 right-6 flex gap-1">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-1 h-1 bg-[#d4a843]/30" />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section 
      id="skills" 
      ref={containerRef}
      className="relative overflow-hidden w-full py-32 px-4 sm:px-6 lg:px-8 bg-mesh"
    >
      {/* Dynamic Background Orbs */}
      <motion.div style={{ y: y1 }} className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-[#d4a843]/3 blur-[120px] rounded-full pointer-events-none" />
      <motion.div style={{ y: y2 }} className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-[#d4a843]/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Modern Header */}
        <div className="mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="h-[1px] w-8 bg-[#d4a843]/40" />
            <span className="text-[10px] font-mono text-[#d4a843] uppercase tracking-[0.5em] font-bold">
              Expertise
            </span>
            <div className="h-[1px] w-8 bg-[#d4a843]/40" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-heading font-black text-white uppercase tracking-tighter leading-none"
          >
            Tech <span className="text-[#d4a843] stroke-text">Studio</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-white/30 font-mono text-[10px] sm:text-xs mt-6 uppercase tracking-[0.2em]"
          >
            Integrating modern frameworks // engineering digital experiences
          </motion.p>
        </div>

        {/* Studio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillModule key={category.title} category={category} index={index} />
          ))}
        </div>

        {/* Subtle Footer Quote / Detail */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-20 flex flex-col items-center justify-center gap-10"
        >
          <div className="w-px h-20 bg-gradient-to-b from-[#d4a843]/50 to-transparent" />
          <p className="text-white/20 font-heading text-sm uppercase tracking-widest max-w-sm text-center italic">
            "Driven by logic, crafted with passion."
          </p>
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .stroke-text {
          -webkit-text-stroke: 1px rgba(212, 168, 67, 0.4);
          color: transparent;
        }
        .group:hover .stroke-text {
          color: rgba(212, 168, 67, 1);
          -webkit-text-stroke: 1px transparent;
          transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}} />
    </section>
  );
}
