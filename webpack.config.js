const path = require('path');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.tsx','.ts','.js'],
  },
};