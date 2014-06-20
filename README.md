node-include-path
=================

Inject additional paths to modules.require search path directly in node.

Install the package. 
```bash
npm install include-path
```


* ./server.js*
```javascript
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
