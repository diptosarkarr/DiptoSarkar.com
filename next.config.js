/** @type {import('next').NextConfig} */
const path = require('path');

module.exports = {
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(mp4|avi|mov|mkv)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/videos/',
          outputPath: 'static/videos/',
          name: '[name].[ext]',
        },
      },
    });

    return config;
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
    };
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/<your-repo-name>' : '',
};



// module.exports = nextConfig
