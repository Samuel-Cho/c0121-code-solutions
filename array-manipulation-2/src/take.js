/* exported take */
function take(array, count) {
  var takeArray = [];

  if (array.length !== 0) {
    for (var i = 0; i < count; i++) {
      takeArray.push(array[i]);
    }
  }

  return takeArray;
}
