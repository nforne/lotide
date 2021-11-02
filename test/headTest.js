const a = require("../index")

a.assertEqual(a.head([5,6,7]), 5);
a.assertEqual(a.head(["Hello", "Lighthouse", "Labs"]), "Hello");

/*
const assert = require('chai').assert;

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(a.head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(a.head(['5']), '5'); 
  });

  it("returns 5 for [5,6,7]", () => {
    assert.strictEqual(a.head([5,6,7]), 5); 
  });

  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(a.head(["Hello", "Lighthouse", "Labs"]), "Hello"); 
  });

});

*/