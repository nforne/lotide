//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const head = function(array) {
  let head = "";
  if (array.length === 0) {
    head = "undefined";
  } else if (array.length !== 0) {
    head = array[0];
  }
  return head;
};

module.exports = head;
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>