import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ProjectCard from "../components/ProjectCard";
import SectionHeading from "../components/SectionHeading";
import GlowButton from "../components/GlowButton";
import PageTransition from "../components/PageTransition";
import { projects } from "../data/projects";

export default function ProjectsPage() {
  return (
    <PageTransition>
      <div className="min-h-screen pt-28 pb-16">
        <div className="section-container">
          {/* Back to Home Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-10"
          >
            <Link to="/">
              <GlowButton icon={<FaArrowLeft />} variant="outline">
                Back to Home
              </GlowButton>
            </Link>
          </motion.div>
          <SectionHeading
            title="All Projects"
            subtitle="A complete collection of my work, side projects, and experiments"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </div>

          {/* Bottom Call to Action */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-24 p-12 md:p-20 rounded-[3rem] bg-gradient-to-br from-[#d4a843]/10 to-transparent border border-[#d4a843]/10 text-center relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4a843]/5 blur-[100px] -z-10" />
            <h3 className="text-3xl md:text-5xl font-black text-white mb-6 font-heading tracking-tight">
              INTERESTED IN <span className="text-[#d4a843]">WORKING TOGETHER?</span>
            </h3>
            <p className="text-white/40 text-lg mb-10 max-w-xl mx-auto font-light">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <Link to="/#contact">
              <GlowButton icon={<FaArrowRight />} variant="gold">
                Start a Conversation
              </GlowButton>
            </Link>
          </motion.div>
        </div>

        {/* Background Animated Elements */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, 50, 0],
              x: [0, 30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className={`fixed rounded-full blur-[120px] pointer-events-none -z-10 ${
              i === 0 ? "top-1/4 -left-20 w-96 h-96 bg-[#d4a843]/10" :
              i === 1 ? "bottom-1/4 -right-20 w-80 h-80 bg-primary-600/5" :
              "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#d4a843]/2 opacity-50"
            }`}
          />
        ))}
      </div>
    </PageTransition>
  );
}
