/** @type {import('next').NextConfig} */
const nextConfig = {

    output: 'export',
    basePath: '/nextjs-blog',
    reactStrictMode: true,
    swcMinify: true,
    images: {
      unoptimized: true,
      path:`${basePath}/public/images`,
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
