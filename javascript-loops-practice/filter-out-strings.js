/* exported filterOutStrings */
function filterOutStrings(values) {
  var noStrings = [];
  var i = 0;
  while (i < values.length) {
    if (typeof values[i] !== 'string') {
      noStrings.push(values[i]);
    }
    i++;
  }
  return noStrings;
}
