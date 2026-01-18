"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AccountDeletionGuide() {
  return (
    <div className="min-h-screen relative overflow-hidden">
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

      {/* Navigation */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <nav className="flex items-center gap-1 p-1.5 bg-white/80 backdrop-blur-lg border border-white/20 rounded-full shadow-lg shadow-black/5 ring-1 ring-black/5">
          <Link
            href="/"
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </nav>
      </div>

      {/* Content */}
      <div className="relative z-10 pt-32 pb-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-sm border border-white/50"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Konto löschen – Schritt-für-Schritt
          </h1>
          <p className="text-gray-500 mb-8">
            Updated at 2026-01-18
          </p>

          <div className="prose prose-gray max-w-none space-y-8 text-gray-600">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Voraussetzungen
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Du bist in der App angemeldet.</li>
                <li>
                  Optional: Wenn du ein aktives Abo hast, kündige es vorher im App
                  Store bzw. Google Play Store.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Schritte in der App
              </h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>Öffne die App.</li>
                <li>Gehe unten rechts auf <strong>Einstellungen</strong>.</li>
                <li>Scrolle zum Abschnitt <strong>Konto</strong>.</li>
                <li>Tippe auf <strong>Konto löschen</strong>.</li>
                <li>Lies den Hinweis und bestätige die Löschung.</li>
                <li>
                  Die App meldet dich automatisch ab und dein Konto wird gelöscht.
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Was passiert danach?
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Dein Konto und alle zugehörigen Daten werden dauerhaft gelöscht.</li>
                <li>Eine Wiederherstellung ist nicht möglich.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Falls du dich nicht einloggen kannst
              </h2>
              <p className="leading-relaxed">
                Stelle sicher, dass du dich mit dem richtigen Login
                (E‑Mail/Apple/Google) anmeldest, um die Löschung durchzuführen.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
