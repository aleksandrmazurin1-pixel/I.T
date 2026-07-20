
/*
Задание 14

Напиши приложение с нуля, которое умеет:

Из задания 13:

Форма с инпутом и кнопкой "Добавить"
При сабмите — добавляет задачу в массив todos, рисует <li> в списке, сохраняет в localStorage
При загрузке страницы — восстанавливает todos из localStorage и рисует список

Новое в задании 14:

У каждого <li> есть кнопка "Удалить"
При клике — удаляет элемент из DOM, из массива todos через filter, сохраняет обновлённый 
массив в localStorage

Проверь: добавь три задачи, перезагрузи страницу — все три должны остаться. Удали одну — 
она должна исчезнуть и не появляться после перезагрузки.
*/


let todos = [];

const form = document.getElementById('form');
const input = document.getElementById('input');
const list = document.getElementById('list');


function parse() {
  const data = JSON.parse(localStorage.getItem('todos'));
  if (data) {
    todos = data;
  }
  todos.forEach(todo => print(todo));
}


form.addEventListener('submit', handleSubmit);

function handleSubmit(evt) {
  if (input.value !== "") {
    evt.preventDefault();
    todos.push({
      name: input.value,
      completed: false
    });
    console.log(todos);
    list.innerText = '';
    todos.forEach(todo => print(todo));
    input.value = '';
    localStorage.setItem('todos', JSON.stringify(todos));
  }
}

function print(todo) {
  const li = document.createElement('li');
  li.innerText = todo.name;

  const delBtn = document.createElement('button');
  delBtn.innerText = 'X';

  const status = document.createElement('input');
  status.type = 'checkbox';
  console.log(todo.completed)

  
  if (status.checked !== true) {
    li.classList.add('done');
    todo.completed = true;
    localStorage.setItem('todos', JSON.stringify(todos));
  } 

  list.append(li);
  li.append(delBtn);
  li.prepend(status)

  delBtn.addEventListener('click', () => handleDelBtn(todo, delBtn));
  localStorage.setItem('todos', JSON.stringify(todos));
}


function handleDelBtn(todo, btn) {
  todos = todos.filter(item => item !== todo);
  console.log(todos);
  btn.parentElement.remove();
  localStorage.setItem('todos', JSON.stringify(todos));
}

parse()
console.log(todos);





/*
function print(todo) {
  const li = document.createElement('li');
  li.innerText = todo.name;

  const delBtn = document.createElement('button');
  delBtn.innerText = 'X';

  const status = document.createElement('input');
  status.type = 'checkbox';
  console.log(todo.completed)

  status.addEventListener('click', () => handleStatus(todo, li, status))

  list.append(li);
  li.append(delBtn);
  li.prepend(status)

  delBtn.addEventListener('click', () => handleDelBtn(todo, delBtn));
  localStorage.setItem('todos', JSON.stringify(todos));
}

function handleStatus(todo, li, status) {
  if (todo.completed !== true) {
    li.classList.add('done');
    status.checked = true;
    todo.completed = true;
    localStorage.setItem('todos', JSON.stringify(todos));
  }
}
*/