export const PATTERN_CATEGORIES = [
  { id: "all", label: "All Patterns" },
  { id: "gradients", label: "Gradients" },
  { id: "geometric", label: "Geometric" },
  { id: "decorative", label: "Decorative" },
  { id: "effects", label: "Effects" },
  { id: "favourites", label: "Favourites" },
] as const;

export const THEME_CONFIG = {
  light: "light",
  dark: "dark",
} as const;

export const SUPPORT_CONFIG = {
  UPI_ID: "shivashanker@paytm", // Update with your UPI ID
  PAYEE_NAME: "Kanugula Shivashanker",
  UPI_MSG: "Support PixelFlow development!",
  BUY_ME_COFFEE_URL: "https://buymeacoffee.com/shivashanker", // Update with your URL if you have one
} as const;

export const APP_CONFIG = {
  GITHUB_URL: "https://github.com/shivas1432/PixelFlow",
  TWITTER_URL: "https://twitter.com/",
  LINKEDIN_URL: "https://www.linkedin.com/in/shivashanker-kanugula-51a512252",
  INSTAGRAM_URL: "https://instagram.com/ss_web_innovations",
  WEBSITE_URL: "https://www.shivashanker.com",
  TELEGRAM_URL: "https://t.me/helpme_coder",
  CONTRIBUTING_URL: "https://github.com/shivas1432/PixelFlow#contributing",
  ISSUES_URL: "https://github.com/shivas1432/PixelFlow/issues",
  DISCUSSIONS_URL: "https://github.com/shivas1432/PixelFlow/discussions",
} as const;