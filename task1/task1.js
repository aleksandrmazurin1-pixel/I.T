/*
🎯 ЗАДАНИЕ: БАЗОВАЯ ДЕСТРУКТУРИЗАЦИЯ
Деструктурируй объект и получи переменные name, age и city.
*/

const user = {
    name: 'Василий',
    age: 30,
    city: 'Москва',
    job: 'Разработчик',
};

const { name, age, city } = user;

console.log(name); // 'Василий'
console.log(age);  // 30
console.log(city); // 'Москва'


/*
🎯 ЗАДАНИЕ: ПЕРЕИМЕНОВАНИЕ
Деструктурируй объект, но переменную name назови userName, а age назови userAge.
*/

const user = {
    name: 'Василий',
    age: 30,
    city: 'Москва',
};

const { name: userName, age: userAge } = user;


console.log(userName); // 'Василий'
console.log(userAge);  // 30


/*
🎯 ЗАДАНИЕ: ЗНАЧЕНИЯ ПО УМОЛЧАНИЮ
Деструктурируй объект. У пользователя нет salary и bonus — 
задай им значения по умолчанию.
*/

const user = {
    name: 'Василий',
    age: 30,
};

const { salary = 0, bonus = 500, name = 'Василий', age = 30 } = user;

console.log(name);   // 'Василий'
console.log(age);    // 30
console.log(salary); // 0
console.log(bonus);  // 500



/*
🎯 ЗАДАНИЕ: ВЛОЖЕННАЯ ДЕСТРУКТУРИЗАЦИЯ
Деструктурируй объект и получи переменные name, 
city и country из вложенного объекта address.
*/

const user = {
    name: 'Василий',
    age: 30,
    address: {
        city: 'Москва',
        country: 'Россия',
    },
};

const { name, address: { city, country } } = user;


console.log(name);    // 'Василий'
console.log(city);    // 'Москва'
console.log(country); // 'Россия'


/*

🎯 ЗАДАНИЕ: ДЕСТРУКТУРИЗАЦИЯ В ПАРАМЕТРАХ ФУНКЦИИ
Напиши функцию printUser() которая принимает объект пользователя 
и выводит информацию о нём. Используй деструктуризацию прямо 
в параметрах функции.
*/


const user = {
    name: 'Василий',
    age: 30,
    city: 'Москва',
};

function printUser() {
    const { name, age, city } = user;
    console.log('Имя: ' + name + ',', 'Возраст: ' + age + ',', 'Город: ' + city + '.');
}

printUser(user);
// Имя: Василий
// Возраст: 30
// Город: Москва

function printUser({ name, age, city }) {
    console.log('Имя: ' + name + ',', 'Возраст: ' + age + ',', 'Город: ' + city + '.');
}


/*
🎯 ЗАДАНИЕ: REST В ДЕСТРУКТУРИЗАЦИИ
Деструктурируй объект — возьми name и age отдельно, 
а все остальные свойства собери в переменную rest.
*/

const user = {
    name: 'Василий',
    age: 30,
    city: 'Москва',
    job: 'Разработчик',
    salary: 100000,
};

const { name, age, ...rest } = user;

console.log(name); // 'Василий'
console.log(age);  // 30
console.log(rest);
// {
//   city: 'Москва',
//   job: 'Разработчик',
//   salary: 100000
// }



/*
🎯 ЗАДАНИЕ: ДЕСТРУКТУРИЗАЦИЯ МАССИВА ВНУТРИ ОБЪЕКТА
Деструктурируй объект и получи name, а из массива skills возьми 
только первый и третий навык.
*/

const developer = {
    name: 'Василий',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
};

const { name, skills: [firstSkill, , thirdSkill] } = developer;

console.log(name);       // 'Василий'
console.log(firstSkill); // 'HTML'
console.log(thirdSkill); // 'JavaScript'


/*
🎯 ЗАДАНИЕ: ПОЛНАЯ ДЕСТРУКТУРИЗАЦИЯ
Деструктурируй объект — возьми name, переименуй area в position, 
из вложенного объекта languages возьми english, а все остальные 
свойства собери в rest.
*/

const developer = {
    name: 'Василий',
    area: 'frontend',
    salary: 100000,
    languages: {
        english: 'B2',
        spanish: 'A1',
    },
};

const { name, area: position, languages: { english }, ...rest } = developer;

console.log(name);     // 'Василий'
console.log(position); // 'frontend'
console.log(english);  // 'B2'
console.log(rest);
// {
//   salary: 100000,
//   languages: { english: 'B2', spanish: 'A1' }
// }


/*
🎯 ЗАДАНИЕ: Object.keys()
Выведи все ключи объекта в консоль.
*/

const car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2020,
    color: 'black',
};

Object.keys(car).forEach(k => {
    console.log(k);
});


// brand
// model
// year
// color


/*
🎯 ЗАДАНИЕ: Object.values()
Выведи все значения объекта в консоль, но только те которые являются строками.
*/

const car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2020,
    color: 'black',
};

Object.values(car).forEach((k) => {
    if (typeof k === 'string') {
        console.log(k);
    }
});

// Toyota
// Camry
// black


/*
🎯 ЗАДАНИЕ: Object.entries()
Выведи каждую пару ключ-значение в формате "ключ = значение".
*/

const car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2020,
    color: 'black',
};

Object.entries(car).forEach(([key, value]) => {
    console.log(`'${key}' = '${value}'`)
});

// brand = Toyota
// model = Camry
// year = 2020
// color = black


/*
🎯 ЗАДАНИЕ: Object.fromEntries()
Преобразуй объект — увеличь каждую цену на 20%.
*/

const prices = {
    apple: 100,
    banana: 50,
    orange: 80,
};

const newPrices = Object.fromEntries(
    Object.entries(prices).map(([key, value]) =>
        [key, value * 1.2]
    )
);

console.log(newPrices);
// { apple: 120, banana: 60, orange: 96 }


/*
🎯 ЗАДАНИЕ: Object.fromEntries() — СКИДКА
Преобразуй объект — уменьши каждую цену на 30%.
*/

const prices = {
    phone: 10000,
    laptop: 50000,
    tablet: 25000,
};

const newPrices = Object.fromEntries(Object.entries(prices).map(([key, value]) => [key, value * 0.7]));

console.log(newPrices);
// { phone: 7000, laptop: 35000, tablet: 17500 }


/*
🎯 ЗАДАНИЕ: Array.isArray()
Напиши функцию checkType() которая принимает значение и выводит в консоль 
"Это массив" или "Это не массив".
*/

function checkType(k) {
    if (Array.isArray(k)) {
        console.log('Это массив');
    } else {
        console.log('Это не массив');
    }
}

checkType([1, 2, 3]);      // Это массив
checkType({ a: 1 });       // Это не массив
checkType('hello');        // Это не массив
checkType([]);             // Это массив


/*
✅ Идеально!
🎯 ЗАДАНИЕ: Array.from()
Создай массив из строки и выведи только уникальные символы (без повторений).
*/

const str = 'hello';

const result = Array.from(str).filter((char, index) => str.indexOf(char) === index);

console.log(result); // ['h', 'e', 'l', 'o']
// буква 'l' встречается дважды — в результате только один раз!


/*
🎯 ЗАДАНИЕ: Number.isInteger() + filter()
Отфильтруй из массива только целые числа.
*/

const values = [1, 2.5, 3, 4.7, 5, 6.1, 7, 8];
const result = values.filter(k => Number.isInteger(k));


console.log(result); // [1, 3, 5, 7, 8]



/*
🎯 ЗАДАНИЕ: JSON.parse()
Преобразуй JSON строку в объект и выведи имя и возраст пользователя.
*/

const jsonString = '{"name": "Василий", "age": 30, "city": "Москва"}';

const js = JSON.parse(jsonString)

console.log(js.name); // 'Василий'
console.log(js.age);  // 30
console.log(js);



/*
🎯 ЗАДАНИЕ: JSON.stringify()
Преобразуй объект в JSON строку и выведи результат.
*/

const user = {
    name: 'Василий',
    age: 30,
    skills: ['HTML', 'CSS', 'JS'],
};

const userJson = JSON.stringify(user);

console.log(userJson); // '{"name":"Василий","age":30,"skills":["HTML","CSS","JS"]}'



/*
🎯 ЗАДАНИЕ: ГЛУБОКОЕ КОПИРОВАНИЕ
Сделай глубокую копию объекта через JSON, измени город в копии и убедись что оригинал не изменился.
*/


const user = {
    name: 'Василий',
    address: {
        city: 'Москва',
        country: 'Россия',
    },
};

const copy = JSON.parse(JSON.stringify(user));
copy.address.city = 'Moscow';

console.log(user.address.city); // 'Москва' — не изменился!
console.log(copy.address.city);     // 'Лондон'


/*
🎯 ЗАДАНИЕ: JSON + try/catch
Попробуй распарсить невалидный JSON и обработай ошибку.
*/

const invalidJSON = '{name: Василий, age: 30}'; // невалидный JSON!

try {
    const parsed = JSON.parse(invalidJSON);
    console.log(parced);
} catch (error) {
    console.error('Ошибка парсинга JSON:', error.message);
}




// ============================================
// ============================================
// DOM — DOCUMENT OBJECT MODEL
// ============================================
// ============================================



/*
🎯 ЗАДАНИЕ: querySelector
Есть HTML страница. Напиши JavaScript код который 
 элементы и выводит их в консоль.

 Напиши JS код который:

Найдёт h1 по тегу
Найдёт .description по классу
Найдёт #title по id
Найдёт все li сразу
*/

const h1 = document.querySelector('h1');
const description = document.querySelector('.description');
const title = document.querySelector('#title');
const allLi = document.querySelectorAll('li');

console.log(h1);          // <h1 id="title">Привет мир!</h1>
console.log(description); // <p class="description">Это описание</p>
console.log(title);       // <h1 id="title">Привет мир!</h1>
console.log(allLi);       // NodeList [li, li, li]




/*
🎯 ЗАДАНИЕ: querySelectorAll + forEach
Используй тот же HTML. Найди все li и выведи текст каждого элемента в консоль.
*/

<ul class="menu">
    <li>Пункт 1</li>
    <li>Пункт 2</li>
    <li>Пункт 3</li>
</ul>



document.querySelectorAll('li').forEach((item) => console.log(item.textContent));

// Пункт 1
// Пункт 2
// Пункт 3


/*
🎯 ЗАДАНИЕ: изменить текст элемента
Найди заголовок h1 и измени его текст на 'Привет JavaScript!'.
*/

const k = document.querySelector('h1');

k.textContent = 'Привет JavaScript!';



/*
🎯 ЗАДАНИЕ: изменить стиль элемента
Найди заголовок h1 и измени цвет текста на красный и размер шрифта на 48px.
*/

const fuck = document.querySelector('h1');
fuck.style.color = 'red';
fuck.style.fontSize = '48px';


/*
🎯 ЗАДАНИЕ: querySelectorAll + style
Найди все li и покрась каждый в синий цвет.
*/

<ul class="menu">
    <li>Пункт 1</li>
    <li>Пункт 2</li>
    <li>Пункт 3</li>
</ul>

document.querySelectorAll('li').forEach(item => item.style.color = 'darkBlue');

// Все три пункта должны стать синими



/*
🎯 ЗАДАНИЕ: querySelectorAll + textContent + style
Найди все li и:

Выведи текст каждого в консоль
Покрась каждый в зелёный цвет
Измени текст каждого на заглавные буквы
*/

<ul class="menu">
    <li>Пункт 1</li>
    <li>Пункт 2</li>
    <li>Пункт 3</li>
</ul>

document.querySelectorAll('li').forEach(item => {
    console.log(item.textContent);
    item.style.color = 'green';
    item.textContent = item.textContent.toUpperCase();
});


// В консоли:
// Пункт 1
// Пункт 2
// Пункт 3

// На странице все пункты зелёные и заглавными буквами:
// ПУНКТ 1
// ПУНКТ 2
// ПУНКТ 3


const title = document.querySelector('h1');

const btn = document.querySelector('#btn');

const subtitle = document.querySelector('.title.gray');

const sections = document.querySelectorAll('section');




/*
🎯 ЗАДАНИЕ: innerText и innerHTML
Найди элементы и измени их содержимое.

<!DOCTYPE html>
<html>
<body>
    <h1 id="title">Старый заголовок</h1>
    <p id="description">Старое описание</p>
</body>
</html>

Напиши JS код который:
Изменит текст h1 на 'Новый заголовок'
Изменит содержимое p на 'Описание с 
<b>жирным</b> текстом' — слово "жирным" должно быть жирным!
*/

const a = document.querySelector('#title');
const b = document.querySelector('.description');

a.innerText = 'Новый заголовок';
b.innerHTML = 'Описание с <b>жирным</b> текстом';



/*
🎯 ЗАДАНИЕ: getAttribute и setAttribute
Найди ссылку и поработай с её атрибутами.

<a href="/about" id="link">О нас</a>

Напиши JS код который:
Выведи в консоль текущий href
Измени href на '/contacts'
Добавь атрибут target со значением '_blank'
*/

const a = document.querySelector('a');

console.log(a.getAttribute('href'));   // '/about'
console.log(a.getAttribute('target'));

a.setAttribute('target', '_blank');
a.setAttribute('href', '/contacts');


console.log(a.getAttribute('href'));
// После изменений ссылка ведёт на /contacts и открывается в новой вкладке


/*
🎯 ЗАДАНИЕ: dataset
Найди кнопку и поработай с её data-атрибутами.

<button data-user-id="42" data-role="user">Нажми меня</button>

Напиши JS код который:
Выведи в консоль data-user-id
Выведи в консоль data-role
Измени data-role на 'admin'
Добавь новый атрибут data-active со значением 'true'
*/

const btn = document.querySelector('button');
console.log(btn.dataset.userId);
console.log(btn.dataset.role);

btn.dataset.role = 'admin';
btn.dataset.active = 'true';


// В консоли:
// 42
// user


/*
🎯 ЗАДАНИЕ: style
Найди элемент и измени его стили.

<p id="text">Красивый текст</p>

Напиши JS код который:
Сделай цвет текста красным
Размер шрифта 32px
Фон жёлтым
Потом скрой элемент
*/

const f = document.querySelector('#text');

f.style.color = 'red';
f.style.fontSize = '32px';
f.style.backgroundColor = 'yellow';
f.style.display = 'none';


/*
🎯 ЗАДАНИЕ 1: Поиск по вложенности
Найди первый li внутри .menu и выведи его текст в консоль.
*/

const item = document.querySelector('.menu li');


/*
🎯 ЗАДАНИЕ 2: Поиск всех элементов по вложенности
Найди все li внутри .menu и выведи текст каждого в консоль.

<ul class="menu">
    <li>Главная</li>
    <li>О нас</li>
    <li>Контакты</li>
</ul>
*/

document.querySelectorAll('.menu li').forEach(item => console.log(item.textContent));

// Главная
// О нас
// Контакты


/*
🎯 ЗАДАНИЕ 3: Поиск по атрибуту
Найди input с типом text и выведи его в консоль. 
Потом найди все input с атрибутом required.
*/

const textInput = document.querySelector('input[type="text"]');
const requiredInputs = document.querySelectorAll('input[required]');



console.log(textInput);    // <input type="text" ...>
console.log(requiredInputs); // NodeList [input, input]


/*
🎯 ЗАДАНИЕ 4: NodeList → массив
Найди все li и используй map() чтобы получить массив их текстов.
*/

<ul class="menu">
    <li>Главная</li>
    <li>О нас</li>
    <li>Контакты</li>
</ul>

const p = document.querySelectorAll('li');

const texts = Array.from(p).map(item => item.textContent);



console.log(texts); // ['Главная', 'О нас', 'Контакты']


/*
🎯 ЗАДАНИЕ 5: NodeList → массив + filter()
Найди все li и отфильтруй только те у которых текст длиннее 4 символов.
*/

const p = document.querySelectorAll('.menu li');
const result = Array.from(p).filter(item => item.textContent.length > 4);

console.log(result); // ['Главная', 'Контакты']



/*
🎯 ЗАДАНИЕ 6: NodeList → массив + map() + filter()
Найди все li, получи их тексты и отфильтруй только те которые содержат 
букву 'а'.
*/

const p = document.querySelectorAll('.menu li');
const result = Array.from(p).map(item => item.textContent);
const result1 = result.filter(item2 => item2.includes('а'));

console.log(result1); // ['Главная', 'О нас', 'Контакты']



/*
🎯 ЗАДАНИЕ 7: Поиск по вложенности + изменение стилей
Найди все li внутри .menu и покрась только те у которых 
текст длиннее 5 символов в красный цвет.
*/

document.querySelectorAll('.menu li');
Array.from(a).forEach(item => {
    if (item.textContent.length > 5) {
        item.style.color = 'red';
        item.style.fontSize = '48px';
    }
});

console.log(b);

// 'Главная' — красный
// 'Контакты' — красный
// остальные — без изменений



/*
🎯 ЗАДАНИЕ 8: Поиск по атрибуту + изменение
Найди все input с атрибутом required и покрась их рамку в красный цвет.

<form>
    <input type="text" placeholder="Имя">
    <input type="email" placeholder="Email" required>
    <input type="password" placeholder="Пароль" required>
    <input type="tel" placeholder="Телефон">
</form>
*/


const a = document.querySelectorAll('input[required]');
a.forEach(i => i.style.border = '2px solid red');


// Email и Password получают красную рамку
// Имя и Телефон — без изменений


/*
🎯 ЗАДАНИЕ 9: Всё вместе
Найди все li внутри .menu, получи их тексты, 
отфильтруй только те которые начинаются на букву 
'К', и выведи результат в консоль.
*/

const k = document.querySelectorAll('.menu li');
i = Array.from(k).map(u => u.textContent).filter(j => j[0] === 'К');


console.log(result); // ['Контакты', 'Каталог']



/*
🎯 ЗАДАНИЕ 1: forEach с NodeList
Найди все li через querySelectorAll и добавь каждому класс 'item' и синий цвет.
*/

document.querySelectorAll('li').forEach(i => {
    i.className = 'item'
    i.style.color = 'red'
});
// У каждого li:
// class="item" ✅
// цвет синий ✅


/*
🎯 ЗАДАНИЕ 2: for...of с HTMLCollection
Найди все li через getElementsByTagName и сделай текст каждого 
заглавными буквами.
*/

const q = document.getElementsByTagName('li');
Array.from(q).forEach(a => a.style.textTransform = 'uppercase');
for (let el of q) {
    el.style.textTransform = 'uppercase'
}
// твой код здесь

// ГЛАВНАЯ
// О НАС
// КОНТАКТЫ



/*
🎯 ЗАДАНИЕ 3: for...of + условие
Найди все li через getElementsByTagName и с помощью for...of 
выведи в консоль только те элементы у которых текст длиннее 3 символов.
*/

const q = document.getElementsByTagName('li');
for (let el of q) {
    if (el.textContent.length > 5) {
        console.log(el.textContent);
    }
}

// Главная
// О нас
// Контакты


/*
🎯 ЗАДАНИЕ 4: forEach vs for...of
Реши одно и то же задание двумя способами — через forEach и через for...of.
Найди все li и покрась чётные элементы в синий, нечётные в красный.
*/

const k = document.querySelectorAll('li');
for (let i = 0; i < k.length; i++) {
    if (i % 2 === 0) {
        k[i].style.color = 'red';
    } else {
        k[i].style.color = 'darkBlue';
    }
}

k.forEach((ar, index) => {
    if (index % 2 === 0) {
        ar.style.color = 'red';
    } else {
        ar.style.color = 'darkBlue';
    }
})

for (let [index, em] of k.entries()) {
    if (index % 2 === 0) {
        em.style.color = 'red';
    } else {
        em.style.color = 'darkBlue';
    }
}


// Способ 2 — через for...of:


// Пункт 1 — красный
// Пункт 2 — синий
// Пункт 3 — красный
// Пункт 4 — синий



/*
🎯 ЗАДАНИЕ 5: Array.from() + map()
Найди все li через getElementsByTagName, 
преобразуй в массив и получи массив их текстов в верхнем регистре.
*/

const k = Array.from(document.getElementsByTagName('li'));
const result = k.map(el => el.textContent.toUpperCase());

console.log(result); // ['ГЛАВНАЯ', 'О НАС', 'КОНТАКТЫ']



/*
🎯 ЗАДАНИЕ 6: Всё вместе
Найди все li через querySelectorAll, и:

Выведи в консоль массив их текстов
Покрась все в зелёный через forEach
Выведи в консоль только тексты длиннее 4 символов
*/

