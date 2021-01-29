/* exported getWords */
function getWords(string) {
  var String;
  if (string !== '') {
    String = string.split(' ');
  } else {
    String = [];
  }
  return String;
}
