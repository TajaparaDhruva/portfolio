import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaExternalLinkAlt, FaYoutube, FaArrowRight } from "react-icons/fa";

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
      <div className="relative h-full overflow-hidden rounded-[2.5rem] border border-white/5 bg-[#0a0f1d]/60 p-5 backdrop-blur-2xl transition-all duration-700 group-hover:border-[#d4a843]/40 group-hover:shadow-[0_0_50px_rgba(212,168,67,0.15)]">
        
        {/* Holographic Sheen */}
        <motion.div 
          style={{ 
            background: `radial-gradient(circle at ${sheenX} ${sheenY}, rgba(212,168,67,0.15) 0%, transparent 60%)`,
          }}
          className="absolute inset-0 pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
        />

        {/* Image Container with Parallax Elevation */}
        <div style={{ transform: "translateZ(40px)" }} className="relative aspect-video overflow-hidden rounded-[1.8rem] bg-[#020617] shadow-2xl">
          <a href={mainLink} target="_blank" rel="noreferrer" className="block h-full w-full overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100"
            />
          </a>
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-80" />
          
          {/* Enhanced Action Pods */}
          <div className="absolute top-4 right-4 flex gap-3 translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-100">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white hover:bg-[#d4a843] hover:text-black hover:scale-110 transition-all duration-300">
                <FaGithub size={18} />
              </a>
            )}
            {project.youtube && (
              <a href={project.youtube} target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white hover:bg-red-600 hover:text-white hover:scale-110 transition-all duration-300">
                <FaYoutube size={18} />
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white hover:bg-white hover:text-black hover:scale-110 transition-all duration-300">
                <FaExternalLinkAlt size={16} />
              </a>
            )}
          </div>
        </div>

        {/* Content with Layered Parallax */}
        <div className="pt-8 space-y-5">
          <div style={{ transform: "translateZ(30px)" }} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
               <span className="w-1.5 h-1.5 rounded-full bg-[#d4a843] animate-pulse" />
               <span className="text-[10px] font-mono text-[#d4a843] uppercase tracking-[0.3em] font-black">Archive // 0{index + 1}</span>
            </div>
            <div className="h-[1px] w-12 bg-white/10" />
          </div>
          
          <div style={{ transform: "translateZ(60px)" }} className="space-y-3">
             <a href={mainLink} target="_blank" rel="noreferrer" className="block group/title">
               <h3 className="text-3xl font-heading font-black text-white uppercase tracking-tighter group-hover:text-[#d4a843] group-hover/title:text-[#d4a843] transition-colors leading-none">
                 {project.title}
               </h3>
             </a>
             <p className="text-white/40 text-xs md:text-sm leading-relaxed font-medium line-clamp-2 max-w-[90%]">
               {project.description}
             </p>
          </div>

          {/* Tags with Dynamic Reveal */}
          <div style={{ transform: "translateZ(20px)" }} className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <span key={tag} className="text-[9px] font-mono text-white/30 border border-white/5 py-1.5 px-4 rounded-full uppercase tracking-widest group-hover:border-[#d4a843]/30 group-hover:text-[#d4a843] transition-all duration-500 hover:bg-[#d4a843]/10">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Subtle Decorative Grid */}
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#d4a843]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        {/* Floating Arrow Identifier - Now Clickable */}
        <a 
          href={mainLink} 
          target="_blank" 
          rel="noreferrer" 
          style={{ transform: "translateZ(80px)" }} 
          className="absolute bottom-6 right-8 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-x-10 group-hover:translate-x-0 z-20"
        >
           <div className="flex items-center gap-2 group/discover">
             <span className="text-[10px] font-mono text-[#d4a843]/50 uppercase tracking-widest group-hover/discover:text-[#d4a843] transition-colors">Discover</span>
             <FaArrowRight className="text-[#d4a843] text-xl group-hover/discover:translate-x-1 transition-transform" />
           </div>
        </a>
      </div>

      {/* Extreme Premium Animated Border */}
      <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-white/0 via-white/0 to-transparent border border-white/0 group-hover:border-white/5 -z-20 transition-all" />
    </motion.div>
  );
}
