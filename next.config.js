/** @type {import('next').NextConfig} */
const path = require('path')

// const nextConfig = {
//   reactStrictMode: true,
//   sassOptions: {
//     includePaths: [path.join(__dirname, 'styles')],
//   },

// }
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
  exportPathMap: function () {
    return {
      '/': { page: '/' }
    };
  }
};



// module.exports = nextConfig
