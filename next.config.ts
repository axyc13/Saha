import { withPayload } from "@payloadcms/next/withPayload";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["pino", "thread-stream", "pino-pretty"],
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default initOpenNextCloudflareForDev(withPayload(nextConfig));
