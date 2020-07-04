// eslint-disable-next-line @typescript-eslint/no-var-requires
const { join } = require('path');
// 为WebStorm提供alias解析

const root = join(__dirname, 'src');

module.exports = {
  resolve: {
    alias: {
      '~': root,
      assets: join(root, 'assets'),
    },
    extensions: ['.js', '.ts', '.tsx', '.json', '.less'],
  },
};
