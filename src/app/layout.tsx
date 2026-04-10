import type { Metadata } from "next";
import "./globals.css";

const BASE_URL = "https://a-level-physics.koydo.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    template: "%s | Koydo A Level Physics",
    default: "Koydo A Level Physics — Exam Prep",
  },
  description: "A Level Physics exam preparation. Practice questions, mock tests, and AI-powered study tools. Study aid only. Not affiliated with official examination boards.",
  authors: [{ name: "Koydo", url: "https://koydo.app" }],
  creator: "Koydo",
  publisher: "Koydo",
  category: "education",
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content="#D97706" />
      </head>
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)] antialiased">
        {children}
      </body>
    </html>
  );
}
