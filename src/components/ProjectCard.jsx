import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaExternalLinkAlt, FaYoutube, FaArrowRight, FaCode } from "react-icons/fa";

export default function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);
  const sheenX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const sheenY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / rect.width - 0.5;
    const yPct = mouseY / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const mainLink = project.demo || project.github || "#";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      ref={cardRef}
      className="group relative h-[500px] perspective-1000"
    >
      <div className="relative h-full overflow-hidden rounded-[2rem] border border-white/5 bg-[#0a0f1d]/60 backdrop-blur-3xl transition-all duration-700 hover:border-[#d4a843]/30 shadow-2xl flex flex-col">
        
        {/* Shimmer Effect */}
        <motion.div 
          style={{ 
            background: `radial-gradient(circle at ${sheenX} ${sheenY}, rgba(212, 168, 67, 0.1) 0%, transparent 60%)`,
          }}
          className="absolute inset-0 pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
        />

        {/* Image Section */}
        <div className="relative aspect-[16/10] overflow-hidden bg-black/40 flex-shrink-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-all duration-1000 grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d] via-transparent to-transparent" />
          
          <div className="absolute top-4 left-4">
             <div className="flex items-center gap-2 px-3 py-1.5 bg-black/60 border border-white/10 backdrop-blur-xl rounded-full">
                <FaCode className="text-[#d4a843] text-[10px]" />
                <span className="text-[8px] font-mono text-white/60 uppercase tracking-widest">ID_{String(index + 1).padStart(2, '0')}</span>
             </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 space-y-6 flex-grow flex flex-col justify-between">
          <div className="space-y-4">
             <div className="flex items-center gap-2">
                <span className="text-[9px] font-mono text-[#d4a843] uppercase tracking-[0.3em] font-black italic">Ref_Analysis: System_Artifact</span>
             </div>
             <h3 className="text-2xl font-heading font-black text-white leading-tight uppercase group-hover:text-[#d4a843] transition-colors duration-500">
               {project.title}
             </h3>
             <p className="text-white/40 text-[11px] leading-relaxed font-medium uppercase tracking-tight line-clamp-2">
                {project.description}
             </p>
          </div>

          <div className="space-y-6 pt-4 mt-auto">
             <div className="w-full h-px bg-white/5" />
             <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                   {project.demo && (
                     <motion.a
                       href={project.demo}
                       target="_blank"
                       rel="noopener noreferrer"
                       whileHover={{ x: 5 }}
                       className="flex items-center gap-2 text-[10px] font-mono text-white/40 uppercase tracking-[0.2em] hover:text-[#d4a843] transition-colors group/link"
                     >
                       <span>Live Interface</span>
                       <FaExternalLinkAlt size={10} />
                     </motion.a>
                   )}
                   {project.github && (
                     <motion.a
                       href={project.github}
                       target="_blank"
                       rel="noreferrer"
                       whileHover={{ x: 5 }}
                       className="flex items-center gap-2 text-[10px] font-mono text-white/40 uppercase tracking-[0.2em] hover:text-white transition-colors group/link"
                     >
                       <FaGithub size={12} />
                       <span>Source</span>
                     </motion.a>
                   )}
                   {project.youtube && (
                     <motion.a
                       href={project.youtube}
                       target="_blank"
                       rel="noopener noreferrer"
                       whileHover={{ x: 5 }}
                       className="flex items-center gap-2 text-[10px] font-mono text-white/40 uppercase tracking-[0.2em] hover:text-red-500 transition-colors group/link"
                     >
                       <FaYoutube size={12} />
                       <span>Watch</span>
                     </motion.a>
                   )}
                </div>
             </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

