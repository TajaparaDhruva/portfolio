import { motion } from "framer-motion";
import { FaGraduationCap, FaCalendar } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import { education } from "../data/education";

export default function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 gap-8 flex flex-col">
      <SectionHeading
        title="About Me"
        subtitle="My journey & background"
      />
      
      <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16 pt-8">
        {/* Left Side: Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex-1 space-y-6 text-white/70 text-base md:text-lg leading-relaxed"
        >
          <div className="glass p-8 rounded-3xl border border-white/5 relative overflow-hidden transition-all duration-300 hover:border-white/10 hover:shadow-2xl hover:shadow-primary-600/10">
            <div className="absolute top-0 right-0 w-32 h-32 bg-neon-cyan/10 blur-[50px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-neon-pink/10 blur-[50px] pointer-events-none" />
            
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-6">
              Hello, I'm <span className="text-neon-cyan">Dhruva Tajapara</span>
            </h3>
            
            <p className="mb-4 relative z-10">
              I am a driven B.Tech Computer Science student at Nirma University, and I've always been profoundly fascinated by how technology transforms ideas into reality. My journey began with simple coding exercises and has evolved into building sophisticated full-stack applications.
            </p>
            <p className="mb-4 relative z-10">
              I specialize in the <span className="text-neon-pink font-medium">MERN stack</span> (MongoDB, Express, React, Node.js), and I enjoy weaving seamless front-end experiences backed by robust APIs. Aside from web development, I am an enthusiastic competitive programmer who loves diving into algorithms and problem-solving puzzles.
            </p>
            <p className="relative z-10">
              When I'm not studying or building web apps, I spend my time exploring modern UI designs, contributing to open-source projects, and constantly seeking out new technologies to expand my toolkit.
            </p>
            
            {/* Quick Skills */}
            <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-white/10 relative z-10">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-neon-cyan shadow-[0_0_10px_rgba(212,168,67,0.5)]" />
                <span className="text-white/80">Full-Stack Dev</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-neon-pink shadow-[0_0_10px_rgba(240,208,120,0.5)]" />
                <span className="text-white/80">Problem Solving</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary-400 shadow-[0_0_10px_rgba(250,204,21,0.5)]" />
                <span className="text-white/80">UI/UX Design</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_10px_#4ade80]" />
                <span className="text-white/80">Clean Code</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Education Cards */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex-1 w-full flex flex-col gap-5"
        >
          <h3 className="text-xl font-heading font-bold text-white mb-2 flex items-center gap-3">
            <FaGraduationCap className="text-neon-cyan text-2xl" />
            <span>Education</span>
          </h3>

          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -4, borderColor: "rgba(212, 168, 67, 0.3)" }}
              className="glass p-5 md:p-6 rounded-2xl border border-white/5 transition-all duration-300 hover:shadow-lg hover:shadow-[rgba(212,168,67,0.05)] relative overflow-hidden group"
            >
              {/* Subtle hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Year badge */}
              <div className="flex items-center gap-2 mb-3 relative z-10">
                <FaCalendar className="text-neon-cyan/60 text-xs" />
                <span className="text-xs font-mono text-neon-cyan/70">{edu.year}</span>
              </div>

              {/* Degree */}
              <div className="flex items-start gap-3 mb-2 relative z-10">
                <FaGraduationCap className="text-primary-400 text-lg flex-shrink-0 mt-0.5" />
                <h4 className="font-heading text-base md:text-lg font-bold text-white leading-tight">
                  {edu.degree}
                </h4>
              </div>

              {/* Institution */}
              <p className="text-white/50 text-sm font-medium mb-2 relative z-10 ml-8">
                {edu.institution}
              </p>

              {/* Description */}
              <p className="text-white/35 text-sm leading-relaxed mb-3 relative z-10 ml-8">
                {edu.description}
              </p>

              {/* Grade */}
              {edu.grade && (
                <span className="inline-block ml-8 px-3 py-1 text-xs rounded-md bg-neon-cyan/10 text-neon-cyan/70 border border-neon-cyan/20 relative z-10">
                  {edu.grade}
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
