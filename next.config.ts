import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Standalone packaging is for self-hosted deployments. Vercel's Next.js
  // build adapter handles output packaging itself; Next 16.3 drops the trace
  // file that standalone packaging still expects when an adapter is active.
  output: process.env.VERCEL ? undefined : "standalone",
};

export default nextConfig;
