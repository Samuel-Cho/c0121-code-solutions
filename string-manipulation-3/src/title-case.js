/* exported titleCase */

// function titleCase(title) {
//   var newString = '';
//   for (var i = 0; i < title.length; i++) {
//     if (i === 0) {
//       newString += title[i].toUpperCase();
//       continue;
//     }
//     if ((title[i - 1] === ' ') || (title[i - 1] === '-')) {
//       newString += title[i].toUpperCase();
//       continue;
//     }
//     newString += title[i];
//   }
//   var titleArray = newString.split(' ');
//   var titleCaseString = '';
//   for (var j = 0; j < titleArray.length; j++) {
//     if (titleArray[j] === 'Javascript') {
//       titleCaseString += 'JavaScript ';
//       continue;
//     }
//     if (titleArray[j].length < 4 && j !== 0){
//       titleCaseString += titleArray[j].toLowerCase() + ' ';
//       continue;
//     }
//     titleCaseString += titleArray[j] + ' ';
//   }
//   return titleCaseString.slice(0, titleCaseString.length - 1);
// }

function titleCase(title) {
  var newString = '';
  var titleArray = title.split(' ');
  for (var i = 0; i < titleArray.length; i++) {
    if (titleArray[i].length < 4 && i !== 0 && newString[newString.length - 2] !== ':') {
      newString += titleArray[i].toLowerCase();
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
