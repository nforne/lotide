const q = require("../index")

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
q.assertEqual(q.eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
q.assertEqual(q.eqObjects(ab, abc), false); // => false

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const cd = { c: [[2, 3], [4, [5, [6]]]], d: ["2", 3] };
const dc = { d: ["2", 3], c: [[2, 3], [4, [5, [6]]]] };
q.assertEqual(q.eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
q.assertEqual(q.eqObjects(cd, cd2), false); // => false

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
// recursive test cases
q.assertEqual(q.eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => true
q.assertEqual(q.eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false); // => false
q.assertEqual(q.eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // => false