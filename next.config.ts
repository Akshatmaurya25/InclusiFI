import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG:true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "boostylabs.com",
      },
      {
        protocol: "https",
        hostname: "avataaars.io",
      },
    ],
  },
};

export default nextConfig;
