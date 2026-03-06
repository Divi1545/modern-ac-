/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Suppress hydration warnings in production
  reactStrictMode: true,
  // Ensure trailing slashes are consistent
  trailingSlash: false,
  // Disable x-powered-by header
  poweredByHeader: false,
  // ESLint during builds
  eslint: {
    ignoreDuringBuilds: true,
  },
  // TypeScript errors
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
