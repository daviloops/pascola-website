/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['app', 'components', 'utils'], // Only run ESLint on these directories during production builds (next build)
  },
};

module.exports = nextConfig;