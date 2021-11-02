const a = require("../index")

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = a.takeUntil(data1, x => x < 0);
console.log(results1);
a.assertArraysEquals(results1, [ 1, 2, 5, 7, 2 ]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = a.takeUntil(data2, x => x === ',');
console.log(results2);
a.assertArraysEquals(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);

// [ 1, 2, 5, 7, 2 ]
// ---
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]