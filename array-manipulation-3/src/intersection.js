/* exported intersection */

function intersection(first, second) {
  var returnArray = [];
  for (var i = 0; i < first.length; i++) {
    if (second.includes(first[i]) === true) {
      returnArray.push(first[i]);
    }
  }
  return returnArray;
}
