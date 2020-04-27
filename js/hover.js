$(document).ready(function() {
    $('.photo1').hover(function() {
       $(this)
       .find('.p1')
       .stop()
       .animate({left: '0px'},{duration:1600,easing:'easeOutBounce'});
    }, function() {
        $(this)
        .find('.p1')
        .stop()
        .animate({left:'-270px'},{duration:1600, easing:'easeOutBack'});

    });
});