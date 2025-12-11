"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Baby, Heart, Moon, Smartphone, TrendingUp, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Logo */}
          <div className="mb-8">
            <Image
              src="/logo.svg"
              alt="SNUGL Logo"
              width={280}
              height={62}
              className="mx-auto"
              priority
            />
          </div>

          {/* Tagline */}
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-white mb-4">
            The Baby Tracker App for Modern Parents
          </h1>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-xl mx-auto">
            Track sleep, feedings, diapers and precious moments – 
            all in one place. Simple. Clear. Relaxed.
          </p>

          {/* Store Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-xl font-medium hover:bg-gray-800 transition-colors shadow-lg"
            >
              <svg className="w-7 h-7 mr-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs opacity-80">Download on the</div>
                <div className="text-sm font-semibold">App Store</div>
              </div>
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-xl font-medium hover:bg-gray-800 transition-colors shadow-lg"
            >
              <svg className="w-7 h-7 mr-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs opacity-80">Get it on</div>
                <div className="text-sm font-semibold">Google Play</div>
              </div>
            </a>
          </div>

          {/* Quick Links */}
          <div className="flex gap-6 justify-center text-sm text-gray-600 dark:text-gray-400">
            <Link href="/features" className="hover:text-gray-900 dark:hover:text-white transition-colors">
              Features
            </Link>
            <Link href="/faq" className="hover:text-gray-900 dark:hover:text-white transition-colors">
              FAQ
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Feature Highlights */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Everything you need for your baby
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Track feeding, sleep, diapers and more with smart AI predictions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Baby className="w-12 h-12" />,
                title: "Smart Tracking",
                description: "Track feedings, sleep, diapers and growth with AI-powered predictions for your baby's next needs"
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: "Family Sharing",
                description: "Share real-time updates with partners, grandparents or caregivers. Everyone stays in sync"
              },
              {
                icon: <Moon className="w-12 h-12" />,
                title: "Sleep Insights",
                description: "Detailed sleep statistics with WHO growth charts and milestone tracking"
              },
              {
                icon: <Heart className="w-12 h-12" />,
                title: "Milestones",
                description: "Document your baby's development with photos and track important milestones"
              },
              {
                icon: <TrendingUp className="w-12 h-12" />,
                title: "Statistics",
                description: "Comprehensive charts and trends to understand your baby's patterns"
              },
              {
                icon: <Smartphone className="w-12 h-12" />,
                title: "iOS & Android",
                description: "Live Activities on iOS, rich notifications on Android, offline mode on both"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 p-8 rounded-2xl"
              >
                <div className="text-blue-600 dark:text-blue-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/features"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg"
            >
              View All Features
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Logo klein */}
            <div className="flex items-center">
              <Image
                src="/logo.svg"
                alt="SNUGL"
                width={100}
                height={22}
              />
            </div>

            {/* Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 dark:text-gray-400">
              <Link href="/features" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                Features
              </Link>
              <Link href="/faq" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                FAQ
              </Link>
              <Link href="/agb" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                Terms
              </Link>
              <Link href="/datenschutz" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                Privacy
              </Link>
              <a href="mailto:info@snugled.com" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500 dark:text-gray-500">
            © 2025 SNUGL. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
