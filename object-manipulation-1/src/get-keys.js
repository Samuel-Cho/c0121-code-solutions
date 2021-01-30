/* exported getKeys */
function getKeys(object) {
  var keyArray = [];
  for (var i in object) {
    keyArray.push(i);
  }
  return keyArray;
}
