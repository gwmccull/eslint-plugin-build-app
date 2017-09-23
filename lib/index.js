/**
 * @fileoverview Eslint plugin for the Build.com React Native app
 * @author Garrett McCullough
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

// var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
// module.exports.rules = requireIndex(__dirname + "/rules");

module.exports.rules = {
	'jsx-require-prop-accessibility-label': require('./rules/jsx-require-prop-accessibility-label'),
};
