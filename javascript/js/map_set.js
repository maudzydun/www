// Колекции Set (уникальные елементы)
let mySet = new Set();
mySet.add(5);
mySet.add(5.2);
mySet.add('5');
mySet.add(5);
mySet.add(true);
mySet.add(5 + 2);
mySet.add(3 + 2);
mySet.add({"name":"Magomed"});

// добавляем элементы в наш Set
console.log(mySet);
// Set(6) {5, 5.2, '5', true, 7, …}
// В свернутом виде плохо что либо видно
// поэтому переберем сет через цыкл
for(let el of mySet)
    console.log(el);
// кстати в отличии от перебора масива в сет используется
// ключевое слово of вместо in и будет выведено:
// 5
// 5.2
// 5 - это строчный элемент
// true
// 7
// {name: 'Magomed'}
// а 5 как число в любом виде выводится только один
//  раз. Потому что оно повтряется и при последующем
//  добавлении - игнорируется

mySet.delete(5);
// удаляет элемент из колекции

console.log(mySet.has(5));
// false
// функция has проверяет существует
// ли элемент 5 в коллекции, если бы
// существовал - true


// колекции Map
let myMap = new Map();
// добавление элементов в мап
myMap.set('first', 'str1');
// первый параметр - ключ
// второй параметр - его значение
myMap.set(2, 'str2');
myMap.set(true, 'str3');
myMap.set({"x":'y'}, 'str4');
let a = 15;
myMap.set(a, 'str5');
a = 20;
myMap.set(a, 15)

console.log(myMap);
// // Map(5) {'first' => 'str1',
// //  2 => 'str2', true => 'str3',
// //  {…} => 'str4', 15 => 'str5'}
// [[Entries]] - если развернуть
// 0: {"first" => "str1"}
// 1: {2 => "str2"}
// 2: {true => "str3"}
// 3: {Object => "str4"}
// 4: {15 => "str5"}
// 5: {20 => 15}

myMap.delete(2);
// удаляет элемент из колекции

console.log(myMap.size);
// выводит размер колекции

console.log(myMap.has(true))
// проверяет есть ли элемент тру в колекции
// и выводит тру - потому что такой ключ есть

for(let el of myMap.keys())
    console.log(el);
// переберем и выведем все ключи из нашей колекции

for(let el of myMap.values())
    console.log(el);
// переберем и выведем все значения из нашей колекции

for(let el of myMap) {
    console.log(el);
    console.log(el[0]);}
// выводится каждый элемент как масив из двух элементов
// а второй строчкой ключ (элемент 0 индекса в этом масиве)
