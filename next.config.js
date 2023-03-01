/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  publicRuntimeConfig: {
    backendUrl: process.env.BASE_URL_API,
  },
  env: {
    APP_NAME: process.env.APP_NAME,
    BASE_URL_API: process.env.BASE_URL_API,
    BASE_URL_AUTH: process.env.BASE_URL_AUTH,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: "/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;