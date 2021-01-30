/* exported reverse */
function reverse(array) {
  var reverseArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    if (array.length === 0) {
      break;
    } else {
      reverseArray.push(array[i]);
    }
  }
  return reverseArray;
}
