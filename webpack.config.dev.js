var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  devtool: 'cheap-eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    './src/index'
  ], // .js after index is optional
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new ExtractTextPlugin("styles.css")
  ],
  module: {
    loaders: [{
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass']
    }]
  },
  devServer: {
   contentBase: './dist',
   hot: true
 }
}
