// Student Object
var student = {
  firstName: 'Samuel',
  lastName: 'Cho',
  age: 25
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
console.log('value of student.livesInIrvine:', student.livesInIrvine);
student.previousOccupation = 'Marketing';
console.log('value of student.previousOccupation:', student.previousOccupation);

console.log('value of sudent:', student);

// Vehicle Object
var vehicle = {
  make: 'Honda',
  model: 'Accord',
  year: 2010
};

vehicle['color'] = 'Gold';
console.log("value of vehicle['color']:", vehicle['color']);
vehicle['isConvertible'] = false;
console.log("value of vehicle['isConvertible']:", vehicle['isConvertible']);

console.log('value of vehicle:', vehicle);

// Pet Object
var pet = {
  name: 'Snoopy',
  type: 'Guinea Pig'
};

delete pet.name;
delete pet.type;
console.log('value of pet:', pet);
