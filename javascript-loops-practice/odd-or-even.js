/* exported oddOrEven */
function oddOrEven(number) {
  var oddEvenArray = [];
  for (var i = 0; i < number.length; i++) {
    if (number[i] % 2 === 0) {
      oddEvenArray.push('even');
    } else {
      oddEvenArray.push('odd');
    }
  }
  return oddEvenArray;
}
