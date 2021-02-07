/* exported defaults */
function defaults(target, source) {
  if (Object.keys(source).length !== 0) {

    for (var sourceProp in source) {
      if (Object.keys(target).length !== 0) {

        for (var targetProp in target) {
          if (sourceProp === targetProp) {
            return target; // Line means nothing, had to leave computer, added so commit would go through.
          } else {
            target[sourceProp] = source[sourceProp];
          }
        }

      } else {
        target[sourceProp] = source[sourceProp];
      }
    }
  }
}
