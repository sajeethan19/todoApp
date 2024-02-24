module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  "rules": {
    "react/jsx-no-target-blank": "off",
    "react-refresh/only-export-components": [
      "warn",
      { "allowConstantExport": true }
    ],
    "semi": "warn",
    "quotes": ["error", "double"], // Enforce single quotes for string literals
    "init-declarations": "error", // Require variables to be initialized when declared
    "no-unused-vars": "error", // Disallow unused variables
    "arrow-parens": ["error", "always"], // Enforce parentheses around parameters in arrow functions
    "space-before-function-paren": ["error", "always"], // Enforce spacing before function parentheses
    "react/jsx-uses-react": "error", // Prevent React from being incorrectly marked as unused
    "react/jsx-uses-vars": "error" // Prevent variables used in JSX from being incorrectly marked as unused
  },
}
