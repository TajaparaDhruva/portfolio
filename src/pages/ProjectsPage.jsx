import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaGamepad, FaCopy, FaDatabase, FaLayerGroup, FaChevronRight } from "react-icons/fa";
import ProjectCard from "../components/ProjectCard";
import SectionHeading from "../components/SectionHeading";
import GlowButton from "../components/GlowButton";
import PageTransition from "../components/PageTransition";
import { projects } from "../data/projects";
import { Helmet } from "react-helmet-async";

const SECTORS = [
  { id: "all", label: "All Projects", icon: null },
  { id: "games", label: "Games Zone", icon: <FaGamepad /> },
  { id: "clone", label: "Clone Archive", icon: <FaCopy /> },
  { id: "full-stack", label: "Full Stack Terminal", icon: <FaDatabase /> },
  { id: "frontend", label: "Frontend Lab", icon: <FaLayerGroup /> },
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <PageTransition>
      <Helmet>
        <title>Project Archive | Dhruva Portfolio</title>
        <meta name="description" content="Explore a comprehensive archive of Dhruva's full-stack projects, applications, and technical artifacts." />
      </Helmet>
      <div className="min-h-screen bg-[#020617] text-white">
        <div className="section-container pt-32 pb-24">
          <div className="flex justify-between items-center mb-20">
            <Link to="/">
              <GlowButton icon={<FaArrowLeft />} variant="outline">
                Return to Core
              </GlowButton>
            </Link>
            <div className="text-right">
              <span className="text-[10px] font-mono text-[#d4a843] uppercase tracking-[0.5em] block mb-2">Protocol: ARCHIVE_V2</span>
              <span className="text-[8px] font-mono text-white/20 uppercase tracking-[0.2em]">Exhibition_Mode: Filtered</span>
            </div>
          </div>

          <SectionHeading
            title="Project Exhibition"
            subtitle="Explore our comprehensive archive of technical artifacts"
          />

          {/* Filtering Hub */}
          <div className="mb-24 flex flex-wrap gap-4 justify-center">
            {SECTORS.map((sector) => (
              <GlowButton
                key={sector.id}
                variant={selectedCategory === sector.id ? "gold" : "cyber"}
                size="sm"
                icon={sector.icon}
                onClick={() => setSelectedCategory(sector.id)}
              >
                {sector.label}
              </GlowButton>
            ))}
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                >
                  <ProjectCard project={project} index={index} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-48 p-12 md:p-24 rounded-[4rem] bg-gradient-to-br from-[#d4a843]/5 to-transparent border border-white/5 text-center relative overflow-hidden group shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#d4a843]/5 blur-[120px] -z-10 animate-pulse" />
            <div className="max-w-3xl mx-auto space-y-10">
              <h3 className="text-4xl md:text-7xl font-black text-white leading-tight uppercase tracking-tighter">
                READY TO <span className="text-[#d4a843]">SCALE?</span>
              </h3>
              <p className="text-white/30 text-lg md:text-xl font-light leading-relaxed">
                Whether it's a game, a high-fidelity clone, or a full-stack engineering challenge, I'm ready to deploy my skills for your vision.
              </p>
              <Link to="/#contact" className="inline-block">
                <GlowButton icon={<FaChevronRight />} variant="gold" className="px-16 py-8">
                  Initiate Connection
                </GlowButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}


