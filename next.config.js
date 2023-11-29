/** @type {import('next').NextConfig} */
const nextConfig = {

    output: 'export',

    reactStrictMode: true,
    swcMinify: true,
    images: {
      unoptimized: true,
    },

  //   reactStrictMode: true,
  
    // images: {
    //   loader: 'akamai',
    //   path: '',
    // },
  //  // Add basePath
  //   basePath: '/nextjs-blog',
  
  }
  
  module.exports = nextConfig
