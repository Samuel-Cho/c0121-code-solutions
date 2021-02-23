/* exported unique */

function unique(array) {
  var returnArray = [];

  if (array.length === 0) {
    return returnArray;
  }

  for (var i = 0; i < array.length; i++) {
    if (returnArray.length === 0) {
      returnArray.push(array[i]);
    } else {
      if (returnArray.includes(array[i]) === true) {
        continue;
      } else {
        returnArray.push(array[i]);
      }
    }
  }
  return returnArray;
}
