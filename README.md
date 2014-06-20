node-include-path
=================

Inject additional paths to modules.require search path directly in node.

Install the package.
`$ npm install include-path`


file ./server.js
```js
/*
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
