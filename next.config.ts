import type { NextConfig } from "next";
import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  images: {
    // 60 is used by the small logo in the navbar and footer; 75 is the Next.js default.
    qualities: [60, 75],
  },
  experimental: {
    optimizeCss: true,
  },
};

export default withBundleAnalyzer(nextConfig);