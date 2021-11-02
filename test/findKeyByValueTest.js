const a = require("../index")

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

a.assertEqual(a.findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
a.assertEqual(a.findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
a.assertEqual(a.findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);