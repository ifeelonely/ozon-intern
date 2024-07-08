import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildLoaders() {
  const cssLoader = {
    test: /\.css$/i,
    use: [MiniCssExtractPlugin.loader, 'css-loader'],
  };

  return [cssLoader];
}
