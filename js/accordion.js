
$(document).ready(function() {
    var navHeight = 0;
    $('.accordion-item').on('click', function() {
        var buttonTop = $(this).offset().top;
        $("html, body").animate({
            scrollTop: buttonTop - navHeight
        }, 300);
    });
});