/**
 * @fileoverview Ensures that specified components have the accessibilityLabel prop
 * @author Garrett McCullough
 */
'use strict';

const rule = require('../../../lib/rules/jsx-require-prop-accessibility-label');
const RuleTester = require('eslint').RuleTester;

RuleTester.setDefaultConfig({
	parserOptions: {
		ecmaVersion: 6,
		ecmaFeatures: {
			jsx: true,
		},
	},
});

const defaultProps = {
	accessibilityLabel: 'test',
};

const ruleTester = new RuleTester();
ruleTester.run('jsx-require-prop-accessibility-label', rule, {
	valid: [{
		code: '<Button accessibilityLabel="string label" />',
		options: [['Button']],
	}, {
		code: '<Button accessibilityLabel={variableLabel} />',
		options: [['Button']],
	}, {
		code: '<Button {...defaultProps} />',
		options: [['Button']],
	}, {
		code: '<NotButton />',
		options: [['Button']],
	}],

	invalid: [{
		code: '<Button />',
		errors: [{
			message: 'Button requires an accessibilityLabel.',
			type: 'JSXOpeningElement'
		}],
		options: [['Button']],
	}, {
		code: '<Button wrongProp="test" />',
		errors: [{
			message: 'Button requires an accessibilityLabel.',
			type: 'JSXOpeningElement'
		}],
		options: [['Button']],
	}],
});
