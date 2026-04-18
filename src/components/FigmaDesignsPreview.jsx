import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaFigma, FaLayerGroup } from "react-icons/fa";
import FigmaDesignCard from "./FigmaDesignCard";
import GlowButton from "./GlowButton";
import { figmaDesigns } from "../data/figmaDesigns";

export default function FigmaDesignsPreview() {
  const featured = figmaDesigns.filter((d) => d.featured).slice(0, 3);

  return (
    <section id="designs" className="relative bg-[#020617] py-32 overflow-hidden w-full">
      
      {/* Editorial Background Text */}
      <div className="absolute top-20 left-0 text-[15vw] font-black text-white/[0.01] uppercase select-none pointer-events-none tracking-tighter -z-10">
        DESIGN_01
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
        
        {/* Section Header: Studio Editorial Style */}
        <div className="flex flex-col lg:flex-row justify-between items-end gap-10 mb-20 border-b border-white/5 pb-10">
           <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                 <span className="w-10 h-px bg-[#d4a843]" />
                 <span className="text-[10px] font-mono text-[#d4a843] uppercase tracking-[0.5em] font-black underline underline-offset-8">Interface Lab</span>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-6xl md:text-8xl font-heading font-black text-white leading-none uppercase tracking-tighter"
              >
                DESIGN <br />
                <span className="text-[#d4a843]">ARCHIVE</span>
              </motion.h2>
           </div>

           <div className="flex flex-col items-end gap-4 text-right">
              <div className="w-12 h-12 bg-white/[0.02] border border-white/10 rounded-2xl flex items-center justify-center text-[#d4a843]">
                 <FaFigma size={20} />
              </div>
              <p className="text-white/30 text-[10px] font-mono uppercase tracking-[0.4em] max-w-[200px] leading-relaxed">
                 High-fidelity prototypes and architectural user experiences constructed in Figma.
              </p>
           </div>
        </div>

        {/* Designs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {featured.map((design, index) => (
            <FigmaDesignCard key={design.id} design={design} index={index} />
          ))}
        </div>

        {/* Gallery Action */}
        <div className="mt-20 flex flex-col items-center gap-8">
           <div className="w-px h-20 bg-gradient-to-b from-white/5 to-[#d4a843]/40" />
           <Link to="/figma-designs">
              <GlowButton className="px-16 py-6 text-[11px] uppercase tracking-[0.4em] font-black rounded-full" variant="gold">
                 Explore Design Vault
              </GlowButton>
           </Link>
        </div>
      </div>

    </section>
  );
}
