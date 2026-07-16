
/*
Задание 12 — форма создания задачи, добавить в DOM без сервера
В HTML:
html<form id="form">
    <input type="text" name="title" placeholder="Название задачи">
    <button type="submit">Добавить</button>
</form>
<ul id="list"></ul>
Напиши обработчик формы — при сабмите читает значение из инпута, 
создаёт объект задачи и добавляет новый <li> в список. Никакого fetch — только DOM.
*/



let todos = [];

const form = document.getElementById('form');
const input = document.getElementById('input');
const list = document.getElementById('list');


form.addEventListener('submit', handleSubmit);

function handleSubmit(evt) {
  evt.preventDefault();
  if (input.value !== '') {
    pushTodo(input.value);
    input.value = '';
  }
}

function pushTodo(todo) {
  todos.push(todo);
  console.log(todos)
  todos.forEach(todooo => printTodo(todooo));
}

function printTodo(todo) {
  list.innerHTML = '';
  console.log('fdffdfd')
  const li = document.createElement('li');
  li.innerText = todo;

  list.append(li);
}