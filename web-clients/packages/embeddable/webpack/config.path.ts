import path from 'path';

export default {
  root: path.resolve(__dirname, '../'),
  outputPath: path.resolve(__dirname, '..', 'build/'),
  assetPath: path.resolve(__dirname, '../..', 'vendors'),
  entryPath: path.resolve(__dirname, '..', 'src/index.ts'),
  templatePath: path.resolve(__dirname, '..', 'src/index.html'),
  libLoaderPath: path.resolve(__dirname, '..', 'src/frame.tsx'),
};
