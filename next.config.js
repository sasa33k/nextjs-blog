/** @type {import('next').NextConfig} */
const nextConfig = {

    output: 'export',
    reactStrictMode: true,
    assetPrefix: !debug ? "/nextjs-blog/" : "",
    images: {
      loader: 'custom',
      loaderFile: './img-loader.js',
        remotePatterns: [
            {
                protocol: "https",
                hostname: "sasa33k.github.io",
            },
        ],
    },

  
  } 
  
  module.exports = nextConfig
