"use client";

import { Github, Twitter } from "lucide-react";
import Image from "next/image";
import { APP_CONFIG } from "@/lib/constants";

interface NavbarProps {
  theme: "light" | "dark";
}

export default function Navbar({ theme }: NavbarProps) {
  const isDark = theme === "dark";

  return (
    <nav className="w-full py-5">
      <div className="container flex items-center justify-between mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <span className="flex items-center gap-3">
          <Image
            src="/favicon.svg"
            alt="PixelFlow Logo"
            width={32}
            height={32}
            className="flex-shrink-0 h-8 w-8"
            priority
            draggable={false}
          />
          <span 
            className={`text-2xl sm:text-3xl font-black tracking-tight ${
              isDark ? "text-white" : "text-gray-900"
            }`}
            style={{ 
              fontFamily: 'serif',
              letterSpacing: '-0.02em'
            }}
          >
            PixelFlow
          </span>
        </span>

        {/* Socials */}
        <div className="flex items-center gap-3">
          {[
            { href: APP_CONFIG.TWITTER_URL, icon: Twitter, label: "Twitter" },
            { href: APP_CONFIG.GITHUB_URL, icon: Github, label: "GitHub" },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={`rounded-full p-2 transition-colors duration-300 ${
                isDark
                  ? "bg-white/5 hover:bg-white/10"
                  : "bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700"
              }`}
            >
              <Icon
                className={`h-5 w-5 sm:h-6 sm:w-6 ${
                  isDark ? "text-white" : "text-neutral-800 dark:text-neutral-200"
                }`}
                strokeWidth={1.5}
              />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}