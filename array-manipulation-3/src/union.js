/* exported union */

function union(first, second) {
  var returnArray = first;
  for (var i = 0; i < second.length; i++) {
    if (first.includes(second[i]) === false) {
      returnArray.push(second[i]);
    }
  }
  return returnArray;
}