const k = Array.from(document.querySelectorAll('li'));
const o = k.map(i => i.textContent);
console.log(o);
const l = k.forEach(item => {
    item.style.color = 'green';
})
for (let o = 0; o < k.length; o++) {
    if (k[o].textContent.length > 6) {
        console.log(k[o].textContent)
    }
}

// 1. ['Дом', 'Главная', 'О нас', 'Контакты']
// 2. все li зелёные
// 3. ['Главная', 'Контакты']


/*
🎯 ЗАДАНИЕ 1: classList.add и contains
Найди кнопку, добавь ей класс 'active' и проверь есть ли он у неё.
*/

const l = document.querySelector('button');
l.classList.add('active');

console.log(l.classList.contains('active'));

// В консоли:
// true — класс active добавлен!



/*
🎯 ЗАДАНИЕ 2: classList.remove и toggle
Найди кнопку, добавь класс 'active', потом удали его, 
потом используй toggle два раза и наблюдай результат.
*/

const j = document.querySelector('button');
j.classList.add('active');
console.log(j.classList.contains('active')); // после add → true

j.classList.remove('active');
console.log(j.classList.contains('active')); // после remove → false


j.classList.toggle('active');
console.log(j.classList.contains('active')); // после первого toggle → true


j.classList.toggle('active');
console.log(j.classList.contains('active')); // после второго toggle → false


/*
Найди параграф, замени класс 'old-style' на 'new-style' 
и выведи в консоль все классы элемента.
*/

const p = document.querySelector('.old-style');
p.classList.replace('old-style', 'new-style');
console.log(p.className);// 'text new-style'



/*
🎯 ЗАДАНИЕ 4: className vs classList
Найди кнопку и:
Через className выведи все классы в консоль
Через className замени ВСЕ классы на 'new-btn'
Через classList.add добавь класс 'active'
Выведи финальные классы в консоль
*/

const o = document.querySelector('button');
console.log(o.className);
o.className = 'new-btn';
o.classList.add('active');
console.log(o.className);


/*
🎯 ЗАДАНИЕ 5
Найди все li у которых есть класс 'active' 
и замени его на класс 'selected'. Выведи классы каждого элемента в консоль.
*/

const y = Array.from(document.querySelectorAll('.menu2 li'));
y.forEach(i => {
    i.classList.replace('active', 'selected');
    console.log(i.className);
});

// В консоли:
// 'item'
// 'item selected'
// 'item'
// 'item selected'


/*
🎯 ЗАДАНИЕ 6
Проверь есть ли класс 'active' у параграфа. 
Если есть — удали его и добавь класс 'hidden'. 
Если нет — добавь класс 'active'.
*/

const p = document.querySelector('.description3');
p.classList.contains('active');
console.log(`ДО: ${p.className}`);
p.classList.replace('active', 'hidden');
console.log(`После: ${p.className}`);


// В консоли:
// до: 'description active'
// после: 'description hidden'


const p = document.querySelector('.description3');
if (p.classList.contains('active')) {
    p.classList.replace('active', 'hidden');
    console.log(p.className);
} else {
    p.classList.add('active');
    console.log(p.className);
}


/*
🎯 ЗАДАНИЕ 7
Пройдись по всем li и добавь класс 'even' чётным э
лементам и класс 'odd' нечётным. Выведи классы каждого в консоль.
*/

const o = document.querySelectorAll('#to li');
o.forEach((item, index) => {
    if ((index + 1) % 2 === 0) {
        item.classList.add('even');
    } else {
        item.classList.add('odd');
    }
    console.log(item.className);
});


// item odd
// item even
// item odd
// item even
// item odd


/*
🎯 ЗАДАНИЕ 8
Выведи в консоль количество классов у элемента. 
Потом удали все классы кроме 'card'.
*/

const f = document.querySelector('.cart');
console.log(f.classList.length);
f.className = 'cart';
// В консоли:
// 4
// 'card'




/*
🎯 ЗАДАНИЕ 1
Найди ul и выведи в консоль:
Первый дочерний элемент
Последний дочерний элемент
Количество дочерних элементов
Пиши! 🚀
*/

const t = document.querySelector('.description4');
console.log(t);
console.log(t.firstElementChild);
console.log(t.lastElementChild);
console.log(t.childElementCount);



/*
🎯 ЗАДАНИЕ 2
Найди элемент с классом 'current' и выведи в консоль:
Его родителя
Следующий элемент
Предыдущий элемент
Пиши! 🚀
*/

const la = document.querySelector('.current');
console.log(la.parentElement);
console.log(la.nextElementSibling);
console.log(la.previousElementSibling);


/*
🎯 ЗАДАНИЕ 3
Найди кнопку и выведи в консоль:
Её родителя
Предыдущий элемент
Первый дочерний элемент родителя
*/

const btn = document.querySelector('button');
console.log(btn.parentElement);
console.log(btn.previousElementSibling);
console.log(btn.parentElement.firstElementChild)



/*
🎯 ЗАДАНИЕ 4
Найди элемент с классом 'target' и выведи в консоль:
Его ближайшего родителя с классом 'wrapper' через closest()
Количество соседей в его списке
Следующий и предыдущий элемент
*/

const r = document.querySelector('.target');
console.log(r);
console.log(r.closest('.wrapper'));
console.log(r.parentElement.childElementCount);
console.log(r.nextElementSibling);
console.log(r.previousElementSibling);



/*
🎯 ЗАДАНИЕ 5
Найди ul и через навигацию по DOM:
Покрась первый li в красный
Покрась последний li в синий
Выведи текст второго li через children
*/

const y = document.querySelector('.menu4');
y.firstElementChild.style.color = 'red';
y.lastElementChild.style.color = 'darkBlue';
y.firstElementChild.nextElementSibling.textContent;


/*
🎯 ЗАДАНИЕ 6
Найди .title и через навигацию по DOM:

Покрась следующий элемент в зелёный
Выведи количество детей у .card
Найди .wrapper через closest() и выведи его в консоль
Покрась последний дочерний элемент .card в красный
*/

const y = document.querySelector('.title44');
y.nextElementSibling.style.color = 'green';
console.log(y.parentElement.childElementCount);
console.log(y.closest('.wrapper'));
y.parentElement.lastElementChild.style.color = 'red';


/*
🎯 ЗАДАНИЕ 7
Найди ul и через навигацию по DOM:
Выведи текст каждого li через children и цикл for
Покрась чётные li в жёлтый, нечётные в оранжевый
*/

const t = document.querySelector('.list22');
for (let i = 0; i < t.children.length; i++) {
    if (i % 2 === 0) {
        t.children[i].style.color = 'yellow';
        console.log(t.children[i].textContent);
    } else {
        t.children[i].style.color = 'orange';
        console.log(t.children[i].textContent);
    }
}


/*
🎯 ЗАДАНИЕ 8: финальное по навигации

Найди .target и через навигацию по DOM:
Выведи текст всех соседей через children родителя
Покрась предыдущий элемент в синий, следующий в красный
Найди .wrapper через closest() и выведи количество его детей
Покрась первый и последний li в зелёный
Пиши! 🚀
*/

const j = document.querySelector('.target111');

j.previousElementSibling.style.color = 'darkBlue';
j.nextElementSibling.style.color = 'red';
console.log(j.closest('.wrapper111').childElementCount);
j.parentElement.firstElementChild.style.color = 'green';
j.parentElement.lastElementChild.style.color = 'green';

for (let el of j.parentElement.children) {
    console.log(el.textContent);
}




/*
🎯 ЗАДАНИЕ 1
*/
<button class="btn">Нажми меня</button>
/*
Добавь обработчик события на кнопку — при клике выведи в консоль 'Кнопка нажата!'.
Пиши! 🚀
*/

const y = document.querySelector('.btn');
y.addEventListener('click', () => {
    console.log('Кнопка нажата!');
});

y.addEventListener('mouseenter', () => {
    y.style.backgroundColor = 'red';
    y.style.color = 'white';
});

y.addEventListener('mouseleave', () => {
    y.style.backgroundColor = '';
    y.style.color = '';
});



/*
🎯 ЗАДАНИЕ 3
*/
//<input type="text" placeholder="Печатай здесь...">
//<p class="output"></p>

/*
При вводе текста в input — выводи то что пишет пользователь в параграф 
.output в реальном времени.
Пиши! 🚀
*/

const input = document.querySelector('input');
input.addEventListener('input', (event) => {
    console.log(`Введено ${event.target.value}`);
    document.querySelector('output').textContent = ...;
});


/*
🎯 ЗАДАНИЕ: попроще
<input type="text" placeholder="Печатай здесь...">
При вводе текста — выводи в консоль каждый символ который печатает пользователь.
Пиши! 🚀
*/

const y = document.querySelector('input');
y.addEventListener('input', (event) => {
    console.log(`Введено: ${event.target.value}`);
});



/*
🎯 ЗАДАНИЕ: click
<button class="btn">Нажми меня</button>
При каждом клике — считай сколько раз нажата кнопка и выводи в консоль.

// Клик 1: 'Кнопок нажато: 1'
// Клик 2: 'Кнопок нажато: 2'
// Клик 3: 'Кнопок нажато: 3'

*/
const u = document.querySelector('.btn');
let count = 0;
u.addEventListener('click', () => {
    count++;
    console.log(`Кнопок нажато: ${count}`);
});



/*
🎯 ЗАДАНИЕ: mouseenter / mouseleave

При наведении мыши — выведи в консоль 'Мышь вошла!' и покрась блок в синий. 
При уходе мыши — выведи 'Мышь ушла!' и верни серый цвет.
Пиши! 🚀
*/

const o = document.querySelector('.box');
o.addEventListener('mouseenter', () => {
    console.log('Мышь вошла!');
    o.style.backgroundColor = 'DarkBlue';
});

o.addEventListener('mouseleave', () => {
    console.log('Мышь вышла!');
    o.style.backgroundColor = 'grey';
});


/*
🎯 ЗАДАНИЕ: mousemove

При движении мыши внутри блока — выводи в консоль координаты мыши X и Y.


// X: 120, Y: 45
// X: 121, Y: 46
// ...
*/

const y = document.querySelector('.box2');
y.addEventListener('mousemove', (event) => {
    console.log(`X: ${event.clientX}, Y: ${event.clientY}`)
})



/*
🎯 ЗАДАНИЕ: dblclick
При двойном клике — измени текст параграфа на 
'Ты дважды кликнул!' и покрась его в красный.
Пиши! 🚀
*/

const u = document.querySelector('.text3');
u.addEventListener('dblclick', () => {
    u.textContent = 'Ты дважды кликнул!';
    u.style.color = 'red';
});


/*
🎯 ЗАДАНИЕ: contextmenu

При нажатии правой кнопки мыши — отмени стандартное контекстное 
меню и выведи в консоль 'Правая кнопка нажата!'.
Пиши! 🚀
*/


const i = document.querySelector('.box4');
i.addEventListener('contextmenu', (event) => {
    console.log('Правая кнопка нажата!');
    event.preventDefault();
});


/*
🎯 ЗАДАНИЕ 7
При нажатии кнопки мыши — покрась блок в красный. 
При отпускании — верни серый цвет. 
В консоль выведи соответствующее сообщение.
Пиши! 🚀
*/

const q = document.querySelector('.box5');
q.addEventListener('mousedown', () => {
    q.style.backgroundColor = 'red';
    q.style.color = 'white';
    console.log('Мышь нажата!!!');
});

q.addEventListener('mouseup', () => {
    q.style.color = 'black';
    q.style.backgroundColor = 'grey';
    console.log('Мышь отпущена!!!');
});



/*
🎯 ЗАДАНИЕ 8

При вводе текста — выводи в консоль каждый 
символ который печатает пользователь. 
При потере фокуса — выведи 'Поле покинуто!'.
Пиши! 🚀

*/

const r = document.querySelector('input[type="text32"]');
r.addEventListener('input', (event) => {
    console.log(`Введено:${event.target.value}`);
})

r.addEventListener('blur', () => {
    console.log('Поле потеряло фокус. !');
})

/*
🎯 ЗАДАНИЕ 9

При получении фокуса — покрась рамку input в синий. 
При потере фокуса — верни рамку обратно. 
При вводе текста — выводи длину введённого текста в консоль.
Пиши! 🚀
*/

const o = document.querySelector('input[type="tex2t"]')
o.addEventListener('focus', () => {
    o.style.border = '10px solid darkBlue';
});

o.addEventListener('blur', () => {
    o.style.border = '';
});
o.addEventListener('input', (event) => {
    console.log(`Длина текста: ${event.target.value.length}`);
});



/*
🎯 ЗАДАНИЕ 10
При отправке формы — отмени стандартное поведение 
браузера и выведи в консоль 'Форма отправлена!'.
Пиши! 🚀
*/

const w = document.querySelector('.form-10');
w.addEventListener('submit', (event) => {
    event.preventDefault(); // отменяем перезагрузку страницы!
    console.log('Форма отправлена!');
});



/*
🎯 ЗАДАНИЕ 11
/*
При нажатии клавиши 'Enter' на клавиатуре — 
покрась блок в зелёный. При нажатии 'Escape' — верни серый цвет.
Пиши! 🚀
*/

const box = document.querySelector('.box-11');
box.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        box.style.backgroundColor = 'red';
        console.log('Нажат enter!. ');
    }

})


const box = document.querySelector('.box-11');

document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        // покрасить в зелёный
    }
    if (event.key === 'Escape') {
        // вернуть серый
    }
});


/*
🎯 ЗАДАНИЕ 12

При каждом клике на кнопку — переключай текст параграфа между 
'Кнопка нажата' и 'Кнопка не нажата'. И меняй цвет параграфа — 
зелёный когда нажата, красный когда не нажата.
Пиши! 🚀

*/
let press = true;
const r = document.querySelector('.btn-12');
r.addEventListener('mousedown', () => {
    press = !press;
    if (!press) {
        r.nextElementSibling.textContent = 'Кнопка нажата!';
        r.nextElementSibling.style.color = 'green';
    } else {
        r.nextElementSibling.textContent = 'Кнопка не нажата!';
        r.nextElementSibling.style.color = 'red';
    }
});


/*
🎯 ЗАДАНИЕ 13
При движении мыши по всей странице — выводи в параграф 
текущие координаты мыши в формате 'X: 120, Y: 45'.
Пиши! 🚀
*/

const p = document.querySelector('.text-13');
document.addEventListener('mousemove', (event) => {
    p.textContent = `X: ${event.clientX}, Y: ${event.clientY} `;
})




//🎯 ЗАДАНИЕ 14

const g = document.querySelector('.box-11');
const q = document.querySelector('.btn-12');

function getHightEl() {
    if (g.style.backgroundColor === "grey") {
        g.style.backgroundColor = "red";
    } else {
        g.style.backgroundColor = "grey";
    }
}

q.addEventListener('click', (getHightEl));


/*
🎯 ЗАДАНИЕ 15

При нажатии клавиши 'ArrowUp' — увеличивай размер шрифта на 5px. 
При нажатии 'ArrowDown' — уменьшай на 5px. 
Выводи текущий размер в консоль.
Пиши! 🚀
/*/


const k = document.querySelector('.title-14');

// Переменная СНАРУЖИ обработчика — иначе сбрасывается каждый раз!
let fontSize = 16;

// document, а не k — потому что div не слушает клавиатуру
document.addEventListener('keydown', (event) => {

    if (event.key === 'ArrowUp') {
        fontSize += 5; // увеличиваем переменную на 5
        k.style.fontSize = fontSize + 'px'; // применяем к элементу
        console.log(`Размер: ${fontSize}px`);
    }

    if (event.key === 'ArrowDown') {
        fontSize -= 5; // уменьшаем переменную на 5
        k.style.fontSize = fontSize + 'px'; // применяем к элементу
        console.log(`Размер: ${fontSize}px`);
    }
});


/*
🎯 ЗАДАНИЕ 1
Назначь обработчик клика через onclick который выводит 'Клик!' 
в консоль. Потом удали его через null и убедись что клик больше 
не работает.
Пиши! 🚀
*/

const btnOne = document.querySelector('.btn-1');
btnOne.onclick = fn1;

function fn1() {
    console.log('Клик!!');
}

btnOne.onclick = null;



/*
🎯 ЗАДАНИЕ 2
Назначь обработчик клика через addEventListener 
с именованной функцией. Потом удали его через 
removeEventListener и убедись что клик больше не работает.
Пиши! 🚀
*/

const btnTwo = document.querySelector('.btn-2');
btnTwo.addEventListener('click', clickFunction);

function clickFunction() {
    console.log('Click!!!');
}

btnTwo.removeEventListener('click', clickFunction);



/*
🎯 ЗАДАНИЕ 3

Назначь обработчик клика который срабатывает 
только один раз — выводит 'Первый и последний клик!' 
в консоль. При повторных кликах ничего не происходит.
Пиши! 🚀
*/

const btnThree = document.querySelector('.btn-2');

btnThree.addEventListener('click', () => {
    console.log('1');
}, { once: true });


/*
🎯 ЗАДАНИЕ 4

При клике на "Активировать" — добавь обработчик на 
целевую кнопку который выводит 'Целевая кнопка нажата!'. 
При клике на "Деактивировать" — удали этот обработчик.
Пиши! 🚀
*/

const active = document.querySelector('.btn-activate');
const deActive = document.querySelector('.btn-deactivate');
const target = document.querySelector('.btn-target');

active.addEventListener('click', () => {
    target.addEventListener('click', clickBtn);
});

deActive.addEventListener('click', () => {
    target.removeEventListener('click', clickBtn);
});
function clickBtn() {
    console.log('Целевая кнопка нажата!');
}


/*
🎯 ЗАДАНИЕ 5

<button class="btn-pay">Оплатить</button>
<p class="status">Ожидание оплаты...</p>

Кнопка "Оплатить" должна сработать только один раз — 
изменить текст параграфа на 'Оплата прошла успешно!' 
и заблокировать кнопку. При повторных кликах ничего не происходит.
Пиши! 🚀

*/

const btnPay = document.querySelector('.btn-pay');
const p = document.querySelector('.status');
btnPay.addEventListener('click', () => {
    p.textContent = 'Оплата прошла успешно!';
    btnPay.disabled = true;
}, { once: true })



/*
🎯 ЗАДАНИЕ 6

Считай количество кликов на кнопку. 
После 5 кликов — удали обработчик через removeEventListener 
и измени текст параграфа на 'Лимит кликов исчерпан!'.
Пиши! 🚀
*/

const btnSix = document.querySelector('.btn-6')
const clickerr = document.querySelector('.counter-6')
let count = 0;
btnSix.addEventListener('click', clicker);

function clicker() {
    count++;
    if (count <= 5) {
        return clickerr.textContent = `Количество кликов: ${count}`;
    } else {
        btnSix.removeEventListener('click', clicker)
        return clickerr.textContent = 'Лимит кликов исчерпан!';
    }
}


/*
🎯 ЗАДАНИЕ 7

При вводе текста — выводи его в параграф в реальном времени. 
При клике на "Остановить слежку" — удали обработчик с input 
и параграф больше не обновляется.
Пиши! 🚀
*/

const input = document.querySelector('.input-7');
const btnStop = document.querySelector('.btn-stop');
const p = document.querySelector('.output-7');

input.addEventListener('input', seek);

function seek(event) {
    return p.textContent = `Введено: ${event.target.value}`;
}

btnStop.addEventListener('click', () => {
    input.removeEventListener('input', seek);
    btnStop.disabled = true;
})




/*
🎯 ЗАДАНИЕ 1

При клике на кнопку — выведи в консоль тип события, 
элемент на котором произошло событие и координаты мыши.
Пиши! 🚀
*/

const btnSix = document.querySelector('.btn-6');

btnSix.addEventListener('click', (event) => {
    console.log(event.type);
    console.log(event.target);
    console.log(event.clientX);
    console.log(event.clientY);
});



/*
🎯 ЗАДАНИЕ 2

При нажатии клавиши — выведи в консоль название клавиши 
через event.key и код клавиши через event.code.
Пиши! 🚀
*/

const i = document.querySelector('.input-2');
i.addEventListener('keydown', (event) => {
    console.log(event.key);
    console.log(event.code);
});


/*
🎯 ЗАДАНИЕ 3
Повесь один обработчик на ul. 
При клике на любой li — выведи в кон
соль текст кликнутого элемента через event.target.
Пиши! 🚀
*/

