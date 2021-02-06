/* global uuid, todos */

var $todoForm = document.querySelector('#todo-form');
// The querySelector method of the document object is being called with one argument
// string #todo-form. The return of the method is being assigned to variable $todoForm.

$todoForm.addEventListener('submit', function (event) {
// The addEventListneer method of the $todoForm object is being called with 2 arguments,
// string submit and an anonymous function definition is being defined with parameter event and the opening { for the definition block.
  event.preventDefault();
  // The preventDefault method of the event object is being called with no arguments.
  var todo = {
  // An object literal is being assigned to the variable todo.
    todoId: uuid.v4(),
    // The v4 method of the uuid object is being called with no aguments.
    // The return of the method is being assigned to the propertery todoId.
    task: $todoForm.elements.task.value,
    // The value property of the task property of the elements property of the $todoForm object
    // is being assigned to the property task.
    isCompleted: false
    // The boolean value false is assigned to the property isCompleted.
  };
  // Closing bracket for the object literal.
  todos.push(todo);
  // The push method of the todos object is being called with argument todo.
  $todoList.append(renderTodo(todo));
  // The append method of the $todoList object is being called with argument of a callback function. ???
  // The renderTodo function is being called with argument todo. The return of the function is the argument. ???
  $todoForm.reset();
  // The reset method of the $todoForm object is being called with no arguments.
});
// The closing curly bracket for the function definition and the closing bracket for the event listener.

var $todoList = document.querySelector('#todo-list');
// The querySelector method of the document object is being called with argument string #todo-list.
// The return of the method is assigned to the variable $todoList.

$todoList.addEventListener('change', function (event) {
// The addEventListener method of the $todoList object is being called with 2 arguments,
// the string change and an anonymous function definition is being defined with parameter event and opening curly bracket for the declaration block.
  var todoId = event.target.getAttribute('id');
  // The getAttribute method of the target property of the event object is being called with one argument
  // string id and the return of the method is being assigned to variable todoID
  for (var i = 0; i < todos.length; i++) {
  // For loop with the initiation number 0 assigned to variable i, contidtion i is less than the length property of the todos object, and
  // final expression i being incremented by 1. The opening curly bracket for the for loop.
    if (todos[i].todoId === todoId) {
    // If statement with the condition, the todoId property of todos object at i strictly equal to value of variable todoId and opening curly bracket for if statment.
      todos[i].isCompleted = event.target.checked;
      // The value of the checked property of the target property of the event object is assigned to
      // the isCompleted property of the todos object at i.
      break;
      // Break statement
    }
    // Closing curly bracket for the if statement declaration block.
  }
  // Closing curly bracket for the for loop declaration block.
});
// The closing curly bracket for the function definition and the closing bracket for the event listener.

for (var i = 0; i < todos.length; i++) {
// For loop with initiation the number 0 assigned to variable i, condition i is less than length property of the todos object
// final expression i incremented by 1 and opening curly bracket for declaration block.
  var $todo = renderTodo(todos[i]);
  // renderTodo function is being called with argument, todos at i. The return of the expression is assigned to variable $todo.
  $todoList.appendChild($todo);
  // appendChild method of the $todoList object is being called with argument $todo.
}
// Closing curly bracket for the declaration block.

function renderTodo(todo) {
// The function renderTodo is being defined with 1 parameter todo. Opening curly bracket for function definition.

  /**
   * <li class="list-group-item">
   *   <div class="form-check d-flex">
   *     <input
   *       type="checkbox"
   *       id="{todo.todoId}"
   *       class="form-check-input">
   *     <label
   *       for="{todo.todoId}"
   *       class="form-check-label flex-grow-1 ml-2">
   *       {todo.task}
   *     </label>
   *   </div>
   * </li>
   */

  var $todo = document.createElement('li');
  // createElement method of the document object is being called with argument string li
  // the return of the method is being assigned to variable $todo.
  $todo.setAttribute('class', 'list-group-item');
  // setAttribute method of the $todo object is being called with 2 arguments,
  // string class and string list-group-item.

  var $formCheck = document.createElement('div');
  // createElement method of document object is being called with 1 argument string div
  // the return of the method is assigned to variable $formCheck
  $formCheck.setAttribute('class', 'form-check d-flex');
  // setAttribute method of the $formCheck object is being called with 2 arguments,
  // string class and string form-check and d-flex.

  var $checkbox = document.createElement('input');
  // createElement method of the document object is called with 1 argument string input
  // the return of the method is assigned to variable $checkbox
  $checkbox.checked = todo.isCompleted;
  // the isCompleted property of the todo object is assigned to the checked property
  // of the $checkbox object.
  $checkbox.setAttribute('id', todo.todoId);
  // the setAttribute method of the $checkbox object is being called with 2 arguments,
  // string id and value of the todoId property of the todo object
  $checkbox.setAttribute('type', 'checkbox');
  // the setAttribute method of the $checkbox object is being called with 2 arguments,
  // string type and string checkbox
  $checkbox.setAttribute('class', 'form-check-input');
  // the setAttribute method of the $checkbox object is being called with 2 arguments,
  // string class and string form-check-input

  var $label = document.createElement('label');
  // createElement method of the document object is called with 1 argument string label
  // the return of the method is assigned to variable $label
  $label.setAttribute('for', todo.todoId);
  // the setAttribute method of the $label object is called with 2 arguments
  // string for and and the todoID property of the todo object
  $label.setAttribute('class', 'form-check-label flex-grow-1 ml-2');
  // the setAttribute method of the $label object is called with 2 arguments
  // string class and string form-check-label, flex-grow, ml-2
  $label.textContent = todo.task;
  // the task property of the todo object is assigned to the textContent property of the $label object

  $todo.append($formCheck);
  // the append method of the $todo object is called with 1 argument, value of variable $formCheck
  $formCheck.append($checkbox, $label);
  // the append method of $formCheck object is called with 2 arguments,
  // value of variable $checkbox and value of variable $label

  return $todo;
  // value of variable $todo is being returned from the function.
}
// closing curly bracket for the function definition.
