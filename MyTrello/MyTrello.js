// Находим кнопку "Добавить колонку" в HTML и сохраняем в переменную
const btn = document.querySelector('.btn');
const buttonCol = document.querySelector('.btn-add-col');
const board = document.querySelector('.board')
board.append(buttonCol);
buttonCol.classList.add('hidden');

// Вешаем обработчик клика на кнопку
btn.addEventListener('click', () => {
    btn.classList.add('hidden'); // прячем кнопку чтобы не дублировалась
    createList(); // вызываем функцию которая покажет input
});

// Находим контейнер доски — сюда будем добавлять колонк
buttonCol.addEventListener('click', () => {
    buttonCol.classList.add('hidden');
    createList();

});


function createList() {
    // Создаём поле ввода для названия колонки
    const inputCol = document.createElement('input');
    // Добавляем его в тот же блок где кнопка
    btn.parentElement.appendChild(inputCol);
    // Указываем тип — текстовое поле
    inputCol.type = 'text';
    inputCol.classList.add('input-col');

    // Создаём кнопку подтверждения
    const inpColBtn = document.createElement('button');
    // Добавляем рядом с input
    btn.parentElement.appendChild(inpColBtn);
    // Пишем текст на кнопке
    inpColBtn.innerHTML = 'X';
    inpColBtn.classList.add('input-col-btn-del');

    // Вешаем клик на кнопку Add
    inpColBtn.addEventListener('click', removeInputReturnMainBtn);

    inputCol.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            addBtnHandleClickAndEnter();
        }
    });

    function addBtnHandleClickAndEnter() {
        if (inputCol.value && inputCol.value.trim()) {
            // Создаём колонку с введённым названием
            createColumn(inputCol.value);
            // Прячем кнопку Add — она больше не нужна
            inpColBtn.remove();
            // Прячем input — он больше не нужен
            inputCol.remove();
            // Сохраняем новое состояние в localStorage
            saveData();
        }
    }
}

function removeInputReturnMainBtn() {
    const inputCol = document.querySelector('.input-col');
    inputCol.remove();
    btn.classList.remove('hidden');
    this.remove();
}

function createColumn(name) {
    // Создаём все нужные элемxенты колонки
    const column = document.createElement('div');      // обёртка колонки
    const listUl = document.createElement('ul');       // список задач
    const title = document.createElement('h3');        // заголовок
    const buttonUL = document.createElement('button'); // кнопка "Добавить задачу"
    const buttonDelCol = document.createElement('button'); // кнопка удаления колонки
    const buttonRedactCol = document.createElement('button');
    const divAboveTitleAndBtn = document.createElement('div');


    // Даём классы чтобы потом находить через querySelector
    buttonCol.classList.add('btn-in-col');
    column.classList.add('column');
    title.classList.add('title');
    buttonUL.classList.add('btn-close');
    buttonRedactCol.classList.add('btn-red-col');
    buttonDelCol.classList.add('btn-del-col');
    divAboveTitleAndBtn.classList.add('div-above-title-btn');
    listUl.classList.add('ul');

    // Пишем текст на кнопках
    buttonDelCol.innerHTML = '<span class="material-symbols-outlined"> close </span >';
    buttonUL.innerHTML = 'Добавить задачу';
    buttonRedactCol.innerHTML = '<span class="material-symbols-outlined"> pen_size_3 </span>'

    // Строим структуру — кнопка "Добавить задачу" идёт внутрь ul
    listUl.appendChild(buttonUL);
    // Заголовок и кнопка удаления идут в колонку
    column.appendChild(divAboveTitleAndBtn);
    divAboveTitleAndBtn.appendChild(title);
    divAboveTitleAndBtn.appendChild(buttonRedactCol);
    divAboveTitleAndBtn.appendChild(buttonDelCol);
    // Колонка добавляется на доску
    board.appendChild(column);
    // Список задач и кнопка "Ещё колонка" идут в колонку
    column.appendChild(listUl);

    // Пишем название колонки в заголовок
    title.textContent = name;
    board.append(buttonCol);


    // Клик на "Добавить задачу" — прячем кнопку и показываем input
    buttonUL.addEventListener('click', () => {
        buttonUL.classList.add('hidden');
        addHandleTask(buttonUL); // передаём кнопку чтобы знать в какой колонке работаем
    });

    // Клик на X — удаляем все части колонки из DOM
    buttonDelCol.addEventListener('click', () => {
        column.remove();
        const columns = document.querySelectorAll('.column');
        if (columns.length === 0) {
            btn.classList.remove('hidden');
            buttonCol.classList.add('hidden');
        }
        saveData();
    });
    

    buttonRedactCol.addEventListener('click', handleRedactedTitle);
    return column;
}

