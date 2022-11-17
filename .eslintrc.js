// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:storybook/recommended'
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['prettier'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    // 'prettier/prettier': 'off',
    'react/prop-types': 0,
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'react/no-unescaped-entities': 0
  }
};
