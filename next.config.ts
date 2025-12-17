import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["pino", "thread-stream", "pino-pretty"],
  },
};

export default withPayload(nextConfig);
