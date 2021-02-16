function ExampleConstructor() {

}
console.log('prototype property of ExampleConstructor:', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor.prototype:', typeof ExampleConstructor.prototype);

var exampleConst = new ExampleConstructor();
console.log('value of exampleConst:', exampleConst);

var isInstance = exampleConst instanceof ExampleConstructor;
console.log('value of isInstance:', isInstance);
