/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var newWordList = [];
  var i = 0;
  while (i < words.length) {
    var newWord = words[i] + suffix;
    newWordList.push(newWord);
    i++;
  }
  return newWordList;
}
