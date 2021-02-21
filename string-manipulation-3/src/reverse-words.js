/* exported reverseWords */

function reverseWords(string) {
  var wordArray = string.split(' ');
  var wordsReversed = '';
  for (var x = 0; x < wordArray.length; x++) {
    for (var i = wordArray[x].length - 1; i >= 0; i--) {
      wordsReversed += wordArray[x][i];
    }
    wordsReversed += ' ';
  }
  return wordsReversed.slice(0, wordsReversed.length - 1);
}
