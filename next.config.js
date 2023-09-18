/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images:{
    domains: ['image.thum.io'],
  }
}

module.exports = nextConfig
