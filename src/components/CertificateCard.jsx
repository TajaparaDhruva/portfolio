import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaAward } from "react-icons/fa";

export default function CertificateCard({ cert, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative bg-[#0a0f1d]/60 backdrop-blur-3xl border border-white/5 rounded-3xl overflow-hidden hover:border-[#d4a843]/30 transition-all duration-700 shadow-2xl"
    >
      {/* Visual Component */}
      <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
        <img
          src={cert.image}
          alt={cert.title}
          className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d] via-transparent to-transparent" />
        
        {/* Verification Badge */}
        <div className="absolute top-4 left-4">
           <div className="flex items-center gap-2 px-3 py-1.5 bg-black/60 border border-white/10 backdrop-blur-xl rounded-full">
              <FaAward className="text-[#d4a843] text-[10px]" />
              <span className="text-[8px] font-mono text-white/60 uppercase tracking-widest">ID_{String(cert.id).padStart(2, '0')}</span>
           </div>
        </div>
      </div>

      {/* Content Component */}
      <div className="p-8 space-y-6">
        <div className="space-y-2">
           <div className="flex items-center gap-2">
              <span className="text-[9px] font-mono text-[#d4a843] uppercase tracking-[0.3em] font-black">{cert.issuer}</span>
              <div className="w-1 h-1 rounded-full bg-white/20" />
              <span className="text-[9px] font-mono text-white/30 uppercase tracking-widest">{cert.date}</span>
           </div>
           <h3 className="text-xl font-heading font-black text-white leading-tight uppercase group-hover:text-[#d4a843] transition-colors duration-500">
             {cert.title}
           </h3>
        </div>

        <div className="w-full h-px bg-white/5" />

        <div className="flex items-center justify-between pt-2">
           <motion.a
             href={cert.link}
             target="_blank"
             rel="noopener noreferrer"
             whileHover={{ x: 5 }}
             className="flex items-center gap-3 text-[10px] font-mono text-white/40 uppercase tracking-[0.2em] hover:text-white transition-colors group/link"
           >
             <span>Verify_Credential</span>
             <FaExternalLinkAlt className="text-[8px] group-hover/link:text-[#d4a843] transition-colors" />
           </motion.a>
           
           <div className="w-10 h-10 border border-white/5 rounded-xl flex items-center justify-center text-white/10 group-hover:text-[#d4a843]/30 transition-colors">
              <FaAward size={16} />
           </div>
        </div>
      </div>

      {/* Aesthetic Accents */}
      <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
         <div className="w-10 h-[1px] bg-[#d4a843]/20" />
      </div>
    </motion.div>
  );
}
