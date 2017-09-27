const merge = require('webpack-merge');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pathsConfig = require('./webpack.base.js');

const devConfig = {
  resolve: {
    extensions: ['.js', '.jsx']
  },

  module: {

    rules: [{
      test: /\.less$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'less-loader']
      })
    }, {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          plugins: ["transform-react-jsx"]
        }
      }
    }

    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Test',
      hash: true,
      template: './index.html'
    }),
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true
    })
  ],

  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    historyApiFallback: true
  },

  watch: true
};

module.exports = merge.strategy({
  entry: 'replace',
})(pathsConfig, devConfig);