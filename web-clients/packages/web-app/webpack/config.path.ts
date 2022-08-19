import path from 'path';

export default {
  root: path.resolve(__dirname, '../'),
  outputPath: path.resolve(__dirname, '..', 'build/'),
  assetPath: path.resolve(__dirname, '../..', 'vendors'),
  entryPath: path.resolve(__dirname, '..', 'src/index.tsx'),
  templatePath: path.resolve(__dirname, '..', 'src/index.html'),
};
