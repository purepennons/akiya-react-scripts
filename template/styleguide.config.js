const path = require('path');

module.exports = {
  // require: [path.join(__dirname, 'src/index.css')],
  components: 'src/**/[A-Z]*.js',
  webpackConfig(env) {
    if (env === 'production')
      return require('./node_modules/akiya-react-scripts/config/webpack.config.prod.js');
    else
      return require('./node_modules/akiya-react-scripts/config/webpack.config.dev.js');
  },
};