const i = document.querySelector('.list-3');
i.addEventListener('click', (event) => {
    console.log(event.target.textContent);
})


/*
🎯 ЗАДАНИЕ 4

Повесь один обработчик на ul. 
При клике на li — покрась кликнутый элемент в жёлтый. 
При повторном клике — верни обычный цвет.
Пиши! 🚀
*/

const i = document.querySelector('.list-3');
let clicked = false;
i.addEventListener('click', () => {

    clicked = !clicked;
    if (clicked) {
        i.style.color = 'red';
    } else {
        i.style.color = 'black';
    }
})


/*
🎯 ЗАДАНИЕ 5

При клике на ссылку — отмени переход и выведи в консоль 
'Переход отменён!' и адрес ссылки через event.target.href.
Пиши! 🚀
*/

const i = document.querySelector('.link-5');
i.addEventListener('click', (event) => {
    console.log(event.target.href);
    event.preventDefault(); // ← добавь!
    console.log('Переход отменен!')
})


/*
🎯 ЗАДАНИЕ 1

При отправке формы — отмени перезагрузку страницы и 
выведи в консоль значения обоих полей.
Пиши! 🚀

*/

const form = document.querySelector('.form-1');
const imText = document.querySelector('input[type="text22"]');
const imEm = document.querySelector('input[type="email22"]');


form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Форма отправлена');
    console.log(imText.value);
    console.log(imEm.value);
})


/*
🎯 ЗАДАНИЕ 2
При отправке формы — проверь что оба поля заполнены. 
Если пустые — покрась рамку в красный. 
Если заполнены — покрась в зелёный и выведи 'Форма валидна!' в консоль.
Пиши! 🚀
*/

const form = document.querySelector('.form-2');
const inputs = form.querySelectorAll('input').

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let isValid = true;
        inputs.forEach(input => {
            if (!input.value.trim()) {
                input.style.borderColor = 'red';
                isValid = false;
            } else {
                input.style.borderColor = 'currentColor';

            }
        })
        console.log('Форма валидна!');
        return isValid;
    })



/*
🎯 ЗАДАНИЕ 3

При отправке формы — проверь что все поля заполнены. 
Если пустые — покрась рамку в красный. 
Если заполнены — покрась в зелёный. 
Если форма полностью валидна — выведи в консоль значение каждого 
поля и 'Отправляем данные!'.
Пиши! 🚀
*/



const formThree = document.querySelector('.form-3');

// querySelectorAll — берём ВСЕ input внутри формы
const inputs = formThree.querySelectorAll('input');

formThree.addEventListener('submit', (event) => {

    // Отменяем перезагрузку страницы при отправке формы
    event.preventDefault();

    // Предполагаем что форма валидна — пока не доказано обратное
    let isValid = true;

    // Проходим по каждому input:
    inputs.forEach(input => {

        // .trim() убирает пробелы по краям
        // ! означает "если пустое"
        // То есть: если поле пустое — заходим в if
        if (!input.value.trim()) {
            input.style.borderColor = 'red'; // показываем ошибку
            isValid = false; // форма невалидна!
        } else {
            input.style.borderColor = 'green'; // всё хорошо
        }
    });

    // Если все поля заполнены — isValid осталось true:
    if (isValid) {
        console.log('Отправляем данные!');

        // Выводим значение каждого поля:
        // input.placeholder — название поля ('Имя', 'Email'...)
        // input.value — то что напечатал пользователь
        inputs.forEach(input => {
            console.log(`${input.placeholder}: ${input.value}`);
        });
    }
});


/*
🎯 ЗАДАНИЕ 4
При отправке формы — проверь что оба поля заполнены. 
Если пустые — покрась рамку в красный. 
Если заполнены — покрась в зелёный и выведи в консоль логин и 'Вход выполнен!'.
Пиши! 🚀
*/

const formFour = document.querySelector('.form-4');
const inputs = formFour.querySelectorAll('input');

formFour.addEventListener('submit', (event) => {
    event.preventDefault();

    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.border = '2px solid red';
            isValid = false;
        } else {
            input.style.border = '1px solid green';
        }
    });
    if (isValid) {
        console.log('Вход выполнен!')

        inputs.forEach(input => {
            console.log(input.placeholder + input.value);
        })
    }
})


/*
🎯 ЗАДАНИЕ 3

Цель: То же самое что в задании 2, но добавь счётчик задач. 
При добавлении задачи — счётчик увеличивается. При удалении — уменьшается.
Результат:

Купить хлеб
Позвонить маме
Погулять

Задач: 3

1. Найди ul и сохрани в переменную
2. Найди кнопку и повесь addEventListener с именованной функцией
3. Внутри функции обработчика:
   а) возьми текст из input через previousElementSibling.value.trim()
   б) если текст не пустой — вызови createTodo(text)
   в) очисти input
   г) если пустой — alert
4. Напиши функцию createTodo(text):
   а) создай li через createElement
   б) задай текст через innerText
   в) добавь класс через classList.add
   г) повесь обработчик removeTodo на клик
   д) добавь li в КОНЕЦ списка через append
5. Напиши функцию removeTodo:
   а) удали обработчик через removeEventListener
   б) удали элемент через remove()

1. Найди ul, кнопку и параграф счётчика
2. Создай переменную count = 0
3. Напиши функцию updateCounter() которая 
   обновляет текст параграфа
4. В createTodo — увеличивай count и вызывай updateCounter()
5. В removeTodo — уменьшай count и вызывай updateCounter()
*/

const btn = document.querySelector('.btn-add');





const btn = document.querySelector('.btn-open');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');

btn.addEventListener('click', openModal);

function openModal() {
    modal.classList.add('open');
    attachModalEvents();
}

function attachModalEvents() {
    close.addEventListener('click', closeModal);
    document.addEventListener('keydown', handleEscape);
    modal.addEventListener('click', handleOutside);
}

function handleEscape(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
}

function handleOutside(event) {
    const isClickInside = !!event.target.closest('.modal-content');
    if (!isClickInside) {
        closeModal();
    }
}


function closeModal() {
    modal.classList.remove('open');
    detachModalEvents()
}

function detachModalEvents() {
    close.removeEventListener('click', closeModal);
    document.removeEventListener('keydown', handleEscape);
    modal.removeEventListener('click', handleOutside);
}










/*
🎯 ЗАДАНИЕ 1
Сохрани своё имя в localStorage и выведи его в консоль.
*/

localStorage.setItem('name', 'Василий');

console.log(localStorage.getItem('name'));// 'Василий' (или твоё имя)



/*
🎯 ЗАДАНИЕ 2
Сохрани число 42 в localStorage, получи его и выведи в консоль. 
Потом удали этот ключ и проверь что он стал null.
*/

localStorage.setItem('num', '42');
console.log(localStorage.getItem('num'));

localStorage.removeItem('num');


localStorage.clear();




/*
🎯 ЗАДАНИЕ 3
Сохрани объект пользователя в localStorage, потом получи его и выведи имя и возраст.
*/

const user = {
    name: 'Василий',
    age: 30,
    city: 'Москва'
};

localStorage.setItem('user', JSON.stringify(user));

const savedUser = JSON.parse(localStorage.getItem('user'));

console.log(savedUser.name); // 'Василий'
console.log(savedUser.age);  // 30




/*
🎯 ЗАДАНИЕ 4
🎯 ЗАДАНИЕ 4
Сохрани массив задач в localStorage, получи его и выведи каждую задачу в консоль.
*/

const todos = ['Купить хлеб', 'Позвонить маме', 'Погулять'];

localStorage.setItem('todos', JSON.stringify(todos));

const f = JSON.parse(localStorage.getItem('todos'));

console.log(f[0]);

console.log(f[1]);

console.log(f[2]);

// Купить хлеб
// Позвонить маме
// Погулять


/*

🎯 ЗАДАНИЕ 5
Загрузи массив из localStorage при старте. 
Если данных нет — используй пустой массив. 
Добавь новую задачу и сохрани обратно.
*/

// 1. Загружаем из localStorage (или пустой массив если нет данных):
const todos = JSON.parse(localStorage.getItem('todos')) || [];

// 2. Добавляем новую задачу:
todos.push('Новая задача');

// 3. Сохраняем обратно:
localStorage.setItem('todos', JSON.stringify(todos));

// 4. Выводим результат:
console.log(todos);

// 1. Загрузить todos из localStorage (или [] если нет)
// 2. Добавить задачу 'Новая задача'
// 3. Сохранить обратно в localStorage
// 4. Вывести в консоль финальный массив





// Разбираемся с forEach

const students = [
    { name: 'Алексей', grade: 85, passed: true },
    { name: 'Мария', grade: 42, passed: false },
    { name: 'Дмитрий', grade: 91, passed: true },
    { name: 'Анна', grade: 38, passed: false },
    { name: 'Сергей', grade: 76, passed: true },
    { name: 'Елена', grade: 55, passed: true },
];


students.forEach((students) => {
    console.log(`${students.name} - ${students.grade}`);
});


students.forEach((students) => {
    if (students.grade > 60) {
        console.log(`${students.name} - ${students.grade}`)
    }
});


let count = 0;
students.forEach((students) => {
    if (students.passed === false) {
        count++;
    }
});
console.log(count);


students.forEach((students) => {
    if (students.passed === true) {
        console.log(`${students.name} - Сдал`);
    } else {
        console.log(`${students.name} - НЕ Сдал`);
    }
});




/*
Задание 3
Создай новый массив объектов где у каждого студента добавлено новое свойство status:
{ name: 'Алексей', grade: 85, passed: true, status: 'Сдал' }
{ name: 'Мария', grade: 42, passed: false, status: 'Не сдал' }
*/



const students = [
    { name: 'Алексей', grade: 85, passed: true },
    { name: 'Мария', grade: 42, passed: false },
    { name: 'Дмитрий', grade: 91, passed: true },
    { name: 'Анна', grade: 38, passed: false },
    { name: 'Сергей', grade: 76, passed: true },
    { name: 'Елена', grade: 55, passed: true },
];


/*
Задание 3
Найди студента с самой высокой оценкой. Результат — объект студента.
*/

const topStudent = students.reduce((acc, student) => {
    // сравниваем оценку текущего победителя и следующего студента
    if (student.grade > acc.grade) {
        return student; // новый победитель
    } else {
        return acc; // старый победитель остаётся
    }
}, students[0]); // начинаем с первого студента как с победителя

console.log(topStudent);








//---------------------------------
//---------------------------------
//Сложный For Each
//---------------------------------
//---------------------------------

const shop = [
    {
        category: 'Телефоны',
        items: [
            { name: 'iPhone 15', price: 80000, inStock: true },
            { name: 'Samsung S24', price: 70000, inStock: false },
            { name: 'Pixel 8', price: 60000, inStock: true },
        ]
    },
    {
        category: 'Ноутбуки',
        items: [
            { name: 'Macbook Pro', price: 150000, inStock: true },
            { name: 'Dell XPS', price: 120000, inStock: true },
            { name: 'Lenovo X1', price: 90000, inStock: false },
        ]
    },
    {
        category: 'Наушники',
        items: [
            { name: 'AirPods Pro', price: 20000, inStock: true },
            { name: 'Sony WH-1000', price: 25000, inStock: false },
        ]
    }
];

/*
Задание 1 — выведи в консоль каждую категорию и сколько товаров в ней:
"Телефоны — 3 товара"
*/
shop.forEach((shop) => {
    let count = shop.items.length;
    console.log(`${shop.category} - ${count} товара`);
});

/*
Задание 2 — выведи все товары из всех категорий через вложенный forEach:
"iPhone 15 — 80000р"
*/

shop.forEach((shop) => {
    shop.items.forEach((items) => {
        console.log(items.name + '-' + items.price);
    });
});

/*
Задание 3 — посчитай сколько всего товаров есть в 
наличии (inStock: true) по всем категориям.
*/
let count = 0;
shop.forEach((shop) => {
    shop.items.forEach((items) => {
        if (items.inStock === true) {
            count++;
        }
    });
});
console.log(count);





// ============================================
// АСИНХРОННЫЙ JAVASCRIPT
// ============================================

/*
🎯 ЗАДАНИЕ 2
Создай Promise который через 2 секунды:

Если число больше 5 — resolve с сообщением 'Число больше 5!'
Если меньше или равно — reject с сообщением 'Число слишком маленькое!'

Обработай оба случая.
*/

const num = 2;
const promice = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (num > 5) {
            resolve("Число больше 5!");
        } else {
            reject("Число слишком маленькое!");
        }
    }, 2000);
});

promice
    .then(console.log)
    .catch(console.log);




/*🎯 ЗАДАНИЕ 3
Создай цепочку .then() которая последовательно преобразует число.*/

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 1000);
});

promise
    .then((value) => { return value * 2 })
    .then((value) => { return value + 5 })
    .then(console.log);

// твой код здесь — цепочка .then():
// 1. Получи число 10
// 2. Умножь на 2 → 20
// 3. Прибавь 5 → 25
// 4. Выведи результат в консоль

// Через 1 секунду в консоли: 25




/*
🎯 ЗАДАНИЕ 4
Создай Promise с обработкой ошибки через .catch() и .finally().
*/

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve('Отлично!');
        reject('Что-то пошло не так!');
    }, 1000);
});

promise
    .then((value) => console.log(value))
    .catch((error) => console.log(error))
    .finally(() => console.log('На этом все!'));
// твой код здесь:
// 1. .then() — выведи 'Успех: ' + значение
// 2. .catch() — выведи 'Ошибка: ' + ошибка
// 3. .finally() — выведи 'Операция завершена!'

// Если reject:
// 'Ошибка: Что-то пошло не так!'
// 'Операция завершена!'

// Если resolve('Готово!'):
// 'Успех: Готово!'
// 'Операция завершена!'





/*
🎯 ЗАДАНИЕ 5
Создай две функции которые возвращают Promise. 
Соедини их в цепочку — результат первой передай во вторую.
*/

// Функция 1: через 1 секунду возвращает имя 'Василий'
function getName() {
    return new Promise((resolve) => {  // ← return и new Promise!
        setTimeout(() => {
            resolve('Василий'); // передаём значение дальше
        }, 1000);
    });
}

// Функция 2: принимает имя, через 1 секунду возвращает 'Привет, Василий!'
function greet(name) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Привет, ${name}!`);
        }, 1000);
    });
}

// Использование:
getName()
    .then(greet)
    .then(console.log)
    .catch(console.error);

// Через 2 секунды в консоли:
// 'Привет, Василий!'







/*
🎯 ЗАДАНИЕ 1
Сделай запрос к серверу и выведи в консоль заголовок (title) первого поста.
*/

// URL: 'https://jsonplaceholder.typicode.com/posts/1'

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(response => console.log(response.title))
    .catch(console.error)

// В консоли:
// 'sunt aut facere repellat provident...'







/*
🎯 ЗАДАНИЕ 2
Сделай запрос и проверь response.ok. 
Если всё хорошо — выведи имя и email пользователя. Если нет — брось ошибку.*/

// URL: 'https://jsonplaceholder.typicode.com/users/1'

fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Oshibka');
    })

    .then(response => {
        console.log(response.name);
        console.log(response.email);
    })
    .catch(console.error);


// В консоли:
// 'Имя: Leanne Graham'
// 'Email: Sincere@april.biz'




/*
🎯 ЗАДАНИЕ 3
Сделай запрос и получи список всех постов. 
Выведи в консоль только первые 5 постов — их id и title.
*/

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(post => {
        post.slice(0, 5).forEach((post) => {
            console.log(`'ID: ${post.id} | ${post.title} `)
        });
    })
    .catch(console.error);




/*
🎯 ЗАДАНИЕ 4
Сделай запрос и получи список пользователей. 
Выведи в консоль только тех пользователей у которых в email есть .net.*/

// URL: 'https://jsonplaceholder.typicode.com/users'

fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => {
        users
            .filter((user) => {
                return user.email.includes('.net');
            })
            .forEach((user) => {
                console.log(`Имя: ${user.name} | Email: ${user.email}`);
            });

    })
    .catch(console.error);
// В консоли — только пользователи с .net в email:
// 'Имя: Ervin Howell | Email: Shanna@melissa.tv'
// ...




/*
🎯 ЗАДАНИЕ 1
Напиши async функцию которая получает пост с сервера и выводит его заголовок.*/
// URL: 'https://jsonplaceholder.typicode.com/posts/1'


async function getPost() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    console.log(data.title);
}

getPost();

// В консоли:
// 'sunt aut facere repellat provident...'



/*
🎯 ЗАДАНИЕ 2
Напиши async функцию с обработкой ошибок через try/catch. 
Получи пользователя и выведи его имя и email.*/

// URL: 'https://jsonplaceholder.typicode.com/users/1'

async function getUser() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const data = await response.json();
        console.log(`${data.name}, ${data.email}`);
    }
    catch (error) {
        console.error(error.message);
    }
}

getUser();

// В консоли:
// 'Имя: Leanne Graham'
// 'Email: Sincere@april.biz'



/*
🎯 ЗАДАНИЕ 3
Напиши async функцию которая получает список 
постов и выводит только те у которых userId === 1.*/

// URL: 'https://jsonplaceholder.typicode.com/posts'

async function getUserPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        if (data.userId === 1) {
            console.log(data);
        }
    }
    catch (error) {
        console.error(error);
    }
}

getUserPosts();

// В консоли — только посты первого пользователя:
// 'sunt aut facere...'
// 'qui est esse'
// ...






async function createPost(data) {

    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'post',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }

        // URL: 'https://jsonplaceholder.typicode.com/posts'
        // метод: POST
        // данные: { title: 'Мой пост', body: 'Текст поста', userId: 1 }
    });
    const result = await response.json();
    console.log(result);
}

const data = {
    title: 'Мой пост',
    bodyy: 'Текст поста',
    userId: 1
}


createPost(data);





/*
🎯 ЗАДАНИЕ 7
Напиши async функцию которая создаёт нового пользователя через POST запрос. 
Добавь try/catch для обработки ошибок.*/

async function createUser(data) {
    try {
        const respond = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'post',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        });
        const newPost = await respond.json();
        return newPost;


    } catch (error) {
        console.error(error);
    }


    // твой код здесь
    // URL: 'https://jsonplaceholder.typicode.com/users'
    // метод: POST
    // данные: { name: 'Василий', email: 'vasya@mail.ru', phone: '123-456' }
}

const data = {
    name: 'Василий',
    email: 'vasya@mail.ru',
    phone: '123-456',
}

createUser(data).then(console.log(data));

// В консоли:
// { id: 11, name: 'Василий', email: 'vasya@mail.ru', phone: '123-456' }



/*
🎯 ЗАДАНИЕ 8
Напиши async функцию которая удаляет пост по id и выводит сообщение об успехе.*/

async function deletePost(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'delete',
    });
    if (response.ok) {
        console.log(`Пост с id ${id} успешно удалён!`);
    } else {
        console.log(`Пост с id ${id} успешно НЕ удалён!`);
    }


    // URL: `https://jsonplaceholder.typicode.com/posts/${id}`
    // метод: DELETE
}

deletePost(1);

// В консоли:
// 'Пост с id 1 успешно удалён!'



/*
🎯 ЗАДАНИЕ 9
Напиши async функцию которая обновляет заголовок поста через PATCH запрос. 
Проверь response.ok и выведи соответствующее сообщение.*/

async function updatePostTitle(id, newTitle) {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'patch',
        body: JSON.stringify({
            title: `${newTitle}`
        }),
        headers: {
            'Content-Type': 'application/json',
        }
    })

    if (resp.ok) {
        console.log('Успешно');
    } else {
        console.log('Ошибка обновления!');
    }
    // твой код здесь
    // URL: `https://jsonplaceholder.typicode.com/posts/${id}`
    // метод: PATCH
    // данные: { title: newTitle }
}

updatePostTitle(1, 'Новый заголовок');

// В консоли если успех:
// 'Пост обновлён: Новый заголовок'

// В консоли если ошибка:
// 'Ошибка обновления!'



/*
🎯 ЗАДАНИЕ 1
Создай Promise который через 2 секунды возвращает строку 
'Привет от сервера!' и выведи её в консоль.*/

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Привет от сервера!');
    }, 2000);
})

promise.then(console.log);


/*
🎯 ЗАДАНИЕ 2
Создай Promise который через 1 секунду отклоняется с 
сообщением 'Ошибка соединения!'. Обработай ошибку через .catch(). */

const prom = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("'Ошибка соединения!'");
    }, 1000);
});

