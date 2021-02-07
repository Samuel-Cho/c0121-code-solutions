/* exported pick */
function pick(source, keys) {
  var pickObject = {};
  for (var keysIndex = 0; keysIndex < keys.length; keysIndex++) {
    for (var property in source) {
      if (keys[keysIndex] === property && source[property] !== undefined) {
        pickObject[property] = source[property];
      }
    }
  }
  return pickObject;
}
