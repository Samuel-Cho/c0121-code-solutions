/* exported pick */
function pick(source, keys) {
  var pickObject = {};
  for (var keysIndex = 0; keysIndex < keys.length; keysIndex++) {
    if (source[keys[keysIndex]] !== undefined) {
      pickObject[keys[keysIndex]] = source[keys[keysIndex]];
    }
  }
  return pickObject;
}
