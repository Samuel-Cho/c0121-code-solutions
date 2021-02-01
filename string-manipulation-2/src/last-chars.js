/* exported lastChars */
function lastChars(length, string) {
  var lastString = '';
  var stringIndex = string.length - 1;
  for (var i = 0; i < length; i++) {
    if (string[stringIndex]) {
      lastString = string[stringIndex] + lastString;
      stringIndex--;
    } else {
      break;
    }
  }
  return lastString;
}
