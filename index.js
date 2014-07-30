/*
 *  Append paths to require's global search path
 *
 *  This relies only on node.js continuing to support the NODE_PATH environment variable. The NODE_PATH env setting is a fine
 *  method for defining an application specific local modules search path.  Node's module.js absorbs process.env's NODE_PATH
 *  into a private variable for inclusion into a list of global search paths used by require. The problem is, node only looks at
 *  process.env['NODE_PATH'] once, on main process init, before evaluating any of the app's code.  This module applies any new
 *  paths and calls moduel.js's initializer to pick them up.
 *
 */

var path = require('path');

module.exports = function(addPaths) {
	if (addPaths) {
		addPaths = Array.prototype.concat(addPaths);
		if (addPaths.length) {
			var searchPaths = require('module').Module.globalPaths;
			var nodeEnvPaths =  (process.env['NODE_PATH']) ? process.env['NODE_PATH'].split(path.delimiter) : [];

			addPaths.forEach(function(path) {
				if (!~searchPaths.indexOf(path) && !~nodeEnvPaths.indexOf(path)) {
					nodeEnvPaths.push(path);
				}
			});

			process.env['NODE_PATH'] = nodeEnvPaths.join(path.delimiter);
			require('module').Module._initPaths();
		}
	}
};
