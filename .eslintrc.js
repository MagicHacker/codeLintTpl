/**
 * eslint配置
 */
module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      globalReturn: false,
      impliedStrict: true,
    },
  },
  extends: [
    'alloy',
    'alloy/vue', // Vue项目配置
    'prettier',
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
};
