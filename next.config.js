/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      "images.pexels.com",
      "lexica-serve-encoded-images.sharif.workers.dev",
    ],
  },
};

module.exports = nextConfig;
