/* exported numVowels */
function numVowels(string) {
  var vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
  var vowelNum = 0;
  for (var i = 0; i < string.length; i++) {
    var letter = string[i];
    for (var j = 0; j < vowels.length; j++) {
      if (letter === vowels[j]) {
        vowelNum += 1;
      }
    }
  }
  return vowelNum;
}
