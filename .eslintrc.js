module.exports = {
  extends: ['@nuxtjs/eslint-config-typescript', 'prettier-standard'],
  rules: {
    'space-before-function-paren': 'off',
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': ['warn', { allow: ['warn', 'error', 'info', 'trace', 'debug'] }],
    'no-unused-variable': 'off',
    '@typescript-eslint/no-unused-variable': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'vue/return-in-computed-property': 'off',
    'vue/require-prop-type-constructor': 'off',
    'no-unused-expressions': 'off',
    'no-multiple-empty-lines': 'off',
    'require-await': 'off',
    'arrow-parens': 'off',
    'array-bracket-spacing': 'off',
    'no-prototype-builtins': 'off',
    'lines-between-class-members': 'off',
    'vue/no-v-html': 'off',
    'node/no-path-concat': 'off',
    semi: ['error', 'never'],
    '@typescript-eslint/semi': ['error', 'never'],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'any',
          normal: 'any',
          component: 'always'
        },
        svg: 'any'
      }
    ]
  }
}
