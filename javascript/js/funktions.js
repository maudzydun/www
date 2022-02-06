function print(arg){
    console.log(arg);
};
print('Привет мир')
// Привет мир

function calc(a, b){
    return a + b;
};

print(calc(2, 15)); 
// 17

// если мы забыли указать какой-то
// параметр, мы можем установить 
// значение параметра по умолчанию

function calc2(a, b){
    if(b == undefined)
        b = 10;
    return a + b;
};

// значение по умолчанию так же
function calc3(a, b=10){
    return a + b;
};

print(calc2(15)); 
// 25
print(calc2(15, 50)); 
// 65


function arrEven(array){
    let isEven = true;
    array.forEach(function(item, i, arr){
        if(item % 2 != 0)
            isEven = false;
    });
    return isEven;
};

let arr = [5, 9 , 0 , 4];
let arr1 = [2, 12, 0, 4];

print(arrEven(arr)); //false
print(arrEven(arr1)); //true

// переписать функцию можно  
// добавив ее в переменную 
let conlo = print;
conlo('Hello World!');
// Hello World!

// чтобы очистить переменную
conlo = null;

// переменная = функция еще можно:
conlo = function(a=''){
    console.log(a);
};

conlo('Hello World!');
conlo();
// будет работать и так и так

// функция с задержкой по времени 
setTimeout(print, 2000, arr);
// Параметры:
// 1. Сама функция
// 2. Задержка в милисекундах 
// (2000 - 2 секунды)
// 3. Аргументы для функции
// передаются дальше просто через ,

let x = setTimeout("print('try')", 1500);
// 1. Можно в первый параметр так же 
// в лапках вставить прямо какой-то
// маленький кусочек кода

// отмена функции с задржкой по времени
clearTimeout(x);

// выполнение кода каждые n секунд
setInterval(print, 3000, 'dou');
// Принимает те же параметры что и таймаут
let interval = setInterval(function(){
    console.log('hallo');
}, 500);

// закончим этот интервал через 10 секунд
setTimeout(function(){
    clearInterval(interval);
    print('Интервал остановлен');
}, 10000);




