import config from './rollup.base.config';

const pkg = require('./package.json');

const external = Object.keys(pkg.dependencies);

config.output = {
  format: 'umd',
  file: pkg.main
};
config.external = external;
config.globals = {
  'bignumber.js': 'BigNumber'
};

export default config;