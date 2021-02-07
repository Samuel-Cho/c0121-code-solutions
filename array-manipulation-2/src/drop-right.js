/* exported dropRight */
function dropRight(array, count) {
  var dropRightArray = array.slice(0, (array.length - count));
  return dropRightArray;
}
