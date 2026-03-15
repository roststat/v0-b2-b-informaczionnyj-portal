/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    serverActions: {
      allowedOrigins: ["maxflok.ru", "www.maxflok.ru", "v0-b2-b-informaczionnyj-portal.vercel.app"],
    },
  },
}

export default nextConfig
