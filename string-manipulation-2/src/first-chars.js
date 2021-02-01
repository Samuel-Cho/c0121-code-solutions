/* exported firstChars */
function firstChars(length, string) {
  var charString = '';
  for (var i = 0; i < length; i++) {
    if (string[i]) {
      charString += string[i];
    }
  }
  return charString;
}
