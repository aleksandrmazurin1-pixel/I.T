window.todo = [];

function parce() {
  const parce = JSON.parse(localStorage.getItem('todo'));
  if (parce) {
    window.todo = parce;
  }
}

function addCategory(name) {
  window.todo.push({
    id: crypto.randomUUID(),
    name: name,
    tasks: [],
  });
  localStorage.setItem('todo', JSON.stringify(window.todo));
  window.dispatchEvent(new Event('todoChanged'));
}

function addTask(categoryId, nameTask) {
  const foundCategory = window.todo.find(category => category.id === categoryId);

  if (foundCategory) {
    foundCategory.tasks.push({
      id: crypto.randomUUID(),
      name: nameTask
    });
  }
  localStorage.setItem('todo', JSON.stringify(window.todo));
  window.dispatchEvent(new Event('todoChanged'));
}


function deleteTask(categoryId, taskId) {
  const foundCategory = window.todo.find(category => category.id === categoryId);
  if (foundCategory) {
    foundCategory.tasks = foundCategory.tasks.filter(task => task.id !== taskId);
    console.log('dd');
  }
  localStorage.setItem('todo', JSON.stringify(window.todo));
  window.dispatchEvent(new Event('todoChanged'));
}