prom
    .then(console.log)
    .catch(console.error);




/*
🎯 ЗАДАНИЕ 3
Создай цепочку .then() которая последовательно преобразует строку.
*/

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('привет мир');
    }, 1000);
});

promise
    .then((value) => value.toUpperCase())
    .then((value) => `${value}!!!`)
    .then(console.log)
// 1. сделай все буквы заглавными → 'ПРИВЕТ МИР'
// 2. добавь '!!!' в конец → 'ПРИВЕТ МИР!!!'
// 3. выведи результат в консоль

// Через 1 секунду:
// 'ПРИВЕТ МИР!!!'





/*🎯 ЗАДАНИЕ 4
Создай две функции которые возвращают Promise. Соедини их в цепочку.*/


// Функция 1: через 1 секунду возвращает число 10
function getNumber() {
    return new Promise((resolve, rejest) => {
        setTimeout(() => {
            resolve(10);

        }, 1000);
    });
}

// Функция 2: принимает число, через 1 секунду возвращает его удвоенным
function doubleNumber(num) {
    return new Promise((resolve, rejest) => {
        setTimeout(() => {
            resolve(num * 2);
        }, 1000);
    });
}

getNumber()
    .then(doubleNumber)
    .then(console.log)
    .catch(console.error);

// Через 2 секунды в консоли:
// 20




/*
🎯 ЗАДАНИЕ 5
Напиши async функцию которая получает пользователя 
с сервера и выводит его имя, email и город.*/

async function getUser(id) {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await res.json();
        console.log(`Имя: ${data.name}, Email: ${data.email}, Город: ${data.address.city}`)
    }
    catch (error) {
        console.log(error);
    }
}

getUser(3);

// В консоли:
// 'Имя: Ervin Howell'
// 'Email: Shanna@melissa.tv'
// 'Город: Wisokyburgh'


async function getUser(id) {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await res.json();
        console.log(data)
    }

    catch (error) {
        console.log(error);
    }

}
getUser(2);





/*
🎯 ЗАДАНИЕ 9
Напиши async функцию которая удаляет пост и выводит сообщение. 
Добавь try/catch и проверку response.ok.
*/


async function deletePost(id) {
    try {
        const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'delete',
        });
        if (resp.ok) {
            console.log(`Пост ${id} успешно удалён!`)
        }
    }
    catch (error) {
        console.error(error.message);
    }
}

deletePost(5);

// В консоли если успех:
// 'Пост 5 успешно удалён!'

// В консоли если ошибка:
// 'Не удалось удалить пост!'


/*
🎯 ЗАДАНИЕ 10 — ФИНАЛЬНОЕ
Напиши async функцию которая объединяет всё что ты изучил:

Получи пользователя по id
Получи его посты
Создай новый пост для этого пользователя
Удали первый пост из его списка*/

async function userManager(userId) {
    try {
        const respUserId = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const dataUser = await respUserId.json();
        console.log(`Пользователь: ${dataUser.name}`)
        const respPostId = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        const dataPost = await respPostId.json();
        console.log(`Постов: ${dataPost.length}`);

        const dataNewPost = {
            title: 'Мой пост',
            body: 'текст',
            userId
        }
        const respNewPost = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
            method: 'post',
            body: JSON.stringify(dataNewPost),
            headers: { 'Content-type': 'application/json' },
        });
        const newPost = await respNewPost.json();
        console.log(`Создан новый пост: ${newPost.title}`);

        const firstPostId = dataPost[0].id;
        const respDelPost = await fetch(`https://jsonplaceholder.typicode.com/posts/${firstPostId}`, {
            method: 'delete',
        });
        console.log(`Удалён пост с id: ${firstPostId}`);
    } catch (error) {
        console.log(error.message);
    }
}

userManager(1);

// В консоли:
// 'Пользователь: Leanne Graham'
// 'Постов: 10'
// 'Создан новый пост: Мой пост'
// 'Удалён пост с id: 1'








/*
🎯 ЗАДАНИЕ 10 — ФИНАЛЬНОЕ
Напиши async функцию которая объединяет всё что ты изучил:

Получи пользователя по id
Получи его посты
Создай новый пост для этого пользователя
Удали первый пост из его списка*/



async function userManager(userId) {
    try {
        const respUserByID = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const dataUser = await respUserByID.json();
        console.log('Пользователь: ' + dataUser.name);

        const getpost = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        const dataPosts = await getpost.json();
        console.log('Всего постов: ' + dataPosts.length + ' штук');

        const dataNewPost = {
            name: "Vasya",
            email: "vasyangeEvent",
            id: 222,
            phone: +7999
        }
        const respNewPost = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
            method: 'post',
            body: JSON.stringify(dataNewPost),
            headers: { 'Content-type': 'application/json' }
        });
        const newPost = await respNewPost.json()

        console.log(`Создан новый пост: ${newPost.name}`);

        const firstPostId = dataPosts[0].id;
        const respDelPost = await fetch(`https://jsonplaceholder.typicode.com/posts/${firstPostId}`, {
            method: 'delete',
        });
        console.log(`Пост ${firstPostId} удален`);


    } catch (error) {
        console.error(error.message);
    }


}

userManager(1);


// В консоли:
// 'Пользователь: Leanne Graham'
// 'Постов: 10'
// 'Создан новый пост: Мой пост'
// 'Удалён пост с id: 1'


/*
🎯 ЗАДАНИЕ
Получи список пользователей и выведи только тех у кого в имени есть буква 'a'.*/

fetch('https://jsonplaceholder.typicode.com/users')

    .then(value => {
        return value.json();
    })

    .then(value => {
        value.forEach((value) => {
            if (value.name.includes('a'))
                console.log(value);
        })
    })

// В консоли:
// 'Leanne Graham'
// 'Ervin Howell'
// ...



/*
🎯 ЗАДАНИЕ 1
Создай класс Car с свойствами brand и speed. 
Добавь методы accelerate() (увеличивает скорость на 10) и brake() (уменьшает скорость на 10).
*/



class Car {
    constructor(brand, speed = 0) {
        this.brand = brand;
        this.speed = speed;
    }

    accelerate(num = 10) {
        this.speed += num;
    }

    brake(num = 10) {
        this.speed -= num;
    }
}

const car1 = new Car('Toyota', 100);
const car2 = new Car('BMW');

console.log(car1.brand); // 'Toyota'
console.log(car1.speed); // 100
console.log(car2.speed); // 0 ← по умолчанию

car1.accelerate();
console.log(car1.speed); // 110

car1.brake();
console.log(car1.speed); // 100





/*
🎯 ЗАДАНИЕ 2
Добавь в класс Car метод getInfo() который возвращает строку с информацией об автомобиле. 
И метод stop() который обнуляет скорость.
*/


class Car {
    constructor(brand, speed = 0) {
        this.brand = brand;
        this.speed = speed;
    }

    accelerate(num = 10) {
        this.speed += num;
    }

    brake(num = 10) {
        this.speed -= num;
    }

    getInfo() {
        return `Марка: ${this.brand} Скорость: ${this.speed}`;
    }

    stop() {
        this.speed = 0;
    }

}

const car1 = new Car('Toyota', 100);

console.log(car1.getInfo());
// 'Марка: Toyota, Скорость: 100'

car1.stop();
console.log(car1.speed); // 0





/*
🎯 ЗАДАНИЕ 3
Создай класс BankAccount с свойствами owner и balance. 
Добавь методы deposit(), withdraw() и getInfo().
*/



class BankAccount {
    constructor(owner, balance = 0) {
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
        } else {
            return 'Недостаточно денег.'
        }
    }

    getInfo() {
        return `Владелец: ${this.owner} На счету: ${this.balance}`;
    }

}

const account = new BankAccount('Василий', 1000);

account.deposit(500);
console.log(account.balance); // 1500

account.withdraw(200);
console.log(account.balance); // 1300

account.withdraw(99999);
// 'Недостаточно средств!'

console.log(account.getInfo());
// 'Владелец: Василий, Баланс: 1300'



/*
🎯 ЗАДАНИЕ 4
Создай класс TodoList с методами addTask(), removeTask() и getTasks().
*/


class TodoList {

    constructor() {
        this.tasks = [];
    }

    addTask(todo) {
        if (this.tasks.includes(todo)) {
            return 'Задача уже добавлена.';
        }
        this.tasks.push(todo);
    }

    removeTask(todo) {
        this.tasks = this.tasks.filter(task => task !== todo);
    }

    getTasks() {
        return `Текущие задачи: ${this.tasks}`;
    }
}



const todo = new TodoList();

todo.addTask('Купить хлеб');
todo.addTask('Позвонить маме');
todo.addTask('Купить хлеб'); // 'Задача уже существует!'

console.log(todo.getTasks()); // ['Купить хлеб', 'Позвонить маме']

todo.removeTask('Купить хлеб');
console.log(todo.getTasks()); // ['Позвонить маме']

todo.removeTask('Погулять'); // 'Задача не найдена!'
Пиши! 🚀


/*
🎯 ЗАДАНИЕ 5 — Наследование
Создай класс ElectricCar который наследует класс Car из задания 1-2. 
Добавь свойство batteryLevel и метод charge().
*/


class Car {
    constructor(brand, speed = 0) {
        this.brand = brand;
        this.speed = speed;
    }
    accelerate(num = 10) { this.speed += num; }
    brake(num = 10) { this.speed -= num; }
    getInfo() {
        return `Марка: ${this.brand}, Скорость: ${this.speed}`;
    }
}

class ElectricCar extends Car {
    constructor(brand, speed = 0, batteryLevel) {
        super(brand, speed);
        this.batteryLevel = batteryLevel;
    }

    charge(num) {
        if (this.batteryLevel >= 100) {
            console.log('Батарея зарядилась.');
            return;
        }
        this.batteryLevel += num;

        if (this.batteryLevel > 100) {
            this.batteryLevel = 100;
        }
    }

    getInfo() {
        return `${super.getInfo()}, Батарея: ${this.batteryLevel}%`
    }

}

const tesla = new ElectricCar('Tesla', 0, 80);

console.log(tesla.getInfo());
// 'Марка: Tesla, Скорость: 0, Батарея: 80%'

tesla.accelerate(50);
console.log(tesla.speed); // 50 ← унаследован от Car!

tesla.charge(20);
console.log(tesla.batteryLevel); // 100

tesla.charge(20);
// 'Батарея уже полная!'




/*
🎯 ЗАДАНИЕ 6
Создай класс Animal со свойствами name и sound. 
Добавь метод speak() который выводит 'Кот говорит: Мяу!'.
Потом создай дочерний класс Dog который наследует Animal. 
Переопредели метод speak() — собака должна добавлять 'и виляет хвостом!'.
Создай кота и собаку, вызови у каждого speak().
Пиши! 🚀
*/

class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }

    speak() {
        return `${this.name} Говорит: ${this.sound}`;
    }

}

class Dog extends Animal {
    constructor(name, sound) {
        super(name, sound);
    }

    speak() {
        return `${super.speak()} и виляет хвостом!`;
    }
}

const cat = new Animal('Кот', 'Мяу');
const dog = new Dog('Собака', 'Гав');




/*
🎯 ЗАДАНИЕ 7
Создай класс Counter со статическим свойством totalCounters 
которое считает сколько счётчиков было создано. 
Добавь статический метод getTotal() который возвращает это число.
Создай три счётчика и выведи общее количество.
Пиши! 🚀
*/

class Counter {

    static totalCounters = 0;

    constructor() {
        Counter.totalCounters++;
    }

    static getTotal() {
        return this.totalCounters;
    }
}

const count1 = new Counter();
const count2 = new Counter();
const count3 = new Counter();

console.log(Counter.getTotal());



/*
🎯 ЗАДАНИЕ 8
Создай класс User со статическим свойством которое считает количество созданных пользователей. 
Добавь статический метод который создаёт пользователя с правами администратора 
(role = 'admin') — без него обычный пользователь имеет role = 'user'. 
Добавь статический метод для получения общего количества пользователей.
Создай двух обычных пользователей и одного администратора через статический метод. 
Выведи информацию о каждом и общее количество пользователей.
Пиши! 🚀
*/


class User {
    static totalUsers = 0;

    constructor(userName, role = 'user') {
        this.userName = userName;
        this.role = role;
        User.totalUsers++;
    }

    static adminStatus(userName) {
        return new User(userName, 'admin');
    }

    static countUsers() {
        return this.totalUsers;
    }


}

const user1 = new User('Vasya');
const user2 = new User('Dima');
const user3 = User.adminStatus('Vika');

User.countUsers();



/*
🎯 ЗАДАНИЕ 9
Создай класс Player с приватным свойством #score. 
Добавь геттер для чтения счёта и сеттер с проверкой — 
счёт не может быть отрицательным и не может превышать 1000. 
Добавь методы increaseScore() и decreaseScore().
Создай игрока, попробуй установить счёт напрямую через 
сеттер с разными значениями — нормальным, отрицательным и больше 1000. 
Выведи счёт после каждого действия.
Пиши! 🚀
*/


class Player {
    #score;
    constructor(name, score = 0) {
        this.name = name;
        this.#score = score;
    }

    get score() {
        return this.#score;
    }

    set score(v) {
        if (v < 0 || v > 1000) {
            console.log('Не может быть отрицательным и больше 1000.');
            return;
        }
        this.#score = v;
    }

    increaseScore(num = 30) {
        return this.#score += num;
    }

    decreaseScore(num = 30) {
        return this.#score -= num;
    }

}

const player1 = new Player('Vasya');

const player2 = new Player('Dima');


player2.score = 333;
player2.score = -20;
player2.score = 1001;





/*
🎯 ЗАДАНИЕ 10
Создай класс BankAccount с приватным свойством #balance. 
Добавь геттер для чтения баланса и сеттер с проверками — 
баланс не может быть отрицательным и не может превышать 1000000. 
Добавь методы deposit() и withdraw() с проверками. 
Добавь статическое свойство которое считает количество созданных 
счётов и статический метод который возвращает это число.
Создай два счёта, попробуй разные операции включая некорректные значения. 
Выведи количество созданных счётов.
Пиши! 🚀
*/


class BankAccount {
    #balance;
    static createdAccounts = 0;
    constructor(name, balance = 0) {
        this.name = name;
        this.#balance = balance;
        BankAccount.createdAccounts++;
    }

    get balance() {
        return this.#balance;
    }

    set balance(amount) {
        console.log('Невозможно поменять подобным образом баланс');
        return;
    }

    deposit(amount) {
        if (amount < 0) {
            console.log('Вы не можете положить отрицательную сумму');
            return;
        }

        if (amount > 1000000) {
            console.log('Вы не можете положить сумму больше 1000000');
            return;
        }

        this.#balance += amount;
    }

    withdraw(amount) {
        if (amount >= this.#balance) {
            console.log('Недостаточно средств');
            return;
        }
        this.#balance -= amount;
    }

    static getTotal() {
        return BankAccount.createdAccounts;
    }
}

const user1 = new BankAccount('Va');
const user2 = new BankAccount('Hfdfbd', 400);
const user3 = new BankAccount('Hfg');

BankAccount.createdAccounts;




/*
🎯 ЗАДАНИЕ 11
Создай класс Library (библиотека) с приватным свойством #books (массив книг). 
Каждая книга — объект с полями title, author и available (доступна или нет).
Добавь методы:

addBook() — добавить книгу
removeBook() — удалить книгу по названию
borrowBook() — взять книгу (available = false), если недоступна — сообщение
returnBook() — вернуть книгу (available = true)
getAvailable() — получить список доступных книг

Добавь статическое свойство которое считает количество созданных библиотек.
Создай библиотеку, добавь три книги, возьми одну, попробуй взять её снова, 
верни её и выведи список доступных книг.
Пиши! 🚀
*/



class Library {

    #books = [];

    static totalLibs = 0;

    constructor(name) {
        this.name = name;
        Library.totalLibs++;
    }

    addBook(title, autor) {
        return this.#books.push({ title, autor, avaliable: true });
    }

    removeBook(nameOfBook) {
        this.#books = this.#books.filter(book => book.title !== nameOfBook);
    }

    borrowBook(nameOfBook) {
        const book = this.#books.find(book => book.title === nameOfBook);
        if (!book) {
            console.log('Книга не найдена!');
            return;
        }
        if (!book.avaliable) {
            console.log('Книга недоступна!');
            return;
        }
        book.avaliable = false;
    }

    returnBook(nameOfBook) {
        const book = this.#books.find(book => book.title === nameOfBook);
        book.avaliable = true;
    }

    getAvailable() {
        const book = this.#books.filter(book => book.avaliable === true);
        book.forEach(book => console.log(book.title));
    }

}

const lib1 = new Library('Моя любимая библиотека');
lib1.addBook('Как приручить дракона?', 'Вася Пупкин');
lib1.addBook('Как приручить mouse?', 'Вася Putin');


lib1.removeBook('Как приручить дракона?');

lib1

lib1.borrowBook('Как приручить mouse?');
lib1.borrowBook('Как приручить mouse?');
lib1.borrowBook('Как приручить дракона?');


lib1

lib1.addBook('Как приручить Козу. ?', 'Дима Иванов.  Пупкин');

lib1.getAvailable();




/*
🎯 ЗАДАНИЕ 12
Создай класс Shop (магазин) с приватным свойством #products (массив товаров). 
Каждый товар — объект с полями name, price и inStock (в наличии или нет).
Добавь статическое свойство которое считает количество созданных магазинов и 
статический метод который создаёт магазин с названием 'Супермаркет' по умолчанию.
Добавь методы:

addProduct() — добавить товар
removeProduct() — удалить товар по названию
buyProduct() — купить товар (inStock = false), если нет в наличии — сообщение
restockProduct() — пополнить товар (inStock = true)
getAvailable() — получить список товаров в наличии с ценами

Создай дочерний класс OnlineShop который наследует Shop. 
Добавь свойство deliveryDays и переопредели метод getAvailable() — 
выводи товары с ценой и сроком доставки.
Создай обычный магазин и онлайн магазин через статический метод. 
Добавь товары, купи один, попробуй купить его снова, пополни и выведи 
список доступных товаров.
Пиши! 🚀
*/


class Shop {
    #products = [];
    static totalShops = 0;

    constructor(name) {
        this.name = name;
    }

    getProducts() {
        return this.#products;
    }

    addProduct(name, price, inStock = true) {
        this.#products.push({ name, price, inStock });
    }

    removeProduct(prodName) {
        this.#products = this.#products.filter(good => good.name !== prodName);
    }

    buyProduct(prodName) {
        const prod = this.#products.find(good => good.name === prodName);

        if (!prod) {
            console.log('Товар не найден!');
            return;
        }

        prod.inStock = false; //Почему тут сравнение, а не присваивание? 
    }

    restockProduct(prodName) {
        const prod = this.#products.find(good => good.name === prodName);
        if (prod) {
            console.log('Товар пополнен!');
            prod.inStock = true; //Почему тут сравнение, а не присваивание? 
            return;
        }
        console.log('Товар не найден');

    }

    getAvailable() {
        const prod = this.#products.filter(good => good.inStock === true);
        prod.forEach(good => console.log(good.name));
    }

}


class OnlineShop extends Shop {
    constructor(name) {
        super(name);
    }

    deliveryDays() {
        const prod = this.getProducts()
        prod
            .filter(good => good.inStock === true)
            .forEach(good => console.log(`Товар: ${good.name}, Цена: ${good.price}, Наличие: ${good.inStock ? 'Ecть' : 'Нет!'}`));
    }

    static createOnlineShop(name) {
        return new OnlineShop('MyOnlineShop', 333)
    }


}


const msh = new Shop('Fch');
msh.addProduct('egg', 232);
msh.addProduct('egfsg', 3232);
msh.addProduct('eg', 2);
msh.addProduct('e', 2);

msh.buyProduct('eg');

msh.restockProduct('eg');

msh

const osh = new OnlineShop('fldk', 333);
osh.addProduct('eggggg', 25432);
osh.addProduct('eghnmgfsg', 354232);
osh.addProduct('egmg', 24);

const statShop = OnlineShop.createOnlineShop();


osh.deliveryDays();




/*
🎯 ЗАДАНИЕ 13
Создай класс Vehicle (транспорт) с приватным свойством #fuel (топливо). 
Добавь геттер и сеттер для топлива — топливо не может быть меньше 0 и больше 100.
Добавь методы drive() (уменьшает топливо на 10) и refuel() (увеличивает топливо на 20).
Создай дочерний класс Truck который наследует Vehicle. 
Добавь свойство cargoWeight и переопредели метод drive() — грузовик тратит топливо 
на 20 за поездку (потому что тяжёлый).
Добавь статическое свойство которое считает количество созданных транспортных средств 
и статический метод который создаёт грузовик с полным баком.
Создай легковой автомобиль и грузовик. Покатайся на каждом несколько раз, заправь и выведи информацию.
Пиши! 🚀
*/

