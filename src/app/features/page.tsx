"use client";

import Image from "next/image";
import Link from "next/link";
import { Baby, Bell, Bot, Calendar, Camera, Cloud, Globe, Heart, Lock, Moon, Share2, TrendingUp, Users, Utensils } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Utensils className="w-8 h-8" />,
      title: "Feeding Tracker",
      description: "Track breastfeeding (with left/right timer), bottle feeding (ml), and solid food. Complete statistics and smart predictions."
    },
    {
      icon: <Moon className="w-8 h-8" />,
      title: "Sleep Tracking",
      description: "Monitor night sleep and naps with timer. Get detailed statistics including day/night distribution, average duration, and AI-powered predictions for next sleep."
    },
    {
      icon: <Baby className="w-8 h-8" />,
      title: "Diaper Tracking",
      description: "Log wet, dirty, or both types of changes. Track frequency, patterns, and get smart predictions for the next change."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Growth & Development",
      description: "Record weight, height, and head circumference. View WHO growth charts with percentiles and track progress over time."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Milestones",
      description: "Track motor skills, language, social-emotional and cognitive development. Add photos and notes for each milestone by age group."
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Smart Predictions",
      description: "Algorithm-based predictions for next feeding, sleep, and diaper change using statistical analysis and scientific data. Get confidence scores and personalized tips."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Family Sharing",
      description: "Invite your partner to manage your babies together. All data syncs across devices so both parents stay up to date and can track together."
    },
    {
      icon: <Baby className="w-8 h-8" />,
      title: "Twins Support",
      description: "Link twins together for parallel tracking. Separate timers for each baby with quick switcher on every screen."
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Smart Notifications",
      description: "Receive notifications for predicted feeding, sleep, and diaper times. Fully customizable - choose which predictions to get notified about and when."
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Custom Logs",
      description: "Create free entries for medications, doctor visits, temperature, symptoms, and more. Add notes and photos with automatic timestamps."
    },
    {
      icon: <Utensils className="w-8 h-8" />,
      title: "Recipe Library",
      description: "Age-specific recipes for 6+, 9+, and 12+ months. Categories for breakfast, lunch, dinner, and snacks with allergy information."
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "Parent Guide",
      description: "Knowledge base with age-appropriate articles about sleep, nutrition, development, health, and safety. Practical tips with illustrations."
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Safety Measures",
      description: "Checklists for sleep environment, changing table, bathing, car, kitchen, pets, and toys. Track progress with safety tips."
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Reminders",
      description: "Set manual reminders for feeding, sleep, medications, and appointments. Daily, weekly, or monthly repetitions with push notifications."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Growth Spurts",
      description: "Wonder Weeks integration with age-based spurts. Get descriptions, typical behaviors, and handling tips with progress indicators."
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Storage",
      description: "All data is securely stored in the cloud with automatic backup. Access your tracking history from any device, anytime."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Multi-Language",
      description: "Available in German, English, Spanish, and French. Localized UI texts, recipes, articles, and notifications."
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Security & Privacy",
      description: "Email/password, Google, and Apple Sign-In. Row Level Security, encrypted storage, and GDPR compliant. Your data stays private."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Statistics & Insights",
      description: "Detailed analytics with bar charts, trend lines, and weekly overviews. Filter by last month or year for all activities."
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="SNUGL Logo"
              width={120}
              height={27}
              priority
            />
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Everything You Need for Your Baby
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive tracking, smart predictions, and family sharing – designed for modern parents
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-white dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow"
              >
                <div className="text-blue-600 dark:text-blue-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Platform-Specific Features
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                iOS Features
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                  <span>Face ID / Touch ID support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                  <span>iOS 16.2+ optimized</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                Android Features
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                  <span>Material Design 3 with colored icons</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                  <span>Background timers with persistent notifications</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                  <span>Android 8.0+ support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Download SNUGL today and experience stress-free baby tracking
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              App Store
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              Google Play
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-800 py-6 px-4 mt-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <Link href="/">
            <Image src="/logo.svg" alt="SNUGL" width={80} height={18} />
          </Link>
          <div className="flex gap-6 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/features" className="hover:text-gray-900 dark:hover:text-white">Features</Link>
            <Link href="/faq" className="hover:text-gray-900 dark:hover:text-white">FAQ</Link>
            <Link href="/agb" className="hover:text-gray-900 dark:hover:text-white">Terms</Link>
            <Link href="/datenschutz" className="hover:text-gray-900 dark:hover:text-white">Privacy</Link>
            <Link href="/" className="hover:text-gray-900 dark:hover:text-white">Home</Link>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-gray-500">
          © 2025 SNUGL. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
