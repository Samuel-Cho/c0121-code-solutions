/* exported includes */
function includes(array, value) {
  var includesValue = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      includesValue = true;
      break;
    }
  }
  return includesValue;
}
