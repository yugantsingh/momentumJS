const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");
const todoInput = todoForm.querySelector("Input");

let todoS = [];

function deleteTodo(e) {
  const li = e.target.parentElement;
  li.remove();
  todoS = todoS.filter((todo) => String(todo.id) != li.id);
  saveTodo();
  paintTodo();
}

function saveTodo() {
  localStorage.setItem("todos", JSON.stringify(todoS));
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  const button = document.createElement("button");
  li.appendChild(span);
  li.appendChild(button);
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo);
  span.textContent = newTodo.text;
  todoList.appendChild(li);
}

function handleTodoSubmit(e) {
  e.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";

  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  todoS.push(newTodoObj);
  saveTodo();
  paintTodo(newTodo);
}

todoForm.addEventListener("submit", handleTodoSubmit);

const localStorageTodos = localStorage.getItem("todos");
if (localStorageTodos !== null) {
  const parsedTodos = JSON.parse(localStorageTodos);
  todoS = parsedTodos;
  parsedTodos.forEach(paintTodo);
}
