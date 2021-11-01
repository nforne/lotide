
const tail = function(array) {
  let tail = "";
  if (array.length === 0) {
    tail = [];
  } else if (array.length !== 0) {
    tail = array.slice(1);
  }
  return tail;
};

module.exports = tail;