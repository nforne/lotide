const a = require("../index");
console.log(a.countLetters("lighthouse in the house"));

/*
{ l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
}
*/

a.assertEqual(a.countLetters("lighthouse in the house")["l"], 1);
a.assertEqual(a.countLetters("lighthouse in the house")["h"], 4);
a.assertEqual(a.countLetters("lighthouse in the house")["n"], 1);