/* exported dropRight */
function dropRight(array, count) {
  var dropRightArray = [];
  for (var i = 0; i < (array.length - count); i++) {
    if (array.length > 0) {
      dropRightArray.push(array[i]);
    } else {
      break;
    }
  }
  return dropRightArray;
}
