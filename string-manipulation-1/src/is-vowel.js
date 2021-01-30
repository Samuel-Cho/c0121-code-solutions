/* exported isVowel */
function isVowel(char) {
  var vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
  var i = 0;
  var result = false;
  while (i < vowels.length) {
    if (char === vowels[i]) {
      result = true;
      break;
    }
    i++;
  }
  return result;
}
