import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  i18n: {
    locales: ["de", "en"], // ✅ supported languages
    defaultLocale: "en",         // ✅ default langage
  },
};

export default nextConfig;

