/*
Задание 16 — финал

Напиши с нуля todo-приложение с fetch. Без подглядывания в прошлый код.

Что должно работать:

При загрузке страницы — получить список todos с https://jsonplaceholder.typicode.com/todos и 
список users с того же сервера. Оба запроса параллельно через Promise.all
Каждый todo рендерится как <li> с: чекбоксом статуса, текстом title, именем пользователя рядом, 
кнопкой удаления
Форма добавления новой задачи — селектор для выбора пользователя, инпут для названия, кнопка отправки. 
При сабмите — POST-запрос на сервер, после ответа добавить новый <li> в список
Кнопка удаления — DELETE-запрос на сервер, после ответа убрать <li> из DOM
Чекбокс — PATCH-запрос, меняет completed на противоположное

Пиши по одному блоку за раз — сначала покажи HTML, потом initApp с получением данных, потом рендер, 
потом формы и кнопки. Не пытайся написать всё сразу.
*/


let todos = [];
let users = [];

const form = document.getElementById('form');
const input = document.getElementById('input');
const list = document.getElementById('list');
const selector = document.getElementById('selector');


async function getAllTodos() {
  const resp = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await resp.json()
  return data;
}

async function getAllUsers() {
  const resp = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await resp.json()
  return data;
}

async function setTodo(todo) {
  const resp = await fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    body: JSON.stringify(todo),
    headers: {
      'Content-type': 'application/json'
    }
  });
  const data = resp.json();
  console.log(data);
  return data;
}




function initAll() {
  Promise.all([getAllTodos(), getAllUsers()])
    .then(values => {
    [todos, users] = values;
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      addTodo();
    });

    users.forEach(user => addOption(user));
    todos.forEach(todo => display(todo));
  });
}


function addTodo() {
  if (input.value !== '') {
    todos.push({
      userId: selector.value,
      id: crypto.randomUUID(),
      title: input.value,
      completed: false
    });
    input.value = '';
    todos.forEach(todo => display(todo));
  }
  setTodo();
}

function addOption(user) {
  const opt = document.createElement('option')
  opt.innerText = user.name;
  selector.append(opt);
  console.log(selector.value)
}


function display(todo) {

  const li = document.createElement('li');
  li.innerText = todo.title;

  const delBtn = document.createElement('button');
  delBtn.innerText = 'X';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  if (todo.completed === true) {
    li.classList.add('done');
    checkbox.checked = true;
  } else {
    li.classList.remove('done');
    checkbox.checked = false;
  }

  checkbox.addEventListener('click', () => changeCheck(todo, li, checkbox))

  list.prepend(li);
  li.append(delBtn);
  li.prepend(checkbox)
}


function changeCheck(todo, li, checkbox) {
  if (todo.completed !== true) {
    li.classList.add('done');
    checkbox.checked = true;
    todo.completed = true;
  } else {
    li.classList.remove('done');
    checkbox.checked = false;
    todo.completed = false;
  }
}


initAll()