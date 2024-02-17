/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'openweathermap.org',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/B552584/ArpltnStatsSvc/:path*',
        destination: `http://apis.data.go.kr/B552584/ArpltnStatsSvc/:path*`,
      },
      {
        source: '/api/:path*',
        destination: 'http://54.252.147.64:5001/api/:path*',
      },
    ];
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

module.exports = nextConfig;
