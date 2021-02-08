/* exported isPalindromic */
function isPalindromic(string) {
  var lettersFoward = '';
  var lettersBackwards = '';
  for (var i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      lettersFoward += string[i];
    }
  }
  for (var j = lettersFoward.length - 1; j >= 0; j--) {
    lettersBackwards += lettersFoward[j];
  }
  return lettersFoward === lettersBackwards;
}
