

function display() {
  displayNew();
  displayCleanup();
}

function displayNew() {
  window.store.forEach((category) => {
    let categoryElement = main.querySelector(`*[data-category-id="${category.id}"]`);
    
    if (!categoryElement) {
      categoryElement = createCategoryElement(category);
      main.append(categoryElement);
    }
    else {
      const nameElement = categoryElement.querySelector('[data-name]');
      nameElement.textContent = category.name;
    }

    category.tasks.forEach((task) => {
      let taskElement = categoryElement.querySelector(`*[data-task-id="${task.id}"]`);
      
      if (!taskElement) {  
        taskElement = createTaskElement(task, category);
        categoryElement.append(taskElement);
      }
      else {
        const nameElement = taskElement.querySelector('[data-name]');
        nameElement.textContent = task.name;
      }
    });
  });
}

function displayCleanup() {
  const categoryElements = main.querySelectorAll('[data-category-id]');

  categoryElements.forEach((categoryElement) => {
    const categoryId = categoryElement.dataset.categoryId;

    const storeCategory = window.store.find((category) => category.id === categoryId);
    if (!storeCategory) {
      categoryElement.remove();
    }

    const tasksElements = categoryElement.querySelectorAll('[data-task-id]');
    tasksElements.forEach((taskElement) => {
      const taskId = taskElement.dataset.taskId;

      const storeTask = storeCategory.tasks.find((task) => task.id === taskId);
      if (!storeTask) {
        taskElement.remove();
      }
    });
  })
}

function createCategoryElement(category) {
  const container = document.createElement('li');
  container.setAttribute('data-category-id', category.id);

  const wrapper = document.createElement('div');
  container.append(wrapper);

  const name = document.createElement('p');
  name.setAttribute('data-name', 'true');
  name.textContent = category.name;
  wrapper.append(name);

  const form = document.createElement('form');
  wrapper.append(form);

  const input = document.createElement('input');
  form.append(input);

  const submit = document.createElement('button');
  submit.textContent = 'Add task'
  form.append(submit);

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    addTask(input.value, category.id);
    input.value = '';
  });
  
  return container;
}

function createTaskElement(task, category) {
  const container = document.createElement('li');
  container.setAttribute('data-task-id', task.id);

  const wrapper = document.createElement('div');
  container.append(wrapper);

  const name = document.createElement('span');
  name.setAttribute('data-name', 'true');
  name.textContent = task.name;
  wrapper.append(name);

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete'
  wrapper.append(deleteButton);

  deleteButton.addEventListener('click', () => {
    deleteTask(task.id, category.id)
  });
  
  return container;
}