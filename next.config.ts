// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
// turbopack: {
//     root: "/home/basudev/Documents/cish-website",
//   },};

// export default nextConfig;


// module.exports = {
//   async redirects() {
//     return [
//       {
//         source: '/:path*',
//         has: [
//           {
//             type: 'host',
//             value: 'cish-web-steel.vercel.app',
//           },
//         ],
//         destination: 'https://cish.org.in/:path*',
//         permanent: true,
//       },
//     ]
//   },
// }

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.nationalfarmerportal.org',
        port: '',
        pathname: '/uploads/**',
      },
      {
        protocol: 'http',
        hostname: '13.234.154.152',
        port: '9000', 
        pathname: '/nfp-bucket/**',
      },
      {
        protocol: 'https',
        hostname: 'example.com',
        port: '',
        pathname: '/images/**',
      },
      {
        protocol: 'http',
        hostname: '13.234.154.152',
        port: '9000',
        pathname: '/cish-bucket/**', // ✅ Add this line
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '9000',
        pathname: '/nfp-bucket/**',
      },
     {
        protocol: "http",
        hostname: "13.234.154.152",
        port: "9000",
        pathname: "/cish-bucket/**",
      },
    ],
  },
};

module.exports = nextConfig;