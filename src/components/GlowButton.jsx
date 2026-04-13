import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";

export default function GlowButton({
  children,
  onClick,
  href,
  variant = "cyan",
  size = "md",
  className = "",
  icon,
  target,
}) {
  const ref = useRef(null);

  // Magnetic Effect Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const mouseXSpring = useSpring(x, springConfig);
  const mouseYSpring = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Calculate distance and pull strength
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    // Magnetic pull (max 15px movement)
    x.set(distanceX * 0.2);
    y.set(distanceY * 0.2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variantClass = variant === "pink" ? "btn-glow-pink" : 
                       variant === "gold" ? "border border-[#d4a843]/30 bg-[#d4a843]/5 text-[#d4a843] rounded-xl font-bold uppercase tracking-widest hover:bg-[#d4a843]/10" :
                       "btn-glow";

  const content = (
    <>
      {icon && <span className="text-lg">{icon}</span>}
      {children}
    </>
  );

  const combinedClasses = `${variantClass} ${sizeClasses[size] || sizeClasses.md} ${className} inline-flex items-center gap-2 font-heading transition-all duration-300`;

  const motionProps = {
    ref,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    style: { x: mouseXSpring, y: mouseYSpring },
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    className: combinedClasses
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
            {content}
          </motion.a>
         );
      }

      return (
        <motion.div {...motionProps} className="">
          <Link to={href} className="w-full h-full flex items-center justify-center gap-2">
            {content}
          </Link>
        </motion.div>
      );
    }
    
    return (
      <motion.a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        {...motionProps}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button onClick={onClick} {...motionProps}>
      {content}
    </motion.button>
  );
}
