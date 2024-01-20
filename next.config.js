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
  async headers() {
  return [
      {
          // matching all API routes
          source: "/api/:path*",
          headers: [
              { key: "Access-Control-Allow-Credentials", value: "true" },
              { key: "Access-Control-Allow-Origin", value: "https://jomayang.github.io/capsule-endo/" }, // replace this your actual origin
              { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
              { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
          ]
      }
  ]
},
}

module.exports = nextConfig
