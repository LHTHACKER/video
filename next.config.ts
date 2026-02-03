import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/features/i18n/request.ts");

const nextConfig: NextConfig = {
  output: "export", // Commented out - incompatible with dynamic features (cookies)
  // Note: Re-enable this for Capacitor builds, but disable for local development
  images: {
    unoptimized: true, // Required for static export
  },
};

export default withNextIntl(nextConfig);
