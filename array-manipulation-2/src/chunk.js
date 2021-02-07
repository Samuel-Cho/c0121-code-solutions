/* exported chunk */
function chunk(array, size) {
  var chunkArray = [];
  if (array.length > 1 && size === 1) {
    for (var i = 0; i < array.length; i++) {
      chunkArray.push(array.slice(i, i + 1));
    }
  } else if (array.length > 1 && size > 1) {
    for (var j = 0; j < array.length; (j += size)) {
      chunkArray.push(array.slice(j, (j + size)));
    }
  }
  return chunkArray;
}
