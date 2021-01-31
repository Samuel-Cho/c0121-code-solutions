/* exported capitalizeWord */
function capitalizeWord(word) {
  var capitalizeString = '';
  for (var i = 0; i < word.length; i++) {
    if (word[i] === 0) {
      capitalizeString += (word[i].toUpperCase());
    }
  }
  return capitalizeString;
}
