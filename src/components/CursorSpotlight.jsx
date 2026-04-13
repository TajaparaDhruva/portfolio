import { useEffect, useRef, useState } from "react";

export default function CursorSpotlight() {
  const spotlightRef = useRef(null);
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const spotlightPos = useRef({ x: -100, y: -100 });
  const cursorTargetPos = useRef({ x: -100, y: -100, w: 36, h: 36 });
  const cursorCurrentPos = useRef({ x: -100, y: -100, w: 36, h: 36 });
  const dotPos = useRef({ x: -100, y: -100 });
  const hoveredElRef = useRef(null);
  const isHoveringRef = useRef(false);
  const [isHovering, setIsHovering] = useState(false);

  const DEFAULT_SIZE = 36;
  const BRACKET_LEN = 12; // length of bracket arms in px
  const PADDING = 14; // padding around hovered element

  useEffect(() => {
    const spotlight = spotlightRef.current;
    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!spotlight || !cursor || !dot) return;

    let animationId;

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const getInteractiveEl = (target) => {
      return (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[role='button']") ||
        target.closest(".btn-glow") ||
        target.closest(".btn-glow-pink") ||
        target.closest(".skill-badge") ||
        target.closest(".glass") ||
        target.closest(".glass-card") ||
        target.closest(".project-card") ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest(".cursor-target") ||
        target.closest("nav a") ||
        target.closest("nav button")
      );
    };

    const handleMouseOver = (e) => {
      const el = getInteractiveEl(e.target);
      if (el) {
        hoveredElRef.current = el;
        isHoveringRef.current = true;
        setIsHovering(true);
      } else {
        hoveredElRef.current = null;
        isHoveringRef.current = false;
        setIsHovering(false);
      }
    };

    const animate = () => {
      // Spotlight lerp
      spotlightPos.current.x += (mousePos.current.x - spotlightPos.current.x) * 0.06;
      spotlightPos.current.y += (mousePos.current.y - spotlightPos.current.y) * 0.06;
      spotlight.style.background = `radial-gradient(600px circle at ${spotlightPos.current.x}px ${spotlightPos.current.y}px, rgba(212, 168, 67, 0.06), rgba(212, 168, 67, 0.015) 40%, transparent 70%)`;

      // Determine target position and size
      if (isHoveringRef.current && hoveredElRef.current) {
        const rect = hoveredElRef.current.getBoundingClientRect();
        cursorTargetPos.current = {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
          w: rect.width + PADDING * 2,
          h: rect.height + PADDING * 2,
        };
      } else {
        cursorTargetPos.current = {
          x: mousePos.current.x,
          y: mousePos.current.y,
          w: DEFAULT_SIZE,
          h: DEFAULT_SIZE,
        };
      }

      // Smooth lerp for cursor position and size
      const lerpFactor = 0.12;
      cursorCurrentPos.current.x += (cursorTargetPos.current.x - cursorCurrentPos.current.x) * lerpFactor;
      cursorCurrentPos.current.y += (cursorTargetPos.current.y - cursorCurrentPos.current.y) * lerpFactor;
      cursorCurrentPos.current.w += (cursorTargetPos.current.w - cursorCurrentPos.current.w) * lerpFactor;
      cursorCurrentPos.current.h += (cursorTargetPos.current.h - cursorCurrentPos.current.h) * lerpFactor;

      const { x, y, w, h } = cursorCurrentPos.current;

      cursor.style.left = `${x - w / 2}px`;
      cursor.style.top = `${y - h / 2}px`;
      cursor.style.width = `${w}px`;
      cursor.style.height = `${h}px`;

      // Dot follows mouse directly (faster lerp)
      dotPos.current.x += (mousePos.current.x - dotPos.current.x) * 0.2;
      dotPos.current.y += (mousePos.current.y - dotPos.current.y) * 0.2;
      dot.style.left = `${dotPos.current.x}px`;
      dot.style.top = `${dotPos.current.y}px`;

      animationId = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    animate();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      {/* Radial spotlight */}
      <div
        ref={spotlightRef}
        className="fixed inset-0 z-[2] pointer-events-none"
        style={{ willChange: "background" }}
      />

      {/* Rotating bracket cursor */}
      <div
        ref={cursorRef}
        className="fixed z-[9999] pointer-events-none hidden md:block"
        style={{ willChange: "left, top, width, height" }}
      >
        {/* Rotation wrapper - stops rotating on hover */}
        <div className={`w-full h-full relative ${isHovering ? '' : 'cursor-brackets'}`}>
          {/* Top-left */}
          <span className="cursor-bracket cursor-bracket-tl" />
          {/* Top-right */}
          <span className="cursor-bracket cursor-bracket-tr" />
          {/* Bottom-left */}
          <span className="cursor-bracket cursor-bracket-bl" />
          {/* Bottom-right */}
          <span className="cursor-bracket cursor-bracket-br" />
        </div>
      </div>

      {/* Center dot */}
      <div
        ref={dotRef}
        className="fixed z-[9999] pointer-events-none hidden md:block w-[5px] h-[5px] rounded-full"
        style={{
          willChange: "left, top",
          marginLeft: "-2.5px",
          marginTop: "-2.5px",
          backgroundColor: "#d4a843",
          boxShadow: "0 0 8px rgba(212, 168, 67, 0.4)",
        }}
      />
    </>
  );
}
