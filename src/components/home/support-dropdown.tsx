"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  User,
  Github,
  Send,
  Instagram,
  Linkedin,
  Globe,
  ChevronUp,
} from "lucide-react";

interface SocialDropdownProps {
  theme?: "light" | "dark";
}

import { APP_CONFIG } from "@/lib/constants";

const SocialDropdown: React.FC<SocialDropdownProps> = ({
  theme = "light",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const socialLinks = [
    {
      name: "GitHub",
      url: APP_CONFIG.GITHUB_URL,
      icon: Github,
      color: "bg-gray-800",
      description: "View source code"
    },
    {
      name: "Telegram",
      url: APP_CONFIG.TELEGRAM_URL,
      icon: Send,
      color: "bg-blue-500",
      description: "Get in touch"
    },
    {
      name: "Instagram",
      url: APP_CONFIG.INSTAGRAM_URL,
      icon: Instagram,
      color: "bg-pink-500",
      description: "Follow updates"
    },
    {
      name: "LinkedIn",
      url: APP_CONFIG.LINKEDIN_URL,
      icon: Linkedin,
      color: "bg-blue-600",
      description: "Professional profile"
    },
    {
      name: "Website",
      url: APP_CONFIG.WEBSITE_URL,
      icon: Globe,
      color: "bg-indigo-500",
      description: "Visit portfolio"
    }
  ];

  const handleSocialClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div ref={dropdownRef} className="fixed bottom-6 right-4 sm:right-6 z-50">
      {/* Dropdown Menu */}
      <div
        className={`
          absolute bottom-16 right-0 mb-2 w-[calc(100vw-2rem)] max-w-xs sm:w-72 md:w-64 lg:w-[18rem] rounded-xl backdrop-blur-md border shadow-xl
          transform transition-all duration-300 ease-out origin-bottom-right
          ${
            isOpen
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 translate-y-2 pointer-events-none"
          }
          ${
            theme === "dark"
              ? "bg-black/40 border-white/10"
              : "bg-white border-gray-300"
          }
        `}
      >
        <div className="p-3 sm:p-4">
          {/* Header */}
          <div className="text-center mb-4">
            <h3 className={`font-semibold text-base ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}>
              Connect with Me
            </h3>
            <p className={`text-sm ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}>
              Follow for updates & collaboration
            </p>
          </div>

          {/* Social Links */}
          <div className="space-y-2">
            {socialLinks.map((social) => (
              <button
                key={social.name}
                onClick={() => handleSocialClick(social.url)}
                className={`
                  w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 cursor-pointer
                  ${
                    theme === "dark"
                      ? "hover:bg-white/10 text-white/90 hover:text-white"
                      : "hover:bg-gray-100 text-gray-800 hover:text-gray-900"
                  }
                `}
              >
                <div className={`w-8 h-8 ${social.color} rounded-lg flex items-center justify-center`}>
                  <social.icon className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1 text-left">
                  <div className="font-medium text-sm">
                    {social.name}
                  </div>
                  <div className={`text-xs ${
                    theme === "dark" ? "text-white/60" : "text-gray-500"
                  }`}>
                    {social.description}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Footer */}
          <div className={`mt-4 pt-3 border-t text-center text-xs ${
            theme === "dark" 
              ? "border-white/10 text-gray-400" 
              : "border-gray-200 text-gray-500"
          }`}>
            Built with ❤️ by Shivashanker
          </div>
        </div>
      </div>

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-10 h-10 sm:w-12 sm:h-12 rounded-full backdrop-blur-md border shadow-xl
          flex items-center justify-center transition-all duration-300
          ${
            theme === "dark"
              ? "bg-black/50 border-white/10 hover:bg-black/40"
              : "bg-white border-gray-300 hover:bg-gray-50"
          }
          ${isOpen ? "rotate-180" : "rotate-0"}
        `}
        aria-label="Social links"
      >
        {isOpen ? (
          <ChevronUp
            className={`w-5 sm:w-6 h-5 sm:h-6 ${
              theme === "dark" ? "text-white/80" : "text-gray-600"
            }`}
          />
        ) : (
          <User
            className={`w-5 sm:w-6 h-5 sm:h-6 ${
              theme === "dark" ? "text-white/80" : "text-indigo-600"
            }`}
          />
        )}
      </button>
    </div>
  );
};

export default SocialDropdown;