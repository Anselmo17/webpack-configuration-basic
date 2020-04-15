let devConfig = require('./webpack.dev.config');
let prodConfig = require('./webpack.prod.config');

let config;


switch (process.env.npm_lifecycle_event) {
  case 'start':
    config = devConfig;
    break;
  case 'build':
    config = prodConfig;
    break;
  default:
    config = devConfig;
    break;
};

module.exports = config;