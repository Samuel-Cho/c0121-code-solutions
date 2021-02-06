/* exported todos */

var todos = [];
// an array literal is assigned to variable todos
var previousTodosJSON = localStorage.getItem('javascript-local-storage');
// getItem method of localStorage object is called with 1 argument, string javascript-local-storage
// the return of the method is assigned to variable previousTodosJSON
if (previousTodosJSON !== null) {
// if statement with condition, previousTodosJSON is strictly not equal to null and opening curly bracket for declaration block
  todos = JSON.parse(previousTodosJSON);
  // parse method of JSON object is called with 1 argument value of variable previousTodosJSON
  // the return of the method is assigned to variable todos
}
// the closing curly bracket for the if statment declaration block

function storeTodos(event) {
// the storeTodos function is being defined with 1 parameter event
  var todosJSON = JSON.stringify(todos);
  // stringify method of the JSON object is called with argument todos
  // the return of the method is assigned to variable todosJSON
  localStorage.setItem('javascript-local-storage', todosJSON);
  // setItem method of the localStorage object is called with 2 arguments
  // string javascript-local-storage and value of variable todosJSON
}
// closing curly bracket for the function definition

window.addEventListener('beforeunload', storeTodos);
// addEventListener method of window object is called with 2 arguments
// string beforeunload and value of variable storeTodos
