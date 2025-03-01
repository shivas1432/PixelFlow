"use client";

import { APP_CONFIG } from "@/lib/constants";

interface FooterProps {
  theme: "light" | "dark";
}

export default function Footer({ theme }: FooterProps) {
  const isDark = theme === "dark";

  return (
    <footer
      className={`w-full py-8 transition-colors duration-300 ${
        isDark ? "text-white" : "text-neutral-800 dark:text-neutral-200"
      }`}
    >
      <div className="container mx-auto text-center">
        <div
          className={`mx-auto max-w-6xl border-t pt-6 ${
            isDark
              ? "border-white/20"
              : "border-gray-300 dark:border-gray-700"
          }`}
        >
          {/* Logo / Name */}
          <h2 className="text-lg font-bold">
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              PixelFlow
            </span>
          </h2>

          {/* Tagline */}
          <p className="mt-2 text-sm italic opacity-80">
            Flowing seamless design patterns
          </p>

          {/* Links */}
          <div className="flex justify-center gap-4 mt-4">
            <a
              href={APP_CONFIG.GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:underline"
            >
              GitHub
            </a>
            <a
              href={APP_CONFIG.TWITTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:underline"
            >
              Twitter
            </a>
          </div>

          {/* Copyright */}
          <p className="mt-4 text-xs opacity-70">
            © {new Date().getFullYear()} PixelFlow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
