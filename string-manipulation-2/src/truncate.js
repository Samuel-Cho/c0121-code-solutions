/* exported truncate */
function truncate(length, string) {
  var newString = '';
  for (var i = 0; i < length; i++) {
    if (string[i]) {
      newString += string[i];
    } else {
      break;
    }
  }
  newString += '...';
  return newString;
}
