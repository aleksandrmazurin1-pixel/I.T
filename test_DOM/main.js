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

function initAll() {
  Promise.all([getAllTodos(), getAllUsers()]).then(values => {
    [todos, users] = values;
    console.log(todos);
    
    form.addEventListener('submit', handleSubmit());
    todos.forEach(todo => display(todo));
  });
}

function handleSubmit(evt) {
  evt.preventDefault();
  if (input.value !== '') {
    todos.push({
      userId: id,
      id: crypto.randomUUID(),
      title: input.value
    });
    input.value = '';
  }
}

function display(todo) {
  console.log(todo)
}

initAll()










getAllTodos()
getAllUsers()