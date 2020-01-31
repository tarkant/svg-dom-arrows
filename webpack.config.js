const path = require('path');

module.exports = {
  entry: { main: './src/index.ts' },
  resolve: {
    extensions: ['.ts','.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.(t|j)s?$/,
        exclude: /node_modules/,
        use: {
          loader: 'awesome-typescript-loader?module=es6',
        }
      }
    ]
  }
};
