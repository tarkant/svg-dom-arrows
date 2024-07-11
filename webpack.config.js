/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  context: __dirname,
  entry: {
    app: './example/app.ts',
    readme: './example/readme.ts',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|gif|jpg|jpeg|svg|xml)$/,
        use: ['url-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@src': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './example/index.html',
      filename: 'index.html',
      chunks: ['app'],
    }),
    new HtmlWebpackPlugin({
      template: './example/readme-example.html',
      filename: 'readme-example.html',
      chunks: ['readme'],
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
  },
};

module.exports = (env, argv) => {
  if (argv.mode === 'production') {
    config.entry.app = './src/index.ts';
    config.output.filename = 'main.js';
    config.output.libraryTarget = 'umd';
    config.output.library = 'SvgDomArrows';
    config.output.umdNamedDefine = true;
    config.output.globalObject = 'this';
    config.plugins = [];
  }
  return config;
};
