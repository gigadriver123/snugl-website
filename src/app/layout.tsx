import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MoonMenu from "@/components/MoonMenu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SNUGL - Die Baby Tracker App für moderne Eltern",
  description: "SNUGL hilft Eltern, den Alltag mit ihrem Baby einfach und entspannt zu organisieren. Tracken Sie Schlaf, Mahlzeiten, Windeln und mehr.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MoonMenu />
        <div className="ml-0 md:ml-32">
          {children}
        </div>
      </body>
    </html>
  );
}
