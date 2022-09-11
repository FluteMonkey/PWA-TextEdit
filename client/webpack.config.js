const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        title: 'PWA text Editor',
      }),
      new WebpackPwaManifest({
        fingerprints: false,
        inject: true,
        name: 'PWA Text Editor',
        short_name: 'PWATE',
        description: 'Takes notes with JavaScript syntax highlighting!',
        background_color: '#225ca3',
        theme_color: '#225ca3',
        orientation: 'portrait',
        display: 'standalone',
        start_url: './',
        publicPath: './',
      }),
    ],

    module: {
      rules: [
        {
          use: ['style-loader', 'css-loader'],
          test: /\.css$/,
        }
      ],
    },
    experiments: {
      topLevelAwait: true
    }
  };
};