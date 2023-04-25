// spoiler
$(document).ready(function() {
    $('.item-title').click(function(event) {
        if($('.block').hasClass('one')) {
            $('.item-title').not($(this)).removeClass('active');
            $('.item-text').not($(this).next()).slideUp(300);
             }
    $(this).toggleClass('active').next().slideToggle(300);
            });
        }); 