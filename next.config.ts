import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  // webpack: (config) => {
  //   config.module.rules.push({
  //     test: /\.json$/,
  //     type: "json",
  //   })
  //   return config
  // },
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap",
      },
    ]
  },
};

export default nextConfig;
