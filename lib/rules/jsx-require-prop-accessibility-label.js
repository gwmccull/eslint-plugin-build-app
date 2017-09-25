/**
 * @fileoverview Ensures that specified components have the accessibilityLabel prop
 * @author Garrett McCullough
 */
"use strict";

const utils = require('jsx-ast-utils');
const { hasProp, elementType } = utils;

module.exports = {
	meta: {
		docs: {
			description: "Ensures that specified components have the accessibilityLabel prop",
			category: "Best Practices",
			recommended: false
		},
		fixable: null,
		schema: [{
			type: "array",
			items: { type: "string" },
			uniqueItems: true,
			additionalItems: false,
		}]
	},
	create: function(context) {
		const applicableTypes = context.options[0];

		return {
			JSXOpeningElement: (node) => {
				const element = elementType(node);
				if (!Array.isArray(applicableTypes)) {
					return;
				}
				if (applicableTypes.indexOf(element) === -1) {
					return;
				}

				const hasAccessibilityLabel = hasProp(node.attributes, 'accessibilityLabel', { spreadStrict: false });
				if (!hasAccessibilityLabel) {
					context.report({
							node,
							message: `${element} requires an accessibilityLabel.`,
					});
				}
			},
		};
	},
};
