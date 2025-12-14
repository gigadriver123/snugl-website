"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ScrollPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = document.body.scrollHeight;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.body.scrollHeight;
    };

    window.addEventListener("resize", handleResize);

    // Gradient blobs that move slowly
    class Blob {
      x: number;
      y: number;
      baseY: number;
      radius: number;
      vx: number;
      vy: number;
      color: string;
      pulseSpeed: number;
      pulsePhase: number;

      constructor(width: number, height: number, index: number) {
        this.x = Math.random() * width;
        this.baseY = (height / 6) * index + Math.random() * (height / 6);
        this.y = this.baseY;
        this.radius = Math.random() * 350 + 250;
        this.vx = (Math.random() - 0.5) * 0.2;
        this.vy = (Math.random() - 0.5) * 0.1;
        this.pulseSpeed = 0.001 + Math.random() * 0.002;
        this.pulsePhase = Math.random() * Math.PI * 2;

        const colors = [
          "rgba(255, 182, 193, 0.4)",  // Light pink
          "rgba(173, 216, 230, 0.4)",  // Light blue
          "rgba(152, 251, 152, 0.4)",  // Pale green
          "rgba(221, 160, 221, 0.4)",  // Plum
          "rgba(255, 218, 185, 0.4)",  // Peach
          "rgba(176, 224, 230, 0.4)",  // Powder blue
        ];
        this.color = colors[index % colors.length];
      }

      update(width: number, scrollY: number, time: number) {
        this.x += this.vx;

        // Gentle floating motion
        this.y = this.baseY + Math.sin(time * this.pulseSpeed + this.pulsePhase) * 30;

        // Bounce off edges
        if (this.x < -this.radius || this.x > width + this.radius) {
          this.vx *= -1;
        }

        // Parallax effect based on scroll
        const parallaxY = scrollY * 0.3;
        return this.y - parallaxY;
      }

      draw(displayY: number) {
        if (!ctx) return;

        const gradient = ctx.createRadialGradient(
          this.x, displayY, 0,
          this.x, displayY, this.radius
        );
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(0.5, this.color.replace("0.4", "0.2"));
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, displayY, this.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const blobs: Blob[] = [];
    for (let i = 0; i < 6; i++) {
      blobs.push(new Blob(canvas.width, canvas.height, i));
    }

    let scrollY = 0;
    let time = 0;

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    function animate() {
      if (!ctx || !canvas) return;

      time++;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Soft gradient background
      const bgGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      bgGradient.addColorStop(0, "#f8f9fa");
      bgGradient.addColorStop(0.5, "#e9ecef");
      bgGradient.addColorStop(1, "#dee2e6");
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw blobs
      blobs.forEach(blob => {
        const displayY = blob.update(canvas.width, scrollY, time);
        blob.draw(displayY);
      });

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      {/* Fixed Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      />

      {/* Scrollable Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
          <div className="mb-8">
            <Image
              src="/logo.svg"
              alt="SNUGL"
              width={200}
              height={44}
              priority
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Your Smart Companion
            <br />
            for Baby Care
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-2xl">
            Track sleep, feedings, diapers and precious moments – all in one place
          </p>
          <div className="flex gap-6">
            <Link
              href="/"
              className="px-8 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-all"
            >
              Back to Home
            </Link>
            <button className="px-8 py-4 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition-all">
              Download Now
            </button>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="min-h-screen flex items-center justify-center px-4">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
              Track Everything That Matters
            </h2>
            <p className="text-xl text-gray-700 text-center max-w-2xl mx-auto">
              Feeding, sleep, diapers, growth, and milestones – all beautifully organized and easy to access.
            </p>
          </div>
        </section>

        <section className="min-h-screen flex items-center justify-center px-4">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
              Smart Predictions
            </h2>
            <p className="text-xl text-gray-700 text-center max-w-2xl mx-auto">
              Get intelligent insights about your baby's patterns and upcoming needs based on scientific data.
            </p>
          </div>
        </section>

        <section className="min-h-screen flex items-center justify-center px-4">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
              Share with Your Partner
            </h2>
            <p className="text-xl text-gray-700 text-center max-w-2xl mx-auto">
              Invite your partner and manage your babies together. All data syncs seamlessly across devices.
            </p>
          </div>
        </section>

        <section className="min-h-screen flex items-center justify-center px-4">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
              Simple. Clear. Relaxed.
            </h2>
            <p className="text-xl text-gray-700 text-center max-w-2xl mx-auto mb-12">
              Beautiful design that puts your family first.
            </p>
            <div className="flex justify-center gap-6">
              <Link
                href="/features"
                className="px-8 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-all"
              >
                View All Features
              </Link>
              <Link
                href="/faq"
                className="px-8 py-4 bg-white text-gray-900 border-2 border-gray-900 rounded-full font-semibold hover:bg-gray-50 transition-all"
              >
                FAQ
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
