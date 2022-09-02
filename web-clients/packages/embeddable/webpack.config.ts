import { merge } from 'webpack-merge';
import common from './webpack/webpack.common';
import devEnvConfig from './webpack/webpack.dev';
import prodEnvConfig from './webpack/webpack.prod';

export default merge([
  common,
  process.env.NODE_ENV === 'development' ? devEnvConfig : prodEnvConfig,
]);
