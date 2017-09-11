const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.join(__dirname, 'src'),

  entry: {
    client: './client/app.js',
    styles: './client/style.less'
  },

  output: {
    path: path.join(__dirname, "dist"),
    filename: '[name].js'
  },

  resolve: {
    extensions: ['.js']
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
      template: './client/index.html'
    }),
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true
    })
  ],
  watch: true
}
;