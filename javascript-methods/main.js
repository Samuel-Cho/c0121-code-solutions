// Math Object
var x = 4;
var y = 5;
var z = 7;
var maximumValue = Math.max(x, y, z);
console.log('value of maximumValue:', maximumValue);

var heroes = ['Batman', 'Nightwing', 'Flash', 'Green Lantern'];
var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('value of randomIndex:', randomIndex);
var randomHero = heroes[randomIndex];
console.log('value of randomHero:', randomHero);

// Array Methods
var library = [
  {
    title: 'Radical',
    author: 'David Platt'
  },
  {
    title: 'The Weight of Glory',
    author: 'C.S. Lewis'
  },
  {
    title: 'Mere Christianity',
    author: 'C.S. Lewis'
  }
];

var lastBook = library.pop();
console.log('value of lastBook:', lastBook);
var firstBook = library.shift();
console.log('value of firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('value of library:', library);

// String Methods
var fullName = 'Samuel Cho';
var firstAndLastName = fullName.split(' ');
console.log('value of firstAndLastName:', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('value of sayMyName:', sayMyName);
