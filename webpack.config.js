const path = require('path');

const config = {
  entry: './src/App.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/
      }
    ]
  },
  devServer: {
    port: 8888
  }
};

module.exports = config;
