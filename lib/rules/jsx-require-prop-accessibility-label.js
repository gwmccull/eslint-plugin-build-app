/**
 * @fileoverview Ensures that specified components have the accessibilityLabel prop
 * @author Garrett McCullough
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

import { getProp, elementType } from 'jsx-ast-utils';

module.exports = {
	meta: {
		docs: {
			description: "Ensures that specified components have the accessibilityLabel prop",
			category: "Best Practices",
			recommended: false
		},
		fixable: null,  // or "code" or "whitespace"
		schema: [{
			type: "array",
			items: { type: "string" },
			uniqueItems: true,
			additionalItems: false,
		}]
	},

	create: function(context) {

		// variables should be defined here
		const applicableTypes = ['Button'];
		console.log('context', context.options)
		//----------------------------------------------------------------------
		// Helpers
		//----------------------------------------------------------------------

		// any helper functions should go here or else delete this section

		//----------------------------------------------------------------------
		// Public
		//----------------------------------------------------------------------

		return {
			JSXOpeningElement: (node) => {
				const element = elementType(node);

				if (applicableTypes.indexOf(element) === -1) {
						return;
				}

				const hasAccessibilityLabel = !!getProp(node.attributes, 'accessibilityLabel');

				if (hasAccessibilityLabel) {
						context.report({
								node,
								message: `${element} requires an accessibilityLabel.`,
						});
				}
			},
		};
	}
};
