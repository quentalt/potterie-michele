import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "images.unsplash.com",
            },
            {
                hostname: "ogresdelaterre.fr",
            },
            {
                hostname: "plus.unsplash.com",
            }
        ],
    }
};

export default nextConfig;
