
window.store = [];

function save() {
  window.localStorage.setItem('todo', JSON.stringify(window.store));
  window.dispatchEvent(new StorageEvent('storage'));
}

function parse() {
  try {
    const lsValue = window.localStorage.getItem('todo');
    const json = JSON.parse(lsValue);
    window.store = json;
  }
  catch (e) {
    console.error(e.message)
  }
}

function addCategory(categoryName) {
  const newCategory = {
    id: window.crypto.randomUUID(),
    name: categoryName,
    tasks: [],
  };

  window.store.push(newCategory);

  save();
}

function addTask(taskName, categoryId) {
  const targetCategory = window.store.find((category) => category.id === categoryId);

  if (!targetCategory) {
    return;
  }

  targetCategory.tasks.push({
    id: window.crypto.randomUUID(),
    name: taskName,
  });
  
  save();
}

function deleteTask(taskId, categoryId) {
  const targetCategory = window.store.find((category) => category.id === categoryId);

  if (!targetCategory) {
    return;
  }

  targetCategory.tasks = targetCategory.tasks.filter((task) => task.id !== taskId);
  
  save();
}
