const path = require('path');

module.exports = {
  context: path.join(__dirname, 'src/client/'),

  entry: {
    client: './app/app.js'
  },

  output: {
    path: path.join(__dirname, "dist"),
    filename: '[name].js'
  }
};