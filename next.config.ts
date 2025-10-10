import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    dirs: ['src'], // Only run ESLint on these directories during production builds (next build)
  },
};

export default nextConfig;
