import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaCode, FaEnvelope } from "react-icons/fa";

const socialLinks = [
  { icon: <FaGithub />, href: "https://github.com/TajaparaDhruva", label: "GitHub" },
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/dhruva-tajapara-2967a5378/", label: "LinkedIn" },
  { icon: <FaTwitter />, href: "https://x.com/Dhruva_Tajapara", label: "Twitter" },
  { icon: <FaCode />, href: "https://leetcode.com/u/DhruvaTajapara/", label: "LeetCode" },
  { icon: <FaEnvelope />, href: "mailto:dhruva.tajapara.cg@gmail.com", label: "Gmail" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#020617] border-t border-white/5 py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
        
        {/* Branding Module */}
        <div className="flex flex-col items-center md:items-start gap-1">
           <div className="flex items-center gap-3">
              <span className="text-xl font-heading font-black text-white tracking-tighter uppercase">Dhruva</span>
              <div className="w-1.5 h-1.5 rounded-full bg-[#d4a843]" />
           </div>
           <span className="text-[9px] font-mono text-white/20 uppercase tracking-[0.4em]">Studio_Archive_v2.0</span>
        </div>

        {/* Social Navigation */}
        <div className="flex items-center gap-2">
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, color: '#d4a843', backgroundColor: 'rgba(212,168,67,0.05)' }}
              className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-white/30 transition-all duration-300 bg-white/[0.01]"
              aria-label={social.label}
            >
              <div className="text-sm">
                {social.icon}
              </div>
            </motion.a>
          ))}
        </div>

        {/* Technical Copyright */}
        <div className="flex flex-col items-center md:items-end gap-1 text-right">
           <p className="text-white/20 text-[10px] font-mono uppercase tracking-widest">
              &copy; {new Date().getFullYear()} All_Permissions_Reserved
           </p>
           <div className="flex items-center gap-2">
              <span className="text-[8px] text-white/10 uppercase tracking-widest font-mono">Status: Secure</span>
              <div className="w-1 h-1 rounded-full bg-[#d4a843]/40" />
           </div>
        </div>

      </div>

      {/* Subtle Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-20 bg-[#d4a843]/5 blur-[100px] pointer-events-none" />
    </footer>
  );
}
