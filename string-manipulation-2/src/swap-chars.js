/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var swapString = '';
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      swapString += string[secondIndex];
    } else if (i === secondIndex) {
      swapString += string[firstIndex];
    } else {
      swapString += string[i];
    }
  }
  return swapString;
}