class Vehicle {
    #fuel;

    static totalCars = 0;
    constructor(name, fuel = 0) {
        this.name = name;
        this.#fuel = fuel;
        Vehicle.totalCars++;
    }

    get fuel() {
        return this.#fuel;
    }

    set fuel(gas) {
        if (gas > 100 || gas < 0) {
            console.log('Топливо не может быть больше 100 и меньше нуля.!');
            return;
        }
        this.#fuel = gas;
    }

    drive(num = 10) {
        if (this.#fuel - num < 0) {
            console.log('Топливо не может превышать или принижать чувства мои. Короче, вот так');
            return;
        }
        return this.#fuel -= num;
    }


    refuel(num = 10) {
        if (this.#fuel + num > 100) {
            console.log('Топливо не может превышать или принижать чувства мои. Короче, вот так');
            return;
        }
        return this.#fuel += num;
    }
}

class Truck extends Vehicle {
    constructor(name, fuel) {
        super(name, fuel);
    }

    drive(num = 20) {
        if (this.fuel - num < 0) {
            console.log('Топливо не может превышать или принижать чувства мои. Короче, вот так');
            return;
        }
        return this.fuel -= num;
    }


    refuel(num = 20) {
        if (this.fuel + num > 100) {
            console.log('Топливо не может превышать или принижать чувства мои. Короче, вот так');
            return;
        }
        return this.fuel += num;
    }

    static fullFuelTruck(name) {
        return new Truck(name, 100);
    }

    getInfo() {
        return console.log(`Машина: ${this.name}, Топливо:${this.fuel}`);
    }
}

const c1 = new Vehicle('g', 20);
const c2 = new Vehicle('q', 10);
const c3 = new Vehicle('w');
const t1 = new Truck('fdkj', 32);
const t2 = new Truck('ew', 2);
const t3 = new Truck('f324dkj', 32);
Vehicle.totalCars;


c3.fuel = 10;
c3.fuel = 130;
c3.fuel = -130;
c3.drive();
c3.refuel();

Truck.fullFuelTruck('gogo');




/////////////////////////////////////////////////
Вот план на 15 заданий — от простого к сложному:
1 - 3:   Простые классы(свойства + методы)
4 - 6: Классы + наследование
7 - 9: Классы + DOM(найти элемент, изменить текст)
10 - 12: Классы + DOM + события(кнопки)
13 - 15: Классы + DOM + динамический рендер(создавать карточки)


/*
🎯 ЗАДАНИЕ 14
Создай класс Lamp (лампочка) со свойством isOn (включена или нет, по умолчанию false). 
Добавь методы turnOn(), turnOff() и toggle() (переключатель). 
Добавь метод getStatus() который возвращает строку 'Лампочка включена' 
или 'Лампочка выключена'.
Создай три лампочки, поиграй с методами и выведи статус каждой.
Пиши! 🚀
*/

class Lamp {
    constructor(isOn = false) {
        this.isOn = isOn;
    }

    turnOn() {
        return this.isOn = true;
    }

    turnOff() {
        return this.isOn = false;
    }

    toggle() {
        if (this.isOn === true) {
            return this.isOn = false;
        } else if (this.isOn === false) {
            return this.isOn = true;
        }
    }

    getStatus() {
        if (this.isOn === true) {
            console.log('Лампочка включена');
            return;
        } else {
            console.log('Лампочка выключена');
        }
    }
}

const q = new Lamp();
q.turnOn();
q.turnOff();
q.toggle();
q.getStatus();


/*
🎯 ЗАДАНИЕ 15
Создай класс TrafficLight (светофор). 
У него есть свойство color (цвет) — по умолчанию 'red'. 
Добавь метод next() который переключает цвета по кругу: red → green → yellow → red. 
Добавь метод getStatus() который возвращает что означает цвет:

red → 'Стоп!'
green → 'Можно ехать!'
yellow → 'Приготовься!'

Создай светофор и переключи его несколько раз.
*/

class TrafficLight {
    constructor(color = 'red') {
        this.color = color;
    }
    next() {
        if (this.color === 'red') {
            return this.color = 'green';
        } else if (this.color === 'green') {
            return this.color = 'yellow';
        } else if (this.color === 'yellow') {
            return this.color = 'red';
        }
    }

    getStatus() {
        if (this.color === 'red') {
            console.log('STAP');
        } else if (this.color === 'green') {
            console.log('GO');
        } else if (this.color === 'yellow') {
            console.log('Be ready');
        }

    }

}

const e = new TrafficLight();
e.next();
e.getStatus();



/*
🎯 ЗАДАНИЕ 16
Создай класс Stack (стек) — помнишь из теории структур данных? 
Это коллекция где последний добавленный элемент выходит первым (LIFO).
Добавь методы:

push(item) — добавить элемент
pop() — удалить и вернуть последний элемент. Если стек пустой — сообщение 'Стек пуст!'
peek() — посмотреть последний элемент не удаляя его
isEmpty() — возвращает true если стек пустой
getSize() — возвращает количество элементов

Создай стек, добавь несколько элементов, вызови разные методы.
*/


class Stack {

    stack = [];

    push(item) {
        return this.stack.push(item);
    }

    pop() {
        if (this.stack.length === 0) {
            console.log('Стек пустой!');
            return;
        }
        return this.stack.pop();
    }

    isEmpty() {
        if (this.stack.length === 0) {
            return true;
        } else {
            return false;

        }
    }

    peek() {
        return this.stack[this.stack.length - 1];
    }

    getSize() {
        return this.stack.length;
    }
}


const q = new Stack();

q.push('yyy');
q.push('yyeey');
q.push('yy32y');

q.stack;

q.pop();
q.stack.pop();





const stack = [33, 344, 443];

let q = 0;
for (let i = 0; i < stack.length; i++) {
    q += i;
}
return q;



/*
Создай класс Counter с методами increment(), decrement() и getCount().
В HTML уже есть:
html<button id="btn-minus">−</button>
<span id="count">0</span>
<button id="btn-plus">+</button>
Напиши JS который:

Создаёт объект Counter
При клике на + — увеличивает счётчик и обновляет <span>
При клике на − — уменьшает счётчик и обновляет <span>

Пиши! 🚀
*/

const minus = document.querySelector('#btn-minus');
const plus = document.querySelector('#btn-plus');
const num = document.querySelector('#count');

class Counter {
    counter = 0;
    increment() {
        this.counter++;
    }
    decrement() {
        this.counter--;
    }
    getCount() {
        return this.counter;
    }
}

const counter = new Counter();

minus.addEventListener('click', handleMinus);
plus.addEventListener('click', handlePlus);


function checkCounter() {
    console.log('dsd')
    num.innerText = counter.getCount();

}

function handleMinus() {
    console.log('dddsad');
    counter.decrement();
    checkCounter();
    return;
}

function handlePlus() {
    console.log('ddad');
    counter.increment();
    checkCounter();
    return;
}

const q = new Counter();

q.increment();
q.increment();
q.increment();

q.getCount();

const e = new Counter();

e.increment();
e.getCount();



/*
🎯 ЗАДАНИЕ 18
Создай класс Lamp (как в задании 14) с методом toggle().
В HTML уже есть:
html<button id="lamp-btn">Переключить лампочку</button>
<div id="lamp-display">Лампочка выключена</div>
Напиши JS который:

Создаёт объект Lamp
При клике на кнопку — переключает лампочку
Обновляет текст в #lamp-display
Если лампочка включена — добавляет класс 'on' к #lamp-display, 
если выключена — убирает
*/

const btn = document.getElementById('lamp-btn');
const lampText = document.getElementById('lamp-display');

class Lamp {
    constructor(isOn = false) {
        this.isOn = isOn;
    }

    toggle() {
        return this.isOn = !this.isOn;
    }
}

const lamp = new Lamp();

btn.addEventListener('click', handleToggle);

function handleToggle() {
    console.log('fdfd');
    lamp.toggle();
    switchText();
}

function switchText() {
    if (lampText.innerText === 'Лампочка выключена') {
        lampText.classList.add('on');
        return lampText.innerText = 'Лампочка включена';
    } else if (lampText.innerText === 'Лампочка включена') {
        lampText.classList.remove('on');
        return lampText.innerText = 'Лампочка выключена';
    }
}

const q = new Lamp();

q.toggle();



/*
🎯 ЗАДАНИЕ 19
Создай класс LikeButton со свойством likes 
(количество лайков, по умолчанию 0) и isLiked 
(лайкнул пользователь или нет, по умолчанию false). 
Добавь метод toggle() — если не лайкнуто, 
увеличивает likes на 1 и ставит isLiked = true. 
Если уже лайкнуто — уменьшает likes на 1 и ставит isLiked = false.
В HTML уже есть:
html<button id="like-btn">🤍 Лайк</button>
<span id="like-count">0</span>
Напиши JS который:

Создаёт объект LikeButton
При клике — переключает лайк
Обновляет количество в #like-count
Меняет текст кнопки на '❤️ Лайк' если лайкнуто, на '🤍 Лайк' если нет

Пиши! 🚀
*/



const btn = document.getElementById('like-btn');
const likeCounter = document.getElementById('like-count');

class LikeButton {
    likes = 0;
    constructor(isLiked = false) {
        this.isLiked = isLiked;
    }

    toggle() {
        if (this.isLiked === false) {
            this.likes++;
            this.isLiked = true;
        } else if (this.isLiked === true) {
            this.likes--;
            this.isLiked = false;
        }
    }

    getLikes() {
        return this.likes;
    }
}

const like = new LikeButton();

btn.addEventListener('click', handleClick);

function handleClick() {
    console.log('sds');
    like.toggle();

    if (isLiked) {
        return btn.innerText = '❤️ Лайк';
    } else {
        return btn.innerText = '🤍 Лайк';
    }
    likeText();
}


function likeText() {
    return likeCounter.innerText = like.getLikes();
}



/*
🎯 ЗАДАНИЕ 20
Создай класс ProgressBar со свойством progress (от 0 до 100, по умолчанию 0). 
Добавь методы increase(amount) и decrease(amount) — 
значение не может выйти за границы 0-100.
В HTML уже есть:
html<button id="btn-decrease">−10%</button>
<div id="progress-track">
    <div id="progress-bar" style="width: 0%"></div>
</div>
<span id="progress-text">0%</span>
<button id="btn-increase">+10%</button>
Напиши JS который:

Создаёт объект ProgressBar
При клике на +10% — увеличивает прогресс на 10
При клике на −10% — уменьшает прогресс на 10
Обновляет ширину #progress-bar (через style.width)
Обновляет текст #progress-text
*/





const btnDec = document.getElementById('btn-decrease');
const btnInc = document.getElementById('btn-increase');
const progText = document.getElementById('progress-text');
const progBar = document.getElementById('progress-bar');

class ProgressBar {
    constructor(progress = 0) {
        this.progress = progress;
    }

    increase(amount = 10) {
        if (this.progress >= 100) {
            console.log('Nooooo');
        } else {
            this.progress += amount;
        }
    }

    decrease(amount = 10) {
        if (this.progress <= 0) {
            console.log('Nooxxxxxooo');
        } else {
            this.progress -= amount;
        }
    }

}

const q = new ProgressBar();

btnDec.addEventListener('click', handleDec);
btnInc.addEventListener('click', handleInc);

function handleInc(amount = 10) {
    q.increase();
    changeProgText();
    progBar.style.width = `${q.progress}%`;

}

function handleDec() {
    q.decrease();
    changeProgText();
    progBar.style.width = `${q.progress}%`;
}


function changeProgText() {
    progText.innerText = q.progress;
}

// Спросить, а для чего он нужен и почему с ним не получается?
 get progress() {
    return this.progress;
}

/* set progress(amount) {
 if (amount < 0 || amount > 100) {
     return console.log('fuck you');
 } else {
     return this.progress;
 }
}





/*
🎯 ЗАДАНИЕ 21
Создай класс Modal (модальное окно) со свойством isOpen (по умолчанию false). 
Используй приватное свойство #isOpen с геттером/сеттером — помнишь урок из предыдущего задания!
Добавь методы open() и close().
В HTML уже есть:
html<button id="open-btn">Открыть окно</button>
<div id="modal" class="hidden">
 <p>Это модальное окно!</p>
 <button id="close-btn">Закрыть</button>
</div>
Напиши JS который:

Создаёт объект Modal
При клике на #open-btn — открывает модалку, убирает класс 'hidden' с #modal
При клике на #close-btn — закрывает модалку, добавляет класс 'hidden'
*/



class Modal {
    #isOpen;
    constructor(isOpen = false) {
        this.#isOpen = isOpen;
    }

    get isOpen() {
        return this.#isOpen;
    }

    open() {
        this.#isOpen = true;
    }

    close() {
        this.#isOpen = false;
    }
}

const modal = new Modal();

modal;

modal.open();

modal.close();




/*
🎯 ЗАДАНИЕ 9 — закрепление
Создай класс Wallet (кошелёк) со свойством balance (по умолчанию 0). 
Добавь методы add(amount), subtract(amount) (не уходит в минус — если недостаточно средств, 
сообщение 'Недостаточно денег!') и getBalance().
Создай кошелёк, положи деньги, попробуй снять больше чем есть, потом сними нормальную сумму. 
Выведи баланс.
*/


class Wallet {
    constructor(balance = 0) {
        this.balance = balance;
    }

    add(amount) {
        if (amount < 0) {
            console.log('Нельзя добавить отрицательную сумму!');
            return;
        }
        return this.balance += amount;
    }

    subtract(amount) {
        if (amount > this.balance) {
            console.log('Недостаточно денег.');
            return;
        }
        return this.balance -= amount;
    }

    getBalance() {
        return this.balance;
    }
}


const q = new Wallet();

q.add(300);
q.add(-4);
q;
q.subtract(459);
q.subtract(200);

q.getBalance();




/*
🎯 ЗАДАНИЕ 10 — закрепление
Создай класс Tooltip (всплывающая подсказка) со свойством isVisible (по умолчанию false).
В HTML уже есть:
html<button id="info-btn">ⓘ Информация</button>
<div id="tooltip" class="hidden">Это полезная подсказка!</div>
Напиши JS который:

Создаёт объект Tooltip с методами show() и hide()
При наведении мыши (mouseenter) на кнопку — показывает подсказку (убирает класс 'hidden')
При уходе мыши (mouseleave) — скрывает подсказку (добавляет класс 'hidden')
*/


const btn = document.getElementById('info-btn');
const tt = document.getElementById('tooltip');

class Tooltip {
    constructor(isVisible = false) {
        this.isVisible = isVisible;
    }

    show() {
        this.isVisible = true;
    }

    hide() {
        this.isVisible = false;
    }
}

const toolTip = new Tooltip();

btn.addEventListener('mouseenter', handleEnterBtn);
btn.addEventListener('mouseleave', handleLeaveBtn);


function handleEnterBtn() {
    toolTip.show();
    tt.classList.remove('hidden');
}

function handleLeaveBtn() {
    toolTip.hide();
    tt.classList.add('hidden');
}




/*
🎯 ЗАДАНИЕ 11 — Наследование + DOM
Создай класс Shape (фигура) со свойством color. 
Добавь метод getInfo() который возвращает 'Фигура цвета: {color}'.
Создай дочерний класс Circle который наследует Shape. 
Добавь свойство radius. Переопредели getInfo() — добавь информацию о радиусе.

HTML
<button id="create-circle-btn">Создать круг</button>
<div id="shapes-output"></div>

CSS
#shapes-output div {
    padding: 8px;
    margin: 4px 0;
    background: #f0f0f0;
    border-radius: 4px;
}

Напиши JS который при клике на кнопку:

Создаёт объект Circle с цветом 'red' и радиусом 10
Создаёт новый <div> через createElement
Вставляет туда текст из getInfo()
Добавляет <div> в #shapes-output
*/


const btn = document.getElementById('create-circle-btn');
const newShape = document.getElementById('shapes-output');


class Shape {
    constructor(color = 'red') {
        this.color = color;
    }

    getInfo() {
        return (`Фиура цвета: ${this.color}`);
    }

}

class Circle extends Shape {
    constructor(color, radius = 10) {
        super(color);
        this.radius = radius;
    }

    getInfo() {
        return (`Фиура цвета: ${this.color}, и радиуса: ${this.radius}`);
    }

}

btn.addEventListener('click', handleBtn);

function handleBtn() {
    const newCircle = new Circle();
    const newElement = document.createElement('div');
    newElement.innerText = newCircle.getInfo();
    newShape.appendChild(newElement);
}




/*
🎯 ЗАДАНИЕ 12 — Массив объектов + рендер списка
Создай класс Task со свойствами title и isDone (по умолчанию false).

HTML:
<ul id="tasks-list"></ul>

CSS:
#tasks-list li {
    padding: 8px;
    margin: 4px 0;
    background: #f0f0f0;
    border-radius: 4px;
    list-style: none;
}

Напиши JS который:

Создаёт массив из трёх объектов Task: 'Купить хлеб', 'Позвонить маме', 'Погулять'
Пишет функцию renderTasks() которая:

очищает #tasks-list (через innerHTML = '')
перебирает массив через forEach
для каждой задачи создаёт <li> с текстом названия
добавляет <li> в #tasks-list


Вызывает renderTasks()
*/


const list = document.getElementById('tasks-list');


class Task {

    task = [];

    constructor(name = 'Tasker') {
        this.name = name
    }

    pushTask(title, isDone = false) {
        this.task.push({ title, isDone });
    }
}

const tasker = new Task();

function renderTasks() {
    list.innerHTML = "";

    tasker.task.forEach(element => {
        const li = document.createElement('li');
        li.innerText = element.title;
        list.appendChild(li);
    });
}

tasker.pushTask('sds');

tasker.pushTask('aasds');

tasker.pushTask('Helaaaaaaaaaaaaaaalo');


renderTasks();





/*
🎯 ЗАДАНИЕ 12.1
Архитектура для этого задания:

Класс Task описывает одну задачу — у него есть только constructor(title, isDone = false), 
никаких массивов внутри и никаких методов добавления.
Массив задач объявляется снаружи класса, обычной переменной: const tasks = [...], 
и сразу содержит три объекта new Task(...).

Напиши:

Класс Task с конструктором (title, isDone)
Массив tasks с тремя объектами: 'Купить хлеб', 'Позвонить маме', 'Погулять'
Функцию renderTasks() которая очищает #tasks-list и 
через forEach по массиву tasks создаёт <li> с текстом task.title для каждого, добавляя их в список
Вызов renderTasks()
*/


const list = document.getElementById('tasks-list');

class Task {
    constructor(title, isDone = false) {
        this.title = title;
        this.isDone = isDone;
    }
}

const task = [new Task('купить хлеб'), new Task('Позвонить маме.'), new Task('Погулять.')];

function renderTask() {
    list.innerText = '';
    task.forEach(el => {
        const li = document.createElement('li');
        li.innerText = el.title;
        list.appendChild(li);
    });
}

renderTask();



/*
ЗАДАНИЕ 13 — Добавление элемента в массив + перерисовка
HTML:
<input type="text" id="task-input" placeholder="Новая задача">
<button id="add-task-btn">Добавить задачу</button>
<ul id="tasks-list"></ul>
CSS:
#tasks-list li {
    padding: 8px;
    margin: 4px 0;
    background: #f0f0f0;
    border-radius: 4px;
    list-style: none;
}
Используй класс Task и массив tasks из задания 12.1 
(можешь оставить там же три стартовые задачи, либо начать с пустого массива — на твой выбор).
Напиши JS который:

При клике на кнопку — берёт текст из #task-input
Если текст не пустой — создаёт new Task(текст) и добавляет его в массив tasks (через push)
Очищает #task-input
Вызывает renderTasks() чтобы список обновился
Если текст пустой — alert('Введите задачу!')
*/


const inp = document.getElementById('task-input');
const btn = document.getElementById('add-task-btn');
const list = document.getElementById('tasks-list');



class Task {
    constructor(title, isDone = false) {
        this.title = title;
        this.isDone = isDone;
    }
}

const tasker = [];

btn.addEventListener('click', handleBtn);

