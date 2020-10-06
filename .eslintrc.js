module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true
  },
  extends: [
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    semi: 'error',
    quotes: ['error', 'single'],
    'no-unused-expressions': [2, { allowTernary: true, allowShortCircuit: true }]
  }
}
