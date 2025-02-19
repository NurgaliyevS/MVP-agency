/** @type {import('next').NextConfig} */
const { withPlausibleProxy } = require('next-plausible');

const nextConfig = withPlausibleProxy()({
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mars-images.imgix.net',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'assets.seobotai.com',
        port: '',
        pathname: '/**'
      }
    ]
  },
});

module.exports = nextConfig;