function handleBtn() {
    if (inp.value === '') {
        alert('sdsdddqqq');
    } else {
        createArr(inp.value);
    }
}

function createArr(title) {
    tasker.push(new Task(title));
    console.log('cre')
    renderTask();
}

function renderTask() {
    inp.value = '';
    console.log('renderTask')
    list.innerText = '';
    tasker.forEach(el => {
        const li = document.createElement('li');
        li.innerText = el.title;
        list.appendChild(li);
    });
}




/*
🎯 ЗАДАНИЕ 14 — Удаление элемента из массива + перерисовка
HTML (дополни предыдущий, добавь кнопку удаления внутри каждого <li>):
html
<input type="text" id="task-input" placeholder="Новая задача">
<button id="add-task-btn">Добавить задачу</button>
<ul id="tasks-list"></ul>
CSS:
#tasks-list li {
    padding: 8px;
    margin: 4px 0;
    background: #f0f0f0;
    border-radius: 4px;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
#tasks-list button {
    cursor: pointer;
}
Используй тот же класс Task и массив tasker из задания 13.
Напиши JS который:

В renderTask() — для каждой задачи создаёт не только <li> с текстом, 
но и кнопку <button> с текстом 'Удалить' внутри этого <li> (через appendChild)
На каждую кнопку удаления повешен addEventListener('click', ...), который при 
клике удаляет именно эту задачу из массива tasker (через filter, по совпадению 
объекта или индекса — подумай как) и вызывает renderTask() снова

💡 Подсказка по архитектуре: внутри forEach((el, index) => {...}) 
у тебя есть доступ к index — можно использовать его, чтобы отличить, 
какую именно задачу удалять.
*/


/*
Используй класс Task и массив tasks из задания 12.1 
(можешь оставить там же три стартовые задачи, либо начать с пустого массива — на твой выбор).
Напиши JS который:

При клике на кнопку — берёт текст из #task-input
Если текст не пустой — создаёт new Task(текст) и добавляет его в массив tasks (через push)
Очищает #task-input
Вызывает renderTasks() чтобы список обновился
Если текст пустой — alert('Введите задачу!')
*/


const inp = document.getElementById('task-input');
const btn = document.getElementById('add-task-btn');
const list = document.getElementById('tasks-list');

class Task {
    constructor(title, isDone = false) {
        this.title = title;
        this.isDone = isDone;
    }
}

let tasker = [];

btn.addEventListener('click', handleBtn)

function pushElement(title) {
    tasker.push(new Task(title));
}

function handleBtn() {
    console.log('sdds');
    if (inp.value === '') {
        alert('sdsdssd qqq');
    } else {
        pushElement(inp.value);
    }
    renderTask();
}

function renderTask() {
    inp.value = '';
    list.innerHTML = '';
    tasker.forEach((elka, index) => {

        const li = document.createElement('li');
        const btnDel = document.createElement('button');

        li.innerText = elka.title;
        btnDel.innerText = 'X';

        list.appendChild(li);
        li.appendChild(btnDel);

        btnDel.addEventListener('click', () => handlebtnDel(index));
    });
}


function handlebtnDel(index) {
    tasker = tasker.filter((task, i) => i !== index);
    renderTask();
    return;
}






/*
🎯 ЗАДАНИЕ 15 ФИНАЛОЧКА
Архитектура (пиши с нуля, используя весь опыт из заданий 1-14):
1. Классы:

Vehicle — базовый класс. Приватное свойство #fuel. Геттер fuel для чтения. 
Сеттер fuel с проверкой границ 0-100 (если значение выходит за границы — 
выводи сообщение и не меняй значение). Статическое свойство, считающее общее 
количество созданных машин. Конструктор принимает name и стартовое значение топлива. 
Методы drive(amount = 10) (уменьшает топливо, не уходя в минус — 
если топлива не хватает, сообщение) и refuel(amount = 20) (увеличивает топливо, 
не превышая 100).
Truck extends Vehicle — наследует всё от Vehicle через super(). 
Переопредели drive() так, чтобы грузовик тратил топливо быстрее 
(например, amount = 20 по умолчанию вместо 10).

2. Массив снаружи класса:

const fleet = [] — хранит объекты Vehicle/Truck, как в задании 12.1/13/14.

3. Функции (по аналогии с todo-листом из заданий 13-14):

addVehicle() — обработчик кнопки: читает значения из трёх полей формы 
(car-name, car-type, car-fuel), создаёт new Vehicle(...) или new Truck(...) 
в зависимости от выбранного типа, пушит в fleet, очищает поля формы, 
вызывает перерисовку
renderFleet() — очищает #fleet-list, перебирает fleet через 
forEach((vehicle, index) => ...), для каждой машины создаёт <li> с названием, 
типом, текстом уровня топлива и полоской прогресса (div.fuel-track → div.fuel-bar 
с style.width), плюс три кнопки: "Поехать", "Заправить", "Удалить" — у каждой 
свой addEventListener с передачей index через стрелочную обёртку (как в задании 14!)
updateStats() — обновляет три <span> в блоке статистики: используй статическое 
свойство класса для общего числа машин, и подсчитай легковые/грузовики через 
fleet.filter(...) по тому, является машина экземпляром Truck или нет 
(подсказка: есть оператор instanceof, который мы разбирали в теории — 
vehicle instanceof Truck)

4. Обработчики кнопок внутри renderFleet():

"Поехать" → вызывает vehicle.drive(), потом перерисовку
"Заправить" → вызывает vehicle.refuel(), потом перерисовку
"Удалить" → убирает эту машину из fleet через filter по индексу 
(как в задании 14!), потом перерисовку
*/



const form = document.getElementById('form');
const inpCar = document.getElementById('car-name');
const selector = document.getElementById('car-type');
const inpFuel = document.getElementById('car-fuel');
const btn = document.getElementById('add-car-btn');

const list = document.getElementById('fleet-list');

const totalCount = document.getElementById('total-count');
const carCount = document.getElementById('car-count');
const truckCount = document.getElementById('truck-count');


class Vehicle {
    #fuel;
    static totalCars = 0;
    static totalAllVehicle = 0;
    constructor(name, fuel = 0) {
        this.name = name;
        this.#fuel = fuel;
        if (new.target === Vehicle) {
            Vehicle.totalCars++;
        }
        Vehicle.totalAllVehicle++;
    }

    get fuel() {
        return this.#fuel;
    }

    set fuel(gas) {
        if (gas < 0 || gas > 100) {
            alert('fuel');
            return;
        } else {
            return this.#fuel = gas;
        }
    }


