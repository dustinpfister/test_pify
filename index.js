let pify = require('pify'),
fs = require('fs');

fs = pify(fs);

fs.readFile('index.js').then(function (text) {

    console.log(text.toString());

});
