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
  localStorage.setItem('d', JSON.stringify(item));
 }