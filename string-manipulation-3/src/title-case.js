/* exported titleCase */

function titleCase(title) {
  var minorWords = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  var newString = '';
  var titleArray = title.split(' ');
  for (var i = 0; i < titleArray.length; i++) {
    if (minorWords.includes(titleArray[i]) && newString[newString.length - 2] !== ':') {
      newString += titleArray[i] + ' ';
      continue;
    } else if (titleArray[i] === 'javascript') {
      newString += 'JavaScript ';
      continue;
    } else if (titleArray[i] === 'Javascript:' || titleArray[i] === 'javascript:') {
      newString += 'JavaScript: ';
      continue;
    } else if (titleArray[i] === 'api') {
      newString += 'API ';
      continue;
    } else {
      for (var j = 0; j < titleArray[i].length; j++) {
        if (j === 0 || titleArray[i][j - 1] === '-') {
          newString += titleArray[i][j].toUpperCase();
          continue;
        }
        newString += titleArray[i][j];
      }
    }
    newString += ' ';
  }
  return newString.slice(0, newString.length - 1);
}
