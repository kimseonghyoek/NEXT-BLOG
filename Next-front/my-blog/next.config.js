const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePath: [path.join(__dirname + 'styles')]
  },
  rewrites() {
    return [
      {
        source: `/:path*`,
        destination: `http://localhost:8000/:path*`
      }
    ]
  }
}

module.exports = nextConfig
