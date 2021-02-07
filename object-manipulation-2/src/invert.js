/* exported invert */
function invert(source) {
  var invertObject = {};
  for (var property in source) {
    invertObject[source[property]] = property;
  }
  return invertObject;
}
