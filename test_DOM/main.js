
/*
Задание 7 — получить todos и отрендерить каждый как <li>
Это уже делал в задании 5 — но теперь усложним. Каждый <li> должен выглядеть так:

текст: title задачи
если completed: true — добавить класс done на <li> (через li.classList.add('done'))
если completed: false — класс не добавлять

В CSS добавь:
.done {
    text-decoration: line-through;
    color: gray;
}
Получи todos через async/await, пройдись через forEach, для каждого вызови функцию 
renderTodo(todo) — она создаёт <li> с нужным классом и добавляет в список.
*/

const list = document.getElementById('list');

let todos = [];

async function getTodos() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await response.json();
  return data;
}


async function getConvert() {
  todos = await getTodos();
  console.log(todos);
  todos.forEach(todo => print(todo));
}


function print(todo) {
  console.log(todo.completed)
  const li = document.createElement('li');
  li.innerText = todo.title;

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  if (todo.completed === true) {
    li.classList.add('done');
    checkbox.checked = true;
  }

  list.append(li);
  li.prepend(checkbox);
}

getConvert()