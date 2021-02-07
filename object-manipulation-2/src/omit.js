/* exported omit */
function omit(source, keys) {
  var omitObject = {};

  if (Object.keys(source).length !== 0) {
    for (var i in source) {
      omitObject[i] = source[i];
    }

    for (var keysIndex = 0; keysIndex < keys.length; keysIndex++) {
      for (var j in omitObject) {
        if (keys[keysIndex] === j) {
          delete omitObject[j];
        }
      }
    }
  }
  return omitObject;
}
