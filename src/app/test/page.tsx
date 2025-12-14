"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function TestPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Mouse follower bubble
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Animated gradient background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Gradient blobs
    class Blob {
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      color: string;

      constructor(width: number, height: number) {
        this.x = Math.random() * width;
        this.y = height * 0.5 + Math.random() * height * 0.6; // Position blobs in lower half
        this.radius = Math.random() * 400 + 250;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.2;

        const colors = [
          "rgba(139, 0, 0, 0.6)",    // Dark red
          "rgba(178, 34, 34, 0.6)",  // Firebrick
          "rgba(220, 20, 60, 0.6)",  // Crimson
          "rgba(255, 69, 0, 0.6)",   // Orange red
          "rgba(255, 140, 0, 0.6)",  // Dark orange
          "rgba(255, 165, 0, 0.6)",  // Orange
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update(width: number, height: number) {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < -this.radius || this.x > width + this.radius) {
          this.vx *= -1;
        }
        if (this.y < -this.radius || this.y > height + this.radius) {
          this.vy *= -1;
        }
      }

      draw() {
        if (!ctx) return;

        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.radius
        );
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const blobs: Blob[] = [];
    for (let i = 0; i < 8; i++) {
      blobs.push(new Blob(canvas.width, canvas.height));
    }

    function animate() {
      if (!ctx || !canvas) return;

      // Night sky gradient - dark blue/purple at top, warm at bottom
      const bgGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      bgGradient.addColorStop(0, "#0a0a1a");      // Deep night blue at top
      bgGradient.addColorStop(0.4, "#1a0a20");    // Purple-black middle
      bgGradient.addColorStop(0.7, "#2a0a0a");    // Dark red
      bgGradient.addColorStop(1, "#3a1100");      // Warm brown-red at bottom
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw blobs
      blobs.forEach(blob => {
        blob.update(canvas.width, canvas.height);
        blob.draw();
      });

      // Add stars (more at top)
      for (let i = 0; i < 80; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height * 0.6; // Stars mostly in upper part
        const size = Math.random() * 2 + 0.5;
        const opacity = Math.random() * 0.8 + 0.2;
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.fillRect(x, y, size, size);
      }

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full"
        style={{ pointerEvents: "none" }}
      />

      {/* Mouse follower bubble */}
      <div
        className="fixed pointer-events-none z-50 transition-all duration-200 ease-out"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          className="w-32 h-32 rounded-full blur-2xl opacity-60"
          style={{
            background: "radial-gradient(circle, rgba(255,140,0,0.8) 0%, rgba(255,69,0,0.4) 50%, transparent 70%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
          Your Smart Companion
          <br />
          for Baby Care
        </h1>

        <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl">
          Track sleep, feedings, and precious moments with beautiful animations
        </p>

        <div className="flex gap-6">
          <Link
            href="/"
            className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-white/30 transition-all"
          >
            Back to Home
          </Link>
          <button className="px-8 py-4 bg-orange-500/80 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-orange-600/90 transition-all">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
