/** @type {import('next').NextConfig} */
const nextConfig = {

    output: 'export',
    basePath: '/nextjs-blog',
    reactStrictMode: true,
    swcMinify: true,
    images: {
      unoptimized: true,
      disableStaticImages: true,
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
