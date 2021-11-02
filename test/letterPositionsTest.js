
const a = require("../index");
/*
{ h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] }
*/

a.assertEqual(a.letterPositions("hello")["l"][0], 2);
a.assertArraysEquals(a.letterPositions("hello")["l"], [2, 3]);