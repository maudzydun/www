////////////////////////////////////////////////////////
// Прототипы
let car = {};

// у каждого обьекта есть глобальный класс Object
// у класса Object в свою очередь есть свои глобальные функции

// мы можем переписать эти функции 
Object.prototype.toString = function () {
    console.log('Object printed')
};

// или сделать новые функции для глобального класса
Object.prototype.consoleInfo = function () {
    console.log('Object printed')
};

///////////////////////////////////////////////
// функция внутри функции
function pets() {
    let pet = 'Dog';

    return function () {
        console.log(pet)
    };
}

// функция петс будет возвращать функцию без имени
// чтобы воспользоваться внутренней функцией можно прописать вызов вот таким образом pets ()(), но таким образом никто не прописывает, чаще пользуются вот так:
let dog = pets();
// переменная dog будет именно не переменной, а как раз нашей функцией которая находится внутри, и теперь чтобы нам вывести в консоль pet нужно воспользоваться вызовом функции с помощью вызова функции у переменной dog 
dog();

// пример использования замыкающей функции
function makeCar(name) {
    return function(model){
        console.log(`${name}, модель ${model}`);
    };
};

let bmw = makeCar("BMW");
bmw('X6');
// BMW, модель X6
bmw('e200');
// BMW, модель e200


/////////////////////////////////////////////////////////////
// Обещания - promise 
let p = new Promise (function(resolve, reject) {
    let isGoodVideo = true;
    if(isGoodVideo == true) {
        // если видео гуд - то мы вызываем функцию резолв в которую можно передавать параметр значение , а можно параметры и не передавать 
        resolve("Video is nice")
    } else {
        reject("Video is failed")
    }
});
// обьект класса промис принимает 2 параметра - 2 функции:
// 1.resolve - функция которая будет выполнена если код успешно обработался
// 2.reject - функция которую будем вызывать если код неуспешно обработался

// Рассмотрим как можно выполнить сам промис
p.then((mess) => {
    console.log('Параметр мес мы передаем потому что в функции резолв мы передаввали один параметр - мес и есть этот параметр' + mess)
}).catch((mess) => {
    console.log('Параметр мес мы передаем потому что в функции резолв мы передаввали один параметр - мес и есть этот параметр' + mess)
})
// метод .then будет выполнен в том случае когда весь код внутри класа промис будет обработан
// метод .catch будет выполнен в том случае когда вызывается метод resolve который отслеживает какую либо ошибку

// Еще один пример промиса
let jsBetterThanPhp = true;
let nodeJsIsGreat = true;

function isJsWorthCallback() {
    return new Promise((resolve, reject) => {
        if(jsBetterThanPhp && nodeJsIsGreat) {
            resolve ({
                isWorth: true,
                name: 'JS'
            })
        } else {
            reject("JS isn't so great :( ")
        }
    })
};

isJsWorthCallback().then((mess) => {
    console.log("Success: " + mess.name)
}).then(() => {
    console.log('Next message')
}).catch((error) => {
    console.error('Error: ' +   error)
}).finally(() => {
    console.warn("All is done!")
});

// Еще один пример промиса
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Starting');
        resolve();
    }, 1000)
})
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Fetching Data');
        resolve();
    }, 2000)
})
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Finish');
        resolve();
    }, 3000)
})
// вызываем зен дня всех 3х промисов одновременно 
Promise.all([p1, p2, p3]).then(() => {
    console.log("App finished")
}).catch(() => {
    console.error('Никогда наш ерор не выполнится из за того что в списке наших промисов ни у одного нет условия при котором будет выполнен reject-беспонтовый')
});


// Promise на практике (читаем список пользователей в формате JSON на сайте https://reqres.in/)

fetch('https://reqres.in/api/users').then((res) => { 
    return res.json()
    // вот эту большую строку можно записать в сокращенном виде .then(res => res.json())
}).then((data) => {
    console.log(data);
    console.log(data.data[0].first_name);
})
// могу поспорить что сам такое повторить не смогу , но надо будет как-то попробовать это сделать