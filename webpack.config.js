var webpack = require('webpack');
var path = require('path');

//build directory
var BUILD_DIR = path.resolve(__dirname, 'public/dist');

//app directory
var APP_DIR = path.resolve(__dirname, 'public')

//config
var config = {
  //where to start
  entry: APP_DIR + '/app.jsx',
  //where to place the buundle file
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  //what to use
  module: {
    loaders: [
        test: /\.jsx?/,
        include:APP_DIR,
        loader: 'babel-loader'
      }
    ]
  }
};

module.exports = config;