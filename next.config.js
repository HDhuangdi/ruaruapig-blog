const withLess = require('@zeit/next-less');
const withCss = require('@zeit/next-css');
if (typeof require !== 'undefined') {
  require.extensions['.css'] = (file) => {};
}
module.exports = withLess(
  withCss({
    webpack(config, options) {
      config.module.rules.push({
        test: /\.(cur|png|jpg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          esModule: false,
          limit: 10000,
        },
      });
      config.module.rules.push({
        test: /\.(woff|woff2|eot|otf|ttf)$/,
        use: 'file-loader',
      });
      return config;
    },
  })
);
