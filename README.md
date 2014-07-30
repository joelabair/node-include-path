node-include-path
=================

Inject additional paths to modules.require search path directly in node.  This module uses a minimalist approach, manipulating the process.env key NODE_PATH and re-calling the module.js init function.

Install the package.
`$ npm install include-path`

Usage:  module([paths]) 


```js
/*
 *  file server.js
 *
 *  require a path
 *  require('include-path')('./lib');
 *
 *  or alternately
 *  require('include-path')(__dirname+'/lib');
 *
 *  or an array
 *  require('include-path')(['./lib', './library', './extra']);
 */

require('include-path')('./lib');

var myLocalModuleFromLibDirectory = require('myLocalModuleFromLibDirectory');


```

All tests pass with node -v v0.10.28
All tests pass with node -v v0.10.29