    drive(amount = 10) {
        if ((this.#fuel - amount) < 0) {
            alert('drive');
            return;
        } else {
            return this.#fuel -= amount;
        }
    }

    refuel(amount = 20) {
        if ((this.#fuel + amount) > 100) {
            alert('refuel');
            return;
        } else {
            return this.#fuel += amount;
        }
    }

    static getTotalCars() {
        return this.totalCars;
    }
}

class Truck extends Vehicle {
    static totalTrucks = 0;
    constructor(name, fuel = 0) {
        super(name, fuel);
        Truck.totalTrucks++;
    }

    drive(amount = 20) {
        return this.fuel -= amount;
    }

    static getTotalTrucks() {
        return this.totalTrucks;
    }

    static getAllTotals() {
        return this.totalAllVehicle;
    }
}

let fleet = [];

function handlePush(name, fuel) {
    if (selector.value === 'car') {
        fleet.push(new Vehicle(name, fuel));
    } else {
        fleet.push(new Truck(name, fuel));
    }
}

form.addEventListener('submit', addForm);

function addForm(evt) {
    evt.preventDefault();
    handlePush(inpCar.value, Number(inpFuel.value));
    renderFleet();
    vehTotals()
}

function renderFleet() {
    list.innerText = '';
    fleet.forEach((el, index) => {
        const li = document.createElement('li');
        li.innerText = el.name;
        list.prepend(li);
        liCard(li, el);
    });
}

function liCard(li, el) {

    const carType = document.createElement('div');
    if (el instanceof Vehicle) {
        carType.innerText = 'Легковая';
    }
    if ((el instanceof Truck)) {
        carType.innerText = 'Грузовая';
    }
    li.append(carType);

    const persentOfFuel = document.createElement('span');
    persentOfFuel.innerHTML = `${Number(el.fuel)}%`;
    li.append(persentOfFuel);


    const progBar = document.createElement('div');
    progBar.classList.add('progress-bar');
    progBar.style.width = `${Number(el.fuel)}%`;
    li.append(progBar);

    liButtons(li, el);

    inpFuel.value = '';
    inpCar.value = '';
}

function liButtons(li, el) {
    const driveBtn = document.createElement('button');
    driveBtn.innerText = 'Поехать!';
    li.append(driveBtn);

    const refuelBtn = document.createElement('button');
    refuelBtn.innerText = 'Заправиться!';
    li.append(refuelBtn);

    const liDeleteBtn = document.createElement('button');
    liDeleteBtn.innerText = 'X';
    li.append(liDeleteBtn);

    driveBtn.addEventListener('click', () => handleDriveBtn(el));
    refuelBtn.addEventListener('click', () => handleRefuelBtn(el));
    liDeleteBtn.addEventListener('click', () => handleLiDeleteBtn(el));
}

function handleDriveBtn(el) {
    el.drive();
    renderFleet();
}

function handleRefuelBtn(el) {
    el.refuel();
    renderFleet();
}

function handleLiDeleteBtn(el) {
    fleet = fleet.filter(item => item !== el);
    renderFleet();
}

function vehTotals() {
    const classTotalVeh = Vehicle.getTotalCars();
    console.log(Vehicle.getTotalCars())
    carCount.innerText = classTotalVeh;

    const classTotalCars = Truck.getTotalTrucks();
    truckCount.innerText = classTotalCars;

    const classTotalTrucks = Truck.getAllTotals();
    totalCount.innerText = classTotalTrucks;
}





/*
Задание 1 — localStorage: записать и прочитать строку
Открой консоль разработчика прямо в браузере (можно на любой открытой странице, даже на этой).
Напиши в консоли код, который:

Сохраняет в localStorage под ключом 'myName' любую строку (например, своё имя)
Сразу после этого читает значение по этому же ключу обратно и выводит его в консоль через console.log

Подсказка по методам, которые тебе понадобятся (без точного синтаксиса): у объекта localStorage 
есть метод "положить значение по ключу" и метод "получить значение по ключу" — оба принимают строку-ключ.
Когда сделаешь — попробуй перезагрузить страницу и повторить только вторую часть (чтение) — 
проверь, осталось ли значение.
*/


localStorage.setItem('myName', 'Alex');
const q = localStorage.getItem('myName');

console.log(q);



/*
Задание 2 — localStorage: сохранить и восстановить массив
Это тоже делаем прямо в консоли (на твоей локальной странице, где всё работает).
Смысл в том, что localStorage умеет хранить только строки — ни массивы, 
ни объекты напрямую туда не положить. Поэтому нужен "переводчик" в обе стороны.
Напиши код, который:

Создаёт обычный массив строк, например ['яблоко', 'банан', 'груша']
Превращает этот массив в строку и сохраняет её в localStorage под ключом 'fruits'
Сразу после — читает это значение обратно из localStorage (оно придёт строкой)
Превращает прочитанную строку обратно в настоящий массив
Выводит этот восстановленный массив в консоль и проверяет через console.log, 
что это действительно массив, а не строка (можно глазами по виду в консоли, 
или через Array.isArray(...))

Подсказка по направлению мысли: тебе нужны две операции — одна превращает JS-значение 
(массив/объект) в текстовую строку, другая делает обратное превращение, 
из текста снова в живой JS-объект/массив. Оба метода лежат на объекте, 
имя которого ты уже видел в data.js, который мне показывал.
*/



const arr = ['Яблоко.', 'Банан.', 'Груша.'];
localStorage.setItem('array', JSON.stringify(arr));

const q = JSON.parse(localStorage.getItem('array'));
console.log(q);



/*
Задание 3 — localStorage: синхронизация через кастомное событие
Эта тема — самая нетривиальная штука в data.js, которую ты, скорее всего, ещё не встречал, 
поэтому разберём отдельно, прежде чем давать задание.
Зачем вообще нужно "кастомное событие"?
Представь ситуацию: у тебя есть функция, которая меняет данные (например, добавляет фрукт 
в localStorage), и есть функция, которая показывает данные на экране. Если между ними нет связи — 
после изменения данных экран не узнает, что что-то поменялось, и не обновится сам.
Можно, конечно, просто вызывать функцию отрисовки прямо внутри функции изменения данных — 
но в архитектуре data.js/display.js это запрещено по правилам разделения: data.js не должен знать 
про существование display.js (помнишь — "data.js не трогает DOM"). Если data.js будет напрямую звать 
функцию из display.js, это нарушит изоляцию.
Решение — кастомное событие. data.js после изменения данных "выкрикивает в воздух" — "эй, что-то 
изменилось!" — без adресата, без знания, кто слушает. А кто угодно (в нашем случае main.js) может
 подписаться на этот выкрик и сам решить, что делать в ответ (например, вызвать отрисовку).
Это очень похоже на addEventListener('click', ...), который ты используешь для кнопок — только 
вместо клика мышкой, мы сами создаём событие и сами его "запускаем".

Задание 3
Напиши код (можно прямо в консоли, по шагам), который:

С помощью window.addEventListener(...) подписывается на событие с именем, например, 'dataChanged' — и в 
ответ просто выводит в консоль любое сообщение типа 'Данные изменились!'
После этого создаёт новое событие через new Event('dataChanged') (или new CustomEvent(...), если хочешь) 
и "выстреливает" его через window.dispatchEvent(...)

Проверь: после того как ты выполнишь пункт 2 — должно ли в консоли появиться сообщение из пункта 1, 
без того, чтобы ты сам напрямую вызывал ту функцию?
*/


window.addEventListener('myEvent', handleMyEvent);
const q = new Event('myEvent');

window.dispatchEvent(q)


function handleMyEvent() {
    console.log('Данные изменились!');
}


/*
Задание 3.1 — событие с дополнительными данными
Иногда событию недостаточно просто "сообщить о факте" — нужно передать какие-то данные вместе с ним. 
Для этого вместо new Event(...) используется new CustomEvent('имя', { detail: какие_то_данные }).
Напиши код, который:

Подписывается на событие 'fruitAdded', и в обработчике выводит в консоль не просто текст, 
а именно те данные, которые пришли вместе с событием (подсказка: они будут лежать внутри 
объекта события, в свойстве detail — то есть в обработчике у тебя должен появиться параметр, 
например evt, а доступ к данным — через evt.detail)
Создаёт CustomEvent('fruitAdded', { detail: 'банан' }) и тут же его запускает
*/


window.addEventListener('fruitAdded', handleFruit);

const www = new CustomEvent('fruitAdded', { detail: 'nameAlex' });

window.dispatchEvent(www);


function handleFruit(evt) {
    console.log(evt.detail);
}



/*
Задание 3.2 — два разных слушателя на одно событие
Проверь, может ли больше одной функции слушать одно и то же событие одновременно.
Напиши код, который:

Подписывает две разные функции (с разными именами) на одно и то же событие 'ping'
Запускает это событие один раз
Смотришь — вызвались ли обе функции, или только одна
*/

window.addEventListener('ping', handleDouble);

const qOne = new Event('ping');
const qTwo = new Event('ping');

window.dispatchEvent(qOne);
window.dispatchEvent(qTwo);

function handleDouble() {
    console.log(qOne);
    console.log(qTwo);
}



/*
Задание 3.3 — событие внутри функции, имитирующей save()
Это уже максимально близко к тому, что реально происходит в data.js.
Напиши код, который:

Объявляет функцию saveFruit(name), которая внутри себя сохраняет переданное имя фрукта 
в localStorage (как в Задании 2, но для одного значения), а сразу следом — сама создаёт 
и запускает CustomEvent('fruitSaved', { detail: name })
Отдельно подписывается на 'fruitSaved' — и в обработчике читает evt.detail и выводит 
в консоль что-то вроде Сохранён фрукт: банан
Вызывает saveFruit('банан') — и проверяет, что в консоли появляется и подтверждение через событие

Это — уже почти буквально то, что делает функция save() в твоём data.js, только она 
dispatchEvent без detail, а здесь ты потренируешься с данными внутри события.
*/

window.addEventListener('ddd', saveFruit);
const qqq = new CustomEvent('ddd', { detail: 'banana' });

window.dispatchEvent(qqq);

function saveFruit(name) {
    localStorage.setItem('name', `${name.detail}`);
    const p = localStorage.getItem('name');
    console.log(p);
}




/*
Задание 3.4 — своя версия трёх файлов, с нуля, по памяти
Не открывай те файлы, что я тебе дал. Создай свою версию из трёх файлов 
(data.js, display.js, main.js) и index.html, но для другой темы — не фрукты, а, например, 
список покупок или список фильмов (что хочешь). Структура должна повторять ту же логику:

data.js — глобальный массив + функция добавления элемента + dispatchEvent внутри неё
display.js — функция рендера, которая просто проходит по массиву и рисует
main.js — подписка на событие + обработчик формы

Цель — не подсмотреть и скопировать, а воспроизвести структуру по памяти, опираясь на понимание, 
а не на текст перед глазами.





/*
Задание 3.5 — добавляем второе действие (удаление) через ту же схему
Возьми свой файл из 3.4 (с фильмами/задачами) и добавь функцию удаления элемента — 
она тоже должна жить в data.js, тоже менять массив (через filter), и тоже сама "выкрикивать" 
то же самое событие 'filmChanged' (то же имя, что и при добавлении).

Ключевая проверка для тебя, прежде чем писать код: подумай, нужно ли в main.js или display.js 
писать отдельную подписку (addEventListener) на событие для удаления — или достаточно той единственной 
подписки, что уже есть, потому что событие называется одинаково для обоих действий ('filmChanged')?
Чтобы реализовать само удаление, тебе придётся решить попутно ещё один вопрос: сейчас твой массив 
window.tasks — это просто список строк (['Интерстеллар', 'Дюна']), без id. Значит, при удалении 
придётся ориентироваться либо на сам текст (имя), либо на индекс — выбери сам, как тебе удобнее,

и приделай к этому кнопку "удалить" возле каждого <li> в renderTask() (по аналогии с тем, 
что ты уже делал в Fleet Manager и Todo-листе — передача индекса/значения через стрелочную обёртку 
в addEventListener).*/




/*
Задание 3.6 — два разных события вместо одного общего
Сейчас у тебя addFilm и removeFilm оба выстреливают одно и то же имя — 'filmChanged'. 
Задание: раздели их на два разных события.

В data.js: пусть addFilm выстреливает 'filmAdded', а removeFilm выстреливает 'filmRemoved' — 
два разных имени, не одно общее.
В main.js: подпишись на оба события отдельно, двумя разными строчками window.addEventListener(...), 
но в обработчике у каждой из них всё равно вызывай ту же самую renderTask().

Когда сделаешь — подумай (не нужно мне писать ответ прямо сейчас, просто прикинь в голове): 
стало ли в этом конкретном случае лучше, или просто длиннее, по сравнению с одним общим именем 
'filmChanged'? Здесь нет единственно правильного ответа — это вопрос архитектурного вкуса, а не 
правильности кода.
*/





/*
Задание 3.7 — событие с detail, влияющее на то, что выводится
Финальное задание в блоке про события, посложнее предыдущих.
Сделай так, чтобы при удалении фильма событие 'filmRemoved' несло в detail имя удалённого фильма. 
В main.js, в обработчике этого события, перед вызовом renderTask() выведи в консоль фразу вроде 
Удалён: Дюна — используя именно evt.detail (то значение, что пришло вместе с событием), а не 
залезая в window.tasks заново, чтобы его найти.
Подсказка по направлению: тебе нужно будет изменить саму строку dispatchEvent внутри removeFilm 
в data.js — сейчас там, скорее всего, new Event('filmRemoved') без всяких данных. Вспомни синтаксис 
CustomEvent с detail, который мы использовали в Задании 3.1 и в "идеальной архитектуре" чуть выше — 
он принимает второй аргумент, объект с полем detail.
Когда сделаешь это задание — блок про события можно будет считать закрытым, и переходим к data-атрибутам 
(Задание 4), уже без отвлечений.
*/




////////////////////////////////////////


/*
Переходим к Заданию 4 — data-атрибуты
Прежде чем дать задание, разберём, зачем они нужны — иначе задание будет казаться 
оторванным от смысла.
Проблема, которую решают data-атрибуты: сейчас твой renderTask каждый раз полностью 
уничтожает список (list.innerText = '') и отрисовывает все элементы заново. 
Для маленького списка это незаметно, но представь список из вложенных категорий 
с задачами внутри (как в твоём финальном тудулисте) — полная перерисовка каждый 
раз означает, что все <li> уничтожаются и создаются заново, даже те, что не менялись. 
Это не просто "неэффективно" технически — это означает, что любая анимация, фокус на 
инпуте, или состояние, которое было у DOM-элемента, слетает каждый раз.
Чтобы рисовать умно (обновлять только то, что изменилось, а не всё подряд), коду нужен 
способ спросить: "а этот конкретный объект данных — у него уже есть соответствующий 
DOM-элемент на экране, или его ещё нет?" Для этого на каждый <li> "прикрепляется" 
невидимый ярлык с id того объекта данных, который он представляет — это и есть data-атрибут. 
Тогда можно написать: "найди мне на странице <li>, у которого ярлык совпадает с id 
вот этой задачи" — и если нашёлся, обновить его; если нет — создать новый.




/*
Задание 4 — присвоить и прочитать data-атрибут через dataset
Это совсем небольшое, "разогревочное" задание перед основной темой.
Создай (можно прямо в HTML-файле, не в консоли) один <li> элемент в index.html, например:
html<li id="my-item">Привет</li>
В JS-файле:

Найди этот элемент через getElementById('my-item')
Присвой ему data-атрибут с именем, скажем, taskId, и значением, например, 'abc123' — 
через dataset (а не через setAttribute, попробуй именно dataset)
Сразу следом прочитай это же значение обратно — тоже через dataset — и выведи в консоль

Подсказка по синтаксису: dataset — это объект, который "автоматически" связан с любыми 
атрибутами вида data-что-то на элементе. Если атрибут называется data-task-id в HTML, то 
в JS к нему обращаются через element.dataset.taskId (заметь: дефис в HTML превращается в 
    camelCase в JS). Но в твоём случае атрибута пока нет в HTML — ты должен создать его 
    именно через JS, присвоив значение dataset.
*/

const li = document.getElementById('my-item');

li.dataset.taskId = 'abc123';

console.log(li.dataset.taskId);






/*
Задание 5 — найти элемент в DOM по data-атрибуту через querySelector
Теперь не просто прочитать атрибут у элемента, который ты уже держишь в переменной, а найти элемент 
по значению его data-атрибута, не зная заранее, какая это переменная.

Создай в HTML несколько <li> элементов внутри какого-нибудь <ul>, и каждому вручную пропиши в HTML 
атрибут вида data-task-id="1", data-task-id="2", data-task-id="3" (просто в разметке, без JS)
В JS, используя document.querySelector(...), найди конкретно тот <li>, у которого data-task-id="2" — 
и выведи его в консоль (или измени ему текст, чтобы наглядно увидеть, что нашёлся именно нужный)

Подсказка по синтаксису селектора: querySelector принимает CSS-селектор в виде строки, а атрибуты 
в CSS-селекторах ищутся через квадратные скобки — вида [название-атрибута="значение"]. 
Попробуй сообразить, как будет называться нужный атрибут внутри квадратных скобок (вспомни, 
что в HTML дефисная форма, а не camelCase).
*/


const liIdTwo = document.querySelector('[data-task-id="2"]');
liIdTwo.innerText = '200';
console.log(liIdTwo);




/*
Доп. задания 5.1–5.5 (по нарастающей сложности)

5.1 — Найди <li> с data-task-id="3" через querySelector, и через console.log выведи не сам элемент, 
а именно значение его атрибута (через .dataset.taskId), чтобы убедиться, что нашёлся именно тот, 
что нужно.
*/


const li = document.querySelector('[data-task-id="3"]');
console.log(li.dataset.taskId);


/*
Задание 5.2 — поиск по значению переменной, а не по зашитому тексту
У тебя есть переменная:
javascriptconst targetId = '2';
Найди <li> с data-task-id, равным значению именно этой переменной — а не вписывая число 2 прямо в текст 
селектора руками.
Подсказка по направлению: тебе нужно собрать строку-селектор так, чтобы внутрь неё "вставилось" значение 
переменной targetId. Вспомни, чем шаблонные строки (через обратные кавычки `) отличаются от обычных строк 
в одинарных/двойных кавычках — и как именно туда вставляется значение переменной (синтаксис вида ${...}, 
который ты уже использовал, например, когда писал progBar.style.width).
Попробуй написать строку селектора с использованием targetId, а не числа 2 напрямую
*/


const targetId = '2';

const li = document.querySelector(`[data-task-id="${targetId}"]`);

console.log(li);



/*
3aдание 5.3 — найти все элементы с data-атрибутом
Найди все <li>, у которых есть атрибут data-task-id (вообще все, независимо от конкретного значения) — 
не через querySelector, а через querySelectorAll.
Выведи в консоль, сколько их нашлось — не сами элементы, а именно количество.
Подсказка по синтаксису: чтобы найти "элемент с таким атрибутом, какое бы у него ни было значение" 
(а не конкретное значение), в CSS-селекторах квадратные скобки можно использовать без знака равенства — 
просто [имя-атрибута], без ="значение". А у результата querySelectorAll (он похож на массив, хотя 
технически не массив) есть свойство, которое сообщает, сколько элементов внутри — то же самое свойство, 
которое ты используешь для обычных массивов.
*/

const allLi = document.querySelectorAll('[data-task-id]');
console.log(allLi.length)



/*
Задание 5.4 — пройтись по каждому найденному элементу
Среди всех найденных в 5.3 элементов (используй ту же allLi), через forEach, выведи в консоль 
значение data-task-id у каждого по очереди.
То есть в консоли должно появиться, например, три строчки: 1, 2, 3 (или что у тебя сейчас в HTML) — 
каждое в своём отдельном вызове console.log.
Подсказка: внутри forEach параметр — это один конкретный элемент на каждой итерации (как ты уже делал 
много раз, например с tasker.forEach(elka => ...)). Через что у этого элемента можно прочитать его 
data-атрибут — вспомни, как ты делал это в самом первом задании этого блока (Задание 4)?
*/

const lii = document.querySelectorAll('[data-task-id]')
lii.forEach(el => console.log(el.dataset.taskId))



/*
Задание 5.5 — финал блока: имитация displayNew()
Это самое близкое к реальной логике из твоего тудулиста.
У тебя есть переменная (просто пропиши её в коде, она имитирует "один объект из данных"):
javascriptconst taskFromData = { id: '2', name: 'Помыть посуду' };
Напиши код, который:

Находит на странице <li> с data-task-id, равным taskFromData.id (то есть '2')
Если такой <li> нашёлся (querySelector вернул не null) — выводит в консоль 'Уже есть на экране'
Если не нашёлся (querySelector вернул null) — выводит 'Нужно создать новый'

Подсказка по логике проверки: тебе нужно сравнить результат querySelector с null, либо просто проверить 
его в условии if напрямую (вспомни — в JS null и undefined в условии if ведут себя как false, а 
DOM-элемент — как true). Попробуй оба варианта мысленно и выбери, какой кажется тебе чище.
После этого задания — переходим к Заданию 6, последнему в блоке про data-атрибуты, где мы соединим 
это с реальным "умным" рендером.*/



const taskFromData = { id: '2', name: 'Помыть посуду' };

const li = document.querySelector(`[data-task-id="${taskFromData.id}"]`);
if (li) {
    console.log('Уже есть на экране');
    li.innerText = taskFromData.name;
} else {
    console.log('Нужно создать новый')
}


/*
Задание 5.6 — поиск среди нескольких разных типов данных
У тебя есть HTML с разными <li> — но теперь не просто с data-task-id, а ещё и с data-category-id вперемешку 
(как в твоём финальном тудулисте, где есть и категории, и задачи на одном уровне разметки):

<ul>
  <li data-category-id="cat-1">Работа</li>
  <li data-task-id="t-1">Помыть посуду</li>
  <li data-task-id="t-2">Сходить в магазин</li>
  <li data-category-id="cat-2">Учёба</li>
</ul>

Напиши код, который:

Находит все <li> с data-task-id (не трогая те, у которых data-category-id) и выводит в консоль их 
количество Отдельно — находит все <li> с data-category-id и тоже выводит их количество

Это покажет тебе, что разные имена data-атрибутов позволяют "сортировать" разные виды элементов на 
одной странице, не путая их между собой.
*/


const taskLi = document.querySelectorAll('[data-task-id]');

const catLi = document.querySelectorAll('[data-category-id]');

console.log(taskLi.length)
console.log(catLi.length)




/*
Задание 5.7 — обновление, а не поиск ради поиска
У тебя есть переменная:
const updatedTask = { id: 't-1', name: 'Помыть посуду и сковородки' };
Найди <li> с data-task-id, равным updatedTask.id, и если он нашёлся — измени его текст (innerText) 
на updatedTask.name. Если не нашёлся — выведи в консоль 'Элемент не найден, нечего обновлять'.
Это уже почти буквально та часть displayNew() из твоего исходного файла, где для уже существующего 
элемента не создают новый <li>, а просто обновляют текст внутри найденного — вспомни строку 
nameElement.textContent = category.name.
*/



const updatedTask = { id: '3', name: 'Помыть посуду и сковородки' };

const li = document.querySelector(`[data-task-id="${updatedTask.id}"]`);

if (li) {
    li.innerText = updatedTask.name;
} else {
    alert('Ищи ID корректнее');
}




/*
Задание 6 — полная имитация displayNew()
Это объединяет всё, что было в блоке 4-5.
У тебя есть массив объектов (имитация window.store, но без вложенности — пока один уровень):

const items = [
  { id: '1', name: 'Помыть посуду' },
  { id: '2', name: 'Купить молоко' },
];

И пустой 
<ul id="list"></ul> 
в HTML (без заранее прописанных <li>).

Напиши функцию renderItems(), которая:
Проходит по items через forEach
Для каждого элемента — ищет в DOM <li> с data-task-id, равным item.id
Если не нашёл — создаёт новый <li> через document.createElement, ставит ему dataset.taskId = item.id, 
текст — item.name, и добавляет в <ul> через append
Если нашёл (на этот раз не должно случиться, так как <ul> пустой — но код всё равно должен это уметь) — 
просто обновляет innerText найденного элемента

Вызови renderItems() один раз — проверь, что оба <li> появились на странице с правильными 
data-атрибутами.
Затем — не трогая HTML руками — поменяй в массиве items имя у одного из объектов 
(например, items[0].name = 'Помыть посуду и сковородки') и вызови renderItems() ещё раз. 
Проверь в DevTools: создался ли новый <li>, или обновился старый?
*/

const list = document.getElementById('list');


const items = [
    { id: '2', name: 'Помыть посуду' },
    { id: '3', name: 'Купить молоко' },
];

function renderItems() {
    items.forEach(el => {

        let li = document.querySelector(`[data-task-id="${el.id}"]`)
        if (!li) {
            li = document.createElement('li');
            li.dataset.taskId = el.id; //dataset - Добавляет data Атрибут.
            li.innerText = el.name;
            list.append(li);
        } else if (li) {
            li.innerText = el.name;
        }
    });
}


renderItems()





/*
Блок В — вложенные структуры данных
Прежде чем дать задание, разберём словами, что это вообще такое — потому что ты сам говорил, что видел 
это только "в теории на простых примерах".Что такое вложенная структура в контексте твоего тудулиста. 
В data.js window.store — это массив категорий. Но каждая категория — это не просто строка с названием, 
а объект, и внутри этого объекта лежит ещё один массив — список задач, принадлежащих именно этой 
категории:

{
  id: 'cat-1',
  name: 'Работа',
  tasks: [
    { id: 't-1', name: 'Написать отчёт' },
    { id: 't-2', name: 'Позвонить клиенту' }
  ]
}

Это как папка на компьютере, внутри которой лежат файлы — папка сама по себе объект (у неё есть имя), 
а ещё она содержит список вещей внутри себя. Раньше у тебя были просто "плоские" массивы (fleet, tasker)
 — список объектов одного уровня. Теперь это двухуровневая структура: массив объектов, у каждого объекта
 — свой собственный массив внутри.
Главная практическая сложность, которая отсюда вытекает: чтобы добавить задачу, тебе сначала нужно 
найти нужную категорию среди всех категорий (по её id), и только потом — залезть внутрь неё, в её
 tasks, и туда что-то добавить. Это два последовательных шага, а не один.




Задание 7 — создать вложенную структуру и пройтись по ней

Создай в коде массив categories, состоящий из двух объектов-категорий. У каждой категории: 
id, name, и tasks — массив, где у каждой категории по две задачи (у задачи тоже id и name).
Напиши код (без всякого DOM, просто в консоль), который проходит по этому массиву двумя вложенными 
forEach — внешний перебирает категории, внутренний (внутри внешнего) 
перебирает tasks каждой категории — и выводит в консоль строки вида:

Категория: Работа
  - Написать отчёт
  - Позвонить клиенту
Категория: Учёба
  - Прочитать главу
  - Сделать домашку
  
Подсказка по направлению: это ровно та же логика, что у тебя уже была в renderFleet/renderTask 
(один forEach), просто теперь внутри тела этого forEach тебе нужен ещё один 
forEach — на этот раз не по всему массиву categories, а по tasks конкретно того объекта, 
на котором сейчас находится внешний перебор.
*/


const categories = [{
    id: 'cat-1',
    name: 'Работа',
    tasks: [{
        id: 'ts-1',
        name: 'Написать отчёт',
    },
    {
        id: 'ts-2',
        name: 'Позвонить клиенту',
    },]
},
{
    id: 'cat-2',
    name: 'Учёба',
    tasks: [{
        id: 'ts-3',
        name: 'Прочитать главу',
    },
    {
        id: 'ts-4',
        name: 'Сделать домашку',
    },]
}];



function todo() {
    categories.forEach(el => {
        console.log('cccc')
        console.log(`${el.name}`);
        el.tasks.forEach(ell => {
            console.log(`${ell.name}`);
        });
    });
}

todo();





/*
Задание 7.1 — вывести только задачи одной конкретной категории
Используй тот же массив categories из задания 7.
Напиши код (без функции, просто прямо в консоль), который выводит в консоль только задачи категории 
"Учёба" — не перебирая все категории через forEach, а обращаясь к нужной категории напрямую по индексу 
(вспомни — к элементу массива по индексу обращаются через квадратные скобки: categories[0], 
categories[1]).
То есть сначала достань объект нужной категории напрямую, потом пройдись по его tasks через 
forEach и выведи каждое task.name.*/




const categories = [{
    id: 'cat-1',
    name: 'Работа',
    tasks: [{
        id: 'ts-1',
        name: 'Написать отчёт',
    },
    {
        id: 'ts-2',
        name: 'Позвонить клиенту',
    },]
},
{
    id: 'cat-2',
    name: 'Учёба',
    tasks: [{
        id: 'ts-3',
        name: 'Прочитать главу',
    },
    {
        id: 'ts-4',
        name: 'Сделать домашку',
    },]
}];


categories[1].tasks.forEach(el => console.log(el.name));




/*
Задание 7.2 — добавить новую задачу в конкретную категорию вручную
Снова тот же массив. Напиши код, который:

Обращается напрямую (по индексу) к категории "Работа" (categories[0])
В её массив tasks добавляет новый объект задачи: { id: 'ts-5', name: 'Написать план' } — через push
После этого проходит по всем задачам категории "Работа" через forEach и выводит их в консоль — 
чтобы убедиться, что новая задача действительно появилась внутри

Цель — почувствовать руками, как работает двухуровневое обращение: сначала достаёшь объект из 
внешнего массива, потом залезаешь в его внутренний массив и что-то с ним делаешь.
*/


const categories = [{
    id: 'cat-1',
    name: 'Работа',
    tasks: [{
        id: 'ts-1',
        name: 'Написать отчёт',
    },
    {
        id: 'ts-2',
        name: 'Позвонить клиенту',
    },]
},
{
    id: 'cat-2',
    name: 'Учёба',
    tasks: [{
        id: 'ts-3',
        name: 'Прочитать главу',
    },
    {
        id: 'ts-4',
        name: 'Сделать домашку',
    },]
}];


function addTask(el, ind) {
    categories[0].tasks.push({ id: el, name: ind });
    categories[0].tasks.forEach(el => console.log(el.name));
}




/*
Задание 8 — find() для получения категории по id
Используй тот же массив categories.
Напиши функцию findCategory(id), которая:

Принимает id как аргумент
Внутри использует метод find() на массиве categories, чтобы найти объект категории, у которого 
category.id === id
Возвращает найденный объект

Вызови её дважды и выведи результаты в консоль:

findCategory('cat-2') — должна вернуть объект "Учёба" целиком
findCategory('cat-99') — должна вернуть undefined

Подсказка по синтаксису find: он работает почти как filter — принимает функцию, которая проверяет 
каждый элемент, но в отличие от filter возвращает не массив, а первый элемент, для которого условие 
истинно. Если ничего не нашёл — возвращает undefined.
*/




let categories = [{
    id: 'cat-1',
    name: 'Работа',
    tasks: [{
        id: 'ts-1',
        name: 'Написать отчёт',
    },
    {
        id: 'ts-2',
        name: 'Позвонить клиенту',
    },]
},
{
    id: 'cat-2',
    name: 'Учёба',
    tasks: [{
        id: 'ts-3',
        name: 'Прочитать главу',
    },
    {
        id: 'ts-4',
        name: 'Сделать домашку',
    },]
}];


function findCategory(id) {
    const category = categories.find(el => {
        if (el.id === id) {
            console.log(`${el.name}`);
            el.tasks.forEach(ell => console.log(`${ell.name}`));
        }
    });
    return category;
}



/*
Задание 8.1
Попробуй теперь сам написать похожую функцию findTask(taskId), которая ищет не категорию, 
а конкретную задачу по её id — среди всех задач всех категорий. 
*/


function findTask(taskId) {
    let result;
    categories.forEach(cat => {
        const found = cat.tasks.find(task => task.id === taskId);
        if (found) {
            result = found;
        }
    });
    if (result) {
        console.log(result.name);
    } else {
        console.log('Not found');
    }
    return result;
}

/*
Задание 8.2 — найти категорию, в которой лежит конкретная задача
Используй тот же массив categories.
Напиши функцию findCategoryByTaskId(taskId), которая:

Принимает id задачи как аргумент
Возвращает не саму задачу, а категорию, в которой эта задача лежит

То есть если вызвать findCategoryByTaskId('ts-3') — должен вернуться объект категории "Учёба" 
целиком (с её id, name и tasks), потому что задача ts-3 лежит именно там.
Подсказка по направлению: тут тоже нужен перебор категорий, но вместо forEach + внешняя переменная — 
подумай, можно ли использовать find напрямую по categories. Внутри find для каждой категории нужно 
проверить: есть ли в её tasks задача с нужным id. Для этой проверки есть метод, похожий на find, но 
возвращающий не элемент, а true/false — он называется some. Синтаксис такой же, как у 
find: array.some(el => условие).
Вызови функцию дважды:

findCategoryByTaskId('ts-4') — должна вернуть объект "Учёба"
findCategoryByTaskId('ts-99') — должна вернуть undefined
*/


function findCategoryByTaskId(taskId) {
    let result;
    categories.forEach(cat => {
        const category = cat.tasks.find(task => task.id === taskId);
        if (category) {
            console.log(cat.name);
            result = cat;
        }
    });
    return result;
}




/*
Задание 9 — добавление задачи во вложенный массив конкретной категории
Используй тот же массив categories.
Напиши функцию addTask(categoryId, taskName), которая:

Принимает два аргумента: id категории и имя новой задачи
Находит нужную категорию по categoryId — через find (как в Задании 8)
Если категория нашлась — добавляет в её tasks новый объект задачи через push. У новой задачи
 должны быть два поля: id (используй crypto.randomUUID() — он генерирует уникальную строку 
 автоматически, без аргументов) и name (то, что пришло в параметре taskName)
Если категория не нашлась — выводит в консоль 'Категория не найдена'

После написания функции — вызови её и проверь результат:
addTask('cat-1', 'Подготовить презентацию');
Потом пройдись по categories[0].tasks через forEach и выведи все задачи в консоль — убедись, 
что новая задача появилась с уникальным id.
*/



function addTask(categoryId, taskName) {
    const category = categories.find(cat => cat.id === categoryId);
    if (category) {
        console.log('dd')
        category.tasks.push({
            id: crypto.randomUUID(),
            name: taskName,
        });
        categories[1].tasks.forEach(task => console.log(task));
    }
};


addTask('cat-2', 'taskName')




/*
Задание 10 — удаление задачи из вложенного массива
Используй тот же массив categories.
Напиши функцию deleteTask(categoryId, taskId), которая:

Принимает два аргумента: id категории и id задачи, которую нужно удалить
Находит нужную категорию через find по categoryId
Если категория нашлась — фильтрует её tasks через filter, оставляя все задачи кроме той, чей 
id совпадает с taskId, и перезаписывает category.tasks результатом фильтрации
Если категория не нашлась — выводит 'Категория не найдена'

Проверь: вызови deleteTask('cat-1', 'ts-1'), потом пройдись по categories[0].tasks через forEach 
и убедись, что задача ts-1 исчезла.
*/



function deleteTask(categoryId, taskId) {
    const category = categories.find(cat => cat.id === categoryId);
    if (category) {
        category.tasks = category.tasks.filter(task => task.id !== taskId);

    } else {
        console.log('Категории не существует!')
    }
}


deleteTask('cat-1', 'ts-1');

console.log(categories[0].tasks);






/*
Задание 10.1 — переименовать задачу внутри категории
Используй тот же массив categories.
Напиши функцию renameTask(categoryId, taskId, newName), которая:

Принимает три аргумента: id категории, id задачи и новое имя задачи
Находит нужную категорию через find по categoryId
Если категория нашлась — находит нужную задачу внутри category.tasks через find по taskId
Если задача нашлась — меняет её свойство name на newName
Если категория или задача не нашлась — выводит соответствующее сообщение в консоль

Проверь: вызови renameTask('cat-2', 'ts-3', 'Прочитать две главы'), потом выведи categories[1].tasks 
в консоль и убедись, что имя задачи изменилось.
Подсказка по направлению: тут не нужен filter и не нужно присваивать массив заново — ты просто находишь 
объект задачи через find (получаешь ссылку на него) и меняешь одно его свойство напрямую. Вспомни логику 
с "ярлыком" — если find вернул ссылку на объект внутри массива, то изменение свойства этого объекта 
автоматически отразится в исходном массиве.
*/




function renameTask(categoryId, taskId, newName) {
    const category = categories.find(cat => cat.id === categoryId);
    if (category) {
        const task = category.tasks.find(task => task.id === taskId);
        if (task) {
            task.name = newName;
        }
    }
}

renameTask('cat-2', 'ts-3', 'Zhopa');

categories[1].tasks.forEach(task => {
    console.log(task.name);
});






/*
Задание 11 — разнести логику на data.js и main.js
Это первое задание блока сборки архитектуры. Начнём без display.js — только два файла плюс HTML.
Создай три файла: index.html, data.js, main.js.
В data.js должно быть:

window.store = [] — глобальный массив категорий
Функция addCategory(name) — создаёт объект категории с id (через crypto.randomUUID()), name и 
пустым массивом tasks, пушит в window.store, и выстреливает событие 'storeChanged'
Функция addTask(categoryId, taskName) — находит категорию через find, добавляет задачу в её tasks 
(тоже с crypto.randomUUID() для id), и выстреливает то же событие 'storeChanged'

В main.js должно быть:

Подписка на событие 'storeChanged' — в обработчике пока просто console.log(window.store) 
(display.js ещё нет, поэтому просто смотрим в консоль)
Обработчик формы добавления категории — читает значение из инпута и вызывает addCategory(...)

В index.html — простая форма с инпутом и кнопкой для добавления категории, и подключение скриптов 
в правильном порядке.
Проверь: введи название категории, нажми кнопку — в консоли должен появиться массив window.store 
с одним объектом внутри. Добавь вторую категорию — массив должен показать два объекта.
Цель этого задания — почувствовать, как data.js и main.js работают вместе без display.js, только 
через событие и консоль.*/



/*
Задание 13 — "умный" рендер
Сейчас твой display() каждый раз полностью уничтожает список и создаёт заново. Задание — 
переписать его так, чтобы он не трогал элементы, которые уже есть на экране, а только добавлял 
новые.
Каждый <li> должен хранить id своей категории через data-атрибут. При каждом вызове display() — 
для каждой категории из window.store сначала ищи существующий <li> на странице по этому id, и 
только если не нашёл — создавай новый.
Проверь в DevTools: добавь две категории, потом добавь третью — в Elements должны появиться 
только новые <li>, а старые остаться нетронутыми (без мигания и пересоздания).
*/





/*
Задание 1 — GET-запрос, вывести список в консоль
Используй этот URL: https://jsonplaceholder.typicode.com/todos
Напиши async функцию getTodos, которая:

Делает GET-запрос на этот адрес
Распаковывает ответ
Выводит результат в консоль

Вызови её сразу после объявления.
Больше никаких подсказок — ты это уже писал, синтаксис знаешь.
*/


async function gettt() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();

    console.log(data);
}



/*
Задание 2 — GET-запрос одного элемента по id
Используй тот же jsonplaceholder, но теперь получи один конкретный todo с id 5:
https://jsonplaceholder.typicode.com/todos/5
Напиши функцию getTodoById(id), которая принимает id как аргумент и подставляет его в 
URL через шаблонную строку. Выведи результат в консоль.
*/


async function getElemetById(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const fata = await response.json();

    console.log(fata);
}


/*
Задание 3 — GET-запрос списка пользователей, вывести только имена
URL: https://jsonplaceholder.typicode.com/users
Напиши функцию getUsers, которая получает список пользователей и выводит в консоль 
только имена — не весь объект, а именно поле name каждого пользователя.
Подсказка по направлению: после того как получишь массив, пройдись по нему через forEach.
*/


async function getUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    data.forEach(user => console.log(user.name));
}


