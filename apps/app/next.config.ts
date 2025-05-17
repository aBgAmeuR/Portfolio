import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    scrollRestoration: true,
  },
  output: 'export',
  images: { unoptimized: true },
  env: { APP_URL: process.env.APP_URL, GOOGLE_SITE_VERIFICATION_ID: process.env.GOOGLE_SITE_VERIFICATION_ID },
};

export default nextConfig;
