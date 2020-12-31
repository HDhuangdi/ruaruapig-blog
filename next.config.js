const withLess = require('@zeit/next-less');
const withCss = require('@zeit/next-css');
if (typeof require !== 'undefined') {
  require.extensions['.css'] = (file) => {};
}
module.exports = withLess(
  withCss({
    webpack(config, options) {
      config.output.publicPath = '/_next/';
      config.module.rules.push({
        test: /\.(cur|png|jpg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          esModule: false,
          limit: 0,
          name: 'static/images/[name].[hash:7].[ext]',
        },
      });
      config.module.rules.push({
        test: /\.(woff|woff2|eot|otf|ttf)$/,
        loader: 'url-loader',
        options: {
          esModule: false,
          limit: 10000,
          name: 'static/fonts/[name].[hash:7].[ext]',
        },
      });
      return config;
    },
  })
);
