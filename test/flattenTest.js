const a = require("../index")

let example = a.flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]
console.log(example);