import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for deployment to any static host (Netlify, S3, etc.)
  // Uncomment the line below when deploying as static:
  // output: "export",

  // Optimize images
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },

  // Strict mode for better development experience
  reactStrictMode: true,
};

export default nextConfig;
