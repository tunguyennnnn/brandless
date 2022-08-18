import path from 'path';

export default {
  root: path.resolve(__dirname, '../'),
  outputPath: path.resolve(__dirname, '..', 'build/'),
  assetPath: path.resolve(__dirname, '..', 'vendor'),
  entryPath: path.resolve(__dirname, '..', 'src/index.tsx'),
  templatePath: path.resolve(__dirname, '..', 'src/index.html'),
  libOutputPath: path.resolve(__dirname, '..', 'lib/'),
  libPath: path.resolve(__dirname, '..', 'src/lib/index'),
  libLoaderPath: path.resolve(__dirname, '..', 'src/lib/frame'),
  libTemplatePath: path.resolve(__dirname, '..', 'src/lib/index.html'),
};
