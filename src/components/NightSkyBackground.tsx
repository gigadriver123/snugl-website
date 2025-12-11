"use client";

import { useEffect, useRef } from "react";

export default function NightSkyBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Mouse position
    const mouse = { x: 0, y: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      baseX: number;
      baseY: number;
      density: number;
      color: string;
      vx: number;
      vy: number;

      constructor() {
        this.x = Math.random() * (canvas?.width || window.innerWidth);
        this.y = Math.random() * (canvas?.height || window.innerHeight);
        this.size = Math.random() * 3 + 1;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = Math.random() * 30 + 5;
        
        // Different shades of blue, purple, and white for night sky
        const colors = [
          "rgba(147, 197, 253, 0.8)", // light blue
          "rgba(96, 165, 250, 0.7)",  // blue
          "rgba(167, 139, 250, 0.7)", // purple
          "rgba(196, 181, 253, 0.6)", // light purple
          "rgba(255, 255, 255, 0.9)", // white (stars)
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        
        this.vx = 0;
        this.vy = 0;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();

        // Add subtle glow for larger particles
        if (this.size > 2) {
          ctx.fillStyle = this.color.replace(/[\d.]+\)$/g, "0.2)");
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
          ctx.closePath();
          ctx.fill();
        }
      }

      update() {
        // Calculate distance from mouse
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 150;

        // Mouse interaction - water-like movement
        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          const directionX = dx / distance;
          const directionY = dy / distance;
          
          // Add velocity based on mouse attraction (water effect)
          this.vx += directionX * force * 0.5;
          this.vy += directionY * force * 0.5;
        }

        // Apply velocity with damping (water resistance)
        this.x += this.vx;
        this.y += this.vy;
        this.vx *= 0.95; // damping
        this.vy *= 0.95;

        // Return to base position slowly (elastic effect)
        const returnForce = 0.05;
        this.vx += (this.baseX - this.x) * returnForce;
        this.vy += (this.baseY - this.y) * returnForce;

        // Slow ambient floating movement
        this.baseX += Math.sin(Date.now() * 0.001 + this.density) * 0.2;
        this.baseY += Math.cos(Date.now() * 0.0008 + this.density) * 0.2;

        // Keep particles on screen
        const canvasWidth = canvas?.width || window.innerWidth;
        const canvasHeight = canvas?.height || window.innerHeight;
        if (this.baseX < 0) this.baseX = canvasWidth;
        if (this.baseX > canvasWidth) this.baseX = 0;
        if (this.baseY < 0) this.baseY = canvasHeight;
        if (this.baseY > canvasHeight) this.baseY = 0;

        this.draw();
      }
    }

    // Create particles
    const particleCount = 100;
    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    function animate() {
      if (!ctx || !canvas) return;
      
      // Dark night sky gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, "rgb(15, 23, 42)");    // slate-900
      gradient.addColorStop(0.5, "rgb(30, 41, 59)");  // slate-800
      gradient.addColorStop(1, "rgb(51, 65, 85)");    // slate-700
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle) => particle.update());

      requestAnimationFrame(animate);
    }

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasSize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
      style={{ background: "linear-gradient(to bottom, rgb(15, 23, 42), rgb(30, 41, 59), rgb(51, 65, 85))" }}
    />
  );
}
