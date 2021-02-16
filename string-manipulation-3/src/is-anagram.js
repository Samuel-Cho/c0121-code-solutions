/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var string1 = firstString.split('');
  var string2 = secondString.split('');
  string1.sort();
  string2.sort();
  var newString1 = '';
  var newString2 = '';
  for (var i = 0; i < string1.length; i++) {
    if (string1[i] !== ' ') {
      newString1 += string1[i];
    }
  }
  for (var j = 0; j < string2.length; j++) {
    if (string2[j] !== ' ') {
      newString2 += string2[j];
    }
  }
  return newString1 === newString2;
}
