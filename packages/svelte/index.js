module.exports = {
  extends: [
    '@yungezeit/stylelint-config-base',
  ],
  overrides: [
    {
      'files': ['*.html', '**/*.html', '**/*.svelte'],
      'customSyntax': 'postcss-html',
    },
  ],
};
