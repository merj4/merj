const webpack = require('webpack');
// var HtmlWebpackPlugin = require('html-webpack-plugin');
// var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
//   //config options
//   template: __dirname + '/app/index.html',
//   filename: 'index.html',
//   inject: 'body'
// })
module.exports = {
  entry: [
    './app/components/index.js'
  ],
  devtool: "eval",
  output: {
    path: __dirname + '/app/dist',
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: ["react-hot-loader", "babel-loader"],
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  },
  //injects index.html into the dist folder with index_bundle.js
  plugins : [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  devServer: {
    hot:true,
    port: 8081,
    proxy: {
      '*': 'http://127.0.0.1:' + (process.env.PORT || 8080)
    },
    host: '127.0.0.1'
  }
  // plugins: [HtmlWebpackPluginConfig]
}