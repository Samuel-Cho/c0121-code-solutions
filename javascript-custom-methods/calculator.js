/* exported calculator */

var calculator = {
  add: function (x, y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x - y;
  },
  multiply: function (x, y) {
    return x * y;
  },
  divide: function (x, y) {
    return x / y;
  },
  square: function (x) {
    return Math.pow(x, 2);
  },
  sumAll: function (numbers) {
    var sumTotal = 0;
    for (var i = 0; i < numbers.length; i++) {
      sumTotal += numbers[i];
    }
    return sumTotal;
  },
  getAverage: function (numbers) {
    var totalSum = 0;
    for (var j = 0; j < numbers.length; j++) {
      totalSum += numbers[j];
    }
    return totalSum / numbers.length;
  }
};
