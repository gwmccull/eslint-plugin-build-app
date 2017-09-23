# eslint-plugin-build-app

Eslint plugin for the Build.com React Native app

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-build-app`:

```
$ npm install eslint-plugin-build-app --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-build-app` globally.

## Usage

Add `build-app` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "build-app"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "build-app/rule-name": 2
    }
}
```

## Supported Rules

* Ensure that specified components have the accessibilityLabel prop ([jsx-require-prop-accessibility-label](./docs/rules/jsx-require-prop-accessibility-label))
