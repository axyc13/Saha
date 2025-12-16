import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["pino", "thread-stream", "pino-pretty"],
};

export default withPayload(nextConfig);
