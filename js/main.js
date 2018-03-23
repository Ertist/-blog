;$(function () {
    'use strict';
    var asiderbar = $('#asidebar'),  //选择侧栏
        mask = $('#mask'),
        bar_trigger = $('#bar_trigger');
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
})