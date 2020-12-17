(function () {
    var $target = $('.anime, .anime-dir'),
        animationClass = 'anime-start',
        offset = $(window).height() * 0.8;

    function animeScroll() {
        var documentTop = $(document).scrollTop();

        $target.each(function () {
            var itemTop = $(this).offset().top;
            if (documentTop > itemTop - offset) {
                $(this).addClass(animationClass);
            } else {
                $(this).removeClass(animationClass);
            }
        })
    }

    animeScroll(1);

    $(document).scroll(function () {
        animeScroll();
    })
}());

$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll > 1000) {
        $('.vertical-text').addClass('red');
        $('.malito').addClass('red');
        $('.sred').addClass('red');
        $('.ul').addClass('red');
    } else {
        $('.vertical-text').removeClass('red');
        $('.malito').removeClass('red');
        $('.sred').removeClass('red');
        $('.ul').removeClass('red');
    }
});

$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll > 1558) {
        $('.sstr').addClass('str');
        $('label li').addClass('li-menu');
    } else {
        $('.sstr').removeClass('str');
        $('label li').removeClass('li-menu');
    }
});

$('.nav a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top;

    $('html, body').animate({
        scrollTop: targetOffset - 0
    }, 500);
});

$('input:checkbox').change(function () {
    if ($(this).is(":checked")) {
        $('.nav').addClass("show");
    } else {
        $('.nav').removeClass("show");
    }
});

$(".anc").click(function () {
    $(".nav").removeClass("show");
    $('#chec').prop('checked', false);
});

$(".overlay").click(function () {
    $(".nav").removeClass("show");
    $('#chec').prop('checked', false);
});
