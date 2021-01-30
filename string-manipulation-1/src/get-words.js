/* exported getWords */
function getWords(string) {
  var word;
  if (string !== '') {
    word = string.split(' ');
  } else {
    word = [];
  }
  return word;
}
