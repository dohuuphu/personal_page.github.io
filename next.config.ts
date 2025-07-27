import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    domains: [
      'drive.google.com',
      // nếu bạn có thêm host ảnh nào khác, thêm ở đây
    ],
  },
};

export default nextConfig;
