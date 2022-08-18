import path, { resolve } from 'path';
import webpack from 'webpack';

import configPath from './config.path';

export default {
  mode: 'development',
  output: {
    filename: '[name].js',
    path: resolve(configPath.outputPath),
    publicPath: '/',
  },
  devtool: 'inline-source-map',
  devServer: {
    static: path.join(__dirname, 'build'),
    historyApiFallback: true,
    proxy: {
      '/graphql': 'http://localhost:4000',
    },
    port: 8080,
    open: true,
    hot: true,
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
