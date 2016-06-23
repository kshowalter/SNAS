var webpack = require('webpack');
//var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  entry: {
    index: ['./docs/index.js']
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
    filename: '[name].js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        //exclude: /node_modules/,
        include: /client/,
        loader: 'babel-loader',
        query: {
          // https://github.com/babel/babel-loader#options
          cacheDirectory: true,
          presets: ['es2015']
        }
      }
    ]
  }

};
