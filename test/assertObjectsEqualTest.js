const a = require("../index");

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
a.assertObjectsEqual(ab, ba); // => true