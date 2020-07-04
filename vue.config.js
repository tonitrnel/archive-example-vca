/* eslint-disable @typescript-eslint/no-var-requires */
const { join } = require('path');

module.exports = {
  /**
   * Webpack chain
   * @param config {Config}
   * @see https://github.com/neutrinojs/webpack-chain/tree/v5
   */
  chainWebpack: (config) => {
    // use ~ instead of @ symbol
    config.resolve.alias
      .set('~', join(__dirname, 'src'))
      .set('assets', join(__dirname, 'src/assets'))
      .delete('@');
    // add less extension
    config.resolve.extensions
      .clear()
      .add('.js')
      .add('.ts')
      .add('.tsx')
      .add('.vue')
      .add('.json')
      .add('.less');
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
  },
  devServer: {
    overlay: {
      warnings: false,
      errors: true,
    },
  },
};
