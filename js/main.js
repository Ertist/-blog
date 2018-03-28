;$(function () {
    'use strict';
    var asiderbar = $('#asidebar'),  //选择侧栏
        mask = $('#mask'),
        bar_trigger = $('#bar_trigger'),
        back_button = $('.return-top');
        function inasiderbar() {
            mask.fadeIn();
            asiderbar.css('right', 0);
        }
        function outasiderar() {
            mask.fadeOut();
            asiderbar.css('right', -asiderbar.width());
        }

    bar_trigger.on('click', inasiderbar);
    mask.on('click', outasiderar);
    back_button.on('click', function () {
        $('html,body').animate({
            scrollTop:0
        }, 800)
    });
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > $(window).height()){
            back_button.fadeIn();
        }else
            back_button.fadeOut();
    })
})