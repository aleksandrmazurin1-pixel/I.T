const list = document.getElementById('list');
const celectCategory = document.getElementById('celectCategory');

function displayCategory() {
  window.todo.forEach(category => {

    // ищем существующий <li> категории
    let liCat = document.querySelector(`[data-category-id="${category.id}"]`);

    if (!liCat) {
      // создаём <li> для категории
      liCat = document.createElement('li');
      liCat.dataset.categoryId = category.id;
      list.prepend(liCat);

      // создаём <span> для названия (чтобы не затирать дочерние элементы)
      const catName = document.createElement('span');
      catName.innerText = category.name;
      liCat.append(catName);

      // создаём <ul> для задач этой категории
      const ulTask = document.createElement('ul');
      ulTask.dataset.taskFor = category.id;
      liCat.append(ulTask);

      // создаём <option> для селектора
      const optionCategory = document.createElement('option');
      optionCategory.innerText = category.name;
      optionCategory.dataset.categoryId = category.id;
      celectCategory.prepend(optionCategory);
    }

    // вызываем displayTask всегда — и для новых, и для существующих категорий
    displayTask(category.id);
  });
}

function displayTask(categoryId) {
  // находим категорию в данных
  const category = window.todo.find(cat => cat.id === categoryId);
  if (!category) return;

  // находим <ul> для задач этой категории в DOM
  const ulTask = document.querySelector(`[data-task-for="${categoryId}"]`);
  if (!ulTask) return;

  // перебираем задачи
  category.tasks.forEach(task => {
    let liTask = document.querySelector(`[data-task-id="${task.id}"]`);
    if (!liTask) {
      liTask = document.createElement('li');
      liTask.dataset.taskId = task.id;
      liTask.innerText = task.name;
      ulTask.prepend(liTask);

      const delBtn = document.createElement('button');
      delBtn.innerText = 'Del';
      delBtn.addEventListener('click', () => deleteTask(categoryId, task.id));
      liTask.append(delBtn);
    }
  });
  cleanupTask(categoryId);
}


function cleanupTask(categoryId) {
  const foundCategory = window.todo.find(category => category.id === categoryId);

  if (!foundCategory) {
    return;
  }

  const allTasks = document.querySelectorAll('[data-task-id]');
  allTasks.forEach(taskEl => {
    const found = foundCategory.tasks.find(t => t.id === taskEl.dataset.taskId);
    if (!found) {
      taskEl.remove();
    }
  });
}