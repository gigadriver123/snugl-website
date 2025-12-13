"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { 
  Baby, Bell, Bot, Calendar, Camera, Cloud, Globe, Heart, Lock, Moon, 
  Share2, TrendingUp, Users, Utensils, ChevronDown, ChevronUp 
} from "lucide-react";
import FloatingNav from "../components/FloatingNav";

export default function Home() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const features = [
    {
      icon: <Utensils className="w-6 h-6" />,
      title: "Feeding Tracker",
      description: "Track breastfeeding (with left/right timer), bottle feeding (ml), and solid food. Complete statistics and smart predictions."
    },
    {
      icon: <Moon className="w-6 h-6" />,
      title: "Sleep Tracking",
      description: "Monitor night sleep and naps with timer. Get detailed statistics including day/night distribution, average duration, and predictions."
    },
    {
      icon: <Baby className="w-6 h-6" />,
      title: "Diaper Tracking",
      description: "Log wet, dirty, or both types of changes. Track frequency, patterns, and get smart predictions for the next change."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Growth & Development",
      description: "Record weight, height, and head circumference. View WHO growth charts with percentiles and track progress over time."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Milestones",
      description: "Track motor skills, language, social-emotional and cognitive development. Add photos and notes for each milestone."
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "Smart Predictions",
      description: "Algorithm-based predictions for next feeding, sleep, and diaper change using statistical analysis and scientific data."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Family Sharing",
      description: "Invite your partner to manage your babies together. All data syncs across devices so both parents stay up to date."
    },
    {
      icon: <Baby className="w-6 h-6" />,
      title: "Twins Support",
      description: "Link twins together for parallel tracking. Separate timers for each baby with quick switcher on every screen."
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Smart Notifications",
      description: "Receive notifications for predicted feeding, sleep, and diaper times. Fully customizable timing and preferences."
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Custom Logs",
      description: "Create free entries for medications, doctor visits, temperature, symptoms, and more. Add notes and photos."
    },
    {
      icon: <Utensils className="w-6 h-6" />,
      title: "Recipe Library",
      description: "Age-specific recipes for 6+, 9+, and 12+ months. Categories for breakfast, lunch, dinner, and snacks."
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: "Parent Guide",
      description: "Knowledge base with age-appropriate articles about sleep, nutrition, development, health, and safety."
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Safety Measures",
      description: "Checklists for sleep environment, changing table, bathing, car, kitchen, pets, and toys."
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Reminders",
      description: "Set manual reminders for feeding, sleep, medications, and appointments. Daily, weekly, or monthly repetitions."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Growth Spurts",
      description: "Wonder Weeks integration with age-based spurts. Get descriptions, typical behaviors, and handling tips."
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud Storage",
      description: "All data is securely stored in the cloud with automatic backup. Access your tracking history from any device."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Multi-Language",
      description: "Available in German, English, Spanish, and French. Localized UI texts, recipes, articles, and notifications."
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Security & Privacy",
      description: "Email/password, Google, and Apple Sign-In. Row Level Security, encrypted storage, and GDPR compliant."
    }
  ];

  const faqs = [
    {
      question: "Is SNUGL free to use?",
      answer: "SNUGL offers a 7-day free trial with full access to all features. After the trial, you can choose between monthly or yearly subscription plans. All core features are included in the subscription."
    },
    {
      question: "Does SNUGL work offline?",
      answer: "Yes! SNUGL works completely offline. All your data is stored locally on your device and automatically syncs to the cloud when you're back online."
    },
    {
      question: "Can I share data with my partner?",
      answer: "Yes! You can invite your partner to join and manage your babies together. All tracking data syncs across both devices."
    },
    {
      question: "How do Smart Predictions work?",
      answer: "Our advanced algorithms analyze your baby's historical patterns combined with scientific research to predict when your baby might need the next feeding, sleep, or diaper change."
    },
    {
      question: "Is my data secure and private?",
      answer: "Yes, your data security is our top priority. We use bank-level encryption and are fully GDPR compliant. We never sell your data to third parties."
    },
    {
      question: "Can I track multiple babies?",
      answer: "Yes! SNUGL supports multiple baby profiles and has special Twins Support for tracking twins simultaneously."
    },
    {
      question: "Can I use SNUGL on both iPhone and Android?",
      answer: "Yes! SNUGL is available on both iOS and Android. Your data syncs seamlessly across all devices."
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <FloatingNav />

      {/* Static Background */}
      <div 
        className="fixed inset-0 w-full min-h-screen pointer-events-none"
        style={{
          backgroundImage: 'url(/Day_BG.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1
        }}
      />

      {/* Animated SVG Background - Back layers (moving left) */}
      <div 
        className="fixed inset-0 w-full min-h-screen pointer-events-none cloudLayerBack"
      />
      {/* Animated SVG Background - Front layer (moving right) */}
      <div 
        className="fixed inset-0 w-full min-h-screen pointer-events-none cloudLayerFront"
      />
      
      <style jsx global>{`
        .cloudLayerBack {
          background-image: url(/bg_layer_back.svg);
          background-size: 1206px auto;
          background-repeat: repeat-x;
          background-position: 0 bottom;
          z-index: 0;
          animation: moveLeft 100s linear infinite;
        }
        
        .cloudLayerFront {
          background-image: url(/bg_layer_front.svg);
          background-size: 1206px auto;
          background-repeat: repeat-x;
          background-position: 0 bottom;
          z-index: 1;
          animation: moveRight 120s linear infinite;
        }
        
        @keyframes moveLeft {
          from {
            background-position-x: 0;
          }
          to {
            background-position-x: -1206px;
          }
        }
        
        @keyframes moveRight {
          from {
            background-position-x: 0;
          }
          to {
            background-position-x: 1206px;
          }
        }
      `}</style>

      {/* Content */}
      <div className="relative z-10">
        
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex flex-col items-center justify-center px-4 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            {/* Logo */}
            <div className="mb-10">
              <Image
                src="/logo.svg"
                alt="SNUGL"
                width={180}
                height={40}
                className="mx-auto"
                priority
              />
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-6xl font-semibold text-gray-900 mb-6 tracking-tight">
              Baby care, simplified.
            </h1>
            
            <p className="text-lg md:text-xl text-gray-500 mb-12 max-w-md mx-auto font-light">
              Track everything that matters.<br />
              Simple. Clear. Relaxed.
            </p>

            {/* Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white rounded-2xl font-medium hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                App Store
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white rounded-2xl font-medium hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                Google Play
              </a>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute bottom-10"
          >
            <div className="w-6 h-10 rounded-full border-2 border-gray-300 flex justify-center pt-2">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1.5 h-1.5 bg-gray-400 rounded-full"
              />
            </div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-32 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
                Everything you need
              </h2>
              <p className="text-gray-500 text-lg">
                From daily care to development tracking
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-white/50"
                >
                  <div className="w-12 h-12 bg-gray-900 text-white rounded-2xl flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-32 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-500 text-lg">
                Everything you need to know about SNUGL
              </p>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  className="bg-white/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/50 shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/40 transition-colors"
                  >
                    <span className="font-medium text-gray-900 pr-8">{faq.question}</span>
                    {openFaqIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  <AnimatePresence>
                    {openFaqIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-5 text-gray-500 leading-relaxed border-t border-gray-100/50 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Minimal Footer */}
        <footer className="py-12 px-4 border-t border-gray-200/50 bg-white/30 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <Image
                src="/logo.svg"
                alt="SNUGL"
                width={80}
                height={18}
              />
              
              <div className="flex gap-8 text-sm text-gray-500">
                <Link href="/agb" className="hover:text-gray-900 transition-colors">Terms</Link>
                <Link href="/datenschutz" className="hover:text-gray-900 transition-colors">Privacy</Link>
              </div>
            </div>
            
            <div className="mt-8 text-center text-sm text-gray-400">
              © 2025 SNUGL. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
