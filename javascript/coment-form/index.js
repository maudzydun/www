let btnForm = document.querySelector('#coments-form button');
// выбираем кнопку в форме коментс форм и записываем ее в переменную

let countComments = 0; 
// переменная в которую будем помещать количество комментариев

let idComent = 0;

btnForm.onclick = function() {
    
    // внутри этой функции мы будем обращаться к полю имя и полю где мы вводим комментарий
    let form = document.querySelector('#coments-form');
    if(form.name.value.length < 3) {
        document.querySelector('#error').innerHTML = 'Длина имени не меньше 3-х символов';
        // form.coment.value - берем данные из поля у которого name="coment"
        return false;
        // чтобы дальше функция не обрабатывалась возвращаем значение false , что позволяет нам вернуть какое-то значение , а так же выйти из функции, если будет такая ошибка - код который дальше мы прописываем - не будет обрабатываться
    } else if(form.coment.value.length < 10){
        document.querySelector('#error').innerHTML = 'Длина сообщения не меньше 10-х символов';
        return false;
    };
    
    idComent++;

    document.querySelector('#error').innerHTML = '';
    // если мы дошли до этого поля - значит поле с ошибками мы очищаем

    // 
    // Установим новое значение для подсчета комментариев
    if(countComments == 0) {
        document.querySelector('#coments').innerHTML = "";
    };

    countComments ++;
    document.querySelector('.count-com').innerHTML = countComments;

    // Создаем блок который будет содержать значения которые ввел пользователь и этот html блок мы будем добавлять в блок коментс id="coments"
    let newComent = "<div class='coment' id='block-" + 
    idComent + "'>" +
        "<span class='delete' onclick='delCom(" + idComent + 
        ")'>&times;</span>" +
        "<p class='name'>" + form.name.value +"</p>" +
        "<p class='mess'>" + form.coment.value +"</p>" +
    "</div>";
    // Создали обычную строку в которой хранится значение нашего комментария
    
    // для вставки такого большого куска кода мы уже не можем исспользовать .innerHTML . Для такого большого куска кода мы воспользуемся такой функцией как ..insertAdjacentHTML. Эта функция принимает 2 параметра: 1- тип как мы будем вставлять данные; 2- Тот код который мы будем помещать внутрь самого блока
    document.querySelector('#coments')
        .insertAdjacentHTML('afterbegin', newComent);

    // afterbegin - говорит о том что наш новый комментарий будет вставляться в начало нашего блока 
    // beforeend - тоже параметр для функции ..insertAdjacentHTML - каждый комментарий вставляется в конец блока

    // 
    // Очистка формы 
    form.coment.value = '';

}

function delCom(id) {
    document.querySelector('#block-' + id).remove();
    
    countComments--;
    document.querySelector('.count-com').innerHTML = countComments;

    if(countComments == 0){
        document.querySelector('#coments').innerHTML = "Пока комментариев нет";
    };
};