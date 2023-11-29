/** @type {import('next').NextConfig} */
const nextConfig = {
     reactStrictMode: true,
   // Add basePath
   basePath: '/nextjs-blog',
     images: {
       loader: "akamai",
       path: "/",
     },
    output: 'export',
  
  }
  
  module.exports = nextConfig
