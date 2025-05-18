/** @type {import('next').NextConfig} */
const { withPlausibleProxy } = require('next-plausible');

const nextConfig = withPlausibleProxy()({
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/blog/build-mvp-startup-guide',
        destination: '/blog/build-mvp',
        permanent: true,
      },
      {
        source: '/blog/building-lean-mvp-process',
        destination: '/blog/build-mvp',
        permanent: true,
      },
      {
        source: '/blog/how-to-build-an-mvp',
        destination: '/blog/build-mvp',
        permanent: true,
      },
      {
        source: '/blog/how-to-build-mvp-startup-guide',
        destination: '/blog/build-mvp',
        permanent: true,
      },
      {
        source: '/blog/building-mvp-startup-guide-2024',
        destination: '/blog/build-mvp',
        permanent: true,
      },
      {
        source: '/blog/building-lean-mvp-process',
        destination: '/blog/build-mvp',
        permanent: true,
      },
      {
        source: '/blog/building-mvp-startup-guide',
        destination: '/blog/build-mvp',
        permanent: true,
      },
      {
        source: '/blog/building-mvp-guide',
        destination: '/blog/build-mvp',
        permanent: true,
      },
      {
        source: '/build-mvp',
        destination: '/blog/build-mvp',
        permanent: true,
      },
      {
        source: '/blog/mvp-development-agency',
        destination: '/mvp-development',
        permanent: true,
      },
      {
        source: '/blog/build-mvp-startup-development-strategy',
        destination: '/mvp-development',
        permanent: true,
      },
      {
        source: '/blog/minimum-viable-product-development-methods',
        destination: '/mvp-development',
        permanent: true,
      },
    ];
  },
});

module.exports = nextConfig;
