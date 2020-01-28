var assert = require('assert');

var areaQuadrada = function (a) {
    return a * a;
}

try {
    assert.equal(100, areaQuadrada(10));
    
} catch(e) {
    console.log(e);
}