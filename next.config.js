/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Remove serverActions as it's enabled by default now.
    serverComponentsExternalPackages: ['mongoose'], // You can keep this if you need it
  },
  images: {
    // Replace "domains" with "remotePatterns"
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com', // The domain you allow for loading external images
      },
    ],
  },
};

module.exports = nextConfig;
