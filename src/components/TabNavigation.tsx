"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface Tab {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

interface TabNavigationProps {
  tabs: Tab[];
  onTabChange?: (tabId: string) => void;
  defaultTab?: string;
}

export function TabNavigation({ tabs, onTabChange, defaultTab }: TabNavigationProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    onTabChange?.(tabId);
  };

  const activeIndex = tabs.findIndex(tab => tab.id === activeTab);

  return (
    <div className="relative flex gap-2 bg-gray-100 dark:bg-gray-800 p-1 rounded-2xl w-fit">
      {/* Animated background indicator */}
      <motion.div
        className="absolute bg-white dark:bg-gray-700 rounded-xl shadow-md"
        initial={false}
        animate={{
          x: activeIndex * (100 / tabs.length) + "%",
          width: `calc(${100 / tabs.length}% - 0.5rem)`,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
        style={{
          height: "calc(100% - 0.5rem)",
          top: "0.25rem",
          left: "0.25rem",
        }}
      />

      {/* Tab buttons */}
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => handleTabClick(tab.id)}
          className={`
            relative z-10 px-6 py-3 rounded-xl font-medium transition-colors duration-200
            ${activeTab === tab.id 
              ? "text-gray-900 dark:text-white" 
              : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
            }
          `}
        >
          <span className="flex items-center gap-2">
            {tab.icon}
            {tab.label}
          </span>
        </button>
      ))}
    </div>
  );
}
