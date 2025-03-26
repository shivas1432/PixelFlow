// Production-ready components | PixelFlow
"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Github, Copy, Eye, Code2, Star } from "lucide-react";
import { APP_CONFIG } from "@/lib/constants";

interface HeroProps {
  activePattern?: string | null;
  setActivePattern?: (pattern: string | null) => void;
  theme: "light" | "dark";
}

const handleBrowsePatternsClick = () => {
  document.getElementById("pattern-showcase")?.scrollIntoView({
    behavior: "smooth",
  });
};

export default function Hero({ theme }: HeroProps) {
  const isDark = theme === "dark";

  return (
    <div className="bg-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Top Badge */}
        <div className="text-center mb-12">
          <a
            href={APP_CONFIG.GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Badge
              variant="outline"
              className={`px-4 py-2 text-sm font-medium rounded-lg border transition-colors ${
                isDark
                  ? "bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700"
                  : "bg-white border-gray-300 text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Star className="h-4 w-4 mr-2" />
              Star us on GitHub
              <ArrowRight className="h-4 w-4 ml-2" />
            </Badge>
          </a>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-8">
          <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4 ${
            isDark ? "text-white" : "text-gray-900"
          }`} style={{ fontFamily: 'serif' }}>
            Professional CSS Patterns
            <br />
            <span className="text-indigo-600" style={{ fontFamily: 'serif' }}>Made Simple</span>
          </h1>
          
          <p className={`text-base sm:text-lg max-w-2xl mx-auto leading-7 mb-8 font-medium ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`} style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
            PixelFlow provides a curated collection of modern CSS background patterns 
            and gradients. Copy-paste ready code for React, Next.js, and any modern framework.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
            <Button
              size="lg"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 text-base font-semibold"
              onClick={handleBrowsePatternsClick}
            >
              Browse Patterns
              <Code2 className="h-5 w-5 ml-2" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className={`px-8 py-3 text-base font-semibold ${
                isDark
                  ? "border-gray-600 text-gray-300 hover:bg-gray-800"
                  : "border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
              onClick={() => window.open(APP_CONFIG.CONTRIBUTING_URL, "_blank")}
            >
              <Github className="h-5 w-5 mr-2" />
              Contribute
            </Button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className={`p-6 rounded-xl border ${
            isDark 
              ? "bg-gray-800 border-gray-700" 
              : "bg-white border-gray-200"
          }`}>
            <Copy className={`h-6 w-6 mb-3 ${isDark ? "text-indigo-400" : "text-indigo-600"}`} />
            <h3 className={`text-lg font-bold mb-2 ${isDark ? "text-white" : "text-gray-900"}`} style={{ fontFamily: 'serif' }}>
              Copy & Paste Ready
            </h3>
            <p className={`text-sm font-medium ${isDark ? "text-gray-400" : "text-gray-600"}`} style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
              Get production-ready CSS and Tailwind code snippets. 
              No configuration needed, just copy and use.
            </p>
          </div>

          <div className={`p-6 rounded-xl border ${
            isDark 
              ? "bg-gray-800 border-gray-700" 
              : "bg-white border-gray-200"
          }`}>
            <Eye className={`h-6 w-6 mb-3 ${isDark ? "text-indigo-400" : "text-indigo-600"}`} />
            <h3 className={`text-lg font-bold mb-2 ${isDark ? "text-white" : "text-gray-900"}`} style={{ fontFamily: 'serif' }}>
              Live Preview
            </h3>
            <p className={`text-sm font-medium ${isDark ? "text-gray-400" : "text-gray-600"}`} style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
              See exactly how patterns look before implementing. 
              Interactive previews for better decision making.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className={`border-t pt-12 ${isDark ? "border-gray-800" : "border-gray-200"}`}>
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <div className={`text-2xl font-bold mb-1 ${isDark ? "text-white" : "text-gray-900"}`}>
                150+
              </div>
              <div className={`text-xs font-bold uppercase tracking-wide ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`} style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                CSS Patterns
              </div>
            </div>
            
            <div>
              <div className={`text-2xl font-bold mb-1 ${isDark ? "text-white" : "text-gray-900"}`}>
                100%
              </div>
              <div className={`text-xs font-bold uppercase tracking-wide ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`} style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                Open Source
              </div>
            </div>
            
            <div>
              <div className={`text-2xl font-bold mb-1 ${isDark ? "text-white" : "text-gray-900"}`}>
                0
              </div>
              <div className={`text-xs font-bold uppercase tracking-wide ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`} style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                Dependencies
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
