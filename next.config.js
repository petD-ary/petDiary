/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `http://localhost:5001/api/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
