import { Configuration } from 'webpack';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

import configPath from './config.path';

const config: Configuration = {
  mode: 'production',
  output: {
    path: configPath.outputPath,
    filename: '[name].[contenthash].js',
    publicPath: '',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
    }),
    new CleanWebpackPlugin(),
  ],
};

export default config;
