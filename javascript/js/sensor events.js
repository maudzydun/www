// в первую очередь создаем переменную в которую и помещаем наш черный круг
let tap = document.getElementById('tap');

// событие touchstart вызывается при старте прикосновения
window.addEventListener('touchstart' , function(e){
    tap.style.background ='red';
});

// событие touchend вызывается при окончании прикосновения
window.addEventListener('touchend' , function(e){
    tap.style.background ='silver';
});

// событие touchmove позволяет отследить где сейчас находится палец и отследить его координаты
window.addEventListener('touchmove' , function(e){
    tap.style.left = e.targetTouches[0].pageX + 'px';
    tap.style.top = e.targetTouches[0].pageY + 'px';
});

// .targetTouches[0] - из масива таргет точес (масив который отслеживает все нажатия на эран, ведь это может быть и несколько пальцев сразу) берем прикосновение первого пальца - первый элемент
// и для этого прикосновения устанавливаем координаты относительно самой странички