/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['wp.dreamitsolution.net']
  }
}

module.exports = nextConfig
