import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "cdn.dummyjson.com",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
