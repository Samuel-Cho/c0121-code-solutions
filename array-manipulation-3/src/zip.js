/* exported zip */

function zip(first, second) {
  var returnArray = [];
  if (first.length <= second.length) {
    for (var i = 0; i < first.length; i++) {
      var subArray1 = [first[i], second[i]];
      returnArray.push(subArray1);
    }
  } else if (second.length < first.length) {
    for (var j = 0; j < second.length; j++) {
      var subArray2 = [first[j], second[j]];
      returnArray.push(subArray2);
    }
  }
  return returnArray;
}
