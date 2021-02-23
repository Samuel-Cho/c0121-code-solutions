/* exported difference */

function difference(first, second) {
  var returnArray = [];
  for (var i = 0; i < first.length; i++) {
    if (second.includes(first[i]) === false) {
      returnArray.push(first[i]);
    }
  }
  for (var j = 0; j < second.length; j++) {
    if (first.includes(second[j]) === false) {
      returnArray.push(second[j]);
    }
  }
  return returnArray;
}
