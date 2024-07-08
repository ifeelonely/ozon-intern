import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildPlugins(templatePath) {
  const htmlPlugin = new HtmlWebpackPlugin({
    template: templatePath,
  });

  const miniCssExtractPlugin = new MiniCssExtractPlugin({
    filename: '[name].[contenthash:8].css',
  });

  return [htmlPlugin, miniCssExtractPlugin];
}
