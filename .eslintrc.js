module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module', // Allows for the use of imports
  },
  plugins: ['@typescript-eslint', 'jest'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    // node recommended
    'plugin:node/recommended',
    // imports
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    // comments
    'plugin:eslint-comments/recommended',
    // jest
    'plugin:jest/recommended',
    // prettier
    'prettier',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  env: {
    node: true,
    es6: true,
  },
  rules: {
    semi: ['error', 'never'],
  },
}
