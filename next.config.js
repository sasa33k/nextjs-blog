/** @type {import('next').NextConfig} */
const nextConfig = {

    output: 'export',
    reactStrictMode: true,
    swcMinify: true,
    images: {
      loader: 'custom',
      loaderFile: './img-loader.js',
    },

  
  } 
  
  module.exports = nextConfig
