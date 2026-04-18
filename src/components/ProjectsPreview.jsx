import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt, FaCode, FaYoutube, FaGamepad, FaCopy, FaDatabase, FaLayerGroup } from "react-icons/fa";
import GlowButton from "./GlowButton";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

const SECTORS = [
  { id: "all", label: "Featured", icon: null },
  { id: "games", label: "Gaming Zone", icon: <FaGamepad /> },
  { id: "clone", label: "Clones Archive", icon: <FaCopy /> },
  { id: "full-stack", label: "Full Stack Terminal", icon: <FaDatabase /> },
  { id: "frontend", label: "Frontend Lab", icon: <FaLayerGroup /> },
];

export default function ProjectsPreview() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects = selectedCategory === "all" 
    ? projects.slice(0, 3) 
    : projects.filter(p => p.category === selectedCategory).slice(0, 3);

  return (
    <section id="projects" className="relative bg-[#020617] py-40 overflow-hidden w-full px-6 lg:px-12">
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        
        {/* Header Section */}
        <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-10 border-b border-white/5 pb-16">
           <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                 <span className="w-12 h-px bg-[#d4a843]" />
                 <span className="text-[10px] font-mono text-[#d4a843] uppercase tracking-[0.5em] font-black underline underline-offset-8">Production Manifest</span>
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

           <div className="flex items-center gap-4 text-white/10 font-mono text-[9px] uppercase tracking-[0.4em] hidden lg:block text-right">
              <span>Collection.01 // Artifact_Manifest</span><br/>
              <span>Authorized_Access_Only</span>
           </div>
        </div>

        {/* Filtering Hub */}
        <div className="mb-20 flex flex-wrap gap-4 justify-center">
          {SECTORS.map((sector) => (
            <GlowButton
              key={sector.id}
              variant={selectedCategory === sector.id ? "gold" : "cyber"}
              size="sm"
              icon={sector.icon}
              onClick={() => setSelectedCategory(sector.id)}
            >
              {sector.label.split(' ')[0]}
            </GlowButton>
          ))}
        </div>

        {/* Unified Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Studio Gallery Action */}
        <div className="mt-40 flex flex-col items-center gap-8">
           <div className="w-px h-32 bg-gradient-to-b from-white/5 via-[#d4a843]/40 to-transparent" />
           <Link to="/projects">
              <GlowButton className="px-20 py-8 text-[12px] uppercase tracking-[0.5em] font-black rounded-full shadow-[0_0_50px_rgba(212,168,67,0.1)]">
                 Enter Full Archive
              </GlowButton>
           </Link>
           <span className="text-[8px] font-mono text-white/10 uppercase tracking-[0.3em] font-black">
              System_Status: Unified_Repository_V2.0
           </span>
        </div>

      </div>
    </section>
  );
}
