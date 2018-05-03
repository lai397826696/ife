const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    bundle: './src/index.js',
    vender: ['san', 'san-router']
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: [
      '*', '.js', '.san'
    ],
    alias: {
      "src": path.resolve(__dirname, './src')
    }
  },
  module: {
    rules: [
      {
        test: /\.san$/,
        use: 'san-loader',
        exclude: /node_modules/
      }, {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vender: {
          chunks: "initial",
          name: "vender",
          minChunks: 2,
          maxInitialRequests: 5,
          minSize: 0
        }
      }
    }
  }

}