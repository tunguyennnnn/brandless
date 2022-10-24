import configPath from './config.path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import webpack from 'webpack';

export default {
  entry: {
    main: configPath.entryPath,
    frame: configPath.libLoaderPath,
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.d.ts'],
  },
  plugins: [
    new webpack.DefinePlugin({
      FRAME_JS_URL: `'/frame.js'`,
    }),
    new CopyPlugin({
      patterns: [
        {
          from: configPath.assetPath,
          to: configPath.outputPath,
          toType: 'dir',
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: configPath.templatePath,
    }),
  ],
};