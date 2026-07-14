const formCategory = document.getElementById('formCategory');
const inputCategory = document.getElementById('inputCategory');

const formTask = document.getElementById('formTask');
const inputTask = document.getElementById('inputTask');

parce();
displayCategory();

window.addEventListener('todoChanged', displayCategory);

formCategory.addEventListener('submit', (event) => {
  event.preventDefault()
  if (inputCategory.value !== '') {
    addCategory(inputCategory.value);
    inputCategory.value = '';
  }
});

formTask.addEventListener('submit', (event) => {
  event.preventDefault();
  
  if (inputTask.value !== '') {
    const selectedOption = celectCategory.options[celectCategory.selectedIndex];
    const categoryId = selectedOption.dataset.categoryId;
    addTask(categoryId, inputTask.value);
    inputTask.value = '';
  }
});