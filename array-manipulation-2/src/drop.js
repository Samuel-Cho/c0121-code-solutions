/* exported drop */
function drop(array, count) {
  var dropArray = [];
  for (var i = count; i < array.length; i++) {
    if (array[count]) {
      dropArray.push(array[i]);
    } else {
      break;
    }
  }
  return dropArray;
}
