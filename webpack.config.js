const path = require('path');
const HtmlPlugin = require("html-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: process.env.NODE_ENV,
  entry: {
    app: './main.jsx'
  },
  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].chunk.js',
    path: path.resolve(__dirname, 'dist/'),
    publicPath: "/"
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".jsx", ".json"],
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },
  plugins: [
    new HtmlPlugin({
      filename: 'index.html',
      template: 'index.html'
    })
  ],
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['react'],
          plugins: [
            "transform-object-rest-spread", ["transform-class-properties", {
              "spec": true
            }]
          ]
        }
      }
    }, {
      test: /\.scss$/,
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader"
      }, {
        loader: "sass-loader"
      }]
    }, {
      test: /\.(gif|png|jpe?g|svg)$/i,
      use: [{
          loader: 'url-loader',
          options: {
            limit: 8192
          }
        },
        {
          loader: 'image-webpack-loader',
          options: {
            bypassOnDebug: true,
          },
        },
      ],
    }]
  }
};