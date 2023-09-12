/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: { appDir: true },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'raw.githubusercontent.com',
            port: '',
            pathname: '/thepauldv/blogspots/main/images/**',
          },
        ],
      },
}

module.exports = nextConfig
