/* exported includesSeven */
function includesSeven(array) {
  var i = 0;
  var value = false;
  while (i < array.length) {
    if (array[i] === 7) {
      value = true;
    }
    i++;
  }
  return value;
}
