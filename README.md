## test_pify

Pify can be used to turn a node.js call back style method into one that makes use of promises.

```js
let pify = require('pify'),
fs = require('fs');
 
fs = pify(fs);
 
fs.readFile('index.js').then(function (text) {
 
    console.log(text.toString());
 
});
```