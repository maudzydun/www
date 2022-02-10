// Proxy 

// Работа с обьектами
let car = {
    model: "BMW",
    spped: 230,
    weight: 1.3
};

const prox = new Proxy(car, {
    get(target, prop) { //получение значения
        if(prop === "model")
            console.log("Модель Вам не узнать")
    else 
        return target[prop]
    },

    set(target, prop, value) { // установка значения
        if(["color", "height", "width", "speed"].indexOf(prop) !== -1) // если значение одной из этих характеристик мы попытаемся установить - в консоль будет выброшено уведомление
        throw Error(`Значение ${prop} для обьекта ${target} устанавливать запрещено`);

        if(prop === "model" && value === "Audi") 
            target[prop] = value
        else
            console.error("Такое установить нельзя!")
    },

    has(target, prop) { // переписываем такую функцию как узнать есть ли обьект in списке
        if (prop == "color")
            return true
    },

    deleteProperty(target, prop) { //будет срабатывать каждый раз когда мы будем пытаться удалить какой либо ключ из обьекта
        if (prop !== "model") // если ключ не модель - мы можем удалить этот ключ
            delete target[prop]
        else
            throw Error("Модель удалить нельзя!")
    }, // delete prox.model - "Модель удалить нельзя!"
});

////////////////////////////////////////
// Работа с функциями
const carMove = () => 'yes, we are moving';

const proxMove = new Proxy(carMove, {
    apply(target, thisArg, argArray) {
        return target().toUpperCase()
    }
}) 

console.log(proxMove())

//////////////////////////////////////////
// На практике
const user = {
    first: "John",
    last: "Doe",
    age: 23
};

const person = new Proxy (user, {
    get(target, prop) {
        if (!(prop in target)) {
            return prop.split('_').map(function (part){
                return target[part]
            }).join(' ')
        } else {
            return target[prop]
        }
    }
})

console.log(person.first_last)
// John Doe

console.log(person.last_first_age)
// Doe John 23