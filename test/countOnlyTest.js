const a = require("../index")

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = a.countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

a.assertEqual(result1["Jason"], 1);
a.assertEqual(result1["Karima"], undefined);
a.assertEqual(result1["Fang"], 2);
a.assertEqual(result1["Agouhanna"], undefined);