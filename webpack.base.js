const path = require('path');

module.exports = {
  entry: ['babel-polyfill',  './src/client/app/index.jsx'],

  output: {
    path: path.join(__dirname, "dist"),
    filename: '[name].js',
    publicPath: '/'
  }
};