const input = document.getElementById('category-input');
const form = document.getElementById('category-form'); 
const main = document.getElementById('main');

parse();
display();

window.addEventListener('storage', () => {
  parse();
  display();
});

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  addCategory(input.value);

  input.value = '';
});
