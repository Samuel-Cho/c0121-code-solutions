/* exported sumAll */
function sumAll(numbers) {
  var currentSum = 0;
  for (var i = 0; i < numbers.length; i++) {
    currentSum += numbers[i];
  }
  return currentSum;
}
