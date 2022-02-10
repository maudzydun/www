function* generator() {
    yield "Первое значение";
    yield "Второе значение";
    yield "Третье значение";
    yield "Четвертое значение";
    yield "Пятое значение";
};

let forGen = generator();

console.log(forGen.next());
// {value: 'Первое значение', done: false}
console.log(forGen.next());
// {value: 'Второе значение', done: false}
console.log(forGen.next());
// {value: 'Третье значение', done: false}
console.log(forGen.next());
// {value: 'Четвертое значение', done: false}
console.log(forGen.next());
// {value: 'Пятое значение', done: false}

function* generator2() {
    for(let i = 1; i <= 4; i++)
        yield `${i} Значение`;
};

forGen = generator2();

console.log(forGen.next());
// {value: '1 Значение', done: false}
console.log(forGen.next());
// {value: '2 Значение', done: false}
console.log(forGen.next().value);
// 3 Значение
console.log(forGen.next().done);
// false


// Еще один способ создания генератора
let obj = {
    generator3 () {
        let i = 0;
        return {
            next() {
                return {value: ++i, done: false}
            }
        }
    }
}

let gen = obj.generator3();

console.log(gen)
// {next: ƒ}
console.log(gen.next())
// {value: 1, done: false}
console.log(gen.next())
// {value: 2, done: false}