/*
Задание 4 — POST-запрос, отправить новый объект
URL: https://jsonplaceholder.typicode.com/todos
Напиши функцию createTodo(todo), которая:

Принимает объект todo как аргумент
Отправляет POST-запрос с этим объектом в body
Распаковывает ответ сервера и выводит в консоль

Вызови её, передав такой объект:
createTodo({
    title: 'Купить молоко',
    completed: false,
    userId: 1
});
*/


async function createTodo(todo) {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'post',
        body: JSON.stringify(todo),
        headers: {
            'Content-Type': 'application/json'
        },
    });
    const data = await response.json();

    console.log(data);
}


/*
Задание 5 — получить todos и отрендерить каждый как <li>
Напиши код, который:

Получает список todos с https://jsonplaceholder.typicode.com/todos
Для каждого todo создаёт <li> с текстом — полем title
Добавляет каждый <li> в <ul> на странице

В HTML нужен только один элемент:
html<ul id="list"></ul>
Никаких подсказок по коду — ты всё это уже умеешь: fetch, forEach, createElement, innerText, 
append.*/


const list = document.getElementById('list');

async function getRequest() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    data.forEach(todo => {
        todo.title; //Не понимаю, зачем конкретно здесь именно туду-тайтл, если в print(todo) вызывается просто туду?
        print(todo);
    });

}

function print(todo) {
    console.log('ddd')
    const li = document.createElement('li');
    li.innerText = todo.title;
    list.append(li);
}

getRequest();

-------


    let todos = [];

const list = document.getElementById('list');

async function getRequest() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    return data;
}

async function getData() {
    todos = await getRequest();
    todos.forEach(todo => print(todo));
}

function print(todo) {
    const li = document.createElement('li');
    li.innerText = todo.title;
    list.append(li);
}

getData();


/*
Задание 5.1 — то же самое через .then, без async/await
Напиши функцию getTodos, которая получает список todos и для каждого вызывает print(todo) — 
но без единого async/await, только через цепочку .then.
print можешь оставить тот же что написал выше.
Подсказка по направлению: fetch возвращает Promise — значит сразу можно писать .then. 
Потом response.json() тоже возвращает Promise — значит снова .then. Итого два .then подряд 
в цепочке.
*/

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



/*
Задание 5.2 — async/await с return, сохранить результат снаружи
Напиши две функции:
getTodos() — async функция, которая получает todos и возвращает массив через return.
init() — async функция, которая вызывает getTodos() через await, сохраняет результат в 
переменную todos и выводит её в консоль.
Вызови init() в конце.
Цель задания — почувствовать, что return внутри async функции и await снаружи — это 
единственный способ "вытащить" данные из асинхронной функции в другую переменную.*/
let todos = [];

async function getTodos() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data  = await response.json();
  return data;
}

async function init() {
  todos = await getTodos();
  console.log(todos);
}

init();




/*
Задание 5.3 — Promise.all
Напиши функцию init, которая получает параллельно два списка:

todos: https://jsonplaceholder.typicode.com/todos
users: https://jsonplaceholder.typicode.com/users

Используй Promise.all — оба запроса должны уйти одновременно. 
Когда оба вернутся — выведи в консоль сначала todos, потом users.
Вспомни синтаксис из того кода, который ты изучал в начале этой темы — там было ровно это.
*/


let todos = [];
let users = [];

async function getAllTodos() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await response.json();
  return data;
}


async function getAllUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  return data;
}

function init () { 
  Promise.all([getAllTodos(), getAllUsers()]).then(values => {
    [todos, users] = values;
    console.log(todos);
    console.log(users);
  });
}

init()


/*
Задание 6 — PUT/PATCH, обновить поле существующего элемента
Напиши функцию updateTodo(id), которая отправляет PATCH-запрос на:
https://jsonplaceholder.typicode.com/todos/${id}
И обновляет поле completed на true у того todo, чей id ты передаёшь.
Вызови её с любым id, например updateTodo(5). Выведи ответ сервера в консоль — там должен вернуться 
обновлённый объект с completed: true.
Подсказка: PATCH работает так же как POST — второй аргумент fetch с method, body и headers. 
Разница только в том, что PATCH обновляет часть объекта, а не весь объект целиком.
*/


async function updateTodo(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({completed: true }),
    headers: {
      'Content-Type': 'application/JSON',
    }
  });
  const data = await response.json();
  console.log(data);
}



/*
Задание 6.1 — DELETE-запрос
Напиши функцию deleteTodo(id), которая отправляет DELETE-запрос на:
https://jsonplaceholder.typicode.com/todos/${id}
Выведи в консоль статус ответа — не response.json(), а response.status. 
Успешное удаление возвращает 200.
*/



async function deleteTodo(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    method: 'DELETE',
  });

  const data = response.status;

  console.log(data);
}


/*
Задание 6.2 — PUT-запрос, обновить весь объект целиком
Напиши функцию replaceTodo(id), которая отправляет PUT-запрос на тот же URL с id.
В отличие от PATCH, PUT заменяет объект целиком — значит в body нужно передать все поля:
{
    title: 'Новое название',
    completed: true,
    userId: 1
}
Выведи ответ сервера в консоль — должен вернуться полный обновлённый объект.
*/



async function replaceTodo(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      title: 'Новое название',
      completed: true,
      userId: 1
    }),
    headers: {
      'Content-Type': "application/json",
    }
  });
  const data = await response.json();

  console.log(data);
}




/*
Задание 7 — получить todos и отрендерить каждый как <li>
Это уже делал в задании 5 — но теперь усложним. Каждый <li> должен выглядеть так:

текст: title задачи
если completed: true — добавить класс done на <li> (через li.classList.add('done'))
если completed: false — класс не добавлять

В CSS добавь:
.done {
    text-decoration: line-through;
    color: gray;
}
Получи todos через async/await, пройдись через forEach, для каждого вызови функцию 
renderTodo(todo) — она создаёт <li> с нужным классом и добавляет в список.
*/

const list = document.getElementById('list');

let todos = [];

async function getTodos() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await response.json();
  return data;
}


async function getConvert() {
  todos = await getTodos();
  console.log(todos);
  todos.forEach(todo => print(todo)); //Машинально, что нужно писать forEach. Но ты сможешь мне объяснить, почему нужно через forEach мне доставать элементы туда?
}


function print(todo) {
  console.log(todo.completed)
  const li = document.createElement('li');
  li.innerText = todo.title;

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  if (todo.completed === true) {
    li.classList.add('done');
    checkbox.checked = true;
  }

  list.append(li);
  li.prepend(checkbox);
}

getConvert()




/*
Задание 8 — фильтр, показывать только выполненные
Используй тот же код из задания 7 — но теперь выводи в список только те todos, у которых completed: true.
Не меняй функцию print — фильтрацию сделай до того, как передавать данные в forEach. 
Используй метод массива filter.
*/


const list = document.getElementById('list');

let todos = [];

async function getTodos() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await response.json();
  return data;
}


async function getConvert() {
  todos = await getTodos();
  console.log(todos);
  todos = todos.filter(todo => todo.completed === true);
  todos.forEach(todo => print(todo));
}


function print(todo) {
  console.log(todo.completed)
  const li = document.createElement('li');
  li.innerText = todo.title;

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  if (todo.completed === true) {
    li.classList.add('done');
    checkbox.checked = true;
  }

  list.append(li);
  li.prepend(checkbox);
}

getConvert()




/*
Задание 9 — Promise.all, получить todos и users параллельно
Получи параллельно два списка — todos и users. Выведи в консоль оба массива.*/


let todos = [];
let users = [];


async function getAllTodos() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await response.json();
  return data;
}


async function getAllUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  return data;
}

function getAllTogether() {
  Promise.all([getAllUsers(), getAllTodos()]).then(values => {
      [users, todos] = values;
      console.log(users);
      console.log(todos);
    });
}

getAllTogether();





/*
Задание 10 — связать todos и users
Получи параллельно todos и users через Promise.all. 
Для каждого todo найди соответствующего пользователя по userId и выведи в консоль строку вида:
"Купить молоко — Leanne Graham"
То есть title задачи и name пользователя рядом.*/



let todos = [];
let users = [];


async function getAllTodos() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await response.json();
  return data;
}


async function getAllUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  return data;
}


function getAllTogether(userId) {
  Promise.all([getAllTodos(), getAllUsers()])
    .then(values => {
      [todos, users] = values;
      todos.forEach(todo => {
        user = users.find(user => user.id === todo.userId);
        console.log(`${user.name} - ${todo.title}`);
      });
    });
}
getAllTogether();



/*
Задание 11 — обработка ошибок через try/catch
Возьми любую async функцию с fetch из прошлых заданий и оберни её в try/catch.
Чтобы проверить что catch работает — намеренно сломай URL (например убери https:// 
или напиши несуществующий адрес). В catch выведи в консоль сообщение об ошибке.
*/


async function getAllTodos() {
  try {
    const response = await fetch('https://jsonplaceolder.typicode.com/todos');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Что-то пошло не так.', error)
  }
}

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

parse()

function handleSubmit(evt) {
  evt.preventDefault();
  if (input.value !== '') {
    pushTodo(input.value);
    input.value = '';
  }
}

function pushTodo(todo) {
  todos.push(todo);
  localStorage.setItem('Todoss', JSON.stringify(todos))
  console.log(todos)
  list.innerHTML = '';
  todos.forEach(todooo => printTodo(todooo));
}

function printTodo(todo) {
  console.log('fdffdfd')
  const li = document.createElement('li');
  li.innerText = todo;
  list.append(li);
}


function parse() {
  const parse = JSON.parse(localStorage.getItem('Todoss'));
  if (parse) {
    todos = parse;
    todos.forEach(todo => printTodo(todo));
  }
}


/*Задание 13.1
Напиши три функции:

save(data) — сохраняет любой массив в localStorage под ключом 'myData'
load() — читает и возвращает массив из localStorage (с проверкой на null)
clear() — удаляет ключ 'myData' из localStorage (метод называется removeItem)

Вызови все три по очереди и проверь через консоль.*/


function saveData(data) {
  localStorage.setItem('myData', JSON.stringify(data));
}

function load() {
  const data = JSON.parse(localStorage.getItem('myData'))
  if (data) {
    return data;
  }
}

function clear() {
  localStorage.removeItem('myData');
}


/*
Задание 13.2
Напиши функцию addItem(item), которая:

Читает текущий массив из localStorage
Добавляет новый элемент в этот массив
Сохраняет обратно в localStorage

Вызови addItem('яблоко'), потом addItem('банан'), потом addItem('груша') — и проверь что
 в localStorage лежит массив из трёх элементов.*/

let arr = [];

function addItem(item) {
  const data = JSON.parse(localStorage.getItem('d'));
  if (data) {
    arr = data;
  }
  arr.push(item);
  localStorage.setItem('d', JSON.stringify(arr));
}

addItem('яблоко');
addItem('банан');
addItem('груша');



/*
Задание 13.3
Напиши функцию removeItem(item), которая:

Читает массив из localStorage
Удаляет из него переданный элемент через filter
Сохраняет обновлённый массив обратно

Проверь: сначала добавь три элемента через addItem из прошлого задания, 
потом удали один через removeItem и убедись что в localStorage остались два.
*/



let arr = [];

function removeItem(item) {
    const data = JSON.parse(localStorage.getItem('dsd'))
    if (data) {
        arr = data;
    }
    arr = arr.filter(i => i !== item);
    localStorage.setItem('dsd', JSON.stringify(arr));
}




/*
Задание 13.4

Напиши функцию updateItem(oldItem, newItem), которая:

Читает массив из localStorage
Находит элемент oldItem и заменяет его на newItem через map
Сохраняет обновлённый массив обратно

Проверь: добавь 'яблоко', потом замени его на 'арбуз' — в localStorage должен лежать ['арбуз'].
*/


let arr = [];


function addItem(item) {
  const data = JSON.parse(localStorage.getItem('q'));
  if (data) {
    arr = data;
  }
  arr.push(item);
  localStorage.setItem('q', JSON.stringify(arr));
}

function updateItem(oldItem, newItem) {
  const data = JSON.parse(localStorage.getItem('q'));
  if (data) {
    arr = data;
  }

  arr = arr.map(item => {
    if (item === oldItem) {
      return newItem;
    } else {
      return item;
    }
  });

  localStorage.setItem('q', JSON.stringify(arr))
}


addItem('яблоко');
addItem('банагн');
addItem('груша');

updateItem('груша', 'дерево');





/*
Задание 14

Напиши приложение с нуля, которое умеет:

Из задания 13:

Форма с инпутом и кнопкой "Добавить"
При сабмите — добавляет задачу в массив todos, рисует <li> в списке, сохраняет в localStorage
При загрузке страницы — восстанавливает todos из localStorage и рисует список

Новое в задании 14:

У каждого <li> есть кнопка "Удалить"
При клике — удаляет элемент из DOM, из массива todos через filter, сохраняет обновлённый 
массив в localStorage

Проверь: добавь три задачи, перезагрузи страницу — все три должны остаться. Удали одну — 
она должна исчезнуть и не появляться после перезагрузки.
*/


let todos = [];

const form = document.getElementById('form');
const input = document.getElementById('input');
const list = document.getElementById('list');


function parse() {
  const data = JSON.parse(localStorage.getItem('todos'));
  if (data) {
    todos = data;
  }
  todos.forEach(todo => print(todo));
}


form.addEventListener('submit', handleSubmit);

function handleSubmit(evt) {
  if (input.value !== "") {
    evt.preventDefault();
    todos.push({
      name: input.value,
      completed: false
    });
    console.log(todos);
    list.innerText = '';
    todos.forEach(todo => print(todo));
    input.value = '';
    localStorage.setItem('todos', JSON.stringify(todos));
  }
}

function print(todo) {
  const li = document.createElement('li');
  li.innerText = todo.name;

  const delBtn = document.createElement('button');
  delBtn.innerText = 'X';

  const status = document.createElement('input');
  status.type = 'checkbox';
  console.log(todo.completed);
  if (todo.completed === true) {
    li.classList.add('done'); 
    status.checked = true;
  } 

  status.addEventListener('click', () => handleStatus(todo, li, status))

  list.append(li);
  li.append(delBtn);
  li.prepend(status)

  delBtn.addEventListener('click', () => handleDelBtn(todo, delBtn));

  localStorage.setItem('todos', JSON.stringify(todos));
}


function handleStatus(todo, li, status) {
  if (todo.completed !== true) {
    li.classList.add('done');
    status.checked = true;
    todo.completed = true;
  } else {
    li.classList.remove('done');
    status.checked = false;
    todo.completed = false;
  }
  localStorage.setItem('todos', JSON.stringify(todos));
}


function handleDelBtn(todo, btn) {
  todos = todos.filter(item => item !== todo);
  console.log(todos);
  btn.parentElement.remove();
  localStorage.setItem('todos', JSON.stringify(todos));
}

parse()
console.log(todos);




