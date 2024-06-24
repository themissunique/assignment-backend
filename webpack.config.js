const path = require('path');

module.exports = {
  entry: './app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  target: 'node',
  node: {
    __dirname: false,
    __filename: false,
  },
  mode: 'development',
};
