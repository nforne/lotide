
const a = require("../index");

const words = ["ground", "control", "to", "major", "tom"];
const results1 = a.map(words, word => word[0]);
console.log(results1);

// tests
console.log(a.assertArraysEquals(results1, [ 'g', 'c', 't', 'm', 't' ]));

const numbs = [ 15, 13, 11, 16, 10, 11, 10 ];
const results2 = a.map(numbs, i => i * 2);
console.log(a.assertArraysEquals(results2, [ 30, 26, 22, 32, 20, 22, 20]));