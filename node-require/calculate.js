const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

if (process.argv[3] === 'plus') {
  const sum = add(parseInt(process.argv[2]), parseInt(process.argv[4]));
  console.log('result:', sum);
} else if (process.argv[3] === 'minus') {
  const difference = subtract(parseInt(process.argv[2]), parseInt(process.argv[4]));
  console.log('result:', difference);
} else if (process.argv[3] === 'times') {
  const product = multiply(parseInt(process.argv[2]), parseInt(process.argv[4]));
  console.log('result:', product);
} else if (process.argv[3] === 'over') {
  const quotient = divide(parseInt(process.argv[2]), parseInt(process.argv[4]));
  console.log('result:', quotient);
}
