/* exported getValues */
function getValues(object) {
  var valuesArray = [];
  for (var i in object) {
    valuesArray.push(object[i]);
  }
  return valuesArray;
}
