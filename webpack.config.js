import path from 'path';
import { fileURLToPath } from 'url';
import { buildWebpackConfig } from './src/config/buildWebpackConfig.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const options = {
  paths: {
    entry: path.join(__dirname, 'src', 'index.js'),
    output: path.join(__dirname, 'build'),
    templatePath: path.join(__dirname, 'public', 'index.html'),
  },
  port: 8080,
  mode: 'development',
};

const config = buildWebpackConfig(options);

export default config;
