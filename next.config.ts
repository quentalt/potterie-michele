import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "images.selency.com",
            },
        ],
    }
};

export default nextConfig;
