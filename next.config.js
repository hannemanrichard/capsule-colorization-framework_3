/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    REACT_APP_CLUSTER: process.env.REACT_APP_CLUSTER,
  },
  images: {
    domains: [
      'a0.muscache.com'
    ],
  },
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
}

module.exports = nextConfig
