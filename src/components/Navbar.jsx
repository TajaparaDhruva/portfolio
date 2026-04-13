import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  { name: "Home", path: "#hero" },
  { name: "About", path: "#about" },
  { name: "Edu", path: "#education" },
  { name: "Skills", path: "#skills" },
  { name: "Works", path: "#projects" },
  { name: "Contact", path: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("#hero");

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
      
      const sections = navLinks.map(link => link.path.substring(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 150) {
          setActiveTab(`#${section}`);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, path) => {
    e.preventDefault();
    const element = document.getElementById(path.substring(1));
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      setActiveTab(path);
      setMobileOpen(false);
      window.history.pushState(null, null, path);
    }
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[1px] bg-[#d4a843]/30 z-[120] origin-left"
        style={{ scaleX }}
      />

      <nav className="fixed top-0 left-0 right-0 z-[110] transition-all duration-500">
        <motion.div
           initial={{ y: -100 }}
           animate={{ y: 0 }}
           className={`w-full transition-all duration-700 ${
             scrolled 
               ? "bg-[#0b1221]/90 backdrop-blur-2xl border-b border-white/5 py-3 shadow-2xl" 
               : "bg-transparent py-6 md:py-8"
           }`}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
            {/* Hidden Singularity 'D' Logo */}
            <a href="#hero" onClick={(e) => handleNavClick(e, "hero")} className="group flex items-center gap-6">
               <div className="relative w-14 h-14 flex items-center justify-center">
                  <svg width="45" height="45" viewBox="0 0 100 100" className="group-hover:rotate-[360deg] transition-transform duration-1000">
                     {/* The 'D' Backbone (Hidden 'Y' Structure) */}
                     <motion.path 
                        d="M30 15 L 30 50 M 30 50 L 15 25 M 30 50 L 45 25" 
                        fill="none" 
                        stroke="#d4a843" 
                        strokeWidth="8" 
                        strokeLinecap="round"
                        className="opacity-0 group-hover:opacity-100 transition-opacity" // Reveal the 'Y' slightly on hover
                     />
                     {/* The Main 'D' Outer Shell */}
                     <motion.path 
                        d="M30 15 L 30 85 C 80 85, 90 50, 80 15 Z" 
                        fill="none" 
                        stroke="white" 
                        strokeWidth="10" 
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5 }}
                     />
                     {/* The Subtle Gold 'D' Accents */}
                     <motion.path 
                        d="M30 15 L 60 15 L 65 30" 
                        fill="none" 
                        stroke="#d4a843" 
                        strokeWidth="10" 
                        strokeLinecap="round"
                     />
                  </svg>
                  <div className="absolute inset-0 bg-[#d4a843]/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
               </div>
               <div className="flex flex-col">
                  <span className="text-xl font-heading text-white tracking-[0.2em] uppercase font-black leading-none">DHRUVA</span>
                  <span className="text-[9px] font-mono text-[#d4a843] uppercase tracking-[0.5em] mt-1.5 font-bold">Encrypted_Identity</span>
               </div>
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-2">
               {navLinks.map((link) => (
                 <a
                   key={link.name}
                   href={link.path}
                   onClick={(e) => handleNavClick(e, link.path)}
                   className={`relative px-6 py-2 text-sm font-heading font-black uppercase tracking-widest transition-all duration-300 group ${
                     activeTab === link.path ? "text-[#d4a843]" : "text-white/60 hover:text-white"
                   }`}
                 >
                   <span className="relative z-10">{link.name}</span>
                   {activeTab === link.path && (
                      <motion.div 
                        layoutId="navTab"
                        className="absolute bottom-0 left-6 right-6 h-0.5 bg-[#d4a843] shadow-[0_0_15px_#d4a843]"
                      />
                   )}
                 </a>
               ))}
               
               {/* Technical Status Indicator */}
               <div className="ml-6 pl-6 border-l border-white/10 hidden lg:flex items-center gap-4">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_15px_rgba(34,197,94,0.6)]" />
                  <div className="flex flex-col">
                    <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest leading-none">Status</span>
                    <span className="text-[10px] font-mono text-green-500 uppercase tracking-widest font-black">Online</span>
                  </div>
               </div>
            </div>

            {/* Mobile Button */}
            <button 
               onClick={() => setMobileOpen(!mobileOpen)}
               className="md:hidden w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-white transition-all shadow-xl"
            >
               {mobileOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
            </button>
          </div>
        </motion.div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[105] bg-black/95 backdrop-blur-3xl md:hidden overflow-hidden"
          >
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]" />
            <div className="relative h-full flex flex-col items-center justify-center px-10 gap-16">
               <motion.div initial={{ y: -50 }} animate={{ y: 0 }} className="text-center">
                  <span className="text-[10px] font-mono text-[#d4a843] uppercase tracking-[1em]">Navigation</span>
                  <div className="w-20 h-px bg-[#d4a843]/20 mx-auto mt-4" />
               </motion.div>
               
               <div className="flex flex-col items-center gap-8">
                  {navLinks.map((link, i) => (
                    <motion.a
                      key={link.name}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      href={link.path}
                      onClick={(e) => handleNavClick(e, link.path)}
                      className={`text-4xl font-heading font-black uppercase tracking-tighter transition-all ${
                        activeTab === link.path ? "text-[#d4a843]" : "text-white/20"
                      }`}
                    >
                      {link.name}
                    </motion.a>
                  ))}
               </div>

               <div className="flex flex-col items-center gap-4 pt-10 border-t border-white/5 w-full">
                  <span className="text-[8px] font-mono text-white/20 uppercase tracking-[0.5em]">System_Interface_01</span>
                  <div className="flex gap-10">
                     <span className="text-[10px] text-white/40 uppercase tracking-widest font-black">Local_Time: 15:52</span>
                     <span className="text-[10px] text-green-500/60 uppercase tracking-widest font-black">Auth: Approved</span>
                  </div>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
