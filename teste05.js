var assert = require('assert');

var media = function (a) {
    return a* 30;
}

try {
    assert.equal(90, media(3));
    
} catch(e) {
    console.log(e);
}