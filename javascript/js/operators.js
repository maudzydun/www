let x = 10;
let y = 20;
let res;

console.log(x + " " + y);
// 10 20

console.log(x + y);
// 30

res = x + y;
console.log(res);
// 30

res = x - y;
console.log(res);
// -10

res = x * y;
console.log(res);
// 200

res = x / y;
console.log(res);
// 0.5

res = x % y;
console.log(res);
// 10 остаток от деления

console.log(x / 0)
// Infinity она же бесконечность

res = x + y;
res += 15;
// 45

res = x + y;
res -= 15;
// 15

res = x + y;
res /= 15;
// 2

res = x + y;
res *= 15;
// 450

res = x + y;
res %= 15;
// 0

x++;
console.log(x);
// 11 , но если я прописую ++
// внутри лог - не работает

x--;
// 10 

x = -x;
// -10

x = +x
// -10 чтобы поменять знак "-"
// минус на минус дает плюс

res = 5;
res = y - res;
// 20 - 5 = 15

res = y - --res;
// 20 - (15-1) = 6

res = x - ++res;
// 10 - (6+1) = 3 

console.log("Результат" + x - y);
// NaN

console.log("Результат" + x + y);
// Результат-1020

console.log("Результат" + (x - y));
// Результат-30

console.log("Рез" + ' Привет' + "В");
// Рез ПриветВ
