/* exported capitalizeWords */
function capitalizeWords(string) {
  var lowerString = string.toLowerCase();
  var capitalizeString = '';
  for (var i = 0; i < lowerString.length; i++) {
    if (i === 0) {
      capitalizeString += lowerString[i].toUpperCase();
    } else if ((lowerString[i - 1]) === ' ') {
      capitalizeString += lowerString[i].toUpperCase();
    } else {
      capitalizeString += lowerString[i].toLowerCase();
    }
  }
  return capitalizeString;
}
