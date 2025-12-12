"use client";

import { Home, Star, HelpCircle, Download } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "features", "faq"];
      const scrollPosition = window.scrollY + 200; // Offset

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <nav className="flex items-center gap-1 p-1.5 bg-white/80 backdrop-blur-lg border border-white/20 rounded-full shadow-lg shadow-black/5 ring-1 ring-black/5">
        <button
          onClick={() => scrollToSection("home")}
          className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            activeSection === "home"
              ? "text-white bg-gray-900 shadow-md"
              : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          }`}
        >
          <span className="flex items-center gap-2">
            <Home className="w-4 h-4" />
            <span className="hidden sm:inline">Home</span>
          </span>
        </button>

        <button
          onClick={() => scrollToSection("features")}
          className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            activeSection === "features"
              ? "text-white bg-gray-900 shadow-md"
              : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          }`}
        >
          <span className="flex items-center gap-2">
            <Star className="w-4 h-4" />
            <span className="hidden sm:inline">Features</span>
          </span>
        </button>

        <button
          onClick={() => scrollToSection("faq")}
          className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            activeSection === "faq"
              ? "text-white bg-gray-900 shadow-md"
              : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          }`}
        >
          <span className="flex items-center gap-2">
            <HelpCircle className="w-4 h-4" />
            <span className="hidden sm:inline">FAQ</span>
          </span>
        </button>

        <div className="w-px h-6 bg-gray-200 mx-1" />

        <a
          href="#"
          className="px-4 py-2 rounded-full text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-md flex items-center gap-2"
        >
          <Download className="w-4 h-4" />
          <span className="hidden sm:inline">Get App</span>
        </a>
      </nav>
    </div>
  );
}
