"use client";

import Image from "next/image";
import Link from "next/link";

export default function AccountDeletionGuide() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
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

      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Konto löschen – Schritt-für-Schritt
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mb-8">
          Stand: 2026-01-18
        </p>

        <div className="prose prose-gray dark:prose-invert max-w-none space-y-8 text-gray-600 dark:text-gray-300">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
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
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
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
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Was passiert danach?
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Dein Konto und alle zugehörigen Daten werden dauerhaft gelöscht.</li>
              <li>Eine Wiederherstellung ist nicht möglich.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Falls du dich nicht einloggen kannst
            </h2>
            <p className="leading-relaxed">
              Stelle sicher, dass du dich mit dem richtigen Login
              (E‑Mail/Apple/Google) anmeldest, um die Löschung durchzuführen.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
