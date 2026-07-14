let todos = [];

const list = document.getElementById('list');

function getTodos() {
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => {
      return response.json();
    })
    .then(data => {
      data.forEach(todo => print(todo))
    });
}

function print(todo) {
  const li = document.createElement('li');
  li.innerText = todo.title;
  list.append(li);
}

getTodos()