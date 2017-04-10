
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  //config options
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
})
module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    path: __dirname + '/app/dist',
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: "babel-loader",
        query: {
          presets: ['es2015','react'] 
        }
      }
    ]
  },
  //injects index.html into the dist folder with index_bundle.js
  plugins: [HtmlWebpackPluginConfig]
}