/** @type {import('next').NextConfig} */
const nextConfig = {

    output: 'export',
    basePath: '/nextjs-blog/public',
    reactStrictMode: true,
    swcMinify: true,
    images: {
      unoptimized: true,
      path:'/images',
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
