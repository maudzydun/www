// Новые возможности в JS версии высше 5-ой

let num = 5;
let some = '123some';

// можно вместо строки с кучей скобок и плюсиков записывать вот так 
console.log(`Variable one: ${num}; Second var: ${some}`);

let arr_1 = [5 , 6 , 9];
let arr_2 = [4, 2, ...arr_1];
// обьединение 2х масивов в 1



// создавать функции можно при помощи вот таких вот конструкций
const func = (param) => console.log(`${param}`);
func(num);
// где функ - название функции

// или вот так
function print(params) {
    console.log(params);
};

// или если нам нужна функция без имени просто прописываем конструкцию () => {}
setTimeout(() => {print(arr_2)});