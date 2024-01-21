/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')([
  'antd',
  'rc-picker',
  'rc-pagination',
  'rc-notification',
]);

module.exports = withTM({
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/B552584/ArpltnStatsSvc/:path*',
        destination: `http://apis.data.go.kr/B552584/ArpltnStatsSvc/:path*`,
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
});

module.exports = nextConfig;
