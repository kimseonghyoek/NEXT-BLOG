const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePath: [path.join(__dirname + 'styles')]
  }
}

module.exports = nextConfig
