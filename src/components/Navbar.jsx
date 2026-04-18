import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "#hero" },
  { name: "About", path: "#about" },
  { name: "Edu", path: "#education" },
  { name: "Skills", path: "#skills" },
  { name: "Works", path: "#projects" },
  { name: "Designs", path: "#designs" },
  { name: "Contact", path: "#contact" },
];


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("#hero");
  const location = useLocation();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = navLinks.map(link => link.path.substring(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
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
      const offset = scrolled ? 100 : 120;
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

  const getSeoData = () => {
    if (location.pathname !== "/") return null;
    switch (activeTab) {
      case "#about":
        return { title: "About Dhruva | Full Stack Developer", desc: "Learn more about Dhruva, a Full Stack Developer with continuous passion for building high-quality software." };
      case "#skills":
        return { title: "Skills & Technologies | Dhruva Portfolio", desc: "Explore my technical expertise in Frontend, Backend, Databases, and modern web development." };
      case "#projects":
        return { title: "Works & Projects | Dhruva Portfolio", desc: "Explore a comprehensive archive of Dhruva's full-stack projects." };
      case "#designs":
        return { title: "UI/UX Designs | Dhruva Portfolio", desc: "Explore my UI/UX design work and Figma prototypes." };
      case "#contact":
        return { title: "Contact Dhruva | Let's Talk", desc: "Get in touch with Dhruva for opportunities and collaborations." };
      case "#education":
        return { title: "Education & Journey | Dhruva", desc: "My educational background and learning journey." };
      case "#hero":
      default:
        return { title: "Dhruva | Full Stack Developer Portfolio", desc: "Welcome to the portfolio of Dhruva, showcasing exceptional digital experiences and full-stack engineering." };
    }
  };

  const seo = getSeoData();

  return (
    <>
      {seo && (
        <Helmet>
          <title>{seo.title}</title>
          <meta name="description" content={seo.desc} />
        </Helmet>
      )}
      {/* Top Progress Line */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#d4a843] z-[200] origin-left shadow-[0_0_10px_#d4a843]"
        style={{ scaleX }}
      />

      <header className="fixed top-0 left-0 right-0 z-[110] flex justify-center pointer-events-none">
        <motion.nav
           initial={{ y: -100, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
           className={`pointer-events-auto mt-4 md:mt-6 transition-all duration-700 ease-[0.16, 1, 0.3, 1] ${
             scrolled 
               ? "w-[95%] max-w-4xl bg-[#0b1221]/70 backdrop-blur-3xl border border-white/10 rounded-full py-2 px-4 md:py-2.5 md:px-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)]" 
               : "w-[95%] md:w-[90%] max-w-7xl bg-[#0b1221]/70 md:bg-white/[0.02] backdrop-blur-3xl md:backdrop-blur-md border border-white/10 md:border-white/5 rounded-full md:rounded-[2rem] py-2.5 px-5 md:py-4 md:px-10"
           }`}
        >
          <div className="flex items-center justify-between w-full">
            {/* Identity Module */}
            <a href="#hero" onClick={(e) => handleNavClick(e, "#hero")} className="group flex items-center gap-3 md:gap-4">
               {/* Mobile Text Logo */}
               <div className="flex md:hidden items-center text-xl font-heading font-black tracking-wider text-white">
                 DT<span className="text-[#d4a843]">.</span>
               </div>

               {/* Desktop SVG + Full Text Logo */}
               <div className="hidden md:flex relative w-10 h-10 items-center justify-center">
                  <svg width="30" height="30" viewBox="0 0 100 100" className="group-hover:rotate-12 transition-transform duration-500">
                     <path d="M30 15 L 30 85 C 80 85, 90 50, 80 15 Z" fill="none" stroke="white" strokeWidth="12" strokeLinejoin="round" />
                     <path d="M30 15 L 60 15" fill="none" stroke="#d4a843" strokeWidth="12" strokeLinecap="round" />
                  </svg>
                  <div className="absolute inset-0 bg-[#d4a843]/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
               </div>
               <div className={`hidden md:flex flex-col transition-all duration-500 ${scrolled ? "opacity-0 invisible w-0" : "opacity-100"}`}>
                  <span className="text-sm font-heading text-white tracking-[0.2em] uppercase font-black">DHRUVA</span>
                  <span className="text-[7px] font-mono text-[#d4a843] uppercase tracking-[0.4em]">Protocol_v2</span>
               </div>
            </a>

            {/* Navigation Island */}
            <div className={`hidden md:flex items-center gap-1 transition-all duration-500 ${scrolled ? "mx-auto" : ""}`}>
               {navLinks.map((link) => (
                 <a
                   key={link.name}
                   href={link.path}
                   onClick={(e) => handleNavClick(e, link.path)}
                   className={`relative px-4 py-2 text-[10px] font-mono uppercase tracking-[0.2em] transition-all duration-500 group ${
                     activeTab === link.path ? "text-white font-black" : "text-white/30 hover:text-white/60"
                   }`}
                 >
                   <span className="relative z-10">{link.name}</span>
                   {activeTab === link.path && (
                      <motion.div 
                        layoutId="navTab"
                        className="absolute inset-x-2 inset-y-1 bg-white/[0.05] rounded-full -z-10 border border-white/5"
                        initial={false}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                   )}
                   {/* Hover Glow Dot */}
                   <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#d4a843] opacity-0 group-hover:opacity-100 blur-[2px] transition-opacity" />
                 </a>
               ))}
            </div>

            {/* Status & Menu Toggle */}
            <div className="flex items-center gap-4">
               {/* Technical Status */}
               <div className={`hidden lg:flex items-center gap-3 pr-4 border-r border-white/10 transition-all duration-500 ${scrolled ? "opacity-0 invisible w-0" : "opacity-100"}`}>
                  <div className="flex flex-col items-end">
                    <span className="text-[7px] font-mono text-white/20 uppercase tracking-widest">System_Status</span>
                    <span className="text-[9px] font-mono text-green-500 uppercase tracking-widest font-black">Online</span>
                  </div>
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e] animate-pulse" />
               </div>

               <button 
                  onClick={() => setMobileOpen(!mobileOpen)}
                  className="md:hidden w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-white/80 hover:text-white transition-all overflow-hidden"
               >
                  <motion.div animate={{ rotate: mobileOpen ? 90 : 0 }}>
                    {mobileOpen ? <HiX size={20} /> : <HiMenuAlt3 size={20} />}
                  </motion.div>
               </button>
            </div>
          </div>
        </motion.nav>
      </header>

      {/* Mobile System Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(24px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-[105] bg-black/90 md:hidden overflow-hidden flex flex-col items-center justify-center p-10"
          >
            <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:radial-gradient(white,transparent_70%)]" />
            
            <div className="relative flex flex-col items-center gap-12 w-full max-w-xs">
               <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-center">
                  <span className="text-[8px] font-mono text-[#d4a843] uppercase tracking-[1em]">Index_Selection</span>
                  <div className="w-12 h-px bg-[#d4a843]/30 mx-auto mt-4" />
               </motion.div>
               
               <div className="flex flex-col items-center gap-6 w-full">
                  {navLinks.map((link, i) => (
                    <motion.a
                      key={link.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      href={link.path}
                      onClick={(e) => handleNavClick(e, link.path)}
                      className={`text-4xl font-heading font-black uppercase tracking-tighter transition-all duration-500 ${
                        activeTab === link.path ? "text-[#d4a843] scale-110" : "text-white/10 hover:text-white/30"
                      }`}
                    >
                      {link.name}
                    </motion.a>
                  ))}
               </div>

               <div className="mt-12 flex flex-col items-center gap-4 w-full opacity-50">
                  <div className="w-full h-px bg-white/5" />
                  <div className="flex justify-between w-full text-[8px] font-mono text-white/40 uppercase tracking-widest">
                     <span>Port: 5173</span>
                     <span>Access: Full</span>
                  </div>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
