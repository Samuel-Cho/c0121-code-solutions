function convertMinutesToSeconds(minutes) {
  var time = minutes * 60;
  return time;
}

var convertMinutesToSecondsResults = convertMinutesToSeconds(5);
console.log('convertMinutesToSecondsResults:', convertMinutesToSecondsResults);

function greet(name) {
  var greeting = 'Hey, ' + name;
  return greeting;
}

var greetResults = greet('Samuel');
console.log('greetResults:', greetResults);

function getArea(width, height) {
  var area = width * height;
  return area;
}

var getAreaResults = getArea(17, 42);
console.log('getAreaResults:', getAreaResults);

function getFirstName(person) {
  var FirstName = person.firstName;
  return FirstName;
}

var getFirstNameResults = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
console.log('getFirstNameResults:', getFirstNameResults);

function getLastElement(array) {
  var lastElement = array[array.length - 1];
  return lastElement;
}

var getLastElementResults = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('getLastElementResults:', getLastElementResults);
