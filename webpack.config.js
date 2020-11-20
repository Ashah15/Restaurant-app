/* eslint-disable new-cap */
const path = require('path');
const tinyPngWebpackPlugin = require('tinypng-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
  plugins: [
    new tinyPngWebpackPlugin({
      key: 'IuOt376ceRgpLQq5S3DD6oc73dAzss2s',
    }),
  ],
};