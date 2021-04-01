/**
 * eslint配置
 */
module.exports = {
  root: true,
  extends: [
    "alloy",
    "alloy/react", // react项目配置
    "prettier",
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    // 指定想要使用的ECMAScript版本
    ecmaVersion: 2019,
    // ECMAScript modules 模式
    sourceType: "module",
    // 指定想使用的额外的语言特性
    ecmaFeatures: {
      // 不允许 return 语句出现在 global 环境下
      globalReturn: false,
      // 启用全局strict校验模式
      impliedStrict: true,
      // 启用JSX
      jsx: true,
    },
  },
  plugins: ["prettier"],
  rules: {
    'prettier/prettier': 'error'
  }
}
