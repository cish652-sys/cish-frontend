// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
// turbopack: {
//     root: "/home/basudev/Documents/cish-website",
//   },};

// export default nextConfig;


module.exports = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'cish-web-steel.vercel.app',
          },
        ],
        destination: 'https://cish.org.in/:path*',
        permanent: true,
      },
    ]
  },
}