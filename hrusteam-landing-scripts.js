$(window).scroll(function(e) {
    var moveSlow = $(window).scrollTop()/25;
    var moveFast = $(window).scrollTop()/8;
    $('.js-cross-slow').css({"margin-top" : moveSlow});
    $('.js-cross-fast').css({"margin-top" : moveFast});
});


$(window).scroll( function(){
    var top_of_object = $('.js-trigger').offset().top;
    var top_of_window = $(window).scrollTop();
    var mq = window.matchMedia( "(min-width: 750px)" );
    if( top_of_window > top_of_object && mq.matches){
        $('.js-screen-one').addClass("js-move-screen-one");
        $('.js-screen-two').addClass("js-move-screen-two");
        $('.js-screen-four').addClass("js-move-screen-four");
        $('.js-screen-five').addClass("js-move-screen-five");
    }
});