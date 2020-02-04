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
    library: 'SvgDomArrows',
    umdNamedDefine: true,
    globalObject: 'this',
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
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
  },
};
