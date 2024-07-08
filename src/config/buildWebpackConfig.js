import { buildLoaders } from './buildLoaders.js';
import { buildPlugins } from './buildPlugins.js';

export function buildWebpackConfig(options) {
  const { paths, mode, port } = options;

  return {
    entry: paths.entry,
    mode,
    output: {
      path: paths.output,
      filename: '[name].[contenthash].js',
      clean: true,
    },

    devServer: {
      port,
    },

    plugins: buildPlugins(paths.templatePath),

    module: {
      rules: buildLoaders(),
    },
  };
}
