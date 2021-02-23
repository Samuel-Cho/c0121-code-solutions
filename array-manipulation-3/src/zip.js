/* exported zip */

function zip(first, second) {
  var returnArray = [];
  var length = Math.min(first.length, second.length);
  for (var i = 0; i < length; i++) {
    var subArray1 = [first[i], second[i]];
    returnArray.push(subArray1);
  }
  return returnArray;
}
