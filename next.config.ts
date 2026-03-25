import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Redirect old subdomain offer.noblelandcompany.com to the Texas landing page
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "offer.noblelandcompany.com" }],
        destination: "https://www.noblelandcompany.com/we-buy-land-texas",
        permanent: true,
      },
    ];
  },

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
