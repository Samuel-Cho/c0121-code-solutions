/* exported lastChars */
function lastChars(length, string) {
  var lastString = '';
  var lengthCount = length;
  var stringIndex = string.length - 1;
  while (lengthCount > 0) {
    if (string[stringIndex]) {
      lastString = string[stringIndex] + lastString;
      stringIndex--;
      lengthCount--;
    } else {
      break;
    }
  }
  return lastString;
}
