import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "ogresdelaterre.fr",
            },
        ],
    }
};

export default nextConfig;
