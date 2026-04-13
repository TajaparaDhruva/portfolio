import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt, FaCode, FaYoutube } from "react-icons/fa";
import GlowButton from "./GlowButton";
import { projects } from "../data/projects";

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative bg-[#0a0f1d]/60 backdrop-blur-3xl border border-white/5 rounded-3xl overflow-hidden hover:border-[#d4a843]/30 transition-all duration-700 shadow-2xl h-full flex flex-col"
    >
      {/* Visual Component */}
      <div className="relative aspect-[16/10] overflow-hidden bg-black/40 flex-shrink-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
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

      {/* Content Component */}
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

        <div className="space-y-6 pt-4">
           <div className="w-full h-px bg-white/5" />
           <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                 {project.demo && (
                   <motion.a
                     href={project.demo}
                     target="_blank"
                     rel="noopener noreferrer"
                     whileHover={{ x: 5 }}
                     className="flex items-center gap-3 text-[10px] font-mono text-white/40 uppercase tracking-[0.2em] hover:text-[#d4a843] transition-colors group/link"
                   >
                     <span>Live_Interface</span>
                     <FaExternalLinkAlt size={10} />
                   </motion.a>
                 )}
                 {project.github && (
                   <motion.a
                     href={project.github}
                     target="_blank"
                     rel="noreferrer"
                     whileHover={{ x: 5 }}
                     className="flex items-center gap-3 text-[10px] font-mono text-white/40 uppercase tracking-[0.2em] hover:text-white transition-colors group/link"
                   >
                     <FaGithub size={14} />
                     <span>Source</span>
                   </motion.a>
                 )}
                 {project.youtube && (
                   <motion.a
                     href={project.youtube}
                     target="_blank"
                     rel="noopener noreferrer"
                     whileHover={{ x: 5 }}
                     className="flex items-center gap-3 text-[10px] font-mono text-white/40 uppercase tracking-[0.2em] hover:text-red-500 transition-colors group/link"
                   >
                     <FaYoutube size={14} />
                     <span>Watch</span>
                   </motion.a>
                 )}
              </div>

           </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsPreview() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section id="projects" className="relative bg-[#020617] py-40 overflow-hidden w-full px-6 lg:px-12">
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        
        {/* Balanced Header */}
        <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-10 border-b border-white/5 pb-16">
           <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                 <span className="w-12 h-px bg-[#d4a843]" />
                 <span className="text-[10px] font-mono text-[#d4a843] uppercase tracking-[0.5em] font-black underline underline-offset-8">Featured Core</span>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-6xl md:text-8xl font-heading font-black text-white leading-none uppercase tracking-tighter"
              >
                PROJECT <br />
                <span className="text-[#d4a843]">ARCHIVE</span>
              </motion.h2>
           </div>

           <div className="flex items-center gap-4 text-white/10 font-mono text-[9px] uppercase tracking-[0.4em] hidden lg:block">
              <span>Collection.01 // Artifact_Manifest</span>
           </div>
        </div>

        {/* Project Exhibit Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {featured.map((project, index) => (
             <ProjectCard key={project.id} project={project} index={index} />
           ))}
        </div>

        {/* Studio Gallery Action (Matching Certificate Section) */}
        <div className="mt-24 flex flex-col items-center gap-8">
           <div className="w-px h-24 bg-gradient-to-b from-white/5 to-[#d4a843]/40" />
           <Link to="/projects">
              <GlowButton className="px-16 py-6 text-[11px] uppercase tracking-[0.4em] font-black rounded-full">
                 View More Projects
              </GlowButton>
           </Link>
           <span className="text-[7px] font-mono text-white/10 uppercase tracking-[0.3em] font-black">
              Archive_Protocol: AP.091 // Unified_Repository
           </span>
        </div>

      </div>
    </section>
  );
}


