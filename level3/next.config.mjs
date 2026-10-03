/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [ 
      {
        hostname: 'wanderwithsasha.com'
      },
      {
        hostname: 'plus.unsplash.com'
      }
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
