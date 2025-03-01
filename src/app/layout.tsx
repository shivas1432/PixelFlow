import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/providers/theme-provider";

export const metadata: Metadata = {
  metadataBase: new URL("https://pixelflow.dev"), // Update with your actual domain
  title: "PixelFlow - Modern CSS Background Patterns & Gradients",
  description:
    "Create stunning websites with our curated collection of 150+ modern CSS background patterns and gradients for your websites and apps. Easily copy and paste into your next project. Crafted with modern CSS and Tailwind for seamless integration.",
  keywords: [
    // Primary keywords (focus on user intent)
    "css background patterns",
    "background patterns generator",
    "css gradients generator",
    "tailwind css backgrounds",
    "web design backgrounds",
    "modern ui patterns",
    "css background snippets",
    "gradient generator tool",

    // Long-tail keywords (better for ranking)
    "free css background patterns library",
    "responsive background patterns for websites",
    "modern geometric css patterns",
    "tailwind background pattern components",
    "css grid background patterns",
    "animated background patterns css",
    "minimalist website backgrounds",
    "professional web design patterns",

    // Problem-solving keywords
    "how to create css background patterns",
    "beautiful website background ideas",
    "css pattern library for developers",
    "ready to use background patterns",
    "copy paste css backgrounds",
    "website background design inspiration",

    // Background snippets keywords
    "background snippets",
    "background snippets tailwind",
    "background snippets css",
    "modern background snippets tailwind",
    "react background snippets",
    "code snippets background",
    "tailwind background snippets",
    "collection of modern background snippets",
    "collection of modern background snippets tailwind css",
    "best background css",
    "css background snippet",
    "snippet background",
    "snippets tailwind css",
    "snippets",

    // Modern background keywords
    "modern css background",
    "modern gradient background css",
    "modern background color css",
    "tailwind css modern background",

    // Background examples keywords
    "background css examples",
    "css background style examples",
    "tailwind css background image example",
    "tailwind css layout examples",

    // Beautiful background keywords
    "beautiful backgrounds snippet",
    "beautiful background css",
    "beautiful background tailwind",
    "beautiful gradient background tailwind",

    // Gradient background keywords
    "gradient background css",
    "gradient background",
    "gradient background tailwind",
    "tailwind background gradient",
    "best gradient background tailwind css",

    // Website background keywords
    "background for website",
    "background for react website",
    "react app background",
    "background for react js",
    "background for nextjs",
    "background animation next js",

    // Pattern keywords
    "background pattern",
    "background pattern design",
    "background pattern css",
    "background pattern for website",
    "background pattern tailwind",
    "background pattern tailwind css",
    "pattern background css",

    // Brand keywords
    "pixelflow",
    "pixel flow",
    "pixelflow background",
    "pixelflow patterns",

    // General keywords
    "tailwind css",
    "background css",
    "background tailwind css",

    // Primary keywords (high intent)
    "cool gradient backgrounds for websites",
    "free CSS background patterns",
    "unique website background designs",
    "modern gradient color backgrounds",
    "geometric backgrounds for websites",
    "decorative website background patterns",
    "website background effects",
    "stylish backgrounds for web design",

    // Long-tail keywords (highly targeted)
    "where to find cool gradient website backgrounds",
    "best sites for free CSS background patterns",
    "how to add gradients in Tailwind CSS",
    "trendy background effects for websites",
    "creative backgrounds for frontend projects",
    "tailwind-compatible gradient color ideas",
    "lightweight CSS background snippets for websites",
    "open-source background patterns for web developers",
    "free gradient palettes for web design",

    // LSI (related context keywords)
    "UI background resources",
    "frontend design assets",
    "background pattern collections",
    "Tailwind UI backgrounds",
    "free background textures",
    "web design pattern tools",
    "CSS design inspiration",
    "gradient pattern ideas",
    "website background tools",
    "design-ready gradients and patterns",
  ].join(", "),

  authors: [{ name: "Kanugula Shivashanker", url: "https://github.com/shivas1432" }],
  creator: "Kanugula Shivashanker",
  publisher: "PixelFlow",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "PixelFlow - Modern CSS Background Patterns & Gradients",
    description:
      "Explore a 150+ collection of handcrafted background patterns and gradients. Perfect for modern websites. Easy to use and customize.",
    url: "https://pixelflow.dev", // Update with your actual domain
    siteName: "PixelFlow",
    type: "website",
    images: [
      {
        url: "/og-banner.png",
        width: 1200,
        height: 630,
        alt: "PixelFlow – Modern CSS Background Patterns and Gradients",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PixelFlow - Modern CSS Background Patterns & Gradients",
    description:
      "150+ curated CSS background patterns and gradients. Tailwind CSS ready, responsive, and free to use. Perfect for modern web design.",
    images: ["/og-banner.png"],
    creator: "@shivas1432", // Update with your Twitter handle if you have one
    site: "@shivas1432",
  },
  alternates: {
    canonical: "https://pixelflow.dev", // Update with your actual domain
  },

  classification: "Web Development, CSS Tools, Design Resources",

  // Additional SEO enhancements
  category: [
    "Web Development Tools",
    "Frontend Development",
    "CSS Tools",
    "UI Design Resources",
    "Background Patterns",
    "Gradients Generator",
    "Tailwind CSS Resources",
    "Web Design Assets",
    "Open Source Tools",
    "Developer Productivity",
    "Creative Coding",
    "Design Inspiration",
    "Code Snippets",
    "Modern Web Design",
    "Responsive Design",
  ].join(", "),

  // Add app-specific metadata
  applicationName: "PixelFlow",

  // Schema.org structured data hints
  other: {
    "application-name": "PixelFlow",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "PixelFlow",
    "msapplication-TileColor": "#6366f1",
    "theme-color": "#6366f1",

    // Additional meta tags for better discovery
    "google-site-verification": "your-google-verification-code", // Add your verification code

    // Rich snippets hints
    "article:author": "Kanugula Shivashanker",
    "article:publisher": "https://github.com/shivas1432",
    "article:section": "Web Development",
    "article:tag": "CSS, Background Patterns, Gradients, Web Design, PixelFlow",
    "og:updated_time": new Date().toISOString(),
    "og:locale": "en_US",
    "og:type": "website",

    "revisit-after": "7 days",
    distribution: "global",
    rating: "general",
    copyright: "© 2025 Kanugula Shivashanker. All rights reserved.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* og image */}
        <meta
          property="og:image"
          content="https://pixelflow.dev/og-banner.png" // Update with your actual domain
        />
        <meta
          name="twitter:image"
          content="https://pixelflow.dev/og-banner.png" // Update with your actual domain
        />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "PixelFlow",
              url: "https://pixelflow.dev/", // Update with your actual domain
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "PixelFlow",
              description:
                "Modern CSS background patterns and gradients generator",
              url: "https://pixelflow.dev", // Update with your actual domain
              applicationCategory: "DeveloperApplication",
              operatingSystem: "Web",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
              },
              author: {
                "@type": "Person",
                name: "Kanugula Shivashanker",
                url: "https://github.com/shivas1432",
              },
              publisher: {
                "@type": "Organization",
                name: "PixelFlow",
                url: "https://pixelflow.dev", // Update with your actual domain
              },
              datePublished: "2025-01-01",
              dateModified: new Date().toISOString(),
              inLanguage: "en-US",
              isAccessibleForFree: true,
              keywords:
                "CSS, background patterns, gradients, web design, tailwind css, pixelflow",
              screenshot: [
                // Update these URLs with your actual domain and screenshots
                {
                  "@type": "ImageObject",
                  contentUrl:
                    "https://pixelflow.dev/snapshots/screenshot-1.png",
                  description:
                    "PixelFlow - Modern CSS Background Patterns & Gradients",
                },
                // Add more screenshots as needed
              ],
              softwareVersion: "1.0.0",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                ratingCount: "100",
                bestRating: "5",
                worstRating: "1",
              },
              sameAs: [
                "https://github.com/shivas1432",
                "https://www.linkedin.com/in/shivashanker-kanugula-51a512252",
                "https://instagram.com/ss_web_innovations",
                "https://www.shivashanker.com",
                "https://t.me/helpme_coder",
              ],
              featureList: [
                "150+ CSS and Tailwind background patterns",
                "Gradient, geometric, decorative, and effect-based styles",
                "Copy-paste ready snippets for developers",
                "Modern flowing designs",
                "Zero dependencies",
              ],
              browserRequirements: "Requires modern browser with CSS3 support",
              interactionStatistic: {
                "@type": "InteractionCounter",
                interactionType: { "@type": "http://schema.org/ViewAction" },
                userInteractionCount: 1000,
              },
            }),
          }}
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${GeistSans.className} bg-background text-foreground antialiased min-h-screen flex items-center justify-center`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
            <Analytics />
            <SpeedInsights />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}