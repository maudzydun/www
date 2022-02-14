$(document).scroll(function() {
    if ($(document).width() < 1024)
        return false;
        // если ширина экрана меньше 1024 пискселя ничего не будет срабатывать
    
    if($(document).scrollTop() > $('.full-page').height() / 2){
        $('header').addClass('fixed');
        // если скрол от верха больше чем половина высоты блока фул пейдж с котиком добавляем шапку
    } else {
        $('header').removeClass('fixed');
        // если меньше - удаляем ее
    }
});

$('.up-btn').on('click', function(){
    $("html, body").animate({
        scrollTop: 0
    }, 'slow')
});

$('#show-menu').on("click", function() {
    $('#hidden-menu').animate({
        "right": 0
    }, 500);
});

$('#hidden-menu .close').on("click", function() {
    $('#hidden-menu').animate({
        "right": "-300px"
    }, 200);
});

$(document).ready(function() {
    $('#slider').slick({
        dots: false,
        prevArrow: '<div class="arrow-prev"><i class="fa-solid fa-arrow-left"></div>',
        nextArrow: '<div class="arrow-next"><i class="fa-solid fa-arrow-right"></div>',
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,

    });
})