function handleRedactedTitle() {
    const inputTitleRedact = document.createElement('input');

    const titleRedact = this.parentElement.querySelector('.title');
    this.parentElement.prepend(inputTitleRedact);
    inputTitleRedact.classList.add('inp-title-red');
    inputTitleRedact.type = 'text';
    inputTitleRedact.value = titleRedact.textContent;
    console.log(titleRedact.textContent);
    this.parentElement.querySelector('.title').remove();
    this.remove();
    inputTitleRedact.addEventListener('keydown', handleEnterRedactTitle);
}

function handleEnterRedactTitle(event) {
    if (event.key === 'Enter') {
        const divAboveTitleAndBtn = this.parentElement;
        const newTitle = document.createElement('h3');
        const buttonRedactColTwo = document.createElement('button');
        newTitle.textContent = this.value;
        console.log(newTitle.textContent);
        newTitle.classList.add('title');
        buttonRedactColTwo.classList.add('btn-red-col');
        divAboveTitleAndBtn.prepend(buttonRedactColTwo);
        divAboveTitleAndBtn.prepend(newTitle);
        buttonRedactColTwo.innerHTML = '<span class="material-symbols-outlined"> pen_size_3 </span>';
        console.log();
        this.remove();
        saveData();
        buttonRedactColTwo.addEventListener('click', handleRedactedTitle);
    }
}


function addHandleTask(buttonUL) {
    // Создаём input для ввода задачи
    const inputLi = document.createElement('input');
    // Создаём кнопку подтверждения
    const addBtn = document.createElement('button');

    const divAboveInputLiAndAddBtn = document.createElement('div');

    // Добавляем оба элемента В НАЧАЛО родителя (ul)
    // prepend — это в начало, в отличие от append который в конец
    buttonUL.parentElement.prepend(divAboveInputLiAndAddBtn);
    divAboveInputLiAndAddBtn.append(inputLi);
    divAboveInputLiAndAddBtn.append(addBtn);

    divAboveInputLiAndAddBtn.classList.add('div-above-inputLi-addBtn')

    inputLi.classList.add('input-li');
    addBtn.classList.add('add-task-btn');

    inputLi.type = 'text';
    inputLi.placeholder = 'Добавить задачу...'
    addBtn.innerHTML = '<span class="material-symbols-outlined"> close </span >';

    addBtn.addEventListener('click', () => {
        inputLi.value = '';
    });

    // Enter тоже добавляет задачу
    inputLi.addEventListener('keydown', (event) => {
        if (event.key === 'Enter')
            addTask(inputLi);
    });
}



function addTask(inputLi) {
    // Проверяем что поле не пустое
    if (inputLi.value.trim()) {
        // Создаём элемент задачи — передаём текст и родительский ul
        createTaskElement(inputLi.value, inputLi.parentElement.parentElement);
        // Очищаем input для следующей задачи
        inputLi.value = '';
        // Сохраняем изменения
        saveData();
    }
}

