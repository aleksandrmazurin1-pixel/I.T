/*
Задание 10 — связать todos и users
Получи параллельно todos и users через Promise.all. 
Для каждого todo найди соответствующего пользователя по userId и выведи в консоль строку вида:
"Купить молоко — Leanne Graham"
То есть title задачи и name пользователя рядом.*/


let todos = [];
let users = [];


async function getAllTodos() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await response.json();
  return data;
}


async function getAllUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  return data;
}


function getAllTogether() {
  Promise.all([getAllTodos(), getAllUsers()])
    .then(values => {
      [todos, users] = values;
      console.log(users.forEach(user => printUser(user.id)));
      todos.forEach(todo => printTodo(todo.id));
    });
}


function printUser(user) {
  return user.name;
}

function printTodo(todo) {
  return todo.title;
}


function printAll(id) {
  console.log(`${printUser(id)} - ${printTodo(id)}`);
}

getAllTogether();

printAll(5);