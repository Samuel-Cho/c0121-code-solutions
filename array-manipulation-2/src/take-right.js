/* exported takeRight */
function takeRight(array, count) {
  var takeRightArray = [];
  for (var i = array.length - count; i < array.length; i++) {
    if (array.length > 0) {
      takeRightArray.push(array[i]);
    } else {
      break;
    }
  }
  return takeRightArray;
}
