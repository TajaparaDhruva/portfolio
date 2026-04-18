import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPaperPlane, FaGithub, FaLinkedin, FaTwitter, FaCode, FaEnvelope, FaCheckCircle, FaExclamationCircle, FaInfoCircle } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const formRef = useRef(null);
  const [form, setForm] = useState({ from_name: "", from_email: "", message: "" });
  const [status, setStatus] = useState(null);
  const [statusMsg, setStatusMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.from_name || !form.from_email || !form.message) {
      setStatus("error");
      setStatusMsg("Required fields missing.");
      return;
    }
    setStatus("loading");
    setStatusMsg("Establishing Connection...");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_dzrnnub",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_fqg6wdj",
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "9YNOGSUHTL4ATe3PJ"
      );
      
      setStatus("success");
      setStatusMsg("Message Sent Successfully!");
      setForm({ from_name: "", from_email: "", message: "" });
      setTimeout(() => { setStatus(null); setStatusMsg(""); }, 6000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
      setStatusMsg("Transmission Failed. Use direct links.");
      setTimeout(() => { setStatus(null); setStatusMsg(""); }, 6000);
    }
  };

  const socials = [
    { icon: <FaGithub />, name: "GitHub", link: "https://github.com/TajaparaDhruva", color: "hover:text-white" },
    { icon: <FaLinkedin />, name: "LinkedIn", link: "https://www.linkedin.com/in/dhruva-tajapara-2967a5378/", color: "hover:text-[#0077b5]" },
    { icon: <FaTwitter />, name: "Twitter", link: "https://x.com/Dhruva_Tajapara", color: "hover:text-[#1da1f2]" },
    { icon: <FaCode />, name: "LeetCode", link: "https://leetcode.com/u/DhruvaTajapara/", color: "hover:text-[#ffa116]" },
    { icon: <FaEnvelope />, name: "Gmail", link: "mailto:dhruva.tajapara.cg@gmail.com", color: "hover:text-[#ea4335]" },
  ];

  return (
    <section id="contact" className="relative bg-[#020617] py-40 overflow-hidden w-full px-6 lg:px-12">
      
      {/* Premium Notification Pop-up - Robust Centering */}
      <AnimatePresence>
        {status && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.9 }}
            style={{ zIndex: 9999 }}
            className="fixed top-10 left-0 right-0 mx-auto w-[90%] max-w-md px-4"
          >
            <div className={`backdrop-blur-2xl border-2 p-5 rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.8)] flex items-center gap-4 ${
              status === "success" ? "bg-green-500/20 border-green-500/50 text-green-100 shadow-green-500/10" :
              status === "error" ? "bg-red-500/20 border-red-500/50 text-red-100 shadow-red-500/10" :
              "bg-[#d4a843]/20 border-[#d4a843]/50 text-white shadow-[#d4a843]/10"
            }`}>
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 ${
                status === "success" ? "bg-green-500/20" :
                status === "error" ? "bg-red-500/20" :
                "bg-[#d4a843]/20"
              }`}>
                {status === "success" && <FaCheckCircle className="text-green-400" />}
                {status === "error" && <FaExclamationCircle className="text-red-400" />}
                {status === "loading" && <FaInfoCircle className="animate-spin text-[#d4a843]" />}
              </div>
              <div className="flex-grow">
                <p className="text-[10px] font-mono uppercase tracking-[0.4em] font-black opacity-40 mb-1">System_Response</p>
                <p className="text-sm font-heading font-black uppercase tracking-tight leading-tight">{statusMsg}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10 w-full">
        
        {/* Left: Editorial Identity Block */}
        <div className="lg:col-span-5 flex flex-col justify-between py-4">
           <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                 <span className="w-12 h-px bg-[#d4a843]" />
                 <span className="text-[10px] font-mono text-[#d4a843] uppercase tracking-[0.5em] font-black">Network_Hub</span>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-7xl md:text-[10rem] font-heading font-black text-white leading-[0.85] uppercase tracking-tighter"
              >
                LET'S <br />
                <span className="text-[#d4a843]">TALK</span>
              </motion.h2>

              <p className="text-white/40 text-lg font-medium leading-relaxed max-w-sm">
                 Open for technical collaborations, architectural consulting, and innovative problem solving.
              </p>
           </div>

           <div className="pt-20 hidden lg:block">
              <div className="flex items-center gap-4 text-white/10 font-mono text-[9px] uppercase tracking-[0.4em]">
                 <span>Dhruva_Studio_v2</span>
                 <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]" />
                 <span>Verified_Active</span>
              </div>
           </div>
        </div>

        {/* Right: Interaction Dashboard */}
        <div className="lg:col-span-7 flex flex-col gap-12">
           
           {/* Terminal Form Block */}
           <motion.div
             initial={{ opacity: 0, scale: 0.98 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="bg-white/[0.02] border border-white/5 p-12 rounded-[3.5rem] backdrop-blur-3xl shadow-2xl relative overflow-hidden"
           >
              <div className="flex items-center gap-3 mb-10">
                 <div className="w-2 h-2 rounded-full bg-red-500/40" />
                 <div className="w-2 h-2 rounded-full bg-yellow-500/40" />
                 <div className="w-2 h-2 rounded-full bg-green-500/40" />
                 <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.3em] ml-4">Terminal.Briefing_Mode</span>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                 <input
                    type="text"
                    name="from_name"
                    value={form.from_name}
                    onChange={handleChange}
                    placeholder="NAME / ORGANIZATION"
                    className="w-full bg-transparent border-b border-white/10 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[#d4a843] transition-all font-mono text-sm uppercase tracking-wider"
                 />
                 <input
                    type="email"
                    name="from_email"
                    value={form.from_email}
                    onChange={handleChange}
                    placeholder="EMAIL_VECTOR"
                    className="w-full bg-transparent border-b border-white/10 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[#d4a843] transition-all font-mono text-sm uppercase tracking-wider"
                 />
                 <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="MESSAGE_MANIFEST"
                    rows={4}
                    className="w-full bg-transparent border-b border-white/10 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[#d4a843] transition-all font-mono text-sm uppercase tracking-wider resize-none"
                 />
                 
                 <div className="flex items-center justify-between pt-6">
                    <div className="flex-grow">
                       <AnimatePresence>
                          {statusMsg && (
                             <motion.span 
                               initial={{ opacity: 0 }}
                               animate={{ opacity: 1 }}
                               exit={{ opacity: 0 }}
                               className={`text-[9px] font-mono uppercase tracking-widest ${
                                  status === 'success' ? 'text-green-400' : 
                                  status === 'error' ? 'text-red-400' : 
                                  'text-[#d4a843]'
                               }`}
                             >
                                {statusMsg}
                             </motion.span>
                          )}
                       </AnimatePresence>
                    </div>
                    <motion.button
                       whileHover={{ x: 10 }}
                       disabled={status === "loading"}
                       className="flex items-center gap-4 text-[#d4a843] text-xs font-black uppercase tracking-[0.4em] group disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                       <span>{status === "loading" ? "SENDING..." : "SEND_MESSAGE"}</span>
                       <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </motion.button>
                 </div>
              </form>
           </motion.div>

           {/* Social Vector Grid */}
           <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
              {socials.map((social, i) => (
                <motion.a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5, backgroundColor: 'rgba(212,168,67,0.05)', borderColor: 'rgba(212,168,67,0.2)' }}
                  className={`bg-white/[0.02] border border-white/5 p-6 rounded-3xl flex flex-col items-center justify-center gap-3 transition-all duration-300 ${social.color}`}
                >
                   <div className="text-xl">{social.icon}</div>
                   <span className="text-[8px] font-mono uppercase tracking-[0.2em]">{social.name}</span>
                </motion.a>
              ))}
           </div>
        </div>
      </div>

    </section>
  );
}
