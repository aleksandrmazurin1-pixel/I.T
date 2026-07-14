

/*
Задание 5.3 — Promise.all
Напиши функцию init, которая получает параллельно два списка:

todos: https://jsonplaceholder.typicode.com/todos
users: https://jsonplaceholder.typicode.com/users

Используй Promise.all — оба запроса должны уйти одновременно. 
Когда оба вернутся — выведи в консоль сначала todos, потом users.
Вспомни синтаксис из того кода, который ты изучал в начале этой темы — там было ровно это.
*/

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

function init () { 
  Promise.all([getAllTodos(), getAllUsers()]).then(values => {
    [todos, users] = values;
    console.log(todos);
    console.log(users);
  });
}




init()



