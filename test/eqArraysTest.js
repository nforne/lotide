const x = require("../index")
// const assertEqual = require("../assertEqual");
// const eqArrays = require("../eqArrays");
let a = x.eqArrays([1, 2, 3], [1, 2, 3]); // => true
let b = x.eqArrays([1, 2, 3], [3, 2, 1]); // => false
x.assertEqual(a, true);
x.assertEqual(b, false);
// eqArrays([1, 2, 3], [1, 2, 3]) // => true
// eqArrays([1, 2, 3], [3, 2, 1]) // => false

// eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
// eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false
let c = x.eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
let d = x.eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false
x.assertEqual(c, true);
x.assertEqual(d, false);

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
// recursive test cases
let e = x.eqArrays([[2, 3], [4, [5, [6]]]], [[2, 3], [4, [5, [6]]]]); // => true
let f = x.eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]); // => false
let g = x.eqArrays([[2, 3], [4]], [[2, 3], 4]); // => false
x.assertEqual(e, true);
console.log("---------------------------------------------");
x.assertEqual(f, false);
console.log("---------------------------------------------");
x.assertEqual(g, false);
console.log("---------------------------------------------");