// создаем функцию для нашей ссылки onclick="clickHref()"
function clickHref() {
    alert("Привет из JS функции")
};

// создаем функцию для нашей ссылки onclick="clickA()"
function clickA() {
    document.querySelector("#myA").style.display = 'none'
};
// сделаем так чтобы наш элемент перестал отображаться при нажатии на ссылку

// создаем функцию для нашей ссылки onclick="clickText"
function clickText() {
    let x = document.querySelector('#clickP');
    x.style.color = 'blue';
    x.style.border = '5px solid red';
    x.style.borderRadius = '15px';
    x.style.pading = '10px';
    x.style.backgroundColor = 'yellow';
};

// при нажатии на каждый элемент списка будет меняться цвет какого-то селектора например
function changeColor(selector) {
    let x = document.querySelector(selector);
    x.style.color = 'green';
};

// изображение будет скрыто при двойном клике благодаря ondblclick
function imgHide() {
    document.querySelector('img').style.display = 'none';
};

function cColor(selector, color) {
    let x = document.querySelector(selector);
    x.style.color = color;
};

// чтобы посмотреть список всех доступных событий набираем в гугл: Атрибуты HTML -событий

function fokusPokus () {
    let x = document.querySelector('#fokusP');
    x.style.backgroundColor = '#333';
    x.style.color = 'white';
    x.style.pading = '10px';
};

function fokusaNema () {
    let x = document.querySelector('#fokusP');
    x.style.backgroundColor = 'white';
    x.style.color = 'green';
    x.style.pading = '0px';
};

function onMouse (color) {
    let x = document.querySelector('#fokusP');
    x.style.backgroundColor = color;
};



// можно создать переменную с селектором выбора и обращаться таким образом к нему
let x = document.querySelector('span');
x.onclick = function () {console.log('clickspan');};
// и таким образом будет правильнее прописывать все события так как весь код JS будет хранится в одном файле 

// те же события можно применять и ко всему окну
window.onclick = function () {console.log('click');};
// при нажатии мышкой в консоль будет выводится слово клик

// onresize - если ширина или высота окна будет изменятся - будет вызываться это событие
window.onresize = function() {console.log('resizing')};
// и в консоль будет каждый раз выводится сообщение resizing (много много раз)

// onload - вызывается тогда когда страничка полностью загрузилась 
window.onload = function() {console.log('load')};

// onscroll - когда делаешь скрол мышкой
window.onscroll = function() {console.log('scrol')};

// oninput - когда вводишь текст в поле инпута или текстареа 
let txtArea = document.querySelector('textarea');
txtArea.oninput = function() {console.log('input')};

// ---------------------------------------
// Создать обработчик событий
// создаем селектор для нашего дива и запихиваем его в переменную блок
let block = document.querySelector('div.block');
// создаем функцию которая принимает как параметр - селектор и меняет текстовое поле внутри тега
function headler() {
    block.innerHTML = 'Новый текст';
};
// вешаем обработчик события на нашу переменную
block.addEventListener('click', headler);
// первый параметр это события которое мы отслежываем (можно прописывать все события которые мы изучили и которые есть в документации без приставки on в начале названия события)
// второй параметр - функция - что будет происходить при событии

block.addEventListener('mouseover', headler);
// ну и можно подставлять в такие конструкции разные события например при наведении 

// можно еще вот так делать 
block.addEventListener('mouseout', function(){
    block.innerHTML = 'Старый текст';
});



// мы так же можем удалить обработчик событий 
block.removeEventListener('mouseover', headler);
// таким образом теперь когда мы будем наводить мышку - текст меняться не будет 
// в removeEventListener внутри функцию создавать можно , но в таком случае наш ремувер будет работать некоректно