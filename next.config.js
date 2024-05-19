/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'openweathermap.org',
      },
      {
        protocol: 'https',
        hostname: 'petdiary-bucket.s3.ap-southeast-2.amazonaws.com',
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
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
