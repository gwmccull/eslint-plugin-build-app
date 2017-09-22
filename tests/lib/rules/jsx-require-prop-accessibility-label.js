/**
 * @fileoverview Ensures that specified components have the accessibilityLabel prop
 * @author Garrett McCullough
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require('../../../lib/rules/jsx-require-prop-accessibility-label'),
const RuleTester = require('eslint').RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run('jsx-require-prop-accessibility-label', rule, {

	valid: [
		{ code: '<Button accessibilityLabel="label" />;' },
		{ code: '<Button accessibilityLabel={label} />;' },
	],

	invalid: [{
		code: '<Button />',
		errors: [{
			message: 'Button requires an accessibilityLabel.',
			type: 'JSXOpeningElement'
		}]
	}]
});
