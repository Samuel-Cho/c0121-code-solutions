/* exported capitalizeWord */
function capitalizeWord(word) {
  var capitalizeString = '';
  for (var i = 0; i < word.length; i++) {
    if (i === 0) {
      capitalizeString += word[i].toUpperCase();
    } else {
      capitalizeString += word[i].toLowerCase();
    }
  }
  if (capitalizeString === 'Javascript') {
    capitalizeString = 'JavaScript';
  }
  return capitalizeString;
}
