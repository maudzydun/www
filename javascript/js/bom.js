let print = console.log
// Окружение BOM 
// window 
print(window.innerWidth);
// Ширина экрана
print(window.innerHeight);
// высота экрана
window.open('https://rt.pornhub.com/')
// при обновлении открывается новая вкладка
// если прописать без кавычек - локал сервер
window.open("#", "width=500", "height=150");
// если указать параметры высоты и ширины - ссылка откроется в новом окне

// navigator
print(navigator.userAgent);
// выводит информацию о пользователе и о его системе 
print(navigator.platform);
// выводит данные на какой платформе работает пользователь

// location
print(location.href);
// выводит локацию где мы находимся
// перезагружает страничку , надо быть осторожнее так как делает это постоянно, лучше всего запихнуть его в функцию 
setTimeout(function() {
    location.reload();
}, 100000);

// location.href = 'https://itproger.com/intensive/python#13';
// мы можем прописать на какую страничку мы переходим
// эта ерунда не дает нам находится на нашей страничке - поэтому закоментируем

