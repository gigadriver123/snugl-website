"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is SNUGL free to use?",
      answer: "SNUGL offers a 7-day free trial with full access to all features. After the trial, you can choose between monthly or yearly subscription plans. All core features are included in the subscription."
    },
    {
      question: "Does SNUGL work offline?",
      answer: "Yes! SNUGL works completely offline. All your data is stored locally on your device and automatically syncs to the cloud when you're back online. You can track your baby's activities anytime, anywhere."
    },
    {
      question: "Can I share data with my partner?",
      answer: "Absolutely! With Family Sharing, you can create a family group and invite your partner, grandparents, or caregivers. Everyone sees real-time updates and can add entries. All data syncs instantly across all devices."
    },
    {
      question: "How do Smart Predictions work?",
      answer: "Our advanced algorithms analyze your baby's historical patterns (feeding times, sleep schedules, etc.) combined with scientific research and statistical models to predict when your baby might need the next feeding, sleep, or diaper change. The predictions get more accurate over time as you track more data."
    },
    {
      question: "Is my data secure and private?",
      answer: "Yes, your data security is our top priority. We use bank-level encryption for all data transfers and storage. Your data is stored on secure Supabase servers with Row Level Security. We never sell your data to third parties and are fully GDPR compliant."
    },
    {
      question: "Can I track multiple babies?",
      answer: "Yes! SNUGL supports multiple baby profiles. You can easily switch between babies using the baby switcher on every screen. We also have special Twins Support for tracking twins simultaneously with separate timers and activities."
    },
    {
      question: "What are Live Activities (iOS)?",
      answer: "Live Activities are iOS features that show your active feeding or sleep timer directly on your lock screen and in the Dynamic Island (iPhone 14 Pro and later). You can see the timer at a glance and stop it with interactive buttons without opening the app."
    },
    {
      question: "What languages does SNUGL support?",
      answer: "SNUGL is available in 4 languages: German, English, Spanish, and French. All UI texts, recipes, guide articles, and notifications are fully localized."
    },
    {
      question: "Can I export my data?",
      answer: "Yes, you can export all your tracking data as CSV files. This is useful for sharing with pediatricians or keeping a backup. You can export data for specific time periods and categories."
    },
    {
      question: "Do I need an account to use SNUGL?",
      answer: "Yes, an account is required to enable cloud sync and family sharing features. You can sign up with email/password, Google, or Apple Sign-In. Your account ensures your data is backed up and accessible across all your devices."
    },
    {
      question: "What happens to my data if I cancel my subscription?",
      answer: "If you cancel your subscription, you'll retain read-only access to your data. You won't be able to add new entries, but you can view your history and export your data. If you resubscribe, full functionality is restored immediately."
    },
    {
      question: "Can I use SNUGL on both iPhone and Android?",
      answer: "Yes! SNUGL is available on both iOS (16.2+) and Android (8.0+). Your data syncs seamlessly across all devices, so you can start tracking on your iPhone and continue on your partner's Android device."
    },
    {
      question: "Does SNUGL track my location?",
      answer: "No, SNUGL does not track your location. We only collect data that you manually enter about your baby's activities. Your privacy is important to us."
    },
    {
      question: "How do I cancel my subscription?",
      answer: "You can cancel your subscription anytime through your Apple App Store or Google Play Store account settings. Subscriptions are managed directly through the app stores, not within the SNUGL app."
    },
    {
      question: "Are there any hidden costs?",
      answer: "No hidden costs! The subscription includes all features. There are no in-app purchases or additional fees. You get complete access to all current and future features with your subscription."
    },
    {
      question: "Can I restore my purchase on a new device?",
      answer: "Yes, you can restore your purchase on any device using the same Apple ID or Google account. Simply tap 'Restore Purchases' in the app settings, and your subscription will be restored."
    },
    {
      question: "Does SNUGL replace medical advice?",
      answer: "No, SNUGL is a tracking tool and should not replace professional medical advice. Always consult with your pediatrician or healthcare provider for medical concerns about your baby."
    },
    {
      question: "How do Growth Charts work?",
      answer: "SNUGL uses WHO (World Health Organization) growth standards to display your baby's growth percentiles. When you enter weight, height, and head circumference measurements, the app automatically plots them on standardized growth charts and shows which percentile your baby falls into."
    },
    {
      question: "What are Wonder Weeks?",
      answer: "Wonder Weeks are developmental leaps that babies go through at predictable ages. SNUGL integrates Wonder Weeks to show you when your baby might be going through a growth spurt, including typical behaviors and tips for managing these challenging periods."
    },
    {
      question: "Can I add photos to milestones?",
      answer: "Yes! For each milestone, you can add photos from your gallery to document your baby's special moments. Photos are stored securely and synced across all devices."
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4 py-6">
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
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Everything you need to know about SNUGL
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
                >
                  <span className="font-semibold text-gray-900 dark:text-white pr-8">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform flex-shrink-0 ${
                      openIndex === index ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Still have questions?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get in touch with our support team
          </p>
          <a
            href="mailto:info@snugled.com"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Contact Support
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-800 py-6 px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
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
        <div className="max-w-4xl mx-auto mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-gray-500">
          © 2025 SNUGL. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
