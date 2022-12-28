/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["https://3dot.infura-ipfs.io", "infura-ipfs.io"],
  },
};

module.exports = nextConfig;
