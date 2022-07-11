# @yungezeit/stylelint-config

[![npm](https://img.shields.io/npm/v/@yungezeit/stylelint-config?color=a1b858&label=latest%20version)](https://npmjs.com/package/@yungezeit/stylelint-config)

Personal Stylelint config presets. Used for:
* Linting CSS files
* Linting SCSS files
* Linting Both CSS and SCSS style blocks
* Linting inline CSS

## Usage

### 1. Install

#### Quick way: install the whole configuration

```bash
# Using pnpm
pnpm add -D stylelint @yungezeit/stylelint-config
# Using yarn
yarn add -D stylelint @yungezeit/stylelint-config
# Using npm
npm i -D stylelint @yungezeit/stylelint-config
```

See [Presets](#presets) to refine your configuration install

### 2. Configure Stylelint

Set the [`extends`](https://stylelint.io/user-guide/configure/#extends) property of [Stylelint's configuration](https://stylelint.io/user-guide/configure/) :

```json
{
  "extends": "@yungezeit/stylelint-config"
}
```

### 3. Add scripts in `package.json`

```json
{
  "scripts": {
    "stylelint": "stylelint .",
    "stylelint:fix": "stylelint . --fix"
  }
}
```

### 4. Enable VS Code autofix

Create/edit the `.vscode/settings.json` file and add the following:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.stylelint": true
  },
  "css.validate": false,
  "less.validate": false,
  "scss.validate": false,
  // add "vue" if using @yungezeit/stylelint-config-vue
  // add "svelte" if using @yungezeit/stylelint-config-svelte
  "stylelint.validate": ["css", "scss"],
}
```

This will autofix files on save and let Stylelint handle code formatting.

## Presets

### Base preset

> `@yungezeit/stylelint-config-base`

This preset extends the following ones:
* [`stylelint-config-standard`](https://www.npmjs.com/package/stylelint-config-standard)
* [`stylelint-config-recess-order`](https://www.npmjs.com/package/stylelint-config-recess-order)

### Vue preset

> `@yungezeit/stylelint-config-vue`

This preset extends the following ones:

* [`stylelint-config-recommended-vue`](https://github.com/ota-meshi/stylelint-config-recommended-vue)
* [`@yungezeit/stylelint-config-base`](#base-preset)

### Svelte preset

> `@yungezeit/eslint-config-svelte`

This preset extends the following ones:

* [`@yungezeit/stylelint-config-base`](#base-preset)
