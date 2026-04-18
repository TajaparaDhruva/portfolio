import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";

export default function GlowButton({
  children,
  onClick,
  href,
  variant = "gold",
  size = "md",
  className = "",
  icon,
  target,
}) {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Advanced Magnetic Effect Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300 };
  const magneticX = useSpring(mouseX, springConfig);
  const magneticY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Magnetic pull (refined strength)
    mouseX.set((e.clientX - centerX) * 0.25);
    mouseY.set((e.clientY - centerY) * 0.25);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const sizeClasses = {
    sm: "px-5 py-2 text-[10px]",
    md: "px-8 py-3.5 text-[11px]",
    lg: "px-12 py-5 text-[13px]",
  };

  const variants = {
    gold: "bg-[#d4a843]/5 border-[#d4a843]/30 text-[#d4a843] hover:bg-[#d4a843]/10 hover:border-[#d4a843]/60 shadow-[0_0_20px_rgba(212,168,67,0.05)]",
    outline: "bg-transparent border-white/10 text-white/60 hover:border-[#d4a843]/50 hover:text-white",
    glass: "bg-white/5 backdrop-blur-xl border-white/10 text-white hover:bg-white/10 hover:border-white/20",
    cyber: "bg-black/40 border-[#d4a843]/20 text-[#d4a843] hover:border-[#d4a843]/50",
  };

  const currentVariant = variants[variant] || variants.gold;

  const content = (
    <div className="relative z-10 flex items-center justify-center gap-3">
      {icon && <span className="text-base group-hover:scale-110 transition-transform duration-300">{icon}</span>}
      <span className="font-mono font-black uppercase tracking-[0.3em]">{children}</span>
    </div>
  );

  const containerClasses = `group relative rounded-xl border transition-all duration-500 overflow-hidden ${currentVariant} ${sizeClasses[size] || sizeClasses.md} ${className} cursor-none`;

  const Decorations = () => (
    <>
      {/* Shimmer Glint */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        initial={{ x: "-100%" }}
        animate={isHovered ? { x: "100%" } : { x: "-100%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        style={{
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)",
        }}
      />

      {/* Cyber Brackets (Special variant) */}
      {variant === "cyber" && (
        <>
          <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-[#d4a843]/40 group-hover:border-[#d4a843] transition-colors" />
          <div className="absolute top-1 right-1 w-2 h-2 border-t border-r border-[#d4a843]/40 group-hover:border-[#d4a843] transition-colors" />
          <div className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-[#d4a843]/40 group-hover:border-[#d4a843] transition-colors" />
          <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-[#d4a843]/40 group-hover:border-[#d4a843] transition-colors" />
        </>
      )}

      {/* Pulsing Aura on Hover */}
      {isHovered && (
        <motion.div
          layoutId="button-glow"
          className="absolute inset-0 bg-[#d4a843]/5 blur-xl -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
    </>
  );

  const motionProps = {
    ref,
    onMouseMove: handleMouseMove,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    style: { x: magneticX, y: magneticY },
    whileTap: { scale: 0.96, transition: { duration: 0.1 } },
    className: containerClasses
  };

  if (href) {
    if (href.startsWith("/") || href.startsWith("#")) {
      const isAnchor = href.startsWith("#");
      
      if (isAnchor) {
         return (
          <motion.a 
            href={href}
            onClick={onClick}
            {...motionProps}
          >
            <Decorations />
            {content}
          </motion.a>
         );
      }

      return (
        <Link to={href} className="inline-block">
          <motion.div {...motionProps}>
            <Decorations />
            {content}
          </motion.div>
        </Link>
      );
    }
    
    return (
      <motion.a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        {...motionProps}
      >
        <Decorations />
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button onClick={onClick} {...motionProps}>
      <Decorations />
      {content}
    </motion.button>
  );
}

