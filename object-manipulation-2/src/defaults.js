/* exported defaults */
function defaults(target, source) {
  if (Object.keys(source).length !== 0) {

    for (var sourceProp in source) {
      if (Object.keys(target).length !== 0) {

        if (sourceProp in target) {
          continue;
        } else {
          target[sourceProp] = source[sourceProp];
        }

      } else {
        target[sourceProp] = source[sourceProp];
      }
    }
  }
}
