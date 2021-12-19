module.exports = {
  env: {
    node: true,
    commonjs: true,
    es2021: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 13,
  },
  rules: {},
  overrides: [
    {
      files: ['**/*.test.js'],
      env: {
        jest: true,
      },
    },
  ],
};
