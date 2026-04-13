import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRobot, FaTimes, FaPaperPlane } from "react-icons/fa";

const quickReplies = [
  "Tell me about yourself",
  "Show me your projects",
  "What skills do you have?",
  "How to contact you?",
];

const responses = {
  "Tell me about yourself": "I'm a Full Stack Developer passionate about creating beautiful and functional web applications. I love working with React, Node.js, and modern web technologies!",
  "Show me your projects": "Check out my Projects section below! I've worked on AI chatbots, e-commerce platforms, and more. Use the navbar to jump there directly.",
  "What skills do you have?": "I'm proficient in React, Next.js, Node.js, Python, and many more technologies. Scroll to the Skills section to see my complete tech stack!",
  "How to contact you?": "Head over to the Contact section at the bottom of the page, or reach out via email. I'd love to hear from you!",
};

export default function FloatingMascot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hey! 👋 I'm Dhruva's AI assistant. How can I help you?" },
  ]);

  const handleQuickReply = (reply) => {
    setMessages((prev) => [
      ...prev,
      { type: "user", text: reply },
      { type: "bot", text: responses[reply] || "I'm not sure about that, but feel free to check out the portfolio!" },
    ]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-20 right-0 w-80 sm:w-96 glass-strong rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-primary-600/50 to-neon-cyan/20 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-cyan to-primary-600 flex items-center justify-center">
                  <FaRobot className="text-dark text-sm" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">AI Assistant</p>
                  <p className="text-xs text-neon-cyan">Online</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/40 hover:text-white transition-colors"
              >
                <FaTimes />
              </button>
            </div>

            {/* Messages */}
            <div className="p-4 h-64 overflow-y-auto space-y-3 scrollbar-thin">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] px-3 py-2 rounded-xl text-sm ${
                      msg.type === "user"
                        ? "bg-primary-600/40 text-white/90 rounded-br-sm"
                        : "bg-white/5 text-white/70 rounded-bl-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Replies */}
            <div className="p-3 border-t border-white/10">
              <div className="flex flex-wrap gap-2">
                {quickReplies.map((reply) => (
                  <button
                    key={reply}
                    onClick={() => handleQuickReply(reply)}
                    className="px-3 py-1.5 text-xs rounded-lg bg-white/5 border border-white/10 text-white/50 hover:text-neon-cyan hover:border-neon-cyan/30 transition-all duration-300"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={!isOpen ? { y: [0, -8, 0] } : {}}
        transition={!isOpen ? { duration: 3, repeat: Infinity, ease: "easeInOut" } : {}}
        className="w-14 h-14 rounded-2xl bg-gradient-to-br from-neon-cyan to-primary-600 flex items-center justify-center shadow-neon-cyan text-dark text-xl relative"
      >
        {isOpen ? <FaTimes /> : <FaRobot />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-neon-pink rounded-full animate-pulse" />
        )}
      </motion.button>
    </div>
  );
}
