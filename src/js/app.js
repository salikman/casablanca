import * as flsFunctions from "./modules/functions.js";
import * as lazyLoad from "./modules/lazyload.js";

flsFunctions.isWebp();
lazyLoad.lazyLoad();

AOS.init({
    once: true
});

$(function() {

    $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });

});

$(document).ready(function(){
    $('.tabs__buttons li').click(function(e){
        e.preventDefault()
        var buttonHeight = $(this).outerHeight(true);
        var buttonIndex = $(this).index();
        var scrollPosition = buttonHeight * buttonIndex;

        $('.tabs__buttons').animate({ scrollTop: scrollPosition }, (110 + 28 + 28));

        var tab_id = $(this).index();
        $('.tabs__buttons li').removeClass('active');
        $(this).addClass('active');
        $('.tabs__content').removeClass('active');
        $('.tabs__content').eq(tab_id).addClass('active');
    });
});

///////////////////////////
// Btn nav collapse
$('.header__collapse').on('click', function() {
    $('.header').toggleClass('open');
    $('body').toggleClass('compensate-for-scrollbar')
});
