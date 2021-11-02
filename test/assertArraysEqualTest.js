const assert = require("chai").assert;
const a = require("../index");
// const assertArraysEquals = require("../assertArraysEqual")
//test code

// TEST CODE
// describe("#assertArraysEqual", () => {
//   it("bolean: outPut === expectedValue?", () => {
//     assert.notEqual(a.assertArraysEquals([1, 2, 3], [1, 2, 5]), true);
//   });
// });

a.assertArraysEquals([1, 2, 3], [1, 2, 5])