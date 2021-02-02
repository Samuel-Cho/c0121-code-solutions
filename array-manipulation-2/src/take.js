/* exported take */
function take(array, count) {
  var takeArray = [];
  for (var i = 0; i < count; i++) {
    if (array[count]) {
      takeArray.push(array[i]);
    } else {
      break;
    }
  }
  return takeArray;
}
