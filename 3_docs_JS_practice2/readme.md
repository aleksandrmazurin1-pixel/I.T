Вот полная архитектура тудулиста — по файлам и по цепочкам, без 
лишних деталей, только структура.

data.js
Переменные:

window.store = []

Функции:

parse() — читает localStorage, парсит JSON, кладёт в window.store если не null
save() — сохраняет window.store в localStorage через JSON.stringify
addCategory(name) — пушит объект {id, name, tasks: []} → вызывает save() → dispatchEvent
addTask(categoryId, taskName) — находит категорию через find → пушит {id, name} 
в tasks → save() → dispatchEvent
deleteCategory(categoryId) — фильтрует window.store → save() → dispatchEvent
deleteTask(categoryId, taskId) — находит категорию → фильтрует её tasks → save() 
→ dispatchEvent


display.js
Переменные:

ссылки на DOM-элементы: list, selectorTask

Функции:

display() — вызывает displayCategories() и cleanupCategories()
displayCategories() — forEach по window.store → для каждой категории:

ищет [data-cat-id] в DOM через querySelector
если не нашёл → создаёт <li> с dataset.catId, текстом, кнопкой удаления, 
вложенным <ul data-tasks-for="catId"> → добавляет в list
если нашёл → обновляет текст
создаёт <option> с dataset.catId для селектора (та же логика — найти или создать)
вызывает displayTasks(category.id)


displayTasks(categoryId) — находит категорию в сторе через find → forEach по 
tasks → для каждой задачи:

ищет [data-task-id] в DOM
если не нашёл → создаёт <li> с dataset.taskId, текстом, кнопкой удаления → 
добавляет в <ul data-tasks-for="categoryId">
если нашёл → обновляет текст
вызывает cleanupTasks(categoryId)


cleanupCategories() — находит все [data-cat-id] → для каждого проверяет есть ли 
в сторе → если нет → remove()
cleanupTasks(categoryId) — находит категорию в сторе → находит все [data-task-id] →
 для каждого проверяет есть ли в category.tasks → если нет → remove()


main.js
Переменные:

ссылки на формы и инпуты

Инициализация (выполняется сразу при загрузке):
parse()
display()
window.addEventListener('storeChanged', display)
Обработчики:

форма категории → submit → addCategory(input.value)
форма задачи → submit → читает categoryId из селектора через 
selectorTask.options[selectorTask.selectedIndex].dataset.catId → 
addTask(categoryId, inputTask.value)


Цепочки
Добавление категории:
submit → main.js → addCategory() → save() → dispatchEvent
→ main.js слушает → display() → displayCategories() → рисует <li> + <option>
Добавление задачи:
submit → main.js → читает catId из селектора → addTask() → save() → 
dispatchEvent
→ main.js слушает → display() → displayCategories() → displayTasks() → 
рисует <li>
Удаление категории:
клик кнопки в display.js → deleteCategory() → save() → dispatchEvent
→ display() → cleanupCategories() → remove()
Удаление задачи:
клик кнопки в display.js → deleteTask() → save() → dispatchEvent
→ display() → displayTasks() → cleanupTasks() → remove()

Это полная карта. Когда будешь писать — открывай её и сверяйся, не 
подглядывая в старый код. Удачи завтра.