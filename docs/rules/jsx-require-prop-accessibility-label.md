# Ensures that specified components have the accessibilityLabel prop (jsx-require-prop-accessibility-label)

In order for us to build automated tests, Appium requires that
every tappable component have an `accessibilityLabel` property.

## Rule Details

This rule aims to gradually increase compliance with that requirement.

Examples of **incorrect** code for this rule:

```js
<Button />
```

Examples of **correct** code for this rule:

```js
<Button accessibilityLabel="label as a string" />
<Button accessibilityLabel={variableLabel} />
```

### Options

This rule takes one argument: an array of element names (as strings)
that it should check for an `accessibilityLabel` prop.

In this example, the rule will check any `Button` for the prop.

```js
{
  "rules": {
    "build-app/jsx-require-prop-accessibility-label": [ 2, [
      "Button"
    ],
  }
}
```

## When Not To Use It

Turn off this rule only if the component will never receive automated
testing.
