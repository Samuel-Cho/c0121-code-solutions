/* exported takeRight */
function takeRight(array, count) {
  var takeRightArray = [];

  if (array.length !== 0) {
    for (var i = array.length - count; i < array.length; i++) {
      takeRightArray.push(array[i]);
    }
  }

  return takeRightArray;
}
