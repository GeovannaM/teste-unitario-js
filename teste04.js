var assert = require('assert');

var media = function (a,b,c) {
    return (a+b+c)/3;
}

try {
    assert.equal(10, media(10,10,10));
    
} catch(e) {
    console.log(e);
}