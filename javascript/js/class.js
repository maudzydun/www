// Обьект
let car = {
    marka: 'BMW',
    color: 'white',
    type: 'sedan',
    speed: 250,
    fuel: 50,
    isNew: true,
    passagers: ['boby', 'obi', 'doby']
};

// обращение к элементам через ключ .
console.log(car.color);
// white

// обращение к элементам через ключ []
console.log(car['isNew']);
// true

// перебор обьекта
for(let key in car){
    console.log('Элемент по ключу ' + key 
    + ': ' + car[key]);
};

// Элемент по ключу marka: BMW
// index.js:22 Элемент по ключу color: white
// index.js:22 Элемент по ключу type: sedan
// index.js:22 Элемент по ключу speed: 250
// index.js:22 Элемент по ключу fuel: 50
// index.js:22 Элемент по ключу isNew: true
// index.js:22 Элемент по ключу passagers: 
// boby,obi,doby




// Класы - конструкции 
// можно создать с помощью функции:
function Car(marka, type, fuel, speed){
    this.marka = marka;
    this.type = type;
    this.fuel = fuel;
    this.speed = speed;
};
// это мы создали пока только что клас Car;

// чтобы создать обьект класса Car:
let bmw = new Car('X6', 'Jeep', 50, 320);
console.log(bmw.marka);
// X6

let WV = new Car('polo', 'sedan', 30, 220);
// Создали еще один обьект

// поменять значение характеристики 
WV.marka = 'pasat';

// класс можно создать на основе ключевого
// слова class;
// внутри класса создается конструктор который
// соответствует созданию класа через функцию;
// внутри класса мы можем так же создавать 
// другие функции которые могут принимать 
// какие-то параметры, а могут вообще 
// не принимать 
// никакие параметры;



class Cars {
    constructor(marka, type, fuel, speed){
        this.marka = marka;
        this.type = type;
        this.fuel = fuel;
        this.speed = speed;
    };

    info() {
        console.log('Марка: ' + this.marka +
        ', тип автомобиля: ' + this.type + 
        ', скорость: ' + this.speed + ', бак: '
        + this.fuel);
    };
};

bmw = new Cars('X6', 'Jeep', 50, 320);
bmw.info();
// Марка: X6, тип автомобиля: Jeep,
//  скорость: 320, бак: 50

// можно добавить свою характеристику, например
bmw.weight = 1800;