"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, List, HelpCircle, FileText, Shield } from "lucide-react";

export default function MoonMenu() {
  const pathname = usePathname();
  
  const menuItems = [
    { href: "/", label: "Home", icon: Home, angle: -60 },
    { href: "/features", label: "Features", icon: List, angle: -30 },
    { href: "/faq", label: "FAQ", icon: HelpCircle, angle: 0 },
    { href: "/agb", label: "Terms", icon: FileText, angle: 30 },
    { href: "/datenschutz", label: "Privacy", icon: Shield, angle: 60 },
  ];

  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 pointer-events-none">
      {/* Moon Circle */}
      <div className="relative w-[500px] h-[500px] -left-[250px]">
        {/* Moon Background */}
        <div className="absolute inset-0 rounded-full border-4 border-gray-300 dark:border-gray-600 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 opacity-90"></div>
        
        {/* Menu Items on the arc */}
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          
          // Calculate position on the right arc (90-270 degrees range mapped to our angles)
          const angleRad = (item.angle * Math.PI) / 180;
          const radius = 220; // Distance from center
          const x = 250 + Math.cos(angleRad) * radius;
          const y = 250 + Math.sin(angleRad) * radius;
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className="absolute pointer-events-auto group"
              style={{
                left: `${x}px`,
                top: `${y}px`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <div className={`
                flex flex-col items-center gap-2 p-3 rounded-xl
                transition-all duration-300
                ${isActive 
                  ? 'bg-blue-500 text-white scale-110' 
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700 hover:scale-105'
                }
                shadow-lg
              `}>
                <Icon className="w-6 h-6" />
                <span className="text-xs font-medium whitespace-nowrap">{item.label}</span>
              </div>
            </Link>
          );
        })}
        
        {/* Moon Craters (decorative) */}
        <div className="absolute top-[30%] left-[35%] w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-700 opacity-30"></div>
        <div className="absolute top-[55%] left-[25%] w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-700 opacity-40"></div>
        <div className="absolute top-[45%] left-[15%] w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-700 opacity-25"></div>
      </div>
    </div>
  );
}
