var assert = require('assert');

var sucessor = function (a) {
    return a +1;
}

var antecessor = function (a) {
    return a -1;
}

try {
    assert.equal(11, sucessor(10));
    assert.equal(9,antecessor(10));
    
} catch(e) {
    console.log(e);
}