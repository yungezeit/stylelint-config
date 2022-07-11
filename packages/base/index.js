module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
  ],
  plugins: [
    'stylelint-scss',
    'stylelint-order',
  ],
  ignoreFiles: [
    '**/lib/**',
    './coverage/**/*',
    '**/*.svg',
  ],
  rules: {
    'no-empty-source': null,
    'value-keyword-case': null,
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'no-descending-specificity': null,
    'number-max-precision': null,
    'scss/dollar-variable-pattern': '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
  },
  overrides: [
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss',
      rules: {
        'selector-class-pattern': null,
        'custom-property-pattern': null,
        'color-function-notation': null,
      },
    },
  ],
};
