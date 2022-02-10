localStorage.setItem("name", "Alex");
console.log(localStorage.getItem("name"));

localStorage.clear();
localStorage.removeItem("name");

console.log(localStorage.key(0)); // Выводит название клча по индексу 0
