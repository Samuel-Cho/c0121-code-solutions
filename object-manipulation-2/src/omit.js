/* exported omit */
function omit(source, keys) {
  var omitObject = {};

  for (var sourceKey in source) {
    var toBeOmitted = false;
    for (var i = 0; i < keys.length; i++) {
      if (sourceKey === keys[i]) {
        toBeOmitted = true;
        break;
      }
    }
    if (toBeOmitted === false) {
      omitObject[sourceKey] = source[sourceKey];
    }
  }

  return omitObject;
}
