/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@monorepo/ui-components", "@monorepo/utils", "@monorepo/feature-x", "@monorepo/feature-y"],
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
