import { useEffect, useRef } from "react";

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let particles = [];
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };
    
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.8 + 0.3;
        this.speedX = (Math.random() - 0.5) * 0.15;
        this.speedY = (Math.random() - 0.5) * 0.15;
        this.opacity = Math.random() * 0.4 + 0.1;
        this.baseOpacity = this.opacity;
        this.twinkleSpeed = Math.random() * 0.01 + 0.005;
        this.twinklePhase = Math.random() * Math.PI * 2;
        // Warm golden color palette matching reference site
        const colors = [
          { r: 212, g: 168, b: 67 },   // #d4a843 - primary gold
          { r: 240, g: 208, b: 120 },   // #f0d078 - light gold
          { r: 234, g: 179, b: 8 },     // #eab308 - amber
          { r: 200, g: 180, b: 140 },   // warm beige
          { r: 255, g: 220, b: 150 },   // warm white-gold
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }
      
      update(time) {
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Gentle twinkle effect
        this.opacity = this.baseOpacity + Math.sin(time * this.twinkleSpeed + this.twinklePhase) * 0.15;
        this.opacity = Math.max(0.05, Math.min(0.6, this.opacity));
        
        // Wrap around edges
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }
      
      draw() {
        const { r, g, b } = this.color;
        // Subtle glow for larger particles
        if (this.size > 1.2) {
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${this.opacity * 0.2})`;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      // Fewer, more subtle particles like the reference site
      const particleCount = Math.floor((canvas.width * canvas.height) / 8000);
      for (let i = 0; i < Math.min(particleCount, 200); i++) {
        particles.push(new Particle());
      }
    };
    
    initParticles();

    let time = 0;
    const render = () => {
      time++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update(time);
        particles[i].draw();
      }
      animationFrameId = window.requestAnimationFrame(render);
    };
    
    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-[1]"
    />
  );
}
