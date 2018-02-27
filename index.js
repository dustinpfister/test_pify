let pify = require('pify'),
fs = require('fs');

pify(fs.readFile)('readme.md').then(function (text) {

    // the contents of the readme
    console.log(text.toString());

}).catch (function (e) {

    // something went wrong
    console.log(e);

});

fs.readFile('readme.md', function (e, text) {

    // something went wrong
    if (e) {

        console.log(e);

    } else {

        // the contents of the readme
        console.log(text.toString());

    }

});