function createTaskElement(text, listUl) {
    const li = document.createElement('li');
    const divAboveSpanTwonBtn = document.createElement('div');
    const spanLi = document.createElement('span');
    // Класс нужен чтобы saveData могла найти текст задачи
    spanLi.classList.add('span-li');
    divAboveSpanTwonBtn.classList.add('div-above-span-twoBtn');
    // Записываем текст задачи в span а не в li
    // потому что внутри li ещё есть кнопка X
    spanLi.textContent = text;
    li.classList.add('li');
    li.appendChild(divAboveSpanTwonBtn);
    divAboveSpanTwonBtn.appendChild(spanLi);

    const liBtnDel = document.createElement('button');
    liBtnDel.innerHTML = '<span class="material-symbols-outlined"> close </span > ';
    liBtnDel.classList.add('li-btn-del');
    const liBtnRedact = document.createElement('button');
    liBtnRedact.innerHTML = '<span class="material-symbols-outlined"> pen_size_3 </span>';
    liBtnRedact.classList.add('li-btn-redact');
    divAboveSpanTwonBtn.appendChild(liBtnRedact);
    divAboveSpanTwonBtn.appendChild(liBtnDel);
    liBtnDel.addEventListener('click', removeTask);
    liBtnRedact.addEventListener('click', redactItem);
    // Добавляем готовый li в конец списка
    listUl.append(li);

    spanLi.addEventListener('click', () => {
        divAboveSpanTwonBtn.classList.toggle('done');
    });
}

function redactItem() {
    const spanLiRedact = this.parentElement.parentElement.querySelector('.span-li');
    console.log(spanLiRedact.textContent);
    const inputLiRedact = document.createElement('input');
    inputLiRedact.type = 'text';
    spanLiRedact.parentElement.prepend(inputLiRedact);
    inputLiRedact.value = spanLiRedact.textContent;
    inputLiRedact.classList.add('input-li-redact');
    spanLiRedact.classList.add('hidden');
    this.classList.add('hidden');
    const liBtnDel = this.parentElement.parentElement.querySelector('.li-btn-del');
    this.parentElement.append(liBtnDel);
    //liInnerBtnRedact.addEventListener('click', handleRedactedItem);

    inputLiRedact.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const spanLi = spanLiRedact;
            spanLi.textContent = inputLiRedact.value;
            spanLi.classList.remove('hidden');
            inputLiRedact.remove();
            const liBtnRedact = spanLi.parentElement.querySelector('.li-btn-redact');
            liBtnRedact.classList.remove('hidden');
            saveData();
        }
    });
}


function removeTask() {
    // Снимаем обработчик чтобы не было утечки памяти
    this.removeEventListener('click', removeTask);
    // Удаляем весь li — родителя кнопки X
    this.closest('.li').remove();
    // Сохраняем изменения
    saveData();
}




function saveData() {
    // Находим все колонки на доске
    const columns = document.querySelectorAll('.column');
    const data = [];

    columns.forEach(column => {
        // Берём название колонки из заголовка
        const name = column.querySelector('.title').textContent;
        const tasks = [];

        // Проходим по всем span задач и собираем текст
        // берём span а не li чтобы не захватить текст кнопки X
        column.querySelectorAll('.span-li').forEach(li => {
            tasks.push(li.textContent);
        });

        // Добавляем объект колонки в массив
        data.push({ name, tasks });
    });

    // JSON.stringify превращает массив в строку — localStorage 
    // не умеет хранить объекты
    localStorage.setItem('trello', JSON.stringify(data));

}

function loadData() {
    // Читаем строку из localStorage
    const raw = localStorage.getItem('trello');

    // Если ничего нет — выходим, страница остаётся пустой
    if (!raw) return;

    // Раз есть данные — прячем кнопку "Добавить колонку"
    btn.classList.add('hidden');

    // JSON.parse превращает строку обратно в массив объектов
    const data = JSON.parse(raw);

    data.forEach(columnData => {
        // Берём ul только что созданной колонки
        const column = createColumn(columnData.name);
        const listUl = column.querySelector('ul');
        const buttonUL = column.querySelector('.btn-close');
        // Восстанавливаем все задачи колонки
        columnData.tasks.forEach(task => {
            createTaskElement(task, listUl);
        });

        // Если задачи были — прячем кнопку и показываем input
        // чтобы состояние было такое же как до перезагрузки
        if (columnData.tasks.length > 0) {
            buttonUL.classList.add('hidden');
            addHandleTask(buttonUL);
        }
    });
    buttonCol.classList.remove('hidden');
}

// Запускаем загрузку данных сразу при открытии страницы
loadData();