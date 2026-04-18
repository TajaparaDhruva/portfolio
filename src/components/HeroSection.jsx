import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaCode, FaYoutube, FaEye, FaFileAlt } from "react-icons/fa";
import GlowButton from "./GlowButton";

export default function HeroSection() {
  const profileImage = "https://res.cloudinary.com/dojjfvya3/image/upload/v1773635485/WhatsApp_Image_2026-03-10_at_1.19.56_AM-2_lbwftx.jpg";

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-[#020617] overflow-hidden pt-32 lg:pt-40 pb-20">
      
      {/* Editorial Backdrop */}
      <div className="absolute top-0 right-0 w-full lg:w-[60%] h-full">
         <motion.div
           initial={{ opacity: 0, scale: 1.1 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1.5, ease: "easeOut" }}
           className="relative w-full h-full"
         >
            <img 
               src={profileImage} 
               alt="Dhruva Tajapara" 
               className="w-full h-full object-cover grayscale brightness-75 lg:brightness-100"
            />
            {/* Soft Edge Fade */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
         </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
        <div className="max-w-4xl">
          
          {/* Identity Header */}
          <div className="space-y-6 mb-12">
             <motion.div
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               className="flex items-center gap-4 group"
             >
                <span className="w-12 h-px bg-[#d4a843]" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-[#d4a843] uppercase tracking-[0.5em] font-black">Identity Protocol</span>
                  <div className="h-0.5 w-full bg-[#d4a843] mt-2 origin-left scale-x-50 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
             </motion.div>
             
             <motion.div
               initial={{ opacity: 0, y: 50 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
             >
                <h1 className="text-7xl sm:text-9xl md:text-[10rem] font-heading font-black text-white leading-[0.8] uppercase tracking-tighter">
                   DHRUVA <br />
                   <span className="text-[#d4a843]">TAJAPARA</span>
                </h1>
             </motion.div>
          </div>

          {/* Role & Bio */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col gap-8"
          >
             <div className="p-6 bg-white/[0.02] border border-white/5 backdrop-blur-xl rounded-[2rem] w-fit">
                <p className="text-white/50 text-lg md:text-2xl font-medium leading-tight max-w-xl">
                  Full-stack <span className="text-white">Developer</span> specializing in high-performance digital infrastructure & scalable software solutions.
                </p>
             </div>
             
             <div className="flex flex-wrap items-center gap-4">
                <GlowButton 
                  href="#projects" 
                  className="px-10 py-5 text-[11px] uppercase tracking-[0.4em] font-black rounded-full min-w-[220px]"
                >
                  Exhibition
                </GlowButton>
                
                <motion.a
                  href="/Dhruva_Tajapara_final.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-5 rounded-full border border-[#d4a843]/30 hover:border-[#d4a843] bg-[#d4a843]/5 hover:bg-[#d4a843]/10 text-[#d4a843] transition-all duration-300 flex items-center justify-center gap-3 backdrop-blur-md min-w-[220px] group"
                >
                  <span className="text-[11px] uppercase tracking-[0.4em] font-black">
                    VIEW RESUME
                  </span>
                  
                   <div className="flex items-center gap-2">
                      <FaFileAlt size={10} />
                      <FaEye size={10} className="group-hover:scale-110 transition-transform" />
                   </div>
                </motion.a>
             </div>

             {/* High-End Technical Social Dock */}
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
               className="mt-12 flex flex-col gap-4 pl-2"
             >
                <div className="flex items-center gap-3">
                   <div className="w-8 h-px bg-[#d4a843]/30" />
                   <span className="text-[8px] font-mono text-[#d4a843] uppercase tracking-[0.5em] font-black opacity-50">Pulse_Network</span>
                </div>

                <div className="flex items-center bg-white/[0.02] border border-white/5 backdrop-blur-2xl rounded-2xl p-1.5 w-fit shadow-2xl">
                   {[
                     { icon: <FaGithub />, link: "https://github.com/TajaparaDhruva", name: "GitHub", color: "hover:bg-white/10 hover:text-white" },
                     { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/dhruva-tajapara-2967a5378/", name: "LinkedIn", color: "hover:bg-[#0077b5]/10 hover:text-[#0077b5]" },
                     { icon: <FaTwitter />, link: "https://x.com/Dhruva_Tajapara", name: "Twitter", color: "hover:bg-[#1da1f2]/10 hover:text-[#1da1f2]" },
                     { icon: <FaCode />, link: "https://leetcode.com/u/DhruvaTajapara/", name: "LeetCode", color: "hover:bg-[#ffa116]/10 hover:text-[#ffa116]" },
                     { icon: <FaYoutube />, link: "https://www.youtube.com/@DhruvaTajapara-k3v", name: "YouTube", color: "hover:bg-[#ff0000]/10 hover:text-[#ff0000]" }
                   ].map((social, index) => (
                     <motion.a 
                       key={index}
                       href={social.link}
                       target="_blank"
                       rel="noopener noreferrer"
                       whileHover={{ scale: 1.05 }}
                       whileTap={{ scale: 0.95 }}
                       className={`relative group/item px-4 py-3 rounded-xl flex items-center gap-3 transition-all duration-500 ${social.color}`}
                     >
                       <div className="text-lg opacity-40 group-hover/item:opacity-100 transition-opacity">
                         {social.icon}
                       </div>
                       <div className="overflow-hidden w-0 group-hover/item:w-16 transition-all duration-500 ease-out">
                          <span className="text-[9px] font-heading font-black uppercase tracking-widest whitespace-nowrap">
                             {social.name}
                          </span>
                       </div>
                       
                       {/* Floating Particle on Hover */}
                       <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-current opacity-0 group-hover/item:opacity-100 blur-[2px] transition-opacity" />
                     </motion.a>
                   ))}
                   
                   <div className="w-[1px] h-8 bg-white/5 mx-2" />
                   
                   <div className="pr-4 py-2 flex flex-col justify-center">
                      <span className="text-[7px] font-mono text-white/20 uppercase tracking-[0.3em] font-black">Secure_Link</span>
                      <div className="flex items-center gap-1.5 mt-0.5">
                         <div className="w-1 h-1 rounded-full bg-green-500 shadow-[0_0_5px_#22c55e]" />
                         <span className="text-[6px] font-mono text-green-500/50 uppercase tracking-widest">Active</span>
                      </div>
                   </div>
                </div>
             </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Atmospheric Texture */}
      <div className="absolute inset-0 bg-grid-white/[0.01] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-[#020617] to-transparent pointer-events-none" />
      
    </section>
  );
}
