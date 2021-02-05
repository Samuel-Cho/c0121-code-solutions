var library = [
  {
    isbn: '12345',
    title: 'Harry Potter',
    author: 'J. K. Rowling'
  },
  {
    isbn: '67890',
    title: 'Lord of the Rings',
    author: 'J. R. R. Tolkien'
  },
  {
    isbn: '24680',
    title: 'Chronicles of Narnia',
    author: 'C. S. Lewis'
  }
];

console.log('library array:', library);
console.log('typeof library:', typeof library);

var libraryString = JSON.stringify(library);
console.log('libraryString value:', libraryString);
console.log('typeof libraryString:', typeof libraryString);

var student = '{"numberId": 4, "stringName": "Samuel Cho"}';

console.log('value of student:', student);
console.log('typeof student:', typeof student);

var studentObject = JSON.parse(student);
console.log('studentObject value:', studentObject);
console.log('typeof studentObject:', typeof studentObject);
