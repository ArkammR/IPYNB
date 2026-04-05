/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  images: {
    unoptimized: false,
    formats: ['image/avif', 'image/webp'],
  },
  headers: async () => {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=3600',
          },
        ],
      },
    ];
  },
  redirects: async () => {
    return [
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
    ];
  },
  rewrites: async () => {
    return {
      beforeFiles: [
        {
          source: '/:path*',
          destination: '/:path*',
        },
      ],
    };
  },
};

module.exports = nextConfig;
